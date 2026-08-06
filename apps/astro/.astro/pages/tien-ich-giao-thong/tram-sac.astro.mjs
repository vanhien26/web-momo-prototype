import { c as createComponent, e as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_BMOddyS3.mjs';
import 'piccolore';
import { $ as $$VehicleHub } from '../../chunks/VehicleHub_Msovdq2n.mjs';
/* empty css                                      */
/* empty css                                       */
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$TramSac = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "VehicleHub", $$VehicleHub, { "title": "Tr\u1EA1m S\u1EA1c Xe \u0110i\u1EC7n | MoMo Ti\u1EC7n \xCDch Giao Th\xF4ng", "description": "T\xECm tr\u1EA1m s\u1EA1c xe \u0111i\u1EC7n g\u1EA7n b\u1EA1n: c\u1ED5ng tr\u1ED1ng theo th\u1EDDi gian th\u1EF1c, lo\u1EA1i \u0111\u1EA7u c\u1EAFm, c\xF4ng su\u1EA5t kW, gi\xE1/kWh v\xE0 thanh to\xE1n MoMo kh\xF4ng ti\u1EC1n m\u1EB7t.", "theme": "energy" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(["   ", `<div class="filter-bar"> <div class="filter-bar-inner" id="filterBar"></div> </div>  <div class="split"> <!-- LIST PANE --> <section class="list-pane"> <div class="list-scroll"> <div class="list-meta"> <div> <div class="list-title" id="listTitle">8 tr\u1EA1m s\u1EA1c</div> <div class="list-sub" id="listSub">TP. H\u1ED3 Ch\xED Minh \xB7 T\u1EA5t c\u1EA3</div> </div> <label class="sort-wrap"> <select id="sortSelect" onchange="renderList()"> <option value="dist">G\u1EA7n nh\u1EA5t</option> <option value="kw">C\xF4ng su\u1EA5t cao nh\u1EA5t</option> </select> </label> </div> <div class="station-list" id="stationList"></div> </div> <!-- DETAIL slides over list --> <aside class="detail-modal" id="detailModal"> <div class="detail-topbar"> <button class="detail-back" id="detailBack"> <i data-lucide="chevron-left" width="14" height="14"></i> </button> <div class="detail-topbar-name" id="detailTopbarName">Chi ti\u1EBFt tr\u1EA1m</div> </div> <div class="detail-scroll" id="detailContent"></div> <div class="dt-cta"> <div style="display:flex;gap:8px;margin-bottom:8px"> <button class="dir-cta" onclick="handleDir()"> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>
Ch\u1EC9 \u0111\u01B0\u1EDDng
</button> <button class="save-cta" onclick="handleSave(this)"> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
L\u01B0u
</button> </div> <button class="momo-cta" onclick="handlePay()"> <span class="momo-cta-logo"><img src="https://homepage.momocdn.net/fileuploads/svg/momo-file-240411162904.svg" alt="MoMo"></span>
Thanh to\xE1n qua MoMo
</button> </div> </aside> </section> <!-- MAP --> <div class="map-pane"> <div id="map"></div> <div class="map-count-badge"> <span class="map-count-dot"></span> <span id="mapCountLabel">8 tr\u1EA1m \xB7 TP.HCM</span> </div> <div class="map-ctrl"> <button class="map-ctrl-btn" id="ctrlZoomIn" title="Ph\xF3ng to"> <i data-lucide="plus" width="14" height="14"></i> </button> <button class="map-ctrl-btn" id="ctrlZoomOut" title="Thu nh\u1ECF"> <i data-lucide="minus" width="14" height="14"></i> </button> </div> </div> </div>  <div class="card-strip" id="cardStrip" style="display:none"> <div class="card-strip-track" id="cardStripTrack"></div> </div>  <aside class="detail-modal" id="detailModal"> <div class="detail-drag-handle"></div> <div class="detail-topbar"> <button class="detail-back" id="detailBack"> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg> </button> <div class="detail-topbar-name" id="detailTopbarName">Chi ti\u1EBFt tr\u1EA1m</div> </div> <div class="detail-scroll" id="detailContent"></div> <div class="dt-cta"> <div style="display:flex;gap:8px;margin-bottom:8px"> <button class="dir-cta" onclick="handleDir()"> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>
Ch\u1EC9 \u0111\u01B0\u1EDDng
</button> <button class="save-cta" onclick="handleSave(this)"> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
L\u01B0u
</button> </div> <button class="momo-cta" onclick="handlePay()"> <span class="momo-cta-logo"><img src="https://homepage.momocdn.net/fileuploads/svg/momo-file-240411162904.svg" alt="MoMo"></span>
Thanh to\xE1n qua MoMo
</button> </div> </aside> <script>
// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
// DATA
// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
const NETWORKS = {
  vgreen:  { label:'V-Green',    color:'#00A859', bg:'#E8F5EE', border:'#86efac' },
  evn:     { label:'EVN ChargeV',color:'#2563EB', bg:'#EFF6FF', border:'#bfdbfe' },
  evme:    { label:'EVME',       color:'#D97706', bg:'#FFFBEB', border:'#fde68a' },
  eon:     { label:'Eon Electric',color:'#7C3AED',bg:'#F5F3FF', border:'#c4b5fd' },
};

const STATIONS = [
  {
    id:'s1', name:'V-Green \xB7 Vincom Center \u0110\u1ED3ng Kh\u1EDFi',
    network:'vgreen', address:'72 L\xEA Th\xE1nh T\xF4n, Q.1, TP.HCM',
    dist:0.3, lat:10.7769, lng:106.7009,
    ports:[
      { type:'CCS2', kw:120, avail:2, total:2 },
      { type:'CCS2', kw:60,  avail:1, total:2 },
    ],
    pricePerKwh:3858, hours:'06:00 - 22:00',
    amenities:['wifi','cafe','restroom'], rating:4.7, reviews:34,
  },
  {
    id:'s2', name:'V-Green \xB7 Landmark 81',
    network:'vgreen', address:'208 Nguy\u1EC5n H\u1EEFu C\u1EA3nh, B\xECnh Th\u1EA1nh',
    dist:2.1, lat:10.7947, lng:106.7218,
    ports:[
      { type:'CCS2', kw:300, avail:2, total:2 },
      { type:'CCS2', kw:120, avail:3, total:4 },
      { type:'Type 2 AC', kw:22, avail:4, total:6 },
    ],
    pricePerKwh:3858, hours:'24/7',
    amenities:['wifi','cafe','restroom','shopping'], rating:4.9, reviews:87,
  },
  {
    id:'s3', name:'EVN ChargeV \xB7 Bitexco Financial',
    network:'evn', address:'2 H\u1EA3i Tri\u1EC1u, Q.1, TP.HCM',
    dist:0.5, lat:10.7716, lng:106.7038,
    ports:[
      { type:'Type 2 AC', kw:22, avail:2, total:4 },
    ],
    pricePerKwh:3560, hours:'07:00 - 21:00',
    amenities:['wifi','restroom'], rating:4.2, reviews:19,
  },
  {
    id:'s4', name:'EVME \xB7 Crescent Mall',
    network:'evme', address:'101 T\xF4n D\u1EADt Ti\xEAn, Q.7, TP.HCM',
    dist:5.6, lat:10.7295, lng:106.7186,
    ports:[
      { type:'CCS2', kw:60,  avail:0, total:2 },
      { type:'Type 2 AC', kw:11, avail:2, total:4 },
    ],
    pricePerKwh:4200, hours:'10:00 - 22:00',
    amenities:['wifi','cafe','restroom','shopping'], rating:4.1, reviews:12,
  },
  {
    id:'s5', name:'Eon Electric \xB7 Vivo City',
    network:'eon', address:'1058 Nguy\u1EC5n V\u0103n Linh, Q.7, TP.HCM',
    dist:6.8, lat:10.7263, lng:106.7116,
    ports:[
      { type:'CCS2', kw:120, avail:3, total:4 },
      { type:'Type 2 AC', kw:22, avail:2, total:4 },
    ],
    pricePerKwh:4000, hours:'09:00 - 22:00',
    amenities:['wifi','cafe','restroom','shopping'], rating:4.5, reviews:28,
  },
  {
    id:'s6', name:'V-Green \xB7 S\xE2n bay T\xE2n S\u01A1n Nh\u1EA5t',
    network:'vgreen', address:'\u0110\u01B0\u1EDDng Tr\u01B0\u1EDDng S\u01A1n, T\xE2n B\xECnh',
    dist:7.2, lat:10.8184, lng:106.6556,
    ports:[
      { type:'CCS2', kw:150, avail:4, total:6 },
      { type:'CCS2', kw:60,  avail:1, total:4 },
    ],
    pricePerKwh:3858, hours:'24/7',
    amenities:['wifi','restroom'], rating:4.6, reviews:52,
  },
  {
    id:'s7', name:'V-Green \xB7 Estella Place',
    network:'vgreen', address:'88 Song H\xE0nh, Q.2, TP.HCM',
    dist:4.3, lat:10.7931, lng:106.7505,
    ports:[
      { type:'CCS2', kw:60,  avail:0, total:4 },
      { type:'Type 2 AC', kw:11, avail:3, total:4 },
    ],
    pricePerKwh:3858, hours:'08:00 - 22:00',
    amenities:['wifi','cafe','restroom','shopping'], rating:4.3, reviews:21,
  },
  {
    id:'s8', name:'EVN ChargeV \xB7 Lotte Mart Nam S\xE0i G\xF2n',
    network:'evn', address:'469 Nguy\u1EC5n H\u1EEFu Th\u1ECD, Q.7, TP.HCM',
    dist:5.9, lat:10.7244, lng:106.7034,
    ports:[
      { type:'Type 2 AC', kw:22, avail:4, total:6 },
      { type:'CCS2', kw:60,  avail:1, total:2 },
    ],
    pricePerKwh:3560, hours:'07:00 - 22:00',
    amenities:['wifi','restroom','shopping'], rating:4.4, reviews:16,
  },
  {
    id:'s9', name:'V-Green \xB7 Aeon Mall T\xE2n Ph\xFA',
    network:'vgreen', address:'30 B\u1EDD Bao T\xE2n Th\u1EAFng, T\xE2n Ph\xFA',
    dist:8.1, lat:10.7939, lng:106.6286,
    ports:[
      { type:'CCS2', kw:120, avail:0, total:4 },
      { type:'Type 2 AC', kw:22, avail:0, total:4 },
    ],
    pricePerKwh:3858, hours:'09:00 - 22:00',
    amenities:['wifi','cafe','restroom','shopping'], rating:4.0, reviews:9,
  },
  {
    id:'s10', name:'EVME \xB7 Sunrise City',
    network:'evme', address:'27 Nguy\u1EC5n H\u1EEFu Th\u1ECD, Q.7, TP.HCM',
    dist:5.2, lat:10.7312, lng:106.7012,
    ports:[
      { type:'CCS2', kw:60,  avail:1, total:4 },
      { type:'Type 2 AC', kw:11, avail:0, total:2 },
    ],
    pricePerKwh:4200, hours:'10:00 - 22:00',
    amenities:['wifi','restroom','shopping'], rating:3.8, reviews:7,
  },
  {
    id:'s11', name:'Eon Electric \xB7 Gigamall Th\u1EE7 \u0110\u1EE9c',
    network:'eon', address:'240A Ph\u1EA1m V\u0103n \u0110\u1ED3ng, Th\u1EE7 \u0110\u1EE9c',
    dist:9.4, lat:10.8472, lng:106.7298,
    ports:[
      { type:'CCS2', kw:120, avail:0, total:2 },
    ],
    pricePerKwh:4000, hours:'09:00 - 22:00',
    amenities:['wifi','cafe','restroom','shopping'], rating:4.2, reviews:5,
    offline: true,
  },
  {
    id:'s12', name:'EVN ChargeV \xB7 Parkson Flemington',
    network:'evn', address:'184 L\xEA \u0110\u1EA1i H\xE0nh, Q.11, TP.HCM',
    dist:3.6, lat:10.7711, lng:106.6656,
    ports:[
      { type:'Type 2 AC', kw:22, avail:2, total:4 },
    ],
    pricePerKwh:3560, hours:'10:00 - 21:30',
    amenities:['wifi','restroom'], rating:4.1, reviews:11,
  },
];

// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
// STATE
// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
const S = { connector:'all', speed:'all', network:'all', selected:null };


function stationMaxKw(st) {
  return Math.max(...st.ports.map(p=>p.kw));
}


function speedTier(kw) {
  if(kw >= 100) return 'ultra';
  if(kw >= 30) return 'fast';
  return 'slow';
}

function speedLabel(kw) {
  if(kw >= 100) return 'Si\xEAu nhanh';
  if(kw >= 30) return 'Nhanh';
  return 'Th\u01B0\u1EDDng';
}

// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
// FILTERS
// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
const CONNECTOR_FILTERS = [
  { id:'all', label:'T\u1EA5t c\u1EA3 \u0111\u1EA7u c\u1EAFm' },
  { id:'CCS2', label:'CCS2 DC' },
  { id:'Type 2 AC', label:'Type 2 AC' },
  { id:'GB/T', label:'GB/T' },
];
const SPEED_FILTERS = [
  { id:'all', label:'M\u1ECDi t\u1ED1c \u0111\u1ED9' },
  { id:'ultra', label:'Si\xEAu nhanh 100kW+' },
  { id:'fast', label:'Nhanh 30-80kW' },
  { id:'slow', label:'Th\u01B0\u1EDDng AC' },
];
const NETWORK_FILTERS = [
  { id:'all', label:'M\u1EA1ng l\u01B0\u1EDBi' },
  ...Object.entries(NETWORKS).map(([id,n])=>({id,label:n.label})),
];

function renderFilters() {
  const bar = document.getElementById('filterBar');
  bar.innerHTML = \`
    \${CONNECTOR_FILTERS.map(f=>\`
      <button class="fchip\${S.connector===f.id?' on':''}" onclick="setConnector('\${f.id}')">\${f.label}</button>
    \`).join('')}
    <div class="fsep"></div>
    \${SPEED_FILTERS.map((f,i)=>i===0?'':
      \`<button class="fchip\${S.speed===f.id?' on':''}" onclick="setSpeed('\${f.id}')">\${f.label}</button>\`
    ).join('')}
    <div class="fsep"></div>
    \${NETWORK_FILTERS.map((f,i)=>i===0?'':
      \`<button class="fchip\${S.network===f.id?' on':''}" onclick="setNetwork('\${f.id}')">\${f.label}</button>\`
    ).join('')}
  \`;
}

function setConnector(id){ S.connector=id; S.selected=null; closeDetail(); renderFilters(); renderList(); fitAll(); }
function setSpeed(id)    { S.speed=id;     S.selected=null; closeDetail(); renderFilters(); renderList(); fitAll(); }
function setNetwork(id)  { S.network=id;   S.selected=null; closeDetail(); renderFilters(); renderList(); fitAll(); }

// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
// FILTERED LIST
// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
function filtered() {
  let list = STATIONS;
  if(S.avail === 'ok') {
    list = list.filter(st=>stationStatus(st)==='ok');
  }
  if(S.connector !== 'all') {
    list = list.filter(st=>st.ports.some(p=>p.type===S.connector));
  }
  if(S.speed !== 'all') {
    const tierKw = {ultra:100, fast:30, slow:0};
    const maxKw = {ultra:9999, fast:99, slow:29};
    list = list.filter(st=>st.ports.some(p=>p.kw>=tierKw[S.speed]&&p.kw<=maxKw[S.speed]));
  }
  if(S.network !== 'all') {
    list = list.filter(st=>st.network===S.network);
  }
  const sort = document.getElementById('sortSelect')?.value || 'dist';
  if(sort==='kw') list=[...list].sort((a,b)=>stationMaxKw(b)-stationMaxKw(a));
  else list=[...list].sort((a,b)=>a.dist-b.dist);
  return list;
}

// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
// RENDER LIST
// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
function portTypeBadge(type) {
  const cls = type==='CCS2'?'ccs2':type==='Type 2 AC'?'ac':'gbt';
  return \`<span class="port-badge \${cls}">\${type}</span>\`;
}

function renderList() {
  const list = filtered();
  const el = document.getElementById('stationList');
  document.getElementById('listTitle').textContent = \`\${list.length} tr\u1EA1m s\u1EA1c\`;
  document.getElementById('listSub').textContent = 'TP. H\u1ED3 Ch\xED Minh \xB7 ' + (S.network==='all'?'T\u1EA5t c\u1EA3 m\u1EA1ng':NETWORKS[S.network]?.label||'');
  document.getElementById('mapCountLabel').textContent = \`\${list.length} tr\u1EA1m \xB7 TP.HCM\`;

  if(!list.length){
    el.innerHTML = \`<div class="empty">
      <div class="empty-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></div>
      <div class="empty-title">Kh\xF4ng t\xECm th\u1EA5y tr\u1EA1m</div>
      <div class="empty-sub">Th\u1EED b\u1ECF b\u1EDBt \u0111i\u1EC1u ki\u1EC7n l\u1ECDc</div>
    </div>\`;
    updateMapMarkers([]);
    return;
  }

  el.innerHTML = list.map(st=>{
    const total = st.ports.reduce((a,p)=>a+p.total,0);
    const maxKw = stationMaxKw(st);
    const net = NETWORKS[st.network];
    const tier = speedTier(maxKw);
    const tierLabel = speedLabel(maxKw);
    const uniqueTypes = [...new Set(st.ports.map(p=>p.type))];

    return \`<div class="s-card\${S.selected===st.id?' active':''}" id="card-\${st.id}"
      onclick="selectStation('\${st.id}')"
      onmouseenter="hoverStation('\${st.id}')"
      onmouseleave="hoverStation(null)">
      <div class="s-card-top">
        <div class="s-network-icon" style="background:\${net.bg};border-color:\${net.border};color:\${net.color}">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
        </div>
        <div class="s-body">
          <div class="s-head">
            <div class="s-name">\${st.name}</div>
            <span class="s-rating">\u2605 \${st.rating}</span>
            <div class="s-dist">\${st.dist} km</div>
          </div>
          <div class="s-addr">\${st.address}</div>
          <div class="s-ports">
            \${uniqueTypes.map(portTypeBadge).join('')}
            <span class="speed-badge \${tier}">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
              \${maxKw}kW \xB7 \${tierLabel}
            </span>
          </div>
        </div>
      </div>
      <div class="s-footer">
        <span style="font-size:10px;font-weight:600;color:var(--muted)">\${total} c\u1ED5ng</span>
        <div class="s-price">\${(st.pricePerKwh).toLocaleString('vi-VN')}<strong>\u0111/kWh</strong></div>
      </div>
      <div class="s-hours-row">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        \${st.hours}
      </div>
    </div>\`;
  }).join('');

  updateMapMarkers(list);
  renderCardStrip(list);
}

// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
// DETAIL PANEL
// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
function selectStation(id) {
  const st = STATIONS.find(s=>s.id===id);
  if(!st) return;
  S.selected = id;
  renderList();

  // update marker
  Object.entries(markerMap).forEach(([sid,{el}])=>{
    el.classList.toggle('active', sid===id);
  });

  // scroll card into view
  const card = document.getElementById('card-'+id);
  card?.scrollIntoView({block:'nearest',behavior:'smooth'});

  // pan map
  map?.flyTo({center:[st.lng,st.lat],zoom:15,duration:600});

  // render detail
  const net = NETWORKS[st.network];
  const amenityLabels = {wifi:'Wi-Fi',cafe:'Cafe',restroom:'Nh\xE0 v\u1EC7 sinh',shopping:'Mua s\u1EAFm'};
  const amenityIcons = {
    wifi:\`<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>\`,
    cafe:\`<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>\`,
    restroom:\`<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>\`,
    shopping:\`<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>\`,
  };

  document.getElementById('detailTopbarName').textContent = st.name;

  document.getElementById('detailContent').innerHTML = \`
    <div class="dt-network">
      <span class="dt-network-badge" style="color:\${net.color};background:\${net.bg};border-color:\${net.border}">\${net.label}</span>
    </div>
    <div class="dt-name">\${st.name}</div>
    <div class="dt-addr">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
      \${st.address}
    </div>

    <div class="dt-section-title">C\u1ED5ng s\u1EA1c</div>
    <div class="dt-ports">
      \${st.ports.map(p=>{
        return \`<div class="dt-port-row">
          <div style="display:flex;align-items:center;gap:7px;flex:none">
            \${portTypeBadge(p.type)}
          </div>
          <div class="dt-port-info">
            <div class="dt-port-type">\${p.kw}kW \xB7 \${speedLabel(p.kw)}</div>
          </div>
          <div class="dt-port-avail">
            <div class="dt-port-count">\${p.total} c\u1ED5ng</div>
          </div>
        </div>\`;
      }).join('')}
    </div>

    <div class="dt-section-title">\u01AF\u1EDBc t\xEDnh chi ph\xED</div>
    <div class="cost-box">
      <div class="cost-box-title">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
        T\xEDnh ph\xED s\u1EA1c \xB7 \${(st.pricePerKwh).toLocaleString('vi-VN')}\u0111/kWh
      </div>
      <div class="cost-inputs">
        <div class="cost-field">
          <label>Pin hi\u1EC7n t\u1EA1i (%)</label>
          <input type="number" id="battNow" value="20" min="0" max="100" oninput="calcCost('\${st.id}')">
        </div>
        <div class="cost-field">
          <label>S\u1EA1c \u0111\u1EBFn (%)</label>
          <input type="number" id="battTarget" value="80" min="0" max="100" oninput="calcCost('\${st.id}')">
        </div>
        <div class="cost-field">
          <label>Dung l\u01B0\u1EE3ng pin (kWh)</label>
          <input type="number" id="battCap" value="42" min="5" max="120" step="0.5" oninput="calcCost('\${st.id}')">
        </div>
        <div class="cost-field">
          <label>Lo\u1EA1i xe</label>
          <select id="carModel" onchange="setCarModel()">
            <option value="42">VinFast VF5 (42kWh)</option>
            <option value="59">VinFast VF6 (59.6kWh)</option>
            <option value="75.3">VinFast VF7 (75.3kWh)</option>
            <option value="87.7">VinFast VF8 (87.7kWh)</option>
            <option value="92">VinFast VF9 (92kWh)</option>
            <option value="58">Hyundai IONIQ 6 (58kWh)</option>
            <option value="77.4">Kia EV6 (77.4kWh)</option>
            <option value="60">BYD Atto 3 (60kWh)</option>
            <option value="0">Kh\xE1c (t\u1EF1 nh\u1EADp)</option>
          </select>
        </div>
      </div>
      <div class="cost-result">
        <span class="cost-result-label">Chi ph\xED d\u1EF1 ki\u1EBFn</span>
        <span class="cost-result-val" id="costResult">-</span>
      </div>
      <div id="costSavings" class="cost-savings-row" style="display:none">
        <span style="font-size:10.5px;font-weight:700;color:var(--gray-600)">Ti\u1EBFt ki\u1EC7m so v\u1EDBi x\u0103ng</span>
        <span id="savingsVal" style="font-size:12px;font-weight:900;color:var(--ev-green);flex:none"></span>
      </div>
      <div class="cost-note" id="costNote">Ch\u01B0a t\xEDnh ph\xED d\u1EEBng qu\xE1 gi\u1EDD. Gi\xE1 \xE1p d\u1EE5ng t\u1EEB 19/3/2024.</div>
    </div>

    <div class="dt-section-title">Th\xF4ng tin tr\u1EA1m</div>
    <div>
      <div class="dt-info-row">
        <span class="dt-info-label">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          Gi\u1EDD m\u1EDF c\u1EEDa
        </span>
        <span class="dt-info-val">\${st.hours}</span>
      </div>
      <div class="dt-info-row">
        <span class="dt-info-label">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          \u0110\xE1nh gi\xE1
        </span>
        <span class="dt-info-val">\${st.rating} \u2605 (\${st.reviews} \u0111\xE1nh gi\xE1)</span>
      </div>
      <div class="dt-info-row">
        <span class="dt-info-label">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 0-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          Ti\u1EC7n \xEDch
        </span>
        <span></span>
      </div>
      <div class="amenity-list">
        \${st.amenities.map(a=>\`
          <span class="amenity-chip">\${amenityIcons[a]||''} \${amenityLabels[a]||a}</span>
        \`).join('')}
      </div>
    </div>
  \`;

  document.getElementById('detailModal').classList.add('open');
  if(isMobile()) scrollCardTo(id);
  calcCost(id);
}

function closeDetail(){
  document.getElementById('detailModal').classList.remove('open');
  S.selected=null;
  Object.values(markerMap).forEach(({el})=>el.classList.remove('active'));
  renderList();
}

document.getElementById('detailBack').onclick=closeDetail;

function setCarModel(){
  const sel = document.getElementById('carModel');
  const kw = parseFloat(sel.value);
  if(kw>0) document.getElementById('battCap').value=kw;
  const id = S.selected;
  if(id) calcCost(id);
}

const GAS_PRICE_PER_LITER = 24700;
const GAS_L_PER_100KM = 8;
const EV_KWH_PER_100KM = 15;

function calcCost(stId){
  const st = STATIONS.find(s=>s.id===stId);
  if(!st) return;
  const now = parseFloat(document.getElementById('battNow')?.value)||0;
  const target = parseFloat(document.getElementById('battTarget')?.value)||80;
  const cap = parseFloat(document.getElementById('battCap')?.value)||42;
  const savingsEl = document.getElementById('costSavings');
  if(target<=now){
    document.getElementById('costResult').textContent='--';
    document.getElementById('costNote').textContent='Pin \u0111\xEDch ph\u1EA3i l\u1EDBn h\u01A1n pin hi\u1EC7n t\u1EA1i';
    if(savingsEl) savingsEl.style.display='none';
    return;
  }
  const kwNeeded = cap * (target - now) / 100;
  const cost = Math.round(kwNeeded * st.pricePerKwh);
  const time = Math.round(kwNeeded / stationMaxKw(st) * 60);
  document.getElementById('costResult').textContent = cost.toLocaleString('vi-VN') + '\u0111';
  document.getElementById('costNote').textContent =
    \`\u2248 \${kwNeeded.toFixed(1)} kWh \xB7 kho\u1EA3ng \${time < 60 ? time + ' ph\xFAt' : Math.round(time/60*10)/10 + ' gi\u1EDD'} (c\u1ED5ng \${stationMaxKw(st)}kW). Ch\u01B0a t\xEDnh ph\xED d\u1EEBng qu\xE1 gi\u1EDD.\`;
  // savings vs gas
  const km = kwNeeded / EV_KWH_PER_100KM * 100;
  const gasCost = Math.round(km / 100 * GAS_L_PER_100KM * GAS_PRICE_PER_LITER);
  const savings = gasCost - cost;
  if(savingsEl && savings > 0){
    savingsEl.style.display='flex';
    document.getElementById('savingsVal').textContent = savings.toLocaleString('vi-VN') + '\u0111';
  } else if(savingsEl) {
    savingsEl.style.display='none';
  }
}

function handlePay(){
  alert('Chuy\u1EC3n sang lu\u1ED3ng thanh to\xE1n MoMo...');
}

function handleDir(){
  const st = STATIONS.find(s=>s.id===S.selected);
  if(!st) return;
  alert(\`M\u1EDF Google Maps ch\u1EC9 \u0111\u01B0\u1EDDng \u0111\u1EBFn:\\n\${st.name}\\n\${st.address}\`);
}

function handleSave(btn){
  btn.classList.toggle('saved');
  const saved = btn.classList.contains('saved');
  btn.innerHTML = saved
    ? \`<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg> \u0110\xE3 l\u01B0u\`
    : \`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg> L\u01B0u\`;
}

// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
// MAP
// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
let map;
const markerMap = {};

function initMap(){
  map = new maplibregl.Map({
    container:'map',
    style:'https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json',
    center:[106.7029,10.7769],
    zoom:12,
    attributionControl:{compact:false},
  });

  const userEl = document.createElement('div');
  userEl.className='gl-user-dot';
  new maplibregl.Marker({element:userEl}).setLngLat([106.6984,10.7740]).addTo(map);
  new maplibregl.Popup({closeButton:false,closeOnClick:false,offset:[14,0],anchor:'left'})
    .setLngLat([106.6984,10.7740]).setText('B\u1EA1n \u0111\xE2y').addTo(map);

  updateMapMarkers(STATIONS);
  fitAll();
}

function makePinEl(st){
  const el = document.createElement('div');
  el.className = \`gl-ev-pin\`;
  el.title = st.name;
  el.innerHTML = \`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>\`;
  el.addEventListener('click', e=>{e.stopPropagation();selectStation(st.id)});
  return el;
}

function updateMapMarkers(list){
  if(!map) return;
  Object.values(markerMap).forEach(e=>e.marker.remove());
  Object.keys(markerMap).forEach(k=>delete markerMap[k]);
  list.forEach(st=>{
    const el = makePinEl(st);
    const marker = new maplibregl.Marker({element:el}).setLngLat([st.lng,st.lat]).addTo(map);
    markerMap[st.id] = {marker,el};
    if(S.selected===st.id) el.classList.add('active');
  });
}

function hoverStation(id){
  Object.entries(markerMap).forEach(([sid,{el}])=>{
    el.style.transform = (sid===id&&sid!==S.selected) ? 'scale(1.1)' : (sid===S.selected?'scale(1.15)':'');
  });
}

function fitAll(){
  const list = filtered();
  if(!map||!list.length) return;
  const b = new maplibregl.LngLatBounds();
  list.forEach(st=>b.extend([st.lng,st.lat]));
  map.fitBounds(b,{padding:60,duration:600,maxZoom:14});
}

document.getElementById('ctrlZoomIn').addEventListener('click',()=>map?.zoomIn());
document.getElementById('ctrlZoomOut').addEventListener('click',()=>map?.zoomOut());

// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
// MOBILE CARD STRIP
// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
const isMobile = () => window.innerWidth <= 800;

function renderCardStrip(list){
  const strip = document.getElementById('cardStrip');
  const track = document.getElementById('cardStripTrack');
  if(!isMobile()){ strip.style.display='none'; return; }
  strip.style.display='block';
  track.innerHTML = list.map(st=>{
    const net = NETWORKS[st.network];
    const maxKw = stationMaxKw(st);
    const tier = speedTier(maxKw);
    const uniqueTypes = [...new Set(st.ports.map(p=>p.type))];
    return \`<div class="ev-strip-card\${S.selected===st.id?' active':''}" id="strip-\${st.id}" onclick="selectStation('\${st.id}')">
      <div class="ev-strip-top">
        <div class="ev-strip-icon" style="background:\${net.bg};border-color:\${net.border};color:\${net.color}">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
        </div>
        <div class="ev-strip-info">
          <div class="ev-strip-name">\${st.name}</div>
          <div class="ev-strip-dist">\${st.dist} km \xB7 \${st.hours}</div>
        </div>
      </div>
      <div class="ev-strip-tags">
        \${uniqueTypes.map(t=>{
          const cls=t==='CCS2'?'ccs2':t==='Type 2 AC'?'ac':'gbt';
          return \`<span class="port-badge \${cls}">\${t}</span>\`;
        }).join('')}
        <span class="speed-badge \${tier}">
          <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
          \${maxKw}kW
        </span>
      </div>
      <div class="ev-strip-footer">
        <div class="ev-strip-price">\${(st.pricePerKwh).toLocaleString('vi-VN')}<strong>\u0111/kWh</strong></div>
        <button class="ev-strip-btn" onclick="event.stopPropagation();selectStation('\${st.id}')">Chi ti\u1EBFt</button>
      </div>
    </div>\`;
  }).join('');
  setupCardSnap(list);
}

function setupCardSnap(list){
  const track = document.getElementById('cardStripTrack');
  let snapTimer;
  track.onscroll = () => {
    clearTimeout(snapTimer);
    snapTimer = setTimeout(()=>{
      const cards = track.querySelectorAll('.ev-strip-card');
      const center = track.scrollLeft + track.clientWidth/2;
      let nearest=null, minDist=Infinity;
      cards.forEach((c,i)=>{
        const d = Math.abs(c.offsetLeft + c.offsetWidth/2 - center);
        if(d<minDist){minDist=d;nearest=list[i];}
      });
      if(nearest && nearest.id !== S.selected){
        S.selected = nearest.id;
        track.querySelectorAll('.ev-strip-card').forEach(c=>c.classList.remove('active'));
        document.getElementById('strip-'+nearest.id)?.classList.add('active');
        Object.entries(markerMap).forEach(([sid,{el}])=>el.classList.toggle('active',sid===nearest.id));
        map?.flyTo({center:[nearest.lng,nearest.lat],zoom:15,duration:400});
      }
    },120);
  };
}

function scrollCardTo(id){
  const card = document.getElementById('strip-'+id);
  card?.scrollIntoView({behavior:'smooth',inline:'center',block:'nearest'});
}

// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
// INIT
// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
renderFilters();
renderList();
initMap();

window.addEventListener('resize',()=>{
  const list = filtered();
  renderCardStrip(list);
});

  // \u2500\u2500 lucide helpers \u2500\u2500
  function licon(name, size, sw) {
    if (!window.lucide || !window.lucide[name]) return '';
    const children = window.lucide[name].map(([tag, attrs]) => {
      const a = Object.entries(attrs).map(([k,v]) => \`\${k}="\${v}"\`).join(' ');
      return \`<\${tag} \${a}/>\`;
    }).join('');
    return \`<svg xmlns="http://www.w3.org/2000/svg" width="\${size||16}" height="\${size||16}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="\${sw||2}" stroke-linecap="round" stroke-linejoin="round">\${children}</svg>\`;
  }
  window.addEventListener('load', () => {
    lucide.createIcons();
    document.querySelectorAll('.mega-item[data-micon]').forEach(el => {
      if(!el.querySelector('svg'))el.insertAdjacentHTML('afterbegin',licon(el.dataset.micon,15,1.8));
    });
  });
<\/script> `], ["   ", `<div class="filter-bar"> <div class="filter-bar-inner" id="filterBar"></div> </div>  <div class="split"> <!-- LIST PANE --> <section class="list-pane"> <div class="list-scroll"> <div class="list-meta"> <div> <div class="list-title" id="listTitle">8 tr\u1EA1m s\u1EA1c</div> <div class="list-sub" id="listSub">TP. H\u1ED3 Ch\xED Minh \xB7 T\u1EA5t c\u1EA3</div> </div> <label class="sort-wrap"> <select id="sortSelect" onchange="renderList()"> <option value="dist">G\u1EA7n nh\u1EA5t</option> <option value="kw">C\xF4ng su\u1EA5t cao nh\u1EA5t</option> </select> </label> </div> <div class="station-list" id="stationList"></div> </div> <!-- DETAIL slides over list --> <aside class="detail-modal" id="detailModal"> <div class="detail-topbar"> <button class="detail-back" id="detailBack"> <i data-lucide="chevron-left" width="14" height="14"></i> </button> <div class="detail-topbar-name" id="detailTopbarName">Chi ti\u1EBFt tr\u1EA1m</div> </div> <div class="detail-scroll" id="detailContent"></div> <div class="dt-cta"> <div style="display:flex;gap:8px;margin-bottom:8px"> <button class="dir-cta" onclick="handleDir()"> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>
Ch\u1EC9 \u0111\u01B0\u1EDDng
</button> <button class="save-cta" onclick="handleSave(this)"> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
L\u01B0u
</button> </div> <button class="momo-cta" onclick="handlePay()"> <span class="momo-cta-logo"><img src="https://homepage.momocdn.net/fileuploads/svg/momo-file-240411162904.svg" alt="MoMo"></span>
Thanh to\xE1n qua MoMo
</button> </div> </aside> </section> <!-- MAP --> <div class="map-pane"> <div id="map"></div> <div class="map-count-badge"> <span class="map-count-dot"></span> <span id="mapCountLabel">8 tr\u1EA1m \xB7 TP.HCM</span> </div> <div class="map-ctrl"> <button class="map-ctrl-btn" id="ctrlZoomIn" title="Ph\xF3ng to"> <i data-lucide="plus" width="14" height="14"></i> </button> <button class="map-ctrl-btn" id="ctrlZoomOut" title="Thu nh\u1ECF"> <i data-lucide="minus" width="14" height="14"></i> </button> </div> </div> </div>  <div class="card-strip" id="cardStrip" style="display:none"> <div class="card-strip-track" id="cardStripTrack"></div> </div>  <aside class="detail-modal" id="detailModal"> <div class="detail-drag-handle"></div> <div class="detail-topbar"> <button class="detail-back" id="detailBack"> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg> </button> <div class="detail-topbar-name" id="detailTopbarName">Chi ti\u1EBFt tr\u1EA1m</div> </div> <div class="detail-scroll" id="detailContent"></div> <div class="dt-cta"> <div style="display:flex;gap:8px;margin-bottom:8px"> <button class="dir-cta" onclick="handleDir()"> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>
Ch\u1EC9 \u0111\u01B0\u1EDDng
</button> <button class="save-cta" onclick="handleSave(this)"> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
L\u01B0u
</button> </div> <button class="momo-cta" onclick="handlePay()"> <span class="momo-cta-logo"><img src="https://homepage.momocdn.net/fileuploads/svg/momo-file-240411162904.svg" alt="MoMo"></span>
Thanh to\xE1n qua MoMo
</button> </div> </aside> <script>
// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
// DATA
// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
const NETWORKS = {
  vgreen:  { label:'V-Green',    color:'#00A859', bg:'#E8F5EE', border:'#86efac' },
  evn:     { label:'EVN ChargeV',color:'#2563EB', bg:'#EFF6FF', border:'#bfdbfe' },
  evme:    { label:'EVME',       color:'#D97706', bg:'#FFFBEB', border:'#fde68a' },
  eon:     { label:'Eon Electric',color:'#7C3AED',bg:'#F5F3FF', border:'#c4b5fd' },
};

const STATIONS = [
  {
    id:'s1', name:'V-Green \xB7 Vincom Center \u0110\u1ED3ng Kh\u1EDFi',
    network:'vgreen', address:'72 L\xEA Th\xE1nh T\xF4n, Q.1, TP.HCM',
    dist:0.3, lat:10.7769, lng:106.7009,
    ports:[
      { type:'CCS2', kw:120, avail:2, total:2 },
      { type:'CCS2', kw:60,  avail:1, total:2 },
    ],
    pricePerKwh:3858, hours:'06:00 - 22:00',
    amenities:['wifi','cafe','restroom'], rating:4.7, reviews:34,
  },
  {
    id:'s2', name:'V-Green \xB7 Landmark 81',
    network:'vgreen', address:'208 Nguy\u1EC5n H\u1EEFu C\u1EA3nh, B\xECnh Th\u1EA1nh',
    dist:2.1, lat:10.7947, lng:106.7218,
    ports:[
      { type:'CCS2', kw:300, avail:2, total:2 },
      { type:'CCS2', kw:120, avail:3, total:4 },
      { type:'Type 2 AC', kw:22, avail:4, total:6 },
    ],
    pricePerKwh:3858, hours:'24/7',
    amenities:['wifi','cafe','restroom','shopping'], rating:4.9, reviews:87,
  },
  {
    id:'s3', name:'EVN ChargeV \xB7 Bitexco Financial',
    network:'evn', address:'2 H\u1EA3i Tri\u1EC1u, Q.1, TP.HCM',
    dist:0.5, lat:10.7716, lng:106.7038,
    ports:[
      { type:'Type 2 AC', kw:22, avail:2, total:4 },
    ],
    pricePerKwh:3560, hours:'07:00 - 21:00',
    amenities:['wifi','restroom'], rating:4.2, reviews:19,
  },
  {
    id:'s4', name:'EVME \xB7 Crescent Mall',
    network:'evme', address:'101 T\xF4n D\u1EADt Ti\xEAn, Q.7, TP.HCM',
    dist:5.6, lat:10.7295, lng:106.7186,
    ports:[
      { type:'CCS2', kw:60,  avail:0, total:2 },
      { type:'Type 2 AC', kw:11, avail:2, total:4 },
    ],
    pricePerKwh:4200, hours:'10:00 - 22:00',
    amenities:['wifi','cafe','restroom','shopping'], rating:4.1, reviews:12,
  },
  {
    id:'s5', name:'Eon Electric \xB7 Vivo City',
    network:'eon', address:'1058 Nguy\u1EC5n V\u0103n Linh, Q.7, TP.HCM',
    dist:6.8, lat:10.7263, lng:106.7116,
    ports:[
      { type:'CCS2', kw:120, avail:3, total:4 },
      { type:'Type 2 AC', kw:22, avail:2, total:4 },
    ],
    pricePerKwh:4000, hours:'09:00 - 22:00',
    amenities:['wifi','cafe','restroom','shopping'], rating:4.5, reviews:28,
  },
  {
    id:'s6', name:'V-Green \xB7 S\xE2n bay T\xE2n S\u01A1n Nh\u1EA5t',
    network:'vgreen', address:'\u0110\u01B0\u1EDDng Tr\u01B0\u1EDDng S\u01A1n, T\xE2n B\xECnh',
    dist:7.2, lat:10.8184, lng:106.6556,
    ports:[
      { type:'CCS2', kw:150, avail:4, total:6 },
      { type:'CCS2', kw:60,  avail:1, total:4 },
    ],
    pricePerKwh:3858, hours:'24/7',
    amenities:['wifi','restroom'], rating:4.6, reviews:52,
  },
  {
    id:'s7', name:'V-Green \xB7 Estella Place',
    network:'vgreen', address:'88 Song H\xE0nh, Q.2, TP.HCM',
    dist:4.3, lat:10.7931, lng:106.7505,
    ports:[
      { type:'CCS2', kw:60,  avail:0, total:4 },
      { type:'Type 2 AC', kw:11, avail:3, total:4 },
    ],
    pricePerKwh:3858, hours:'08:00 - 22:00',
    amenities:['wifi','cafe','restroom','shopping'], rating:4.3, reviews:21,
  },
  {
    id:'s8', name:'EVN ChargeV \xB7 Lotte Mart Nam S\xE0i G\xF2n',
    network:'evn', address:'469 Nguy\u1EC5n H\u1EEFu Th\u1ECD, Q.7, TP.HCM',
    dist:5.9, lat:10.7244, lng:106.7034,
    ports:[
      { type:'Type 2 AC', kw:22, avail:4, total:6 },
      { type:'CCS2', kw:60,  avail:1, total:2 },
    ],
    pricePerKwh:3560, hours:'07:00 - 22:00',
    amenities:['wifi','restroom','shopping'], rating:4.4, reviews:16,
  },
  {
    id:'s9', name:'V-Green \xB7 Aeon Mall T\xE2n Ph\xFA',
    network:'vgreen', address:'30 B\u1EDD Bao T\xE2n Th\u1EAFng, T\xE2n Ph\xFA',
    dist:8.1, lat:10.7939, lng:106.6286,
    ports:[
      { type:'CCS2', kw:120, avail:0, total:4 },
      { type:'Type 2 AC', kw:22, avail:0, total:4 },
    ],
    pricePerKwh:3858, hours:'09:00 - 22:00',
    amenities:['wifi','cafe','restroom','shopping'], rating:4.0, reviews:9,
  },
  {
    id:'s10', name:'EVME \xB7 Sunrise City',
    network:'evme', address:'27 Nguy\u1EC5n H\u1EEFu Th\u1ECD, Q.7, TP.HCM',
    dist:5.2, lat:10.7312, lng:106.7012,
    ports:[
      { type:'CCS2', kw:60,  avail:1, total:4 },
      { type:'Type 2 AC', kw:11, avail:0, total:2 },
    ],
    pricePerKwh:4200, hours:'10:00 - 22:00',
    amenities:['wifi','restroom','shopping'], rating:3.8, reviews:7,
  },
  {
    id:'s11', name:'Eon Electric \xB7 Gigamall Th\u1EE7 \u0110\u1EE9c',
    network:'eon', address:'240A Ph\u1EA1m V\u0103n \u0110\u1ED3ng, Th\u1EE7 \u0110\u1EE9c',
    dist:9.4, lat:10.8472, lng:106.7298,
    ports:[
      { type:'CCS2', kw:120, avail:0, total:2 },
    ],
    pricePerKwh:4000, hours:'09:00 - 22:00',
    amenities:['wifi','cafe','restroom','shopping'], rating:4.2, reviews:5,
    offline: true,
  },
  {
    id:'s12', name:'EVN ChargeV \xB7 Parkson Flemington',
    network:'evn', address:'184 L\xEA \u0110\u1EA1i H\xE0nh, Q.11, TP.HCM',
    dist:3.6, lat:10.7711, lng:106.6656,
    ports:[
      { type:'Type 2 AC', kw:22, avail:2, total:4 },
    ],
    pricePerKwh:3560, hours:'10:00 - 21:30',
    amenities:['wifi','restroom'], rating:4.1, reviews:11,
  },
];

// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
// STATE
// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
const S = { connector:'all', speed:'all', network:'all', selected:null };


function stationMaxKw(st) {
  return Math.max(...st.ports.map(p=>p.kw));
}


function speedTier(kw) {
  if(kw >= 100) return 'ultra';
  if(kw >= 30) return 'fast';
  return 'slow';
}

function speedLabel(kw) {
  if(kw >= 100) return 'Si\xEAu nhanh';
  if(kw >= 30) return 'Nhanh';
  return 'Th\u01B0\u1EDDng';
}

// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
// FILTERS
// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
const CONNECTOR_FILTERS = [
  { id:'all', label:'T\u1EA5t c\u1EA3 \u0111\u1EA7u c\u1EAFm' },
  { id:'CCS2', label:'CCS2 DC' },
  { id:'Type 2 AC', label:'Type 2 AC' },
  { id:'GB/T', label:'GB/T' },
];
const SPEED_FILTERS = [
  { id:'all', label:'M\u1ECDi t\u1ED1c \u0111\u1ED9' },
  { id:'ultra', label:'Si\xEAu nhanh 100kW+' },
  { id:'fast', label:'Nhanh 30-80kW' },
  { id:'slow', label:'Th\u01B0\u1EDDng AC' },
];
const NETWORK_FILTERS = [
  { id:'all', label:'M\u1EA1ng l\u01B0\u1EDBi' },
  ...Object.entries(NETWORKS).map(([id,n])=>({id,label:n.label})),
];

function renderFilters() {
  const bar = document.getElementById('filterBar');
  bar.innerHTML = \\\`
    \\\${CONNECTOR_FILTERS.map(f=>\\\`
      <button class="fchip\\\${S.connector===f.id?' on':''}" onclick="setConnector('\\\${f.id}')">\\\${f.label}</button>
    \\\`).join('')}
    <div class="fsep"></div>
    \\\${SPEED_FILTERS.map((f,i)=>i===0?'':
      \\\`<button class="fchip\\\${S.speed===f.id?' on':''}" onclick="setSpeed('\\\${f.id}')">\\\${f.label}</button>\\\`
    ).join('')}
    <div class="fsep"></div>
    \\\${NETWORK_FILTERS.map((f,i)=>i===0?'':
      \\\`<button class="fchip\\\${S.network===f.id?' on':''}" onclick="setNetwork('\\\${f.id}')">\\\${f.label}</button>\\\`
    ).join('')}
  \\\`;
}

function setConnector(id){ S.connector=id; S.selected=null; closeDetail(); renderFilters(); renderList(); fitAll(); }
function setSpeed(id)    { S.speed=id;     S.selected=null; closeDetail(); renderFilters(); renderList(); fitAll(); }
function setNetwork(id)  { S.network=id;   S.selected=null; closeDetail(); renderFilters(); renderList(); fitAll(); }

// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
// FILTERED LIST
// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
function filtered() {
  let list = STATIONS;
  if(S.avail === 'ok') {
    list = list.filter(st=>stationStatus(st)==='ok');
  }
  if(S.connector !== 'all') {
    list = list.filter(st=>st.ports.some(p=>p.type===S.connector));
  }
  if(S.speed !== 'all') {
    const tierKw = {ultra:100, fast:30, slow:0};
    const maxKw = {ultra:9999, fast:99, slow:29};
    list = list.filter(st=>st.ports.some(p=>p.kw>=tierKw[S.speed]&&p.kw<=maxKw[S.speed]));
  }
  if(S.network !== 'all') {
    list = list.filter(st=>st.network===S.network);
  }
  const sort = document.getElementById('sortSelect')?.value || 'dist';
  if(sort==='kw') list=[...list].sort((a,b)=>stationMaxKw(b)-stationMaxKw(a));
  else list=[...list].sort((a,b)=>a.dist-b.dist);
  return list;
}

// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
// RENDER LIST
// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
function portTypeBadge(type) {
  const cls = type==='CCS2'?'ccs2':type==='Type 2 AC'?'ac':'gbt';
  return \\\`<span class="port-badge \\\${cls}">\\\${type}</span>\\\`;
}

function renderList() {
  const list = filtered();
  const el = document.getElementById('stationList');
  document.getElementById('listTitle').textContent = \\\`\\\${list.length} tr\u1EA1m s\u1EA1c\\\`;
  document.getElementById('listSub').textContent = 'TP. H\u1ED3 Ch\xED Minh \xB7 ' + (S.network==='all'?'T\u1EA5t c\u1EA3 m\u1EA1ng':NETWORKS[S.network]?.label||'');
  document.getElementById('mapCountLabel').textContent = \\\`\\\${list.length} tr\u1EA1m \xB7 TP.HCM\\\`;

  if(!list.length){
    el.innerHTML = \\\`<div class="empty">
      <div class="empty-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></div>
      <div class="empty-title">Kh\xF4ng t\xECm th\u1EA5y tr\u1EA1m</div>
      <div class="empty-sub">Th\u1EED b\u1ECF b\u1EDBt \u0111i\u1EC1u ki\u1EC7n l\u1ECDc</div>
    </div>\\\`;
    updateMapMarkers([]);
    return;
  }

  el.innerHTML = list.map(st=>{
    const total = st.ports.reduce((a,p)=>a+p.total,0);
    const maxKw = stationMaxKw(st);
    const net = NETWORKS[st.network];
    const tier = speedTier(maxKw);
    const tierLabel = speedLabel(maxKw);
    const uniqueTypes = [...new Set(st.ports.map(p=>p.type))];

    return \\\`<div class="s-card\\\${S.selected===st.id?' active':''}" id="card-\\\${st.id}"
      onclick="selectStation('\\\${st.id}')"
      onmouseenter="hoverStation('\\\${st.id}')"
      onmouseleave="hoverStation(null)">
      <div class="s-card-top">
        <div class="s-network-icon" style="background:\\\${net.bg};border-color:\\\${net.border};color:\\\${net.color}">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
        </div>
        <div class="s-body">
          <div class="s-head">
            <div class="s-name">\\\${st.name}</div>
            <span class="s-rating">\u2605 \\\${st.rating}</span>
            <div class="s-dist">\\\${st.dist} km</div>
          </div>
          <div class="s-addr">\\\${st.address}</div>
          <div class="s-ports">
            \\\${uniqueTypes.map(portTypeBadge).join('')}
            <span class="speed-badge \\\${tier}">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
              \\\${maxKw}kW \xB7 \\\${tierLabel}
            </span>
          </div>
        </div>
      </div>
      <div class="s-footer">
        <span style="font-size:10px;font-weight:600;color:var(--muted)">\\\${total} c\u1ED5ng</span>
        <div class="s-price">\\\${(st.pricePerKwh).toLocaleString('vi-VN')}<strong>\u0111/kWh</strong></div>
      </div>
      <div class="s-hours-row">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        \\\${st.hours}
      </div>
    </div>\\\`;
  }).join('');

  updateMapMarkers(list);
  renderCardStrip(list);
}

// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
// DETAIL PANEL
// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
function selectStation(id) {
  const st = STATIONS.find(s=>s.id===id);
  if(!st) return;
  S.selected = id;
  renderList();

  // update marker
  Object.entries(markerMap).forEach(([sid,{el}])=>{
    el.classList.toggle('active', sid===id);
  });

  // scroll card into view
  const card = document.getElementById('card-'+id);
  card?.scrollIntoView({block:'nearest',behavior:'smooth'});

  // pan map
  map?.flyTo({center:[st.lng,st.lat],zoom:15,duration:600});

  // render detail
  const net = NETWORKS[st.network];
  const amenityLabels = {wifi:'Wi-Fi',cafe:'Cafe',restroom:'Nh\xE0 v\u1EC7 sinh',shopping:'Mua s\u1EAFm'};
  const amenityIcons = {
    wifi:\\\`<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>\\\`,
    cafe:\\\`<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>\\\`,
    restroom:\\\`<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>\\\`,
    shopping:\\\`<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>\\\`,
  };

  document.getElementById('detailTopbarName').textContent = st.name;

  document.getElementById('detailContent').innerHTML = \\\`
    <div class="dt-network">
      <span class="dt-network-badge" style="color:\\\${net.color};background:\\\${net.bg};border-color:\\\${net.border}">\\\${net.label}</span>
    </div>
    <div class="dt-name">\\\${st.name}</div>
    <div class="dt-addr">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
      \\\${st.address}
    </div>

    <div class="dt-section-title">C\u1ED5ng s\u1EA1c</div>
    <div class="dt-ports">
      \\\${st.ports.map(p=>{
        return \\\`<div class="dt-port-row">
          <div style="display:flex;align-items:center;gap:7px;flex:none">
            \\\${portTypeBadge(p.type)}
          </div>
          <div class="dt-port-info">
            <div class="dt-port-type">\\\${p.kw}kW \xB7 \\\${speedLabel(p.kw)}</div>
          </div>
          <div class="dt-port-avail">
            <div class="dt-port-count">\\\${p.total} c\u1ED5ng</div>
          </div>
        </div>\\\`;
      }).join('')}
    </div>

    <div class="dt-section-title">\u01AF\u1EDBc t\xEDnh chi ph\xED</div>
    <div class="cost-box">
      <div class="cost-box-title">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
        T\xEDnh ph\xED s\u1EA1c \xB7 \\\${(st.pricePerKwh).toLocaleString('vi-VN')}\u0111/kWh
      </div>
      <div class="cost-inputs">
        <div class="cost-field">
          <label>Pin hi\u1EC7n t\u1EA1i (%)</label>
          <input type="number" id="battNow" value="20" min="0" max="100" oninput="calcCost('\\\${st.id}')">
        </div>
        <div class="cost-field">
          <label>S\u1EA1c \u0111\u1EBFn (%)</label>
          <input type="number" id="battTarget" value="80" min="0" max="100" oninput="calcCost('\\\${st.id}')">
        </div>
        <div class="cost-field">
          <label>Dung l\u01B0\u1EE3ng pin (kWh)</label>
          <input type="number" id="battCap" value="42" min="5" max="120" step="0.5" oninput="calcCost('\\\${st.id}')">
        </div>
        <div class="cost-field">
          <label>Lo\u1EA1i xe</label>
          <select id="carModel" onchange="setCarModel()">
            <option value="42">VinFast VF5 (42kWh)</option>
            <option value="59">VinFast VF6 (59.6kWh)</option>
            <option value="75.3">VinFast VF7 (75.3kWh)</option>
            <option value="87.7">VinFast VF8 (87.7kWh)</option>
            <option value="92">VinFast VF9 (92kWh)</option>
            <option value="58">Hyundai IONIQ 6 (58kWh)</option>
            <option value="77.4">Kia EV6 (77.4kWh)</option>
            <option value="60">BYD Atto 3 (60kWh)</option>
            <option value="0">Kh\xE1c (t\u1EF1 nh\u1EADp)</option>
          </select>
        </div>
      </div>
      <div class="cost-result">
        <span class="cost-result-label">Chi ph\xED d\u1EF1 ki\u1EBFn</span>
        <span class="cost-result-val" id="costResult">-</span>
      </div>
      <div id="costSavings" class="cost-savings-row" style="display:none">
        <span style="font-size:10.5px;font-weight:700;color:var(--gray-600)">Ti\u1EBFt ki\u1EC7m so v\u1EDBi x\u0103ng</span>
        <span id="savingsVal" style="font-size:12px;font-weight:900;color:var(--ev-green);flex:none"></span>
      </div>
      <div class="cost-note" id="costNote">Ch\u01B0a t\xEDnh ph\xED d\u1EEBng qu\xE1 gi\u1EDD. Gi\xE1 \xE1p d\u1EE5ng t\u1EEB 19/3/2024.</div>
    </div>

    <div class="dt-section-title">Th\xF4ng tin tr\u1EA1m</div>
    <div>
      <div class="dt-info-row">
        <span class="dt-info-label">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          Gi\u1EDD m\u1EDF c\u1EEDa
        </span>
        <span class="dt-info-val">\\\${st.hours}</span>
      </div>
      <div class="dt-info-row">
        <span class="dt-info-label">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          \u0110\xE1nh gi\xE1
        </span>
        <span class="dt-info-val">\\\${st.rating} \u2605 (\\\${st.reviews} \u0111\xE1nh gi\xE1)</span>
      </div>
      <div class="dt-info-row">
        <span class="dt-info-label">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 0-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          Ti\u1EC7n \xEDch
        </span>
        <span></span>
      </div>
      <div class="amenity-list">
        \\\${st.amenities.map(a=>\\\`
          <span class="amenity-chip">\\\${amenityIcons[a]||''} \\\${amenityLabels[a]||a}</span>
        \\\`).join('')}
      </div>
    </div>
  \\\`;

  document.getElementById('detailModal').classList.add('open');
  if(isMobile()) scrollCardTo(id);
  calcCost(id);
}

function closeDetail(){
  document.getElementById('detailModal').classList.remove('open');
  S.selected=null;
  Object.values(markerMap).forEach(({el})=>el.classList.remove('active'));
  renderList();
}

document.getElementById('detailBack').onclick=closeDetail;

function setCarModel(){
  const sel = document.getElementById('carModel');
  const kw = parseFloat(sel.value);
  if(kw>0) document.getElementById('battCap').value=kw;
  const id = S.selected;
  if(id) calcCost(id);
}

const GAS_PRICE_PER_LITER = 24700;
const GAS_L_PER_100KM = 8;
const EV_KWH_PER_100KM = 15;

function calcCost(stId){
  const st = STATIONS.find(s=>s.id===stId);
  if(!st) return;
  const now = parseFloat(document.getElementById('battNow')?.value)||0;
  const target = parseFloat(document.getElementById('battTarget')?.value)||80;
  const cap = parseFloat(document.getElementById('battCap')?.value)||42;
  const savingsEl = document.getElementById('costSavings');
  if(target<=now){
    document.getElementById('costResult').textContent='--';
    document.getElementById('costNote').textContent='Pin \u0111\xEDch ph\u1EA3i l\u1EDBn h\u01A1n pin hi\u1EC7n t\u1EA1i';
    if(savingsEl) savingsEl.style.display='none';
    return;
  }
  const kwNeeded = cap * (target - now) / 100;
  const cost = Math.round(kwNeeded * st.pricePerKwh);
  const time = Math.round(kwNeeded / stationMaxKw(st) * 60);
  document.getElementById('costResult').textContent = cost.toLocaleString('vi-VN') + '\u0111';
  document.getElementById('costNote').textContent =
    \\\`\u2248 \\\${kwNeeded.toFixed(1)} kWh \xB7 kho\u1EA3ng \\\${time < 60 ? time + ' ph\xFAt' : Math.round(time/60*10)/10 + ' gi\u1EDD'} (c\u1ED5ng \\\${stationMaxKw(st)}kW). Ch\u01B0a t\xEDnh ph\xED d\u1EEBng qu\xE1 gi\u1EDD.\\\`;
  // savings vs gas
  const km = kwNeeded / EV_KWH_PER_100KM * 100;
  const gasCost = Math.round(km / 100 * GAS_L_PER_100KM * GAS_PRICE_PER_LITER);
  const savings = gasCost - cost;
  if(savingsEl && savings > 0){
    savingsEl.style.display='flex';
    document.getElementById('savingsVal').textContent = savings.toLocaleString('vi-VN') + '\u0111';
  } else if(savingsEl) {
    savingsEl.style.display='none';
  }
}

function handlePay(){
  alert('Chuy\u1EC3n sang lu\u1ED3ng thanh to\xE1n MoMo...');
}

function handleDir(){
  const st = STATIONS.find(s=>s.id===S.selected);
  if(!st) return;
  alert(\\\`M\u1EDF Google Maps ch\u1EC9 \u0111\u01B0\u1EDDng \u0111\u1EBFn:\\\\n\\\${st.name}\\\\n\\\${st.address}\\\`);
}

function handleSave(btn){
  btn.classList.toggle('saved');
  const saved = btn.classList.contains('saved');
  btn.innerHTML = saved
    ? \\\`<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg> \u0110\xE3 l\u01B0u\\\`
    : \\\`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg> L\u01B0u\\\`;
}

// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
// MAP
// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
let map;
const markerMap = {};

function initMap(){
  map = new maplibregl.Map({
    container:'map',
    style:'https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json',
    center:[106.7029,10.7769],
    zoom:12,
    attributionControl:{compact:false},
  });

  const userEl = document.createElement('div');
  userEl.className='gl-user-dot';
  new maplibregl.Marker({element:userEl}).setLngLat([106.6984,10.7740]).addTo(map);
  new maplibregl.Popup({closeButton:false,closeOnClick:false,offset:[14,0],anchor:'left'})
    .setLngLat([106.6984,10.7740]).setText('B\u1EA1n \u0111\xE2y').addTo(map);

  updateMapMarkers(STATIONS);
  fitAll();
}

function makePinEl(st){
  const el = document.createElement('div');
  el.className = \\\`gl-ev-pin\\\`;
  el.title = st.name;
  el.innerHTML = \\\`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>\\\`;
  el.addEventListener('click', e=>{e.stopPropagation();selectStation(st.id)});
  return el;
}

function updateMapMarkers(list){
  if(!map) return;
  Object.values(markerMap).forEach(e=>e.marker.remove());
  Object.keys(markerMap).forEach(k=>delete markerMap[k]);
  list.forEach(st=>{
    const el = makePinEl(st);
    const marker = new maplibregl.Marker({element:el}).setLngLat([st.lng,st.lat]).addTo(map);
    markerMap[st.id] = {marker,el};
    if(S.selected===st.id) el.classList.add('active');
  });
}

function hoverStation(id){
  Object.entries(markerMap).forEach(([sid,{el}])=>{
    el.style.transform = (sid===id&&sid!==S.selected) ? 'scale(1.1)' : (sid===S.selected?'scale(1.15)':'');
  });
}

function fitAll(){
  const list = filtered();
  if(!map||!list.length) return;
  const b = new maplibregl.LngLatBounds();
  list.forEach(st=>b.extend([st.lng,st.lat]));
  map.fitBounds(b,{padding:60,duration:600,maxZoom:14});
}

document.getElementById('ctrlZoomIn').addEventListener('click',()=>map?.zoomIn());
document.getElementById('ctrlZoomOut').addEventListener('click',()=>map?.zoomOut());

// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
// MOBILE CARD STRIP
// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
const isMobile = () => window.innerWidth <= 800;

function renderCardStrip(list){
  const strip = document.getElementById('cardStrip');
  const track = document.getElementById('cardStripTrack');
  if(!isMobile()){ strip.style.display='none'; return; }
  strip.style.display='block';
  track.innerHTML = list.map(st=>{
    const net = NETWORKS[st.network];
    const maxKw = stationMaxKw(st);
    const tier = speedTier(maxKw);
    const uniqueTypes = [...new Set(st.ports.map(p=>p.type))];
    return \\\`<div class="ev-strip-card\\\${S.selected===st.id?' active':''}" id="strip-\\\${st.id}" onclick="selectStation('\\\${st.id}')">
      <div class="ev-strip-top">
        <div class="ev-strip-icon" style="background:\\\${net.bg};border-color:\\\${net.border};color:\\\${net.color}">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
        </div>
        <div class="ev-strip-info">
          <div class="ev-strip-name">\\\${st.name}</div>
          <div class="ev-strip-dist">\\\${st.dist} km \xB7 \\\${st.hours}</div>
        </div>
      </div>
      <div class="ev-strip-tags">
        \\\${uniqueTypes.map(t=>{
          const cls=t==='CCS2'?'ccs2':t==='Type 2 AC'?'ac':'gbt';
          return \\\`<span class="port-badge \\\${cls}">\\\${t}</span>\\\`;
        }).join('')}
        <span class="speed-badge \\\${tier}">
          <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
          \\\${maxKw}kW
        </span>
      </div>
      <div class="ev-strip-footer">
        <div class="ev-strip-price">\\\${(st.pricePerKwh).toLocaleString('vi-VN')}<strong>\u0111/kWh</strong></div>
        <button class="ev-strip-btn" onclick="event.stopPropagation();selectStation('\\\${st.id}')">Chi ti\u1EBFt</button>
      </div>
    </div>\\\`;
  }).join('');
  setupCardSnap(list);
}

function setupCardSnap(list){
  const track = document.getElementById('cardStripTrack');
  let snapTimer;
  track.onscroll = () => {
    clearTimeout(snapTimer);
    snapTimer = setTimeout(()=>{
      const cards = track.querySelectorAll('.ev-strip-card');
      const center = track.scrollLeft + track.clientWidth/2;
      let nearest=null, minDist=Infinity;
      cards.forEach((c,i)=>{
        const d = Math.abs(c.offsetLeft + c.offsetWidth/2 - center);
        if(d<minDist){minDist=d;nearest=list[i];}
      });
      if(nearest && nearest.id !== S.selected){
        S.selected = nearest.id;
        track.querySelectorAll('.ev-strip-card').forEach(c=>c.classList.remove('active'));
        document.getElementById('strip-'+nearest.id)?.classList.add('active');
        Object.entries(markerMap).forEach(([sid,{el}])=>el.classList.toggle('active',sid===nearest.id));
        map?.flyTo({center:[nearest.lng,nearest.lat],zoom:15,duration:400});
      }
    },120);
  };
}

function scrollCardTo(id){
  const card = document.getElementById('strip-'+id);
  card?.scrollIntoView({behavior:'smooth',inline:'center',block:'nearest'});
}

// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
// INIT
// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
renderFilters();
renderList();
initMap();

window.addEventListener('resize',()=>{
  const list = filtered();
  renderCardStrip(list);
});

  // \u2500\u2500 lucide helpers \u2500\u2500
  function licon(name, size, sw) {
    if (!window.lucide || !window.lucide[name]) return '';
    const children = window.lucide[name].map(([tag, attrs]) => {
      const a = Object.entries(attrs).map(([k,v]) => \\\`\\\${k}="\\\${v}"\\\`).join(' ');
      return \\\`<\\\${tag} \\\${a}/>\\\`;
    }).join('');
    return \\\`<svg xmlns="http://www.w3.org/2000/svg" width="\\\${size||16}" height="\\\${size||16}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="\\\${sw||2}" stroke-linecap="round" stroke-linejoin="round">\\\${children}</svg>\\\`;
  }
  window.addEventListener('load', () => {
    lucide.createIcons();
    document.querySelectorAll('.mega-item[data-micon]').forEach(el => {
      if(!el.querySelector('svg'))el.insertAdjacentHTML('afterbegin',licon(el.dataset.micon,15,1.8));
    });
  });
<\/script> `])), maybeRenderHead()) })}`;
}, "/Users/hienhv/HienHv/Klaus/Web-Idea/web-momo-prototype/apps/astro/src/pages/tien-ich-giao-thong/tram-sac.astro", void 0);

const $$file = "/Users/hienhv/HienHv/Klaus/Web-Idea/web-momo-prototype/apps/astro/src/pages/tien-ich-giao-thong/tram-sac.astro";
const $$url = "/tien-ich-giao-thong/tram-sac";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$TramSac,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
