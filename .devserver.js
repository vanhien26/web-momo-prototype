const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
  '.map': 'application/json; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.md': 'text/markdown; charset=utf-8',
};

let rewrites = [];
try {
  const cfg = JSON.parse(fs.readFileSync(path.join(ROOT, 'vercel.json'), 'utf8'));
  if (Array.isArray(cfg.rewrites)) rewrites = cfg.rewrites;
} catch (_) {}

function applyRewrite(pathname) {
  for (const r of rewrites) {
    if (!r.source || !r.destination) continue;
    if (r.source.includes(':path*')) {
      const base = r.source.replace('/:path*', '');
      if (pathname === base || pathname.startsWith(base + '/')) {
        return r.destination.replace('/:path*', '');
      }
    } else if (r.source.includes(':')) {
      // e.g. /hang-xe/:brand/:model
      const pattern = r.source.replace(/:[a-zA-Z0-9_]+/g, '[^/]+');
      const regex = new RegExp('^' + pattern + '$');
      if (regex.test(pathname)) {
        return r.destination;
      }
    } else if (pathname === r.source) {
      return r.destination;
    }
  }
  return null;
}

function safeJoin(root, reqPath) {
  const decoded = decodeURIComponent(reqPath.split('?')[0]);
  const resolved = path.normalize(path.join(root, decoded));
  if (!resolved.startsWith(root)) return null;
  return resolved;
}

function send(res, status, body, headers = {}) {
  res.writeHead(status, headers);
  res.end(body);
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  let pathname = url.pathname;

  const rewritten = applyRewrite(pathname);
  if (rewritten) pathname = rewritten;

  if (pathname === '/') pathname = '/index.html';

  let filePath = safeJoin(ROOT, pathname);
  if (!filePath) return send(res, 403, 'Forbidden');

  fs.stat(filePath, (err, stat) => {
    if (err) {
      const htmlTry = filePath + '.html';
      fs.stat(htmlTry, (e2, s2) => {
        if (e2 || !s2.isFile()) return send(res, 404, 'Not Found');
        serveFile(htmlTry, res);
      });
      return;
    }
    if (stat.isDirectory()) {
      const indexPath = path.join(filePath, 'index.html');
      fs.stat(indexPath, (e3, s3) => {
        if (e3 || !s3.isFile()) return send(res, 404, 'Not Found');
        serveFile(indexPath, res);
      });
      return;
    }
    serveFile(filePath, res);
  });
});

function serveFile(filePath, res) {
  const ext = path.extname(filePath).toLowerCase();
  const type = MIME[ext] || 'application/octet-stream';
  fs.readFile(filePath, (err, data) => {
    if (err) return send(res, 500, 'Server Error');
    send(res, 200, data, { 'Content-Type': type, 'Cache-Control': 'no-store' });
  });
}

server.listen(PORT, () => {
  console.log(`[devserver] listening on http://localhost:${PORT}`);
  console.log(`[devserver] root: ${ROOT}`);
});
