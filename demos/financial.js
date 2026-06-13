// ─── Analytics stubs (swap for real gtag/GA4 calls in production)
window.dataLayer = window.dataLayer || [];
function momo_track(event, params) {
  console.log('[momo_track]', event, params);
  window.dataLayer.push({ event, ...params });
}

// ─── Formatters
const fmt  = n => new Intl.NumberFormat('vi-VN').format(Math.round(n)) + ' đ';
const fmtM = n => {
  const abs = Math.abs(n);
  const sign = n < 0 ? '-' : '';
  if (abs >= 1e9) return sign + new Intl.NumberFormat('vi-VN', {maximumFractionDigits:1}).format(abs/1e9) + ' tỷ';
  if (abs >= 1e6) return sign + new Intl.NumberFormat('vi-VN', {maximumFractionDigits:1}).format(abs/1e6) + ' triệu';
  return fmt(n);
};

// ─── CIC Data
const CIC_BANDS = [
  { hang:1,  min:821, max:900, label:'Xuất sắc',      desc:'Ưu tiên vay với điều kiện tốt nhất, lãi suất thấp nhất.',   color:'#027a48' },
  { hang:2,  min:761, max:820, label:'Rất tốt',        desc:'Dễ dàng vay vốn, lãi suất cạnh tranh.',                     color:'#12b76a' },
  { hang:3,  min:701, max:760, label:'Tốt',            desc:'Vay được ở hầu hết tổ chức tín dụng.',                      color:'#65a30d' },
  { hang:4,  min:621, max:700, label:'Khá',            desc:'Vay được nhưng một số hồ sơ cần thêm tài sản đảm bảo.',    color:'#ca8a04' },
  { hang:5,  min:541, max:620, label:'Tín dụng tốt',  desc:'Một số tổ chức tín dụng có thể xét duyệt với điều kiện.',  color:'#d97706' },
  { hang:6,  min:481, max:540, label:'Trung bình',     desc:'Khó vay, thường bị yêu cầu thêm tài sản đảm bảo.',         color:'#ea580c' },
  { hang:7,  min:421, max:480, label:'Dưới TB',        desc:'Hầu hết hồ sơ vay bị từ chối.',                            color:'#dc2626' },
  { hang:8,  min:361, max:420, label:'Kém',            desc:'Rất khó vay, cần cải thiện điểm trước.',                   color:'#b91c1c' },
  { hang:9,  min:321, max:360, label:'Rất kém',        desc:'Không thể vay thông thường. Cần xử lý nợ.',                color:'#991b1b' },
  { hang:10, min:300, max:320, label:'Cực kém',        desc:'Nợ xấu hiện hữu. Cần xử lý triệt để trước khi cải thiện.',color:'#7f1d1d' },
];

const CIC_BEHAVIORS = {
  A: { label:'Lịch sử thanh toán', sub:'~35% ảnh hưởng', scenarios:[
    { id:'a1', label:'Đúng hạn liên tục',        delta:+35,  rec:'Giữ chuỗi trả đúng hạn mỗi tháng - điểm sẽ tăng đều và rất chắc.' },
    { id:'a2', label:'Quá hạn dưới 6 tháng',     delta:-45,  rec:'Quá hạn ngắn gây ảnh hưởng mạnh. Thanh toán ngay để dừng mức giảm điểm.' },
    { id:'a3', label:'Quá hạn trên 6 tháng',     delta:-110, rec:'Quá hạn dài là tác động nặng nhất. Cần xử lý nợ xấu trước khi cải thiện điểm.' },
  ]},
  B: { label:'Tổng dư nợ so', sub:'~30% ảnh hưởng', scenarios:[
    { id:'b1', label:'Dưới 30% hạn mức',         delta:+20,  rec:'Tỷ lệ sử dụng thấp là tín hiệu tốt. Giữ dưới 30% để tối ưu điểm.' },
    { id:'b2', label:'30-70% hạn mức',            delta:+5,   rec:'Tỷ lệ trung bình. Giảm xuống dưới 30% để cải thiện điểm thêm.' },
    { id:'b3', label:'Trên 70% hạn mức',          delta:-25,  rec:'Sử dụng quá nhiều hạn mức là dấu hiệu rủi ro. Trả bớt nợ hoặc yêu cầu tăng hạn mức.' },
  ]},
  C: { label:'Số lượng tín dụng', sub:'~15% ảnh hưởng', scenarios:[
    { id:'c1', label:'Không mở thêm tài khoản',      delta:+5,  rec:'Ổn định danh mục tín dụng là lựa chọn tốt nếu đang quản lý tốt.' },
    { id:'c2', label:'Mở 1-2 tài khoản mới',         delta:-10, rec:'Mỗi đơn xin tín dụng mới tạo hard inquiry, giảm điểm tạm thời 3-6 tháng.' },
    { id:'c3', label:'Mở nhiều tài khoản cùng lúc',  delta:-30, rec:'Mở nhiều tài khoản cùng lúc là dấu hiệu rủi ro cao với các tổ chức cho vay.' },
  ]},
  D: { label:'Độ dài tín dụng', sub:'~10% ảnh hưởng', scenarios:[
    { id:'d1', label:'Giữ nguyên tài khoản cũ', delta:+10, rec:'Tài khoản cũ tạo lịch sử dài - đừng đóng thẻ cũ dù không dùng thường xuyên.' },
    { id:'d2', label:'Đóng tài khoản cũ',        delta:-15, rec:'Đóng tài khoản cũ rút ngắn lịch sử tín dụng. Cân nhắc kỹ trước khi đóng thẻ.' },
  ]},
  E: { label:'Chất lượng quan hệ', sub:'~10% ảnh hưởng', scenarios:[
    { id:'e1', label:'Kết hợp vay + thẻ tín dụng', delta:+15, rec:'Có cả vay tiêu dùng và thẻ tín dụng cho thấy bạn quản lý nhiều loại tín dụng tốt.' },
    { id:'e2', label:'Chỉ dùng thẻ tín dụng',       delta:+5,  rec:'Tốt, nhưng đa dạng hóa thêm loại tín dụng có thể cải thiện điểm thêm.' },
    { id:'e3', label:'Chưa có tín dụng chính thức', delta:0,   rec:'Chưa có lịch sử tín dụng. Bắt đầu với thẻ tín dụng để xây dựng điểm từ đầu.' },
  ]},
};

