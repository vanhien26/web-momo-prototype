/* =========================================================
   cinema-components.js
   Shared render functions + utilities for all Cinema pages
   Depends on: cinema-data.js (for FILMS_NOW, FILMS_SOON etc.)
   ========================================================= */

/* ── UTILITIES ───────────────────────────── */

function slugify(s) {
  return String(s).toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/đ/g, 'd')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function filmHref(movie) {
  return `/cinema/${movie.slug || slugify(movie.title)}`;
}

function icon(name, size) {
  size = size || 16;
  var key = name.split('-').map(function(s) { return s.charAt(0).toUpperCase() + s.slice(1); }).join('');
  if (!window.lucide || !lucide[key]) return '';
  return lucide.createElement(lucide[key], { width: size, height: size, 'stroke-width': 2, style: 'display:inline-block;vertical-align:middle;flex-shrink:0' }).outerHTML;
}

var _toastTimer;
function toast(msg) {
  var el = document.getElementById('toastEl');
  if (!el) return;
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(function() { el.classList.remove('show'); }, 2400);
}

function scrollSection(id, dir) {
  var el = document.getElementById(id);
  if (!el) return;
  var card = el.querySelector('.film-card, .cs-card, .series-card');
  var cardW = card ? card.offsetWidth : 200;
  el.scrollBy({ left: dir * (cardW + 12) * 3, behavior: 'smooth' });
}

/* ── FILM CARD ───────────────────────────── */

/**
 * renderFilmCard(film, opts)
 * opts.showBtn     {boolean} - show "Đặt vé ngay" button (default true)
 * opts.showFormats {boolean} - show format badges (default true)
 * opts.clickAction {string}  - override onclick (default: navigate to film href)
 */
function renderFilmCard(film, opts) {
  opts = opts || {};
  var showBtn = opts.showBtn !== false;
  var showFormats = opts.showFormats !== false;
  var href = filmHref(film);
  var clickAction = opts.clickAction || ("window.location.href='" + href + "'");

  var trailerAction = film.trailer
    ? ("openTrailer('" + film.trailer + "','" + film.title.replace(/'/g, '&#39;') + "')")
    : "toast('Trailer sắp có')";

  var playBtn = '<button class="poster-play" onclick="event.stopPropagation();' + trailerAction + '" aria-label="Xem trailer">'
    + '<svg width="10" height="10" viewBox="0 0 10 12" fill="none"><path d="M0 0l10 6L0 12z" fill="#fff"/></svg>Trailer</button>';

  var formatsHtml = '';
  if (showFormats && film.formats && film.formats.length) {
    formatsHtml = '<div class="film-formats">' + film.formats.map(function(f) {
      return '<span class="film-fmt">' + f + '</span>';
    }).join('') + '</div>';
  }

  var btnHtml = showBtn ? '<button class="film-btn">Đặt vé ngay</button>' : '';

  return '<div class="film-card" onclick="' + clickAction + '">'
    + '<div class="film-poster"><img src="' + film.img + '" alt="' + film.title + '" onerror="this.style.background=\'var(--gray-200)\'"></div>'
    + '<div class="poster-age">' + (film.age || 'P') + '</div>'
    + '<div class="poster-rating">★ ' + film.rating + '</div>'
    + '<div class="film-overlay"></div>'
    + '<div class="film-info">'
    + '<div class="film-title">' + film.title + '</div>'
    + '<div class="film-meta">' + (film.genre || '') + '</div>'
    + formatsHtml
    + btnHtml
    + '</div>'
    + playBtn
    + '</div>';
}

/* ── COMING SOON CARD ────────────────────── */

/**
 * renderComingSoonCard(film)
 * Renders a coming-soon poster card with date, genre, trailer button
 */
function renderComingSoonCard(film) {
  var href = filmHref(film);
  var trailerAction = film.trailer
    ? ("openTrailer('" + film.trailer + "','" + film.title.replace(/'/g, '&#39;') + "')")
    : "toast('Trailer sắp có')";

  var calIcon = icon('calendar', 11) || '📅';

  var formatsHtml = '';
  if (film.formats && film.formats.length) {
    formatsHtml = '<div class="cs-formats">' + film.formats.map(function(f) {
      return '<span class="cs-fmt">' + f + '</span>';
    }).join('') + '</div>';
  }

  var hasImg = film.img && film.img.length > 0;
  return '<div class="cs-card' + (hasImg ? '' : ' no-poster') + '" onclick="window.location.href=\'' + href + '\'">'
    + '<div class="cs-poster">' + (hasImg ? '<img src="' + film.img + '" alt="" onerror="this.closest(\'.cs-card\').classList.add(\'no-poster\')">' : '') + '</div>'
    + '<div class="cs-overlay"></div>'
    + '<div class="cs-info">'
    + '<div class="cs-date">' + calIcon + ' ' + (film.date || '') + '</div>'
    + '<div class="cs-title">' + film.title + '</div>'
    + '<div class="cs-genre">' + (film.genre || '') + '</div>'
    + formatsHtml
    + '<div class="cs-actions">'
    + '<button class="cs-btn" onclick="event.stopPropagation();window.location.href=\'' + href + '\'">Xem chi tiết</button>'
    + '<button class="cs-trailer-btn" onclick="event.stopPropagation();' + trailerAction + '" aria-label="Xem trailer">'
    + '<svg width="10" height="10" viewBox="0 0 10 12" fill="none"><path d="M0 0l10 6L0 12z" fill="#fff"/></svg>Trailer</button>'
    + '</div>'
    + '</div>'
    + '</div>';
}

/* ── TRAILER POPUP ───────────────────────── */

/**
 * injectTrailerPopup()
 * Appends trailer modal HTML to body — call once on page load if page uses trailers
 */
function injectTrailerPopup() {
  if (document.getElementById('trailerOverlay')) return; // already injected
  var html = '<div class="trailer-overlay" id="trailerOverlay" onclick="if(event.target===this)closeTrailer()">'
    + '<div class="trailer-box">'
    + '<div class="trailer-header">'
    + '<div class="trailer-title"><span class="trailer-tag"><svg width="12" height="12" viewBox="0 0 10 12" fill="none"><path d="M0 0l10 6L0 12z" fill="currentColor"/></svg> Trailer</span><span id="trailerTitle"></span></div>'
    + '<button class="trailer-close" onclick="closeTrailer()">✕</button>'
    + '</div>'
    + '<div class="trailer-iframe-wrap"><iframe id="trailerFrame" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>'
    + '<div class="trailer-hint">Nhấn Esc hoặc click ngoài để đóng</div>'
    + '</div>'
    + '</div>';
  document.body.insertAdjacentHTML('beforeend', html);
}

function openTrailer(videoId, title) {
  var overlay = document.getElementById('trailerOverlay');
  if (!overlay) { injectTrailerPopup(); overlay = document.getElementById('trailerOverlay'); }
  document.getElementById('trailerFrame').src = 'https://www.youtube-nocookie.com/embed/' + videoId + '?autoplay=1&rel=0';
  if (title) document.getElementById('trailerTitle').textContent = title;
  overlay.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeTrailer() {
  var overlay = document.getElementById('trailerOverlay');
  if (overlay) overlay.classList.remove('show');
  var frame = document.getElementById('trailerFrame');
  if (frame) frame.src = 'about:blank';
  document.body.style.overflow = '';
}

// Close trailer on Esc key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeTrailer();
});
