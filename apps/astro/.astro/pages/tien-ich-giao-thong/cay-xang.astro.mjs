import { c as createComponent, e as renderComponent, b as renderTemplate, F as Fragment, u as unescapeHTML, m as maybeRenderHead } from '../../chunks/astro/server_BMOddyS3.mjs';
import 'piccolore';
import { $ as $$VehicleHub } from '../../chunks/VehicleHub_Msovdq2n.mjs';
/* empty css                                      */
/* empty css                                       */
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$CayXang = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "VehicleHub", $$VehicleHub, { "title": "C\xE2y X\u0103ng G\u1EA7n \u0110\xE2y - T\xECm Tr\u1EA1m X\u0103ng D\u1EA7u 24/7 | MoMo", "description": "T\xECm c\xE2y x\u0103ng g\u1EA7n b\u1EA1n: Petrolimex, Shell, BP, Idemitsu, PVOIL. Xem gi\u1EDD m\u1EDF c\u1EEDa, gi\xE1 x\u0103ng t\u1EEBng tr\u1EA1m v\xE0 thanh to\xE1n qua MoMo.", "theme": "energy" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(['  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" crossorigin=""> <link rel="stylesheet" href="https://unpkg.com/leaflet.markercluster@1.5.3/dist/MarkerCluster.css"> <link rel="stylesheet" href="https://unpkg.com/leaflet.markercluster@1.5.3/dist/MarkerCluster.Default.css">   ', `<div class="page-top"> <div class="page-top-inner"> <div class="breadcrumb"> <a href="/tien-ich-giao-thong">Xe &amp; Giao Th\xF4ng</a> <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg> <span>C\xE2y x\u0103ng g\u1EA7n b\u1EA1n</span> </div> <h1 class="page-title">C\xE2y x\u0103ng g\u1EA7n b\u1EA1n</h1> <p class="page-desc">T\xECm tr\u1EA1m x\u0103ng \u0111\u1ED1i t\xE1c Petrolimex &amp; PVOIL g\u1EA7n nh\u1EA5t - xem gi\xE1 h\xF4m nay, gi\u1EDD m\u1EDF c\u1EEDa v\xE0 ch\u1EC9 \u0111\u01B0\u1EDDng.</p> <div class="page-stats"> <div class="page-stat"> <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v4l3 3"></path></svg> <span>C\u1EADp nh\u1EADt <strong>h\xF4m nay</strong></span> </div> <div class="page-stat"> <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path></svg> <span><strong>Petrolimex &amp; PVOIL</strong> \u0111\u1ED1i t\xE1c</span> </div> </div> </div> </div>  <div class="filter-bar"> <div class="filter-bar-row"> <div class="filter-bar-inner" id="filterBar"></div> </div> </div>  <div class="split"> <!-- LIST PANE --> <div class="list-pane"> <div class="list-header"> <div class="list-header-left"> <h2 id="listCount">18 c\xE2y x\u0103ng</h2> <p>G\u1EA7n khu v\u1EF1c Qu\u1EADn 1, TP.HCM</p> </div> <div class="sort-btn"> <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 6h18M7 12h10M11 18h2"></path></svg> <select id="sortSelect" onchange="sortStations()"> <option value="dist">G\u1EA7n nh\u1EA5t</option> <option value="rating">\u0110\xE1nh gi\xE1 cao</option> <option value="open">\u0110ang m\u1EDF</option> </select> </div> </div> <div class="station-list" id="stationList"></div> </div> <!-- DETAIL COLUMN --> <div class="detail-panel" id="detailPanel"> <div class="detail-drag-handle"></div> <div class="detail-topbar"> <button class="detail-back" onclick="closeDetail()"> <i data-lucide="chevron-left" width="14" height="14"></i>
Danh s\xE1ch
</button> <button class="detail-close" onclick="closeDetail()"> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> </button> </div> <div id="detailContent" style="flex:1;display:flex;flex-direction:column;overflow:hidden;min-height:0"></div> </div> <!-- MAP PANE --> <div class="map-pane"> <div id="map"></div> <div class="map-badge"> <i></i> <span id="mapCount">18 tr\u1EA1m</span> </div> <div class="map-ctrl"> <button class="map-ctrl-btn locate" id="locateBtn" title="V\u1ECB tr\xED c\u1EE7a t\xF4i" onclick="locateMe()"> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path d="M12 2v3M12 19v3M2 12h3M19 12h3"></path><circle cx="12" cy="12" r="8" stroke-dasharray="3 3"></circle></svg> </button> <button class="map-ctrl-btn" title="Ph\xF3ng to" onclick="map.zoomIn()"> <i data-lucide="plus" width="14" height="14"></i> </button> <button class="map-ctrl-btn" title="Thu nh\u1ECF" onclick="map.zoomOut()"> <i data-lucide="minus" width="14" height="14"></i> </button> </div> <!-- TRAVEL CONTROL --> <div class="travel-bar" id="travelBar"> <div class="travel-mode"> <button class="travel-mode-btn active" id="modeWalk" onclick="setTravelMode('walk')"> <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="5" r="2"></circle><path d="M8 14l2-4 2 2 2-4"></path><path d="M7 21l2-5h6l2 5"></path></svg>
\u0110i b\u1ED9
</button> <button class="travel-mode-btn" id="modeDrive" onclick="setTravelMode('drive')"> <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="10" rx="2"></rect><path d="M16 7l-2-4H10L8 7"></path><circle cx="7" cy="17" r="2"></circle><circle cx="17" cy="17" r="2"></circle></svg>
L\xE1i xe
</button> </div> <div class="travel-slider-wrap"> <div class="travel-slider-label"> <span>Th\u1EDDi gian di chuy\u1EC3n</span> <strong id="travelMinsLabel">10 ph\xFAt</strong> </div> <input class="travel-slider" id="travelSlider" type="range" min="5" max="30" step="5" value="10" oninput="onSliderInput(this.value)"> </div> <button class="travel-update-btn" onclick="applyTravelArea()"> <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 .49-3.5"></path></svg>
C\u1EADp nh\u1EADt
</button> </div> </div> </div>  <div class="card-strip" id="cardStrip"> <div class="card-strip-track" id="cardStripTrack"></div> </div>  `, " ", ` <script>
// \u2500\u2500 DATA \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
const BRANDS = {
  plx:   { name: 'Petrolimex', short: 'PLX', color: '#DA2032', dark: '#A5172B' },
  pvoil: { name: 'PVOIL',      short: 'PVO', color: '#003087', dark: '#001F5C' },
};

const FUELS_BASE = { ron95: 23150, ron92: 21810, diesel: 20150 };

const GARAGE_BRANDS = {
  honda:   { name: 'Honda Head',       short: 'HH',  color: '#CC0000', dark: '#8B0000' },
  yamaha:  { name: 'Yamaha Town',      short: 'YT',  color: '#003087', dark: '#001A5C' },
  vinfast: { name: 'VinFast Service',  short: 'VF',  color: '#00856F', dark: '#005C4C' },
  generic: { name: 'Garage',           short: 'GA',  color: '#F59E0B', dark: '#D97706' },
};
const SVC_LABELS = { motorbike:'Xe m\xE1y', car:'\xD4 t\xF4', oil:'Thay d\u1EA7u', tire:'V\xE1 l\u1ED1p', wash:'R\u1EEDa xe', inspect:'\u0110\u0103ng ki\u1EC3m', body:'\u0110\u1ED3ng s\u01A1n' };

const GARAGES = [
  { id:201, brand:'honda',   name:'Honda Head Nguy\u1EC5n Tr\xE3i',         addr:'12 Nguy\u1EC5n Tr\xE3i, P.B\u1EBFn Th\xE0nh, Q.1',        lat:10.7718, lng:106.6900, dist:0.8, open24:false, rating:4.7, vehicles:['motorbike'],        services:['oil','tire','wash'],            hours:'7:30 - 18:00' },
  { id:202, brand:'yamaha',  name:'Yamaha Town L\xEA L\u1EE3i',              addr:'55 L\xEA L\u1EE3i, P.B\u1EBFn Ngh\xE9, Q.1',              lat:10.7745, lng:106.7025, dist:1.1, open24:false, rating:4.5, vehicles:['motorbike'],        services:['oil','tire','wash','inspect'],  hours:'8:00 - 17:30' },
  { id:203, brand:'generic', name:'Garage \xD4 T\xF4 Tr\u1EA7n H\u01B0ng \u0110\u1EA1o',      addr:'122 Tr\u1EA7n H\u01B0ng \u0110\u1EA1o, P.C\u1EA7u Kho, Q.1',       lat:10.7656, lng:106.6912, dist:1.5, open24:false, rating:4.4, vehicles:['car'],              services:['oil','tire','body','wash'],     hours:'7:00 - 18:30' },
  { id:204, brand:'honda',   name:'Honda Head \u0110inh Ti\xEAn Ho\xE0ng',      addr:'88 \u0110inh Ti\xEAn Ho\xE0ng, P.\u0110a Kao, Q.1',       lat:10.7905, lng:106.6990, dist:1.7, open24:false, rating:4.6, vehicles:['motorbike'],        services:['oil','tire','wash'],            hours:'7:30 - 17:30' },
  { id:205, brand:'vinfast', name:'VinFast Service Center Q.3',      addr:'25 V\xF5 V\u0103n T\u1EA7n, P.6, Q.3',                 lat:10.7810, lng:106.6830, dist:2.0, open24:false, rating:4.8, vehicles:['car'],              services:['oil','tire','body','inspect'],  hours:'7:00 - 19:00' },
  { id:206, brand:'generic', name:'Garage Xe M\xE1y Hai B\xE0 Tr\u01B0ng',      addr:'230 Hai B\xE0 Tr\u01B0ng, P.T\xE2n \u0110\u1ECBnh, Q.1',       lat:10.7890, lng:106.6940, dist:2.2, open24:false, rating:4.2, vehicles:['motorbike'],        services:['oil','tire'],                  hours:'7:00 - 18:00' },
  { id:207, brand:'yamaha',  name:'Yamaha Town C\xE1ch M\u1EA1ng Th\xE1ng T\xE1m', addr:'180 CMT8, P.3, Q.3',                       lat:10.7795, lng:106.6755, dist:2.9, open24:false, rating:4.3, vehicles:['motorbike'],        services:['oil','tire','wash','inspect'],  hours:'8:00 - 17:30' },
  { id:208, brand:'generic', name:'Garage \xD4 T\xF4 B\xECnh Th\u1EA1nh',          addr:'34 \u0110inh B\u1ED9 L\u0129nh, P.24, Q.B\xECnh Th\u1EA1nh',    lat:10.8060, lng:106.7110, dist:3.5, open24:false, rating:4.5, vehicles:['car','motorbike'],  services:['oil','tire','body','wash'],     hours:'7:00 - 18:00' },
  { id:209, brand:'honda',   name:'Honda Head Ph\xFA Nhu\u1EADn',             addr:'92 Ho\xE0ng V\u0103n Th\u1EE5, P.9, Q.Ph\xFA Nhu\u1EADn',     lat:10.8000, lng:106.6720, dist:3.8, open24:false, rating:4.6, vehicles:['motorbike'],        services:['oil','tire','wash'],            hours:'7:30 - 18:00' },
  { id:210, brand:'vinfast', name:'VinFast Service Center Q.5',       addr:'56 Nguy\u1EC5n Tr\xE3i, P.2, Q.5',               lat:10.7580, lng:106.6820, dist:4.0, open24:false, rating:4.7, vehicles:['car'],              services:['oil','tire','body','inspect'],  hours:'7:00 - 19:00' },
  { id:211, brand:'generic', name:'Garage K\u1EF9 Thu\u1EADt L\xEA V\u0103n S\u1EF9',       addr:'290 L\xEA V\u0103n S\u1EF9, P.14, Q.3',               lat:10.7890, lng:106.6680, dist:4.3, open24:false, rating:4.3, vehicles:['car','motorbike'],  services:['oil','tire','body'],            hours:'7:30 - 17:30' },
  { id:212, brand:'yamaha',  name:'Yamaha Town T\xE2n B\xECnh',             addr:'44 Tr\u01B0\u1EDDng S\u01A1n, P.2, Q.T\xE2n B\xECnh',          lat:10.8100, lng:106.6660, dist:4.9, open24:false, rating:4.4, vehicles:['motorbike'],        services:['oil','tire','wash','inspect'],  hours:'8:00 - 17:30' },
];

const STATIONS = [
  { id:1,  brand:'plx',   name:'Petrolimex s\u1ED1 6 \u0110inh Ti\xEAn Ho\xE0ng',  addr:'6 \u0110inh Ti\xEAn Ho\xE0ng, P.\u0110a Kao, Q.1',      lat:10.7892, lng:106.6975, dist:0.4, open24:true,  rating:4.7, fuels:['ron95','ron92','diesel'], services:['carwash','shop'], delta:{} },
  { id:2,  brand:'plx',   name:'Petrolimex Nguy\u1EC5n Th\u1ECB Minh Khai',  addr:'45 Nguy\u1EC5n Th\u1ECB Minh Khai, Q.1',          lat:10.7823, lng:106.6844, dist:1.2, open24:false, rating:4.3, fuels:['ron95','ron92'],          services:['shop'],           delta:{ ron95:-200 } },
  { id:3,  brand:'plx',   name:'Petrolimex L\xEA Du\u1EA9n',               addr:'124 L\xEA Du\u1EA9n, P.B\u1EBFn Ngh\xE9, Q.1',          lat:10.7799, lng:106.7005, dist:1.4, open24:true,  rating:4.6, fuels:['ron95','ron92','diesel'], services:['carwash'],        delta:{ ron95:-100 } },
  { id:4,  brand:'pvoil', name:'PVOIL \u0110i\u1EC7n Bi\xEAn Ph\u1EE7',               addr:'312 \u0110i\u1EC7n Bi\xEAn Ph\u1EE7, P.4, Q.3',           lat:10.7831, lng:106.6803, dist:2.1, open24:true,  rating:4.4, fuels:['ron95','diesel'],         services:[],                 delta:{} },
  { id:5,  brand:'plx',   name:'Petrolimex Hai B\xE0 Tr\u01B0ng',           addr:'178 Hai B\xE0 Tr\u01B0ng, P.\u0110a Kao, Q.1',       lat:10.7874, lng:106.6928, dist:2.3, open24:true,  rating:4.6, fuels:['ron95','ron92','diesel'], services:['carwash','shop'], delta:{} },
  { id:6,  brand:'plx',   name:'Petrolimex C\xE1ch M\u1EA1ng Th\xE1ng T\xE1m',   addr:'210 CMT8, P.4, Q.3',                     lat:10.7789, lng:106.6780, dist:2.8, open24:true,  rating:4.5, fuels:['ron95','ron92','diesel'], services:['shop'],           delta:{} },
  { id:7,  brand:'pvoil', name:'PVOIL S\u01B0 V\u1EA1n H\u1EA1nh',                 addr:'268 S\u01B0 V\u1EA1n H\u1EA1nh, P.9, Q.10',            lat:10.7780, lng:106.6686, dist:3.3, open24:true,  rating:4.5, fuels:['ron95','ron92'],          services:[],                 delta:{} },
  { id:8,  brand:'pvoil', name:'PVOIL Nguy\u1EC5n Tr\xE3i',                 addr:'405 Nguy\u1EC5n Tr\xE3i, P.7, Q.5',             lat:10.7601, lng:106.6810, dist:3.6, open24:true,  rating:4.3, fuels:['ron95','ron92','diesel'], services:['carwash'],        delta:{ diesel:-100 } },
  { id:9,  brand:'plx',   name:'Petrolimex B\xECnh Th\u1EA1nh',             addr:'50 \u0110inh B\u1ED9 L\u0129nh, P.26, Q.B\xECnh Th\u1EA1nh',  lat:10.8074, lng:106.7097, dist:3.9, open24:true,  rating:4.7, fuels:['ron95','ron92','diesel'], services:['carwash','shop'], delta:{} },
  { id:10, brand:'pvoil', name:'PVOIL Ho\xE0ng Di\u1EC7u',                  addr:'90 Ho\xE0ng Di\u1EC7u, P.9, Q.4',               lat:10.7656, lng:106.6964, dist:4.2, open24:false, rating:4.1, fuels:['ron95','diesel'],         services:[],                 delta:{ ron95:+100 } },
  { id:11, brand:'pvoil', name:'PVOIL Nguy\u1EC5n H\u1EEFu C\u1EA3nh',             addr:'100 Nguy\u1EC5n H\u1EEFu C\u1EA3nh, Q.B\xECnh Th\u1EA1nh',    lat:10.7963, lng:106.7162, dist:4.1, open24:true,  rating:4.4, fuels:['ron95','diesel'],         services:['shop'],           delta:{} },
  { id:12, brand:'plx',   name:'Petrolimex Phan X\xEDch Long',         addr:'166 Phan X\xEDch Long, P.2, Q.Ph\xFA Nhu\u1EADn', lat:10.7966, lng:106.6800, dist:4.4, open24:false, rating:4.2, fuels:['ron95','ron92'],          services:[],                 delta:{} },
  { id:13, brand:'pvoil', name:'PVOIL L\xEA V\u0103n S\u1EF9',                   addr:'377 L\xEA V\u0103n S\u1EF9, P.1, Q.T\xE2n B\xECnh',       lat:10.7898, lng:106.6663, dist:4.7, open24:true,  rating:4.4, fuels:['ron95','diesel'],         services:['carwash'],        delta:{} },
  { id:14, brand:'plx',   name:'Petrolimex T\xE2n S\u01A1n Nh\u1EA5t',           addr:'22 Tr\u01B0\u1EDDng S\u01A1n, P.2, Q.T\xE2n B\xECnh',        lat:10.8114, lng:106.6644, dist:5.2, open24:true,  rating:4.8, fuels:['ron95','ron92','diesel'], services:['carwash','shop'], delta:{} },
  { id:15, brand:'plx',   name:'Petrolimex Ho\xE0ng V\u0103n Th\u1EE5',         addr:'158 Ho\xE0ng V\u0103n Th\u1EE5, P.8, Q.Ph\xFA Nhu\u1EADn',  lat:10.7994, lng:106.6716, dist:5.5, open24:false, rating:4.3, fuels:['ron95','ron92','diesel'], services:['shop'],           delta:{} },
];

const FUEL_LABELS = { ron95: 'RON 95-III', ron92: 'E5 RON 92', diesel: 'Diesel' };

// \u2500\u2500 STATE \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
let activeType = 'station';
let activeFilter = 'all';
let activeId = null;
let markerMap = {};
let meMarker = null;

// Travel area state
let travelMode = 'walk';   // 'walk' | 'drive'
let travelMins = 10;
let travelCenter = [10.7847, 106.6879]; // default = map center
let travelCircle = null;
let travelActive = false;

// Speed m/min: walk 80, drive 500 (~30km/h city)
const SPEED = { walk: 80, drive: 500 };

function travelRadius() { return SPEED[travelMode] * travelMins; }

function haversine(lat1, lng1, lat2, lng2) {
  const R = 6371000;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(dLat/2)**2 + Math.cos(lat1*Math.PI/180) * Math.cos(lat2*Math.PI/180) * Math.sin(dLng/2)**2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}

// \u2500\u2500 MAP INIT \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
const map = L.map('map', {
  center: [10.7847, 106.6879],
  zoom: 14,
  zoomControl: false,
  attributionControl: true,
});
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org">OpenStreetMap</a> &copy; <a href="https://carto.com">CARTO</a>',
  subdomains: 'abcd', maxZoom: 19
}).addTo(map);

const markerCluster = L.markerClusterGroup({
  maxClusterRadius: 48,
  iconCreateFunction: function(cluster) {
    return L.divIcon({
      html: \`<div class="marker-cluster-inner">\${cluster.getChildCount()}</div>\`,
      className: 'marker-cluster marker-cluster-medium',
      iconSize: [40, 40]
    });
  }
});
map.addLayer(markerCluster);

// \u2500\u2500 HELPERS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
function fmtPrice(val) {
  return val.toLocaleString('vi-VN') + '\u0111';
}
function fuelPrice(s, fuel) {
  return FUELS_BASE[fuel] + (s.delta[fuel] || 0);
}

function filtered() {
  let list = [...STATIONS];

  if      (activeFilter === 'ron95')   list = list.filter(s => s.fuels.includes('ron95'));
  else if (activeFilter === 'diesel')  list = list.filter(s => s.fuels.includes('diesel'));
  else if (activeFilter === 'open24')  list = list.filter(s => s.open24);
  else if (activeFilter === 'carwash') list = list.filter(s => s.services.includes('carwash'));

  if (travelActive) {
    const r = travelRadius();
    list = list.filter(s => haversine(travelCenter[0], travelCenter[1], s.lat, s.lng) <= r);
  }

  const sort = document.getElementById('sortSelect').value;
  if (sort === 'dist')   list.sort((a,b) => a.dist - b.dist);
  if (sort === 'rating') list.sort((a,b) => b.rating - a.rating);
  if (sort === 'open')   list.sort((a,b) => (b.open24 ? 1:0) - (a.open24 ? 1:0));
  return list;
}

// \u2500\u2500 RENDER LIST \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
function renderList() {
  const list = filtered();
  const el = document.getElementById('stationList');
  document.getElementById('listCount').textContent = list.length + ' c\xE2y x\u0103ng';
  document.getElementById('mapCount').textContent = list.length + ' tr\u1EA1m';

  renderCardStrip();
  el.innerHTML = list.map(s => {
    const b = BRANDS[s.brand];
    const ron95price = fuelPrice(s, 'ron95');
    return \`
    <div class="station-card\${s.id === activeId ? ' is-active' : ''}" id="card-\${s.id}" onclick="selectStation(\${s.id})">
      <div class="station-brand-badge" style="background:linear-gradient(135deg,\${b.color} 0%,\${b.dark} 100%)">\${b.short}</div>
      <div class="station-info">
        <div class="station-name-row">
          <span class="station-name">\${s.name}</span>
          <span class="station-rating">\u2605 \${s.rating}</span>
        </div>
        <div class="station-addr">\${s.addr}</div>
        <div class="station-meta">
          <span class="badge badge-dist"><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>\${s.dist} km</span>
          <span class="badge \${s.open24 ? 'badge-open' : 'badge-closed'}">\${s.open24 ? '\u25CF M\u1EDF 24/7' : '\u25CB \u0110\xF3ng c\u1EEDa'}</span>
          \${s.services.includes('carwash') ? \`<span class="badge badge-svc">R\u1EEDa xe</span>\` : ''}
          \${s.services.includes('shop') ? \`<span class="badge badge-svc">Shop</span>\` : ''}
        </div>
        <div class="station-price-row">
          <div class="fuel-pill">RON 95 <strong>\${fmtPrice(ron95price)}/l\xEDt</strong></div>
          \${s.fuels.includes('diesel') ? \`<div class="fuel-pill">\xB7 Diesel <strong>\${fmtPrice(fuelPrice(s,'diesel'))}/l\xEDt</strong></div>\` : ''}
        </div>
      </div>
    </div>\`;
  }).join('');
}

// \u2500\u2500 RENDER MARKERS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
function renderMarkers() {
  markerCluster.clearLayers();
  markerMap = {};
  const list = filtered();

  list.forEach(s => {
    const isActive = s.id === activeId;
    const b = BRANDS[s.brand];
    const pinHtml = \`<div class="pin\${isActive ? ' active' : ''}">
      <div class="pin-icon" style="background:\${b.color}">\${b.short.slice(0,1)}</div>
      \${fmtPrice(fuelPrice(s,'ron95')).replace('\u0111','')}
    </div>\`;
    const icon = L.divIcon({ html: pinHtml, className: '', iconSize: [null,null], iconAnchor: [0,0] });
    const marker = L.marker([s.lat, s.lng], { icon }).addTo(markerCluster);
    marker.on('click', () => selectStation(s.id));
    markerMap[s.id] = marker;
  });
}

// \u2500\u2500 SELECT \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
function selectStation(id) {
  if (activeId === id) { closeDetail(); return; }
  activeId = id;
  renderList();
  renderMarkers();
  const s = STATIONS.find(x => x.id === id);
  if (!s) return;
  map.setView([s.lat, s.lng], 15, { animate: true });
  showDetail(s);
  setTimeout(() => {
    const card = document.getElementById('card-' + id);
    if (card) card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    scrollCardTo(id);
  }, 50);
}

function closeDetail() {
  activeId = null;
  document.querySelector('.split').classList.remove('detail-open');
  document.getElementById('detailPanel').classList.remove('open');
  renderList();
  renderMarkers();
}

function showDetail(s) {
  const b = BRANDS[s.brand];

  const mainContent = \`
    <div class="detail-section">
      <div class="detail-section-title">Gi\xE1 nhi\xEAn li\u1EC7u h\xF4m nay</div>
      <div class="detail-fuel-grid">
        \${s.fuels.map(f => \`
          <div class="detail-fuel-item">
            <div class="detail-fuel-type">\${FUEL_LABELS[f]}</div>
            <div class="detail-fuel-price">\${fmtPrice(fuelPrice(s, f))}<span class="detail-fuel-unit">/l\xEDt</span></div>
          </div>\`).join('')}
      </div>
    </div>
  \`;

  const openStatus = (s.open24
        ? '<span class="badge badge-open">\u25CF M\u1EDF 24/7</span>'
        : '<span class="badge badge-closed">\u25CB M\u1EDF 6:00 - 22:00</span>');

  document.getElementById('detailContent').innerHTML = \`
    <div class="detail-info-block">
      <div class="detail-info-top">
        <div class="detail-icon" style="background:linear-gradient(135deg,\${b.color} 0%,\${b.dark} 100%)">\${b.short}</div>
        <div class="detail-info-main">
          <h2 class="detail-name">\${s.name}</h2>
          <div class="detail-status-inline">\${openStatus}</div>
        </div>
      </div>
      <div class="detail-row">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        <span>\${s.addr} \xB7 <strong>\${s.dist} km</strong></span>
      </div>
      <div class="detail-row">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        <span class="detail-hours-inline">\${s.open24 ? 'M\u1EDF c\u1EEDa 24/7 - T\u1EA5t c\u1EA3 ng\xE0y trong tu\u1EA7n' : 'M\u1EDF c\u1EEDa 6:00 - 22:00 h\u1EB1ng ng\xE0y'}</span>
      </div>
    </div>
    <div class="detail-hero" style="background:linear-gradient(135deg,\${b.color} 0%,\${b.dark} 100%)">
      <div class="detail-hero-logo">\${b.short}</div>
      <div class="momo-overlay">
        <div class="momo-overlay-badge">
          <img src="https://homepage.momocdn.net/fileuploads/svg/momo-file-240411162904.svg" alt="MoMo">
          Thanh to\xE1n MoMo
        </div>
        <div class="momo-overlay-text">
          <strong>\${b.name}</strong>
          \u0110\u1ED5 x\u0103ng kh\xF4ng c\u1EA7n ti\u1EC1n m\u1EB7t
        </div>
      </div>
    </div>
    <div class="detail-scroll">
      \${mainContent}
      <div class="detail-actions">
        <button class="btn-primary" onclick="window.open('https://momo.vn', '_blank')">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          M\u1EDF App MoMo
        </button>
        <div class="detail-actions-split">
          <button class="btn-secondary" onclick="window.open('https://maps.google.com/?daddr=\${s.lat},\${s.lng}', '_blank')">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
            Ch\u1EC9 \u0111\u01B0\u1EDDng
          </button>
          <button class="btn-secondary">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 013.08 4.18 2 2 0 015 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L9.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            G\u1ECDi \u0111i\u1EC7n
          </button>
        </div>
      </div>
    </div>
  \`;
  document.querySelector('.split').classList.add('detail-open');
  document.getElementById('detailPanel').classList.add('open');
}

// \u2500\u2500 FILTER & SORT \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
function setFilter(f, btn) {
  activeFilter = f;
  activeId = null;
  document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  closeDetail();
  renderList();
  renderMarkers();
}
function sortStations() { renderList(); renderMarkers(); }

function renderFilterChips() {
  document.getElementById('filterBar').innerHTML = \`
    <button class="filter-chip active" onclick="setFilter('all',this)">T\u1EA5t c\u1EA3</button>
    <button class="filter-chip" onclick="setFilter('ron95',this)">
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.4 5M17 13l1.4 5M9 18a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm8 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>
      X\u0103ng RON 95
    </button>
    <button class="filter-chip" onclick="setFilter('diesel',this)">
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/></svg>
      D\u1EA7u Diesel
    </button>
    <button class="filter-chip" onclick="setFilter('open24',this)">
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
      M\u1EDF 24/7
    </button>
    <button class="filter-chip" onclick="setFilter('carwash',this)">R\u1EEDa xe</button>\`;
}

// \u2500\u2500 TRAVEL AREA \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
function onSliderInput(val) {
  travelMins = +val;
  document.getElementById('travelMinsLabel').textContent = val + ' ph\xFAt';
  const pct = ((val - 5) / 25 * 100).toFixed(1) + '%';
  document.getElementById('travelSlider').style.setProperty('--fill', pct);
  if (travelCircle) {
    travelCircle.setRadius(travelRadius());
    renderList();
    renderMarkers();
  }
}

function setTravelMode(mode) {
  travelMode = mode;
  document.getElementById('modeWalk').classList.toggle('active', mode === 'walk');
  document.getElementById('modeDrive').classList.toggle('active', mode === 'drive');
  if (travelCircle) {
    travelCircle.setRadius(travelRadius());
    renderList();
    renderMarkers();
  }
}

function applyTravelArea() {
  // Use current map center as anchor if no GPS
  travelCenter = [map.getCenter().lat, map.getCenter().lng];
  travelActive = true;

  const r = travelRadius();
  if (travelCircle) map.removeLayer(travelCircle);
  travelCircle = L.circle(travelCenter, {
    radius: r,
    color: '#1C171A',
    weight: 2,
    dashArray: '6 4',
    fillColor: '#1C171A',
    fillOpacity: 0.05,
  }).addTo(map);

  document.getElementById('travelBar').classList.add('travel-area-active');
  document.getElementById('travelSlider').style.setProperty('--fill',
    ((travelMins - 5) / 25 * 100).toFixed(1) + '%');

  renderList();
  renderMarkers();

  // Fit map to circle
  map.fitBounds(travelCircle.getBounds(), { padding: [32, 32] });
}

function clearTravelArea() {
  travelActive = false;
  if (travelCircle) { map.removeLayer(travelCircle); travelCircle = null; }
  document.getElementById('travelBar').classList.remove('travel-area-active');
  renderList(); renderMarkers();
}

// \u2500\u2500 GEOLOCATION \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
function locateMe() {
  if (!navigator.geolocation) return;
  document.getElementById('locateBtn').classList.add('active');
  navigator.geolocation.getCurrentPosition(pos => {
    const { latitude: lat, longitude: lng } = pos.coords;
    travelCenter = [lat, lng];
    map.setView([lat, lng], 15);
    if (meMarker) map.removeLayer(meMarker);
    meMarker = L.marker([lat, lng], {
      icon: L.divIcon({
        html: '<div class="me-dot"></div>',
        className: '', iconSize: [14, 14], iconAnchor: [7, 7]
      })
    }).addTo(map);
    // Auto-apply travel area from GPS
    travelActive = true;
    applyTravelArea();
    setTimeout(() => document.getElementById('locateBtn').classList.remove('active'), 2000);
  }, () => {
    document.getElementById('locateBtn').classList.remove('active');
  });
}

// \u2500\u2500 CARD STRIP \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
function renderCardStrip() {
  const track = document.getElementById('cardStripTrack');
  if (!track) return;
  const list = filtered();

  track.innerHTML = list.map(s => {
    const b = BRANDS[s.brand];
    const p95 = fuelPrice(s, 'ron95');
    const isActive = s.id === activeId;
    const openBadge = s.open24
      ? \`<span style="color:var(--green-500)">\u25CF M\u1EDF 24/7</span>\`
      : \`<span style="color:var(--red-500)">\u25CB \u0110\xF3ng c\u1EEDa</span>\`;
    return \`
    <div class="swipe-card\${isActive ? ' is-active' : ''}" id="swipe-\${s.id}" data-id="\${s.id}" onclick="selectStation(\${s.id})">
      <div class="swipe-card-top">
        <div class="swipe-badge" style="background:linear-gradient(135deg,\${b.color} 0%,\${b.dark} 100%)">\${b.short}</div>
        <div class="swipe-info">
          <div class="swipe-name">\${s.name}</div>
          <div class="swipe-meta">\${s.dist} km \xB7 \${openBadge}</div>
        </div>
        <div class="swipe-rating">\u2605 \${s.rating}</div>
      </div>
      <div class="swipe-prices">
        <div>
          <div class="swipe-price-label">RON 95-III</div>
          <div><span class="swipe-price-value">\${p95.toLocaleString('vi-VN')}</span><span class="swipe-price-unit">\u0111/l\xEDt</span></div>
          \${s.fuels.includes('diesel') ? \`<div class="swipe-price-secondary">Diesel \${fmtPrice(fuelPrice(s,'diesel'))}</div>\` : ''}
        </div>
        <button class="swipe-cta" onclick="event.stopPropagation();selectStation(\${s.id})">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          Chi ti\u1EBFt
        </button>
      </div>
    </div>\`;
  }).join('');

  setupCardSnap(list);
}

let _snapTimer;
function setupCardSnap(list) {
  const track = document.getElementById('cardStripTrack');
  if (!track || track._snapBound) return;
  track._snapBound = true;

  track.addEventListener('scroll', () => {
    clearTimeout(_snapTimer);
    _snapTimer = setTimeout(() => {
      const cards = track.querySelectorAll('.swipe-card');
      const center = track.scrollLeft + track.clientWidth / 2;
      let closest = null, minDist = Infinity;
      cards.forEach(c => {
        const d = Math.abs((c.offsetLeft + c.offsetWidth / 2) - center);
        if (d < minDist) { minDist = d; closest = c; }
      });
      if (!closest) return;
      const id = parseInt(closest.dataset.id);
      if (id === activeId) return;
      activeId = id;
      const s = list.find(x => x.id === id);
      if (s) map.setView([s.lat, s.lng], 15, { animate: true, duration: 0.4 });
      renderMarkers();
      cards.forEach(c => c.classList.toggle('is-active', parseInt(c.dataset.id) === id));
    }, 100);
  }, { passive: true });
}

function scrollCardTo(id) {
  const card = document.getElementById('swipe-' + id);
  if (card) card.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
}

// \u2500\u2500 INIT \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
renderFilterChips();
renderList();
renderMarkers();
renderCardStrip();

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
<\/script> `], ['  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" crossorigin=""> <link rel="stylesheet" href="https://unpkg.com/leaflet.markercluster@1.5.3/dist/MarkerCluster.css"> <link rel="stylesheet" href="https://unpkg.com/leaflet.markercluster@1.5.3/dist/MarkerCluster.Default.css">   ', `<div class="page-top"> <div class="page-top-inner"> <div class="breadcrumb"> <a href="/tien-ich-giao-thong">Xe &amp; Giao Th\xF4ng</a> <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg> <span>C\xE2y x\u0103ng g\u1EA7n b\u1EA1n</span> </div> <h1 class="page-title">C\xE2y x\u0103ng g\u1EA7n b\u1EA1n</h1> <p class="page-desc">T\xECm tr\u1EA1m x\u0103ng \u0111\u1ED1i t\xE1c Petrolimex &amp; PVOIL g\u1EA7n nh\u1EA5t - xem gi\xE1 h\xF4m nay, gi\u1EDD m\u1EDF c\u1EEDa v\xE0 ch\u1EC9 \u0111\u01B0\u1EDDng.</p> <div class="page-stats"> <div class="page-stat"> <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v4l3 3"></path></svg> <span>C\u1EADp nh\u1EADt <strong>h\xF4m nay</strong></span> </div> <div class="page-stat"> <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path></svg> <span><strong>Petrolimex &amp; PVOIL</strong> \u0111\u1ED1i t\xE1c</span> </div> </div> </div> </div>  <div class="filter-bar"> <div class="filter-bar-row"> <div class="filter-bar-inner" id="filterBar"></div> </div> </div>  <div class="split"> <!-- LIST PANE --> <div class="list-pane"> <div class="list-header"> <div class="list-header-left"> <h2 id="listCount">18 c\xE2y x\u0103ng</h2> <p>G\u1EA7n khu v\u1EF1c Qu\u1EADn 1, TP.HCM</p> </div> <div class="sort-btn"> <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 6h18M7 12h10M11 18h2"></path></svg> <select id="sortSelect" onchange="sortStations()"> <option value="dist">G\u1EA7n nh\u1EA5t</option> <option value="rating">\u0110\xE1nh gi\xE1 cao</option> <option value="open">\u0110ang m\u1EDF</option> </select> </div> </div> <div class="station-list" id="stationList"></div> </div> <!-- DETAIL COLUMN --> <div class="detail-panel" id="detailPanel"> <div class="detail-drag-handle"></div> <div class="detail-topbar"> <button class="detail-back" onclick="closeDetail()"> <i data-lucide="chevron-left" width="14" height="14"></i>
Danh s\xE1ch
</button> <button class="detail-close" onclick="closeDetail()"> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> </button> </div> <div id="detailContent" style="flex:1;display:flex;flex-direction:column;overflow:hidden;min-height:0"></div> </div> <!-- MAP PANE --> <div class="map-pane"> <div id="map"></div> <div class="map-badge"> <i></i> <span id="mapCount">18 tr\u1EA1m</span> </div> <div class="map-ctrl"> <button class="map-ctrl-btn locate" id="locateBtn" title="V\u1ECB tr\xED c\u1EE7a t\xF4i" onclick="locateMe()"> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path d="M12 2v3M12 19v3M2 12h3M19 12h3"></path><circle cx="12" cy="12" r="8" stroke-dasharray="3 3"></circle></svg> </button> <button class="map-ctrl-btn" title="Ph\xF3ng to" onclick="map.zoomIn()"> <i data-lucide="plus" width="14" height="14"></i> </button> <button class="map-ctrl-btn" title="Thu nh\u1ECF" onclick="map.zoomOut()"> <i data-lucide="minus" width="14" height="14"></i> </button> </div> <!-- TRAVEL CONTROL --> <div class="travel-bar" id="travelBar"> <div class="travel-mode"> <button class="travel-mode-btn active" id="modeWalk" onclick="setTravelMode('walk')"> <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="5" r="2"></circle><path d="M8 14l2-4 2 2 2-4"></path><path d="M7 21l2-5h6l2 5"></path></svg>
\u0110i b\u1ED9
</button> <button class="travel-mode-btn" id="modeDrive" onclick="setTravelMode('drive')"> <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="10" rx="2"></rect><path d="M16 7l-2-4H10L8 7"></path><circle cx="7" cy="17" r="2"></circle><circle cx="17" cy="17" r="2"></circle></svg>
L\xE1i xe
</button> </div> <div class="travel-slider-wrap"> <div class="travel-slider-label"> <span>Th\u1EDDi gian di chuy\u1EC3n</span> <strong id="travelMinsLabel">10 ph\xFAt</strong> </div> <input class="travel-slider" id="travelSlider" type="range" min="5" max="30" step="5" value="10" oninput="onSliderInput(this.value)"> </div> <button class="travel-update-btn" onclick="applyTravelArea()"> <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 .49-3.5"></path></svg>
C\u1EADp nh\u1EADt
</button> </div> </div> </div>  <div class="card-strip" id="cardStrip"> <div class="card-strip-track" id="cardStripTrack"></div> </div>  `, " ", ` <script>
// \u2500\u2500 DATA \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
const BRANDS = {
  plx:   { name: 'Petrolimex', short: 'PLX', color: '#DA2032', dark: '#A5172B' },
  pvoil: { name: 'PVOIL',      short: 'PVO', color: '#003087', dark: '#001F5C' },
};

const FUELS_BASE = { ron95: 23150, ron92: 21810, diesel: 20150 };

const GARAGE_BRANDS = {
  honda:   { name: 'Honda Head',       short: 'HH',  color: '#CC0000', dark: '#8B0000' },
  yamaha:  { name: 'Yamaha Town',      short: 'YT',  color: '#003087', dark: '#001A5C' },
  vinfast: { name: 'VinFast Service',  short: 'VF',  color: '#00856F', dark: '#005C4C' },
  generic: { name: 'Garage',           short: 'GA',  color: '#F59E0B', dark: '#D97706' },
};
const SVC_LABELS = { motorbike:'Xe m\xE1y', car:'\xD4 t\xF4', oil:'Thay d\u1EA7u', tire:'V\xE1 l\u1ED1p', wash:'R\u1EEDa xe', inspect:'\u0110\u0103ng ki\u1EC3m', body:'\u0110\u1ED3ng s\u01A1n' };

const GARAGES = [
  { id:201, brand:'honda',   name:'Honda Head Nguy\u1EC5n Tr\xE3i',         addr:'12 Nguy\u1EC5n Tr\xE3i, P.B\u1EBFn Th\xE0nh, Q.1',        lat:10.7718, lng:106.6900, dist:0.8, open24:false, rating:4.7, vehicles:['motorbike'],        services:['oil','tire','wash'],            hours:'7:30 - 18:00' },
  { id:202, brand:'yamaha',  name:'Yamaha Town L\xEA L\u1EE3i',              addr:'55 L\xEA L\u1EE3i, P.B\u1EBFn Ngh\xE9, Q.1',              lat:10.7745, lng:106.7025, dist:1.1, open24:false, rating:4.5, vehicles:['motorbike'],        services:['oil','tire','wash','inspect'],  hours:'8:00 - 17:30' },
  { id:203, brand:'generic', name:'Garage \xD4 T\xF4 Tr\u1EA7n H\u01B0ng \u0110\u1EA1o',      addr:'122 Tr\u1EA7n H\u01B0ng \u0110\u1EA1o, P.C\u1EA7u Kho, Q.1',       lat:10.7656, lng:106.6912, dist:1.5, open24:false, rating:4.4, vehicles:['car'],              services:['oil','tire','body','wash'],     hours:'7:00 - 18:30' },
  { id:204, brand:'honda',   name:'Honda Head \u0110inh Ti\xEAn Ho\xE0ng',      addr:'88 \u0110inh Ti\xEAn Ho\xE0ng, P.\u0110a Kao, Q.1',       lat:10.7905, lng:106.6990, dist:1.7, open24:false, rating:4.6, vehicles:['motorbike'],        services:['oil','tire','wash'],            hours:'7:30 - 17:30' },
  { id:205, brand:'vinfast', name:'VinFast Service Center Q.3',      addr:'25 V\xF5 V\u0103n T\u1EA7n, P.6, Q.3',                 lat:10.7810, lng:106.6830, dist:2.0, open24:false, rating:4.8, vehicles:['car'],              services:['oil','tire','body','inspect'],  hours:'7:00 - 19:00' },
  { id:206, brand:'generic', name:'Garage Xe M\xE1y Hai B\xE0 Tr\u01B0ng',      addr:'230 Hai B\xE0 Tr\u01B0ng, P.T\xE2n \u0110\u1ECBnh, Q.1',       lat:10.7890, lng:106.6940, dist:2.2, open24:false, rating:4.2, vehicles:['motorbike'],        services:['oil','tire'],                  hours:'7:00 - 18:00' },
  { id:207, brand:'yamaha',  name:'Yamaha Town C\xE1ch M\u1EA1ng Th\xE1ng T\xE1m', addr:'180 CMT8, P.3, Q.3',                       lat:10.7795, lng:106.6755, dist:2.9, open24:false, rating:4.3, vehicles:['motorbike'],        services:['oil','tire','wash','inspect'],  hours:'8:00 - 17:30' },
  { id:208, brand:'generic', name:'Garage \xD4 T\xF4 B\xECnh Th\u1EA1nh',          addr:'34 \u0110inh B\u1ED9 L\u0129nh, P.24, Q.B\xECnh Th\u1EA1nh',    lat:10.8060, lng:106.7110, dist:3.5, open24:false, rating:4.5, vehicles:['car','motorbike'],  services:['oil','tire','body','wash'],     hours:'7:00 - 18:00' },
  { id:209, brand:'honda',   name:'Honda Head Ph\xFA Nhu\u1EADn',             addr:'92 Ho\xE0ng V\u0103n Th\u1EE5, P.9, Q.Ph\xFA Nhu\u1EADn',     lat:10.8000, lng:106.6720, dist:3.8, open24:false, rating:4.6, vehicles:['motorbike'],        services:['oil','tire','wash'],            hours:'7:30 - 18:00' },
  { id:210, brand:'vinfast', name:'VinFast Service Center Q.5',       addr:'56 Nguy\u1EC5n Tr\xE3i, P.2, Q.5',               lat:10.7580, lng:106.6820, dist:4.0, open24:false, rating:4.7, vehicles:['car'],              services:['oil','tire','body','inspect'],  hours:'7:00 - 19:00' },
  { id:211, brand:'generic', name:'Garage K\u1EF9 Thu\u1EADt L\xEA V\u0103n S\u1EF9',       addr:'290 L\xEA V\u0103n S\u1EF9, P.14, Q.3',               lat:10.7890, lng:106.6680, dist:4.3, open24:false, rating:4.3, vehicles:['car','motorbike'],  services:['oil','tire','body'],            hours:'7:30 - 17:30' },
  { id:212, brand:'yamaha',  name:'Yamaha Town T\xE2n B\xECnh',             addr:'44 Tr\u01B0\u1EDDng S\u01A1n, P.2, Q.T\xE2n B\xECnh',          lat:10.8100, lng:106.6660, dist:4.9, open24:false, rating:4.4, vehicles:['motorbike'],        services:['oil','tire','wash','inspect'],  hours:'8:00 - 17:30' },
];

const STATIONS = [
  { id:1,  brand:'plx',   name:'Petrolimex s\u1ED1 6 \u0110inh Ti\xEAn Ho\xE0ng',  addr:'6 \u0110inh Ti\xEAn Ho\xE0ng, P.\u0110a Kao, Q.1',      lat:10.7892, lng:106.6975, dist:0.4, open24:true,  rating:4.7, fuels:['ron95','ron92','diesel'], services:['carwash','shop'], delta:{} },
  { id:2,  brand:'plx',   name:'Petrolimex Nguy\u1EC5n Th\u1ECB Minh Khai',  addr:'45 Nguy\u1EC5n Th\u1ECB Minh Khai, Q.1',          lat:10.7823, lng:106.6844, dist:1.2, open24:false, rating:4.3, fuels:['ron95','ron92'],          services:['shop'],           delta:{ ron95:-200 } },
  { id:3,  brand:'plx',   name:'Petrolimex L\xEA Du\u1EA9n',               addr:'124 L\xEA Du\u1EA9n, P.B\u1EBFn Ngh\xE9, Q.1',          lat:10.7799, lng:106.7005, dist:1.4, open24:true,  rating:4.6, fuels:['ron95','ron92','diesel'], services:['carwash'],        delta:{ ron95:-100 } },
  { id:4,  brand:'pvoil', name:'PVOIL \u0110i\u1EC7n Bi\xEAn Ph\u1EE7',               addr:'312 \u0110i\u1EC7n Bi\xEAn Ph\u1EE7, P.4, Q.3',           lat:10.7831, lng:106.6803, dist:2.1, open24:true,  rating:4.4, fuels:['ron95','diesel'],         services:[],                 delta:{} },
  { id:5,  brand:'plx',   name:'Petrolimex Hai B\xE0 Tr\u01B0ng',           addr:'178 Hai B\xE0 Tr\u01B0ng, P.\u0110a Kao, Q.1',       lat:10.7874, lng:106.6928, dist:2.3, open24:true,  rating:4.6, fuels:['ron95','ron92','diesel'], services:['carwash','shop'], delta:{} },
  { id:6,  brand:'plx',   name:'Petrolimex C\xE1ch M\u1EA1ng Th\xE1ng T\xE1m',   addr:'210 CMT8, P.4, Q.3',                     lat:10.7789, lng:106.6780, dist:2.8, open24:true,  rating:4.5, fuels:['ron95','ron92','diesel'], services:['shop'],           delta:{} },
  { id:7,  brand:'pvoil', name:'PVOIL S\u01B0 V\u1EA1n H\u1EA1nh',                 addr:'268 S\u01B0 V\u1EA1n H\u1EA1nh, P.9, Q.10',            lat:10.7780, lng:106.6686, dist:3.3, open24:true,  rating:4.5, fuels:['ron95','ron92'],          services:[],                 delta:{} },
  { id:8,  brand:'pvoil', name:'PVOIL Nguy\u1EC5n Tr\xE3i',                 addr:'405 Nguy\u1EC5n Tr\xE3i, P.7, Q.5',             lat:10.7601, lng:106.6810, dist:3.6, open24:true,  rating:4.3, fuels:['ron95','ron92','diesel'], services:['carwash'],        delta:{ diesel:-100 } },
  { id:9,  brand:'plx',   name:'Petrolimex B\xECnh Th\u1EA1nh',             addr:'50 \u0110inh B\u1ED9 L\u0129nh, P.26, Q.B\xECnh Th\u1EA1nh',  lat:10.8074, lng:106.7097, dist:3.9, open24:true,  rating:4.7, fuels:['ron95','ron92','diesel'], services:['carwash','shop'], delta:{} },
  { id:10, brand:'pvoil', name:'PVOIL Ho\xE0ng Di\u1EC7u',                  addr:'90 Ho\xE0ng Di\u1EC7u, P.9, Q.4',               lat:10.7656, lng:106.6964, dist:4.2, open24:false, rating:4.1, fuels:['ron95','diesel'],         services:[],                 delta:{ ron95:+100 } },
  { id:11, brand:'pvoil', name:'PVOIL Nguy\u1EC5n H\u1EEFu C\u1EA3nh',             addr:'100 Nguy\u1EC5n H\u1EEFu C\u1EA3nh, Q.B\xECnh Th\u1EA1nh',    lat:10.7963, lng:106.7162, dist:4.1, open24:true,  rating:4.4, fuels:['ron95','diesel'],         services:['shop'],           delta:{} },
  { id:12, brand:'plx',   name:'Petrolimex Phan X\xEDch Long',         addr:'166 Phan X\xEDch Long, P.2, Q.Ph\xFA Nhu\u1EADn', lat:10.7966, lng:106.6800, dist:4.4, open24:false, rating:4.2, fuels:['ron95','ron92'],          services:[],                 delta:{} },
  { id:13, brand:'pvoil', name:'PVOIL L\xEA V\u0103n S\u1EF9',                   addr:'377 L\xEA V\u0103n S\u1EF9, P.1, Q.T\xE2n B\xECnh',       lat:10.7898, lng:106.6663, dist:4.7, open24:true,  rating:4.4, fuels:['ron95','diesel'],         services:['carwash'],        delta:{} },
  { id:14, brand:'plx',   name:'Petrolimex T\xE2n S\u01A1n Nh\u1EA5t',           addr:'22 Tr\u01B0\u1EDDng S\u01A1n, P.2, Q.T\xE2n B\xECnh',        lat:10.8114, lng:106.6644, dist:5.2, open24:true,  rating:4.8, fuels:['ron95','ron92','diesel'], services:['carwash','shop'], delta:{} },
  { id:15, brand:'plx',   name:'Petrolimex Ho\xE0ng V\u0103n Th\u1EE5',         addr:'158 Ho\xE0ng V\u0103n Th\u1EE5, P.8, Q.Ph\xFA Nhu\u1EADn',  lat:10.7994, lng:106.6716, dist:5.5, open24:false, rating:4.3, fuels:['ron95','ron92','diesel'], services:['shop'],           delta:{} },
];

const FUEL_LABELS = { ron95: 'RON 95-III', ron92: 'E5 RON 92', diesel: 'Diesel' };

// \u2500\u2500 STATE \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
let activeType = 'station';
let activeFilter = 'all';
let activeId = null;
let markerMap = {};
let meMarker = null;

// Travel area state
let travelMode = 'walk';   // 'walk' | 'drive'
let travelMins = 10;
let travelCenter = [10.7847, 106.6879]; // default = map center
let travelCircle = null;
let travelActive = false;

// Speed m/min: walk 80, drive 500 (~30km/h city)
const SPEED = { walk: 80, drive: 500 };

function travelRadius() { return SPEED[travelMode] * travelMins; }

function haversine(lat1, lng1, lat2, lng2) {
  const R = 6371000;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(dLat/2)**2 + Math.cos(lat1*Math.PI/180) * Math.cos(lat2*Math.PI/180) * Math.sin(dLng/2)**2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}

// \u2500\u2500 MAP INIT \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
const map = L.map('map', {
  center: [10.7847, 106.6879],
  zoom: 14,
  zoomControl: false,
  attributionControl: true,
});
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org">OpenStreetMap</a> &copy; <a href="https://carto.com">CARTO</a>',
  subdomains: 'abcd', maxZoom: 19
}).addTo(map);

const markerCluster = L.markerClusterGroup({
  maxClusterRadius: 48,
  iconCreateFunction: function(cluster) {
    return L.divIcon({
      html: \\\`<div class="marker-cluster-inner">\\\${cluster.getChildCount()}</div>\\\`,
      className: 'marker-cluster marker-cluster-medium',
      iconSize: [40, 40]
    });
  }
});
map.addLayer(markerCluster);

// \u2500\u2500 HELPERS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
function fmtPrice(val) {
  return val.toLocaleString('vi-VN') + '\u0111';
}
function fuelPrice(s, fuel) {
  return FUELS_BASE[fuel] + (s.delta[fuel] || 0);
}

function filtered() {
  let list = [...STATIONS];

  if      (activeFilter === 'ron95')   list = list.filter(s => s.fuels.includes('ron95'));
  else if (activeFilter === 'diesel')  list = list.filter(s => s.fuels.includes('diesel'));
  else if (activeFilter === 'open24')  list = list.filter(s => s.open24);
  else if (activeFilter === 'carwash') list = list.filter(s => s.services.includes('carwash'));

  if (travelActive) {
    const r = travelRadius();
    list = list.filter(s => haversine(travelCenter[0], travelCenter[1], s.lat, s.lng) <= r);
  }

  const sort = document.getElementById('sortSelect').value;
  if (sort === 'dist')   list.sort((a,b) => a.dist - b.dist);
  if (sort === 'rating') list.sort((a,b) => b.rating - a.rating);
  if (sort === 'open')   list.sort((a,b) => (b.open24 ? 1:0) - (a.open24 ? 1:0));
  return list;
}

// \u2500\u2500 RENDER LIST \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
function renderList() {
  const list = filtered();
  const el = document.getElementById('stationList');
  document.getElementById('listCount').textContent = list.length + ' c\xE2y x\u0103ng';
  document.getElementById('mapCount').textContent = list.length + ' tr\u1EA1m';

  renderCardStrip();
  el.innerHTML = list.map(s => {
    const b = BRANDS[s.brand];
    const ron95price = fuelPrice(s, 'ron95');
    return \\\`
    <div class="station-card\\\${s.id === activeId ? ' is-active' : ''}" id="card-\\\${s.id}" onclick="selectStation(\\\${s.id})">
      <div class="station-brand-badge" style="background:linear-gradient(135deg,\\\${b.color} 0%,\\\${b.dark} 100%)">\\\${b.short}</div>
      <div class="station-info">
        <div class="station-name-row">
          <span class="station-name">\\\${s.name}</span>
          <span class="station-rating">\u2605 \\\${s.rating}</span>
        </div>
        <div class="station-addr">\\\${s.addr}</div>
        <div class="station-meta">
          <span class="badge badge-dist"><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>\\\${s.dist} km</span>
          <span class="badge \\\${s.open24 ? 'badge-open' : 'badge-closed'}">\\\${s.open24 ? '\u25CF M\u1EDF 24/7' : '\u25CB \u0110\xF3ng c\u1EEDa'}</span>
          \\\${s.services.includes('carwash') ? \\\`<span class="badge badge-svc">R\u1EEDa xe</span>\\\` : ''}
          \\\${s.services.includes('shop') ? \\\`<span class="badge badge-svc">Shop</span>\\\` : ''}
        </div>
        <div class="station-price-row">
          <div class="fuel-pill">RON 95 <strong>\\\${fmtPrice(ron95price)}/l\xEDt</strong></div>
          \\\${s.fuels.includes('diesel') ? \\\`<div class="fuel-pill">\xB7 Diesel <strong>\\\${fmtPrice(fuelPrice(s,'diesel'))}/l\xEDt</strong></div>\\\` : ''}
        </div>
      </div>
    </div>\\\`;
  }).join('');
}

// \u2500\u2500 RENDER MARKERS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
function renderMarkers() {
  markerCluster.clearLayers();
  markerMap = {};
  const list = filtered();

  list.forEach(s => {
    const isActive = s.id === activeId;
    const b = BRANDS[s.brand];
    const pinHtml = \\\`<div class="pin\\\${isActive ? ' active' : ''}">
      <div class="pin-icon" style="background:\\\${b.color}">\\\${b.short.slice(0,1)}</div>
      \\\${fmtPrice(fuelPrice(s,'ron95')).replace('\u0111','')}
    </div>\\\`;
    const icon = L.divIcon({ html: pinHtml, className: '', iconSize: [null,null], iconAnchor: [0,0] });
    const marker = L.marker([s.lat, s.lng], { icon }).addTo(markerCluster);
    marker.on('click', () => selectStation(s.id));
    markerMap[s.id] = marker;
  });
}

// \u2500\u2500 SELECT \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
function selectStation(id) {
  if (activeId === id) { closeDetail(); return; }
  activeId = id;
  renderList();
  renderMarkers();
  const s = STATIONS.find(x => x.id === id);
  if (!s) return;
  map.setView([s.lat, s.lng], 15, { animate: true });
  showDetail(s);
  setTimeout(() => {
    const card = document.getElementById('card-' + id);
    if (card) card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    scrollCardTo(id);
  }, 50);
}

function closeDetail() {
  activeId = null;
  document.querySelector('.split').classList.remove('detail-open');
  document.getElementById('detailPanel').classList.remove('open');
  renderList();
  renderMarkers();
}

function showDetail(s) {
  const b = BRANDS[s.brand];

  const mainContent = \\\`
    <div class="detail-section">
      <div class="detail-section-title">Gi\xE1 nhi\xEAn li\u1EC7u h\xF4m nay</div>
      <div class="detail-fuel-grid">
        \\\${s.fuels.map(f => \\\`
          <div class="detail-fuel-item">
            <div class="detail-fuel-type">\\\${FUEL_LABELS[f]}</div>
            <div class="detail-fuel-price">\\\${fmtPrice(fuelPrice(s, f))}<span class="detail-fuel-unit">/l\xEDt</span></div>
          </div>\\\`).join('')}
      </div>
    </div>
  \\\`;

  const openStatus = (s.open24
        ? '<span class="badge badge-open">\u25CF M\u1EDF 24/7</span>'
        : '<span class="badge badge-closed">\u25CB M\u1EDF 6:00 - 22:00</span>');

  document.getElementById('detailContent').innerHTML = \\\`
    <div class="detail-info-block">
      <div class="detail-info-top">
        <div class="detail-icon" style="background:linear-gradient(135deg,\\\${b.color} 0%,\\\${b.dark} 100%)">\\\${b.short}</div>
        <div class="detail-info-main">
          <h2 class="detail-name">\\\${s.name}</h2>
          <div class="detail-status-inline">\\\${openStatus}</div>
        </div>
      </div>
      <div class="detail-row">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        <span>\\\${s.addr} \xB7 <strong>\\\${s.dist} km</strong></span>
      </div>
      <div class="detail-row">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        <span class="detail-hours-inline">\\\${s.open24 ? 'M\u1EDF c\u1EEDa 24/7 - T\u1EA5t c\u1EA3 ng\xE0y trong tu\u1EA7n' : 'M\u1EDF c\u1EEDa 6:00 - 22:00 h\u1EB1ng ng\xE0y'}</span>
      </div>
    </div>
    <div class="detail-hero" style="background:linear-gradient(135deg,\\\${b.color} 0%,\\\${b.dark} 100%)">
      <div class="detail-hero-logo">\\\${b.short}</div>
      <div class="momo-overlay">
        <div class="momo-overlay-badge">
          <img src="https://homepage.momocdn.net/fileuploads/svg/momo-file-240411162904.svg" alt="MoMo">
          Thanh to\xE1n MoMo
        </div>
        <div class="momo-overlay-text">
          <strong>\\\${b.name}</strong>
          \u0110\u1ED5 x\u0103ng kh\xF4ng c\u1EA7n ti\u1EC1n m\u1EB7t
        </div>
      </div>
    </div>
    <div class="detail-scroll">
      \\\${mainContent}
      <div class="detail-actions">
        <button class="btn-primary" onclick="window.open('https://momo.vn', '_blank')">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          M\u1EDF App MoMo
        </button>
        <div class="detail-actions-split">
          <button class="btn-secondary" onclick="window.open('https://maps.google.com/?daddr=\\\${s.lat},\\\${s.lng}', '_blank')">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
            Ch\u1EC9 \u0111\u01B0\u1EDDng
          </button>
          <button class="btn-secondary">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 013.08 4.18 2 2 0 015 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L9.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            G\u1ECDi \u0111i\u1EC7n
          </button>
        </div>
      </div>
    </div>
  \\\`;
  document.querySelector('.split').classList.add('detail-open');
  document.getElementById('detailPanel').classList.add('open');
}

// \u2500\u2500 FILTER & SORT \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
function setFilter(f, btn) {
  activeFilter = f;
  activeId = null;
  document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  closeDetail();
  renderList();
  renderMarkers();
}
function sortStations() { renderList(); renderMarkers(); }

function renderFilterChips() {
  document.getElementById('filterBar').innerHTML = \\\`
    <button class="filter-chip active" onclick="setFilter('all',this)">T\u1EA5t c\u1EA3</button>
    <button class="filter-chip" onclick="setFilter('ron95',this)">
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.4 5M17 13l1.4 5M9 18a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm8 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>
      X\u0103ng RON 95
    </button>
    <button class="filter-chip" onclick="setFilter('diesel',this)">
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/></svg>
      D\u1EA7u Diesel
    </button>
    <button class="filter-chip" onclick="setFilter('open24',this)">
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
      M\u1EDF 24/7
    </button>
    <button class="filter-chip" onclick="setFilter('carwash',this)">R\u1EEDa xe</button>\\\`;
}

// \u2500\u2500 TRAVEL AREA \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
function onSliderInput(val) {
  travelMins = +val;
  document.getElementById('travelMinsLabel').textContent = val + ' ph\xFAt';
  const pct = ((val - 5) / 25 * 100).toFixed(1) + '%';
  document.getElementById('travelSlider').style.setProperty('--fill', pct);
  if (travelCircle) {
    travelCircle.setRadius(travelRadius());
    renderList();
    renderMarkers();
  }
}

function setTravelMode(mode) {
  travelMode = mode;
  document.getElementById('modeWalk').classList.toggle('active', mode === 'walk');
  document.getElementById('modeDrive').classList.toggle('active', mode === 'drive');
  if (travelCircle) {
    travelCircle.setRadius(travelRadius());
    renderList();
    renderMarkers();
  }
}

function applyTravelArea() {
  // Use current map center as anchor if no GPS
  travelCenter = [map.getCenter().lat, map.getCenter().lng];
  travelActive = true;

  const r = travelRadius();
  if (travelCircle) map.removeLayer(travelCircle);
  travelCircle = L.circle(travelCenter, {
    radius: r,
    color: '#1C171A',
    weight: 2,
    dashArray: '6 4',
    fillColor: '#1C171A',
    fillOpacity: 0.05,
  }).addTo(map);

  document.getElementById('travelBar').classList.add('travel-area-active');
  document.getElementById('travelSlider').style.setProperty('--fill',
    ((travelMins - 5) / 25 * 100).toFixed(1) + '%');

  renderList();
  renderMarkers();

  // Fit map to circle
  map.fitBounds(travelCircle.getBounds(), { padding: [32, 32] });
}

function clearTravelArea() {
  travelActive = false;
  if (travelCircle) { map.removeLayer(travelCircle); travelCircle = null; }
  document.getElementById('travelBar').classList.remove('travel-area-active');
  renderList(); renderMarkers();
}

// \u2500\u2500 GEOLOCATION \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
function locateMe() {
  if (!navigator.geolocation) return;
  document.getElementById('locateBtn').classList.add('active');
  navigator.geolocation.getCurrentPosition(pos => {
    const { latitude: lat, longitude: lng } = pos.coords;
    travelCenter = [lat, lng];
    map.setView([lat, lng], 15);
    if (meMarker) map.removeLayer(meMarker);
    meMarker = L.marker([lat, lng], {
      icon: L.divIcon({
        html: '<div class="me-dot"></div>',
        className: '', iconSize: [14, 14], iconAnchor: [7, 7]
      })
    }).addTo(map);
    // Auto-apply travel area from GPS
    travelActive = true;
    applyTravelArea();
    setTimeout(() => document.getElementById('locateBtn').classList.remove('active'), 2000);
  }, () => {
    document.getElementById('locateBtn').classList.remove('active');
  });
}

// \u2500\u2500 CARD STRIP \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
function renderCardStrip() {
  const track = document.getElementById('cardStripTrack');
  if (!track) return;
  const list = filtered();

  track.innerHTML = list.map(s => {
    const b = BRANDS[s.brand];
    const p95 = fuelPrice(s, 'ron95');
    const isActive = s.id === activeId;
    const openBadge = s.open24
      ? \\\`<span style="color:var(--green-500)">\u25CF M\u1EDF 24/7</span>\\\`
      : \\\`<span style="color:var(--red-500)">\u25CB \u0110\xF3ng c\u1EEDa</span>\\\`;
    return \\\`
    <div class="swipe-card\\\${isActive ? ' is-active' : ''}" id="swipe-\\\${s.id}" data-id="\\\${s.id}" onclick="selectStation(\\\${s.id})">
      <div class="swipe-card-top">
        <div class="swipe-badge" style="background:linear-gradient(135deg,\\\${b.color} 0%,\\\${b.dark} 100%)">\\\${b.short}</div>
        <div class="swipe-info">
          <div class="swipe-name">\\\${s.name}</div>
          <div class="swipe-meta">\\\${s.dist} km \xB7 \\\${openBadge}</div>
        </div>
        <div class="swipe-rating">\u2605 \\\${s.rating}</div>
      </div>
      <div class="swipe-prices">
        <div>
          <div class="swipe-price-label">RON 95-III</div>
          <div><span class="swipe-price-value">\\\${p95.toLocaleString('vi-VN')}</span><span class="swipe-price-unit">\u0111/l\xEDt</span></div>
          \\\${s.fuels.includes('diesel') ? \\\`<div class="swipe-price-secondary">Diesel \\\${fmtPrice(fuelPrice(s,'diesel'))}</div>\\\` : ''}
        </div>
        <button class="swipe-cta" onclick="event.stopPropagation();selectStation(\\\${s.id})">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          Chi ti\u1EBFt
        </button>
      </div>
    </div>\\\`;
  }).join('');

  setupCardSnap(list);
}

let _snapTimer;
function setupCardSnap(list) {
  const track = document.getElementById('cardStripTrack');
  if (!track || track._snapBound) return;
  track._snapBound = true;

  track.addEventListener('scroll', () => {
    clearTimeout(_snapTimer);
    _snapTimer = setTimeout(() => {
      const cards = track.querySelectorAll('.swipe-card');
      const center = track.scrollLeft + track.clientWidth / 2;
      let closest = null, minDist = Infinity;
      cards.forEach(c => {
        const d = Math.abs((c.offsetLeft + c.offsetWidth / 2) - center);
        if (d < minDist) { minDist = d; closest = c; }
      });
      if (!closest) return;
      const id = parseInt(closest.dataset.id);
      if (id === activeId) return;
      activeId = id;
      const s = list.find(x => x.id === id);
      if (s) map.setView([s.lat, s.lng], 15, { animate: true, duration: 0.4 });
      renderMarkers();
      cards.forEach(c => c.classList.toggle('is-active', parseInt(c.dataset.id) === id));
    }, 100);
  }, { passive: true });
}

function scrollCardTo(id) {
  const card = document.getElementById('swipe-' + id);
  if (card) card.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
}

// \u2500\u2500 INIT \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
renderFilterChips();
renderList();
renderMarkers();
renderCardStrip();

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
<\/script> `])), maybeRenderHead(), renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(`<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" crossorigin=""><\/script>`)}` }), renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(`<script src="https://unpkg.com/leaflet.markercluster@1.5.3/dist/leaflet.markercluster.js"><\/script>`)}` })) })}`;
}, "/Users/hienhv/HienHv/Klaus/Web-Idea/web-momo-prototype/apps/astro/src/pages/tien-ich-giao-thong/cay-xang.astro", void 0);

const $$file = "/Users/hienhv/HienHv/Klaus/Web-Idea/web-momo-prototype/apps/astro/src/pages/tien-ich-giao-thong/cay-xang.astro";
const $$url = "/tien-ich-giao-thong/cay-xang";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$CayXang,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