// ─── Tool Catalog
const TOOLS = [
  {
    id: 'vay-nhanh', name: 'Vay Nhanh', category: 'Credit', abbr: 'VN',
    intent: 'Transactional intent', panel: 'generic',
    description: 'Tính số tiền trả hàng tháng theo khoản vay, lãi suất và kỳ hạn.',
    formula: 'Trả/tháng = <b>P × r(1+r)ⁿ ÷ [(1+r)ⁿ−1]</b><br><em>P = số tiền vay &nbsp;·&nbsp; r = lãi suất/tháng &nbsp;·&nbsp; n = số kỳ thanh toán</em>',
    resultLabel: 'ƯỚC TÍNH TRẢ MỖI THÁNG',
    fields: [
      { id: 'loanAmount',   label: 'Số tiền vay',      type: 'money',  min: 1000000, max: 500000000, step: 500000, value: 20000000, chips: [5000000, 20000000, 50000000] },
      { id: 'interestRate', label: 'Lãi suất/năm',     type: 'range',  min: 6, max: 60, step: 0.5, value: 24, unit: '%' },
      { id: 'loanTerm',     label: 'Kỳ hạn',           type: 'select', options: [
        {value:3,label:'3 tháng'},{value:6,label:'6 tháng'},
        {value:12,label:'12 tháng'},{value:18,label:'18 tháng'},
        {value:24,label:'24 tháng'},{value:36,label:'36 tháng'},
      ], value: 12 },
    ],
    compute(v) {
      const r = v.interestRate / 100 / 12, n = v.loanTerm, P = v.loanAmount;
      const mo = r === 0 ? P/n : P * r * Math.pow(1+r,n) / (Math.pow(1+r,n)-1);
      const total = mo * n;
      return { result: fmt(mo), details: [
        { label: 'Tổng tiền trả', value: fmt(total) },
        { label: 'Tổng lãi phát sinh', value: fmt(total - P) },
        { label: 'Lãi suất/tháng', value: (v.interestRate/12).toFixed(2) + '%' },
      ]};
    },
  },
  {
    id: 'tra-gop', name: 'Trả Góp', category: 'Credit', abbr: 'TG',
    intent: 'Commercial intent', panel: 'generic',
    description: 'Ước tính số tiền cần trả mỗi tháng khi mua hàng trả góp với các kỳ hạn khác nhau.',
    formula: 'Vốn gốc = <b>Giá × (100% − Trả trước%)</b><br>Trả/tháng = <b>Vốn gốc ÷ n + Vốn gốc × Lãi suất/12</b><br><em>Áp dụng phương pháp lãi phẳng (flat rate)</em>',
    resultLabel: 'TRẢ MỖI THÁNG ƯỚC TÍNH',
    fields: [
      { id: 'productPrice',    label: 'Giá sản phẩm',   type: 'money',  min: 1000000, max: 500000000, step: 100000, value: 15000000, chips: [5000000, 15000000, 50000000] },
      { id: 'downPaymentPct',  label: 'Trả trước',       type: 'range',  min: 0, max: 50, step: 5, value: 20, unit: '%' },
      { id: 'installmentTerm', label: 'Kỳ hạn trả góp', type: 'select', options: [
        {value:3,label:'3 tháng (0%)'},{value:6,label:'6 tháng (0%)'},
        {value:12,label:'12 tháng (1.5%/tháng)'},{value:24,label:'24 tháng (1.5%/tháng)'},
      ], value: 12 },
    ],
    compute(v) {
      const price = v.productPrice, down = price * v.downPaymentPct / 100;
      const principal = price - down;
      const rMap = {3:0, 6:0, 12:0.015, 24:0.015};
      const r = rMap[v.installmentTerm] || 0, n = v.installmentTerm;
      const mo = r === 0 ? principal/n : principal * r * Math.pow(1+r,n) / (Math.pow(1+r,n)-1);
      const total = down + mo * n;
      return { result: fmt(mo), details: [
        { label: 'Trả trước ngay', value: fmt(down) },
        { label: 'Tổng phải trả', value: fmt(total) },
        { label: 'Chi phí tài chính', value: fmt(total - price) },
      ]};
    },
  },
  {
    id: 'cic-score', name: 'CIC Score', category: 'Credit', abbr: 'CIC',
    intent: 'Informational intent', panel: 'generic',
    description: 'Tra cứu hạng tín dụng CIC theo điểm số và xem điều kiện vay vốn tương ứng.',
    formula: '<b>5 yếu tố ảnh hưởng điểm CIC:</b><br>Lịch sử thanh toán (35%) &nbsp;·&nbsp; Tổng dư nợ (30%) &nbsp;·&nbsp; Số lượng tín dụng (15%) &nbsp;·&nbsp; Độ dài lịch sử (10%) &nbsp;·&nbsp; Chất lượng quan hệ (10%)',
    resultLabel: 'XẾP HẠNG TÍN DỤNG',
    fields: [
      { id: 'cicScore', label: 'Điểm CIC của bạn', type: 'range', min: 300, max: 900, step: 10, value: 570, unit: ' điểm' },
    ],
    compute(v) {
      const band = CIC_BANDS.find(b => v.cicScore >= b.min && v.cicScore <= b.max) || CIC_BANDS[CIC_BANDS.length - 1];
      const prospect = band.hang <= 2 ? 'Dễ vay, lãi suất ưu đãi tốt nhất'
        : band.hang <= 4 ? 'Vay được với điều kiện thuận lợi'
        : band.hang === 5 ? 'Một số tổ chức tín dụng có thể xét duyệt'
        : band.hang <= 7 ? 'Khó vay, thường cần tài sản đảm bảo'
        : 'Hầu hết tổ chức tín dụng từ chối';
      return { result: `Hạng ${band.hang} - ${band.label}`, details: [
        { label: 'Điểm số', value: v.cicScore + ' / 900' },
        { label: 'Khoảng điểm Hạng ' + band.hang, value: band.min + ' - ' + band.max },
        { label: 'Triển vọng vay vốn', value: prospect },
      ], insight: band.desc };
    },
  },
  {
    id: 'cic-stimulator', name: 'CIC Stimulator', category: 'Credit', abbr: 'SIM',
    panel: 'cic',
  },
  {
    id: 'bao-hiem-o-to', name: 'BH Ô Tô', category: 'Insurance', abbr: 'BH',
    intent: 'Commercial intent', panel: 'generic',
    description: 'Mô phỏng phí bảo hiểm ô tô theo giá trị xe và tỷ lệ phí.',
    formula: 'Phí BH/năm = <b>Giá trị xe × Tỷ lệ phí (%)</b><br><em>Tỷ lệ phí tham chiếu theo Thông tư 04/2021/TT-BTC: xe con đến 6 chỗ từ 1,56% – 2,10%</em>',
    resultLabel: 'PHÍ BẢO HIỂM NĂM',
    fields: [
      { id: 'carValue',      label: 'Giá trị xe',            type: 'money',  min: 100000000, max: 5000000000, step: 10000000, value: 500000000, chips: [200000000, 500000000, 1000000000] },
      { id: 'insuranceRate', label: 'Tỷ lệ phí bảo hiểm',   type: 'select', options: [
        {value:0.55,label:'0.55% - Xe con ≤9 chỗ'},
        {value:0.8, label:'0.80% - Xe tải ≤2 tấn'},
        {value:1.1, label:'1.10% - Xe pickup / SUV'},
      ], value: 0.55 },
    ],
    compute(v) {
      const p = v.carValue * v.insuranceRate / 100, vat = p * 0.1;
      return { result: fmt(p + vat), details: [
        { label: 'Phí bảo hiểm thuần', value: fmt(p) },
        { label: 'Thuế VAT (10%)', value: fmt(vat) },
        { label: 'Bồi thường tối đa', value: fmtM(v.carValue) },
      ]};
    },
  },
  {
    id: 'bhxh', name: 'BHXH', category: 'Insurance', abbr: 'XH',
    intent: 'Transactional intent', panel: 'generic',
    description: 'Tính mức đóng BHXH tự nguyện qua MoMo: 22% mức lương làm căn cứ, trừ hỗ trợ Nhà nước 66.000đ/tháng.',
    formula: 'Phí thực đóng = <b>22% × Lương căn cứ − 66.000đ</b><br><em>66.000đ = hỗ trợ Nhà nước cố định cho mức lương căn cứ tối thiểu (theo Nghị định 134/2015/NĐ-CP)</em>',
    resultLabel: 'THỰC ĐÓNG QUA MOMO/THÁNG',
    fields: [
      { id: 'salary',  label: 'Mức lương làm căn cứ đóng', type: 'money', min: 1500000, max: 50600000, step: 100000, value: 5000000, chips: [2000000, 5000000, 10000000] },
      { id: 'months',  label: 'Số tháng tham gia',         type: 'range', min: 12, max: 360, step: 12, value: 120, unit: ' tháng' },
    ],
    compute(v) {
      const gross   = v.salary * 0.22;
      const subsidy = 66000;
      const net     = Math.max(0, gross - subsidy);
      const yrs     = v.months / 12;
      const totalPaid = net * v.months;
      const rateYrs = Math.min(yrs, 20) * 0.015 + Math.max(0, yrs - 20) * 0.02;
      const pension = Math.min(rateYrs, 0.75) * v.salary;
      const insight = net < gross * 0.1
        ? 'Mức hỗ trợ 66.000đ gần bằng toàn bộ phí — thu nhập căn cứ thấp nhất.'
        : `Tiết kiệm ${fmt(subsidy)}/tháng nhờ hỗ trợ Nhà nước. Tổng tiết kiệm ${fmtM(subsidy * v.months)} sau ${yrs.toFixed(0)} năm.`;
      return { result: fmt(net), details: [
        { label: '22% lương căn cứ', value: fmt(gross) },
        { label: 'Hỗ trợ Nhà nước', value: '- ' + fmt(subsidy) },
        { label: 'Đóng hàng năm', value: fmtM(net * 12) },
        { label: 'Tổng thực đóng ' + yrs.toFixed(0) + ' năm', value: fmtM(totalPaid) },
        { label: 'Lương hưu ước tính', value: fmt(pension) + '/tháng' },
      ], insight};
    },
  },
  {
    id: 'luong-huu', name: 'Lương Hưu', category: 'Insurance', abbr: 'LH',
    intent: 'Informational intent', panel: 'generic',
    description: 'Ước tính lương hưu hàng tháng theo số năm đóng BHXH, giới tính và mức bình quân lương làm căn cứ.',
    formula: 'Lương hưu = <b>Tỷ lệ hưởng × Mức bình quân lương/tháng</b><br>Nữ ≥15 năm: 45% → +2%/năm &nbsp;|&nbsp; Nam ≥20 năm: 45% → +2%/năm<br>Nam 15–19 năm: 40% → +1%/năm &nbsp;|&nbsp; <em>Tối đa 75%</em>',
    resultLabel: 'LƯƠNG HƯU ƯỚC TÍNH/THÁNG',
    fields: [
      { id: 'lhGender', label: 'Giới tính', type: 'select', options: [
        {value:0,label:'Lao động nữ'},{value:1,label:'Lao động nam'},
      ], value: 0 },
      { id: 'lhYears',  label: 'Số năm đóng BHXH',           type: 'range', min: 1,       max: 40,       step: 1,      value: 20,        unit: ' năm' },
      { id: 'lhSalary', label: 'Mức bình quân lương căn cứ', type: 'money', min: 1500000, max: 50600000, step: 100000, value: 10000000, chips: [5000000, 10000000, 20000000] },
    ],
    compute(v) {
      const yrs = v.lhYears;
      let rate;
      if (v.lhGender === 0) {
        // Nữ: 45% tại 15 năm, +2%/năm thêm, tối đa 75%
        rate = yrs < 15 ? 0 : Math.min(0.45 + (yrs - 15) * 0.02, 0.75);
      } else {
        // Nam: 15–19 năm: 40% + 1%/năm; ≥20 năm: 45% + 2%/năm, tối đa 75%
        if      (yrs < 15) rate = 0;
        else if (yrs < 20) rate = 0.40 + (yrs - 15) * 0.01;
        else               rate = Math.min(0.45 + (yrs - 20) * 0.02, 0.75);
      }
      const pension  = rate * v.lhSalary;
      const ratePct  = (rate * 100).toFixed(0);
      let insight;
      if (rate === 0) {
        insight = `Chưa đủ điều kiện. Cần đóng thêm ${15 - yrs} năm nữa để đạt mức tối thiểu 15 năm.`;
      } else if (rate >= 0.75) {
        insight = `Đã đạt tỷ lệ hưởng tối đa 75%. Đóng thêm không tăng lương hưu.`;
      } else {
        const max = v.lhSalary * 0.75;
        insight = `Tỷ lệ ${ratePct}%. Mức tối đa 75% = ${fmtM(max)}/tháng — còn chênh ${fmtM(max - pension)}.`;
      }
      return { result: rate > 0 ? fmt(pension) : 'Chưa đủ ĐK', details: [
        { label: 'Tỷ lệ hưởng',              value: ratePct + '%' },
        { label: 'Mức bình quân lương căn cứ', value: fmt(v.lhSalary) + '/tháng' },
        { label: 'Lương hưu/năm ước tính',   value: rate > 0 ? fmtM(pension * 12) : '-' },
      ], insight };
    },
  },
  {
    id: 'tiet-kiem', name: 'Tiết Kiệm', category: 'Savings', abbr: 'TK',
    intent: 'Informational intent', panel: 'generic',
    description: 'Tính số tiền nhận được khi gửi tiết kiệm theo kỳ hạn và lãi suất.',
    formula: 'Lãi = <b>Gốc × Lãi suất/năm × Kỳ hạn (tháng) ÷ 12</b><br>Tổng nhận = <b>Gốc + Lãi</b> &nbsp;|&nbsp; <em>Áp dụng lãi đơn cuối kỳ (không ghép lãi)</em>',
    resultLabel: 'NHẬN KHI ĐÁO HẠN',
    fields: [
      { id: 'principal', label: 'Số tiền gửi',    type: 'money',  min: 1000000, max: 2000000000, step: 1000000, value: 50000000, chips: [10000000, 50000000, 200000000] },
      { id: 'rate',      label: 'Lãi suất/năm',  type: 'range',  min: 2, max: 8, step: 0.1, value: 5.5, unit: '%' },
      { id: 'term',      label: 'Kỳ hạn',         type: 'select', options: [
        {value:1,label:'1 tháng'},{value:3,label:'3 tháng'},
        {value:6,label:'6 tháng'},{value:12,label:'12 tháng'},{value:24,label:'24 tháng'},
      ], value: 12 },
    ],
    compute(v) {
      const interest = v.principal * v.rate / 100 / 12 * v.term;
      const tax = interest * 0.05;
      return { result: fmt(v.principal + interest - tax), details: [
        { label: 'Tiền gốc', value: fmt(v.principal) },
        { label: 'Lãi trước thuế', value: fmt(interest) },
        { label: 'Thuế TNCN lãi (5%)', value: fmt(tax) },
      ]};
    },
  },
  {
    id: 'thue-tncn', name: 'Thuế TNCN', category: 'Tax', abbr: 'TC',
    intent: 'Informational intent', panel: 'generic',
    description: 'Ước tính thuế thu nhập cá nhân theo biểu lũy tiến, chiết khấu gia cảnh và người phụ thuộc.',
    formula: 'Thu nhập chịu thuế = <b>Lương gross − BHXH/BHYT/BHTN − 11 triệu − NTT × 4,4 triệu</b><br>Thuế = <b>Thu nhập chịu thuế × Biểu lũy tiến 7 bậc (5% → 35%)</b>',
    resultLabel: 'THUẾ TNCN MỖI THÁNG',
    fields: [
      { id: 'grossSalary', label: 'Lương gross/tháng',    type: 'money',  min: 5000000, max: 200000000, step: 500000, value: 20000000, chips: [10000000, 20000000, 50000000] },
      { id: 'dependents',  label: 'Số người phụ thuộc',  type: 'select', options: [
        {value:0,label:'0 người'},{value:1,label:'1 người'},
        {value:2,label:'2 người'},{value:3,label:'3 người'},
      ], value: 0 },
    ],
    compute(v) {
      const gross = v.grossSalary;
      const bhxh = Math.min(gross * 0.105, 29400000 * 0.105);
      const personal = 11000000, dep = v.dependents * 4400000;
      const taxable = Math.max(0, gross - bhxh - personal - dep);
      const brackets = [5e6, 10e6, 18e6, 32e6, 52e6, 80e6, Infinity];
      const rates    = [.05, .10, .15, .20, .25, .30, .35];
      let tax = 0, prev = 0;
      for (let i = 0; i < brackets.length; i++) {
        if (taxable <= prev) break;
        tax += Math.min(taxable - prev, brackets[i]) * rates[i];
        prev += brackets[i];
      }
      return { result: fmt(tax), details: [
        { label: 'BHXH/BHYT/BHTN (10.5%)', value: fmt(bhxh) },
        { label: 'Thu nhập chịu thuế', value: fmt(taxable) },
        { label: 'Lương NET nhận về', value: fmt(gross - bhxh - tax) },
      ]};
    },
  },
  {
    id: 'chung-chi-quy', name: 'Chứng Chỉ Quỹ', category: 'Investment', abbr: 'CCQ',
    intent: 'Informational intent', panel: 'generic',
    description: 'Mô phỏng giá trị đầu tư định kỳ vào chứng chỉ quỹ theo lợi suất giả định.',
    formula: 'FV = <b>PMT × [(1 + r)ⁿ − 1] ÷ r</b><br><em>PMT = số tiền đầu tư định kỳ/tháng &nbsp;·&nbsp; r = lợi suất/tháng &nbsp;·&nbsp; n = số tháng</em>',
    resultLabel: 'GIÁ TRỊ SAU ĐẦU TƯ',
    fields: [
      { id: 'monthly',      label: 'Đầu tư định kỳ/tháng', type: 'money',  min: 100000, max: 50000000, step: 100000, value: 2000000, chips: [1000000, 2000000, 5000000] },
      { id: 'annualReturn', label: 'Lợi suất kỳ vọng/năm', type: 'range',  min: 5, max: 20, step: 0.5, value: 12, unit: '%' },
      { id: 'years',        label: 'Thời gian đầu tư',      type: 'select', options: [
        {value:3,label:'3 năm'},{value:5,label:'5 năm'},
        {value:10,label:'10 năm'},{value:15,label:'15 năm'},{value:20,label:'20 năm'},
      ], value: 10 },
    ],
    compute(v) {
      const r = v.annualReturn / 100 / 12, n = v.years * 12;
      const fv = v.monthly * (Math.pow(1+r, n) - 1) / r;
      const invested = v.monthly * n;
      return { result: fmtM(fv), details: [
        { label: 'Tổng đã đầu tư', value: fmtM(invested) },
        { label: 'Lợi nhuận ước tính', value: fmtM(fv - invested) },
        { label: 'Hệ số nhân', value: (fv / invested).toFixed(1) + 'x' },
      ]};
    },
  },
  {
    id: 'gold',  name: 'Giá Vàng & Sức Mua', category: 'Investment', abbr: 'AU',  panel: 'gold',
  },
  {
    id: 'stock', name: 'Tập Đầu Tư CK',      category: 'Investment', abbr: 'CK',  panel: 'stock',
  },
  {
    id: 'quy-du-phong', name: 'Quỹ Dự Phòng', category: 'Planning', abbr: 'QDP',
    intent: 'Informational intent', panel: 'generic',
    description: 'Tính quy mô quỹ khẩn cấp cần có theo chi tiêu và số tháng an toàn mục tiêu.',
    formula: 'Quỹ cần có = <b>Chi tiêu/tháng × Số tháng an toàn</b><br>Còn thiếu = <b>Quỹ cần có − Tiết kiệm hiện có</b>',
    resultLabel: 'QUỸ DỰ PHÒNG CẦN CÓ',
    fields: [
      { id: 'monthlyExpense', label: 'Chi tiêu hàng tháng',         type: 'money',  min: 1000000, max: 100000000, step: 500000, value: 12000000, chips: [5000000, 12000000, 20000000] },
      { id: 'safeMonths',     label: 'Số tháng an toàn mục tiêu',   type: 'select', options: [
        {value:3,label:'3 tháng'},{value:6,label:'6 tháng (khuyến nghị)'},
        {value:9,label:'9 tháng'},{value:12,label:'12 tháng'},
      ], value: 6 },
      { id: 'currentSavings', label: 'Tiết kiệm hiện có',           type: 'money',  min: 0, max: 500000000, step: 1000000, value: 10000000, chips: [0, 10000000, 50000000] },
    ],
    compute(v) {
      const target = v.monthlyExpense * v.safeMonths;
      const gap = Math.max(0, target - v.currentSavings);
      const covered = Math.floor(v.currentSavings / v.monthlyExpense);
      return { result: fmt(target), details: [
        { label: 'Hiện đang có', value: fmtM(v.currentSavings) + ' (' + covered + ' tháng)' },
        { label: 'Còn thiếu', value: gap > 0 ? fmtM(gap) : 'Đã đủ ✓' },
        { label: 'Cần tiết kiệm thêm', value: gap > 0 ? fmt(gap / 6) + '/tháng' : 'Đã đạt mục tiêu' },
      ]};
    },
  },
];

