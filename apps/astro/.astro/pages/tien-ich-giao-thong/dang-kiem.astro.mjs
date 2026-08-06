import { c as createComponent, e as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_BMOddyS3.mjs';
import 'piccolore';
import { $ as $$VehicleHub } from '../../chunks/VehicleHub_Msovdq2n.mjs';
/* empty css                                        */
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$DangKiem = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "VehicleHub", $$VehicleHub, { "title": "\u0110\u1EB7t L\u1ECBch \u0110\u0103ng Ki\u1EC3m Xe | MoMo", "description": "\u0110\u1EB7t l\u1ECBch \u0111\u0103ng ki\u1EC3m xe nhanh kh\xF4ng ch\u1EDD h\xE0ng \u2014 ch\u1ECDn trung t\xE2m g\u1EA7n nh\xE0, ch\u1ECDn gi\u1EDD thu\u1EADn ti\u1EC7n, thanh to\xE1n qua MoMo, nh\u1EADn bi\xEAn lai \u0111i\u1EC7n t\u1EED ngay.", "theme": "official" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(['  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"> <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"><\/script>   ', `<section class="hero"> <div class="hero-glow"></div> <div class="hero-art"> <svg viewBox="0 0 340 280" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="170" cy="160" r="130" stroke="rgba(255,255,255,.08)" stroke-width="2"></circle> <circle cx="170" cy="160" r="100" stroke="rgba(255,255,255,.05)" stroke-width="20"></circle> <path d="M 60 160 A 110 110 0 0 1 280 160" stroke="rgba(255,255,255,.06)" stroke-width="3" fill="none"></path> <path d="M 60 160 A 110 110 0 0 1 220 70" stroke="#EB2F96" stroke-width="3" fill="none" opacity=".3"></path> <circle cx="170" cy="160" r="18" fill="rgba(235,47,150,.15)"></circle> <circle cx="170" cy="160" r="6" fill="rgba(255,255,255,.2)"></circle> <line x1="170" y1="160" x2="218" y2="72" stroke="#EB2F96" stroke-width="2.5" stroke-linecap="round" opacity=".5"></line> <line x1="60" y1="160" x2="75" y2="160" stroke="rgba(255,255,255,.1)" stroke-width="1.5"></line> <line x1="280" y1="160" x2="265" y2="160" stroke="rgba(255,255,255,.1)" stroke-width="1.5"></line> <text x="170" y="148" text-anchor="middle" font-size="28" font-weight="900" fill="rgba(255,255,255,.15)" font-family="sans-serif">49</text> <text x="170" y="168" text-anchor="middle" font-size="10" fill="rgba(255,255,255,.08)" font-family="sans-serif">ng\xE0y c\xF2n l\u1EA1i</text> </svg> </div> <div class="hero-inner"> <div class="hero-left"> <div class="hero-eyebrow">Ph\xE1p l\xFD &amp; B\u1EA3o d\u01B0\u1EE1ng \xB7 Vehicle Hub</div> <h1 class="hero-h1">\u0110\u1EB7t l\u1ECBch<br><em>\u0110\u0103ng ki\u1EC3m xe</em><br>nhanh, kh\xF4ng ch\u1EDD h\xE0ng</h1> <ul class="hero-bullets"> <li><span class="hb-icon" id="hb-i1"></span>Ch\u1ECDn trung t\xE2m g\u1EA7n nh\xE0, \u0111\u1EB7t gi\u1EDD thu\u1EADn ti\u1EC7n, kh\xF4ng x\u1EBFp h\xE0ng</li> <li><span class="hb-icon" id="hb-i2"></span>Thanh to\xE1n l\u1EC7 ph\xED qua v\xED MoMo, nh\u1EADn bi\xEAn lai \u0111i\u1EC7n t\u1EED ngay</li> <li><span class="hb-icon" id="hb-i3"></span>Nh\u1EAFc h\u1EA1n tr\u01B0\u1EDBc 30 ng\xE0y, kh\xF4ng bao gi\u1EDD b\u1ECB ph\u1EA1t v\xEC qu\xEAn \u0111\u0103ng ki\u1EC3m</li> </ul> <div class="hero-stats"> <div class="hero-stat"><div class="hero-stat-val"><em>60</em>k</div><div class="hero-stat-lbl">L\u1EC7 ph\xED xe m\xE1y</div></div> <div class="hero-stat"><div class="hero-stat-val"><em>170</em>k</div><div class="hero-stat-lbl">L\u1EC7 ph\xED \xF4 t\xF4</div></div> <div class="hero-stat"><div class="hero-stat-val"><em>3</em> ph\xFAt</div><div class="hero-stat-lbl">\u0110\u1EB7t l\u1ECBch</div></div> <div class="hero-stat"><div class="hero-stat-val"><em>30</em> ng\xE0y</div><div class="hero-stat-lbl">Nh\u1EAFc tr\u01B0\u1EDBc h\u1EA1n</div></div> </div> </div> <div class="hero-right"> <div class="hero-card"> <div class="hero-card-title">Quy tr\xECnh \u0111\u1EB7t l\u1ECBch</div> <div class="hero-checklist"> <div class="hero-check-row"><div class="hero-check-icon done" id="hc-i1"></div><div class="hero-check-label done">Nh\u1EADp th\xF4ng tin xe &amp; bi\u1EC3n s\u1ED1</div></div> <div class="hero-check-row"><div class="hero-check-icon done" id="hc-i2"></div><div class="hero-check-label done">Ch\u1ECDn trung t\xE2m \u0111\u0103ng ki\u1EC3m g\u1EA7n nh\u1EA5t</div></div> <div class="hero-check-row"><div class="hero-check-icon pending"></div><div class="hero-check-label">Ch\u1ECDn ng\xE0y &amp; khung gi\u1EDD ph\xF9 h\u1EE3p</div></div> <div class="hero-check-row"><div class="hero-check-icon pending"></div><div class="hero-check-label">Thanh to\xE1n l\u1EC7 ph\xED qua MoMo</div></div> <div class="hero-check-row"><div class="hero-check-icon pending"></div><div class="hero-check-label">Nh\u1EADn bi\xEAn lai \u0111i\u1EC7n t\u1EED &amp; m\xE3 h\u1EB9n</div></div> </div> <a class="hero-cta" href="#" onclick="document.querySelector('.page-main').scrollIntoView({behavior:'smooth'});return false"> <span id="hero-cta-icon"></span>\u0110\u1EB7t l\u1ECBch ngay
</a> </div> </div> </div> </section>  <div class="page-main"> <!-- LEFT: FORM CARD --> <div class="form-card" id="formCard"> <div class="step-bar"> <div class="step-bar-inner"> <div class="step active" id="step-tab-1" onclick="goStep(1)"><div class="step-num">1</div><div class="step-label">Xe c\u1EE7a b\u1EA1n</div></div> <div class="step-arrow"></div> <div class="step" id="step-tab-2" onclick="goStep(2)"><div class="step-num">2</div><div class="step-label">Ch\u1ECDn trung t\xE2m</div></div> <div class="step-arrow"></div> <div class="step" id="step-tab-3" onclick="goStep(3)"><div class="step-num">3</div><div class="step-label">Ch\u1ECDn l\u1ECBch</div></div> <div class="step-arrow"></div> <div class="step" id="step-tab-4" onclick="goStep(4)"><div class="step-num">4</div><div class="step-label">X\xE1c nh\u1EADn</div></div> </div> </div> <!-- STEP 1 --> <div id="s1"> <div class="form-card-head"> <div class="form-title">Xe c\u1EE7a b\u1EA1n</div> <div class="form-subtitle">Nh\u1EADp th\xF4ng tin \u0111\u1EC3 t\xEDnh chu k\u1EF3 v\xE0 ph\xED \u0111\u0103ng ki\u1EC3m \u0111\xFAng theo quy \u0111\u1ECBnh.</div> </div> <div class="form-body"> <div class="vtype-row"> <button class="vtype-card on" id="vt-xemay" onclick="setVtype('xemay')"> <div class="vtype-icon" id="vtype-icon-bike"></div> <div class="vtype-name">Xe m\xE1y</div> <div class="vtype-sub">M\xF4 t\xF4, xe g\u1EAFn m\xE1y</div> </button> <button class="vtype-card" id="vt-oto" onclick="setVtype('oto')"> <div class="vtype-icon" id="vtype-icon-car"></div> <div class="vtype-name">\xD4 t\xF4</div> <div class="vtype-sub">Xe con, xe t\u1EA3i nh\u1ECF</div> </button> </div> <div class="field"> <label class="field-label">Bi\u1EC3n s\u1ED1 xe</label> <input class="field-input" id="plateInput" placeholder="VD: 51A-12345" oninput="onPlateInput()" autocomplete="off" style="text-transform:uppercase;font-weight:700;letter-spacing:.05em"> <div class="field-hint">Nh\u1EADp bi\u1EC3n s\u1ED1 \u0111\u1EC3 l\u1EA5y th\xF4ng tin v\xE0 \u0111\u1EC1 xu\u1EA5t l\u1ECBch ph\xF9 h\u1EE3p.</div> </div> <div class="field-row"> <div class="field"> <label class="field-label">N\u0103m s\u1EA3n xu\u1EA5t</label> <input class="field-input" id="yearInput" type="number" min="1990" max="2025" placeholder="VD: 2019" oninput="recalcArc()" autocomplete="off"> </div> <div class="field"> <label class="field-label">K\u1EF3 \u0111\u0103ng ki\u1EC3m g\u1EA7n nh\u1EA5t</label> <input class="field-input" id="lastInspInput" type="month" oninput="recalcArc()"> </div> </div> <button class="btn-next" id="btnStep1" onclick="toStep(2)" disabled>
Ch\u1ECDn trung t\xE2m \u0111\u0103ng ki\u1EC3m
<i data-lucide="chevron-right" width="16" height="16"></i> </button> </div> </div> <!-- STEP 2 --> <div id="s2" style="display:none"> <div class="form-card-head"> <div class="form-step-label">B\u01B0\u1EDBc 2 / 4</div> <div class="form-title">Ch\u1ECDn trung t\xE2m</div> <div class="form-subtitle" id="s2-sub">Ch\u1ECDn trung t\xE2m \u0111\u0103ng ki\u1EC3m g\u1EA7n b\u1EA1n nh\u1EA5t.</div> </div> <div class="form-body"> <div class="center-list" id="centerList"></div> <button class="btn-next" id="btnStep2" onclick="toStep(3)" disabled style="margin-top:14px">
Ch\u1ECDn ng\xE0y &amp; gi\u1EDD <i data-lucide="chevron-right" width="16" height="16"></i> </button> <button class="btn-back" onclick="toStep(1)">\u2190 Quay l\u1EA1i</button> </div> </div> <!-- STEP 3 --> <div id="s3" style="display:none"> <div class="form-card-head"> <div class="form-step-label">B\u01B0\u1EDBc 3 / 4</div> <div class="form-title">Ch\u1ECDn ng\xE0y &amp; gi\u1EDD</div> <div class="form-subtitle">Ch\u1ECDn ng\xE0y v\xE0 khung gi\u1EDD ph\xF9 h\u1EE3p. Tr\xE1nh th\u1EE9 7, ch\u1EE7 nh\u1EADt v\xE0 ng\xE0y l\u1EC5.</div> </div> <div class="form-body"> <div id="s3-cal-mobile" class="cal-card" style="margin-bottom:14px"></div> <button class="btn-next" id="btnStep3" onclick="toStep(4)" disabled>
X\xE1c nh\u1EADn l\u1ECBch h\u1EB9n <i data-lucide="chevron-right" width="16" height="16"></i> </button> <button class="btn-back" onclick="toStep(2)">\u2190 Quay l\u1EA1i</button> </div> </div> <!-- STEP 4 --> <div id="s4" style="display:none"> <div class="form-card-head"> <div class="form-step-label">B\u01B0\u1EDBc 4 / 4</div> <div class="form-title">X\xE1c nh\u1EADn &amp; Thanh to\xE1n</div> <div class="form-subtitle">Ki\u1EC3m tra th\xF4ng tin tr\u01B0\u1EDBc khi thanh to\xE1n l\u1EC7 ph\xED qua MoMo.</div> </div> <div class="form-body" id="s4-body"> <div class="confirm-list" id="confirmList"></div> <div class="confirm-total-row"> <div class="confirm-total-key">T\u1ED5ng l\u1EC7 ph\xED \u0111\u0103ng ki\u1EC3m</div> <div class="confirm-total-val" id="confirmFee">-</div> </div> <p class="pay-note">Thanh to\xE1n l\u1EC7 ph\xED qua v\xED MoMo. Bi\xEAn lai \u0111i\u1EC7n t\u1EED xu\u1EA5t ngay sau thanh to\xE1n, h\u1EE3p l\u1EC7 khi n\u1ED9p t\u1EA1i trung t\xE2m \u0111\u0103ng ki\u1EC3m.</p> <button class="btn-next" onclick="doConfirm()"> <i data-lucide="shield" style="width:16px;height:16px"></i>
Thanh to\xE1n qua MoMo
</button> <button class="btn-back" onclick="toStep(3)">\u2190 Quay l\u1EA1i</button> </div> <div class="success-screen" id="successScreen"> <div class="success-icon"><i data-lucide="check" width="24" height="24"></i></div> <div class="success-title">\u0110\u1EB7t l\u1ECBch th\xE0nh c\xF4ng!</div> <div class="success-sub" id="successSub">Bi\xEAn lai \u0111i\u1EC7n t\u1EED \u0111\xE3 g\u1EEDi v\xE0o MoMo c\u1EE7a b\u1EA1n.</div> <div class="success-card" id="successCard"></div> <button class="btn-home" onclick="window.location.href='/tien-ich-giao-thong'">\u2190 V\u1EC1 Ti\u1EC7n \xEDch Giao Th\xF4ng</button> </div> </div> </div> <!-- RIGHT PANEL --> <div class="right-panel"> <div id="rp1"> <div class="arc-card"> <div class="arc-card-head"><div class="arc-eyebrow">Chu k\u1EF3 &amp; h\u1EA1n \u0111\u0103ng ki\u1EC3m</div></div> <div class="arc-card-body" id="arcContent"> <div class="arc-empty"><i data-lucide="info" width="36" height="36"></i>Nh\u1EADp n\u0103m s\u1EA3n xu\u1EA5t v\xE0 k\u1EF3 \u0111\u0103ng ki\u1EC3m g\u1EA7n nh\u1EA5t \u0111\u1EC3 xem chu k\u1EF3 c\u1EE7a xe b\u1EA1n.</div> </div> </div> </div> <div id="rp2" style="display:none"> <div class="map-card"> <div class="map-card-head"> <div><div class="map-card-title">V\u1ECB tr\xED trung t\xE2m \u0111\u0103ng ki\u1EC3m</div><div class="map-card-sub">5 trung t\xE2m \u0111\u0103ng ki\u1EC3m t\u1EA1i TP.HCM</div></div> </div> <div id="dkMap"></div> </div> </div> <div id="rp3" style="display:none"> <div class="cal-card"> <div class="cal-card-title">Ch\u1ECDn ng\xE0y \u0111\u0103ng ki\u1EC3m</div> <div id="mainCal"></div> <div id="slotSection" style="display:none"> <div class="slots-label">Khung gi\u1EDD ng\xE0y <span id="selDateLabel"></span></div> <div class="slot-grid" id="slotGrid"></div> </div> </div> </div> <div id="rp4" style="display:none"> <div class="booking-card"> <div class="booking-card-head"> <div class="booking-card-icon"><i data-lucide="calendar" width="16" height="16"></i></div> <div><div class="booking-card-label">Chi ti\u1EBFt l\u1ECBch h\u1EB9n</div><div class="booking-card-title">\u0110\u0103ng ki\u1EC3m xe</div></div> </div> <div class="confirm-list" id="confirmListRight"></div> <div class="confirm-total-row" style="margin-top:8px"> <div class="confirm-total-key">L\u1EC7 ph\xED</div> <div class="confirm-total-val" id="confirmFeeRight">-</div> </div> </div> </div> </div> </div>  <div class="penalty-banner"> <div class="penalty-alert"> <div class="penalty-icon">\u26A0\uFE0F</div> <div class="penalty-text"> <strong>Qu\xE1 h\u1EA1n \u0111\u0103ng ki\u1EC3m b\u1ECB ph\u1EA1t 100.000 \u2013 500.000\u0111</strong>
Xe m\xE1y qu\xE1 h\u1EA1n b\u1ECB ph\u1EA1t 100.000 \u2013 200.000\u0111. \xD4 t\xF4 qu\xE1 h\u1EA1n b\u1ECB ph\u1EA1t 300.000 \u2013 500.000\u0111 v\xE0 kh\xF4ng \u0111\u01B0\u1EE3c l\u01B0u h\xE0nh. \u0110\u1EB7t l\u1ECBch tr\u01B0\u1EDBc \u0111\u1EC3 tr\xE1nh r\u1EE7i ro.
</div> </div> </div>  <section class="edu-section"> <div class="edu-inner"> <div class="edu-section-head"> <div class="edu-section-title">Chu k\u1EF3, gi\u1EA5y t\u1EDD v\xE0 l\u1EC7 ph\xED \u0111\u0103ng ki\u1EC3m</div> </div> <div class="edu-cards"> <div class="edu-card"> <div class="edu-card-head"><div class="edu-icon" id="edu-icon-cal"></div><div class="edu-card-title">Chu k\u1EF3 \u0111\u0103ng ki\u1EC3m</div></div> <div class="cycle-rows"> <div class="cycle-row"><div class="cycle-veh"><span class="cycle-veh-icon" id="cv-i1"></span>Xe m\xE1y, m\xF4 t\xF4</div><div class="cycle-val">1 n\u0103m / l\u1EA7n</div></div> <div class="cycle-row"><div class="cycle-veh"><span class="cycle-veh-icon" id="cv-i2"></span>\xD4 t\xF4 m\u1EDBi (\u2264 3 n\u0103m)</div><div class="cycle-val">30 th\xE1ng</div></div> <div class="cycle-row"><div class="cycle-veh"><span class="cycle-veh-icon" id="cv-i3"></span>\xD4 t\xF4 3 - 7 n\u0103m</div><div class="cycle-val">18 th\xE1ng</div></div> <div class="cycle-row"><div class="cycle-veh"><span class="cycle-veh-icon" id="cv-i4"></span>\xD4 t\xF4 tr\xEAn 7 n\u0103m</div><div class="cycle-val">12 th\xE1ng</div></div> </div> <div class="edu-footnote">Theo Th\xF4ng t\u01B0 16/2021/TT-BGTVT, hi\u1EC7u l\u1EF1c t\u1EEB 01/09/2021</div> </div> <div class="edu-card"> <div class="edu-card-head"><div class="edu-icon" id="edu-icon-doc"></div><div class="edu-card-title">Gi\u1EA5y t\u1EDD c\u1EA7n mang</div></div> <ul class="doc-list"> <li>CMND / CCCD b\u1EA3n g\u1ED1c c\xF2n hi\u1EC7u l\u1EF1c</li> <li>\u0110\u0103ng k\xFD xe g\u1ED1c ho\u1EB7c b\u1EA3n c\xF4ng ch\u1EE9ng</li> <li>Gi\u1EA5y ch\u1EE9ng nh\u1EADn b\u1EA3o hi\u1EC3m TNDS b\u1EAFt bu\u1ED9c c\xF2n hi\u1EC7u l\u1EF1c</li> <li>Bi\xEAn lai \u0111\xF3ng ph\xED tr\u01B0\u1EDBc b\u1EA1 (n\u1EBFu l\xE0 xe m\u1EDBi)</li> <li>Phi\u1EBFu h\u1EB9n ho\u1EB7c bi\xEAn lai \u0111i\u1EC7n t\u1EED (khi \u0111\u1EB7t l\u1ECBch qua MoMo)</li> </ul> <div class="edu-tip">Thanh to\xE1n l\u1EC7 ph\xED qua MoMo, bi\xEAn lai \u0111i\u1EC7n t\u1EED \u0111\u01B0\u1EE3c ch\u1EA5p nh\u1EADn t\u1EA1i trung t\xE2m \u0111\u0103ng ki\u1EC3m</div> </div> <div class="edu-card"> <div class="edu-card-head"><div class="edu-icon" id="edu-icon-fee"></div><div class="edu-card-title">L\u1EC7 ph\xED \u0111\u0103ng ki\u1EC3m</div></div> <div class="fee-list"> <div class="fee-row highlight"><span class="fee-label"><span class="fee-label-icon" id="fl-i1"></span>Xe m\xE1y, m\xF4 t\xF4</span><span class="fee-amount">60.000\u0111</span></div> <div class="fee-row"><span class="fee-label"><span class="fee-label-icon" id="fl-i2"></span>\xD4 t\xF4 d\u01B0\u1EDBi 9 ch\u1ED7</span><span class="fee-amount">170.000\u0111</span></div> <div class="fee-row"><span class="fee-label"><span class="fee-label-icon" id="fl-i3"></span>\xD4 t\xF4 t\u1EEB 9 ch\u1ED7 tr\u1EDF l\xEAn</span><span class="fee-amount">245.000\u0111</span></div> <div class="fee-row"><span class="fee-label"><span class="fee-label-icon" id="fl-i4"></span>Xe t\u1EA3i, xe chuy\xEAn d\xF9ng</span><span class="fee-amount">340.000\u0111</span></div> </div> <div class="edu-footnote">Theo Th\xF4ng t\u01B0 238/2016/TT-BTC.</div> </div> </div> </div> </section>  <section class="faq-section"> <div class="faq-inner"> <div class="faq-header"><h2 class="faq-title">Gi\u1EA3i \u0111\xE1p v\u1EC1 \u0111\u0103ng ki\u1EC3m xe</h2></div> <div class="faq-list"> <details class="faq-item"><summary>Xe m\xE1y c\xF3 b\u1EAFt bu\u1ED9c ph\u1EA3i \u0111\u0103ng ki\u1EC3m kh\xF4ng?</summary><div class="faq-body">C\xF3. Theo quy \u0111\u1ECBnh hi\u1EC7n h\xE0nh, m\xF4 t\xF4 v\xE0 xe g\u1EAFn m\xE1y t\u1EEB 50cc tr\u1EDF l\xEAn ph\u1EA3i \u0111\u0103ng ki\u1EC3m \u0111\u1ECBnh k\u1EF3 1 n\u0103m/l\u1EA7n. Ri\xEAng xe d\u01B0\u1EDBi 50cc (xe \u0111\u1EA1p \u0111i\u1EC7n g\u1EAFn m\xE1y) ch\u01B0a y\xEAu c\u1EA7u \u0111\u0103ng ki\u1EC3m nh\u01B0ng c\u1EA7n \u0111\u0103ng k\xFD bi\u1EC3n s\u1ED1.</div></details> <details class="faq-item"><summary>Qu\xE1 h\u1EA1n \u0111\u0103ng ki\u1EC3m b\u1ECB x\u1EED ph\u1EA1t nh\u01B0 th\u1EBF n\xE0o?</summary><div class="faq-body">Xe m\xE1y qu\xE1 h\u1EA1n \u0111\u0103ng ki\u1EC3m b\u1ECB ph\u1EA1t <strong>100.000 \u2013 200.000\u0111</strong>. \xD4 t\xF4 qu\xE1 h\u1EA1n b\u1ECB ph\u1EA1t <strong>300.000 \u2013 500.000\u0111</strong> v\xE0 b\u1ECB t\u01B0\u1EDBc quy\u1EC1n s\u1EED d\u1EE5ng gi\u1EA5y ph\xE9p l\xE1i xe 1\u20133 th\xE1ng. (Theo Ngh\u1ECB \u0111\u1ECBnh 100/2019/N\u0110-CP)</div></details> <details class="faq-item"><summary>\u0110\u1EB7t l\u1ECBch tr\u1EF1c tuy\u1EBFn qua MoMo c\xF3 h\u1EE3p l\u1EC7 kh\xF4ng?</summary><div class="faq-body">C\xF3. Sau khi \u0111\u1EB7t l\u1ECBch v\xE0 thanh to\xE1n qua MoMo, b\u1EA1n nh\u1EADn \u0111\u01B0\u1EE3c bi\xEAn lai \u0111i\u1EC7n t\u1EED v\xE0 m\xE3 x\xE1c nh\u1EADn. Tr\xECnh m\xE3 n\xE0y t\u1EA1i trung t\xE2m \u0111\u0103ng ki\u1EC3m l\xE0 h\u1EE3p l\u1EC7, kh\xF4ng c\u1EA7n in ra gi\u1EA5y.</div></details> <details class="faq-item"><summary>\u0110\u0103ng ki\u1EC3m s\u1EDBm tr\u01B0\u1EDBc h\u1EA1n c\xF3 \u0111\u01B0\u1EE3c kh\xF4ng?</summary><div class="faq-body">C\xF3 th\u1EC3 \u0111\u0103ng ki\u1EC3m s\u1EDBm t\u1ED1i \u0111a <strong>90 ng\xE0y</strong> tr\u01B0\u1EDBc ng\xE0y h\u1EBFt h\u1EA1n. Chu k\u1EF3 ti\u1EBFp theo \u0111\u01B0\u1EE3c t\xEDnh t\u1EEB ng\xE0y h\u1EBFt h\u1EA1n c\u0169 (kh\xF4ng ph\u1EA3i t\u1EEB ng\xE0y \u0111\u0103ng ki\u1EC3m th\u1EF1c t\u1EBF), n\xEAn b\u1EA1n kh\xF4ng b\u1ECB thi\u1EC7t n\u1EBFu \u0111\u0103ng ki\u1EC3m s\u1EDBm.</div></details> <details class="faq-item"><summary>L\u1EE1 qu\xEAn \u0111\u1EBFn \u0111\xFAng h\u1EB9n th\xEC sao?</summary><div class="faq-body">MoMo s\u1EBD g\u1EEDi nh\u1EAFc nh\u1EDF tr\u01B0\u1EDBc 30 ng\xE0y v\xE0 7 ng\xE0y khi g\u1EA7n \u0111\u1EBFn h\u1EA1n \u0111\u0103ng ki\u1EC3m. N\u1EBFu b\u1ECF l\u1EE1 l\u1ECBch h\u1EB9n \u0111\xE3 \u0111\u1EB7t, b\u1EA1n c\xF3 th\u1EC3 \u0111\u1EB7t l\u1EA1i l\u1ECBch m\u1EDBi m\xE0 kh\xF4ng m\u1EA5t ph\xED. L\u1EC7 ph\xED \u0111\xE3 thanh to\xE1n \u0111\u01B0\u1EE3c ho\xE0n l\u1EA1i trong 3\u20135 ng\xE0y l\xE0m vi\u1EC7c.</div></details> </div> </div> </section>  <section class="related-section"> <div class="related-inner"> <div class="related-header"><div class="related-title">Kh\xE1m ph\xE1 th\xEAm tr\xEAn Vehicle Hub</div></div> <div class="related-grid"> <a class="related-card" href="/bao-hiem-o-to"> <div class="related-card-icon related-card-icon--blue" id="rel-icon-ins"></div> <div><div class="related-card-label">B\u1EA3o hi\u1EC3m</div><div class="related-card-name">B\u1EA3o hi\u1EC3m TNDS b\u1EAFt bu\u1ED9c</div><div class="related-card-desc">Mua online, nh\u1EADn gi\u1EA5y ch\u1EE9ng nh\u1EADn \u0111i\u1EC7n t\u1EED ngay</div></div> <span class="related-card-arr" id="rel-arr-1"></span> </a> <a class="related-card" href="/phat-nguoi"> <div class="related-card-icon related-card-icon--amber" id="rel-icon-fine"></div> <div><div class="related-card-label">Ph\xE1p l\xFD</div><div class="related-card-name">Tra c\u1EE9u ph\u1EA1t ngu\u1ED9i</div><div class="related-card-desc">Ki\u1EC3m tra v\xE0 n\u1ED9p ph\u1EA1t vi ph\u1EA1m giao th\xF4ng ngay tr\xEAn MoMo</div></div> <span class="related-card-arr" id="rel-arr-2"></span> </a> <a class="related-card" href="/tien-ich-giao-thong#chi-phi-xe"> <div class="related-card-icon related-card-icon--green" id="rel-icon-cost"></div> <div><div class="related-card-label">T\xE0i ch\xEDnh xe</div><div class="related-card-name">Chi ph\xED nu\xF4i xe h\xE0ng n\u0103m</div><div class="related-card-desc">T\xEDnh t\u1ED5ng x\u0103ng, b\u1EA3o hi\u1EC3m, \u0111\u0103ng ki\u1EC3m, b\u1EA3o d\u01B0\u1EE1ng theo xe b\u1EA1n</div></div> <span class="related-card-arr" id="rel-arr-3"></span> </a> </div> </div> </section> <div class="toast" id="toast"></div> <script>
const CENTERS = [
  {id:'c1',idx:1,name:'TT \u0110\u0103ng ki\u1EC3m 50-01D',addr:'282A L\xFD Th\u01B0\u1EDDng Ki\u1EC7t, T\xE2n B\xECnh',dist:2.1,types:['xemay','oto'],open:'07:00 - 17:00',wait:25,lat:10.7827,lng:106.6575},
  {id:'c2',idx:2,name:'TT \u0110\u0103ng ki\u1EC3m 50-02D',addr:'108 Quang Trung, G\xF2 V\u1EA5p',dist:5.4,types:['xemay','oto'],open:'07:00 - 17:00',wait:40,lat:10.8321,lng:106.6756},
  {id:'c3',idx:3,name:'TT \u0110\u0103ng ki\u1EC3m 50-03D',addr:'01 Tr\u1EA7n N\xE3o, B\xECnh Th\u1EA1nh',dist:3.2,types:['oto'],open:'07:30 - 16:30',wait:15,lat:10.7927,lng:106.7302},
  {id:'c4',idx:4,name:'TT \u0110\u0103ng ki\u1EC3m 50-05D',addr:'45 T\xEAn L\u1EEDa, B\xECnh T\xE2n',dist:7.8,types:['xemay','oto'],open:'06:30 - 17:30',wait:10,lat:10.7519,lng:106.6052},
  {id:'c5',idx:5,name:'TT \u0110\u0103ng ki\u1EC3m 50-13D',addr:'17 T\xF4 K\xFD, Qu\u1EADn 12',dist:9.1,types:['xemay','oto'],open:'07:00 - 17:00',wait:55,lat:10.8621,lng:106.6573},
];
const FEES = { xemay:60000, oto:170000 };
const CYCLES = {
  xemay:{label:'1 n\u0103m/l\u1EA7n',months:12},
  oto_new:{label:'30 th\xE1ng (xe m\u1EDBi)',months:30},
  oto_mid:{label:'18 th\xE1ng (3-7 n\u0103m)',months:18},
  oto_old:{label:'12 th\xE1ng (>7 n\u0103m)',months:12},
};
const state = { vtype:'xemay', plate:'', year:null, lastInsp:null, centerId:null, selDate:null, selSlot:null };
let currentStep = 1;

function goStep(n){ if(n>currentStep)return; toStep(n,false); }
function toStep(n, validate=true){
  if(validate&&n>currentStep){
    if(currentStep===1&&(!state.plate||!state.year))return;
    if(currentStep===2&&!state.centerId)return;
    if(currentStep===3&&(!state.selDate||!state.selSlot))return;
  }
  currentStep=n;
  for(let i=1;i<=4;i++){
    const s=document.getElementById(\`s\${i}\`);
    const rp=document.getElementById(\`rp\${i}\`);
    if(s)s.style.display=i===n?'block':'none';
    if(rp)rp.style.display=i===n?'block':'none';
    const tab=document.getElementById(\`step-tab-\${i}\`);
    tab.classList.toggle('active',i===n);
    tab.classList.toggle('done',i<n);
  }
  if(n===2){renderCenterList();initDkMap();}
  if(n===3){renderCalendar();document.getElementById('s3-cal-mobile').innerHTML='';}
  if(n===4){renderConfirm();document.getElementById('s4-body').style.display='block';document.getElementById('successScreen').style.display='none';}
}

function setVtype(t){
  state.vtype=t;
  document.getElementById('vt-xemay').classList.toggle('on',t==='xemay');
  document.getElementById('vt-oto').classList.toggle('on',t==='oto');
  recalcArc(); updateStep1Btn();
}
function onPlateInput(){
  const v=document.getElementById('plateInput').value.toUpperCase().replace(/[^A-Z0-9\\-\\.]/g,'');
  document.getElementById('plateInput').value=v; state.plate=v; updateStep1Btn();
}
function updateStep1Btn(){
  document.getElementById('btnStep1').disabled=!(state.plate.length>=5&&state.year>=1990);
}
function recalcArc(){
  state.year=parseInt(document.getElementById('yearInput').value)||null;
  state.lastInsp=document.getElementById('lastInspInput').value||null;
  updateStep1Btn(); renderArc();
}
function getCycle(){
  if(!state.year)return null;
  const age=new Date().getFullYear()-state.year;
  if(state.vtype==='xemay')return CYCLES.xemay;
  if(age<=3)return CYCLES.oto_new;
  if(age<=7)return CYCLES.oto_mid;
  return CYCLES.oto_old;
}
function renderArc(){
  const cycle=getCycle();
  if(!cycle||!state.lastInsp){
    document.getElementById('arcContent').innerHTML=\`<div class="arc-empty">\${licon('Info',36,1.5)}Nh\u1EADp n\u0103m s\u1EA3n xu\u1EA5t v\xE0 h\u1EA1n \u0111\u0103ng ki\u1EC3m hi\u1EC7n t\u1EA1i \u0111\u1EC3 xem chu k\u1EF3 c\u1EE7a xe b\u1EA1n.</div>\`;
    return;
  }
  const lastDate=new Date(state.lastInsp+'-01');
  const nextDate=new Date(lastDate); nextDate.setMonth(nextDate.getMonth()+cycle.months);
  const today=new Date(); today.setHours(0,0,0,0);
  const totalDays=cycle.months*30;
  const elapsed=Math.floor((today-lastDate)/(1000*60*60*24));
  const remaining=Math.floor((nextDate-today)/(1000*60*60*24));
  const pct=Math.min(Math.max(elapsed/totalDays,0),1);
  const r=80; const circ=2*Math.PI*r; const fillLen=circ*(1-pct);
  const urgency=remaining<30?'#ef4444':remaining<90?'#f59e0b':'#EB2F96';
  const nextStr=nextDate.toLocaleDateString('vi-VN',{month:'long',year:'numeric'});
  const lastStr=lastDate.toLocaleDateString('vi-VN',{month:'long',year:'numeric'});
  const fee=FEES[state.vtype];
  document.getElementById('arcContent').innerHTML=\`
    <div class="arc-wrap">
      <svg viewBox="0 0 180 180"><circle class="arc-track" cx="90" cy="90" r="\${r}"/><circle class="arc-fill" cx="90" cy="90" r="\${r}" stroke="\${urgency}" stroke-dasharray="\${circ}" stroke-dashoffset="\${fillLen}"/></svg>
      <div class="arc-center"><div class="arc-days" style="color:\${urgency}">\${remaining>0?remaining:'0'}</div><div class="arc-days-label">\${remaining>0?'ng\xE0y c\xF2n l\u1EA1i':'\u0110\xE3 qu\xE1 h\u1EA1n'}</div></div>
    </div>
    <div class="arc-rows">
      <div class="arc-row"><div class="arc-row-lbl">H\u1EA1n k\u1EBF ti\u1EBFp</div><div class="arc-row-val">\${nextStr}</div></div>
      <div class="arc-row"><div class="arc-row-lbl">Chu k\u1EF3</div><div class="arc-row-val">\${cycle.label}</div></div>
      <div class="arc-row"><div class="arc-row-lbl">L\u1EA7n tr\u01B0\u1EDBc</div><div class="arc-row-val">\${lastStr}</div></div>
      <div class="arc-row"><div class="arc-row-lbl">N\u0103m xe</div><div class="arc-row-val">\${state.year}</div></div>
    </div>
    <div class="fee-banner"><div class="fee-banner-label">L\u1EC7 ph\xED \u0111\u0103ng ki\u1EC3m</div><div class="fee-banner-val">\${fee.toLocaleString('vi-VN')}\u0111</div></div>
  \`;
}
function renderCenterList(){
  const list=CENTERS.filter(c=>c.types.includes(state.vtype)).sort((a,b)=>a.dist-b.dist);
  document.getElementById('centerList').innerHTML=list.map(c=>\`
    <div class="center-card\${state.centerId===c.id?' on':''}" onclick="selectCenter('\${c.id}')">
      <div class="center-num">\${c.idx}</div>
      <div class="center-info">
        <div class="center-name">\${c.name}</div>
        <div class="center-addr">\${c.addr}</div>
        <div class="center-meta">
          <span class="center-dist">\${c.dist}km</span>
          <span class="center-tag open">M\u1EDF c\u1EEDa \${c.open}</span>
          <span class="center-tag xe">\${c.types.includes('xemay')&&c.types.includes('oto')?'Xe m\xE1y & \xD4 t\xF4':c.types.includes('oto')?'Ch\u1EC9 \xF4 t\xF4':'Xe m\xE1y'}</span>
          <span class="center-wait">\u23F1 ~\${c.wait} ph\xFAt ch\u1EDD</span>
        </div>
      </div>
    </div>\`).join('');
  document.getElementById('s2-sub').textContent=\`\${list.length} trung t\xE2m nh\u1EADn \${state.vtype==='xemay'?'xe m\xE1y':'\xF4 t\xF4'} t\u1EA1i TP.HCM\`;
}
function selectCenter(id){
  state.centerId=id; renderCenterList();
  document.getElementById('btnStep2').disabled=false;
  if(dkMap){const c=CENTERS.find(x=>x.id===id);if(c)dkMap.panTo([c.lat,c.lng],{animate:true,duration:.4});}
}
let dkMap=null; const dkMarkers={};
function initDkMap(){
  if(dkMap)return;
  dkMap=L.map('dkMap',{center:[10.796,106.682],zoom:12});
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',{maxZoom:19}).addTo(dkMap);
  CENTERS.forEach(c=>{
    const el=document.createElement('div');
    el.innerHTML=\`<div style="width:28px;height:28px;border-radius:50%;background:#EB2F96;border:2.5px solid #fff;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:800;color:#fff;box-shadow:0 2px 8px rgba(0,0,0,.4);cursor:pointer;">\${c.idx}</div>\`;
    const icon=L.divIcon({html:el.innerHTML,iconSize:[28,28],iconAnchor:[14,14],className:''});
    const marker=L.marker([c.lat,c.lng],{icon}).addTo(dkMap);
    marker.bindPopup(\`<div class="map-center-popup"><strong>\${c.name}</strong><small>\${c.addr}</small></div>\`,{closeButton:false});
    marker.on('click',()=>selectCenter(c.id));
    dkMarkers[c.id]=marker;
  });
}
let calYear, calMonth;
const _today=new Date(); _today.setHours(0,0,0,0);
const fullDays=new Set([_today.getDate()+2,_today.getDate()+5,_today.getDate()+10].filter(d=>d<=31));
const fewDays=new Set([_today.getDate()+1,_today.getDate()+4,_today.getDate()+7].filter(d=>d<=31));
function renderCalendar(){calYear=_today.getFullYear();calMonth=_today.getMonth();renderCalGrid('mainCal');}
function renderCalGrid(targetId){
  const target=document.getElementById(targetId);
  const firstDay=new Date(calYear,calMonth,1).getDay();
  const daysInMonth=new Date(calYear,calMonth+1,0).getDate();
  const monthName=new Date(calYear,calMonth,1).toLocaleDateString('vi-VN',{month:'long',year:'numeric'});
  let html=\`<div class="cal-head"><button class="cal-nav" onclick="prevMonth('\${targetId}')">\${licon('ChevronLeft',13,2.5)}</button><div class="cal-month">\${monthName}</div><button class="cal-nav" onclick="nextMonth('\${targetId}')">\${licon('ChevronRight',13,2.5)}</button></div><div class="cal-grid">\${['CN','T2','T3','T4','T5','T6','T7'].map(d=>\`<div class="cal-dow">\${d}</div>\`).join('')}\${Array(firstDay).fill('<div></div>').join('')}\`;
  for(let d=1;d<=daysInMonth;d++){
    const date=new Date(calYear,calMonth,d);
    const isWeekend=date.getDay()===0||date.getDay()===6;
    const isPast=date<_today; const isToday=date.getTime()===_today.getTime();
    const isSel=state.selDate&&state.selDate.getTime()===date.getTime();
    const isFull=fullDays.has(d);
    let cls='cal-day';
    if(isPast)cls+=' past'; else if(isWeekend||isFull)cls+=' off'; else cls+=' has-slot';
    if(isToday&&!isPast)cls+=' today'; if(isSel)cls+=' sel';
    const clickable=!isPast&&!isWeekend&&!isFull;
    html+=\`<div class="\${cls}" \${clickable?\`onclick="selectDate(\${calYear},\${calMonth},\${d},'\${targetId}')"\`:''}>\${d}</div>\`;
  }
  html+='</div>';
  if(state.selDate){
    const selLabel=state.selDate.toLocaleDateString('vi-VN',{weekday:'long',day:'numeric',month:'long'});
    html+=\`<div id="slotSection-\${targetId}" style="margin-top:16px"><div class="slots-label">Khung gi\u1EDD \u2014 \${selLabel}</div><div class="slot-grid">\${renderSlots()}</div></div>\`;
  }
  target.innerHTML=html;
}
function renderSlots(){
  const times=['07:00','07:30','08:00','08:30','09:00','09:30','10:00','10:30','13:30','14:00','14:30','15:00','15:30','16:00'];
  const fullSlots=new Set(['07:30','09:30','13:30','15:00']); const fewSlots=new Set(['08:30','10:30','14:30']);
  return times.map(t=>{const isFull=fullSlots.has(t),isFew=fewSlots.has(t),isSel=state.selSlot===t;let cls='slot';if(isFull)cls+=' full';else if(isFew)cls+=' few';if(isSel)cls+=' sel';return\`<button class="\${cls}" \${!isFull?\`onclick="selectSlot('\${t}')"\`:'disabled'}>\${t}\${isFull?' (h\u1EBFt)':''}</button>\`;}).join('');
}
function selectDate(y,m,d,targetId){state.selDate=new Date(y,m,d);state.selSlot=null;document.getElementById('btnStep3').disabled=true;renderCalGrid(targetId);}
function selectSlot(t){state.selSlot=t;document.getElementById('btnStep3').disabled=false;renderCalGrid('mainCal');}
function prevMonth(targetId){calMonth--;if(calMonth<0){calMonth=11;calYear--;}renderCalGrid(targetId);}
function nextMonth(targetId){calMonth++;if(calMonth>11){calMonth=0;calYear++;}renderCalGrid(targetId);}
function renderConfirm(){
  const center=CENTERS.find(c=>c.id===state.centerId);
  const fee=(FEES[state.vtype]||0).toLocaleString('vi-VN')+'\u0111';
  const dateStr=state.selDate?.toLocaleDateString('vi-VN',{weekday:'long',day:'numeric',month:'long',year:'numeric'})||'';
  const vtStr=state.vtype==='xemay'?'Xe m\xE1y':'\xD4 t\xF4';
  const rows=[{k:'Bi\u1EC3n s\u1ED1 xe',v:state.plate},{k:'Lo\u1EA1i xe',v:vtStr},{k:'Trung t\xE2m',v:center?.name||''},{k:'\u0110\u1ECBa ch\u1EC9',v:center?.addr||''},{k:'Ng\xE0y h\u1EB9n',v:dateStr},{k:'Gi\u1EDD h\u1EB9n',v:state.selSlot}];
  const html=rows.map(r=>\`<div class="confirm-row"><div class="confirm-key">\${r.k}</div><div class="confirm-val">\${r.v}</div></div><div class="confirm-divider"></div>\`).join('');
  document.getElementById('confirmList').innerHTML=html;
  document.getElementById('confirmListRight').innerHTML=html;
  document.getElementById('confirmFee').textContent=fee;
  document.getElementById('confirmFeeRight').textContent=fee;
}
function doConfirm(){
  const center=CENTERS.find(c=>c.id===state.centerId);
  const dateStr=state.selDate?.toLocaleDateString('vi-VN',{day:'numeric',month:'long',year:'numeric'})||'';
  document.getElementById('s4-body').style.display='none';
  document.getElementById('successScreen').style.display='block';
  document.getElementById('successSub').textContent=\`Bi\xEAn lai \u0111i\u1EC7n t\u1EED \u0111\xE3 g\u1EEDi v\xE0o MoMo. Mang CCCD v\xE0 \u0111\u0103ng k\xFD xe \u0111\u1EBFn \${center?.name}, ng\xE0y \${dateStr} l\xFAc \${state.selSlot}.\`;
  document.getElementById('successCard').innerHTML=\`<div class="success-card-row"><span class="success-card-key">Trung t\xE2m</span><span class="success-card-val">\${center?.name}</span></div><div class="success-card-row"><span class="success-card-key">Th\u1EDDi gian</span><span class="success-card-val">\${dateStr} \xB7 \${state.selSlot}</span></div><div class="success-card-row"><span class="success-card-key">Bi\u1EC3n s\u1ED1</span><span class="success-card-val">\${state.plate}</span></div><div class="success-card-row"><span class="success-card-key">M\xE3 x\xE1c nh\u1EADn</span><span class="success-card-val" style="color:var(--pink)">DK-\${Date.now().toString(36).toUpperCase().slice(-6)}</span></div>\`;
  document.querySelectorAll('.step').forEach(s=>{s.classList.remove('active');s.classList.add('done');});
}
let toastTimer;
function toast(msg){const el=document.getElementById('toast');el.textContent=msg;el.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('show'),2800);}
function licon(name,size,sw){
  if(!window.lucide||!window.lucide[name])return'';
  const children=window.lucide[name].map(([tag,attrs])=>{const a=Object.entries(attrs).map(([k,v])=>\`\${k}="\${v}"\`).join(' ');return\`<\${tag} \${a}/>\`;}).join('');
  return\`<svg xmlns="http://www.w3.org/2000/svg" width="\${size||18}" height="\${size||18}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="\${sw||2}" stroke-linecap="round" stroke-linejoin="round">\${children}</svg>\`;
}
window.addEventListener('load',()=>{
  if(window.lucide)lucide.createIcons();
  const set=(id,icon,sz,sw)=>{const el=document.getElementById(id);if(el)el.innerHTML=licon(icon,sz,sw);};
  set('edu-icon-cal','CalendarDays',18,2);set('edu-icon-doc','FileText',18,2);set('edu-icon-fee','Wallet',18,2);
  set('cv-i1','Bike',14,2);set('cv-i2','Car',14,2);set('cv-i3','Car',14,2);set('cv-i4','Car',14,2);
  set('fl-i1','Bike',14,2);set('fl-i2','Car',14,2);set('fl-i3','Bus',14,2);set('fl-i4','Truck',14,2);
  set('rel-icon-ins','ShieldCheck',20,1.8);set('rel-icon-fine','AlertCircle',20,1.8);set('rel-icon-cost','Calculator',20,1.8);
  ['rel-arr-1','rel-arr-2','rel-arr-3'].forEach(id=>set(id,'ChevronRight',16,2.5));
  set('vtype-icon-bike','Bike',32,1.8);set('vtype-icon-car','Car',32,1.8);
  set('hb-i1','MapPin',12,2.5);set('hb-i2','Wallet',12,2.5);set('hb-i3','BellRing',12,2.5);
  set('hc-i1','Check',11,2.5);set('hc-i2','Check',11,2.5);
  set('hero-cta-icon','CalendarCheck',15,2);
  // demo prefill
  document.getElementById('plateInput').value='51A-12345';state.plate='51A-12345';
  document.getElementById('yearInput').value='2021';state.year=2021;
  document.getElementById('lastInspInput').value='2025-09';state.lastInsp='2025-09';
  recalcArc();updateStep1Btn();
});
<\/script> `], ['  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"> <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"><\/script>   ', `<section class="hero"> <div class="hero-glow"></div> <div class="hero-art"> <svg viewBox="0 0 340 280" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="170" cy="160" r="130" stroke="rgba(255,255,255,.08)" stroke-width="2"></circle> <circle cx="170" cy="160" r="100" stroke="rgba(255,255,255,.05)" stroke-width="20"></circle> <path d="M 60 160 A 110 110 0 0 1 280 160" stroke="rgba(255,255,255,.06)" stroke-width="3" fill="none"></path> <path d="M 60 160 A 110 110 0 0 1 220 70" stroke="#EB2F96" stroke-width="3" fill="none" opacity=".3"></path> <circle cx="170" cy="160" r="18" fill="rgba(235,47,150,.15)"></circle> <circle cx="170" cy="160" r="6" fill="rgba(255,255,255,.2)"></circle> <line x1="170" y1="160" x2="218" y2="72" stroke="#EB2F96" stroke-width="2.5" stroke-linecap="round" opacity=".5"></line> <line x1="60" y1="160" x2="75" y2="160" stroke="rgba(255,255,255,.1)" stroke-width="1.5"></line> <line x1="280" y1="160" x2="265" y2="160" stroke="rgba(255,255,255,.1)" stroke-width="1.5"></line> <text x="170" y="148" text-anchor="middle" font-size="28" font-weight="900" fill="rgba(255,255,255,.15)" font-family="sans-serif">49</text> <text x="170" y="168" text-anchor="middle" font-size="10" fill="rgba(255,255,255,.08)" font-family="sans-serif">ng\xE0y c\xF2n l\u1EA1i</text> </svg> </div> <div class="hero-inner"> <div class="hero-left"> <div class="hero-eyebrow">Ph\xE1p l\xFD &amp; B\u1EA3o d\u01B0\u1EE1ng \xB7 Vehicle Hub</div> <h1 class="hero-h1">\u0110\u1EB7t l\u1ECBch<br><em>\u0110\u0103ng ki\u1EC3m xe</em><br>nhanh, kh\xF4ng ch\u1EDD h\xE0ng</h1> <ul class="hero-bullets"> <li><span class="hb-icon" id="hb-i1"></span>Ch\u1ECDn trung t\xE2m g\u1EA7n nh\xE0, \u0111\u1EB7t gi\u1EDD thu\u1EADn ti\u1EC7n, kh\xF4ng x\u1EBFp h\xE0ng</li> <li><span class="hb-icon" id="hb-i2"></span>Thanh to\xE1n l\u1EC7 ph\xED qua v\xED MoMo, nh\u1EADn bi\xEAn lai \u0111i\u1EC7n t\u1EED ngay</li> <li><span class="hb-icon" id="hb-i3"></span>Nh\u1EAFc h\u1EA1n tr\u01B0\u1EDBc 30 ng\xE0y, kh\xF4ng bao gi\u1EDD b\u1ECB ph\u1EA1t v\xEC qu\xEAn \u0111\u0103ng ki\u1EC3m</li> </ul> <div class="hero-stats"> <div class="hero-stat"><div class="hero-stat-val"><em>60</em>k</div><div class="hero-stat-lbl">L\u1EC7 ph\xED xe m\xE1y</div></div> <div class="hero-stat"><div class="hero-stat-val"><em>170</em>k</div><div class="hero-stat-lbl">L\u1EC7 ph\xED \xF4 t\xF4</div></div> <div class="hero-stat"><div class="hero-stat-val"><em>3</em> ph\xFAt</div><div class="hero-stat-lbl">\u0110\u1EB7t l\u1ECBch</div></div> <div class="hero-stat"><div class="hero-stat-val"><em>30</em> ng\xE0y</div><div class="hero-stat-lbl">Nh\u1EAFc tr\u01B0\u1EDBc h\u1EA1n</div></div> </div> </div> <div class="hero-right"> <div class="hero-card"> <div class="hero-card-title">Quy tr\xECnh \u0111\u1EB7t l\u1ECBch</div> <div class="hero-checklist"> <div class="hero-check-row"><div class="hero-check-icon done" id="hc-i1"></div><div class="hero-check-label done">Nh\u1EADp th\xF4ng tin xe &amp; bi\u1EC3n s\u1ED1</div></div> <div class="hero-check-row"><div class="hero-check-icon done" id="hc-i2"></div><div class="hero-check-label done">Ch\u1ECDn trung t\xE2m \u0111\u0103ng ki\u1EC3m g\u1EA7n nh\u1EA5t</div></div> <div class="hero-check-row"><div class="hero-check-icon pending"></div><div class="hero-check-label">Ch\u1ECDn ng\xE0y &amp; khung gi\u1EDD ph\xF9 h\u1EE3p</div></div> <div class="hero-check-row"><div class="hero-check-icon pending"></div><div class="hero-check-label">Thanh to\xE1n l\u1EC7 ph\xED qua MoMo</div></div> <div class="hero-check-row"><div class="hero-check-icon pending"></div><div class="hero-check-label">Nh\u1EADn bi\xEAn lai \u0111i\u1EC7n t\u1EED &amp; m\xE3 h\u1EB9n</div></div> </div> <a class="hero-cta" href="#" onclick="document.querySelector('.page-main').scrollIntoView({behavior:'smooth'});return false"> <span id="hero-cta-icon"></span>\u0110\u1EB7t l\u1ECBch ngay
</a> </div> </div> </div> </section>  <div class="page-main"> <!-- LEFT: FORM CARD --> <div class="form-card" id="formCard"> <div class="step-bar"> <div class="step-bar-inner"> <div class="step active" id="step-tab-1" onclick="goStep(1)"><div class="step-num">1</div><div class="step-label">Xe c\u1EE7a b\u1EA1n</div></div> <div class="step-arrow"></div> <div class="step" id="step-tab-2" onclick="goStep(2)"><div class="step-num">2</div><div class="step-label">Ch\u1ECDn trung t\xE2m</div></div> <div class="step-arrow"></div> <div class="step" id="step-tab-3" onclick="goStep(3)"><div class="step-num">3</div><div class="step-label">Ch\u1ECDn l\u1ECBch</div></div> <div class="step-arrow"></div> <div class="step" id="step-tab-4" onclick="goStep(4)"><div class="step-num">4</div><div class="step-label">X\xE1c nh\u1EADn</div></div> </div> </div> <!-- STEP 1 --> <div id="s1"> <div class="form-card-head"> <div class="form-title">Xe c\u1EE7a b\u1EA1n</div> <div class="form-subtitle">Nh\u1EADp th\xF4ng tin \u0111\u1EC3 t\xEDnh chu k\u1EF3 v\xE0 ph\xED \u0111\u0103ng ki\u1EC3m \u0111\xFAng theo quy \u0111\u1ECBnh.</div> </div> <div class="form-body"> <div class="vtype-row"> <button class="vtype-card on" id="vt-xemay" onclick="setVtype('xemay')"> <div class="vtype-icon" id="vtype-icon-bike"></div> <div class="vtype-name">Xe m\xE1y</div> <div class="vtype-sub">M\xF4 t\xF4, xe g\u1EAFn m\xE1y</div> </button> <button class="vtype-card" id="vt-oto" onclick="setVtype('oto')"> <div class="vtype-icon" id="vtype-icon-car"></div> <div class="vtype-name">\xD4 t\xF4</div> <div class="vtype-sub">Xe con, xe t\u1EA3i nh\u1ECF</div> </button> </div> <div class="field"> <label class="field-label">Bi\u1EC3n s\u1ED1 xe</label> <input class="field-input" id="plateInput" placeholder="VD: 51A-12345" oninput="onPlateInput()" autocomplete="off" style="text-transform:uppercase;font-weight:700;letter-spacing:.05em"> <div class="field-hint">Nh\u1EADp bi\u1EC3n s\u1ED1 \u0111\u1EC3 l\u1EA5y th\xF4ng tin v\xE0 \u0111\u1EC1 xu\u1EA5t l\u1ECBch ph\xF9 h\u1EE3p.</div> </div> <div class="field-row"> <div class="field"> <label class="field-label">N\u0103m s\u1EA3n xu\u1EA5t</label> <input class="field-input" id="yearInput" type="number" min="1990" max="2025" placeholder="VD: 2019" oninput="recalcArc()" autocomplete="off"> </div> <div class="field"> <label class="field-label">K\u1EF3 \u0111\u0103ng ki\u1EC3m g\u1EA7n nh\u1EA5t</label> <input class="field-input" id="lastInspInput" type="month" oninput="recalcArc()"> </div> </div> <button class="btn-next" id="btnStep1" onclick="toStep(2)" disabled>
Ch\u1ECDn trung t\xE2m \u0111\u0103ng ki\u1EC3m
<i data-lucide="chevron-right" width="16" height="16"></i> </button> </div> </div> <!-- STEP 2 --> <div id="s2" style="display:none"> <div class="form-card-head"> <div class="form-step-label">B\u01B0\u1EDBc 2 / 4</div> <div class="form-title">Ch\u1ECDn trung t\xE2m</div> <div class="form-subtitle" id="s2-sub">Ch\u1ECDn trung t\xE2m \u0111\u0103ng ki\u1EC3m g\u1EA7n b\u1EA1n nh\u1EA5t.</div> </div> <div class="form-body"> <div class="center-list" id="centerList"></div> <button class="btn-next" id="btnStep2" onclick="toStep(3)" disabled style="margin-top:14px">
Ch\u1ECDn ng\xE0y &amp; gi\u1EDD <i data-lucide="chevron-right" width="16" height="16"></i> </button> <button class="btn-back" onclick="toStep(1)">\u2190 Quay l\u1EA1i</button> </div> </div> <!-- STEP 3 --> <div id="s3" style="display:none"> <div class="form-card-head"> <div class="form-step-label">B\u01B0\u1EDBc 3 / 4</div> <div class="form-title">Ch\u1ECDn ng\xE0y &amp; gi\u1EDD</div> <div class="form-subtitle">Ch\u1ECDn ng\xE0y v\xE0 khung gi\u1EDD ph\xF9 h\u1EE3p. Tr\xE1nh th\u1EE9 7, ch\u1EE7 nh\u1EADt v\xE0 ng\xE0y l\u1EC5.</div> </div> <div class="form-body"> <div id="s3-cal-mobile" class="cal-card" style="margin-bottom:14px"></div> <button class="btn-next" id="btnStep3" onclick="toStep(4)" disabled>
X\xE1c nh\u1EADn l\u1ECBch h\u1EB9n <i data-lucide="chevron-right" width="16" height="16"></i> </button> <button class="btn-back" onclick="toStep(2)">\u2190 Quay l\u1EA1i</button> </div> </div> <!-- STEP 4 --> <div id="s4" style="display:none"> <div class="form-card-head"> <div class="form-step-label">B\u01B0\u1EDBc 4 / 4</div> <div class="form-title">X\xE1c nh\u1EADn &amp; Thanh to\xE1n</div> <div class="form-subtitle">Ki\u1EC3m tra th\xF4ng tin tr\u01B0\u1EDBc khi thanh to\xE1n l\u1EC7 ph\xED qua MoMo.</div> </div> <div class="form-body" id="s4-body"> <div class="confirm-list" id="confirmList"></div> <div class="confirm-total-row"> <div class="confirm-total-key">T\u1ED5ng l\u1EC7 ph\xED \u0111\u0103ng ki\u1EC3m</div> <div class="confirm-total-val" id="confirmFee">-</div> </div> <p class="pay-note">Thanh to\xE1n l\u1EC7 ph\xED qua v\xED MoMo. Bi\xEAn lai \u0111i\u1EC7n t\u1EED xu\u1EA5t ngay sau thanh to\xE1n, h\u1EE3p l\u1EC7 khi n\u1ED9p t\u1EA1i trung t\xE2m \u0111\u0103ng ki\u1EC3m.</p> <button class="btn-next" onclick="doConfirm()"> <i data-lucide="shield" style="width:16px;height:16px"></i>
Thanh to\xE1n qua MoMo
</button> <button class="btn-back" onclick="toStep(3)">\u2190 Quay l\u1EA1i</button> </div> <div class="success-screen" id="successScreen"> <div class="success-icon"><i data-lucide="check" width="24" height="24"></i></div> <div class="success-title">\u0110\u1EB7t l\u1ECBch th\xE0nh c\xF4ng!</div> <div class="success-sub" id="successSub">Bi\xEAn lai \u0111i\u1EC7n t\u1EED \u0111\xE3 g\u1EEDi v\xE0o MoMo c\u1EE7a b\u1EA1n.</div> <div class="success-card" id="successCard"></div> <button class="btn-home" onclick="window.location.href='/tien-ich-giao-thong'">\u2190 V\u1EC1 Ti\u1EC7n \xEDch Giao Th\xF4ng</button> </div> </div> </div> <!-- RIGHT PANEL --> <div class="right-panel"> <div id="rp1"> <div class="arc-card"> <div class="arc-card-head"><div class="arc-eyebrow">Chu k\u1EF3 &amp; h\u1EA1n \u0111\u0103ng ki\u1EC3m</div></div> <div class="arc-card-body" id="arcContent"> <div class="arc-empty"><i data-lucide="info" width="36" height="36"></i>Nh\u1EADp n\u0103m s\u1EA3n xu\u1EA5t v\xE0 k\u1EF3 \u0111\u0103ng ki\u1EC3m g\u1EA7n nh\u1EA5t \u0111\u1EC3 xem chu k\u1EF3 c\u1EE7a xe b\u1EA1n.</div> </div> </div> </div> <div id="rp2" style="display:none"> <div class="map-card"> <div class="map-card-head"> <div><div class="map-card-title">V\u1ECB tr\xED trung t\xE2m \u0111\u0103ng ki\u1EC3m</div><div class="map-card-sub">5 trung t\xE2m \u0111\u0103ng ki\u1EC3m t\u1EA1i TP.HCM</div></div> </div> <div id="dkMap"></div> </div> </div> <div id="rp3" style="display:none"> <div class="cal-card"> <div class="cal-card-title">Ch\u1ECDn ng\xE0y \u0111\u0103ng ki\u1EC3m</div> <div id="mainCal"></div> <div id="slotSection" style="display:none"> <div class="slots-label">Khung gi\u1EDD ng\xE0y <span id="selDateLabel"></span></div> <div class="slot-grid" id="slotGrid"></div> </div> </div> </div> <div id="rp4" style="display:none"> <div class="booking-card"> <div class="booking-card-head"> <div class="booking-card-icon"><i data-lucide="calendar" width="16" height="16"></i></div> <div><div class="booking-card-label">Chi ti\u1EBFt l\u1ECBch h\u1EB9n</div><div class="booking-card-title">\u0110\u0103ng ki\u1EC3m xe</div></div> </div> <div class="confirm-list" id="confirmListRight"></div> <div class="confirm-total-row" style="margin-top:8px"> <div class="confirm-total-key">L\u1EC7 ph\xED</div> <div class="confirm-total-val" id="confirmFeeRight">-</div> </div> </div> </div> </div> </div>  <div class="penalty-banner"> <div class="penalty-alert"> <div class="penalty-icon">\u26A0\uFE0F</div> <div class="penalty-text"> <strong>Qu\xE1 h\u1EA1n \u0111\u0103ng ki\u1EC3m b\u1ECB ph\u1EA1t 100.000 \u2013 500.000\u0111</strong>
Xe m\xE1y qu\xE1 h\u1EA1n b\u1ECB ph\u1EA1t 100.000 \u2013 200.000\u0111. \xD4 t\xF4 qu\xE1 h\u1EA1n b\u1ECB ph\u1EA1t 300.000 \u2013 500.000\u0111 v\xE0 kh\xF4ng \u0111\u01B0\u1EE3c l\u01B0u h\xE0nh. \u0110\u1EB7t l\u1ECBch tr\u01B0\u1EDBc \u0111\u1EC3 tr\xE1nh r\u1EE7i ro.
</div> </div> </div>  <section class="edu-section"> <div class="edu-inner"> <div class="edu-section-head"> <div class="edu-section-title">Chu k\u1EF3, gi\u1EA5y t\u1EDD v\xE0 l\u1EC7 ph\xED \u0111\u0103ng ki\u1EC3m</div> </div> <div class="edu-cards"> <div class="edu-card"> <div class="edu-card-head"><div class="edu-icon" id="edu-icon-cal"></div><div class="edu-card-title">Chu k\u1EF3 \u0111\u0103ng ki\u1EC3m</div></div> <div class="cycle-rows"> <div class="cycle-row"><div class="cycle-veh"><span class="cycle-veh-icon" id="cv-i1"></span>Xe m\xE1y, m\xF4 t\xF4</div><div class="cycle-val">1 n\u0103m / l\u1EA7n</div></div> <div class="cycle-row"><div class="cycle-veh"><span class="cycle-veh-icon" id="cv-i2"></span>\xD4 t\xF4 m\u1EDBi (\u2264 3 n\u0103m)</div><div class="cycle-val">30 th\xE1ng</div></div> <div class="cycle-row"><div class="cycle-veh"><span class="cycle-veh-icon" id="cv-i3"></span>\xD4 t\xF4 3 - 7 n\u0103m</div><div class="cycle-val">18 th\xE1ng</div></div> <div class="cycle-row"><div class="cycle-veh"><span class="cycle-veh-icon" id="cv-i4"></span>\xD4 t\xF4 tr\xEAn 7 n\u0103m</div><div class="cycle-val">12 th\xE1ng</div></div> </div> <div class="edu-footnote">Theo Th\xF4ng t\u01B0 16/2021/TT-BGTVT, hi\u1EC7u l\u1EF1c t\u1EEB 01/09/2021</div> </div> <div class="edu-card"> <div class="edu-card-head"><div class="edu-icon" id="edu-icon-doc"></div><div class="edu-card-title">Gi\u1EA5y t\u1EDD c\u1EA7n mang</div></div> <ul class="doc-list"> <li>CMND / CCCD b\u1EA3n g\u1ED1c c\xF2n hi\u1EC7u l\u1EF1c</li> <li>\u0110\u0103ng k\xFD xe g\u1ED1c ho\u1EB7c b\u1EA3n c\xF4ng ch\u1EE9ng</li> <li>Gi\u1EA5y ch\u1EE9ng nh\u1EADn b\u1EA3o hi\u1EC3m TNDS b\u1EAFt bu\u1ED9c c\xF2n hi\u1EC7u l\u1EF1c</li> <li>Bi\xEAn lai \u0111\xF3ng ph\xED tr\u01B0\u1EDBc b\u1EA1 (n\u1EBFu l\xE0 xe m\u1EDBi)</li> <li>Phi\u1EBFu h\u1EB9n ho\u1EB7c bi\xEAn lai \u0111i\u1EC7n t\u1EED (khi \u0111\u1EB7t l\u1ECBch qua MoMo)</li> </ul> <div class="edu-tip">Thanh to\xE1n l\u1EC7 ph\xED qua MoMo, bi\xEAn lai \u0111i\u1EC7n t\u1EED \u0111\u01B0\u1EE3c ch\u1EA5p nh\u1EADn t\u1EA1i trung t\xE2m \u0111\u0103ng ki\u1EC3m</div> </div> <div class="edu-card"> <div class="edu-card-head"><div class="edu-icon" id="edu-icon-fee"></div><div class="edu-card-title">L\u1EC7 ph\xED \u0111\u0103ng ki\u1EC3m</div></div> <div class="fee-list"> <div class="fee-row highlight"><span class="fee-label"><span class="fee-label-icon" id="fl-i1"></span>Xe m\xE1y, m\xF4 t\xF4</span><span class="fee-amount">60.000\u0111</span></div> <div class="fee-row"><span class="fee-label"><span class="fee-label-icon" id="fl-i2"></span>\xD4 t\xF4 d\u01B0\u1EDBi 9 ch\u1ED7</span><span class="fee-amount">170.000\u0111</span></div> <div class="fee-row"><span class="fee-label"><span class="fee-label-icon" id="fl-i3"></span>\xD4 t\xF4 t\u1EEB 9 ch\u1ED7 tr\u1EDF l\xEAn</span><span class="fee-amount">245.000\u0111</span></div> <div class="fee-row"><span class="fee-label"><span class="fee-label-icon" id="fl-i4"></span>Xe t\u1EA3i, xe chuy\xEAn d\xF9ng</span><span class="fee-amount">340.000\u0111</span></div> </div> <div class="edu-footnote">Theo Th\xF4ng t\u01B0 238/2016/TT-BTC.</div> </div> </div> </div> </section>  <section class="faq-section"> <div class="faq-inner"> <div class="faq-header"><h2 class="faq-title">Gi\u1EA3i \u0111\xE1p v\u1EC1 \u0111\u0103ng ki\u1EC3m xe</h2></div> <div class="faq-list"> <details class="faq-item"><summary>Xe m\xE1y c\xF3 b\u1EAFt bu\u1ED9c ph\u1EA3i \u0111\u0103ng ki\u1EC3m kh\xF4ng?</summary><div class="faq-body">C\xF3. Theo quy \u0111\u1ECBnh hi\u1EC7n h\xE0nh, m\xF4 t\xF4 v\xE0 xe g\u1EAFn m\xE1y t\u1EEB 50cc tr\u1EDF l\xEAn ph\u1EA3i \u0111\u0103ng ki\u1EC3m \u0111\u1ECBnh k\u1EF3 1 n\u0103m/l\u1EA7n. Ri\xEAng xe d\u01B0\u1EDBi 50cc (xe \u0111\u1EA1p \u0111i\u1EC7n g\u1EAFn m\xE1y) ch\u01B0a y\xEAu c\u1EA7u \u0111\u0103ng ki\u1EC3m nh\u01B0ng c\u1EA7n \u0111\u0103ng k\xFD bi\u1EC3n s\u1ED1.</div></details> <details class="faq-item"><summary>Qu\xE1 h\u1EA1n \u0111\u0103ng ki\u1EC3m b\u1ECB x\u1EED ph\u1EA1t nh\u01B0 th\u1EBF n\xE0o?</summary><div class="faq-body">Xe m\xE1y qu\xE1 h\u1EA1n \u0111\u0103ng ki\u1EC3m b\u1ECB ph\u1EA1t <strong>100.000 \u2013 200.000\u0111</strong>. \xD4 t\xF4 qu\xE1 h\u1EA1n b\u1ECB ph\u1EA1t <strong>300.000 \u2013 500.000\u0111</strong> v\xE0 b\u1ECB t\u01B0\u1EDBc quy\u1EC1n s\u1EED d\u1EE5ng gi\u1EA5y ph\xE9p l\xE1i xe 1\u20133 th\xE1ng. (Theo Ngh\u1ECB \u0111\u1ECBnh 100/2019/N\u0110-CP)</div></details> <details class="faq-item"><summary>\u0110\u1EB7t l\u1ECBch tr\u1EF1c tuy\u1EBFn qua MoMo c\xF3 h\u1EE3p l\u1EC7 kh\xF4ng?</summary><div class="faq-body">C\xF3. Sau khi \u0111\u1EB7t l\u1ECBch v\xE0 thanh to\xE1n qua MoMo, b\u1EA1n nh\u1EADn \u0111\u01B0\u1EE3c bi\xEAn lai \u0111i\u1EC7n t\u1EED v\xE0 m\xE3 x\xE1c nh\u1EADn. Tr\xECnh m\xE3 n\xE0y t\u1EA1i trung t\xE2m \u0111\u0103ng ki\u1EC3m l\xE0 h\u1EE3p l\u1EC7, kh\xF4ng c\u1EA7n in ra gi\u1EA5y.</div></details> <details class="faq-item"><summary>\u0110\u0103ng ki\u1EC3m s\u1EDBm tr\u01B0\u1EDBc h\u1EA1n c\xF3 \u0111\u01B0\u1EE3c kh\xF4ng?</summary><div class="faq-body">C\xF3 th\u1EC3 \u0111\u0103ng ki\u1EC3m s\u1EDBm t\u1ED1i \u0111a <strong>90 ng\xE0y</strong> tr\u01B0\u1EDBc ng\xE0y h\u1EBFt h\u1EA1n. Chu k\u1EF3 ti\u1EBFp theo \u0111\u01B0\u1EE3c t\xEDnh t\u1EEB ng\xE0y h\u1EBFt h\u1EA1n c\u0169 (kh\xF4ng ph\u1EA3i t\u1EEB ng\xE0y \u0111\u0103ng ki\u1EC3m th\u1EF1c t\u1EBF), n\xEAn b\u1EA1n kh\xF4ng b\u1ECB thi\u1EC7t n\u1EBFu \u0111\u0103ng ki\u1EC3m s\u1EDBm.</div></details> <details class="faq-item"><summary>L\u1EE1 qu\xEAn \u0111\u1EBFn \u0111\xFAng h\u1EB9n th\xEC sao?</summary><div class="faq-body">MoMo s\u1EBD g\u1EEDi nh\u1EAFc nh\u1EDF tr\u01B0\u1EDBc 30 ng\xE0y v\xE0 7 ng\xE0y khi g\u1EA7n \u0111\u1EBFn h\u1EA1n \u0111\u0103ng ki\u1EC3m. N\u1EBFu b\u1ECF l\u1EE1 l\u1ECBch h\u1EB9n \u0111\xE3 \u0111\u1EB7t, b\u1EA1n c\xF3 th\u1EC3 \u0111\u1EB7t l\u1EA1i l\u1ECBch m\u1EDBi m\xE0 kh\xF4ng m\u1EA5t ph\xED. L\u1EC7 ph\xED \u0111\xE3 thanh to\xE1n \u0111\u01B0\u1EE3c ho\xE0n l\u1EA1i trong 3\u20135 ng\xE0y l\xE0m vi\u1EC7c.</div></details> </div> </div> </section>  <section class="related-section"> <div class="related-inner"> <div class="related-header"><div class="related-title">Kh\xE1m ph\xE1 th\xEAm tr\xEAn Vehicle Hub</div></div> <div class="related-grid"> <a class="related-card" href="/bao-hiem-o-to"> <div class="related-card-icon related-card-icon--blue" id="rel-icon-ins"></div> <div><div class="related-card-label">B\u1EA3o hi\u1EC3m</div><div class="related-card-name">B\u1EA3o hi\u1EC3m TNDS b\u1EAFt bu\u1ED9c</div><div class="related-card-desc">Mua online, nh\u1EADn gi\u1EA5y ch\u1EE9ng nh\u1EADn \u0111i\u1EC7n t\u1EED ngay</div></div> <span class="related-card-arr" id="rel-arr-1"></span> </a> <a class="related-card" href="/phat-nguoi"> <div class="related-card-icon related-card-icon--amber" id="rel-icon-fine"></div> <div><div class="related-card-label">Ph\xE1p l\xFD</div><div class="related-card-name">Tra c\u1EE9u ph\u1EA1t ngu\u1ED9i</div><div class="related-card-desc">Ki\u1EC3m tra v\xE0 n\u1ED9p ph\u1EA1t vi ph\u1EA1m giao th\xF4ng ngay tr\xEAn MoMo</div></div> <span class="related-card-arr" id="rel-arr-2"></span> </a> <a class="related-card" href="/tien-ich-giao-thong#chi-phi-xe"> <div class="related-card-icon related-card-icon--green" id="rel-icon-cost"></div> <div><div class="related-card-label">T\xE0i ch\xEDnh xe</div><div class="related-card-name">Chi ph\xED nu\xF4i xe h\xE0ng n\u0103m</div><div class="related-card-desc">T\xEDnh t\u1ED5ng x\u0103ng, b\u1EA3o hi\u1EC3m, \u0111\u0103ng ki\u1EC3m, b\u1EA3o d\u01B0\u1EE1ng theo xe b\u1EA1n</div></div> <span class="related-card-arr" id="rel-arr-3"></span> </a> </div> </div> </section> <div class="toast" id="toast"></div> <script>
const CENTERS = [
  {id:'c1',idx:1,name:'TT \u0110\u0103ng ki\u1EC3m 50-01D',addr:'282A L\xFD Th\u01B0\u1EDDng Ki\u1EC7t, T\xE2n B\xECnh',dist:2.1,types:['xemay','oto'],open:'07:00 - 17:00',wait:25,lat:10.7827,lng:106.6575},
  {id:'c2',idx:2,name:'TT \u0110\u0103ng ki\u1EC3m 50-02D',addr:'108 Quang Trung, G\xF2 V\u1EA5p',dist:5.4,types:['xemay','oto'],open:'07:00 - 17:00',wait:40,lat:10.8321,lng:106.6756},
  {id:'c3',idx:3,name:'TT \u0110\u0103ng ki\u1EC3m 50-03D',addr:'01 Tr\u1EA7n N\xE3o, B\xECnh Th\u1EA1nh',dist:3.2,types:['oto'],open:'07:30 - 16:30',wait:15,lat:10.7927,lng:106.7302},
  {id:'c4',idx:4,name:'TT \u0110\u0103ng ki\u1EC3m 50-05D',addr:'45 T\xEAn L\u1EEDa, B\xECnh T\xE2n',dist:7.8,types:['xemay','oto'],open:'06:30 - 17:30',wait:10,lat:10.7519,lng:106.6052},
  {id:'c5',idx:5,name:'TT \u0110\u0103ng ki\u1EC3m 50-13D',addr:'17 T\xF4 K\xFD, Qu\u1EADn 12',dist:9.1,types:['xemay','oto'],open:'07:00 - 17:00',wait:55,lat:10.8621,lng:106.6573},
];
const FEES = { xemay:60000, oto:170000 };
const CYCLES = {
  xemay:{label:'1 n\u0103m/l\u1EA7n',months:12},
  oto_new:{label:'30 th\xE1ng (xe m\u1EDBi)',months:30},
  oto_mid:{label:'18 th\xE1ng (3-7 n\u0103m)',months:18},
  oto_old:{label:'12 th\xE1ng (>7 n\u0103m)',months:12},
};
const state = { vtype:'xemay', plate:'', year:null, lastInsp:null, centerId:null, selDate:null, selSlot:null };
let currentStep = 1;

function goStep(n){ if(n>currentStep)return; toStep(n,false); }
function toStep(n, validate=true){
  if(validate&&n>currentStep){
    if(currentStep===1&&(!state.plate||!state.year))return;
    if(currentStep===2&&!state.centerId)return;
    if(currentStep===3&&(!state.selDate||!state.selSlot))return;
  }
  currentStep=n;
  for(let i=1;i<=4;i++){
    const s=document.getElementById(\\\`s\\\${i}\\\`);
    const rp=document.getElementById(\\\`rp\\\${i}\\\`);
    if(s)s.style.display=i===n?'block':'none';
    if(rp)rp.style.display=i===n?'block':'none';
    const tab=document.getElementById(\\\`step-tab-\\\${i}\\\`);
    tab.classList.toggle('active',i===n);
    tab.classList.toggle('done',i<n);
  }
  if(n===2){renderCenterList();initDkMap();}
  if(n===3){renderCalendar();document.getElementById('s3-cal-mobile').innerHTML='';}
  if(n===4){renderConfirm();document.getElementById('s4-body').style.display='block';document.getElementById('successScreen').style.display='none';}
}

function setVtype(t){
  state.vtype=t;
  document.getElementById('vt-xemay').classList.toggle('on',t==='xemay');
  document.getElementById('vt-oto').classList.toggle('on',t==='oto');
  recalcArc(); updateStep1Btn();
}
function onPlateInput(){
  const v=document.getElementById('plateInput').value.toUpperCase().replace(/[^A-Z0-9\\\\-\\\\.]/g,'');
  document.getElementById('plateInput').value=v; state.plate=v; updateStep1Btn();
}
function updateStep1Btn(){
  document.getElementById('btnStep1').disabled=!(state.plate.length>=5&&state.year>=1990);
}
function recalcArc(){
  state.year=parseInt(document.getElementById('yearInput').value)||null;
  state.lastInsp=document.getElementById('lastInspInput').value||null;
  updateStep1Btn(); renderArc();
}
function getCycle(){
  if(!state.year)return null;
  const age=new Date().getFullYear()-state.year;
  if(state.vtype==='xemay')return CYCLES.xemay;
  if(age<=3)return CYCLES.oto_new;
  if(age<=7)return CYCLES.oto_mid;
  return CYCLES.oto_old;
}
function renderArc(){
  const cycle=getCycle();
  if(!cycle||!state.lastInsp){
    document.getElementById('arcContent').innerHTML=\\\`<div class="arc-empty">\\\${licon('Info',36,1.5)}Nh\u1EADp n\u0103m s\u1EA3n xu\u1EA5t v\xE0 h\u1EA1n \u0111\u0103ng ki\u1EC3m hi\u1EC7n t\u1EA1i \u0111\u1EC3 xem chu k\u1EF3 c\u1EE7a xe b\u1EA1n.</div>\\\`;
    return;
  }
  const lastDate=new Date(state.lastInsp+'-01');
  const nextDate=new Date(lastDate); nextDate.setMonth(nextDate.getMonth()+cycle.months);
  const today=new Date(); today.setHours(0,0,0,0);
  const totalDays=cycle.months*30;
  const elapsed=Math.floor((today-lastDate)/(1000*60*60*24));
  const remaining=Math.floor((nextDate-today)/(1000*60*60*24));
  const pct=Math.min(Math.max(elapsed/totalDays,0),1);
  const r=80; const circ=2*Math.PI*r; const fillLen=circ*(1-pct);
  const urgency=remaining<30?'#ef4444':remaining<90?'#f59e0b':'#EB2F96';
  const nextStr=nextDate.toLocaleDateString('vi-VN',{month:'long',year:'numeric'});
  const lastStr=lastDate.toLocaleDateString('vi-VN',{month:'long',year:'numeric'});
  const fee=FEES[state.vtype];
  document.getElementById('arcContent').innerHTML=\\\`
    <div class="arc-wrap">
      <svg viewBox="0 0 180 180"><circle class="arc-track" cx="90" cy="90" r="\\\${r}"/><circle class="arc-fill" cx="90" cy="90" r="\\\${r}" stroke="\\\${urgency}" stroke-dasharray="\\\${circ}" stroke-dashoffset="\\\${fillLen}"/></svg>
      <div class="arc-center"><div class="arc-days" style="color:\\\${urgency}">\\\${remaining>0?remaining:'0'}</div><div class="arc-days-label">\\\${remaining>0?'ng\xE0y c\xF2n l\u1EA1i':'\u0110\xE3 qu\xE1 h\u1EA1n'}</div></div>
    </div>
    <div class="arc-rows">
      <div class="arc-row"><div class="arc-row-lbl">H\u1EA1n k\u1EBF ti\u1EBFp</div><div class="arc-row-val">\\\${nextStr}</div></div>
      <div class="arc-row"><div class="arc-row-lbl">Chu k\u1EF3</div><div class="arc-row-val">\\\${cycle.label}</div></div>
      <div class="arc-row"><div class="arc-row-lbl">L\u1EA7n tr\u01B0\u1EDBc</div><div class="arc-row-val">\\\${lastStr}</div></div>
      <div class="arc-row"><div class="arc-row-lbl">N\u0103m xe</div><div class="arc-row-val">\\\${state.year}</div></div>
    </div>
    <div class="fee-banner"><div class="fee-banner-label">L\u1EC7 ph\xED \u0111\u0103ng ki\u1EC3m</div><div class="fee-banner-val">\\\${fee.toLocaleString('vi-VN')}\u0111</div></div>
  \\\`;
}
function renderCenterList(){
  const list=CENTERS.filter(c=>c.types.includes(state.vtype)).sort((a,b)=>a.dist-b.dist);
  document.getElementById('centerList').innerHTML=list.map(c=>\\\`
    <div class="center-card\\\${state.centerId===c.id?' on':''}" onclick="selectCenter('\\\${c.id}')">
      <div class="center-num">\\\${c.idx}</div>
      <div class="center-info">
        <div class="center-name">\\\${c.name}</div>
        <div class="center-addr">\\\${c.addr}</div>
        <div class="center-meta">
          <span class="center-dist">\\\${c.dist}km</span>
          <span class="center-tag open">M\u1EDF c\u1EEDa \\\${c.open}</span>
          <span class="center-tag xe">\\\${c.types.includes('xemay')&&c.types.includes('oto')?'Xe m\xE1y & \xD4 t\xF4':c.types.includes('oto')?'Ch\u1EC9 \xF4 t\xF4':'Xe m\xE1y'}</span>
          <span class="center-wait">\u23F1 ~\\\${c.wait} ph\xFAt ch\u1EDD</span>
        </div>
      </div>
    </div>\\\`).join('');
  document.getElementById('s2-sub').textContent=\\\`\\\${list.length} trung t\xE2m nh\u1EADn \\\${state.vtype==='xemay'?'xe m\xE1y':'\xF4 t\xF4'} t\u1EA1i TP.HCM\\\`;
}
function selectCenter(id){
  state.centerId=id; renderCenterList();
  document.getElementById('btnStep2').disabled=false;
  if(dkMap){const c=CENTERS.find(x=>x.id===id);if(c)dkMap.panTo([c.lat,c.lng],{animate:true,duration:.4});}
}
let dkMap=null; const dkMarkers={};
function initDkMap(){
  if(dkMap)return;
  dkMap=L.map('dkMap',{center:[10.796,106.682],zoom:12});
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',{maxZoom:19}).addTo(dkMap);
  CENTERS.forEach(c=>{
    const el=document.createElement('div');
    el.innerHTML=\\\`<div style="width:28px;height:28px;border-radius:50%;background:#EB2F96;border:2.5px solid #fff;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:800;color:#fff;box-shadow:0 2px 8px rgba(0,0,0,.4);cursor:pointer;">\\\${c.idx}</div>\\\`;
    const icon=L.divIcon({html:el.innerHTML,iconSize:[28,28],iconAnchor:[14,14],className:''});
    const marker=L.marker([c.lat,c.lng],{icon}).addTo(dkMap);
    marker.bindPopup(\\\`<div class="map-center-popup"><strong>\\\${c.name}</strong><small>\\\${c.addr}</small></div>\\\`,{closeButton:false});
    marker.on('click',()=>selectCenter(c.id));
    dkMarkers[c.id]=marker;
  });
}
let calYear, calMonth;
const _today=new Date(); _today.setHours(0,0,0,0);
const fullDays=new Set([_today.getDate()+2,_today.getDate()+5,_today.getDate()+10].filter(d=>d<=31));
const fewDays=new Set([_today.getDate()+1,_today.getDate()+4,_today.getDate()+7].filter(d=>d<=31));
function renderCalendar(){calYear=_today.getFullYear();calMonth=_today.getMonth();renderCalGrid('mainCal');}
function renderCalGrid(targetId){
  const target=document.getElementById(targetId);
  const firstDay=new Date(calYear,calMonth,1).getDay();
  const daysInMonth=new Date(calYear,calMonth+1,0).getDate();
  const monthName=new Date(calYear,calMonth,1).toLocaleDateString('vi-VN',{month:'long',year:'numeric'});
  let html=\\\`<div class="cal-head"><button class="cal-nav" onclick="prevMonth('\\\${targetId}')">\\\${licon('ChevronLeft',13,2.5)}</button><div class="cal-month">\\\${monthName}</div><button class="cal-nav" onclick="nextMonth('\\\${targetId}')">\\\${licon('ChevronRight',13,2.5)}</button></div><div class="cal-grid">\\\${['CN','T2','T3','T4','T5','T6','T7'].map(d=>\\\`<div class="cal-dow">\\\${d}</div>\\\`).join('')}\\\${Array(firstDay).fill('<div></div>').join('')}\\\`;
  for(let d=1;d<=daysInMonth;d++){
    const date=new Date(calYear,calMonth,d);
    const isWeekend=date.getDay()===0||date.getDay()===6;
    const isPast=date<_today; const isToday=date.getTime()===_today.getTime();
    const isSel=state.selDate&&state.selDate.getTime()===date.getTime();
    const isFull=fullDays.has(d);
    let cls='cal-day';
    if(isPast)cls+=' past'; else if(isWeekend||isFull)cls+=' off'; else cls+=' has-slot';
    if(isToday&&!isPast)cls+=' today'; if(isSel)cls+=' sel';
    const clickable=!isPast&&!isWeekend&&!isFull;
    html+=\\\`<div class="\\\${cls}" \\\${clickable?\\\`onclick="selectDate(\\\${calYear},\\\${calMonth},\\\${d},'\\\${targetId}')"\\\`:''}>\\\${d}</div>\\\`;
  }
  html+='</div>';
  if(state.selDate){
    const selLabel=state.selDate.toLocaleDateString('vi-VN',{weekday:'long',day:'numeric',month:'long'});
    html+=\\\`<div id="slotSection-\\\${targetId}" style="margin-top:16px"><div class="slots-label">Khung gi\u1EDD \u2014 \\\${selLabel}</div><div class="slot-grid">\\\${renderSlots()}</div></div>\\\`;
  }
  target.innerHTML=html;
}
function renderSlots(){
  const times=['07:00','07:30','08:00','08:30','09:00','09:30','10:00','10:30','13:30','14:00','14:30','15:00','15:30','16:00'];
  const fullSlots=new Set(['07:30','09:30','13:30','15:00']); const fewSlots=new Set(['08:30','10:30','14:30']);
  return times.map(t=>{const isFull=fullSlots.has(t),isFew=fewSlots.has(t),isSel=state.selSlot===t;let cls='slot';if(isFull)cls+=' full';else if(isFew)cls+=' few';if(isSel)cls+=' sel';return\\\`<button class="\\\${cls}" \\\${!isFull?\\\`onclick="selectSlot('\\\${t}')"\\\`:'disabled'}>\\\${t}\\\${isFull?' (h\u1EBFt)':''}</button>\\\`;}).join('');
}
function selectDate(y,m,d,targetId){state.selDate=new Date(y,m,d);state.selSlot=null;document.getElementById('btnStep3').disabled=true;renderCalGrid(targetId);}
function selectSlot(t){state.selSlot=t;document.getElementById('btnStep3').disabled=false;renderCalGrid('mainCal');}
function prevMonth(targetId){calMonth--;if(calMonth<0){calMonth=11;calYear--;}renderCalGrid(targetId);}
function nextMonth(targetId){calMonth++;if(calMonth>11){calMonth=0;calYear++;}renderCalGrid(targetId);}
function renderConfirm(){
  const center=CENTERS.find(c=>c.id===state.centerId);
  const fee=(FEES[state.vtype]||0).toLocaleString('vi-VN')+'\u0111';
  const dateStr=state.selDate?.toLocaleDateString('vi-VN',{weekday:'long',day:'numeric',month:'long',year:'numeric'})||'';
  const vtStr=state.vtype==='xemay'?'Xe m\xE1y':'\xD4 t\xF4';
  const rows=[{k:'Bi\u1EC3n s\u1ED1 xe',v:state.plate},{k:'Lo\u1EA1i xe',v:vtStr},{k:'Trung t\xE2m',v:center?.name||''},{k:'\u0110\u1ECBa ch\u1EC9',v:center?.addr||''},{k:'Ng\xE0y h\u1EB9n',v:dateStr},{k:'Gi\u1EDD h\u1EB9n',v:state.selSlot}];
  const html=rows.map(r=>\\\`<div class="confirm-row"><div class="confirm-key">\\\${r.k}</div><div class="confirm-val">\\\${r.v}</div></div><div class="confirm-divider"></div>\\\`).join('');
  document.getElementById('confirmList').innerHTML=html;
  document.getElementById('confirmListRight').innerHTML=html;
  document.getElementById('confirmFee').textContent=fee;
  document.getElementById('confirmFeeRight').textContent=fee;
}
function doConfirm(){
  const center=CENTERS.find(c=>c.id===state.centerId);
  const dateStr=state.selDate?.toLocaleDateString('vi-VN',{day:'numeric',month:'long',year:'numeric'})||'';
  document.getElementById('s4-body').style.display='none';
  document.getElementById('successScreen').style.display='block';
  document.getElementById('successSub').textContent=\\\`Bi\xEAn lai \u0111i\u1EC7n t\u1EED \u0111\xE3 g\u1EEDi v\xE0o MoMo. Mang CCCD v\xE0 \u0111\u0103ng k\xFD xe \u0111\u1EBFn \\\${center?.name}, ng\xE0y \\\${dateStr} l\xFAc \\\${state.selSlot}.\\\`;
  document.getElementById('successCard').innerHTML=\\\`<div class="success-card-row"><span class="success-card-key">Trung t\xE2m</span><span class="success-card-val">\\\${center?.name}</span></div><div class="success-card-row"><span class="success-card-key">Th\u1EDDi gian</span><span class="success-card-val">\\\${dateStr} \xB7 \\\${state.selSlot}</span></div><div class="success-card-row"><span class="success-card-key">Bi\u1EC3n s\u1ED1</span><span class="success-card-val">\\\${state.plate}</span></div><div class="success-card-row"><span class="success-card-key">M\xE3 x\xE1c nh\u1EADn</span><span class="success-card-val" style="color:var(--pink)">DK-\\\${Date.now().toString(36).toUpperCase().slice(-6)}</span></div>\\\`;
  document.querySelectorAll('.step').forEach(s=>{s.classList.remove('active');s.classList.add('done');});
}
let toastTimer;
function toast(msg){const el=document.getElementById('toast');el.textContent=msg;el.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('show'),2800);}
function licon(name,size,sw){
  if(!window.lucide||!window.lucide[name])return'';
  const children=window.lucide[name].map(([tag,attrs])=>{const a=Object.entries(attrs).map(([k,v])=>\\\`\\\${k}="\\\${v}"\\\`).join(' ');return\\\`<\\\${tag} \\\${a}/>\\\`;}).join('');
  return\\\`<svg xmlns="http://www.w3.org/2000/svg" width="\\\${size||18}" height="\\\${size||18}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="\\\${sw||2}" stroke-linecap="round" stroke-linejoin="round">\\\${children}</svg>\\\`;
}
window.addEventListener('load',()=>{
  if(window.lucide)lucide.createIcons();
  const set=(id,icon,sz,sw)=>{const el=document.getElementById(id);if(el)el.innerHTML=licon(icon,sz,sw);};
  set('edu-icon-cal','CalendarDays',18,2);set('edu-icon-doc','FileText',18,2);set('edu-icon-fee','Wallet',18,2);
  set('cv-i1','Bike',14,2);set('cv-i2','Car',14,2);set('cv-i3','Car',14,2);set('cv-i4','Car',14,2);
  set('fl-i1','Bike',14,2);set('fl-i2','Car',14,2);set('fl-i3','Bus',14,2);set('fl-i4','Truck',14,2);
  set('rel-icon-ins','ShieldCheck',20,1.8);set('rel-icon-fine','AlertCircle',20,1.8);set('rel-icon-cost','Calculator',20,1.8);
  ['rel-arr-1','rel-arr-2','rel-arr-3'].forEach(id=>set(id,'ChevronRight',16,2.5));
  set('vtype-icon-bike','Bike',32,1.8);set('vtype-icon-car','Car',32,1.8);
  set('hb-i1','MapPin',12,2.5);set('hb-i2','Wallet',12,2.5);set('hb-i3','BellRing',12,2.5);
  set('hc-i1','Check',11,2.5);set('hc-i2','Check',11,2.5);
  set('hero-cta-icon','CalendarCheck',15,2);
  // demo prefill
  document.getElementById('plateInput').value='51A-12345';state.plate='51A-12345';
  document.getElementById('yearInput').value='2021';state.year=2021;
  document.getElementById('lastInspInput').value='2025-09';state.lastInsp='2025-09';
  recalcArc();updateStep1Btn();
});
<\/script> `])), maybeRenderHead()) })}`;
}, "/Users/hienhv/HienHv/Klaus/Web-Idea/web-momo-prototype/apps/astro/src/pages/tien-ich-giao-thong/dang-kiem.astro", void 0);

const $$file = "/Users/hienhv/HienHv/Klaus/Web-Idea/web-momo-prototype/apps/astro/src/pages/tien-ich-giao-thong/dang-kiem.astro";
const $$url = "/tien-ich-giao-thong/dang-kiem";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$DangKiem,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
