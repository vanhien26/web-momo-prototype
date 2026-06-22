#!/usr/bin/env python3
"""Static development server with Vercel-like clean URL support."""

from __future__ import annotations

import argparse
import json
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path, PurePosixPath
from urllib.parse import unquote, urlsplit


ROOT = Path(__file__).resolve().parents[1]


def load_rewrites() -> dict[str, str]:
    config_path = ROOT / "vercel.json"
    if not config_path.exists():
        return {}
    config = json.loads(config_path.read_text(encoding="utf-8"))
    return {
        item["source"]: item["destination"]
        for item in config.get("rewrites", [])
        if ":" not in item.get("source", "")
    }


REWRITES = load_rewrites()


class CleanUrlHandler(SimpleHTTPRequestHandler):
    def translate_path(self, path: str) -> str:
        request_path = unquote(urlsplit(path).path)
        request_path = REWRITES.get(request_path, request_path)

        if request_path in {"", "/"}:
            return str(ROOT / "index.html")

        parts = [
            part
            for part in PurePosixPath(request_path).parts
            if part not in {"/", ".", ".."}
        ]
        candidate = ROOT.joinpath(*parts).resolve()
        if candidate != ROOT and ROOT not in candidate.parents:
            return str(ROOT / "404.html")

        if candidate.is_file():
            return str(candidate)
        if not candidate.suffix and candidate.with_suffix(".html").is_file():
            return str(candidate.with_suffix(".html"))
        if candidate.is_dir() and (candidate / "index.html").is_file():
            return str(candidate / "index.html")
        return str(candidate)

    def end_headers(self) -> None:
        self.send_header("Cache-Control", "no-store")
        super().end_headers()


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--port", type=int, default=4321)
    args = parser.parse_args()

    server = ThreadingHTTPServer(("", args.port), CleanUrlHandler)
    print(f"MoMo prototype: http://localhost:{args.port}/lab", flush=True)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