// ─── State
let currentToolId = TOOLS[0].id;

// ─── Sidebar
function renderSidebar() {
  const categories = [...new Set(TOOLS.map(t => t.category))];
  let html = '';
  categories.forEach(cat => {
    html += `<div class="category-group-label">${cat}</div>`;
    TOOLS.filter(t => t.category === cat).forEach(t => {
      html += `<button class="tool-item${t.id === currentToolId ? ' active' : ''}" data-id="${t.id}">
        <span class="tool-icon">${t.abbr}</span>
        <span class="tool-item-label"><strong>${t.name}</strong><span>${t.category}</span></span>
      </button>`;
    });
  });
  document.getElementById('toolList').innerHTML = html;
  document.querySelectorAll('.tool-item').forEach(btn => {
    btn.addEventListener('click', () => selectTool(btn.dataset.id));
  });
}

function selectTool(id) {
  currentToolId = id;
  renderSidebar();
  const tool = TOOLS.find(t => t.id === id);
  document.getElementById('genericPanel').hidden = tool.panel !== 'generic';
  document.getElementById('goldPanel').hidden    = tool.panel !== 'gold';
  document.getElementById('stockPanel').hidden   = tool.panel !== 'stock';
  document.getElementById('cicPanel').hidden     = tool.panel !== 'cic';
  if (tool.panel === 'generic') renderGenericPanel(tool);
  if (tool.panel === 'gold')    computeGold();
  if (tool.panel === 'stock')   renderStockTable();
  if (tool.panel === 'cic')     renderCicPanel();
}

