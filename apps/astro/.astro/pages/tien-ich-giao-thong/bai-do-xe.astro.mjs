import { c as createComponent, e as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_BMOddyS3.mjs';
import 'piccolore';
import { $ as $$VehicleHub } from '../../chunks/VehicleHub_Msovdq2n.mjs';
/* empty css                                      */
/* empty css                                        */
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$BaiDoXe = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "VehicleHub", $$VehicleHub, { "title": "B\xE3i \u0111\u1ED7 xe \u1EDF Qu\u1EADn 1, TP. H\u1ED3 Ch\xED Minh | MoMo Ti\u1EC7n \xCDch Giao Th\xF4ng", "description": "Danh s\xE1ch b\xE3i \u0111\u1ED7 xe \xF4 t\xF4, xe m\xE1y g\u1EA7n b\u1EA1n: ch\u1ED7 tr\u1ED1ng theo th\u1EDDi gian th\u1EF1c, ph\xED g\u1EEDi xe, gi\u1EDD m\u1EDF c\u1EEDa v\xE0 thanh to\xE1n kh\xF4ng ti\u1EC1n m\u1EB7t qua MoMo.", "theme": "parking" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(["   ", `<header class="page-head"> <div class="filter-row" id="filterRow"></div> </header>  <div class="split"> <!-- LIST PANE --> <section class="list-pane"> <div class="list-scroll"> <div class="list-meta"> <div> <h2 class="list-title" id="listTitle">8 b\xE3i \u0111\u1ED7</h2> <p class="list-sub" id="listSub">Qu\u1EADn 1, TP.HCM \xB7 T\u1EA5t c\u1EA3</p> </div> <label class="sort-wrap"> <select id="sortSelect" onchange="render()"> <option value="dist">G\u1EA7n nh\u1EA5t</option> <option value="price">Gi\xE1 th\u1EA5p nh\u1EA5t</option> </select> </label> </div> <div class="merchant-list" id="spotList"></div> </div> <aside class="detail-modal" id="detailModal"> <div class="detail-topbar"> <button class="detail-back" id="detailBack"> <i data-lucide="chevron-left" width="14" height="14"></i>
Danh s\xE1ch
</button> <button class="detail-close" id="detailClose"> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> </button> </div> <div class="detail-info-block"> <div class="detail-info-top"> <div class="detail-icon" id="detailIcon"></div> <div class="detail-info-main"> <h2 class="detail-name" id="detailName"></h2> <div class="detail-status-inline" id="detailStatus"></div> </div> </div> <div class="detail-row"> <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> <span id="detailAddr"></span> </div> <div class="detail-row"> <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> <span class="detail-hours" id="detailHours"></span> </div> </div> <div class="detail-hero" id="detailHero"> <div class="detail-hero-logo" id="detailHeroLogo"></div> <div class="momo-overlay"> <div class="momo-overlay-badge"> <img src="https://homepage.momocdn.net/fileuploads/svg/momo-file-240411162904.svg" alt="MoMo">
Thanh to\xE1n MoMo
</div> <div class="momo-overlay-text" id="momoOverlayText"> <strong>Kh\xF4ng c\u1EA7n ti\u1EC1n m\u1EB7t</strong>
V\xE0o ra t\u1EF1 \u0111\u1ED9ng, ph\xED tr\u1EEB qua v\xED
</div> </div> </div> <div class="detail-scroll"> <div class="detail-grid" id="detailGrid"></div> <div class="pay-tags" id="detailPay"></div> <p class="detail-desc" id="detailDesc"></p> <div class="detail-actions"> <button class="btn-primary" id="detailCTA">D\xF9ng ngay qua MoMo</button> <button class="btn-secondary" onclick="toast('\u0110ang m\u1EDF Google Maps...')"> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>
Ch\u1EC9 \u0111\u01B0\u1EDDng
</button> </div> </div> </aside> </section> <!-- MAP PANE --> <div class="map-pane"> <div class="map-overlay"><i></i><span id="mapCount">8 b\xE3i \u0111\u1ED7</span>&nbsp;quanh Qu\u1EADn 1</div> <div class="map-ctrl-stack"> <div class="map-ctrl-group"> <button class="map-ctrl-btn" id="ctrlZoomIn"> <i data-lucide="plus" width="16" height="16"></i> </button> <div class="map-ctrl-divider"></div> <button class="map-ctrl-btn" id="ctrlZoomOut"> <i data-lucide="minus" width="16" height="16"></i> </button> </div> </div> <div id="map"></div> </div> </div> <div class="toast" id="toast"></div> <script>
const PARTNER_LOGOS = {
  vetc:'https://static.momocdn.net/app/img/transportcenter/ic_VETC_parking.png',
  eparking:'https://static.momocdn.net/app/img/publicservice/eparking_topup.png',
  iparking:'https://homepage.momocdn.net/img/dang-kiem-260710113006.png',
  vinparking:null,
};
const SPOTS = [
  {id:'p1',name:'Vincom Center \u0110\u1ED3ng Kh\u1EDFi',partner:'eparking',icon:'\u{1F17F}\uFE0F',color:'#d82d8b',color2:'#a50064',area:'Qu\u1EADn 1',addr:'72 L\xEA Th\xE1nh T\xF4n, Q.1, TP.HCM',dist:0.3,rating:4.5,vehicles:['xemay','oto'],fees:{xemay:{price:5000,unit:'l\u1EA7n'},oto:{price:20000,unit:'gi\u1EDD'}},payment:['momo','vetc','eparking'],open:'06:00 - 23:00',overnight:false,note:'T\u1EA7ng B1 v\xE0 B2. Ra v\xE0o b\u1EB1ng th\u1EBB VETC ho\u1EB7c qu\xE9t QR MoMo t\u1EA1i c\u1ED5ng. Camera nh\u1EADn d\u1EA1ng bi\u1EC3n s\u1ED1.',lat:10.7769,lng:106.7029},
  {id:'p2',name:'B\xE3i xe Tr\u1EA7n H\u01B0ng \u0110\u1EA1o',partner:'iparking',icon:'\u{1F6F5}',color:'#7c3aed',color2:'#6d28d9',area:'Qu\u1EADn 1',addr:'1 Tr\u1EA7n H\u01B0ng \u0110\u1EA1o, Q.1, TP.HCM',dist:0.6,rating:4.1,vehicles:['xemay'],fees:{xemay:{price:5000,unit:'l\u1EA7n'}},payment:['momo','iparking'],open:'05:00 - 23:00',overnight:false,note:'B\xE3i \u0111\u1ED7 c\xF4ng c\u1ED9ng t\xEDch h\u1EE3p iParking. Xe m\xE1y v\xE0o b\u1EB1ng v\xE9 gi\u1EA5y ho\u1EB7c \u1EE9ng d\u1EE5ng, thanh to\xE1n qua MoMo khi ra.',lat:10.7667,lng:106.6914},
  {id:'p3',name:'C\xF4ng vi\xEAn 23/9',partner:null,icon:'\u{1F333}',color:'#15803d',color2:'#166534',area:'Qu\u1EADn 1',addr:'Ph\u1EA1m Ng\u0169 L\xE3o, Q.1, TP.HCM',dist:0.9,rating:3.8,vehicles:['xemay','oto'],fees:{xemay:{price:5000,unit:'l\u1EA7n'},oto:{price:10000,unit:'gi\u1EDD'}},payment:['momo','cash'],open:'24/7',overnight:true,note:'B\xE3i \u0111\u1ED7 c\xF4ng c\u1ED9ng l\u1EDBn nh\u1EA5t Q.1. Qu\xE9t QR MoMo t\u1EA1i qu\u1EA7y khi ra, ho\u1EB7c tr\u1EA3 ti\u1EC1n m\u1EB7t.',lat:10.7670,lng:106.6880},
  {id:'p4',name:'iParking Ph\u1EA1m Ng\u1ECDc Th\u1EA1ch',partner:'iparking',icon:'\u{1F6F5}',color:'#7c3aed',color2:'#6d28d9',area:'Qu\u1EADn 3',addr:'8 Ph\u1EA1m Ng\u1ECDc Th\u1EA1ch, Q.3, TP.HCM',dist:1.4,rating:4.2,vehicles:['xemay'],fees:{xemay:{price:5000,unit:'l\u1EA7n'}},payment:['momo','iparking'],open:'05:30 - 22:30',overnight:false,note:'B\xE3i xe m\xE1y t\xEDch h\u1EE3p iParking Q.3. Nh\u1EADp bi\u1EC3n s\u1ED1 khi v\xE0o, thanh to\xE1n qua MoMo khi ra. Kh\xF4ng c\u1EA7n ti\u1EC1n m\u1EB7t.',lat:10.7788,lng:106.6939},
  {id:'p5',name:'Aeon Mall T\xE2n Ph\xFA',partner:'eparking',icon:'\u{1F6D2}',color:'#b45309',color2:'#92400e',area:'T\xE2n Ph\xFA',addr:'30 B\u1EDD Bao T\xE2n Th\u1EAFng, Q.T\xE2n Ph\xFA, TP.HCM',dist:4.2,rating:4.4,vehicles:['xemay','oto'],fees:{xemay:{price:5000,unit:'l\u1EA7n'},oto:{price:15000,unit:'gi\u1EDD'}},payment:['momo','eparking'],open:'08:00 - 22:30',overnight:false,note:'B\xE3i \u0111\u1ED7 TTTM t\xEDch h\u1EE3p eParking. N\u1EA1p ti\u1EC1n eParking qua MoMo tr\u01B0\u1EDBc, v\xE0o ra t\u1EF1 \u0111\u1ED9ng. Mi\u1EC5n ph\xED 30 ph\xFAt \u0111\u1EA7u.',lat:10.7961,lng:106.6261},
  {id:'p6',name:'Crescent Mall PMH',partner:'eparking',icon:'\u{1F319}',color:'#0e7490',color2:'#0c4a6e',area:'Qu\u1EADn 7',addr:'101 T\xF4n D\u1EADt Ti\xEAn, Q.7, TP.HCM',dist:5.8,rating:4.3,vehicles:['oto'],fees:{oto:{price:12000,unit:'gi\u1EDD'}},payment:['momo','eparking'],open:'09:00 - 22:00',overnight:false,note:'B\xE3i \u0111\u1ED7 \xF4 t\xF4 t\u1EA7ng h\u1EA7m B1-B3. Hi\u1EC7n \u0111\u1EA7y ch\u1ED7. V\xE0o danh s\xE1ch ch\u1EDD ho\u1EB7c th\u1EED l\u1EA1i sau 30 ph\xFAt.',lat:10.7297,lng:106.7214},
  {id:'p7',name:'VinParking Landmark 81',partner:'vinparking',icon:'\u{1F3D9}',color:'#c2410c',color2:'#9a3412',area:'B\xECnh Th\u1EA1nh',addr:'720A \u0110i\u1EC7n Bi\xEAn Ph\u1EE7, B\xECnh Th\u1EA1nh, TP.HCM',dist:2.1,rating:4.6,vehicles:['oto'],fees:{oto:{price:25000,unit:'gi\u1EDD'}},payment:['momo','vetc','vinparking'],open:'24/7',overnight:true,note:'B\xE3i \u0111\u1ED7 \xF4 t\xF4 cao c\u1EA5p t\u1EA1i t\xF2a nh\xE0 cao nh\u1EA5t VN. Thanh to\xE1n VETC t\u1EF1 \u0111\u1ED9ng ho\u1EB7c qu\xE9t QR MoMo. C\xF3 ch\u1ED7 qua \u0111\xEAm.',lat:10.7948,lng:106.7218},
  {id:'p8',name:'VETC Parking T\xE2n S\u01A1n Nh\u1EA5t',partner:'vetc',icon:'\u2708\uFE0F',color:'#1d4ed8',color2:'#1e40af',area:'T\xE2n B\xECnh',addr:'Ga qu\u1ED1c n\u1ED9i, T\xE2n B\xECnh, TP.HCM',dist:7.5,rating:4.0,vehicles:['oto'],fees:{oto:{price:40000,unit:'gi\u1EDD'}},payment:['momo','vetc'],open:'24/7',overnight:true,note:'B\xE3i \u0111\u1ED7 s\xE2n bay T\xE2n S\u01A1n Nh\u1EA5t, t\u1EA7ng 3 nh\xE0 xe t\u1EF1 \u0111\u1ED9ng. \u0110\u1EB7t ch\u1ED7 tr\u01B0\u1EDBc qua App MoMo \u0111\u01B0\u1EE3c gi\u1EA3m 10%.',lat:10.8189,lng:106.6694},
];

const CONDITIONS = [
  {id:'all',label:'T\u1EA5t c\u1EA3',icon:''},
  {id:'oto',label:'\xD4 t\xF4',icon:'\u{1F697}'},
  {id:'xemay',label:'Xe m\xE1y',icon:'\u{1F6F5}'},
  {id:'24-7',label:'Qua \u0111\xEAm 24/7',icon:''},
];
const PAY_LABELS = {momo:'MoMo',vetc:'VETC',eparking:'eParking',iparking:'iParking',vinparking:'VinParking',cash:'Ti\u1EC1n m\u1EB7t'};

const S = {cond:'all',selected:null};

function feeDisplay(s){
  if(S.cond==='oto'&&s.fees.oto)return\`\${s.fees.oto.price.toLocaleString('vi-VN')}\u0111/\${s.fees.oto.unit}\`;
  if(S.cond==='xemay'&&s.fees.xemay)return\`\${s.fees.xemay.price.toLocaleString('vi-VN')}\u0111/\${s.fees.xemay.unit}\`;
  const f=s.fees.xemay||s.fees.oto;
  return\`t\u1EEB \${f.price.toLocaleString('vi-VN')}\u0111/\${f.unit}\`;
}
function minPrice(s){return Math.min(...Object.values(s.fees).map(f=>f.price))}

function renderFilters(){
  document.getElementById('filterRow').innerHTML=CONDITIONS.map(c=>\`
    <button class="filter-chip \${S.cond===c.id?'active':''}" onclick="setCond('\${c.id}')">
      \${c.icon?\`<span class="icon">\${c.icon}</span>\`:''}\${c.label}
    </button>\`).join('');
}

function filtered(){
  let list=SPOTS.filter(s=>{
    if(S.cond==='oto')return s.vehicles.includes('oto');
    if(S.cond==='xemay')return s.vehicles.includes('xemay');
    if(S.cond==='24-7')return s.overnight;
    return true;
  });
  const sort=document.getElementById('sortSelect')?.value||'dist';
  if(sort==='price')list=[...list].sort((a,b)=>minPrice(a)-minPrice(b));
  else list=[...list].sort((a,b)=>a.dist-b.dist);
  return list;
}

function vehicleLabel(s){return s.vehicles.map(v=>v==='oto'?'\xD4 t\xF4':'Xe m\xE1y').join(' & ')}

function renderList(){
  const list=filtered();
  const condLabel=CONDITIONS.find(c=>c.id===S.cond)?.label||'T\u1EA5t c\u1EA3';
  document.getElementById('listTitle').textContent=\`\${list.length} b\xE3i \u0111\u1ED7\`;
  document.getElementById('listSub').textContent=\`Qu\u1EADn 1, TP.HCM \xB7 \${condLabel}\`;
  document.getElementById('mapCount').textContent=\`\${list.length} b\xE3i \u0111\u1ED7\`;
  document.getElementById('spotList').innerHTML=list.map(s=>{
    const logo=PARTNER_LOGOS[s.partner];
    return\`<div class="m-card \${S.selected===s.id?'active':''}" onclick="selectSpot('\${s.id}')" onmouseenter="hoverSpot('\${s.id}')" onmouseleave="hoverSpot(null)">
      <div class="m-logo">
        \${logo?\`<img src="\${logo}" alt="\${s.name}" referrerpolicy="no-referrer" onerror="this.style.display='none';this.nextElementSibling.style.display='grid'">\`:'' }
        <div class="m-logo-fallback" style="--bc:\${s.color};--bc2:\${s.color2};\${logo?'display:none':''}">\${s.icon}</div>
      </div>
      <div class="m-body">
        <div class="m-header">
          <div class="m-name">\${s.name}</div>
          <span class="m-rating">\u2605 \${s.rating}</span>
          <span class="m-dist-wrap">\${s.dist} km</span>
        </div>
        <div class="m-meta">
          <span class="badge-floor">\${s.area}</span>
          <span class="badge-cat">\${vehicleLabel(s)}</span>
        </div>
        <div class="m-addr">\${s.addr}</div>
        <div class="m-badges"><span class="badge-fee">\${feeDisplay(s)}</span></div>
      </div>
    </div>\`;
  }).join('');
  updateMapMarkers(list);
}

function selectSpot(id){
  S.selected=id;renderList();
  const s=SPOTS.find(x=>x.id===id);if(!s)return;
  const logo=PARTNER_LOGOS[s.partner];
  document.getElementById('detailIcon').innerHTML=logo?\`<img src="\${logo}" alt="\${s.name}" referrerpolicy="no-referrer">\`:\`<div style="width:100%;height:100%;display:grid;place-items:center;font-size:26px;background:linear-gradient(135deg,\${s.color},\${s.color2})">\${s.icon}</div>\`;
  document.getElementById('detailName').textContent=s.name;
  document.getElementById('detailAddr').textContent=s.addr;
  document.getElementById('detailHours').textContent=\`\${s.open}\${s.overnight?' \xB7 C\xF3 g\u1EEDi qua \u0111\xEAm':''}\`;
  document.getElementById('detailStatus').innerHTML=\`<span class="badge-fee">\${feeDisplay(s)}</span>\`;
  const hero=document.getElementById('detailHero');
  hero.style.background=\`linear-gradient(135deg,\${s.color} 0%,\${s.color2} 100%)\`;
  document.getElementById('detailHeroLogo').innerHTML=logo?\`<img src="\${logo}" alt="" referrerpolicy="no-referrer">\`:\`<span>\${s.icon}</span>\`;
  document.getElementById('momoOverlayText').innerHTML=\`<strong>Kh\xF4ng c\u1EA7n ti\u1EC1n m\u1EB7t</strong>V\xE0o ra t\u1EF1 \u0111\u1ED9ng, ph\xED tr\u1EEB qua v\xED MoMo\`;
  document.getElementById('detailGrid').innerHTML=\`
    <div class="detail-cell"><div class="dc-lbl">Gi\u1EDD m\u1EDF c\u1EEDa</div><div class="dc-val">\${s.open}</div></div>
    \${s.fees.xemay?\`<div class="detail-cell"><div class="dc-lbl">Xe m\xE1y</div><div class="dc-val">\${s.fees.xemay.price.toLocaleString('vi-VN')}\u0111/\${s.fees.xemay.unit}</div></div>\`:''}
    \${s.fees.oto?\`<div class="detail-cell"><div class="dc-lbl">\xD4 t\xF4</div><div class="dc-val">\${s.fees.oto.price.toLocaleString('vi-VN')}\u0111/\${s.fees.oto.unit}</div></div>\`:''}\`;
  document.getElementById('detailPay').innerHTML=s.payment.map(k=>\`<span class="pay-tag \${k}">\${PAY_LABELS[k]||k}</span>\`).join('');
  document.getElementById('detailDesc').textContent=s.note;
  const cta=document.getElementById('detailCTA');
  cta.textContent='D\xF9ng ngay qua MoMo';
  cta.onclick=()=>toast(\`\u0110ang m\u1EDF \${s.name} tr\xEAn MoMo...\`);
  document.body.classList.add('has-detail');
  updateMapMarkers(filtered());
  if(map)map.flyTo({center:[s.lng,s.lat],zoom:15.5,duration:700});
}

function closeDetail(){
  S.selected=null;document.body.classList.remove('has-detail');renderList();fitAll();
}
document.getElementById('detailClose').onclick=closeDetail;
document.getElementById('detailBack').onclick=closeDetail;

let map;
const markerMap={};

function initMap(){
  map=new maplibregl.Map({container:'map',style:'https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json',center:[106.7029,10.7769],zoom:12,attributionControl:{compact:false}});
  const userEl=document.createElement('div');userEl.className='gl-user-dot';
  new maplibregl.Marker({element:userEl}).setLngLat([106.6984,10.7740]).addTo(map);
  new maplibregl.Popup({closeButton:false,closeOnClick:false,offset:[14,0],anchor:'left'}).setLngLat([106.6984,10.7740]).setText('B\u1EA1n \u0111\xE2y').addTo(map);
  updateMapMarkers(SPOTS);fitAll();
}

function pillEl(s){
  const el=document.createElement('div');el.className='gl-pill';
  el.style.setProperty('--pc','#D97706');
  el.textContent='\u{1F17F}';
  el.addEventListener('click',e=>{e.stopPropagation();selectSpot(s.id)});
  return el;
}

function setPillState(id,state){
  const entry=markerMap[id];if(!entry)return;
  entry.el.classList.toggle('active',state==='active');
  entry.el.classList.toggle('hover',state==='hover');
}

function updateMapMarkers(list){
  if(!map)return;
  Object.values(markerMap).forEach(e=>e.marker.remove());
  Object.keys(markerMap).forEach(k=>delete markerMap[k]);
  list.forEach(s=>{
    const el=pillEl(s);
    const marker=new maplibregl.Marker({element:el}).setLngLat([s.lng,s.lat]).addTo(map);
    markerMap[s.id]={marker,el};
    if(S.selected===s.id)setPillState(s.id,'active');
  });
}

function hoverSpot(id){
  filtered().forEach(s=>{setPillState(s.id,S.selected===s.id?'active':s.id===id?'hover':'default')});
}

function fitAll(){
  const list=filtered();if(!map||!list.length)return;
  const b=new maplibregl.LngLatBounds();
  list.forEach(s=>b.extend([s.lng,s.lat]));
  map.fitBounds(b,{padding:60,duration:600,maxZoom:15});
}

function setCond(id){
  S.cond=id;S.selected=null;
  document.body.classList.remove('has-detail');
  renderFilters();renderList();fitAll();
}
function render(){renderList()}

document.getElementById('ctrlZoomIn').addEventListener('click',()=>map?.zoomIn());
document.getElementById('ctrlZoomOut').addEventListener('click',()=>map?.zoomOut());

let toastTimer;
function toast(msg){
  const el=document.getElementById('toast');
  el.textContent=msg;el.classList.add('show');
  clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('show'),2800);
}

renderFilters();initMap();renderList();

window.addEventListener('load',()=>{
  if(window.lucide){lucide.createIcons();}
});
<\/script> `], ["   ", `<header class="page-head"> <div class="filter-row" id="filterRow"></div> </header>  <div class="split"> <!-- LIST PANE --> <section class="list-pane"> <div class="list-scroll"> <div class="list-meta"> <div> <h2 class="list-title" id="listTitle">8 b\xE3i \u0111\u1ED7</h2> <p class="list-sub" id="listSub">Qu\u1EADn 1, TP.HCM \xB7 T\u1EA5t c\u1EA3</p> </div> <label class="sort-wrap"> <select id="sortSelect" onchange="render()"> <option value="dist">G\u1EA7n nh\u1EA5t</option> <option value="price">Gi\xE1 th\u1EA5p nh\u1EA5t</option> </select> </label> </div> <div class="merchant-list" id="spotList"></div> </div> <aside class="detail-modal" id="detailModal"> <div class="detail-topbar"> <button class="detail-back" id="detailBack"> <i data-lucide="chevron-left" width="14" height="14"></i>
Danh s\xE1ch
</button> <button class="detail-close" id="detailClose"> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> </button> </div> <div class="detail-info-block"> <div class="detail-info-top"> <div class="detail-icon" id="detailIcon"></div> <div class="detail-info-main"> <h2 class="detail-name" id="detailName"></h2> <div class="detail-status-inline" id="detailStatus"></div> </div> </div> <div class="detail-row"> <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> <span id="detailAddr"></span> </div> <div class="detail-row"> <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> <span class="detail-hours" id="detailHours"></span> </div> </div> <div class="detail-hero" id="detailHero"> <div class="detail-hero-logo" id="detailHeroLogo"></div> <div class="momo-overlay"> <div class="momo-overlay-badge"> <img src="https://homepage.momocdn.net/fileuploads/svg/momo-file-240411162904.svg" alt="MoMo">
Thanh to\xE1n MoMo
</div> <div class="momo-overlay-text" id="momoOverlayText"> <strong>Kh\xF4ng c\u1EA7n ti\u1EC1n m\u1EB7t</strong>
V\xE0o ra t\u1EF1 \u0111\u1ED9ng, ph\xED tr\u1EEB qua v\xED
</div> </div> </div> <div class="detail-scroll"> <div class="detail-grid" id="detailGrid"></div> <div class="pay-tags" id="detailPay"></div> <p class="detail-desc" id="detailDesc"></p> <div class="detail-actions"> <button class="btn-primary" id="detailCTA">D\xF9ng ngay qua MoMo</button> <button class="btn-secondary" onclick="toast('\u0110ang m\u1EDF Google Maps...')"> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>
Ch\u1EC9 \u0111\u01B0\u1EDDng
</button> </div> </div> </aside> </section> <!-- MAP PANE --> <div class="map-pane"> <div class="map-overlay"><i></i><span id="mapCount">8 b\xE3i \u0111\u1ED7</span>&nbsp;quanh Qu\u1EADn 1</div> <div class="map-ctrl-stack"> <div class="map-ctrl-group"> <button class="map-ctrl-btn" id="ctrlZoomIn"> <i data-lucide="plus" width="16" height="16"></i> </button> <div class="map-ctrl-divider"></div> <button class="map-ctrl-btn" id="ctrlZoomOut"> <i data-lucide="minus" width="16" height="16"></i> </button> </div> </div> <div id="map"></div> </div> </div> <div class="toast" id="toast"></div> <script>
const PARTNER_LOGOS = {
  vetc:'https://static.momocdn.net/app/img/transportcenter/ic_VETC_parking.png',
  eparking:'https://static.momocdn.net/app/img/publicservice/eparking_topup.png',
  iparking:'https://homepage.momocdn.net/img/dang-kiem-260710113006.png',
  vinparking:null,
};
const SPOTS = [
  {id:'p1',name:'Vincom Center \u0110\u1ED3ng Kh\u1EDFi',partner:'eparking',icon:'\u{1F17F}\uFE0F',color:'#d82d8b',color2:'#a50064',area:'Qu\u1EADn 1',addr:'72 L\xEA Th\xE1nh T\xF4n, Q.1, TP.HCM',dist:0.3,rating:4.5,vehicles:['xemay','oto'],fees:{xemay:{price:5000,unit:'l\u1EA7n'},oto:{price:20000,unit:'gi\u1EDD'}},payment:['momo','vetc','eparking'],open:'06:00 - 23:00',overnight:false,note:'T\u1EA7ng B1 v\xE0 B2. Ra v\xE0o b\u1EB1ng th\u1EBB VETC ho\u1EB7c qu\xE9t QR MoMo t\u1EA1i c\u1ED5ng. Camera nh\u1EADn d\u1EA1ng bi\u1EC3n s\u1ED1.',lat:10.7769,lng:106.7029},
  {id:'p2',name:'B\xE3i xe Tr\u1EA7n H\u01B0ng \u0110\u1EA1o',partner:'iparking',icon:'\u{1F6F5}',color:'#7c3aed',color2:'#6d28d9',area:'Qu\u1EADn 1',addr:'1 Tr\u1EA7n H\u01B0ng \u0110\u1EA1o, Q.1, TP.HCM',dist:0.6,rating:4.1,vehicles:['xemay'],fees:{xemay:{price:5000,unit:'l\u1EA7n'}},payment:['momo','iparking'],open:'05:00 - 23:00',overnight:false,note:'B\xE3i \u0111\u1ED7 c\xF4ng c\u1ED9ng t\xEDch h\u1EE3p iParking. Xe m\xE1y v\xE0o b\u1EB1ng v\xE9 gi\u1EA5y ho\u1EB7c \u1EE9ng d\u1EE5ng, thanh to\xE1n qua MoMo khi ra.',lat:10.7667,lng:106.6914},
  {id:'p3',name:'C\xF4ng vi\xEAn 23/9',partner:null,icon:'\u{1F333}',color:'#15803d',color2:'#166534',area:'Qu\u1EADn 1',addr:'Ph\u1EA1m Ng\u0169 L\xE3o, Q.1, TP.HCM',dist:0.9,rating:3.8,vehicles:['xemay','oto'],fees:{xemay:{price:5000,unit:'l\u1EA7n'},oto:{price:10000,unit:'gi\u1EDD'}},payment:['momo','cash'],open:'24/7',overnight:true,note:'B\xE3i \u0111\u1ED7 c\xF4ng c\u1ED9ng l\u1EDBn nh\u1EA5t Q.1. Qu\xE9t QR MoMo t\u1EA1i qu\u1EA7y khi ra, ho\u1EB7c tr\u1EA3 ti\u1EC1n m\u1EB7t.',lat:10.7670,lng:106.6880},
  {id:'p4',name:'iParking Ph\u1EA1m Ng\u1ECDc Th\u1EA1ch',partner:'iparking',icon:'\u{1F6F5}',color:'#7c3aed',color2:'#6d28d9',area:'Qu\u1EADn 3',addr:'8 Ph\u1EA1m Ng\u1ECDc Th\u1EA1ch, Q.3, TP.HCM',dist:1.4,rating:4.2,vehicles:['xemay'],fees:{xemay:{price:5000,unit:'l\u1EA7n'}},payment:['momo','iparking'],open:'05:30 - 22:30',overnight:false,note:'B\xE3i xe m\xE1y t\xEDch h\u1EE3p iParking Q.3. Nh\u1EADp bi\u1EC3n s\u1ED1 khi v\xE0o, thanh to\xE1n qua MoMo khi ra. Kh\xF4ng c\u1EA7n ti\u1EC1n m\u1EB7t.',lat:10.7788,lng:106.6939},
  {id:'p5',name:'Aeon Mall T\xE2n Ph\xFA',partner:'eparking',icon:'\u{1F6D2}',color:'#b45309',color2:'#92400e',area:'T\xE2n Ph\xFA',addr:'30 B\u1EDD Bao T\xE2n Th\u1EAFng, Q.T\xE2n Ph\xFA, TP.HCM',dist:4.2,rating:4.4,vehicles:['xemay','oto'],fees:{xemay:{price:5000,unit:'l\u1EA7n'},oto:{price:15000,unit:'gi\u1EDD'}},payment:['momo','eparking'],open:'08:00 - 22:30',overnight:false,note:'B\xE3i \u0111\u1ED7 TTTM t\xEDch h\u1EE3p eParking. N\u1EA1p ti\u1EC1n eParking qua MoMo tr\u01B0\u1EDBc, v\xE0o ra t\u1EF1 \u0111\u1ED9ng. Mi\u1EC5n ph\xED 30 ph\xFAt \u0111\u1EA7u.',lat:10.7961,lng:106.6261},
  {id:'p6',name:'Crescent Mall PMH',partner:'eparking',icon:'\u{1F319}',color:'#0e7490',color2:'#0c4a6e',area:'Qu\u1EADn 7',addr:'101 T\xF4n D\u1EADt Ti\xEAn, Q.7, TP.HCM',dist:5.8,rating:4.3,vehicles:['oto'],fees:{oto:{price:12000,unit:'gi\u1EDD'}},payment:['momo','eparking'],open:'09:00 - 22:00',overnight:false,note:'B\xE3i \u0111\u1ED7 \xF4 t\xF4 t\u1EA7ng h\u1EA7m B1-B3. Hi\u1EC7n \u0111\u1EA7y ch\u1ED7. V\xE0o danh s\xE1ch ch\u1EDD ho\u1EB7c th\u1EED l\u1EA1i sau 30 ph\xFAt.',lat:10.7297,lng:106.7214},
  {id:'p7',name:'VinParking Landmark 81',partner:'vinparking',icon:'\u{1F3D9}',color:'#c2410c',color2:'#9a3412',area:'B\xECnh Th\u1EA1nh',addr:'720A \u0110i\u1EC7n Bi\xEAn Ph\u1EE7, B\xECnh Th\u1EA1nh, TP.HCM',dist:2.1,rating:4.6,vehicles:['oto'],fees:{oto:{price:25000,unit:'gi\u1EDD'}},payment:['momo','vetc','vinparking'],open:'24/7',overnight:true,note:'B\xE3i \u0111\u1ED7 \xF4 t\xF4 cao c\u1EA5p t\u1EA1i t\xF2a nh\xE0 cao nh\u1EA5t VN. Thanh to\xE1n VETC t\u1EF1 \u0111\u1ED9ng ho\u1EB7c qu\xE9t QR MoMo. C\xF3 ch\u1ED7 qua \u0111\xEAm.',lat:10.7948,lng:106.7218},
  {id:'p8',name:'VETC Parking T\xE2n S\u01A1n Nh\u1EA5t',partner:'vetc',icon:'\u2708\uFE0F',color:'#1d4ed8',color2:'#1e40af',area:'T\xE2n B\xECnh',addr:'Ga qu\u1ED1c n\u1ED9i, T\xE2n B\xECnh, TP.HCM',dist:7.5,rating:4.0,vehicles:['oto'],fees:{oto:{price:40000,unit:'gi\u1EDD'}},payment:['momo','vetc'],open:'24/7',overnight:true,note:'B\xE3i \u0111\u1ED7 s\xE2n bay T\xE2n S\u01A1n Nh\u1EA5t, t\u1EA7ng 3 nh\xE0 xe t\u1EF1 \u0111\u1ED9ng. \u0110\u1EB7t ch\u1ED7 tr\u01B0\u1EDBc qua App MoMo \u0111\u01B0\u1EE3c gi\u1EA3m 10%.',lat:10.8189,lng:106.6694},
];

const CONDITIONS = [
  {id:'all',label:'T\u1EA5t c\u1EA3',icon:''},
  {id:'oto',label:'\xD4 t\xF4',icon:'\u{1F697}'},
  {id:'xemay',label:'Xe m\xE1y',icon:'\u{1F6F5}'},
  {id:'24-7',label:'Qua \u0111\xEAm 24/7',icon:''},
];
const PAY_LABELS = {momo:'MoMo',vetc:'VETC',eparking:'eParking',iparking:'iParking',vinparking:'VinParking',cash:'Ti\u1EC1n m\u1EB7t'};

const S = {cond:'all',selected:null};

function feeDisplay(s){
  if(S.cond==='oto'&&s.fees.oto)return\\\`\\\${s.fees.oto.price.toLocaleString('vi-VN')}\u0111/\\\${s.fees.oto.unit}\\\`;
  if(S.cond==='xemay'&&s.fees.xemay)return\\\`\\\${s.fees.xemay.price.toLocaleString('vi-VN')}\u0111/\\\${s.fees.xemay.unit}\\\`;
  const f=s.fees.xemay||s.fees.oto;
  return\\\`t\u1EEB \\\${f.price.toLocaleString('vi-VN')}\u0111/\\\${f.unit}\\\`;
}
function minPrice(s){return Math.min(...Object.values(s.fees).map(f=>f.price))}

function renderFilters(){
  document.getElementById('filterRow').innerHTML=CONDITIONS.map(c=>\\\`
    <button class="filter-chip \\\${S.cond===c.id?'active':''}" onclick="setCond('\\\${c.id}')">
      \\\${c.icon?\\\`<span class="icon">\\\${c.icon}</span>\\\`:''}\\\${c.label}
    </button>\\\`).join('');
}

function filtered(){
  let list=SPOTS.filter(s=>{
    if(S.cond==='oto')return s.vehicles.includes('oto');
    if(S.cond==='xemay')return s.vehicles.includes('xemay');
    if(S.cond==='24-7')return s.overnight;
    return true;
  });
  const sort=document.getElementById('sortSelect')?.value||'dist';
  if(sort==='price')list=[...list].sort((a,b)=>minPrice(a)-minPrice(b));
  else list=[...list].sort((a,b)=>a.dist-b.dist);
  return list;
}

function vehicleLabel(s){return s.vehicles.map(v=>v==='oto'?'\xD4 t\xF4':'Xe m\xE1y').join(' & ')}

function renderList(){
  const list=filtered();
  const condLabel=CONDITIONS.find(c=>c.id===S.cond)?.label||'T\u1EA5t c\u1EA3';
  document.getElementById('listTitle').textContent=\\\`\\\${list.length} b\xE3i \u0111\u1ED7\\\`;
  document.getElementById('listSub').textContent=\\\`Qu\u1EADn 1, TP.HCM \xB7 \\\${condLabel}\\\`;
  document.getElementById('mapCount').textContent=\\\`\\\${list.length} b\xE3i \u0111\u1ED7\\\`;
  document.getElementById('spotList').innerHTML=list.map(s=>{
    const logo=PARTNER_LOGOS[s.partner];
    return\\\`<div class="m-card \\\${S.selected===s.id?'active':''}" onclick="selectSpot('\\\${s.id}')" onmouseenter="hoverSpot('\\\${s.id}')" onmouseleave="hoverSpot(null)">
      <div class="m-logo">
        \\\${logo?\\\`<img src="\\\${logo}" alt="\\\${s.name}" referrerpolicy="no-referrer" onerror="this.style.display='none';this.nextElementSibling.style.display='grid'">\\\`:'' }
        <div class="m-logo-fallback" style="--bc:\\\${s.color};--bc2:\\\${s.color2};\\\${logo?'display:none':''}">\\\${s.icon}</div>
      </div>
      <div class="m-body">
        <div class="m-header">
          <div class="m-name">\\\${s.name}</div>
          <span class="m-rating">\u2605 \\\${s.rating}</span>
          <span class="m-dist-wrap">\\\${s.dist} km</span>
        </div>
        <div class="m-meta">
          <span class="badge-floor">\\\${s.area}</span>
          <span class="badge-cat">\\\${vehicleLabel(s)}</span>
        </div>
        <div class="m-addr">\\\${s.addr}</div>
        <div class="m-badges"><span class="badge-fee">\\\${feeDisplay(s)}</span></div>
      </div>
    </div>\\\`;
  }).join('');
  updateMapMarkers(list);
}

function selectSpot(id){
  S.selected=id;renderList();
  const s=SPOTS.find(x=>x.id===id);if(!s)return;
  const logo=PARTNER_LOGOS[s.partner];
  document.getElementById('detailIcon').innerHTML=logo?\\\`<img src="\\\${logo}" alt="\\\${s.name}" referrerpolicy="no-referrer">\\\`:\\\`<div style="width:100%;height:100%;display:grid;place-items:center;font-size:26px;background:linear-gradient(135deg,\\\${s.color},\\\${s.color2})">\\\${s.icon}</div>\\\`;
  document.getElementById('detailName').textContent=s.name;
  document.getElementById('detailAddr').textContent=s.addr;
  document.getElementById('detailHours').textContent=\\\`\\\${s.open}\\\${s.overnight?' \xB7 C\xF3 g\u1EEDi qua \u0111\xEAm':''}\\\`;
  document.getElementById('detailStatus').innerHTML=\\\`<span class="badge-fee">\\\${feeDisplay(s)}</span>\\\`;
  const hero=document.getElementById('detailHero');
  hero.style.background=\\\`linear-gradient(135deg,\\\${s.color} 0%,\\\${s.color2} 100%)\\\`;
  document.getElementById('detailHeroLogo').innerHTML=logo?\\\`<img src="\\\${logo}" alt="" referrerpolicy="no-referrer">\\\`:\\\`<span>\\\${s.icon}</span>\\\`;
  document.getElementById('momoOverlayText').innerHTML=\\\`<strong>Kh\xF4ng c\u1EA7n ti\u1EC1n m\u1EB7t</strong>V\xE0o ra t\u1EF1 \u0111\u1ED9ng, ph\xED tr\u1EEB qua v\xED MoMo\\\`;
  document.getElementById('detailGrid').innerHTML=\\\`
    <div class="detail-cell"><div class="dc-lbl">Gi\u1EDD m\u1EDF c\u1EEDa</div><div class="dc-val">\\\${s.open}</div></div>
    \\\${s.fees.xemay?\\\`<div class="detail-cell"><div class="dc-lbl">Xe m\xE1y</div><div class="dc-val">\\\${s.fees.xemay.price.toLocaleString('vi-VN')}\u0111/\\\${s.fees.xemay.unit}</div></div>\\\`:''}
    \\\${s.fees.oto?\\\`<div class="detail-cell"><div class="dc-lbl">\xD4 t\xF4</div><div class="dc-val">\\\${s.fees.oto.price.toLocaleString('vi-VN')}\u0111/\\\${s.fees.oto.unit}</div></div>\\\`:''}\\\`;
  document.getElementById('detailPay').innerHTML=s.payment.map(k=>\\\`<span class="pay-tag \\\${k}">\\\${PAY_LABELS[k]||k}</span>\\\`).join('');
  document.getElementById('detailDesc').textContent=s.note;
  const cta=document.getElementById('detailCTA');
  cta.textContent='D\xF9ng ngay qua MoMo';
  cta.onclick=()=>toast(\\\`\u0110ang m\u1EDF \\\${s.name} tr\xEAn MoMo...\\\`);
  document.body.classList.add('has-detail');
  updateMapMarkers(filtered());
  if(map)map.flyTo({center:[s.lng,s.lat],zoom:15.5,duration:700});
}

function closeDetail(){
  S.selected=null;document.body.classList.remove('has-detail');renderList();fitAll();
}
document.getElementById('detailClose').onclick=closeDetail;
document.getElementById('detailBack').onclick=closeDetail;

let map;
const markerMap={};

function initMap(){
  map=new maplibregl.Map({container:'map',style:'https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json',center:[106.7029,10.7769],zoom:12,attributionControl:{compact:false}});
  const userEl=document.createElement('div');userEl.className='gl-user-dot';
  new maplibregl.Marker({element:userEl}).setLngLat([106.6984,10.7740]).addTo(map);
  new maplibregl.Popup({closeButton:false,closeOnClick:false,offset:[14,0],anchor:'left'}).setLngLat([106.6984,10.7740]).setText('B\u1EA1n \u0111\xE2y').addTo(map);
  updateMapMarkers(SPOTS);fitAll();
}

function pillEl(s){
  const el=document.createElement('div');el.className='gl-pill';
  el.style.setProperty('--pc','#D97706');
  el.textContent='\u{1F17F}';
  el.addEventListener('click',e=>{e.stopPropagation();selectSpot(s.id)});
  return el;
}

function setPillState(id,state){
  const entry=markerMap[id];if(!entry)return;
  entry.el.classList.toggle('active',state==='active');
  entry.el.classList.toggle('hover',state==='hover');
}

function updateMapMarkers(list){
  if(!map)return;
  Object.values(markerMap).forEach(e=>e.marker.remove());
  Object.keys(markerMap).forEach(k=>delete markerMap[k]);
  list.forEach(s=>{
    const el=pillEl(s);
    const marker=new maplibregl.Marker({element:el}).setLngLat([s.lng,s.lat]).addTo(map);
    markerMap[s.id]={marker,el};
    if(S.selected===s.id)setPillState(s.id,'active');
  });
}

function hoverSpot(id){
  filtered().forEach(s=>{setPillState(s.id,S.selected===s.id?'active':s.id===id?'hover':'default')});
}

function fitAll(){
  const list=filtered();if(!map||!list.length)return;
  const b=new maplibregl.LngLatBounds();
  list.forEach(s=>b.extend([s.lng,s.lat]));
  map.fitBounds(b,{padding:60,duration:600,maxZoom:15});
}

function setCond(id){
  S.cond=id;S.selected=null;
  document.body.classList.remove('has-detail');
  renderFilters();renderList();fitAll();
}
function render(){renderList()}

document.getElementById('ctrlZoomIn').addEventListener('click',()=>map?.zoomIn());
document.getElementById('ctrlZoomOut').addEventListener('click',()=>map?.zoomOut());

let toastTimer;
function toast(msg){
  const el=document.getElementById('toast');
  el.textContent=msg;el.classList.add('show');
  clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('show'),2800);
}

renderFilters();initMap();renderList();

window.addEventListener('load',()=>{
  if(window.lucide){lucide.createIcons();}
});
<\/script> `])), maybeRenderHead()) })}`;
}, "/Users/hienhv/HienHv/Klaus/Web-Idea/web-momo-prototype/apps/astro/src/pages/tien-ich-giao-thong/bai-do-xe.astro", void 0);

const $$file = "/Users/hienhv/HienHv/Klaus/Web-Idea/web-momo-prototype/apps/astro/src/pages/tien-ich-giao-thong/bai-do-xe.astro";
const $$url = "/tien-ich-giao-thong/bai-do-xe";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$BaiDoXe,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
