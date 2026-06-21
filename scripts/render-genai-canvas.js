const sharp = require('sharp');
const path = require('path');

const output = path.resolve(__dirname, '../assets/genai/kinetic-assurance-key-visual.png');

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1920" height="600" viewBox="0 0 1920 600">
  <defs>
    <linearGradient id="plum" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#250019"/>
      <stop offset="0.48" stop-color="#8f0058"/>
      <stop offset="1" stop-color="#f06ab3"/>
    </linearGradient>
    <linearGradient id="glass" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#ffffff" stop-opacity="0.92"/>
      <stop offset="0.45" stop-color="#ffd9ee" stop-opacity="0.72"/>
      <stop offset="1" stop-color="#cc5b9b" stop-opacity="0.42"/>
    </linearGradient>
    <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#fff2a8"/>
      <stop offset="0.48" stop-color="#ffc44f"/>
      <stop offset="1" stop-color="#dc7614"/>
    </linearGradient>
    <radialGradient id="halo">
      <stop offset="0" stop-color="#ffd4ec" stop-opacity="0.96"/>
      <stop offset="0.34" stop-color="#f383c3" stop-opacity="0.62"/>
      <stop offset="0.72" stop-color="#a50064" stop-opacity="0.14"/>
      <stop offset="1" stop-color="#a50064" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="screen" cx="35%" cy="25%">
      <stop offset="0" stop-color="#fff8fc"/>
      <stop offset="0.42" stop-color="#f8c8e1"/>
      <stop offset="1" stop-color="#bd337e"/>
    </radialGradient>
    <pattern id="microgrid" width="26" height="26" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1.35" fill="#fff" fill-opacity="0.34"/>
    </pattern>
    <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="18"/>
    </filter>
    <filter id="shadow" x="-50%" y="-50%" width="200%" height="220%">
      <feDropShadow dx="0" dy="24" stdDeviation="20" flood-color="#32001f" flood-opacity="0.45"/>
    </filter>
    <filter id="smallShadow" x="-50%" y="-50%" width="200%" height="220%">
      <feDropShadow dx="0" dy="12" stdDeviation="10" flood-color="#3d0026" flood-opacity="0.34"/>
    </filter>
    <clipPath id="screenClip"><rect x="1309" y="111" width="207" height="369" rx="32"/></clipPath>
  </defs>

  <g opacity="0.95">
    <ellipse cx="1454" cy="300" rx="520" ry="470" fill="url(#halo)"/>
    <ellipse cx="1454" cy="300" rx="378" ry="258" fill="none" stroke="#fff" stroke-opacity="0.22" stroke-width="2"/>
    <ellipse cx="1454" cy="300" rx="455" ry="318" fill="none" stroke="#fff" stroke-opacity="0.13" stroke-width="1.5" stroke-dasharray="4 12"/>
    <path d="M980 407 C1150 155 1470 72 1864 173" fill="none" stroke="#fff" stroke-opacity="0.18" stroke-width="2"/>
    <path d="M1004 459 C1272 554 1630 548 1888 331" fill="none" stroke="#ffd2eb" stroke-opacity="0.24" stroke-width="2" stroke-dasharray="2 16"/>
    <rect x="1010" y="52" width="870" height="496" rx="38" fill="url(#microgrid)" opacity="0.56"/>
  </g>

  <g filter="url(#smallShadow)" opacity="0.94">
    <g transform="rotate(-13 1602 242)">
      <rect x="1506" y="174" width="238" height="142" rx="30" fill="url(#glass)" stroke="#fff" stroke-opacity="0.72" stroke-width="2"/>
      <circle cx="1695" cy="222" r="18" fill="#fff" fill-opacity="0.72"/>
      <rect x="1540" y="218" width="102" height="9" rx="4.5" fill="#a50064" fill-opacity="0.34"/>
      <rect x="1540" y="239" width="67" height="7" rx="3.5" fill="#a50064" fill-opacity="0.18"/>
      <path d="M1540 276 H1690" stroke="#fff" stroke-opacity="0.72" stroke-width="3" stroke-linecap="round"/>
    </g>
    <g transform="rotate(11 1596 386)">
      <rect x="1492" y="326" width="254" height="146" rx="30" fill="url(#gold)" stroke="#fff5c8" stroke-opacity="0.8" stroke-width="2"/>
      <circle cx="1696" cy="374" r="19" fill="#fff9d5" fill-opacity="0.82"/>
      <rect x="1529" y="371" width="102" height="9" rx="4.5" fill="#7a3c00" fill-opacity="0.38"/>
      <rect x="1529" y="393" width="74" height="7" rx="3.5" fill="#7a3c00" fill-opacity="0.2"/>
      <path d="M1529 432 H1686" stroke="#fff6cb" stroke-opacity="0.8" stroke-width="3" stroke-linecap="round"/>
    </g>
  </g>

  <g filter="url(#shadow)">
    <rect x="1278" y="76" width="271" height="438" rx="48" fill="#160e15" transform="rotate(6 1413 295)"/>
    <rect x="1294" y="91" width="239" height="406" rx="39" fill="url(#plum)" transform="rotate(6 1413 295)" stroke="#fff" stroke-opacity="0.28" stroke-width="2"/>
    <g transform="rotate(6 1413 295)" clip-path="url(#screenClip)">
      <rect x="1309" y="111" width="207" height="369" rx="32" fill="url(#screen)"/>
      <ellipse cx="1477" cy="346" rx="147" ry="134" fill="#fff" fill-opacity="0.17"/>
      <path d="M1270 398 C1351 313 1448 492 1569 330" fill="none" stroke="#fff" stroke-opacity="0.66" stroke-width="38" stroke-linecap="round"/>
      <path d="M1282 255 C1375 178 1449 326 1553 214" fill="none" stroke="#ffd8ec" stroke-opacity="0.5" stroke-width="17" stroke-linecap="round"/>
      <g fill="#fff" fill-opacity="0.82">
        <circle cx="1344" cy="155" r="7"/><circle cx="1370" cy="155" r="7"/><circle cx="1396" cy="155" r="7"/>
      </g>
    </g>
    <rect x="1382" y="104" width="70" height="8" rx="4" fill="#0d080c" transform="rotate(6 1413 295)"/>
  </g>

  <g filter="url(#smallShadow)">
    <g transform="rotate(-8 1175 194)">
      <circle cx="1175" cy="194" r="49" fill="url(#gold)" stroke="#fff1a7" stroke-width="3"/>
      <circle cx="1175" cy="194" r="34" fill="none" stroke="#9b5000" stroke-opacity="0.24" stroke-width="2" stroke-dasharray="3 5"/>
      <path d="M1161 194 H1189 M1175 180 V208" stroke="#884500" stroke-opacity="0.52" stroke-width="7" stroke-linecap="round"/>
    </g>
    <g transform="rotate(12 1170 414)">
      <circle cx="1170" cy="414" r="63" fill="url(#glass)" stroke="#fff" stroke-opacity="0.84" stroke-width="3"/>
      <circle cx="1170" cy="414" r="44" fill="none" stroke="#a50064" stroke-opacity="0.18" stroke-width="2" stroke-dasharray="4 7"/>
      <path d="M1149 414 H1191 M1170 393 V435" stroke="#a50064" stroke-opacity="0.46" stroke-width="8" stroke-linecap="round"/>
    </g>
    <g transform="rotate(-16 1770 118)">
      <circle cx="1770" cy="118" r="38" fill="url(#gold)" stroke="#fff1a7" stroke-width="3"/>
      <circle cx="1770" cy="118" r="25" fill="none" stroke="#9b5000" stroke-opacity="0.26" stroke-width="2"/>
    </g>
  </g>

  <g fill="#fff">
    <circle cx="1074" cy="295" r="5" fill-opacity="0.72"/>
    <circle cx="1103" cy="318" r="3" fill-opacity="0.48"/>
    <circle cx="1139" cy="283" r="7" fill-opacity="0.56"/>
    <circle cx="1804" cy="256" r="5" fill-opacity="0.68"/>
    <circle cx="1841" cy="287" r="3" fill-opacity="0.44"/>
    <circle cx="1788" cy="501" r="7" fill-opacity="0.52"/>
  </g>

  <g stroke="#fff" stroke-opacity="0.44" fill="none">
    <path d="M1043 121 h42 v42" stroke-width="2"/>
    <path d="M1835 456 v42 h-42" stroke-width="2"/>
    <circle cx="1064" cy="142" r="6" fill="#fff" fill-opacity="0.7" stroke="none"/>
    <circle cx="1814" cy="477" r="6" fill="#fff" fill-opacity="0.7" stroke="none"/>
  </g>
</svg>`;

sharp(Buffer.from(svg))
  .png({ compressionLevel: 9, palette: true, quality: 100 })
  .toFile(output)
  .then(info => console.log(`${output} ${info.width}x${info.height}`))
  .catch(error => {
    console.error(error);
    process.exitCode = 1;
  });