// ─── Generic Panel
function renderGenericPanel(tool) {
  document.getElementById('genericCategory').textContent    = tool.category.toUpperCase();
  document.getElementById('genericTitle').textContent       = tool.name;
  document.getElementById('genericDescription').textContent = tool.description;
  document.getElementById('genericIntent').textContent      = tool.intent;
  const formulaEl = document.getElementById('genericFormula');
  if (formulaEl) {
    if (tool.formula) { formulaEl.innerHTML = tool.formula; formulaEl.style.display = ''; }
    else formulaEl.style.display = 'none';
  }

  const container = document.getElementById('genericFields');
  container.innerHTML = tool.fields.map(f => {
    if (f.type === 'money') {
      return `<div class="field-group" data-field="${f.id}">
        <label class="field-label" for="${f.id}">${f.label}</label>
        <div class="money-input-row">
          <input type="number" id="${f.id}" value="${f.value}" min="${f.min || 0}" max="${f.max || ''}" step="${f.step || 1000000}">
          <span class="unit-tag">đ</span>
        </div>
        <div class="money-chips">
          ${(f.chips || []).map(c => `<button type="button" class="chip-btn${c === f.value ? ' active' : ''}" data-val="${c}">${fmtChip(c)}</button>`).join('')}
        </div>
      </div>`;
    }
    if (f.type === 'range') {
      return `<div class="field-group">
        <label class="field-label" for="${f.id}">${f.label}
          <span class="field-value" id="${f.id}Val">${fmtField(f, f.value)}</span>
        </label>
        <input type="range" id="${f.id}" min="${f.min}" max="${f.max}" step="${f.step}" value="${f.value}">
      </div>`;
    }
    const opts = f.options.map(o => `<option value="${o.value}"${String(o.value) === String(f.value) ? ' selected' : ''}>${o.label}</option>`).join('');
    return `<div class="field-group">
      <label class="field-label" for="${f.id}">${f.label}</label>
      <select id="${f.id}">${opts}</select>
    </div>`;
  }).join('');

  tool.fields.forEach(f => {
    const el = document.getElementById(f.id);
    el.addEventListener('input', () => {
      if (f.type === 'range') {
        document.getElementById(f.id + 'Val').textContent = fmtField(f, el.value);
      } else if (f.type === 'money') {
        document.querySelectorAll(`[data-field="${f.id}"] .chip-btn`).forEach(btn => {
          btn.classList.toggle('active', +btn.dataset.val === +el.value);
        });
      }
      computeGeneric(tool);
    });
    if (f.type === 'money') {
      document.querySelectorAll(`[data-field="${f.id}"] .chip-btn`).forEach(btn => {
        btn.addEventListener('click', () => {
          el.value = btn.dataset.val;
          document.querySelectorAll(`[data-field="${f.id}"] .chip-btn`).forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          computeGeneric(tool);
        });
      });
    }
  });

  computeGeneric(tool);
}

function fmtField(f, val) {
  if (f.unit === 'đ') return fmtM(+val);
  if (f.unit === '%') return (+val).toFixed(1) + '%';
  return val + (f.unit || '');
}
function fmtChip(val) {
  if (val === 0) return '0đ';
  if (val >= 1e9) return (val / 1e9 % 1 === 0 ? val / 1e9 : +(val / 1e9).toFixed(1)) + ' tỷ';
  if (val >= 1e6) return (val / 1e6 % 1 === 0 ? val / 1e6 : +(val / 1e6).toFixed(1)) + ' tr';
  return fmtM(val);
}

function computeGeneric(tool) {
  const vals = {};
  tool.fields.forEach(f => { vals[f.id] = +document.getElementById(f.id).value; });
  const res = tool.compute(vals);
  document.getElementById('resultLabel').textContent  = tool.resultLabel;
  document.getElementById('resultValue').textContent  = res.result;
  document.getElementById('resultDetails').innerHTML  = res.details.map(d =>
    `<div class="result-row"><span>${d.label}</span><strong>${d.value}</strong></div>`
  ).join('');
  const insightEl = document.getElementById('resultInsight');
  if (insightEl) {
    if (res.insight) { insightEl.textContent = res.insight; insightEl.style.display = ''; }
    else insightEl.style.display = 'none';
  }
  momo_track('tool_calculate', { tool_id: tool.id, tool_name: tool.name, tool_category: tool.category });
}

// ─── Gold Panel
const GOLD_PRODUCTS = [
  { id: 'sjc-luong',  name: 'SJC 1 lượng',    unit: 'lượng', buy: 121500000, sell: 124000000 },
  { id: 'sjc-nhan',   name: 'SJC Nhẫn (1 chỉ)', unit: 'chỉ', buy: 12100000,  sell: 12300000  },
  { id: 'pnj-nhan',   name: 'PNJ Nhẫn (1 chỉ)', unit: 'chỉ', buy: 11900000,  sell: 12200000  },
  { id: 'pnj-luong',  name: 'PNJ 1 lượng',    unit: 'lượng', buy: 119000000, sell: 122000000 },
];

function initGoldPanel() {
  document.getElementById('goldPriceGrid').innerHTML = GOLD_PRODUCTS.map(p => `
    <div class="gold-price-card">
      <span>${p.name}</span>
      <strong>${fmtM(p.sell)}</strong>
      <em>Mua vào: ${fmtM(p.buy)}</em>
    </div>
  `).join('');

  document.getElementById('goldProduct').innerHTML = GOLD_PRODUCTS.map(p =>
    `<option value="${p.id}">${p.name}</option>`
  ).join('');

  ['goldBudget', 'goldProduct', 'goldScenario'].forEach(id => {
    document.getElementById(id).addEventListener('input', () => {
      if (id === 'goldScenario') {
        const v = +document.getElementById('goldScenario').value;
        document.getElementById('goldScenarioValue').textContent = (v >= 0 ? '+' : '') + v + '%';
      }
      computeGold();
    });
  });

  document.querySelectorAll('[data-budget]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-budget]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('goldBudget').value = btn.dataset.budget;
      computeGold();
    });
  });

  computeGold();
}

function computeGold() {
  const budget  = +document.getElementById('goldBudget').value;
  const pid     = document.getElementById('goldProduct').value;
  const pct     = +document.getElementById('goldScenario').value;
  const p       = GOLD_PRODUCTS.find(x => x.id === pid) || GOLD_PRODUCTS[0];

  const qty       = Math.floor(budget / p.sell);
  const spent     = qty * p.sell;
  const remainder = budget - spent;
  const breakEven = (p.sell - p.buy) / p.buy * 100;
  const futureSellingPrice = p.buy * (1 + pct / 100);
  const futureValue = qty * futureSellingPrice;
  const profit    = futureValue - spent;

  document.getElementById('goldQuantity').textContent  = qty + ' ' + p.unit;
  document.getElementById('goldRemainder').textContent = 'Còn lại ' + fmt(remainder);
  document.getElementById('goldSpread').textContent    = fmt(p.sell - p.buy) + '/' + p.unit;
  document.getElementById('goldBreakEven').textContent = '+' + breakEven.toFixed(2) + '%';
  document.getElementById('goldFutureValue').textContent = fmtM(futureValue);
  const profitEl = document.getElementById('goldProfit');
  profitEl.textContent = (profit >= 0 ? '+' : '') + fmtM(profit);
  profitEl.style.color = profit >= 0 ? '#12b76a' : '#f04438';

  document.getElementById('goldInsight').textContent = pct >= breakEven
    ? `Kịch bản +${pct}% đủ bù chênh lệch mua-bán. Ước tính lãi ${fmtM(Math.abs(profit))} trên tổng đầu tư.`
    : `Kịch bản +${pct}% chưa bù được chênh lệch mua-bán (${breakEven.toFixed(1)}%). Cần tăng thêm để hòa vốn.`;
}

// ─── Stock Panel
const BASE_STOCKS = [
  { symbol: 'FPT', name: 'FPT Corporation',  price: 124500, change: 0 },
  { symbol: 'VNM', name: 'Vinamilk',         price: 65200,  change: 0 },
  { symbol: 'HPG', name: 'Hòa Phát Group',   price: 28300,  change: 0 },
  { symbol: 'MSN', name: 'Masan Group',       price: 73400,  change: 0 },
  { symbol: 'VHM', name: 'Vinhomes',          price: 41200,  change: 0 },
  { symbol: 'TCB', name: 'Techcombank',       price: 52800,  change: 0 },
  { symbol: 'ACB', name: 'ACB',               price: 27500,  change: 0 },
  { symbol: 'VIC', name: 'Vingroup',          price: 38900,  change: 0 },
];

let stocks     = BASE_STOCKS.map(s => ({ ...s, prevPrice: s.price }));
let session    = 1;
let cash       = 100000000;
let holdings   = {}; // { symbol: { qty, avgCost } }
let history    = [];
let selectedSym = 'FPT';
let orderSide  = 'buy';

function fmtPrice(p) { return new Intl.NumberFormat('vi-VN').format(Math.round(p)) + ' đ'; }
function fmtChange(c) { return (c >= 0 ? '+' : '') + c.toFixed(2) + '%'; }

function initStockPanel() {
  // Order side toggle
  document.querySelectorAll('#orderSide button').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#orderSide button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      orderSide = btn.dataset.side;
      const tb = document.getElementById('placeOrder');
      tb.textContent = orderSide === 'buy' ? 'Xác nhận mua thử' : 'Xác nhận bán thử';
      tb.classList.toggle('sell-mode', orderSide === 'sell');
      updateOrderEstimate();
    });
  });

  // Quantity control
  document.getElementById('decreaseQuantity').addEventListener('click', () => {
    const el = document.getElementById('orderQuantity');
    el.value = Math.max(100, +el.value - 100);
    updateOrderEstimate();
  });
  document.getElementById('increaseQuantity').addEventListener('click', () => {
    const el = document.getElementById('orderQuantity');
    el.value = +el.value + 100;
    updateOrderEstimate();
  });
  document.getElementById('orderQuantity').addEventListener('input', updateOrderEstimate);

  document.getElementById('placeOrder').addEventListener('click', placeOrder);
  document.getElementById('nextSession').addEventListener('click', nextSession);
  document.getElementById('resetPortfolio').addEventListener('click', resetPortfolio);

  renderStockTable();
  updatePortfolio();
}

function renderStockTable() {
  document.getElementById('sessionLabel').textContent = 'Phiên ' + session;
  document.getElementById('stockTable').innerHTML = stocks.map(s => `
    <div class="stock-row${s.symbol === selectedSym ? ' selected' : ''}" data-symbol="${s.symbol}">
      <span class="stock-symbol">${s.symbol}</span>
      <span class="stock-name">${s.name}</span>
      <span class="stock-price">${fmtPrice(s.price)}</span>
      <span class="stock-change ${s.change >= 0 ? 'up' : 'down'}">${fmtChange(s.change)}</span>
      <span class="stock-volume">${Math.floor(Math.random() * 900 + 100)}K</span>
    </div>
  `).join('');

  document.querySelectorAll('.stock-row').forEach(row => {
    row.addEventListener('click', () => {
      selectedSym = row.dataset.symbol;
      document.querySelectorAll('.stock-row').forEach(r => r.classList.remove('selected'));
      row.classList.add('selected');
      updateSelectedStock();
    });
  });

  updateSelectedStock();
}

function updateSelectedStock() {
  const s = stocks.find(x => x.symbol === selectedSym);
  if (!s) return;
  document.getElementById('selectedSymbol').textContent = s.symbol;
  document.getElementById('selectedPrice').textContent  = fmtPrice(s.price);
  const chEl = document.getElementById('selectedChange');
  chEl.textContent = fmtChange(s.change);
  chEl.style.color = s.change >= 0 ? '#12b76a' : '#f04438';
  updateOrderEstimate();
}

function updateOrderEstimate() {
  const s = stocks.find(x => x.symbol === selectedSym);
  const qty = Math.max(100, Math.floor(+document.getElementById('orderQuantity').value / 100) * 100);
  document.getElementById('orderQuantity').value = qty;
  const value = qty * (s ? s.price : 0);
  document.getElementById('orderValue').textContent = fmt(value);

  const msgEl = document.getElementById('orderMessage');
  if (orderSide === 'buy') {
    if (value > cash) {
      msgEl.textContent = 'Số dư không đủ (thiếu ' + fmt(value - cash) + ').';
      msgEl.className = 'order-message error';
    } else {
      msgEl.textContent = 'Số dư đủ. Còn lại sau lệnh: ' + fmt(cash - value);
      msgEl.className = 'order-message';
    }
  } else {
    const held = (holdings[selectedSym] || {}).qty || 0;
    if (qty > held) {
      msgEl.textContent = 'Không đủ cổ phiếu. Đang giữ ' + held.toLocaleString('vi-VN') + ' cp.';
      msgEl.className = 'order-message error';
    } else {
      msgEl.textContent = 'Sẽ bán ' + qty.toLocaleString('vi-VN') + ' cp ' + selectedSym + '.';
      msgEl.className = 'order-message';
    }
  }
}

function placeOrder() {
  const s   = stocks.find(x => x.symbol === selectedSym);
  const qty = Math.max(100, Math.floor(+document.getElementById('orderQuantity').value / 100) * 100);
  const value = qty * s.price;

  if (orderSide === 'buy') {
    if (value > cash) { showToast('Số dư không đủ để đặt lệnh mua.'); return; }
    cash -= value;
    if (!holdings[selectedSym]) holdings[selectedSym] = { qty: 0, avgCost: 0 };
    const h = holdings[selectedSym];
    h.avgCost = (h.avgCost * h.qty + value) / (h.qty + qty);
    h.qty += qty;
  } else {
    const held = (holdings[selectedSym] || {}).qty || 0;
    if (qty > held) { showToast('Không đủ cổ phiếu để bán.'); return; }
    cash += value;
    holdings[selectedSym].qty -= qty;
    if (holdings[selectedSym].qty === 0) delete holdings[selectedSym];
  }

  history.unshift({ side: orderSide, symbol: selectedSym, qty, price: s.price, value, session });
  updatePortfolio();
  updateOrderEstimate();
  showToast((orderSide === 'buy' ? 'Mua' : 'Bán') + ' ' + qty.toLocaleString('vi-VN') + ' cp ' + selectedSym + ' thành công.');
}

function updatePortfolio() {
  let stockVal = 0;
  let totalCost = 0;
  Object.entries(holdings).forEach(([sym, h]) => {
    const s = stocks.find(x => x.symbol === sym);
    stockVal  += h.qty * (s ? s.price : h.avgCost);
    totalCost += h.qty * h.avgCost;
  });

  const total = cash + stockVal;
  const pnl   = stockVal - totalCost;
  const pnlPct = totalCost > 0 ? (pnl / totalCost * 100) : 0;

  document.getElementById('totalAssets').textContent  = fmt(total);
  document.getElementById('cashBalance').textContent  = fmt(cash);
  document.getElementById('stockValue').textContent   = fmt(stockVal);
  document.getElementById('portfolioPnl').textContent = (pnl >= 0 ? '+' : '') + fmtM(pnl);
  document.getElementById('portfolioPnlPercent').textContent = (pnlPct >= 0 ? '+' : '') + pnlPct.toFixed(2) + '%';
  document.getElementById('portfolioPnl').style.color = pnl >= 0 ? '#12b76a' : '#f04438';
  document.getElementById('assetChange').textContent  = 'Phiên ' + session + ' — ' + Object.keys(holdings).length + ' mã đang giữ';
  document.getElementById('portfolioCount').textContent = Object.keys(holdings).length + ' mã trong danh mục';

  const holdList = document.getElementById('holdingList');
  const holdSummary = document.getElementById('holdingSummary');
  if (Object.keys(holdings).length === 0) {
    holdList.innerHTML = '<div class="empty-state">Chưa có cổ phiếu nào trong danh mục.</div>';
    holdSummary.textContent = 'Chưa có cổ phiếu';
  } else {
    holdSummary.textContent = Object.keys(holdings).length + ' mã';
    holdList.innerHTML = Object.entries(holdings).map(([sym, h]) => {
      const s = stocks.find(x => x.symbol === sym);
      const currentVal = h.qty * (s ? s.price : h.avgCost);
      const cost = h.qty * h.avgCost;
      const pl = currentVal - cost;
      const plPct = (pl / cost * 100).toFixed(1);
      return `<div class="holding-row">
        <span class="holding-symbol">${sym}</span>
        <span class="holding-detail">${h.qty.toLocaleString('vi-VN')} cp · Giá VB: ${fmtPrice(h.avgCost)}</span>
        <span class="holding-pnl ${pl >= 0 ? 'profit' : 'loss'}">${pl >= 0 ? '+' : ''}${plPct}%</span>
      </div>`;
    }).join('');
  }

  const histList = document.getElementById('historyList');
  if (history.length === 0) {
    histList.innerHTML = '<div class="empty-state">Chưa có giao dịch nào.</div>';
  } else {
    histList.innerHTML = history.slice(0, 6).map(h => `
      <div class="history-row">
        <span class="history-tag ${h.side}">${h.side === 'buy' ? 'Mua' : 'Bán'}</span>
        <span class="history-detail">${h.symbol} · ${h.qty.toLocaleString('vi-VN')} cp · P${h.session}</span>
        <span class="history-value">${fmtM(h.value)}</span>
      </div>
    `).join('');
  }
}

function nextSession() {
  session++;
  stocks = stocks.map(s => {
    const changePct = (Math.random() - 0.48) * 9; // slightly positive bias
    const newPrice  = Math.max(1000, Math.round(s.price * (1 + changePct / 100) / 100) * 100);
    return { ...s, prevPrice: s.price, price: newPrice, change: (newPrice - s.price) / s.price * 100 };
  });
  renderStockTable();
  updatePortfolio();
  showToast('Phiên ' + session + ' kết thúc. Cập nhật giá mô phỏng.');
}

function resetPortfolio() {
  cash = 100000000; holdings = {}; history = []; session = 1;
  stocks = BASE_STOCKS.map(s => ({ ...s, prevPrice: s.price, change: 0 }));
  renderStockTable();
  updatePortfolio();
  showToast('Tài khoản đã được đặt lại về 100 triệu đ.');
}

let toastTimer;
function showToast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2800);
}

// ─── CIC Stimulator Panel
let cicScore = 631;
let cicGroup = 'A';
let cicScenarioId = null;

function getBand(score) {
  return CIC_BANDS.find(b => score >= b.min && score <= b.max) || CIC_BANDS[CIC_BANDS.length - 1];
}

function initCicPanel() {
  const groupGrid = document.getElementById('cicGroupGrid');
  groupGrid.innerHTML = Object.entries(CIC_BEHAVIORS).map(([key, g]) =>
    `<button class="cic-group-btn${key === cicGroup ? ' active' : ''}" data-group="${key}">
      <strong>${key}</strong><span>${g.label}</span><em>${g.sub}</em>
    </button>`
  ).join('');

  groupGrid.addEventListener('click', e => {
    const btn = e.target.closest('.cic-group-btn');
    if (!btn) return;
    cicGroup = btn.dataset.group;
    cicScenarioId = null;
    groupGrid.querySelectorAll('.cic-group-btn').forEach(b => b.classList.toggle('active', b === btn));
    renderCicScenarios();
    computeCic();
  });

  document.getElementById('cicScenarios').addEventListener('click', e => {
    const btn = e.target.closest('.cic-scenario-btn');
    if (!btn) return;
    cicScenarioId = btn.dataset.id;
    document.querySelectorAll('#cicScenarios .cic-scenario-btn').forEach(b => b.classList.toggle('active', b === btn));
    computeCic();
  });

  document.getElementById('cicCurrentScore').addEventListener('input', e => {
    cicScore = +e.target.value;
    updateCicScoreBadge();
    computeCic();
  });

  renderCicScenarios();
  updateCicScoreBadge();
  computeCic();
}

function updateCicScoreBadge() {
  const band = getBand(cicScore);
  document.getElementById('cicScoreNum').textContent  = cicScore;
  document.getElementById('cicScoreHang').textContent = `Hạng ${band.hang} · ${band.label}`;
  const badge = document.getElementById('cicScoreBadge');
  badge.style.borderColor = band.color;
  badge.style.color = band.color;
  const pct = Math.round((cicScore - 300) / 600 * 100);
  const thumb = document.getElementById('cicGaugeThumb');
  if (thumb) thumb.style.left = pct + '%';
}

function renderCicScenarios() {
  const group = CIC_BEHAVIORS[cicGroup];
  document.getElementById('cicScenarios').innerHTML = group.scenarios.map(s =>
    `<button class="cic-scenario-btn${s.id === cicScenarioId ? ' active' : ''}" data-id="${s.id}">
      <span class="scenario-label">${s.label}</span>
      <span class="scenario-delta ${s.delta > 0 ? 'pos' : s.delta < 0 ? 'neg' : 'neu'}">${s.delta > 0 ? '+' : ''}${s.delta}</span>
    </button>`
  ).join('');
}

function computeCic() {
  const beforeBand = getBand(cicScore);
  const beforeEl = document.getElementById('cicBeforeVal');
  beforeEl.textContent = cicScore;
  beforeEl.style.color = beforeBand.color;
  document.getElementById('cicBeforeHang').textContent = `Hạng ${beforeBand.hang} · ${beforeBand.label}`;

  const group    = CIC_BEHAVIORS[cicGroup];
  const scenario = cicScenarioId ? group.scenarios.find(s => s.id === cicScenarioId) : null;
  const after    = scenario ? Math.min(900, Math.max(300, cicScore + scenario.delta)) : cicScore;
  const afterBand = getBand(after);

  const afterEl = document.getElementById('cicAfterVal');
  afterEl.textContent = after;
  afterEl.style.color = afterBand.color;
  document.getElementById('cicAfterHang').textContent = `Hạng ${afterBand.hang} · ${afterBand.label}`;

  const d = scenario ? scenario.delta : 0;
  const deltaEl = document.getElementById('cicDelta');
  deltaEl.textContent = scenario ? (d > 0 ? '▲ +' + d : d < 0 ? '▼ ' + d : '= 0') : '→';
  deltaEl.className   = 'cic-delta ' + (d > 0 ? 'pos' : d < 0 ? 'neg' : 'neu');

  const recEl = document.getElementById('cicRecommendation');
  recEl.textContent = scenario ? scenario.rec : 'Chọn một hành vi ở bước 2 để xem xu hướng biến động điểm.';
  recEl.className   = 'cic-rec' + (scenario ? ' active' : '');
}

function renderCicPanel() {
  document.querySelectorAll('#cicGroupGrid .cic-group-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.group === cicGroup)
  );
  renderCicScenarios();
  updateCicScoreBadge();
  computeCic();
}

// ─── Init
document.addEventListener('DOMContentLoaded', () => {
  renderSidebar();
  renderGenericPanel(TOOLS[0]);
  initGoldPanel();
  initStockPanel();
  initCicPanel();
  const hash = location.hash.slice(1);
  if (hash) {
    const tool = TOOLS.find(t => t.id === hash);
    if (tool) selectTool(tool.id);
  }
});
