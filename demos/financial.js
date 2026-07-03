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
const parseMoney = s => +String(s).replace(/[^\d]/g, '') || 0;
const escapeHtml = s => String(s)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;');
const FINANCIAL_ICON_SPRITE = '/assets/icons/momo/financial-sharp.svg';
const svgIcon = (id, className = 'fin-svg-icon') =>
  `<svg class="${className}" aria-hidden="true" focusable="false"><use href="${FINANCIAL_ICON_SPRITE}#${id}"></use></svg>`;
const calcMonthlyPayment = (principal, annualRate, months) => {
  const monthlyRate = annualRate / 100 / 12;
  if (months <= 0) return 0;
  if (monthlyRate === 0) return principal / months;
  return principal * monthlyRate / (1 - Math.pow(1 + monthlyRate, -months));
};
const calcLoanCapacity = (monthlyPayment, annualRate, months) => {
  const monthlyRate = annualRate / 100 / 12;
  if (months <= 0) return 0;
  if (monthlyRate === 0) return monthlyPayment * months;
  return monthlyPayment * (1 - Math.pow(1 + monthlyRate, -months)) / monthlyRate;
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

// ─── Nhóm nợ CIC (theo Thông tư 11/2021/TT-NHNN, sửa đổi Thông tư 31/2024)
const NPL_GROUPS = [
  {
    nhom: 1,
    label: 'Nợ đủ tiêu chuẩn',
    tag: 'Nợ tốt',
    color: '#027a48',
    overdue: '0-9 ngày',
    scoreRange: [700, 900],
    snapScore: 800,
    duration: 'Không lưu lịch sử xấu',
    isNPL: false,
    summary: 'Thanh toán đúng hạn hoặc trễ dưới 10 ngày. Đây là trạng thái lý tưởng cho mọi khoản vay.',
    access: [
      { type: 'NH Quốc doanh (VCB, BIDV, VTB)', status: 'good',    note: 'Lãi ưu đãi 6-10%/năm, hạn mức cao' },
      { type: 'NH TMCP (TCB, ACB, MB)',         status: 'good',    note: 'Mọi sản phẩm, duyệt nhanh' },
      { type: 'Công ty tài chính',              status: 'good',    note: 'Lãi tốt 12-22%/năm' },
      { type: 'Fintech / Vay nhanh',            status: 'good',    note: 'Duyệt 1-3 phút, giải ngân ngay' },
      { type: 'Thẻ tín dụng',                   status: 'good',    note: 'Hạn mức 3-6 lần thu nhập tháng' },
    ],
    roadmap: [
      'Duy trì thanh toán đúng hạn để giữ điểm cao.',
      'Có thể yêu cầu tăng hạn mức để tối ưu tỷ lệ sử dụng dưới 30%.',
      'Đa dạng hoá: 1 vay tiêu dùng + 1 thẻ TD = quan hệ tín dụng phong phú.',
    ],
  },
  {
    nhom: 2,
    label: 'Nợ cần chú ý',
    tag: 'Quá hạn nhẹ',
    color: '#ca8a04',
    overdue: '10-90 ngày',
    scoreRange: [540, 700],
    snapScore: 620,
    duration: '12 tháng sau khi tất toán',
    isNPL: false,
    summary: 'Chưa phải nợ xấu nhưng đã quá hạn - là tín hiệu cảnh báo sớm. Tất cả TCTD lớn đều thấy thông tin này.',
    access: [
      { type: 'NH Quốc doanh',         status: 'bad',     note: 'Phần lớn từ chối hoặc yêu cầu TS đảm bảo' },
      { type: 'NH TMCP',               status: 'partial', note: 'Vay được nhưng lãi cao hơn 2-4%/năm' },
      { type: 'Công ty tài chính',     status: 'partial', note: 'Duyệt được, lãi 20-35%/năm' },
      { type: 'Fintech / Vay nhanh',   status: 'good',    note: 'Vẫn duyệt cho khoản nhỏ (3-15tr)' },
      { type: 'Thẻ tín dụng',          status: 'partial', note: 'Hạn mức thấp 5-20tr, có thể bị giảm hạn' },
    ],
    roadmap: [
      'Thanh toán ngay khoản quá hạn để dừng tích luỹ số ngày trễ.',
      'Sau khi tất toán, đợi 12 tháng để CIC reset trạng thái về Nhóm 1.',
      'Trong thời gian chờ: trả đúng hạn các khoản còn lại để build lịch sử mới.',
      'Không xin vay thêm trong 6 tháng đầu - mỗi hard inquiry sẽ giảm thêm điểm.',
    ],
  },
  {
    nhom: 3,
    label: 'Nợ dưới tiêu chuẩn',
    tag: 'Nợ xấu',
    color: '#dc2626',
    overdue: '91-180 ngày',
    scoreRange: [380, 540],
    snapScore: 460,
    duration: '5 năm sau khi tất toán',
    isNPL: true,
    summary: 'Bắt đầu được phân loại là NỢ XẤU. TCTD phải trích lập dự phòng 20% giá trị khoản nợ. Ảnh hưởng nghiêm trọng lịch sử CIC.',
    access: [
      { type: 'NH Quốc doanh',         status: 'bad',     note: 'Từ chối hoàn toàn, vào danh sách hạn chế' },
      { type: 'NH TMCP',               status: 'bad',     note: 'Từ chối hoàn toàn' },
      { type: 'Công ty tài chính',     status: 'bad',     note: 'Phần lớn từ chối' },
      { type: 'Fintech / Vay nhanh',   status: 'partial', note: 'Một số bên còn xét cho khoản nhỏ, lãi 30-60%/năm' },
      { type: 'Thẻ tín dụng',          status: 'bad',     note: 'Khoá tất cả thẻ hiện có, không mở thẻ mới' },
    ],
    roadmap: [
      'Tất toán toàn bộ nợ xấu càng sớm càng tốt (gốc + lãi + phạt quá hạn).',
      'Lấy Giấy xác nhận tất toán từ TCTD + đối chiếu với CIC sau 30 ngày.',
      'Đợi 5 năm kể từ ngày tất toán để CIC xoá lịch sử nhóm 3.',
      'Trong 5 năm chờ: dùng tiền mặt + ví điện tử, tránh phát sinh khoản nợ mới.',
      'Có thể yêu cầu cơ cấu lại nợ với TCTD nếu chứng minh được khó khăn tạm thời.',
    ],
  },
  {
    nhom: 4,
    label: 'Nợ nghi ngờ',
    tag: 'Nợ xấu',
    color: '#b91c1c',
    overdue: '181-360 ngày',
    scoreRange: [320, 420],
    snapScore: 370,
    duration: '5 năm sau khi tất toán',
    isNPL: true,
    summary: 'Nợ xấu mức nghi ngờ mất vốn. TCTD trích lập dự phòng 50%. Có nguy cơ bị chuyển hồ sơ sang VAMC hoặc khởi kiện thu hồi.',
    access: [
      { type: 'NH Quốc doanh',         status: 'bad', note: 'Từ chối + ghi nhận vào hệ thống' },
      { type: 'NH TMCP',               status: 'bad', note: 'Từ chối hoàn toàn' },
      { type: 'Công ty tài chính',     status: 'bad', note: 'Từ chối hoàn toàn' },
      { type: 'Fintech / Vay nhanh',   status: 'bad', note: 'Hầu hết từ chối, chỉ còn tín dụng đen' },
      { type: 'Thẻ tín dụng',          status: 'bad', note: 'Thu hồi + đòi tất toán nhanh' },
    ],
    roadmap: [
      'Liên hệ ngay TCTD để thoả thuận tất toán hoặc cơ cấu lại nợ.',
      'Yêu cầu giảm lãi phạt nếu cam kết thanh toán 1 lần - nhiều TCTD chấp nhận.',
      'Lưu ý: TCTD có quyền khởi kiện đòi nợ - xử lý sớm để tránh án phí thi hành án.',
      'Sau khi tất toán: đợi 5 năm để xoá lịch sử CIC, không có cách rút ngắn.',
      'Cân nhắc tham vấn luật sư nếu khoản nợ có dấu hiệu lãi suất vượt quy định.',
    ],
  },
  {
    nhom: 5,
    label: 'Nợ có khả năng mất vốn',
    tag: 'Nợ xấu',
    color: '#7f1d1d',
    overdue: 'Trên 360 ngày',
    scoreRange: [300, 360],
    snapScore: 320,
    duration: '5 năm sau khi tất toán',
    isNPL: true,
    summary: 'Mức nợ xấu nặng nhất. TCTD trích lập dự phòng 100%, đã chuyển sang VAMC hoặc đang trong quá trình tố tụng thu hồi.',
    access: [
      { type: 'NH Quốc doanh',         status: 'bad', note: 'Từ chối + có thể bị đưa vào danh sách đen liên ngân hàng' },
      { type: 'NH TMCP',               status: 'bad', note: 'Từ chối hoàn toàn' },
      { type: 'Công ty tài chính',     status: 'bad', note: 'Từ chối hoàn toàn' },
      { type: 'Fintech / Vay nhanh',   status: 'bad', note: 'Từ chối hoàn toàn' },
      { type: 'Thẻ tín dụng',          status: 'bad', note: 'Đã thu hồi từ Nhóm 3-4' },
    ],
    roadmap: [
      'Tra cứu ngay tình trạng pháp lý: nợ đã chuyển VAMC, đã khởi kiện, hay đã có bản án.',
      'Đàm phán phương án: trả 1 lần được giảm phạt, hoặc cơ cấu lại 5-10 năm.',
      'Nếu có bản án: thi hành án sẽ phong toả tài khoản và tài sản. Trả nợ theo phán quyết.',
      'Trường hợp khách quan (thiên tai, dịch bệnh, TCTD vi phạm): có thể yêu cầu xoá CIC sớm với hồ sơ chứng minh.',
      'Sau khi tất toán/thanh lý: đợi 5 năm để xoá CIC, song song build điểm mới qua thẻ trả trước hoặc tài khoản ngân hàng.',
    ],
  },
];

const AUTO_INSURANCE_SCENARIOS = {
  collision: {
    label: 'Va chạm & tai nạn giao thông',
    damageRatio: 0.28,
    description: 'Đâm va thân vỏ, móp méo, thay cản, đèn và sơn lại nhiều hạng mục sau tai nạn giao thông.',
  },
  waterlogging: {
    label: 'Ngập nước',
    damageRatio: 0.18,
    description: 'Xe bị ngập nhẹ, ảnh hưởng nội thất, sàn xe, cảm biến hoặc cụm điện thấp.',
  },
  flood: {
    label: 'Thủy kích',
    damageRatio: 0.42,
    description: 'Nước vào khoang máy hoặc nội thất, cần xử lý động cơ và điện.',
  },
  fire: {
    label: 'Cháy nổ',
    damageRatio: 0.78,
    description: 'Thiệt hại lớn tới khoang máy và thân xe, cần phục hồi sâu hoặc thay cụm lớn.',
  },
  glass: {
    label: 'Vỡ kính',
    damageRatio: 0.07,
    description: 'Kính lái hoặc kính sườn vỡ, thay mới và hiệu chỉnh cảm biến liên quan.',
  },
  theft: {
    label: 'Mất cắp phụ tùng',
    damageRatio: 0.18,
    description: 'Mất gương, đèn, camera, lazang hoặc chi tiết ngoại thất có giá trị.',
  },
  naturalDisaster: {
    label: 'Thiên tai',
    damageRatio: 0.34,
    description: 'Mưa đá, cây đổ, lốc, sạt lở hoặc vật thể từ thiên tai gây hư hỏng nhiều hạng mục thân vỏ.',
  },
  totalTheft: {
    label: 'Mất cắp toàn bộ xe',
    damageRatio: 0.92,
    description: 'Xe bị mất cắp hoàn toàn, hồ sơ bồi thường thường cần thêm xác minh từ cơ quan chức năng và điều khoản loại trừ rõ ràng.',
  },
};

const AUTO_INSURANCE_PROFILES = {
  standard: {
    label: 'Xe tiêu chuẩn',
    premiumFactor: 1,
    payoutFactor: 1,
    note: 'Áp dụng logic chuẩn cho xe xăng/dầu/hybrid không có điều khoản đặc biệt.',
  },
  ev: {
    label: 'Xe điện',
    premiumFactor: 1.08,
    payoutFactor: 1.02,
    note: 'Xe điện thường có phụ phí do hệ thống điện áp cao và chi phí linh kiện chuyên biệt.',
  },
  evBattery: {
    label: 'Xe điện kèm pin',
    premiumFactor: 1.16,
    payoutFactor: 1.08,
    note: 'Nếu pin nằm trong phạm vi bảo hiểm, mức phí và giá trị bồi thường thường tăng đáng kể so với xe điện không kèm pin.',
  },
  financed: {
    label: 'Xe trả góp',
    premiumFactor: 1.04,
    payoutFactor: 1,
    note: 'Xe trả góp thường cần bổ sung bên thụ hưởng là ngân hàng và kiểm tra kỹ điều khoản toàn bộ tổn thất hoặc mất cắp.',
  },
};

const AUTO_INSURANCE_PARTNERS = [
  {
    id: 'pvi',
    name: 'Bảo hiểm PVI',
    logo: 'PVI',
    brandColor: '#1f4f9b',
    accidentCover: 1,
    compensation: { collision: 0.92, waterlogging: 0.76, flood: 0.82, fire: 0.95, glass: 0.93, theft: 0.85, naturalDisaster: 0.8, totalTheft: 0.88 },
    deductible: { collision: 1000000, waterlogging: 1800000, flood: 2500000, fire: 1000000, glass: 500000, theft: 1500000, naturalDisaster: 2000000, totalTheft: 3000000 },
    note: 'Mạng garage mạnh ở thành phố lớn, thủy kích cần có điều khoản mở rộng.',
  },
  {
    id: 'baoviet',
    name: 'Bảo hiểm Bảo Việt',
    logo: 'Bảo Việt',
    brandColor: '#1c6ab6',
    accidentCover: 1,
    compensation: { collision: 0.9, waterlogging: 0.74, flood: 0.78, fire: 0.94, glass: 0.91, theft: 0.83, naturalDisaster: 0.79, totalTheft: 0.86 },
    deductible: { collision: 1000000, waterlogging: 2000000, flood: 3000000, fire: 1000000, glass: 500000, theft: 2000000, naturalDisaster: 2200000, totalTheft: 3500000 },
    note: 'Phù hợp xe gia đình, hồ sơ đầy đủ thì bồi thường ổn định.',
  },
  {
    id: 'mic',
    name: 'Bảo hiểm MIC',
    logo: 'MIC',
    brandColor: '#178a4b',
    accidentCover: 1,
    compensation: { collision: 0.88, waterlogging: 0.75, flood: 0.8, fire: 0.9, glass: 0.9, theft: 0.8, naturalDisaster: 0.77, totalTheft: 0.84 },
    deductible: { collision: 1500000, waterlogging: 1800000, flood: 2500000, fire: 1200000, glass: 500000, theft: 1800000, naturalDisaster: 2200000, totalTheft: 3200000 },
    note: 'Có lợi thế khi sửa chữa tại hệ sinh thái đối tác quân đội và tỉnh thành.',
  },
  {
    id: 'pjico',
    name: 'Bảo hiểm PJICO',
    logo: 'PJICO',
    brandColor: '#0e5fa8',
    accidentCover: 1,
    compensation: { collision: 0.87, waterlogging: 0.7, flood: 0.74, fire: 0.89, glass: 0.88, theft: 0.79, naturalDisaster: 0.74, totalTheft: 0.81 },
    deductible: { collision: 1500000, waterlogging: 2500000, flood: 3500000, fire: 1500000, glass: 700000, theft: 2000000, naturalDisaster: 2600000, totalTheft: 3800000 },
    note: 'Thường cạnh tranh về phí nhưng mức miễn thường cao hơn ở ca phức tạp.',
  },
  {
    id: 'dbv',
    name: 'Bảo hiểm DBV',
    logo: 'DBV',
    brandColor: '#0f8c4d',
    accidentCover: 1,
    compensation: { collision: 0.85, waterlogging: 0.68, flood: 0.72, fire: 0.88, glass: 0.86, theft: 0.76, naturalDisaster: 0.72, totalTheft: 0.79 },
    deductible: { collision: 1800000, waterlogging: 2600000, flood: 3500000, fire: 1800000, glass: 800000, theft: 2200000, naturalDisaster: 2800000, totalTheft: 4000000 },
    note: 'Phù hợp bài toán tối ưu phí, nên đọc kỹ điều khoản xe ngập nước.',
  },
  {
    id: 'pti',
    name: 'Bảo hiểm PTI',
    logo: 'PTI',
    brandColor: '#f28c28',
    accidentCover: 1,
    compensation: { collision: 0.86, waterlogging: 0.72, flood: 0.76, fire: 0.88, glass: 0.87, theft: 0.78, naturalDisaster: 0.75, totalTheft: 0.8 },
    deductible: { collision: 1500000, waterlogging: 2200000, flood: 3000000, fire: 1500000, glass: 700000, theft: 1800000, naturalDisaster: 2400000, totalTheft: 3500000 },
    note: 'Tỷ lệ chi trả cân bằng, xử lý tốt ca thay phụ tùng và kính xe.',
  },
  {
    id: 'liberty',
    name: 'Bảo hiểm Liberty',
    logo: 'Liberty',
    brandColor: '#253b80',
    accidentCover: 1,
    compensation: { collision: 0.91, waterlogging: 0.8, flood: 0.84, fire: 0.96, glass: 0.94, theft: 0.88, naturalDisaster: 0.83, totalTheft: 0.9 },
    deductible: { collision: 1000000, waterlogging: 1800000, flood: 2200000, fire: 1000000, glass: 400000, theft: 1500000, naturalDisaster: 1800000, totalTheft: 2800000 },
    note: 'Nhóm top nếu ưu tiên trải nghiệm claim và mức chi trả cao hơn mặt bằng.',
  },
  {
    id: 'gic',
    name: 'Bảo hiểm GIC',
    logo: 'GIC',
    brandColor: '#165fa7',
    accidentCover: 1,
    compensation: { collision: 0.84, waterlogging: 0.67, flood: 0.7, fire: 0.86, glass: 0.85, theft: 0.75, naturalDisaster: 0.7, totalTheft: 0.77 },
    deductible: { collision: 1800000, waterlogging: 2800000, flood: 3800000, fire: 1800000, glass: 800000, theft: 2200000, naturalDisaster: 3000000, totalTheft: 4200000 },
    note: 'Mạnh ở nhóm xe phổ thông, bồi thường nên kỳ vọng theo phương án tiêu chuẩn.',
  },
  {
    id: 'baolong',
    name: 'Bảo hiểm Bảo Long',
    logo: 'Bảo Long',
    brandColor: '#c88821',
    accidentCover: 1,
    compensation: { collision: 0.85, flood: 0.73, fire: 0.87, glass: 0.86, theft: 0.77 },
    deductible: { collision: 1800000, flood: 3200000, fire: 1600000, glass: 700000, theft: 2000000 },
    note: 'Phù hợp xe kinh doanh và xe lâu năm, cần chốt rõ phương án garage liên kết.',
  },
];

const AUTO_INSURANCE_CAR_CATALOG = {
  ACURA: ['ILX', 'MDX', 'RDX', 'RL', 'TL', 'TSX', 'ZDX'],
  AUDI: ['A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'Q2', 'Q3', 'Q5', 'Q7', 'R8', 'TT'],
  BAIC: ['Beijing X7'],
  BMW: ['Series 7', 'Series 1', 'Series 2', 'Series 3', 'Series 4', 'Series 5', 'Series 6', 'i8', 'M', 'X1', 'X3', 'X4', 'X5', 'X6', 'Z4'],
  CHEVROLET: ['Aveo', 'Camaro', 'Captiva', 'Colorado', 'Cruze', 'Lacetti', 'Orlando', 'Spark', 'Suburban', 'TrailBlazer', 'TRAX', 'Vivant'],
  DAEWOO: ['Gentra', 'Lacetti'],
  FORD: ['Ecosport', 'Edge', 'Escape', 'Everest', 'Expedition', 'Explorer', 'F-150', 'Fiesta', 'Focus', 'I-Max', 'Laser', 'Mondeo', 'Mustang', 'Ranger', 'Territory', 'Transit', 'Tourneo'],
  HONDA: ['Accord', 'Brio', 'BR-V', 'City', 'Civic', 'CR-V', 'CR-Z', 'Fit', 'HR-V', 'Jazz', 'Odyssey', 'Pilot'],
  HYUNDAI: ['Accent', 'Venue', 'Avante', 'Azera', 'Creta', 'Custin', 'Elantra', 'Equus', 'Genesis', 'GETZ', 'i10', 'Starex', 'Grandeur', 'i20', 'Kona', 'SantaFe', 'Sonata', 'Stargazer', 'Tucson', 'Veracruz', 'Palisade'],
  ISUZU: ['DMax', 'HiLander', 'MU-X'],
  JAGUAR: ['E-PACE', 'F-PACE', 'F-TYPE', 'XE', 'XF', 'XJ', 'XJL'],
  KIA: ['Carens', 'Carnival', 'Cerato', 'Forte', 'K3', 'K5', 'Morning', 'Sorento', 'Optima', 'Picanto', 'Quoris', 'Rio', 'Rondo', 'Sedona', 'Seltos', 'Soluto', 'Sonet', 'Soul', 'Sportage'],
  LEXUS: ['ES', 'GS', 'GX', 'IS', 'LS', 'LX', 'NX', 'RX'],
  MAZDA: ['Mazda_3', 'Mazda_6', 'Mazda_2', 'BT50', 'CX3', 'CX30', 'CX5', 'CX8', 'CX9'],
  'MERCEDES BENZ': ['A-Class', 'C-Class', 'CLA', 'CLS', 'E-Class', 'G-Class', 'GLC', 'GLE', 'GLK', 'GLS', 'S-Class', 'SLC', 'V-Class', 'GLB', 'EQS'],
  MG: ['5', 'HS', 'ZS', 'RX5', '4', '7'],
  MINI: ['Cooper', 'JCW', 'ONE'],
  MITSUBISHI: ['Attrage', 'Lancer', 'Mirage', 'OutLander', 'Pajero', 'Triton', 'Xforce', 'Xpander'],
  NISSAN: ['Almera', 'Navara', 'Sunny', 'Teana', 'Terra', 'Tiida', 'X-TRAIL', 'Kicks'],
  PEUGEOT: ['5008', '2008', '3008', '408', 'Traveller'],
  RENAULT: ['Megane'],
  SUBARU: ['Forester', 'Impreza', 'Legacy', 'Outback', 'Crosstrek', 'Levorg', 'BRZ', 'WRX'],
  SUZUKI: ['Celerio', 'Ciaz', 'Ertiga', 'Jimny', 'Swift', 'Vitara', 'XL7'],
  TOYOTA: ['Alphard', 'Avalon', 'Avanza', 'Camry', 'Corolla', 'Altis', 'Cross', 'Fortuner', 'HighLander', 'Hilux', 'Innova', 'Land Cruiser', 'Prado', 'Raize', 'RAV4', 'Rush', 'Sienna', 'Veloz', 'Venza', 'Vios', 'Wigo', 'Yaris'],
  VINFAST: ['Fadil', 'Lux', 'VF', 'VFe', 'Green', 'Minio'],
  VOLKSWAGEN: ['Passat', 'Polo', 'Scirocco', 'Teramont', 'Tiguan', 'Touareg'],
  VOLVO: ['S60', 'S90', 'V90', 'XC40', 'XC60', 'XC90'],
  JAECOO: ['J7'],
  BYD: ['Atto3', 'Dolphin', 'Seal', 'Sealion', 'HAN', 'M6'],
  OMODA: ['C5'],
  SKODA: ['Karoq', 'Kodiaq', 'Slavia', 'Kushaq'],
  GEELY: ['Coolray'],
  PORSCHE: ['MACAN', 'Cayenne'],
};

const AUTO_INSURANCE_BRAND_OPTIONS = Object.keys(AUTO_INSURANCE_CAR_CATALOG).map(brand => ({
  value: brand,
  label: brand,
}));

function getAutoInsuranceModelOptions(brand) {
  return (AUTO_INSURANCE_CAR_CATALOG[brand] || []).map(model => ({
    value: model,
    label: model,
  }));
}

// ─── Lookup lãi suất Vay Nhanh theo (amount, term) — empirical từ momo.vn (range 2,20% - 4,08%/tháng)
function lookupVayNhanhRate(amount, term) {
  const M = amount / 1000000;
  let rate;
  if (M <= 10)      rate = 4.08 - (M - 3) / 7  * 0.28;  // 3-10tr:  4.08% → 3.80%
  else if (M <= 25) rate = 3.80 - (M - 10) / 15 * 0.56; // 10-25tr: 3.80% → 3.24%
  else if (M <= 50) rate = 3.24 - (M - 25) / 25 * 0.54; // 25-50tr: 3.24% → 2.70%
  else              rate = 2.70 - (M - 50) / 50 * 0.50; // 50-100tr: 2.70% → 2.20%
  const termAdj = (term - 6) / 42 * 0.15; // +0.00 → +0.15% theo kỳ hạn dài
  return Math.max(2.20, Math.min(4.08, rate + termAdj));
}

// ─── Tool Catalog
const TOOLS = [
  {
    id: 'vay-nhanh', name: 'Vay Nhanh', category: 'Credit', abbr: 'VN',
    intent: 'Transactional intent', panel: 'generic',
    description: 'Hạn mức đến 100 triệu, kỳ hạn 6 - 48 tháng. Lãi suất 2,20% - 4,08%/tháng (tự động theo gói vay). Tính theo dư nợ giảm dần, cộng phí thu hộ 20.000đ/tháng.',
    jtbd: 'Tôi đang cần một khoản tiền gấp nhưng phân vân không biết vay bao nhiêu, kỳ hạn nào sẽ phù hợp. Cần thấy ngay <b>tiền trả mỗi tháng và lãi suất áp dụng cho gói vay của mình</b>, để chọn được khoản vay <b>vừa đủ tiêu vừa trả nổi mà không gãy ngân sách hàng tháng</b>.',
    highlights: [
      { icon: 'calendar', text: 'Trả góp đến 48 tháng' },
      { icon: 'fast-approval', text: 'Duyệt trong 1 phút' },
      { icon: 'document-check', text: 'Không cần CM thu nhập' },
      { icon: 'online', text: '100% online' },
    ],
    partners: [
      { abbr: 'EVF', name: 'EVN Finance',  color: '#0f766e' },
      { abbr: 'MCR', name: 'MCredit',      color: '#dc2626' },
      { abbr: 'VCR', name: 'VietCredit',   color: '#1d4ed8' },
      { abbr: 'MBV', name: 'MB Shinsei',   color: '#7c3aed' },
    ],
    ctaText: 'KIỂM TRA NGAY',
    disclaimer: 'Lãi suất trên chỉ áp dụng cho một số khách hàng thỏa mãn điều kiện. Vui lòng mở Vay Nhanh trên ứng dụng MoMo để kiểm tra gói vay chính xác.',
    formula: 'Gốc + Lãi/kỳ = <b>P₀ × r ÷ (1 − (1+r)⁻ⁿ)</b> &nbsp;·&nbsp; Lãi kỳ n = <b>B<sub>n-1</sub> × r</b><br><em>P₀ = số tiền vay &nbsp;·&nbsp; r = lãi suất tháng &nbsp;·&nbsp; n = số kỳ &nbsp;·&nbsp; B = dư nợ gốc &nbsp;·&nbsp; EMI = Gốc + Lãi + Phí thu hộ 20.000đ &nbsp;·&nbsp; Lãi suất tháng tự tính theo gói vay (số tiền + kỳ hạn).</em>',
    resultLabel: 'TIỀN TRẢ MỖI THÁNG',
    fields: [
      { id: 'loanAmount', label: 'Bạn muốn vay', type: 'money', min: 3000000, max: 100000000, step: 500000, value: 25000000, chips: [5000000, 10000000, 25000000, 50000000, 100000000] },
      { id: 'loanTerm',   label: 'Kỳ hạn vay',  type: 'pills', options: [
        {value:6,  label:'6 tháng'},  {value:9,  label:'9 tháng'},  {value:12, label:'12 tháng'},
        {value:15, label:'15 tháng'}, {value:18, label:'18 tháng'}, {value:21, label:'21 tháng'},
        {value:24, label:'24 tháng'}, {value:36, label:'36 tháng'}, {value:48, label:'48 tháng'},
      ], value: 12 },
    ],
    compute(v) {
      const FEE = 20000;
      const monthlyRatePct = lookupVayNhanhRate(v.loanAmount, v.loanTerm);
      const r = monthlyRatePct / 100, n = v.loanTerm, P = v.loanAmount;
      const emi = r === 0 ? P/n : P * r / (1 - Math.pow(1+r, -n));
      const schedule = [];
      let balance = P;
      let totalInterest = 0;
      for (let k = 1; k <= n; k++) {
        const interest = balance * r;
        const principal = emi - interest;
        balance = balance - principal;
        if (k === n) balance = 0;
        totalInterest += interest;
        schedule.push({
          period: k,
          interest, principal,
          emi, fee: FEE,
          total: emi + FEE,
          balance: Math.max(balance, 0),
        });
      }
      const totalPay = (emi + FEE) * n;
      const perDay = (emi + FEE) / 30;
      return {
        result: fmt(emi + FEE),
        details: [
          { label: 'Lãi suất trên dư nợ gốc', value: monthlyRatePct.toFixed(2) + '%/tháng' },
          { label: 'Tương đương',             value: fmt(perDay) + '/ngày' },
          { label: 'Gốc + Lãi/tháng (EMI)',   value: fmt(emi) },
          { label: 'Phí thu hộ/tháng',        value: fmt(FEE) },
          { label: 'Tổng tiền phải trả',      value: fmt(totalPay) },
          { label: 'Tổng lãi phát sinh',      value: fmt(totalInterest) },
        ],
        schedule,
        insight: `Gói vay ${fmtM(v.loanAmount)} × ${v.loanTerm} tháng được áp lãi suất <b>${monthlyRatePct.toFixed(2)}%/tháng</b> (tương đương ${(monthlyRatePct * 12).toFixed(2)}%/năm). Duyệt 1 phút, giải ngân vào ví MoMo.`,
      };
    },
  },
  {
    id: 'tra-gop', name: 'Trả Góp Ví Trả Sau', category: 'Credit', abbr: 'TG',
    intent: 'Commercial intent', panel: 'generic', ui: 'calculator-product',
    description: 'Ước tính số tiền thanh toán hằng kỳ khi chuyển đổi trả góp dư nợ hoặc giao dịch qua Ví Trả Sau MoMo.',
    jtbd: 'Tôi đang muốn mua một món hàng trả góp qua Ví Trả Sau và phân vân chọn kỳ hạn nào phù hợp. Cần thấy ngay <b>số tiền gốc và phí trả mỗi tháng</b> cho từng kỳ hạn, để <b>cân đối tài chính cá nhân</b>.',
    formula: 'Trả mỗi kỳ = <b>(Dư nợ chuyển đổi ÷ Kỳ hạn) + 3% × Dư nợ chuyển đổi</b><br><em>Ví Trả Sau áp dụng phí chuyển đổi cố định 3%/tháng tính trên dư nợ đăng ký trả góp ban đầu.</em>',
    resultLabel: 'TRẢ MỖI THÁNG (gồm gốc & phí)',
    fields: [
      { id: 'postpaidAmount', label: 'Số tiền cần trả góp', type: 'money', ui: { valueType: 'money', precision: 'exact', decisionMode: 'confirm', sampleNumbers: true }, min: 100000, max: 30000000, step: 100000, value: 3000000, chips: [1000000, 3000000, 10000000] },
      { id: 'installmentTerm', label: 'Kỳ hạn trả góp', tooltip: 'Phí chuyển đổi hiện là 3% mỗi tháng và cố định như nhau giữa các kỳ hạn, nên ở đây chỉ cần chọn số tháng để so sánh tổng nghĩa vụ.', type: 'pills', ui: { valueType: 'enum', precision: 'exact', decisionMode: 'compare', optionCount: 4 }, options: [
        {value:3,label:'3 tháng'},{value:6,label:'6 tháng'},
        {value:9,label:'9 tháng'},{value:12,label:'12 tháng'},
      ], value: 6 },
    ],
    compute(v) {
      const amount = v.postpaidAmount;
      const n = v.installmentTerm;
      if (amount < 100000) {
        return { result: '—', details: [
          { label: 'Số tiền tối thiểu', value: '100.000 đ' }
        ], insight: '⚠️ Hóa đơn tối thiểu 100.000 đ mới đủ điều kiện chuyển đổi trả góp.' };
      }
      const gocMonth = amount / n;
      const phiMonth = amount * 0.03;
      const mo = gocMonth + phiMonth;
      const totalFee = phiMonth * n;
      const total = amount + totalFee;
      return { result: fmt(mo), details: [
        { label: 'Tiền gốc trả/tháng', value: fmt(gocMonth) },
        { label: 'Phí dịch vụ/tháng', value: fmt(phiMonth) },
        { label: 'Tổng phí chuyển đổi', value: fmt(totalFee) },
        { label: 'Tổng tiền phải trả', value: fmt(total) },
      ], badge: `${n} tháng`, visual: {
        title: 'Cơ cấu thanh toán mỗi kỳ',
        totalLabel: 'Tổng nghĩa vụ',
        totalValue: fmt(total),
        showHeadSummary: false,
        items: [
          { label: 'Phí dịch vụ/tháng', value: fmt(phiMonth), amount: phiMonth, color: '#16b2ea' },
          { label: 'Gốc trả/tháng', value: fmt(gocMonth), amount: gocMonth, color: '#143c8b' },
        ],
      }, insight: '💡 Phí dịch vụ Ví Trả Sau <b>33.000đ/tháng</b> chỉ phát sinh trong tháng có giao dịch (miễn phí 5 giao dịch đầu tiên sau khi mở ví).' };
    },
  },
  {
    id: 'vay-mua-nha', name: 'Vay Mua Nhà', category: 'Credit', abbr: 'VMN',
    intent: 'Commercial intent', panel: 'generic', ui: 'calculator-product',
    description: 'Ước tính khoản vay mua nhà, số tiền trả hàng tháng, tổng lãi và áp lực DTI sau khi vay.',
    jtbd: 'Tôi muốn biết với giá nhà hiện tại và số vốn tự có của mình thì phải vay bao nhiêu, trả mỗi tháng bao nhiêu và có chịu nổi không, để quyết định nên mua ngay hay tiếp tục tích lũy thêm.',
    formula: 'Khoản vay = <b>Giá nhà − Vốn tự có</b><br>Trả hàng tháng = <b>PMT(khoản vay, lãi suất tháng, số tháng vay)</b><br>DTI sau vay = <b>(Nợ hiện tại + trả nhà hàng tháng) ÷ Thu nhập tháng</b>',
    resultLabel: 'TRẢ NHÀ MỖI THÁNG',
    fields: [
      { id: 'homePrice',      label: 'Giá căn nhà',          type: 'money', min: 500000000, max: 20000000000, step: 50000000, value: 2500000000, chips: [1500000000, 2500000000, 4000000000] },
      { id: 'downPayment',    label: 'Vốn tự có / trả trước',type: 'money', min: 100000000, max: 10000000000, step: 50000000, value: 750000000, chips: [500000000, 750000000, 1200000000] },
      { id: 'mortgageRate',   label: 'Lãi suất vay/năm',     type: 'range', min: 4, max: 16, step: 0.25, value: 8.5, unit: '%', chips: [6.5, 8.5, 10.5, 12] },
      { id: 'mortgageYears',  label: 'Thời hạn vay',         type: 'select', options: [
        { value: 10, label: '10 năm' }, { value: 15, label: '15 năm' }, { value: 20, label: '20 năm' },
        { value: 25, label: '25 năm' }, { value: 30, label: '30 năm' },
      ], value: 20 },
      { id: 'mortgageIncome', label: 'Thu nhập hộ gia đình/tháng', type: 'money', min: 5000000, max: 500000000, step: 500000, value: 45000000, chips: [25000000, 45000000, 70000000] },
      { id: 'mortgageDebt',   label: 'Nghĩa vụ nợ khác/tháng', type: 'money', min: 0, max: 100000000, step: 500000, value: 4000000, chips: [0, 4000000, 10000000] },
    ],
    compute(v) {
      const loanAmount = Math.max(0, v.homePrice - v.downPayment);
      const months = v.mortgageYears * 12;
      const monthly = calcMonthlyPayment(loanAmount, v.mortgageRate, months);
      const totalInterest = Math.max(0, monthly * months - loanAmount);
      const dtiAfter = v.mortgageIncome > 0 ? ((v.mortgageDebt + monthly) / v.mortgageIncome) * 100 : 0;
      const downPaymentRatio = v.homePrice > 0 ? (v.downPayment / v.homePrice) * 100 : 0;
      const stressRate = v.mortgageRate + 2;
      const stressPayment = calcMonthlyPayment(loanAmount, stressRate, months);
      const status = dtiAfter <= 40 ? 'Trong ngưỡng an toàn' : (dtiAfter <= 50 ? 'Cần cân đối thêm' : 'Áp lực cao');
      return { result: fmt(monthly), details: [
        { label: 'Khoản vay dự kiến', value: fmtM(loanAmount) },
        { label: 'Tỷ lệ trả trước', value: downPaymentRatio.toFixed(1) + '%' },
        { label: 'DTI sau vay', value: dtiAfter.toFixed(1) + '% · ' + status },
        { label: 'Tổng lãi phải trả', value: fmtM(totalInterest) },
        { label: `Nếu lãi tăng lên ${stressRate.toFixed(2)}%`, value: fmtM(stressPayment) + '/tháng' },
      ], insight: dtiAfter <= 40
        ? `Khoản vay này đang ở vùng chịu đựng tương đối tốt. Điểm cần theo dõi là quỹ dự phòng và kịch bản lãi suất tăng lên <b>${stressRate.toFixed(2)}%</b>.`
        : `Khoản trả nhà đang chiếm tỷ trọng lớn trong thu nhập. Hãy thử tăng vốn tự có hoặc kéo dài kỳ hạn để đưa DTI về dưới <b>40%</b>.` };
    },
  },
  {
    id: 'dieu-kien-vay-mua-nha', name: 'Điều Kiện Vay Mua Nhà', category: 'Credit', abbr: 'DKN',
    intent: 'Informational intent', panel: 'generic', ui: 'calculator-product',
    description: 'Pre-check khả năng vay mua nhà theo thu nhập, trả trước, hệ số DTI và loại hồ sơ thu nhập.',
    jtbd: 'Tôi muốn biết hồ sơ của mình có đủ điều kiện vay mua nhà sơ bộ hay chưa trước khi đi gặp ngân hàng, để tránh mất thời gian chuẩn bị khi tỷ lệ đậu còn thấp.',
    formula: 'Vay đề xuất = <b>Giá nhà − Vốn tự có</b><br>LTV = <b>Khoản vay ÷ Giá nhà</b><br>Điểm sơ bộ dựa trên <b>DTI, tỷ lệ trả trước, loại thu nhập và biên an toàn dòng tiền</b>',
    resultLabel: 'ĐÁNH GIÁ SƠ BỘ',
    fields: [
      { id: 'eligibilityHomePrice',   label: 'Giá căn nhà',                type: 'money', min: 500000000, max: 20000000000, step: 50000000, value: 2500000000, chips: [1500000000, 2500000000, 4000000000] },
      { id: 'eligibilityDownPayment', label: 'Vốn tự có',                  type: 'money', min: 100000000, max: 10000000000, step: 50000000, value: 700000000, chips: [500000000, 700000000, 1200000000] },
      { id: 'eligibilityIncome',      label: 'Thu nhập hộ gia đình/tháng', type: 'money', min: 5000000, max: 500000000, step: 500000, value: 40000000, chips: [25000000, 40000000, 70000000] },
      { id: 'eligibilityDebt',        label: 'Nghĩa vụ nợ khác/tháng',     type: 'money', min: 0, max: 100000000, step: 500000, value: 3000000, chips: [0, 3000000, 10000000] },
      { id: 'eligibilityProfile',     label: 'Loại hồ sơ thu nhập',        type: 'select', options: [
        { value: 'salary', label: 'Lương chuyển khoản ổn định' },
        { value: 'mixed', label: 'Lương + kinh doanh / hoa hồng' },
        { value: 'business', label: 'Kinh doanh / tự doanh' },
      ], value: 'salary' },
      { id: 'eligibilityYears',       label: 'Thời hạn vay dự kiến',       type: 'select', options: [
        { value: 15, label: '15 năm' }, { value: 20, label: '20 năm' }, { value: 25, label: '25 năm' }, { value: 30, label: '30 năm' },
      ], value: 20 },
    ],
    compute(v) {
      const loanAmount = Math.max(0, v.eligibilityHomePrice - v.eligibilityDownPayment);
      const ltv = v.eligibilityHomePrice > 0 ? (loanAmount / v.eligibilityHomePrice) * 100 : 0;
      const payment = calcMonthlyPayment(loanAmount, 9.5, v.eligibilityYears * 12);
      const dti = v.eligibilityIncome > 0 ? ((v.eligibilityDebt + payment) / v.eligibilityIncome) * 100 : 0;
      const downRatio = v.eligibilityHomePrice > 0 ? (v.eligibilityDownPayment / v.eligibilityHomePrice) * 100 : 0;
      let score = 0;
      if (downRatio >= 30) score += 2; else if (downRatio >= 20) score += 1;
      if (dti <= 40) score += 2; else if (dti <= 50) score += 1;
      score += { salary: 2, mixed: 1, business: 0 }[v.eligibilityProfile] || 0;
      const status = score >= 5 ? 'Đạt sơ bộ' : (score >= 3 ? 'Cần bổ sung hồ sơ / vốn tự có' : 'Khó đạt ở cấu hình hiện tại');
      const maxSafePayment = Math.max(0, v.eligibilityIncome * 0.4 - v.eligibilityDebt);
      const maxLoan = calcLoanCapacity(maxSafePayment, 9.5, v.eligibilityYears * 12);
      return { result: status, details: [
        { label: 'Khoản vay đang xin', value: fmtM(loanAmount) },
        { label: 'LTV ước tính', value: ltv.toFixed(1) + '%' },
        { label: 'DTI giả định sau vay', value: dti.toFixed(1) + '%' },
        { label: 'Mức trả nhà chịu được/tháng', value: fmtM(maxSafePayment) },
        { label: 'Khoản vay tối đa theo dòng tiền', value: fmtM(maxLoan) },
      ], insight: score >= 5
        ? `Hồ sơ đang ở vùng có thể đi tiếp sang bước làm việc với ngân hàng. Điểm mạnh là tỷ lệ trả trước <b>${downRatio.toFixed(1)}%</b> và DTI <b>${dti.toFixed(1)}%</b>.`
        : `Điểm nghẽn chính nằm ở ${downRatio < 20 ? '<b>tỷ lệ trả trước thấp</b>' : '<b>áp lực DTI sau vay</b>'}. Hãy tăng vốn tự có hoặc giảm giá trị căn nhà để hồ sơ dễ đậu hơn.` };
    },
  },
  {
    id: 'lai-the-tin-dung', name: 'Lãi Thẻ Tín Dụng', category: 'Credit', abbr: 'LTTD',
    intent: 'Informational intent', panel: 'generic', ui: 'goal-planner',
    description: 'Ước tính lãi thẻ tín dụng nếu chỉ trả tối thiểu và tính số tiền cần trả để dứt nợ trong thời hạn mục tiêu.',
    jtbd: 'Tôi muốn biết nếu chỉ trả tối thiểu dư nợ thẻ thì sẽ tốn bao nhiêu lãi và cần trả bao nhiêu mỗi tháng để thoát nợ nhanh hơn, nhằm tránh sa vào vòng xoáy finance charge.',
    formula: 'Lãi tháng = <b>Dư nợ còn lại × Lãi suất năm ÷ 12</b><br>Trả tối thiểu = <b>Dư nợ × Tỷ lệ tối thiểu</b><br>Trả mục tiêu = <b>PMT(dư nợ, lãi tháng, số tháng muốn tất toán)</b>',
    resultLabel: 'TRẢ ĐỂ DỨT NỢ / THÁNG',
    fields: [
      { id: 'cardBalance',      label: 'Dư nợ thẻ hiện tại',        type: 'money', ui: { valueType: 'money', precision: 'exact', decisionMode: 'confirm', sampleNumbers: true }, min: 1000000, max: 500000000, step: 500000, value: 35000000, chips: [10000000, 35000000, 70000000] },
      { id: 'cardAnnualRate',   label: 'Lãi suất thẻ/năm',          type: 'range', ui: { valueType: 'percent', precision: 'approximate', decisionMode: 'explore', sampleNumbers: true }, min: 12, max: 48, step: 0.5, value: 30, unit: '%', chips: [24, 30, 36, 42] },
      { id: 'cardMinRate',      label: 'Tỷ lệ trả tối thiểu',       type: 'select', ui: { valueType: 'enum', precision: 'exact', decisionMode: 'confirm', optionCount: 3 }, options: [
        { value: 3, label: '3% dư nợ' }, { value: 4, label: '4% dư nợ' }, { value: 5, label: '5% dư nợ' },
      ], value: 5 },
      { id: 'cardTargetMonths', label: 'Muốn tất toán sau',         type: 'select', ui: { valueType: 'enum', precision: 'exact', decisionMode: 'confirm', optionCount: 4 }, options: [
        { value: 6, label: '6 tháng' }, { value: 12, label: '12 tháng' }, { value: 18, label: '18 tháng' }, { value: 24, label: '24 tháng' },
      ], value: 12 },
    ],
    compute(v) {
      const targetPayment = calcMonthlyPayment(v.cardBalance, v.cardAnnualRate, v.cardTargetMonths);
      const monthlyRate = v.cardAnnualRate / 100 / 12;
      const firstMinPayment = Math.max(v.cardBalance * v.cardMinRate / 100, 50000);
      let balance = v.cardBalance;
      let minMonths = 0;
      let minInterest = 0;
      while (balance > 0 && minMonths < 600) {
        const interest = balance * monthlyRate;
        const payment = Math.min(balance + interest, Math.max(balance * v.cardMinRate / 100, 50000));
        minInterest += interest;
        balance = Math.max(0, balance + interest - payment);
        minMonths += 1;
        if (payment <= interest + 1000) break;
      }
      const targetInterest = Math.max(0, targetPayment * v.cardTargetMonths - v.cardBalance);
      return { result: fmt(targetPayment), details: [
        { label: 'Trả tối thiểu tháng này', value: fmtM(firstMinPayment) },
        { label: 'Nếu chỉ trả tối thiểu', value: `${minMonths} tháng · ${fmtM(minInterest)} tiền lãi` },
        { label: 'Tổng lãi nếu dứt nợ đúng mục tiêu', value: fmtM(targetInterest) },
        { label: 'Tiết kiệm lãi so với trả tối thiểu', value: fmtM(Math.max(0, minInterest - targetInterest)) },
        { label: 'Lãi tháng đầu tiên', value: fmtM(v.cardBalance * monthlyRate) },
      ], insight: `Nếu chỉ trả tối thiểu, dư nợ sẽ kéo dài rất lâu và finance charge tích lũy mạnh. Mốc hợp lý hơn là trả <b>${fmtM(targetPayment)}/tháng</b> để dứt nợ trong <b>${v.cardTargetMonths} tháng</b>.` };
    },
  },
  {
    id: 'cic-score', name: 'CIC Score', category: 'Credit', abbr: 'CIC',
    intent: 'Informational intent', panel: 'cic',
    description: 'Tra cứu hạng tín dụng CIC theo điểm số và xem điều kiện vay vốn tương ứng.',
    jtbd: 'Tôi vừa biết điểm CIC của mình nhưng chưa rõ điểm này tương ứng hạng tín dụng nào và triển vọng vay vốn ra sao. Cần biết ngay <b>mình đang ở hạng nào và có vay được không</b>, để <b>chuẩn bị phương án vay phù hợp trước khi đi nộp hồ sơ</b>.',
    formula: '<b>5 yếu tố ảnh hưởng điểm CIC:</b><br>Lịch sử thanh toán (35%) &nbsp;·&nbsp; Tổng dư nợ (30%) &nbsp;·&nbsp; Số lượng tín dụng (15%) &nbsp;·&nbsp; Độ dài lịch sử (10%) &nbsp;·&nbsp; Chất lượng quan hệ (10%)',
    resultLabel: 'XẾP HẠNG TÍN DỤNG',
    fields: [
      { id: 'cicScore', label: 'Điểm CIC của bạn', type: 'range', min: 300, max: 900, step: 10, value: 570, unit: 'điểm', chips: [400, 570, 700, 820] },
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
    id: 'net-worth', name: 'Giá Trị Tài Sản Ròng', category: 'Financial Health', abbr: 'NW',
    intent: 'Informational intent', panel: 'generic',
    description: 'Tổng hợp tài sản và nghĩa vụ nợ để biết vị thế tài chính ròng tại một thời điểm.',
    jtbd: 'Tôi có nhiều khoản tiền, tài sản và khoản nợ nhưng chưa nhìn được bức tranh tổng thể. Cần biết ngay <b>giá trị tài sản ròng và tỷ lệ nợ trên tài sản</b>, để <b>xác định ưu tiên nên tăng tài sản hay giảm nợ trước</b>.',
    formula: 'Giá trị tài sản ròng = <b>Tổng tài sản - Tổng nợ phải trả</b><br>Tỷ lệ nợ trên tài sản = <b>Tổng nợ ÷ Tổng tài sản × 100%</b>',
    resultLabel: 'GIÁ TRỊ TÀI SẢN RÒNG',
    disclaimer: 'Kết quả là ảnh chụp tài chính tại thời điểm nhập dữ liệu, không phải tư vấn đầu tư hoặc định giá tài sản chuyên nghiệp.',
    fields: [
      { id: 'nwCash', label: 'Tiền mặt và tiết kiệm', tooltip: 'Gồm tiền mặt, tiền trong tài khoản thanh toán, sổ tiết kiệm và các khoản có thể quy đổi ra tiền gần như ngay lập tức.', type: 'money', min: 0, max: 50000000000, step: 1000000, value: 100000000, chips: [20000000, 100000000, 500000000] },
      { id: 'nwInvestments', label: 'Đầu tư tài chính', tooltip: 'Gồm cổ phiếu, quỹ, trái phiếu, vàng đầu tư, crypto hoặc các khoản đầu tư tài chính khác theo giá trị ước tính hiện tại.', type: 'money', min: 0, max: 50000000000, step: 1000000, value: 150000000, chips: [0, 100000000, 500000000] },
      { id: 'nwProperty', label: 'Nhà, đất và phương tiện', tooltip: 'Ghi theo giá trị thị trường ước tính hiện tại của bất động sản, ô tô, xe máy hoặc tài sản lớn phục vụ sử dụng lâu dài.', type: 'money', min: 0, max: 100000000000, step: 10000000, value: 1500000000, chips: [0, 1000000000, 3000000000] },
      { id: 'nwOtherAssets', label: 'Tài sản khác', tooltip: 'Gồm đồ giá trị cao, khoản phải thu, vốn góp cá nhân hoặc tài sản khác chưa nằm trong các nhóm phía trên.', type: 'money', min: 0, max: 50000000000, step: 1000000, value: 50000000, chips: [0, 50000000, 200000000] },
      { id: 'nwMortgage', label: 'Dư nợ vay nhà, xe', tooltip: 'Là phần gốc còn nợ của các khoản vay mua nhà, mua xe hoặc khoản vay thế chấp tương tự tại thời điểm hiện tại.', type: 'money', min: 0, max: 100000000000, step: 10000000, value: 900000000, chips: [0, 500000000, 1500000000] },
      { id: 'nwConsumerDebt', label: 'Dư nợ thẻ và vay tiêu dùng', tooltip: 'Bao gồm dư nợ thẻ tín dụng, vay tiêu dùng tín chấp, trả góp và các khoản vay cá nhân ngắn hoặc trung hạn.', type: 'money', min: 0, max: 5000000000, step: 1000000, value: 30000000, chips: [0, 30000000, 100000000] },
      { id: 'nwOtherDebt', label: 'Khoản nợ khác', tooltip: 'Các nghĩa vụ nợ còn lại như vay người thân, công nợ kinh doanh, thuế phải trả hoặc khoản nợ chưa xếp vào nhóm trên.', type: 'money', min: 0, max: 50000000000, step: 1000000, value: 0, chips: [0, 50000000, 200000000] },
    ],
    compute(v) {
      const totalAssets = v.nwCash + v.nwInvestments + v.nwProperty + v.nwOtherAssets;
      const totalDebt = v.nwMortgage + v.nwConsumerDebt + v.nwOtherDebt;
      const netWorth = totalAssets - totalDebt;
      const debtToAssets = totalAssets > 0 ? totalDebt / totalAssets * 100 : 0;
      const liquidAssets = v.nwCash + v.nwInvestments;
      const position = netWorth > 0 ? 'Dương' : netWorth < 0 ? 'Âm' : 'Cân bằng';
      const insight = netWorth < 0
        ? 'Tổng nợ đang cao hơn tổng tài sản. Ưu tiên kiểm tra các khoản nợ có lãi suất cao và xây kế hoạch trả nợ trước khi tăng mức đầu tư.'
        : debtToAssets > 50
          ? 'Tài sản ròng đang dương nhưng hơn một nửa tài sản được tài trợ bằng nợ. Nên theo dõi dòng tiền trả nợ và khả năng thanh khoản.'
          : 'Tài sản ròng đang dương. Hãy cập nhật định kỳ cùng một cách định giá để theo dõi xu hướng thay vì chỉ nhìn một con số tại một thời điểm.';
      return { result: fmtM(netWorth), details: [
        { label: 'Tổng tài sản', value: fmtM(totalAssets) },
        { label: 'Tổng nợ phải trả', value: fmtM(totalDebt) },
        { label: 'Tài sản có tính thanh khoản', value: fmtM(liquidAssets) },
        { label: 'Tỷ lệ nợ trên tài sản', value: totalAssets > 0 ? debtToAssets.toFixed(1) + '%' : 'Không xác định' },
        { label: 'Vị thế tài chính ròng', value: position },
      ], insight };
    },
  },
  {
    id: 'dti', name: 'Tỷ Lệ Nợ Trên Thu Nhập', category: 'Financial Health', abbr: 'DTI',
    intent: 'Informational intent', panel: 'generic',
    description: 'Đo phần trăm thu nhập gộp hàng tháng đang dùng để thanh toán các nghĩa vụ nợ.',
    jtbd: 'Tôi đang cân nhắc vay thêm nhưng chưa biết các khoản trả nợ hiện tại đã chiếm bao nhiêu thu nhập. Cần biết ngay <b>DTI và dòng tiền còn lại trước chi phí sinh hoạt</b>, để <b>đánh giá áp lực nợ trước khi nộp hồ sơ vay</b>.',
    formula: 'DTI = <b>Tổng tiền trả nợ hàng tháng ÷ Thu nhập gộp hàng tháng × 100%</b>',
    resultLabel: 'TỶ LỆ NỢ TRÊN THU NHẬP',
    disclaimer: 'DTI chỉ là chỉ báo tham khảo. Mỗi tổ chức và sản phẩm tín dụng có tiêu chí thẩm định khác nhau; kết quả này không phải quyết định phê duyệt khoản vay.',
    fields: [
      { id: 'dtiGrossIncome', label: 'Thu nhập gộp hàng tháng', type: 'money', min: 1000000, max: 1000000000, step: 500000, value: 30000000, chips: [15000000, 30000000, 60000000] },
      { id: 'dtiHousing', label: 'Trả nợ nhà, xe mỗi tháng', type: 'money', min: 0, max: 500000000, step: 100000, value: 6000000, chips: [0, 5000000, 10000000] },
      { id: 'dtiInstallment', label: 'Trả vay tiêu dùng mỗi tháng', type: 'money', min: 0, max: 500000000, step: 100000, value: 2500000, chips: [0, 2000000, 5000000] },
      { id: 'dtiCard', label: 'Thanh toán dư nợ thẻ mỗi tháng', type: 'money', min: 0, max: 500000000, step: 100000, value: 1500000, chips: [0, 1000000, 3000000] },
      { id: 'dtiOther', label: 'Nghĩa vụ nợ khác mỗi tháng', type: 'money', min: 0, max: 500000000, step: 100000, value: 0, chips: [0, 1000000, 3000000] },
    ],
    compute(v) {
      const monthlyDebt = v.dtiHousing + v.dtiInstallment + v.dtiCard + v.dtiOther;
      if (v.dtiGrossIncome <= 0) {
        return { result: 'Chưa thể tính', details: [
          { label: 'Tổng trả nợ hàng tháng', value: fmt(monthlyDebt) },
          { label: 'Thu nhập gộp hàng tháng', value: 'Cần lớn hơn 0 đ' },
        ], insight: 'Nhập thu nhập gộp hàng tháng để tính tỷ lệ DTI.' };
      }
      const ratio = v.dtiGrossIncome > 0 ? monthlyDebt / v.dtiGrossIncome * 100 : 0;
      const remaining = v.dtiGrossIncome - monthlyDebt;
      const status = ratio < 30 ? 'Dư địa tương đối tốt' : ratio <= 40 ? 'Cần theo dõi' : 'Áp lực nợ cao';
      const insight = ratio < 30
        ? 'Các nghĩa vụ nợ hiện chiếm dưới 30% thu nhập gộp. Vẫn cần trừ tiếp chi phí sinh hoạt và dự phòng trước khi quyết định vay thêm.'
        : ratio <= 40
          ? 'DTI đang ở vùng cần theo dõi. Hãy stress test trường hợp thu nhập giảm hoặc lãi suất tăng trước khi nhận thêm nghĩa vụ nợ.'
          : 'Hơn 40% thu nhập gộp đang dùng để trả nợ. Ưu tiên giảm dư nợ hoặc tăng thu nhập trước khi cân nhắc khoản vay mới.';
      return { result: ratio.toFixed(1) + '%', details: [
        { label: 'Thu nhập gộp hàng tháng', value: fmt(v.dtiGrossIncome) },
        { label: 'Tổng trả nợ hàng tháng', value: fmt(monthlyDebt) },
        { label: 'Còn lại trước chi phí sinh hoạt', value: fmt(remaining) },
        { label: 'Mức tham khảo', value: status },
      ], insight };
    },
  },
  {
    id: 'debt-payoff', name: 'Kế Hoạch Trả Nợ', category: 'Financial Health', abbr: 'DP',
    intent: 'Informational intent', panel: 'generic', ui: 'debt-matrix',
    description: 'So sánh chiến lược ưu tiên lãi suất cao và ưu tiên dư nợ nhỏ khi trả nhiều khoản nợ.',
    jtbd: 'Tôi có nhiều khoản nợ và một khoản tiền có thể trả thêm mỗi tháng nhưng chưa biết nên dồn vào đâu trước. Cần biết ngay <b>thời gian trả hết, tổng lãi và khoản nợ ưu tiên</b>, để <b>chọn chiến lược phù hợp và duy trì kế hoạch</b>.',
    formula: '<b>Giảm tổng lãi (Avalanche):</b> trả thêm vào khoản có lãi suất cao nhất.<br><b>Xóa khoản nhỏ (Snowball):</b> trả thêm vào khoản có dư nợ thấp nhất để thấy tiến độ sớm.',
    resultLabel: 'THỜI GIAN DỰ KIẾN TRẢ HẾT NỢ',
    ctaText: 'Khám phá giải pháp giảm áp lực nợ',
    disclaimer: 'Mô phỏng giả định lãi suất và ngân sách trả nợ không đổi, không gồm phí phạt hoặc khoản vay mới. Hãy đối chiếu lịch thanh toán thực tế với bên cho vay.',
    fields: [
      { id: 'dpCardBalance', label: 'Dư nợ hiện tại', type: 'money', min: 0, max: 2000000000, step: 500000, value: 30000000, chips: [0, 20000000, 50000000] },
      { id: 'dpCardRate', label: 'Lãi suất/năm', type: 'range', min: 0, max: 60, step: 0.5, value: 30, unit: '%', chips: [20, 30, 40] },
      { id: 'dpCardMin', label: 'Trả tối thiểu/tháng', type: 'money', min: 0, max: 200000000, step: 100000, value: 2000000, chips: [1000000, 2000000, 5000000] },
      { id: 'dpLoanBalance', label: 'Dư nợ hiện tại', type: 'money', min: 0, max: 5000000000, step: 1000000, value: 60000000, chips: [0, 50000000, 100000000] },
      { id: 'dpLoanRate', label: 'Lãi suất/năm', type: 'range', min: 0, max: 60, step: 0.5, value: 18, unit: '%', chips: [12, 18, 24] },
      { id: 'dpLoanMin', label: 'Trả tối thiểu/tháng', type: 'money', min: 0, max: 200000000, step: 100000, value: 3000000, chips: [1000000, 3000000, 5000000] },
      { id: 'dpOtherBalance', label: 'Dư nợ hiện tại', type: 'money', min: 0, max: 5000000000, step: 1000000, value: 20000000, chips: [0, 20000000, 50000000] },
      { id: 'dpOtherRate', label: 'Lãi suất/năm', type: 'range', min: 0, max: 60, step: 0.5, value: 12, unit: '%', chips: [0, 12, 18] },
      { id: 'dpOtherMin', label: 'Trả tối thiểu/tháng', type: 'money', min: 0, max: 200000000, step: 100000, value: 1000000, chips: [500000, 1000000, 3000000] },
      { id: 'dpExtra', label: 'Trả thêm mỗi tháng', type: 'money', min: 0, max: 500000000, step: 100000, value: 2000000, chips: [0, 2000000, 5000000] },
      { id: 'dpStrategy', label: 'Bạn ưu tiên điều gì?', type: 'pills', options: [
        { value: 'avalanche', label: 'Giảm tổng lãi', note: 'Avalanche · Lãi cao trước' },
        { value: 'snowball', label: 'Xóa khoản nhỏ', note: 'Snowball · Dư nợ thấp trước' },
      ], value: 'avalanche' },
    ],
    compute(v) {
      const sourceDebts = [
        { name: 'Thẻ tín dụng', balance: v.dpCardBalance, rate: v.dpCardRate, minimum: v.dpCardMin },
        { name: 'Vay tiêu dùng', balance: v.dpLoanBalance, rate: v.dpLoanRate, minimum: v.dpLoanMin },
        { name: 'Dư nợ khác', balance: v.dpOtherBalance, rate: v.dpOtherRate, minimum: v.dpOtherMin },
      ].filter(d => d.balance > 0);
      const monthlyBudget = sourceDebts.reduce((sum, d) => sum + d.minimum, 0) + v.dpExtra;
      const simulate = strategy => {
        const debts = sourceDebts.map(d => ({ ...d }));
        let months = 0;
        let totalInterest = 0;
        let totalPaid = 0;
        while (debts.some(d => d.balance > 0.5) && months < 1200) {
          months += 1;
          debts.forEach(d => {
            if (d.balance <= 0.5) return;
            const interest = d.balance * d.rate / 100 / 12;
            d.balance += interest;
            totalInterest += interest;
          });
          let remaining = monthlyBudget;
          debts.forEach(d => {
            if (d.balance <= 0.5 || remaining <= 0) return;
            const payment = Math.min(d.minimum, d.balance, remaining);
            d.balance -= payment;
            remaining -= payment;
            totalPaid += payment;
          });
          while (remaining > 0.5) {
            const active = debts.filter(d => d.balance > 0.5);
            if (!active.length) break;
            active.sort((a, b) => strategy === 'avalanche' ? b.rate - a.rate || a.balance - b.balance : a.balance - b.balance || b.rate - a.rate);
            const payment = Math.min(active[0].balance, remaining);
            active[0].balance -= payment;
            remaining -= payment;
            totalPaid += payment;
          }
        }
        return { months, totalInterest, totalPaid, paidOff: !debts.some(d => d.balance > 0.5) };
      };
      if (!sourceDebts.length) {
        return { result: 'Không có dư nợ', details: [
          { label: 'Tổng dư nợ', value: '0 đ' },
          { label: 'Ngân sách trả nợ', value: fmt(v.dpExtra) + '/tháng' },
        ], insight: 'Bạn chưa nhập khoản nợ nào cần lập kế hoạch.' };
      }
      if (monthlyBudget <= 0) {
        return { result: 'Chưa thể tính', details: [
          { label: 'Tổng dư nợ', value: fmtM(sourceDebts.reduce((sum, d) => sum + d.balance, 0)) },
          { label: 'Ngân sách trả nợ', value: '0 đ/tháng' },
        ], insight: 'Cần nhập ít nhất một khoản thanh toán tối thiểu hoặc ngân sách trả thêm mỗi tháng.' };
      }
      const selected = simulate(v.dpStrategy);
      const alternativeStrategy = v.dpStrategy === 'avalanche' ? 'snowball' : 'avalanche';
      const alternative = simulate(alternativeStrategy);
      const ordered = [...sourceDebts].sort((a, b) => v.dpStrategy === 'avalanche' ? b.rate - a.rate || a.balance - b.balance : a.balance - b.balance || b.rate - a.rate);
      const formatDuration = months => `${Math.floor(months / 12)} năm ${months % 12} tháng`;
      if (!selected.paidOff) {
        return { result: 'Trên 100 năm', details: [
          { label: 'Ngân sách trả nợ', value: fmt(monthlyBudget) + '/tháng' },
          { label: 'Khoản ưu tiên đầu tiên', value: ordered[0].name },
        ], insight: 'Ngân sách hiện tại chưa đủ để hoàn tất kế hoạch trong thời hạn mô phỏng. Hãy tăng mức trả tối thiểu hoặc ngân sách trả thêm.' };
      }
      const comparison = alternative.paidOff
        ? `${formatDuration(alternative.months)}, lãi ${fmtM(alternative.totalInterest)}`
        : 'Không hoàn tất trong thời hạn mô phỏng';
      const strategyLabel = v.dpStrategy === 'avalanche' ? 'Giảm tổng lãi (Avalanche)' : 'Xóa khoản nhỏ (Snowball)';
      const alternativeLabel = v.dpStrategy === 'avalanche' ? 'Xóa khoản nhỏ' : 'Giảm tổng lãi';
      return { result: formatDuration(selected.months), details: [
        { label: 'Tổng dư nợ ban đầu', value: fmtM(sourceDebts.reduce((sum, d) => sum + d.balance, 0)) },
        { label: 'Ngân sách trả nợ mỗi tháng', value: fmt(monthlyBudget) },
        { label: 'Tổng lãi dự kiến', value: fmtM(selected.totalInterest) },
        { label: 'Tổng tiền thanh toán dự kiến', value: fmtM(selected.totalPaid) },
        { label: 'Khoản ưu tiên đầu tiên', value: ordered[0].name },
        { label: `So với ${alternativeLabel}`, value: comparison },
      ], insight: `${strategyLabel} đang ưu tiên <b>${ordered[0].name}</b>. ${v.dpStrategy === 'avalanche' ? 'Phù hợp khi mục tiêu là trả ít tiền lãi hơn.' : 'Phù hợp khi bạn cần thấy một khoản nợ được xóa sớm để duy trì động lực.'}` };
    },
  },
  {
    id: 'bao-hiem-o-to', name: 'Bảo Hiểm Ô Tô', category: 'Insurance', abbr: 'BH',
    intent: 'Commercial intent', panel: 'generic',
    description: 'Mô phỏng phí bảo hiểm vật chất ô tô (BHVC tự nguyện) theo giá trị xe và độ tuổi xe. Tỷ lệ tham chiếu thị trường 2026 từ Bảo Việt, PJICO, OPES, MIC: 1,4% - 2% giá trị xe.',
    jtbd: 'Tôi sắp mua hoặc gia hạn bảo hiểm vật chất cho xe và muốn biết phải trả bao nhiêu. Cần biết ngay <b>phí bảo hiểm năm dự kiến theo giá trị xe và độ tuổi xe của mình</b>, để <b>dự trù ngân sách và so sánh giữa các gói trước khi quyết định mua</b>.',
    formula: 'Phí BHVC/năm = <b>Giá trị xe × Tỷ lệ phí (%)</b> + <b>VAT 10%</b><br><em>Tỷ lệ thị trường: xe con dưới 3 năm 1,4% &nbsp;·&nbsp; 3-6 năm 1,6% &nbsp;·&nbsp; trên 6 năm 1,8% &nbsp;·&nbsp; SUV/Pickup +0,2%</em>',
    resultLabel: 'PHÍ BẢO HIỂM NĂM',
    partners: AUTO_INSURANCE_PARTNERS,
    fields: [
      { id: 'carBrand',      label: 'Hãng xe', type: 'select', options: AUTO_INSURANCE_BRAND_OPTIONS, value: 'TOYOTA' },
      { id: 'carModel',      label: 'Dòng xe', type: 'select', options: vals => getAutoInsuranceModelOptions(vals?.carBrand || 'TOYOTA'), value: 'Vios' },
      { id: 'carValue',      label: 'Giá trị xe',  type: 'money',  min: 100000000, max: 5000000000, step: 10000000, value: 500000000, chips: [200000000, 500000000, 1000000000] },
      { id: 'insuranceRate', label: 'Loại xe và độ tuổi', type: 'select', options: [
        {value:1.4, label:'1,40% - Xe con dưới 3 năm'},
        {value:1.6, label:'1,60% - Xe con 3-6 năm SUV/Pickup mới'},
        {value:1.8, label:'1,80% - Xe con trên 6 năm hoặc SUV/Pickup 3-6 năm'},
        {value:2.0, label:'2,00% - SUV/Pickup trên 6 năm'},
      ], value: 1.4 },
      { id: 'partnerId', label: 'Đối tác bảo hiểm', type: 'select-items', ui: { valueType: 'enum', precision: 'exact', decisionMode: 'compare', compareOptions: true, optionCount: AUTO_INSURANCE_PARTNERS.length }, options: AUTO_INSURANCE_PARTNERS.map(partner => ({
        value: partner.id,
        label: partner.logo,
      })), value: 'pvi' },
      { id: 'vehicleProfile', label: 'Đặc tính xe hoặc hợp đồng', type: 'select', options: [
        { value: 'standard', label: 'Xe tiêu chuẩn' },
        { value: 'ev', label: 'Xe điện' },
        { value: 'evBattery', label: 'Xe điện kèm pin' },
        { value: 'financed', label: 'Xe trả góp' },
      ], value: 'standard' },
      { id: 'incidentType', label: 'Tình huống xe bị tổn thất', type: 'select', options: [
        { value: 'waterlogging', label: 'Ngập nước' },
        { value: 'flood', label: 'Thủy kích' },
        { value: 'theft', label: 'Mất cắp phụ tùng' },
        { value: 'naturalDisaster', label: 'Thiên tai' },
        { value: 'collision', label: 'Va chạm & Tai nạn giao thông' },
        { value: 'totalTheft', label: 'Mất cắp toàn bộ xe' },
        { value: 'fire', label: 'Cháy nổ xe ô tô' },
        { value: 'glass', label: 'Vỡ kính' },
      ], value: 'collision' },
    ],
    compute(v) {
      const modelOptions = getAutoInsuranceModelOptions(v.carBrand);
      const selectedModel = modelOptions.some(option => option.value === v.carModel) ? v.carModel : (modelOptions[0]?.value || 'Chưa chọn');
      const profile = AUTO_INSURANCE_PROFILES[v.vehicleProfile] || AUTO_INSURANCE_PROFILES.standard;
      const adjustedRate = v.insuranceRate * profile.premiumFactor;
      const p = v.carValue * adjustedRate / 100, vat = p * 0.1;
      const scenario = AUTO_INSURANCE_SCENARIOS[v.incidentType] || AUTO_INSURANCE_SCENARIOS.collision;
      const damageEstimate = v.carValue * scenario.damageRatio;
      const selectedPartner = AUTO_INSURANCE_PARTNERS.find(partner => partner.id === v.partnerId) || AUTO_INSURANCE_PARTNERS[0];
      const partnerQuotes = AUTO_INSURANCE_PARTNERS.map(partner => {
        const coverFactor = partner.compensation[v.incidentType] || 0;
        const deductible = partner.deductible[v.incidentType] || 0;
        return {
          partner,
          payout: Math.max(0, Math.min(v.carValue, damageEstimate * coverFactor * profile.payoutFactor - deductible)),
          deductible,
          coverFactor,
        };
      }).sort((a, b) => b.payout - a.payout);
      const best = partnerQuotes[0];
      const selectedQuote = partnerQuotes.find(item => item.partner.id === selectedPartner.id) || best;
      return { result: fmt(p + vat), details: [
        { label: 'Xe đang chọn', value: `${v.carBrand} ${selectedModel}` },
        { label: 'Đối tác đang chọn', value: selectedPartner.name },
        { label: 'Đặc tính đang áp dụng', value: profile.label },
        { label: 'Phí bảo hiểm thuần', value: fmt(p) },
        { label: 'VAT (10%)', value: fmt(vat) },
        { label: 'Bồi thường tối đa', value: fmtM(v.carValue) },
        { label: 'Tỷ lệ phí áp dụng', value: adjustedRate.toFixed(2) + '%' },
        { label: `Thiệt hại tham chiếu - ${scenario.label}`, value: fmtM(damageEstimate) },
        { label: `${selectedPartner.logo} chi trả dự kiến`, value: fmtM(selectedQuote.payout) },
        { label: 'Điều khoản áp dụng', value: `${Math.round(selectedQuote.coverFactor * 100)}% tổn thất · miễn thường ${fmtM(selectedQuote.deductible)}` },
        { label: 'Mốc tham chiếu tốt nhất', value: `${best.partner.name} - ${fmtM(best.payout)}` },
      ], insight: `Mẫu xe đang mô phỏng là <b>${v.carBrand} ${selectedModel}</b>. ${scenario.description} Với nhóm <b>${profile.label.toLowerCase()}</b> và ${selectedPartner.name}, mức bồi thường dự kiến là <b>${fmtM(selectedQuote.payout)}</b>. ${profile.note} ${selectedPartner.note}` };
    },
  },
  {
    id: 'bhxh', name: 'BHXH', category: 'Insurance', abbr: 'XH',
    intent: 'Transactional intent', panel: 'generic',
    description: 'Tính phí đóng BHXH tự nguyện hàng tháng theo Luật BHXH 2024. Bạn TỰ CHỌN mức lương để đóng (1,5 triệu - 46,8 triệu/tháng). Phí thực đóng = 22% × mức tự chọn − hỗ trợ Nhà nước (33k đến 99k tùy nhóm, chỉ áp dụng 10 năm đầu).',
    jtbd: 'Tôi đang cân nhắc tham gia BHXH tự nguyện để có lương hưu sau này. Cần thấy ngay <b>phí đóng mỗi tháng theo mức tôi tự chọn và mức hỗ trợ Nhà nước</b>, để <b>biết có cân đối được dòng tiền dài hạn để duy trì đóng đủ năm</b>.',
    formula: 'Phí thực đóng/tháng = <b>22% × Mức đóng tự chọn − Hỗ trợ Nhà nước</b><br>Hỗ trợ Nhà nước (tối đa 10 năm đầu):<br>· Hộ nghèo: <b>99.000đ/tháng</b> = 30% × 22% × 1,5tr<br>· Hộ cận nghèo: <b>82.500đ/tháng</b> = 25% × 22% × 1,5tr<br>· Đối tượng khác: <b>33.000đ/tháng</b> = 10% × 22% × 1,5tr<br><em>Mức đóng tự chọn: tối thiểu 1,5tr (chuẩn nghèo nông thôn), tối đa 46,8tr (20 × lương cơ sở 2,34tr). Hỗ trợ Nhà nước cap 120 tháng theo NĐ 134/2015 Điều 14 Khoản 3. Từ tháng 121 trở đi đóng full 22%.</em>',
    resultLabel: 'THỰC ĐÓNG QUA MOMO/THÁNG',
    fields: [
      { id: 'salary',        label: 'Mức bạn muốn đóng/tháng (tự chọn)', type: 'money', min: 1500000, max: 46800000, step: 100000, value: 5000000, chips: [1500000, 5000000, 10000000, 20000000] },
      { id: 'months',        label: 'Số tháng dự kiến tham gia',          type: 'select', options: Array.from({ length: 30 }, (_, index) => {
        const value = (index + 1) * 12;
        return { value, label: `${value} tháng (${Math.round(value / 12)} năm)` };
      }), value: 240 },
      { id: 'subsidyGroup',  label: 'Nhóm đối tượng hỗ trợ',              type: 'select', options: [
        {value:'normal',    label:'👤 Đối tượng khác (hỗ trợ 33.000đ/tháng)'},
        {value:'near-poor', label:'🏠 Hộ cận nghèo (hỗ trợ 82.500đ/tháng)'},
        {value:'poor',      label:'🆘 Hộ nghèo (hỗ trợ 99.000đ/tháng)'},
      ], value: 'normal' },
    ],
    compute(v) {
      const subsidies = { 'poor': 99000, 'near-poor': 82500, 'normal': 33000 };
      const subsidy = subsidies[v.subsidyGroup] || 33000;
      const gross = v.salary * 0.22;
      const net   = Math.max(0, gross - subsidy);
      const yrs   = v.months / 12;
      const subsidyMonths  = Math.min(v.months, 120);
      const fullPriceMonths = Math.max(0, v.months - 120);
      const totalPaid    = net * subsidyMonths + gross * fullPriceMonths;
      const totalSubsidy = subsidy * subsidyMonths;
      const eligibleForPension = yrs >= 15;
      const subsidyName = { 'poor': 'hộ nghèo', 'near-poor': 'hộ cận nghèo', 'normal': 'đối tượng thường' }[v.subsidyGroup];

      let insight;
      if (!eligibleForPension) {
        const monthsNeeded = 180 - v.months;
        insight = `Chưa đủ điều kiện hưởng lương hưu. Cần đóng tối thiểu <b>15 năm (180 tháng)</b>, còn thiếu <b>${monthsNeeded} tháng</b>. Nếu không đủ năm có thể rút BHXH 1 lần khi đủ tuổi nghỉ hưu.`;
      } else if (v.months <= 120) {
        insight = `Đủ điều kiện hưởng lương hưu (≥15 năm). Bạn đang được Nhà nước hỗ trợ <b>${fmt(subsidy)}/tháng</b> (áp dụng tối đa 10 năm đầu). Xem tool <b>Lương Hưu</b> để ước lương hưu chi tiết.`;
      } else {
        insight = `Hỗ trợ Nhà nước đã hết sau 10 năm đầu (tổng nhận: ${fmtM(totalSubsidy)}). Từ tháng thứ 121 đóng full <b>${fmt(gross)}/tháng</b>. Xem tool <b>Lương Hưu</b> để ước hưu chi tiết theo giới tính & năm sinh.`;
      }

      return {
        result: fmt(net),
        details: [
          { label: '22% mức đóng tự chọn',                    value: fmt(gross) },
          { label: `Hỗ trợ NN (${subsidyName})`,               value: '- ' + fmt(subsidy) + ' (tối đa 10 năm)' },
          { label: 'Thực đóng 10 năm đầu',                      value: fmt(net) + '/tháng' },
          { label: 'Thực đóng từ năm 11',                       value: fmt(gross) + '/tháng' },
          { label: `Tổng đóng ${yrs.toFixed(0)} năm`,           value: fmtM(totalPaid) },
          { label: 'Tổng hỗ trợ NN nhận được',                  value: fmtM(totalSubsidy) },
          { label: 'Đủ điều kiện hưởng lương hưu (≥15 năm)',   value: eligibleForPension ? '✓ Đủ' : `✗ Cần thêm ${(15 - yrs).toFixed(1)} năm` },
        ],
        insight,
      };
    },
  },
  {
    id: 'luong-huu', name: 'Lương Hưu', category: 'Insurance', abbr: 'LH',
    intent: 'Informational intent', panel: 'generic',
    description: 'Ước tính lương hưu hằng tháng theo Luật BHXH 2024 (hiệu lực 01/07/2025) và tuổi nghỉ hưu theo BLLĐ 2019. Tự động tính: tuổi nghỉ hưu cụ thể, MBQTL điều chỉnh CPI, trợ cấp 1 lần khi đóng vượt 30 năm (nữ) / 35 năm (nam), tổng lương hưu nhận đến 80 tuổi.',
    jtbd: 'Tôi đang lên kế hoạch nghỉ hưu và phân vân giữa đóng tiếp hay rút BHXH 1 lần. Cần biết ngay <b>lương hưu hằng tháng, tuổi nghỉ hưu cụ thể, và tổng tiền sẽ nhận đến 80 tuổi</b>, để <b>so sánh với phương án rút 1 lần và quyết định có nên đóng tiếp đủ năm</b>.',
    formula: 'Lương hưu = <b>Tỷ lệ × MBQTL</b><br>Nữ: ≥15 năm = 45%, +2%/năm, tối đa 75% (đủ 30 năm)<br>Nam: ≥20 năm = 45%, +2%/năm, tối đa 75% (đủ 35 năm)<br>Nam 15-19 năm (chỉ áp dụng nếu tham gia BHXH từ 01/07/2025): 40% + 1%/năm<br>Trợ cấp 1 lần (đóng dư) = <b>0,5 × MBQTL × số năm dư</b><br><em>MBQTL = Mức bình quân tiền lương đã điều chỉnh CPI · Tuổi hưu 2026: Nam 61t6th, Nữ 57t · Lộ trình tăng đến Nam 62t (2028), Nữ 60t (2035) theo BLLĐ 2019.</em>',
    resultLabel: 'LƯƠNG HƯU ƯỚC TÍNH/THÁNG',
    fields: [
      { id: 'lhGender', label: 'Giới tính', type: 'select', options: [
        {value:0,label:'Nữ'},{value:1,label:'Nam'},
      ], value: 0 },
      { id: 'lhBirthYear', label: 'Năm sinh', type: 'select', value: 1980, options: Array.from({ length: 2005 - 1960 + 1 }, (_, index) => {
        const year = 2005 - index;
        return { value: year, label: String(year) };
      }) },
      { id: 'lhYears',     label: 'Số năm đã đóng BHXH', type: 'stepper', min: 1,       max: 40,       step: 1,      value: 20,        unit: 'năm', chips: [15, 20, 30, 35] },
      { id: 'lhSalary',    label: 'Lương đóng BHXH/tháng (hiện tại)', type: 'money', min: 1500000, max: 50600000, step: 100000, value: 10000000, chips: [5000000, 10000000, 20000000] },
    ],
    compute(v) {
      const yrs = v.lhYears;
      const isFemale = v.lhGender === 0;

      // Tuổi nghỉ hưu theo BLLĐ 2019 (Điều 169) + Nghị định 135/2020/NĐ-CP
      // Nam: 60 từ 2020, +3 tháng/năm, max 62 (2028) · Nữ: 55 từ 2020, +4 tháng/năm, max 60 (2035)
      const getRetireAge = (atYear) => {
        if (!isFemale) {
          const m = Math.min(Math.max(0, (atYear - 2020) * 3), 24);
          return 60 + m / 12;
        }
        const m = Math.min(Math.max(0, (atYear - 2020) * 4), 60);
        return 55 + m / 12;
      };
      let retireYear = v.lhBirthYear + (isFemale ? 55 : 60);
      let retireAge = getRetireAge(retireYear);
      for (let y = retireYear; y <= v.lhBirthYear + 65; y++) {
        if (y - v.lhBirthYear >= getRetireAge(y)) { retireYear = y; retireAge = getRetireAge(y); break; }
      }
      const currentYear = 2026;
      const currentAge = currentYear - v.lhBirthYear;
      const yearsToRetire = retireYear - currentYear;
      const fmtAge = (a) => {
        const yy = Math.floor(a);
        const mm = Math.round((a - yy) * 12);
        return mm === 0 ? `${yy} tuổi` : `${yy} tuổi ${mm} tháng`;
      };

      // Auto-estimate MBQTL theo số năm đóng (hệ số 0,7 - 1,0 giống BHXH 1 Lần)
      const mbqtlFactor = Math.max(0.7, 1 - yrs * 0.015);
      const mbqtl = v.lhSalary * mbqtlFactor;

      // Tỷ lệ hưởng theo Điều 66 Luật BHXH 2024
      let rate = 0, bonusYears = 0, warning = '';
      if (isFemale) {
        if (yrs < 15) {
          rate = 0;
        } else {
          const ratableYrs = Math.min(yrs, 30);
          rate = 0.45 + (ratableYrs - 15) * 0.02;
          bonusYears = Math.max(0, yrs - 30);
        }
      } else {
        if (yrs < 15) {
          rate = 0;
        } else if (yrs < 20) {
          rate = 0.40 + (yrs - 15) * 0.01;
        } else {
          const ratableYrs = Math.min(yrs, 35);
          rate = 0.45 + (ratableYrs - 20) * 0.02;
          bonusYears = Math.max(0, yrs - 35);
        }
      }

      const pension = rate * mbqtl;
      const bonus1Lan = bonusYears * 0.5 * mbqtl;
      const monthsTo80 = Math.max(0, Math.round((80 - retireAge) * 12));
      const totalTo80 = pension * monthsTo80 + bonus1Lan;
      const ratePct = (rate * 100).toFixed(0);

      let insight;
      if (warning) {
        insight = warning;
      } else if (rate === 0) {
        insight = `Chưa đủ điều kiện hưởng lương hưu hằng tháng. Cần đóng thêm ${15 - yrs} năm nữa để đạt mức tối thiểu 15 năm.`;
      } else if (bonusYears > 0) {
        insight = `Đã đạt tỷ lệ tối đa 75% từ năm thứ ${isFemale ? 30 : 35}. ${bonusYears} năm đóng dư được tính trợ cấp 1 lần khi nghỉ hưu = ${fmt(bonus1Lan)} (0,5 × MBQTL × ${bonusYears} năm).`;
      } else if (rate >= 0.75) {
        insight = `Vừa đạt tỷ lệ tối đa 75%. Mỗi năm đóng thêm sẽ được trợ cấp 1 lần = ${fmt(0.5 * mbqtl)}/năm khi nghỉ hưu.`;
      } else {
        const yrsToMax = isFemale ? (30 - yrs) : (35 - yrs);
        insight = `Còn ${yrsToMax} năm nữa đạt tỷ lệ tối đa 75%. Mỗi năm đóng thêm = <b>+2% lương hưu</b> (+${fmt(0.02 * mbqtl)}/tháng).`;
      }

      const details = [];
      if (yearsToRetire > 0) {
        details.push({ label: 'Tuổi hiện tại', value: `${currentAge} tuổi (sinh ${v.lhBirthYear})` });
        details.push({ label: 'Tuổi nghỉ hưu (BLLĐ 2019)', value: `${fmtAge(retireAge)} - năm ${retireYear}` });
        details.push({ label: 'Còn lại đến nghỉ hưu', value: `${yearsToRetire} năm` });
      } else {
        details.push({ label: 'Tuổi nghỉ hưu', value: `${fmtAge(retireAge)} - đã đủ tuổi từ ${retireYear}` });
      }
      details.push({ label: `MBQTL ước tính (hệ số ${mbqtlFactor.toFixed(2)}×)`, value: `${fmt(mbqtl)}/tháng` });
      details.push({ label: 'Tỷ lệ hưởng', value: `${ratePct}%` });
      if (rate > 0) {
        details.push({ label: 'Lương hưu/năm', value: fmtM(pension * 12) });
        if (bonus1Lan > 0) {
          details.push({ label: 'Trợ cấp 1 lần khi nghỉ hưu', value: fmt(bonus1Lan) });
        }
        details.push({ label: `Tổng nhận đến 80 tuổi (${(monthsTo80/12).toFixed(0)} năm hưu)`, value: fmtM(totalTo80) });
      }

      return { result: rate > 0 ? fmt(pension) : 'Chưa đủ ĐK', details, insight };
    },
  },
  {
    id: 'bhxh-1-lan', name: 'BHXH 1 Lần', category: 'Insurance', abbr: 'B1',
    intent: 'Transactional intent', panel: 'generic',
    description: 'Ước tính số tiền nhận BHXH một lần theo Điều 70 Luật BHXH 2024. Nhập mức lương đóng BHXH hiện tại, tool tự ước tính MBQTL (Mức bình quân tiền lương) theo số năm đã đóng và hệ số trượt giá CPI. Để có số chính xác, tra cứu trong sổ BHXH cá nhân tại ứng dụng VssID.',
    jtbd: 'Tôi đang phân vân giữa rút BHXH một lần hay giữ tiếp để nhận lương hưu sau này. Cần biết ngay <b>số tiền có thể rút theo mức lương đóng và số năm đã đóng của mình</b>, để <b>quyết định đúng giữa cầm tiền ngay hay an sinh dài hạn</b>.',
    formula: 'MBQTL ≈ <b>Lương đóng × Hệ số trượt giá</b> (auto ước tính theo số năm đóng)<br>Mức hưởng = <b>(1,5 × MBQTL × Năm trước 2014)</b> + <b>(2 × MBQTL × Năm từ 2014)</b><br><em>MBQTL = Mức bình quân tiền lương tháng đóng BHXH đã điều chỉnh CPI. Tháng lẻ 01-06 = nửa năm · 07-11 = 1 năm.</em>',
    resultLabel: 'BHXH 1 LẦN ƯỚC TÍNH',
    fields: [
      { id: 'monthlySalary',  label: 'Mức lương đóng BHXH/tháng (hiện tại)', type: 'money', min: 1500000, max: 50600000, step: 100000, value: 10000000, chips: [5000000, 10000000, 20000000] },
      { id: 'yearsPre2014',   label: 'Số năm đóng trước 2014',                type: 'stepper', min: 0, max: 25, step: 0.5, value: 0,  unit: 'năm', chips: [0, 5, 10, 15, 20] },
      { id: 'yearsPost2014',  label: 'Số năm đóng từ 2014',                   type: 'stepper', min: 0, max: 15, step: 0.5, value: 10, unit: 'năm', chips: [0, 5, 10, 15] },
      { id: 'joinedAfter725', label: 'Thời điểm tham gia BHXH lần đầu',       type: 'select', options: [
        {value:0, label:'Trước 01/07/2025 (được rút 1 lần)'},
        {value:1, label:'Sau 01/07/2025 (không được rút, trừ trường hợp đặc biệt)'},
      ], value: 0 },
    ],
    compute(v) {
      const totalYears = v.yearsPre2014 + v.yearsPost2014;
      // Auto-estimate MBQTL: lương quá khứ thấp hơn hiện tại, đã được CPI bù một phần.
      // Empirical factor: 1.0 (≤1 năm) giảm xuống 0.7 (≥20 năm).
      const mbqtlFactor = Math.max(0.7, 1 - totalYears * 0.015);
      const mbqtl = v.monthlySalary * mbqtlFactor;
      const pre = 1.5 * mbqtl * v.yearsPre2014;
      const post = 2 * mbqtl * v.yearsPost2014;
      const total = pre + post;
      let pensionRate = 0;
      if (totalYears >= 15) {
        pensionRate = Math.min(75, 45 + Math.max(0, totalYears - 15) * 2) / 100;
      }
      const monthlyPension = pensionRate * mbqtl;
      const restricted = v.joinedAfter725 === 1;
      let insight;
      if (restricted) {
        insight = `Tham gia BHXH sau 01/07/2025 không được rút 1 lần (trừ trường hợp đặc biệt: bệnh nặng, suy giảm KNLĐ ≥81%, đủ tuổi hưu mà chưa đủ 15 năm). Tiếp tục đóng để nhận lương hưu ${pensionRate > 0 ? '~' + fmt(monthlyPension) + '/tháng' : '(cần đủ 15 năm)'}.`;
      } else if (monthlyPension > 0) {
        const breakEvenMonths = Math.round(total / monthlyPension);
        const breakEvenYears = (breakEvenMonths / 12).toFixed(1);
        insight = `Rút 1 lần được ${fmt(total)}. Nếu giữ tiếp để hưởng lương hưu (~${fmt(monthlyPension)}/tháng), sau ${breakEvenMonths} tháng (${breakEvenYears} năm) nhận hưu, tổng tiền hưu sẽ vượt khoản 1 lần này.`;
      } else {
        insight = `Bạn chưa đủ 15 năm đóng để hưởng lương hưu. Có thể rút ${fmt(total)} hoặc đóng tiếp đến đủ 15 năm để có lương hưu suốt đời.`;
      }
      return {
        result: fmt(total),
        details: [
          { label: `MBQTL ước tính (hệ số ${mbqtlFactor.toFixed(2)}×)`, value: fmt(mbqtl) + '/tháng' },
          { label: 'Phần trước 2014 (1,5 × MBQTL)',                       value: fmt(pre) },
          { label: 'Phần từ 2014 (2 × MBQTL)',                            value: fmt(post) },
          { label: 'Tổng số năm đóng',                                      value: totalYears.toFixed(1) + ' năm' },
          { label: 'Lương hưu nếu giữ tiếp',                                value: pensionRate > 0 ? fmt(monthlyPension) + '/tháng' : 'Chưa đủ 15 năm' },
        ],
        insight,
      };
    },
  },
  {
    id: 'tro-cap-that-nghiep', name: 'Trợ Cấp Thất Nghiệp', category: 'Insurance', abbr: 'TCTN',
    intent: 'Informational intent', panel: 'generic',
    description: 'Ước tính trợ cấp thất nghiệp theo bình quân lương đóng BHTN 6 tháng cuối, số tháng đã đóng và mức trần theo vùng lương.',
    jtbd: 'Tôi muốn biết nếu nghỉ việc bây giờ thì mình có được hưởng trợ cấp thất nghiệp không, mỗi tháng nhận bao nhiêu và nhận trong bao lâu, để chủ động dòng tiền trong giai đoạn chuyển việc.',
    formula: 'Mức hưởng tháng = <b>60% × Bình quân lương đóng BHTN 6 tháng cuối</b>, nhưng không vượt <b>5 × mức lương tối thiểu vùng</b> hoặc <b>5 × lương cơ sở</b><br>Thời gian hưởng: <b>12-36 tháng đóng = 3 tháng</b>, sau đó <b>cứ thêm đủ 12 tháng = +1 tháng</b>, tối đa <b>12 tháng</b>',
    resultLabel: 'TRỢ CẤP THÁNG ƯỚC TÍNH',
    fields: [
      { id: 'unemploymentAvgSalary', label: 'Bình quân lương đóng BHTN 6 tháng cuối', type: 'money', min: 3000000, max: 100000000, step: 500000, value: 18000000, chips: [10000000, 18000000, 30000000] },
      { id: 'unemploymentMonths', label: 'Tổng số tháng đã đóng BHTN', type: 'stepper', min: 0, max: 180, step: 1, value: 48, unit: 'tháng', chips: [12, 36, 60, 120] },
      { id: 'unemploymentSystem', label: 'Nhóm người lao động', type: 'select', options: [
        { value: 'regional', label: 'Doanh nghiệp hưởng trần theo lương tối thiểu vùng' },
        { value: 'public', label: 'Khối nhà nước hưởng trần theo lương cơ sở' },
      ], value: 'regional' },
      { id: 'unemploymentRegion', label: 'Vùng lương tối thiểu', type: 'select', options: [
        { value: 1, label: 'Vùng I' },
        { value: 2, label: 'Vùng II' },
        { value: 3, label: 'Vùng III' },
        { value: 4, label: 'Vùng IV' },
      ], value: 1, condition: { field: 'unemploymentSystem', value: 'regional' } },
    ],
    compute(v) {
      if (v.unemploymentMonths < 12) {
        return {
          result: 'Chưa đủ ĐK',
          details: [
            { label: 'Số tháng đã đóng', value: `${v.unemploymentMonths} tháng` },
            { label: 'Điều kiện tối thiểu', value: 'Cần từ 12 tháng đóng BHTN' },
          ],
          insight: 'Chưa đủ điều kiện hưởng trợ cấp thất nghiệp. Cần ít nhất 12 tháng đóng BHTN trong giai đoạn luật quy định để nộp hồ sơ.',
        };
      }

      const regionalCaps = { 1: 5310000, 2: 4730000, 3: 4140000, 4: 3700000 };
      const baseSalary = 2340000;
      const capSource = v.unemploymentSystem === 'regional'
        ? 5 * regionalCaps[v.unemploymentRegion || 1]
        : 5 * baseSalary;
      const monthlyBenefit = Math.min(v.unemploymentAvgSalary * 0.6, capSource);
      const durationMonths = Math.min(12, v.unemploymentMonths <= 36 ? 3 : 3 + Math.floor((v.unemploymentMonths - 36) / 12));
      const totalBenefit = monthlyBenefit * durationMonths;
      const capLabel = v.unemploymentSystem === 'regional'
        ? `5 × lương tối thiểu vùng ${v.unemploymentRegion}`
        : '5 × lương cơ sở';
      const capped = monthlyBenefit < v.unemploymentAvgSalary * 0.6;

      return {
        result: fmt(monthlyBenefit),
        details: [
          { label: '60% lương bình quân', value: fmt(v.unemploymentAvgSalary * 0.6) + '/tháng' },
          { label: `Trần áp dụng (${capLabel})`, value: fmt(capSource) + '/tháng' },
          { label: 'Số tháng được hưởng', value: `${durationMonths} tháng` },
          { label: 'Tổng trợ cấp ước tính', value: fmt(totalBenefit) },
        ],
        insight: capped
          ? `Mức hưởng bị chặn bởi trần ${capLabel}. Bạn dự kiến nhận ${fmt(monthlyBenefit)}/tháng trong ${durationMonths} tháng.`
          : `Bạn dự kiến nhận ${fmt(monthlyBenefit)}/tháng trong ${durationMonths} tháng, tổng khoảng ${fmt(totalBenefit)} nếu hồ sơ đủ điều kiện và nộp đúng hạn.`,
      };
    },
  },
  {
    id: 'tiet-kiem', name: 'Tiết Kiệm', category: 'Savings', abbr: 'TK',
    intent: 'Informational intent', panel: 'generic',
    description: 'Tính tiền nhận khi gửi 1 lần hoặc giá trị tích lũy khi gửi đều hàng tháng theo bảng lãi suất niêm yết của Tiết Kiệm Online MoMo ngày 23/6/2026.',
    jtbd: 'Tôi có tiền nhàn rỗi và muốn biết <b>nên gửi 1 lần hay gửi đều hàng tháng thì nhận được bao nhiêu</b>, để <b>so sánh phương án tích lũy trước khi quyết định giữ tiền, gửi MoMo hay đầu tư kênh khác</b>.',
    formula: 'Gửi 1 lần: <b>Lãi = Gốc × Lãi suất/năm × Kỳ hạn ÷ 12</b><br>Tổng nhận = <b>Gốc + Lãi</b><br>Gửi đều hàng tháng: <b>FV = M × ((1 + mr)<sup>n</sup> - 1) / mr</b><br><em>mr = lãi suất tháng, n = số tháng tích lũy. Bảng lãi suất niêm yết ngày 23/6/2026.</em>',
    resultLabel: 'NHẬN KHI ĐÁO HẠN',
    fields: [
      { id: 'savingMode', label: 'Hình thức gửi', type: 'pills', value: 'single', ui: { valueType: 'enum', precision: 'exact', decisionMode: 'compare' }, options: [
        { value: 'single', label: 'Gửi 1 lần', note: 'Lãi đơn theo kỳ hạn' },
        { value: 'monthly', label: 'Gửi đều', note: 'Tích lũy hàng tháng' },
      ] },
      { id: 'principal', label: 'Số tiền gửi', type: 'money', min: 1000000, max: 2000000000, step: 1000000, value: 100000000, chips: [10000000, 100000000, 200000000] },
      { id: 'term', label: 'Kỳ hạn áp dụng', type: 'select', options: [
        { value: 1, label: '1 tháng · 4,75%/năm' },
        { value: 2, label: '2 tháng · 4,75%/năm' },
        { value: 3, label: '3 tháng · 4,75%/năm' },
        { value: 4, label: '4 tháng · 4,75%/năm' },
        { value: 5, label: '5 tháng · 4,75%/năm' },
        { value: 6, label: '6 tháng · 7,00%/năm' },
        { value: 9, label: '9 tháng · 7,00%/năm' },
        { value: 12, label: '12 tháng · 7,00%/năm' },
        { value: 24, label: '24 tháng · 7,20%/năm' },
      ], value: 12 },
      { id: 'horizonYears', label: 'Thời gian tích lũy', type: 'select', value: 10, condition: { field: 'savingMode', value: 'monthly' }, options: [
        { value: 1, label: '1 năm' },
        { value: 5, label: '5 năm' },
        { value: 10, label: '10 năm' },
        { value: 15, label: '15 năm' },
        { value: 20, label: '20 năm' },
      ] },
    ],
    compute(v) {
      const SAVINGS_RATES = {
        1: 4.75,
        2: 4.75,
        3: 4.75,
        4: 4.75,
        5: 4.75,
        6: 7.0,
        9: 7.0,
        12: 7.0,
        24: 7.2,
      };
      const rate = SAVINGS_RATES[v.term] || 4.75;
      if (v.savingMode === 'monthly') {
        const totalMonths = (Number(v.horizonYears) || 1) * 12;
        const monthlyRate = rate / 100 / 12;
        const futureValue = monthlyRate > 0
          ? v.principal * ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate)
          : v.principal * totalMonths;
        const totalContributed = v.principal * totalMonths;
        const totalInterest = futureValue - totalContributed;
        return {
          resultLabel: 'GIÁ TRỊ TÍCH LŨY ƯỚC TÍNH',
          result: fmt(futureValue),
          details: [
            { label: 'Gửi mỗi tháng', value: fmt(v.principal) },
            { label: 'Kỳ hạn áp dụng', value: `${v.term} tháng` },
            { label: 'Lãi suất niêm yết', value: `${rate.toFixed(2)}%/năm` },
            { label: 'Tổng tiền đã gửi', value: fmt(totalContributed) },
            { label: 'Lãi tích lũy', value: fmt(totalInterest) },
          ],
          insight: `Nếu gửi đều ${fmt(v.principal)}/tháng trong ${v.horizonYears} năm và tái gửi theo mức ${rate.toFixed(2)}%/năm, bạn tích lũy khoảng ${fmt(futureValue)}.`,
        };
      }
      const interest = v.principal * rate / 100 / 12 * v.term;
      return {
        resultLabel: 'NHẬN KHI ĐÁO HẠN',
        result: fmt(v.principal + interest),
        details: [
          { label: 'Tiền gốc', value: fmt(v.principal) },
          { label: 'Kỳ hạn', value: `${v.term} tháng` },
          { label: 'Lãi suất niêm yết', value: `${rate.toFixed(2)}%/năm` },
          { label: 'Lãi nhận', value: fmt(interest) },
          { label: 'Thuế TNCN', value: 'Miễn với lãi tiền gửi cá nhân tại TCTD' },
        ],
        insight: `Với kỳ hạn ${v.term} tháng theo bảng niêm yết ngày 23/6/2026, khoản ${fmt(v.principal)} dự kiến sinh lãi ${fmt(interest)}.`,
      };
    },
  },
  {
    id: 'nuoi-con', name: 'Kế Hoạch Nuôi Con', category: 'Savings', abbr: 'NC',
    intent: 'Informational intent', panel: 'generic',
    description: 'Ước tính chi phí nuôi dạy con đến 18 tuổi và số tiền cần tích lũy hằng tháng cho quỹ đại học.',
    jtbd: 'Tôi chuẩn bị sinh con hoặc có con nhỏ và muốn biết dự toán tổng chi phí để nuôi con lớn lên. Cần biết ngay <b>tổng số tiền cần thiết đến khi con 18 tuổi và số tiền tích lũy mỗi tháng cho con đi đại học</b>, để <b>lập kế hoạch ngân sách gia đình hợp lý</b>.',
    formula: 'Tổng chi phí = <b>Tích lũy chi phí sinh hoạt & học tập hàng năm</b> (đã tính lạm phát giáo dục 5%/năm).<br>Tích lũy đại học/tháng = <b>Dự phòng 4 năm học phí khi con 18 tuổi</b> (lợi suất đầu tư tích lũy giả định 6%/năm).',
    resultLabel: 'TỔNG CHI PHÍ ĐẾN 18 TUỔI',
    fields: [
      { id: 'location', label: 'Nơi sinh sống', type: 'select', options: [
        {value:'city',label:'Thành phố lớn (Hà Nội, TP.HCM...)'},
        {value:'other',label:'Tỉnh, thành phố khác'},
      ], value: 'city' },
      { id: 'education', label: 'Lộ trình học tập mong muốn', type: 'select', options: [
        {value:'public',label:'Trường công lập (Cơ bản)'},
        {value:'private',label:'Trường tư thục / Chất lượng cao'},
        {value:'international',label:'Trường quốc tế (Cao cấp)'},
      ], value: 'private' },
      { id: 'age', label: 'Tuổi hiện tại của con', type: 'range', min: 0, max: 18, step: 1, value: 1, unit: 'tuổi', chips: [1, 3, 6, 12, 15] },
      { id: 'customConfig', label: 'Tùy chỉnh chi tiết số liệu', type: 'pills', options: [
        {value: 'no', label: 'Mặc định (đề xuất)'},
        {value: 'yes', label: 'Tùy biến chi phí'}
      ], value: 'no' },
      { id: 'customBase', label: 'Chi phí sinh hoạt của con/tháng', type: 'money', min: 0, max: 50000000, step: 500000, value: 0, chips: [2000000, 4000000, 8000000], condition: { field: 'customConfig', value: 'yes' } },
      { id: 'customEdu', label: 'Học phí trung bình/tháng', type: 'money', min: 0, max: 100000000, step: 1000000, value: 0, chips: [1500000, 6000000, 20000000], condition: { field: 'customConfig', value: 'yes' } },
      { id: 'customReturn', label: 'Lợi suất đầu tư tích lũy/năm', type: 'range', min: 1, max: 15, step: 0.5, value: 6, unit: '%', chips: [4, 6, 8, 10, 12], condition: { field: 'customConfig', value: 'yes' } },
    ],
    compute(v) {
      const location = v.location;
      const education = v.education;
      const age = v.age;
      
      let baseCost = v.customConfig === 'yes' ? v.customBase : 0;
      let eduCost = v.customConfig === 'yes' ? v.customEdu : 0;
      
      if (baseCost <= 0) {
        baseCost = (location === 'city') ? 4000000 : 2500000;
      }
      
      if (eduCost <= 0) {
        if (location === 'city') {
          if (education === 'public') eduCost = 1500000;
          else if (education === 'private') eduCost = 6000000;
          else eduCost = 20000000;
        } else {
          if (education === 'public') eduCost = 800000;
          else if (education === 'private') eduCost = 3000000;
          else eduCost = 10000000;
        }
      }
      
      const returnRate = (v.customConfig === 'yes' ? v.customReturn : 6) / 100;
      const monthlyCost = baseCost + eduCost;
      const yearsLeft = Math.max(0, 18 - age);
      
      let totalCost = 0;
      const inflation = 0.05;
      for (let t = 0; t < yearsLeft; t++) {
        totalCost += (monthlyCost * 12) * Math.pow(1 + inflation, t);
      }
      
      const uniCostToday = eduCost * 12 * 4;
      const uniCostFuture = uniCostToday * Math.pow(1 + inflation, yearsLeft);
      
      let monthlySave = 0;
      if (yearsLeft > 0) {
        const r = returnRate / 12;
        const N = yearsLeft * 12;
        monthlySave = r === 0 ? uniCostFuture / N : uniCostFuture * r / (Math.pow(1 + r, N) - 1);
      }
      
      return {
        result: fmtM(totalCost),
        details: [
          { label: 'Chi phí cơ bản/tháng', value: fmt(baseCost) },
          { label: 'Học phí dự kiến/tháng', value: fmt(eduCost) },
          { label: 'Tổng quỹ ĐH khi 18 tuổi', value: fmtM(uniCostFuture) },
          { label: 'Tiền tích lũy ĐH/tháng', value: fmt(monthlySave) },
        ],
        insight: yearsLeft > 0 ? `💡 Cần tích lũy khoảng <b>${fmt(monthlySave)}</b>/tháng vào danh mục đầu tư (lợi suất kỳ vọng ${(returnRate*100).toFixed(1)}%/năm) từ hôm nay để chuẩn bị sẵn quỹ đại học ${fmtM(uniCostFuture)} cho con.` : '💡 Con đã đủ tuổi hoặc lớn hơn 18 tuổi. Hãy bắt đầu lập kế hoạch tài chính cho tương lai tự lập của con.',
      };
    },
  },
  {
    id: 'luong-gross-net', name: 'Lương Gross → Net', category: 'Tax', abbr: 'G→N',
    intent: 'Transactional intent', panel: 'generic',
    description: 'Tính lương NET nhận về từ lương Gross theo Luật TNCN 109/2025/QH15 · NQ 110/2025/UBTVQH15 · Luật BHXH 41/2024/QH15 · NĐ 293/2025/NĐ-CP. Hỗ trợ biểu thuế 5 bậc 2026 và 7 bậc cũ (≤2025), 4 vùng lương.',
    jtbd: 'Tôi nhận được offer lương Gross và cần biết <b>thực nhận bao nhiêu mỗi tháng</b> sau khi trừ BHXH/BHYT/BHTN và thuế TNCN, để <b>so sánh các offer và lập kế hoạch chi tiêu</b>.',
    formula: 'NET = Gross − BHXH (8%) − BHYT (1,5%) − BHTN (1%) − Thuế TNCN<br>Trần BHXH/BHYT: 50,600,000đ · Trần BHTN: theo vùng (Vùng I: 106,200,000đ)<br><em>Biểu thuế 2026 (5 bậc): ≤10tr 5% · 10-30tr 10% · 30-60tr 20% · 60-100tr 30% · &gt;100tr 35%<br>Giảm trừ 2026: bản thân 15,5tr + NPT 6,2tr/người</em>',
    resultLabel: 'LƯƠNG NET NHẬN VỀ',
    fields: [
      { id: 'grossSalary',  label: 'Lương Gross/tháng', type: 'money', min: 1000000, max: 500000000, step: 500000, value: 20000000, chips: [10000000, 20000000, 50000000, 100000000] },
      { id: 'dependents',   label: 'Số người phụ thuộc (NPT)', type: 'select', options: [
        {value:0,label:'0 người'},{value:1,label:'1 người'},
        {value:2,label:'2 người'},{value:3,label:'3 người'},{value:4,label:'4 người trở lên'},
      ], value: 0 },
      { id: 'salaryBh',     label: 'Lương đóng BH/tháng (để trống nếu = Gross)', type: 'money', min: 0, max: 500000000, step: 500000, value: 0, chips: [0, 5000000, 10000000, 15000000] },
      { id: 'vung',         label: 'Vùng lương', type: 'select', options: [
        {value:'I',   label:'Vùng I — HCM, Hà Nội (106,200,000đ)'},
        {value:'II',  label:'Vùng II (94,600,000đ)'},
        {value:'III', label:'Vùng III (82,800,000đ)'},
        {value:'IV',  label:'Vùng IV (60,000,000đ)'},
      ], value: 'I' },
      { id: 'taxSchedule',  label: 'Biểu thuế áp dụng', type: 'select', options: [
        {value:'2026',    label:'2026 — 5 bậc (từ 01/01/2026)'},
        {value:'pre2026', label:'Trước 2026 — 7 bậc (≤31/12/2025)'},
      ], value: '2026' },
    ],
    compute(v) {
      const gross = v.grossSalary;
      const npt   = Number(v.dependents) || 0;
      const bhxhCap = 50600000;
      const bhtnCapMap = { I: 106200000, II: 94600000, III: 82800000, IV: 60000000 };
      const bhtnCap = bhtnCapMap[v.vung] || 106200000;
      const salaryBh = (v.salaryBh > 0 && v.salaryBh < gross) ? v.salaryBh : gross;

      // BH
      const bhxh = Math.floor(Math.min(salaryBh, bhxhCap) * 0.08 / 1000) * 1000;
      const bhyt = Math.floor(Math.min(salaryBh, bhxhCap) * 0.015 / 1000) * 1000;
      const bhtn = Math.floor(Math.min(salaryBh, bhtnCap) * 0.01 / 1000) * 1000;
      const totalBh = bhxh + bhyt + bhtn;

      // Giảm trừ gia cảnh
      const is2026 = v.taxSchedule !== 'pre2026';
      const personalDeduct = is2026 ? 15500000 : 11000000;
      const depDeduct      = is2026 ? 6200000  : 4400000;
      const giamTruGC      = personalDeduct + npt * depDeduct;

      // Thu nhập tính thuế
      const tntt = Math.max(0, gross - totalBh - giamTruGC);

      // Thuế TNCN
      let tax = 0;
      if (is2026) {
        // 5 bậc 2026
        if      (tntt <= 10e6)  tax = tntt * 0.05;
        else if (tntt <= 30e6)  tax = tntt * 0.10 - 500000;
        else if (tntt <= 60e6)  tax = tntt * 0.20 - 3500000;
        else if (tntt <= 100e6) tax = tntt * 0.30 - 9500000;
        else                    tax = tntt * 0.35 - 14500000;
      } else {
        // 7 bậc cũ
        if      (tntt <= 5e6)   tax = tntt * 0.05;
        else if (tntt <= 10e6)  tax = tntt * 0.10 - 250000;
        else if (tntt <= 18e6)  tax = tntt * 0.15 - 750000;
        else if (tntt <= 32e6)  tax = tntt * 0.20 - 1650000;
        else if (tntt <= 52e6)  tax = tntt * 0.25 - 3250000;
        else if (tntt <= 80e6)  tax = tntt * 0.30 - 5850000;
        else                    tax = tntt * 0.35 - 9850000;
      }
      tax = Math.max(0, Math.floor(tax / 1000) * 1000);

      const net = gross - totalBh - tax;
      const effectiveRate = gross > 0 ? (tax / gross * 100).toFixed(1) : 0;
      const bhDiff = gross - salaryBh;

      const details = [];
      if (bhDiff > 0) {
        details.push({ label: 'Lương Gross', value: fmt(gross) });
        details.push({ label: 'Lương đóng BH (thấp hơn Gross)', value: fmt(salaryBh) });
      }
      details.push(
        { label: 'BHXH (8%)',                              value: `- ${fmt(bhxh)}` },
        { label: 'BHYT (1,5%)',                            value: `- ${fmt(bhyt)}` },
        { label: `BHTN (1% · Vùng ${v.vung})`,            value: `- ${fmt(bhtn)}` },
        { label: 'Tổng đóng bảo hiểm',                    value: fmt(totalBh) },
        { label: 'Giảm trừ gia cảnh (BT + NPT)',          value: fmt(giamTruGC) },
        { label: 'Thu nhập tính thuế (TNTT)',              value: fmt(tntt) },
        { label: `Thuế TNCN (${is2026 ? '5 bậc 2026' : '7 bậc cũ'})`, value: `- ${fmt(tax)}` },
      );

      const insight = tax === 0
        ? `Thu nhập tính thuế ${fmt(tntt)} chưa vượt bậc 1 → thuế = 0. Lương NET = Gross ${fmt(gross)} − BH ${fmt(totalBh)} = ${fmt(net)}.`
        : `Tỷ lệ thuế thực ${effectiveRate}% trên Gross. Mỗi đồng tăng lương trên ${is2026 ? fmt(tntt) : fmt(tntt)} đang chịu thuế suất ${
            is2026
              ? (tntt <= 10e6 ? '5%' : tntt <= 30e6 ? '10%' : tntt <= 60e6 ? '20%' : tntt <= 100e6 ? '30%' : '35%')
              : (tntt <= 5e6 ? '5%' : tntt <= 10e6 ? '10%' : tntt <= 18e6 ? '15%' : tntt <= 32e6 ? '20%' : tntt <= 52e6 ? '25%' : tntt <= 80e6 ? '30%' : '35%')
          } biên.`;

      return { result: fmt(net), details, insight };
    },
  },
  {
    id: 'thue-tncn', name: 'Thuế TNCN', category: 'Tax', abbr: 'TC',
    intent: 'Informational intent', panel: 'generic',
    description: 'Tính thuế TNCN cho 4 loại thu nhập theo Luật Thuế TNCN sửa đổi 2025: Lương từ HĐLĐ (biểu lũy tiến 5 bậc + giảm trừ gia cảnh 15,5tr/NPT 6,2tr), Cộng tác viên/Freelance (10% tại nguồn), Đầu tư vốn/Cổ tức (5% cố định), Trúng thưởng/Quà tặng (10% phần vượt 10tr).',
    jtbd: 'Tôi có thu nhập từ nhiều nguồn khác nhau (lương, freelance, cổ tức, trúng thưởng) và cần biết thuế cụ thể cho từng loại. Cần thấy ngay <b>cách tính thuế đúng theo loại thu nhập + tách rõ BHXH/BHYT/BHTN nếu là lương</b>, để <b>quản lý nghĩa vụ thuế chính xác và lập kế hoạch tài chính</b>.',
    formula: '<b>Lương HĐLĐ</b>: (Gross − BHXH 8% − BHYT 1,5% − BHTN 1% − 15,5tr − NPT × 6,2tr) × Biểu lũy tiến 5 bậc<br><b>CTV / Freelance ≥ 2tr</b>: Khấu trừ 10% tại nguồn<br><b>Đầu tư / Cổ tức</b>: 5% cố định, không giảm trừ<br><b>Trúng thưởng / Quà tặng</b>: 10% trên phần vượt 10tr<br><em>Trần đóng BH: BHXH/BHYT 50,6tr · BHTN 93,6tr (vùng I) · Bậc thuế: đến 10tr 5% · 10-30 10% · 30-60 20% · 60-100 30% · trên 100 35%</em>',
    resultLabel: 'THUẾ TNCN ƯỚC TÍNH',
    fields: [
      { id: 'incomeType', label: 'Loại thu nhập', type: 'select', options: [
        {value:'luong-hd',     label:'Lương từ HĐLĐ (biểu lũy tiến 5 bậc)'},
        {value:'ctv',          label:'CTV / Freelance (khấu trừ 10% tại nguồn)'},
        {value:'dau-tu',       label:'Đầu tư vốn / Cổ tức (5% cố định)'},
        {value:'trung-thuong', label:'Trúng thưởng / Quà tặng (10% vượt 10tr)'},
      ], value: 'luong-hd' },
      { id: 'grossSalary', label: 'Thu nhập/tháng', type: 'money', min: 1000000, max: 500000000, step: 500000, value: 20000000, chips: [10000000, 20000000, 50000000] },
      { id: 'salaryBh',    label: 'Lương đóng BH/tháng (HĐLĐ) - để trống nếu = lương gross', type: 'money', min: 0, max: 100000000, step: 500000, value: 0, chips: [0, 5000000, 10000000, 15000000], condition: { field: 'incomeType', value: 'luong-hd' } },
      { id: 'dependents',  label: 'Số người phụ thuộc', type: 'select', options: [
        {value:0,label:'0 người'},{value:1,label:'1 người'},
        {value:2,label:'2 người'},{value:3,label:'3 người'},
      ], value: 0, condition: { field: 'incomeType', value: 'luong-hd' } },
    ],
    compute(v) {
      const type = v.incomeType || 'luong-hd';
      const income = v.grossSalary;
      // ── Lương từ HĐLĐ
      if (type === 'luong-hd') {
        const bhxhCap = 50600000, bhtnCap = 106200000; // 20× lương cơ sở / 20× 5,310,000 vùng I (NĐ 293/2025/NĐ-CP)
        // Lương đóng BH: nếu user nhập > 0 và < lương gross, dùng giá trị đó; ngược lại dùng lương gross
        const salaryBh = (v.salaryBh > 0 && v.salaryBh < income) ? v.salaryBh : income;
        const bhDiff = income - salaryBh;
        const bhxh = Math.min(salaryBh, bhxhCap) * 0.08;
        const bhyt = Math.min(salaryBh, bhxhCap) * 0.015;
        const bhtn = Math.min(salaryBh, bhtnCap) * 0.01;
        const totalBh = bhxh + bhyt + bhtn;
        const personal = 15500000, depAmt = v.dependents * 6200000;
        const taxable = Math.max(0, income - totalBh - personal - depAmt);
        const brackets = [10e6, 20e6, 30e6, 40e6, Infinity];
        const rates    = [.05,  .10,  .20,  .30,  .35];
        let tax = 0, prev = 0;
        for (let i = 0; i < brackets.length; i++) {
          if (taxable <= prev) break;
          tax += Math.min(taxable - prev, brackets[i]) * rates[i];
          prev += brackets[i];
        }
        const net = income - totalBh - tax;
        const details = [];
        if (bhDiff > 0) {
          details.push(
            { label: 'Lương gross / tháng',          value: fmt(income) },
            { label: 'Lương đóng BH (HĐLĐ)',         value: fmt(salaryBh) },
            { label: 'Phần không đóng BH (phụ cấp/thưởng)', value: fmt(bhDiff) },
          );
        }
        details.push(
          { label: 'BHXH (8% × Lương BH)',         value: fmt(bhxh) },
          { label: 'BHYT (1,5% × Lương BH)',       value: fmt(bhyt) },
          { label: 'BHTN (1% × Lương BH)',         value: fmt(bhtn) },
          { label: 'Tổng đóng bảo hiểm',           value: fmt(totalBh) },
          { label: 'Giảm trừ gia cảnh (BT + NPT)', value: fmt(personal + depAmt) },
          { label: 'Thu nhập chịu thuế',           value: fmt(taxable) },
          { label: 'Lương NET nhận về',            value: fmt(net) },
        );
        const taxRatio = income > 0 ? (tax / income * 100).toFixed(1) : 0;
        const insight = bhDiff > 0
          ? `Lương đóng BH ${fmt(salaryBh)} thấp hơn lương gross ${fmt(income)} (chênh ${fmt(bhDiff)} là phụ cấp/thưởng). User đóng BH ít hơn (${fmt(totalBh)}) nhưng thuế cao hơn vì phần chênh không trừ BH trước thuế. Lương NET ${fmt(net)} · tỷ trọng thuế ${taxRatio}%.`
          : `Lương NET ${fmt(net)} sau khi đóng BH ${fmt(totalBh)} (BHXH 8% + BHYT 1,5% + BHTN 1%) và thuế ${fmt(tax)}. Tỷ trọng thuế ${taxRatio}% trên lương gross.`;
        return { result: fmt(tax), details, insight };
      }
      // ── CTV / Freelance
      if (type === 'ctv') {
        if (income < 2000000) {
          return {
            result: fmt(0),
            details: [
              { label: 'Thu nhập từng lần', value: fmt(income) },
              { label: 'Quy định',          value: '< 2 triệu/lần: miễn khấu trừ' },
              { label: 'Thực nhận',         value: fmt(income) },
            ],
            insight: 'Thu nhập từng lần dưới 2 triệu (không có HĐLĐ chính thức) không bị khấu trừ tại nguồn. Cuối năm có thể không cần khai báo nếu chỉ phát sinh < 100 triệu/năm.',
          };
        }
        const withheld = income * 0.10;
        return {
          result: fmt(withheld),
          details: [
            { label: 'Thu nhập từng lần',         value: fmt(income) },
            { label: 'Thuế suất',                 value: '10% (cố định tại nguồn)' },
            { label: 'Khấu trừ tại nguồn (10%)',  value: fmt(withheld) },
            { label: 'Thực nhận',                 value: fmt(income - withheld) },
          ],
          insight: 'HĐ dịch vụ/CTV ≥ 2tr/lần: tổ chức trả thu nhập khấu trừ 10% tại nguồn (Thông tư 111/2013/TT-BTC). Cuối năm quyết toán theo biểu lũy tiến nếu tổng thu nhập > giảm trừ - dùng tool Quyết Toán TNCN để biết được hoàn lại hay phải nộp thêm.',
        };
      }
      // ── Đầu tư vốn / Cổ tức
      if (type === 'dau-tu') {
        const tax = income * 0.05;
        return {
          result: fmt(tax),
          details: [
            { label: 'Thu nhập đầu tư',  value: fmt(income) },
            { label: 'Thuế suất',        value: '5% (cố định)' },
            { label: 'Thuế phải nộp',    value: fmt(tax) },
            { label: 'Thực nhận sau thuế', value: fmt(income - tax) },
          ],
          insight: 'Thu nhập từ đầu tư vốn (cổ tức, lợi tức trái phiếu doanh nghiệp, lãi từ vay vốn cá nhân) chịu thuế cố định 5%, khấu trừ tại nguồn - không tính theo biểu lũy tiến, không có giảm trừ gia cảnh. Lãi tiết kiệm tại NH thì được miễn thuế (Điều 4 Luật TNCN).',
        };
      }
      // ── Trúng thưởng / Quà tặng
      const exempt = 10000000;
      const taxable = Math.max(0, income - exempt);
      const tax = taxable * 0.10;
      return {
        result: fmt(tax),
        details: [
          { label: 'Giá trị nhận',           value: fmt(income) },
          { label: 'Miễn thuế (10tr đầu)',   value: fmt(Math.min(income, exempt)) },
          { label: 'Phần chịu thuế',         value: fmt(taxable) },
          { label: 'Thuế suất',              value: '10% (trên phần vượt)' },
          { label: 'Thực nhận sau thuế',     value: fmt(income - tax) },
        ],
        insight: income <= exempt
          ? 'Trúng thưởng / quà tặng dưới 10 triệu được miễn thuế TNCN hoàn toàn.'
          : `Trúng thưởng / quà tặng vượt 10 triệu: phần vượt chịu thuế 10%. Thường được khấu trừ tại nguồn bởi đơn vị trao thưởng. Áp dụng cho xổ số, casino, khuyến mại, quà tặng kèm điều kiện.`,
      };
    },
  },
  {
    id: 'quyet-toan-tncn', name: 'Quyết Toán TNCN', category: 'Tax', abbr: 'QT',
    intent: 'Transactional intent', panel: 'generic',
    description: 'Quyết toán thuế TNCN cuối năm theo Luật Thuế TNCN sửa đổi 2025 và NQ 110/2025/UBTVQH15: tính chênh lệch giữa thuế cả năm và thuế đã tạm đóng để biết phải nộp thêm hay được hoàn. Hạn nộp 30/04 năm sau.',
    jtbd: 'Đến kỳ quyết toán thuế cuối năm tôi không biết phải nộp thêm hay được hoàn lại. Cần biết ngay <b>tổng thuế cả năm và chênh lệch so với số đã tạm đóng</b>, để <b>chuẩn bị tiền nộp trước hạn 30/04 hoặc làm thủ tục hoàn thuế nếu nộp thừa</b>.',
    formula: 'Giảm trừ năm = <b>(15,5tr + NPT × 6,2tr) × 12</b><br>Thu nhập tính thuế = <b>Tổng lương − BHXH − Giảm trừ năm</b><br>Thuế cả năm = <b>Thu nhập tính thuế × Biểu lũy tiến 5 bậc theo năm</b><br>Chênh lệch = <b>Thuế cả năm − Thuế đã tạm đóng</b> <em>(dương = nộp thêm · âm = được hoàn)</em>',
    resultLabel: 'CHÊNH LỆCH QUYẾT TOÁN',
    fields: [
      { id: 'annualGross', label: 'Tổng thu nhập từ lương cả năm', type: 'money',  min: 60000000, max: 5000000000, step: 10000000, value: 240000000, chips: [180000000, 360000000, 600000000] },
      { id: 'annualBhxh',  label: 'Tổng BHXH/BHYT/BHTN đã đóng',   type: 'money',  min: 0, max: 200000000, step: 1000000, value: 25200000, chips: [12000000, 25200000, 50000000] },
      { id: 'annualDeps',  label: 'Số người phụ thuộc trung bình', type: 'select', options: [
        {value:0,label:'0 người'},{value:1,label:'1 người'},
        {value:2,label:'2 người'},{value:3,label:'3 người'},
      ], value: 0 },
      { id: 'annualPaid',  label: 'Thuế TNCN đã tạm đóng cả năm',  type: 'money',  min: 0, max: 500000000, step: 100000, value: 5000000, chips: [0, 5000000, 30000000] },
    ],
    compute(v) {
      const personalYear = 15500000 * 12;
      const depYear = v.annualDeps * 6200000 * 12;
      const taxable = Math.max(0, v.annualGross - v.annualBhxh - personalYear - depYear);
      // Biểu lũy tiến năm = biểu lũy tiến tháng × 12
      const brackets = [120e6, 240e6, 360e6, 480e6, Infinity];
      const rates    = [.05,   .10,   .20,   .30,   .35];
      let tax = 0, prev = 0;
      for (let i = 0; i < brackets.length; i++) {
        if (taxable <= prev) break;
        tax += Math.min(taxable - prev, brackets[i]) * rates[i];
        prev += brackets[i];
      }
      const balance = tax - v.annualPaid;
      const isRefund = balance < 0;
      const isEven = balance === 0;
      const insight = isEven
        ? 'Số thuế tạm đóng vừa đúng, không phát sinh nghĩa vụ nộp thêm hoặc được hoàn.'
        : isRefund
          ? `Nộp thừa ${fmt(Math.abs(balance))}. Làm thủ tục hoàn thuế qua thuedientu.gdt.gov.vn (mẫu 02/QTT-TNCN). Hạn nộp hồ sơ 30/04 năm sau, không bị phạt nếu chậm.`
          : `Phải nộp thêm ${fmt(balance)} trước 30/04 năm sau qua thuedientu.gdt.gov.vn (mẫu 02/QTT-TNCN). Quá hạn bị tính tiền chậm nộp 0,03%/ngày.`;
      return {
        result: (isEven ? 'Cân bằng' : (isRefund ? 'Hoàn ' : 'Nộp thêm ') + fmt(Math.abs(balance))),
        details: [
          { label: 'Giảm trừ gia cảnh cả năm', value: fmt(personalYear + depYear) },
          { label: 'Thu nhập chịu thuế', value: fmt(taxable) },
          { label: 'Thuế TNCN cả năm', value: fmt(tax) },
          { label: 'Đã tạm đóng cả năm', value: fmt(v.annualPaid) },
          { label: isRefund ? 'Được hoàn lại' : isEven ? 'Số dư' : 'Cần nộp thêm', value: fmt(Math.abs(balance)) },
        ],
        insight,
      };
    },
  },
  {
    id: 'thue-tndn-sme', name: 'Thuế TNDN SME', category: 'Tax', abbr: 'TD',
    intent: 'Transactional intent', panel: 'generic',
    description: 'Tính thuế TNDN cho doanh nghiệp nhỏ và vừa theo Luật Thuế TNDN 2025 (hiệu lực 01/10/2025): 15% (doanh thu ≤ 3 tỷ), 17% (3-50 tỷ), 20% (>50 tỷ). DN mới thành lập sau 01/10/2025 được miễn 3 năm đầu.',
    jtbd: 'Tôi vận hành SME hoặc hộ kinh doanh và cần dự trù thuế TNDN cuối năm. Cần biết ngay <b>thuế suất ưu đãi theo doanh thu và số thuế phải nộp năm nay</b>, để <b>lập kế hoạch dòng tiền và biết lợi nhuận thực sau thuế</b>.',
    formula: 'Thu nhập chịu thuế = <b>Doanh thu − Chi phí được trừ</b><br>Thuế suất: <b>15%</b> (DT ≤ 3 tỷ) &nbsp;·&nbsp; <b>17%</b> (3-50 tỷ) &nbsp;·&nbsp; <b>20%</b> (>50 tỷ)<br>Thuế TNDN = <b>Thu nhập chịu thuế × Thuế suất</b><br><em>DN mới thành lập sau 01/10/2025 được miễn thuế 3 năm đầu (Luật 67/2025/QH15)</em>',
    resultLabel: 'THUẾ TNDN PHẢI NỘP/NĂM',
    fields: [
      { id: 'tndnRevenue',  label: 'Doanh thu năm',          type: 'money',  min: 100000000, max: 200000000000, step: 100000000, value: 2000000000, chips: [1000000000, 3000000000, 30000000000] },
      { id: 'tndnExpenses', label: 'Chi phí được trừ',       type: 'money',  min: 0, max: 200000000000, step: 100000000, value: 1500000000, chips: [500000000, 1500000000, 20000000000] },
      { id: 'tndnStatus',   label: 'Tình trạng doanh nghiệp', type: 'select', options: [
        {value:0,label:'Đang hoạt động bình thường'},
        {value:1,label:'Mới thành lập sau 01/10/2025 (miễn 3 năm)'},
      ], value: 0 },
    ],
    compute(v) {
      const taxable = Math.max(0, v.tndnRevenue - v.tndnExpenses);
      let rate, rateLabel, segment;
      if (v.tndnRevenue <= 3e9) { rate = 0.15; rateLabel = '15%'; segment = 'SME nhỏ'; }
      else if (v.tndnRevenue <= 50e9) { rate = 0.17; rateLabel = '17%'; segment = 'SME vừa'; }
      else { rate = 0.20; rateLabel = '20%'; segment = 'DN lớn'; }
      const exempted = v.tndnStatus === 1;
      const tax = exempted ? 0 : taxable * rate;
      const profit = taxable - tax;
      const effective = taxable > 0 ? (tax / taxable * 100).toFixed(2) + '%' : '0%';
      const saving = v.tndnRevenue <= 3e9 ? taxable * 0.05 : v.tndnRevenue <= 50e9 ? taxable * 0.03 : 0;
      const insight = exempted
        ? `DN mới thành lập sau 01/10/2025 được miễn thuế TNDN 3 năm đầu theo Luật 67/2025/QH15. Mức ${rateLabel} (${segment}) sẽ áp dụng từ năm thứ 4. Lưu hồ sơ chứng nhận SME tại Cục Thuế để được hưởng ưu đãi.`
        : v.tndnRevenue <= 50e9
          ? `${segment} hưởng thuế suất ưu đãi ${rateLabel}. Tiết kiệm ${fmt(saving)} so với thuế chuẩn 20%.`
          : `${segment} áp dụng thuế suất chuẩn 20%. Cân nhắc tách công ty con để các đơn vị nhỏ hơn được hưởng ưu đãi SME nếu phù hợp với chiến lược kinh doanh.`;
      return {
        result: fmt(tax),
        details: [
          { label: 'Thu nhập chịu thuế', value: fmt(taxable) },
          { label: 'Thuế suất áp dụng', value: `${rateLabel} (${segment})` },
          { label: 'Lợi nhuận sau thuế', value: fmt(profit) },
          { label: 'Tỷ suất thuế hiệu dụng', value: effective },
        ],
        insight,
      };
    },
  },
  {
    id: 'chung-chi-quy', name: 'Chứng Chỉ Quỹ', category: 'Investment', abbr: 'CCQ',
    intent: 'Informational intent', panel: 'generic',
    description: 'Mô phỏng giá trị đầu tư định kỳ vào chứng chỉ quỹ theo lợi suất giả định.',
    jtbd: 'Tôi muốn bắt đầu đầu tư định kỳ vào chứng chỉ quỹ nhưng không rõ sau X năm sẽ có bao nhiêu. Cần thấy ngay <b>giá trị tài khoản kỳ vọng theo lợi suất và thời gian đầu tư</b>, để <b>biết bao lâu thì đạt mục tiêu tài chính và có nên DCA hàng tháng hay không</b>.',
    formula: 'FV = <b>PMT × [(1 + r)ⁿ − 1] ÷ r</b><br><em>PMT = số tiền đầu tư định kỳ/tháng &nbsp;·&nbsp; r = lợi suất/tháng &nbsp;·&nbsp; n = số tháng</em>',
    resultLabel: 'GIÁ TRỊ SAU ĐẦU TƯ',
    fields: [
      { id: 'monthly',      label: 'Đầu tư định kỳ/tháng', type: 'money',  min: 100000, max: 50000000, step: 100000, value: 2000000, chips: [1000000, 2000000, 5000000] },
      { id: 'annualReturn', label: 'Lợi suất kỳ vọng/năm', type: 'range',  min: 5, max: 20, step: 0.5, value: 12, unit: '%', chips: [8, 12, 15, 18] },
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
    id: 'ci-care',
    name: 'MoMoCare BHN',
    category: 'Insurance',
    abbr: 'CI',
    panel: 'ci-care',
    intent: 'Transactional intent',
    description: 'Tính chi trả thực tế của MoMoCare | Bảo hiểm Sức khỏe+ (Chubb Life) khi gặp một trong 37 bệnh hiểm nghèo. Nhập chi phí điều trị dự kiến — tool tính sau đồng chi trả 20% và áp hạn mức từng quyền lợi.',
    jtbd: 'Tôi vừa được chẩn đoán bệnh hiểm nghèo và cần biết ngay <b>MoMoCare sẽ chi trả được bao nhiêu</b>, để <b>biết phần tôi phải tự lo và lập kế hoạch tài chính cho đợt điều trị</b>.',
  },
  {
    id: 'gold',  name: 'Giá Vàng', category: 'Investment', abbr: 'AU',  panel: 'gold',
  },
  {
    id: 'stock', name: 'Chứng Khoán',        category: 'Investment', abbr: 'CK',  panel: 'stock',
  },
  {
    id: 'lai-suat', name: 'Lãi Suất Ngân Hàng', category: 'Savings', abbr: 'LS', panel: 'bank-rate',
  },
  {
    id: 'ty-gia',   name: 'Tỷ Giá',              category: 'FX',      abbr: 'FX', panel: 'fx',
  },
  {
    id: 'fx-compare', name: 'So Sánh Tỷ Giá NH', category: 'FX',     abbr: 'CMP', panel: 'fx-compare',
  },
  {
    id: 'travel-budget', name: 'Budget Du Lịch', category: 'FX',     abbr: 'TB',  panel: 'travel-budget',
  },
  {
    id: 'kieu-hoi', name: 'Kiều Hối',            category: 'FX',      abbr: 'KH', panel: 'kieu-hoi',
  },
  {
    id: 'chi-phi-di-lai', name: 'Chi Phí Đi Lại', category: 'Phương tiện', abbr: 'KM',
    intent: 'Informational intent', panel: 'generic', ui: 'calculator-product',
    description: 'Ước tính chi phí đi lại theo quãng đường, số ngày di chuyển và loại phương tiện đang dùng.',
    jtbd: 'Tôi muốn biết mình đang tốn <b>bao nhiêu tiền cho việc đi lại mỗi ngày và mỗi tháng</b> theo số km thực tế, để quyết định có nên đổi phương tiện, đổi lộ trình hay điều chỉnh ngân sách di chuyển.',
    formula: 'Chi phí năng lượng/tháng = <b>Km mỗi ngày × Số ngày di chuyển × Chi phí/km</b><br>Tổng chi phí = <b>Chi phí năng lượng + Phí gửi xe</b>',
    resultLabel: 'CHI PHÍ ĐI LẠI MỖI THÁNG',
    ctaText: 'Khám phá thêm tiện ích Phương tiện trên MoMo',
    disclaimer: 'Chi phí/km dùng giả định tham chiếu theo giá E10 RON 95-III = 22.330 đ/lít và điện sinh hoạt/sạc phổ biến = 3.500 đ/kWh. Chưa gồm khấu hao, bảo dưỡng và cầu đường.',
    fields: [
      { id: 'commuteVehicle', label: 'Loại phương tiện', type: 'select-items', ui: { valueType: 'enum', precision: 'exact', decisionMode: 'compare', compareOptions: true, optionCount: 4 }, options: [
        { value: 'motorbike-gas', label: 'Xe máy xăng', note: '~540 đ/km' },
        { value: 'car-gas', label: 'Ô tô xăng', note: '~1.675 đ/km' },
        { value: 'motorbike-ev', label: 'Xe máy điện', note: '~88 đ/km' },
        { value: 'car-ev', label: 'Ô tô điện', note: '~525 đ/km' },
      ], value: 'motorbike-gas', tooltip: 'Chọn phương tiện bạn đang dùng thường xuyên nhất để hệ thống áp dụng mức tiêu hao tham chiếu trên mỗi km.' },
      { id: 'commuteKmPerDay', label: 'Quãng đường đi mỗi ngày', type: 'range', min: 2, max: 250, step: 1, value: 24, unit: 'km', chips: [10, 24, 50, 100] },
      { id: 'commuteDays', label: 'Số ngày di chuyển/tháng', type: 'range', min: 4, max: 31, step: 1, value: 22, unit: 'ngày', chips: [12, 22, 26, 30] },
      { id: 'parkingPerDay', label: 'Phí gửi xe mỗi ngày', type: 'money', min: 0, max: 500000, step: 1000, value: 5000, chips: [0, 5000, 10000, 20000], tooltip: 'Gồm phí gửi xe tại nơi làm việc, chung cư, trung tâm thương mại hoặc các điểm dừng lặp lại hằng ngày.' },
    ],
    compute(v) {
      const profiles = {
        'motorbike-gas': { name: 'Xe máy xăng', costPerKm: 22330 / 42, note: 'Tiêu hao giả định 42 km/lít' },
        'car-gas': { name: 'Ô tô xăng', costPerKm: 22330 * 7.5 / 100, note: 'Tiêu hao giả định 7,5 lít/100 km' },
        'motorbike-ev': { name: 'Xe máy điện', costPerKm: 3500 * 2.5 / 100, note: 'Tiêu hao giả định 2,5 kWh/100 km' },
        'car-ev': { name: 'Ô tô điện', costPerKm: 3500 * 15 / 100, note: 'Tiêu hao giả định 15 kWh/100 km' },
      };
      const selected = profiles[v.commuteVehicle] || profiles['motorbike-gas'];
      const monthlyKm = Math.max(0, v.commuteKmPerDay * v.commuteDays);
      const energyCost = monthlyKm * selected.costPerKm;
      const parkingCost = Math.max(0, v.parkingPerDay) * v.commuteDays;
      const totalCost = energyCost + parkingCost;
      const avgPerDay = v.commuteDays > 0 ? totalCost / v.commuteDays : 0;
      return {
        result: fmt(totalCost),
        badge: selected.name,
        details: [
          { label: 'Tổng quãng đường/tháng', value: fmtM(monthlyKm).replace(' đ', '') + ' km' },
          { label: 'Chi phí năng lượng/km', value: Math.round(selected.costPerKm).toLocaleString('vi-VN') + ' đ/km' },
          { label: 'Chi phí năng lượng/tháng', value: fmtM(energyCost) },
          { label: 'Phí gửi xe/tháng', value: parkingCost > 0 ? fmtM(parkingCost) : '0 đ' },
          { label: 'Bình quân mỗi ngày', value: fmtM(avgPerDay) },
        ],
        insight: `Với <b>${v.commuteKmPerDay} km/ngày</b> trong <b>${v.commuteDays} ngày/tháng</b>, ${selected.name.toLowerCase()} đang tiêu tốn khoảng <b>${fmtM(totalCost)}/tháng</b>. Phần năng lượng chiếm <b>${Math.round((energyCost / Math.max(totalCost, 1)) * 100)}%</b> tổng chi phí đi lại trực tiếp.`
      };
    },
  },
  {
    id: 'chi-phi-xe-xang', name: 'Chi Phí Xe Xăng', category: 'Phương tiện', abbr: 'XZ',
    intent: 'Informational intent', panel: 'generic', ui: 'calculator-product',
    description: 'Ước tính chi phí nhiên liệu xăng mỗi tháng theo dòng xe và quãng đường đi mỗi ngày.',
    jtbd: 'Tôi muốn biết mỗi tháng mình <b>tốn bao nhiêu tiền xăng</b> với dòng xe đang dùng và quãng đường thực sự đang đi mỗi ngày, để kiểm soát chi tiêu phương tiện.',
    formula: 'Chi phí đổ đầy = <b>Dung tích bình × Giá xăng/lít</b><br>Chi phí tháng = <b>(Km/ngày × 30) ÷ Km/bình đầy × Chi phí đổ đầy</b>',
    resultLabel: 'CHI PHÍ XĂNG MỖI THÁNG',
    ctaText: 'Xem thêm tiện ích Phương tiện trên MoMo',
    disclaimer: 'Mô phỏng dùng giá tham chiếu E10 RON 95-III = 22.330 đ/lít. Quãng đường/bình theo công bố nhà sản xuất — thực tế có thể thấp hơn tùy điều kiện đường và tải trọng. Chưa gồm bảo dưỡng, cầu đường và hao mòn xe.',
    fields: [
      { id: 'fuelSegment', label: 'Loại xe', type: 'pills', options: [
        { value: 'motorbike', label: 'Xe máy' },
        { value: 'car', label: 'Ô tô' },
      ], value: 'motorbike' },
      { id: 'fuelMotorModel', label: 'Dòng xe máy', type: 'select-items', condition: { field: 'fuelSegment', value: 'motorbike' }, value: 'fm-wave', options: [
        { value: 'fm-wave',    label: 'Honda Wave',        note: '1.3L · 180 km/bình' },
        { value: 'fm-vision',  label: 'Honda Vision',      note: '4.2L · 200 km/bình' },
        { value: 'fm-air',     label: 'Honda Air Blade',   note: '3.7L · 170 km/bình' },
        { value: 'fm-vario',   label: 'Yamaha Grande',     note: '4.5L · 170 km/bình' },
        { value: 'fm-exciter', label: 'Yamaha Exciter',    note: '4.2L · 160 km/bình' },
        { value: 'fm-custom',  label: 'Nhập tay',          note: 'tuỳ mẫu xe' },
      ]},
      { id: 'fuelCarModel', label: 'Dòng ô tô', type: 'select-items', condition: { field: 'fuelSegment', value: 'car' }, value: 'fc-vios', options: [
        { value: 'fc-vios',    label: 'Toyota Vios',       note: '42L · 600 km/bình' },
        { value: 'fc-city',    label: 'Honda City',        note: '40L · 580 km/bình' },
        { value: 'fc-xpander', label: 'Mitsubishi Xpander',note: '48L · 600 km/bình' },
        { value: 'fc-crv',     label: 'Honda CR-V',        note: '57L · 650 km/bình' },
        { value: 'fc-fortuner',label: 'Toyota Fortuner',   note: '72L · 700 km/bình' },
        { value: 'fc-custom',  label: 'Nhập tay',          note: 'tuỳ mẫu xe' },
      ]},
      { id: 'fuelMotorTank', label: 'Dung tích bình xăng', type: 'range', min: 1, max: 8, step: 0.1, value: 1.3, unit: 'L', chips: [1.3, 3.7, 4.2, 4.5], condition: { field: 'fuelMotorModel', value: 'fm-custom' }, tooltip: 'Số lít xăng khi đổ đầy bình một lần. Thường có trong sổ xe hoặc tài liệu sản phẩm.' },
      { id: 'fuelMotorRange', label: 'Đi được mỗi bình đầy', type: 'range', min: 80, max: 300, step: 5, value: 180, unit: 'km', chips: [130, 170, 200, 260], condition: { field: 'fuelMotorModel', value: 'fm-custom' } },
      { id: 'fuelCarTank', label: 'Dung tích bình xăng', type: 'range', min: 30, max: 90, step: 1, value: 42, unit: 'L', chips: [40, 48, 57, 72], condition: { field: 'fuelCarModel', value: 'fc-custom' }, tooltip: 'Số lít xăng khi đổ đầy bình một lần. Có thể xem trong tài liệu xe hoặc thông số hãng công bố.' },
      { id: 'fuelCarRange', label: 'Đi được mỗi bình đầy', type: 'range', min: 300, max: 900, step: 10, value: 600, unit: 'km', chips: [500, 600, 650, 750], condition: { field: 'fuelCarModel', value: 'fc-custom' } },
      { id: 'fuelDailyKm', label: 'Quãng đường đi mỗi ngày', type: 'range', min: 5, max: 100, step: 5, value: 20, unit: 'km', chips: [10, 20, 30, 50] },
    ],
    compute(v) {
      const GAS_PRICE = 22330;
      const FUEL_DATA = {
        'fm-wave':    { tank: 1.3,  range: 180, name: 'Honda Wave' },
        'fm-vision':  { tank: 4.2,  range: 200, name: 'Honda Vision' },
        'fm-air':     { tank: 3.7,  range: 170, name: 'Honda Air Blade' },
        'fm-vario':   { tank: 4.5,  range: 170, name: 'Yamaha Grande' },
        'fm-exciter': { tank: 4.2,  range: 160, name: 'Yamaha Exciter' },
        'fc-vios':    { tank: 42,   range: 600, name: 'Toyota Vios' },
        'fc-city':    { tank: 40,   range: 580, name: 'Honda City' },
        'fc-xpander': { tank: 48,   range: 600, name: 'Mitsubishi Xpander' },
        'fc-crv':     { tank: 57,   range: 650, name: 'Honda CR-V' },
        'fc-fortuner':{ tank: 72,   range: 700, name: 'Toyota Fortuner' },
      };
      const isMotorbike = v.fuelSegment === 'motorbike';
      const segmentName = isMotorbike ? 'Xe máy' : 'Ô tô';
      const modelKey = isMotorbike ? v.fuelMotorModel : v.fuelCarModel;
      const modelData = FUEL_DATA[modelKey];
      const tank = modelData ? modelData.tank : (isMotorbike ? v.fuelMotorTank : v.fuelCarTank);
      const range = modelData ? modelData.range : (isMotorbike ? v.fuelMotorRange : v.fuelCarRange);
      const modelName = modelData ? modelData.name : 'xe của bạn';
      const monthlyKm = v.fuelDailyKm * 30;
      const fullCost = tank * GAS_PRICE;
      const monthly = range > 0 ? (monthlyKm / range) * fullCost : 0;
      const costPerKm = range > 0 ? fullCost / range : 0;
      const fills = range > 0 ? monthlyKm / range : 0;
      return {
        result: fmt(monthly),
        badge: segmentName,
        details: [
          { label: 'Dòng xe', value: modelName },
          { label: 'Quãng đường mỗi tháng', value: monthlyKm.toLocaleString('vi-VN') + ' km' },
          { label: 'Chi phí đổ đầy một lần', value: fmtM(fullCost) },
          { label: 'Số lần đổ mỗi tháng', value: fills.toFixed(1) + ' lần' },
          { label: 'Chi phí mỗi km', value: Math.round(costPerKm).toLocaleString('vi-VN') + ' đ/km' },
          { label: 'Chi phí mỗi năm', value: fmtM(monthly * 12) },
        ],
        insight: `Với <b>${modelName}</b>, đi <b>${v.fuelDailyKm} km/ngày</b> (~${monthlyKm.toLocaleString('vi-VN')} km/tháng), bạn đổ xăng khoảng <b>${fills.toFixed(1)} lần/tháng</b>, tốn khoảng <b>${fmtM(monthly)}/tháng</b>.`,
      };
    },
  },
  {
    id: 'chi-phi-xe-dien', name: 'Chi Phí Xe Điện', category: 'Phương tiện', abbr: 'XĐ',
    intent: 'Informational intent', panel: 'generic', ui: 'calculator-product',
    description: 'Ước tính chi phí sạc điện mỗi tháng theo dòng xe và quãng đường thực tế.',
    jtbd: 'Tôi muốn biết mỗi tháng mình <b>tốn bao nhiêu tiền điện để sạc xe</b> với dòng xe đang dùng và quãng đường thực sự đang đi, để kiểm soát chi tiêu phương tiện.',
    formula: 'Chi phí sạc đầy = <b>Dung lượng pin × Giá điện/kWh</b><br>Chi phí tháng = <b>Km/tháng ÷ Km/lần sạc đầy × Chi phí sạc đầy</b>',
    resultLabel: 'CHI PHÍ SẠC ĐIỆN MỖI THÁNG',
    ctaText: 'Xem thêm tiện ích Phương tiện trên MoMo',
    disclaimer: 'Quãng đường tham chiếu theo chu trình WLTP hoặc công bố nhà sản xuất — thực tế có thể thấp hơn 15-20% tùy điều kiện đường và tốc độ. Giá điện tham chiếu 3.500 đ/kWh. Chưa gồm giá mua xe, thay pin, bảo dưỡng và chi phí sạc ngoài nhà.',
    fields: [
      { id: 'evSegment', label: 'Loại xe', type: 'pills', options: [
        { value: 'motorbike', label: 'Xe máy' },
        { value: 'car', label: 'Ô tô' },
      ], value: 'motorbike' },
      { id: 'evDailyKm', label: 'Quãng đường đi mỗi ngày', type: 'range', min: 5, max: 100, step: 5, value: 20, unit: 'km', chips: [10, 20, 30, 50] },
      { id: 'evMotorModel', label: 'Dòng xe máy điện', type: 'select-items', condition: { field: 'evSegment', value: 'motorbike' }, value: 'motor-theon', options: [
        { value: 'motor-yadea',    label: 'Yadea / Pega',       note: '1.5 kWh · 65 km' },
        { value: 'motor-theon',    label: 'VF Theon / Ludo',    note: '2.2 kWh · 80 km' },
        { value: 'motor-impes',    label: 'VF Impes S',         note: '3.5 kWh · 115 km' },
        { value: 'motor-datbike',  label: 'DatBike Weaver++',   note: '4.0 kWh · 150 km' },
        { value: 'motor-custom',   label: 'Nhập tay',           note: 'tuỳ mẫu xe' },
      ]},
      { id: 'evMotorBattery', label: 'Dung lượng pin', type: 'range', min: 1, max: 5, step: 0.1, value: 2.2, unit: 'kWh', chips: [1.5, 2.2, 3.5, 4.0], condition: { field: 'evMotorModel', value: 'motor-custom' }, tooltip: 'Nếu chỉ nhớ theo Wh, quy đổi: 2.200 Wh = 2,2 kWh.' },
      { id: 'evMotorRange', label: 'Đi được mỗi lần sạc đầy', type: 'range', min: 40, max: 200, step: 5, value: 80, unit: 'km', chips: [60, 80, 115, 150], condition: { field: 'evMotorModel', value: 'motor-custom' } },
      { id: 'evCarModel', label: 'Dòng xe ô tô điện', type: 'select-items', condition: { field: 'evSegment', value: 'car' }, value: 'car-vf6', options: [
        { value: 'car-vf3',     label: 'VinFast VF3',        note: '23.6 kWh · 210 km' },
        { value: 'car-vf5',     label: 'VinFast VF5',        note: '37.1 kWh · 326 km' },
        { value: 'car-vf6',     label: 'VinFast VF6',        note: '49.8 kWh · 399 km' },
        { value: 'car-vf8',     label: 'VinFast VF8',        note: '82.0 kWh · 471 km' },
        { value: 'car-byd',     label: 'BYD Dolphin / Atto', note: '60.5 kWh · 427 km' },
        { value: 'car-mg',      label: 'MG ZS EV',           note: '50.3 kWh · 320 km' },
        { value: 'car-custom',  label: 'Nhập tay',           note: 'tuỳ mẫu xe' },
      ]},
      { id: 'evCarBattery', label: 'Dung lượng pin', type: 'range', min: 20, max: 95, step: 1, value: 50, unit: 'kWh', chips: [23, 37, 50, 82], condition: { field: 'evCarModel', value: 'car-custom' }, tooltip: 'Dung lượng pin hữu dụng theo thông số nhà sản xuất công bố.' },
      { id: 'evCarRange', label: 'Đi được mỗi lần sạc đầy', type: 'range', min: 150, max: 500, step: 10, value: 400, unit: 'km', chips: [210, 326, 399, 471], condition: { field: 'evCarModel', value: 'car-custom' } },
    ],
    compute(v) {
      const POWER_PRICE = 3500;
      const EV_DATA = {
        'motor-yadea':   { battery: 1.5,  range: 65,  name: 'Yadea/Pega' },
        'motor-theon':   { battery: 2.2,  range: 80,  name: 'VF Theon/Ludo' },
        'motor-impes':   { battery: 3.5,  range: 115, name: 'VF Impes S' },
        'motor-datbike': { battery: 4.0,  range: 150, name: 'DatBike Weaver++' },
        'car-vf3':       { battery: 23.6, range: 210, name: 'VinFast VF3' },
        'car-vf5':       { battery: 37.1, range: 326, name: 'VinFast VF5' },
        'car-vf6':       { battery: 49.8, range: 399, name: 'VinFast VF6' },
        'car-vf8':       { battery: 82.0, range: 471, name: 'VinFast VF8' },
        'car-byd':       { battery: 60.5, range: 427, name: 'BYD Dolphin/Atto' },
        'car-mg':        { battery: 50.3, range: 320, name: 'MG ZS EV' },
      };
      const isMotorbike = v.evSegment === 'motorbike';
      const segmentName = isMotorbike ? 'Xe máy' : 'Ô tô';
      const modelKey = isMotorbike ? v.evMotorModel : v.evCarModel;
      const modelData = EV_DATA[modelKey];
      const battery = modelData ? modelData.battery : (isMotorbike ? v.evMotorBattery : v.evCarBattery);
      const range = modelData ? modelData.range : (isMotorbike ? v.evMotorRange : v.evCarRange);
      const modelName = modelData ? modelData.name : 'xe của bạn';
      const monthlyKm = v.evDailyKm * 30;
      const fullCost = battery * POWER_PRICE;
      const monthly = range > 0 ? (monthlyKm / range) * fullCost : 0;
      const costPerKm = range > 0 ? fullCost / range : 0;
      const charges = range > 0 ? monthlyKm / range : 0;
      return {
        result: fmt(monthly),
        badge: segmentName,
        details: [
          { label: 'Dòng xe', value: modelName },
          { label: 'Quãng đường mỗi tháng', value: monthlyKm.toLocaleString('vi-VN') + ' km' },
          { label: 'Chi phí sạc đầy một lần', value: fmtM(fullCost) },
          { label: 'Số lần sạc mỗi tháng', value: charges.toFixed(1) + ' lần' },
          { label: 'Chi phí mỗi km', value: Math.round(costPerKm).toLocaleString('vi-VN') + ' đ/km' },
          { label: 'Chi phí mỗi năm', value: fmtM(monthly * 12) },
        ],
        insight: `Với <b>${modelName}</b>, đi <b>${v.evDailyKm} km/ngày</b> (~${monthlyKm.toLocaleString('vi-VN')} km/tháng), bạn sạc khoảng <b>${charges.toFixed(1)} lần/tháng</b>, tốn khoảng <b>${fmtM(monthly)}/tháng</b> tiền điện.`,
      };
    },
  },
  {
    id: 'gia-xang-e10', name: 'Giá Xăng E10', category: 'Phương tiện', abbr: 'E10',
    intent: 'Informational intent', panel: 'generic', ui: 'calculator-product',
    description: 'Tính nhanh chi phí đổ xăng E10 theo số lít hoặc quy đổi ngược từ số tiền dự chi.',
    jtbd: 'Tôi muốn biết đổ <b>x lít xăng E10 hết bao nhiêu tiền</b> hoặc với <b>y đồng thì mua được bao nhiêu lít</b>, để quyết định mức đổ phù hợp cho xe máy hay ô tô ngay tại cây xăng.',
    formula: 'Chi phí = <b>Số lít × Đơn giá/lít</b><br>Số lít quy đổi = <b>Ngân sách ÷ Đơn giá/lít</b>',
    resultLabel: 'CHI PHÍ ĐỔ XĂNG E10',
    ctaText: 'Xem thêm công cụ chi tiêu trên MoMo',
    disclaimer: 'Giá tham chiếu theo ảnh mẫu ngày 05/06/2026, gồm VAT và thuế BVMT: E10 RON 95-V = 23.230 đ/lít, E10 RON 95-III = 22.330 đ/lít. Cần cập nhật dataset khi kỳ điều hành giá thay đổi.',
    fields: [
      { id: 'fuelGrade', label: 'Loại xăng E10', type: 'select-items', ui: { valueType: 'enum', precision: 'exact', decisionMode: 'compare', compareOptions: true, optionCount: 2 }, options: [
        { value: 'e10-95-v', label: 'E10 RON 95-V', note: '23.230 đ/lít' },
        { value: 'e10-95-iii', label: 'E10 RON 95-III', note: '22.330 đ/lít' },
      ], value: 'e10-95-iii', tooltip: 'Chọn loại xăng E10 bạn muốn tính. Mỗi loại có đơn giá theo lít khác nhau nên tổng chi phí và số lít quy đổi sẽ thay đổi theo lựa chọn này.' },
      { id: 'fuelMode', label: 'Bạn muốn tính theo', type: 'pills', options: [
        { value: 'liters', label: 'Nhập số lít' },
        { value: 'budget', label: 'Nhập số tiền' },
      ], value: 'liters' },
      { id: 'fuelLiters', label: 'Số lít cần đổ', type: 'range', min: 1, max: 80, step: 0.5, value: 5, unit: 'L', chips: [2, 5, 10, 20, 30], condition: { field: 'fuelMode', value: 'liters' } },
      { id: 'fuelBudget', label: 'Ngân sách dự chi', type: 'money', min: 10000, max: 5000000, step: 10000, value: 100000, chips: [50000, 100000, 300000], condition: { field: 'fuelMode', value: 'budget' } },
    ],
    compute(v) {
      const FUEL_PRICES = {
        'e10-95-v': { name: 'E10 RON 95-V', price: 23230 },
        'e10-95-iii': { name: 'E10 RON 95-III', price: 22330 },
      };
      const selectedFuel = FUEL_PRICES[v.fuelGrade] || FUEL_PRICES['e10-95-iii'];
      const price = selectedFuel.price;
      const liters = v.fuelMode === 'budget' ? Math.max(0, v.fuelBudget / price) : Math.max(0, v.fuelLiters);
      const totalCost = liters * price;
      const scooterTank = 5 * price;
      const carTank = 50 * price;
      const tenKmCost = (10 / 45) * price;
      if (v.fuelMode === 'budget') {
        return {
          resultLabel: 'SỐ LÍT XĂNG E10 QUY ĐỔI',
          result: liters.toFixed(2) + ' L',
          badge: selectedFuel.name,
          details: [
            { label: 'Đơn giá hiện tại', value: fmtM(price) + '/lít' },
            { label: 'Ngân sách đang nhập', value: fmtM(v.fuelBudget) },
            { label: 'Chi phí xe máy ~5 lít', value: fmtM(scooterTank) },
            { label: 'Chi phí ô tô ~50 lít', value: fmtM(carTank) },
            { label: 'Ước tính 10 km xe máy', value: fmtM(tenKmCost) },
          ],
          insight: `Với <b>${fmtM(v.fuelBudget)}</b>, bạn có thể đổ khoảng <b>${liters.toFixed(2)} lít ${selectedFuel.name}</b>. Nếu chỉ đi nội thành bằng xe máy, mức này tương đương khoảng <b>${(liters * 45).toFixed(0)} km</b> theo giả định 45 km/lít.`
        };
      }
      return {
        resultLabel: 'CHI PHÍ ĐỔ XĂNG E10',
        result: fmt(totalCost),
        badge: liters.toFixed(liters % 1 === 0 ? 0 : 1) + ' lít',
        details: [
          { label: 'Đơn giá hiện tại', value: fmtM(price) + '/lít' },
          { label: 'Loại xăng đang chọn', value: selectedFuel.name },
          { label: 'Chi phí xe máy ~5 lít', value: fmtM(scooterTank) },
          { label: 'Chi phí ô tô ~50 lít', value: fmtM(carTank) },
          { label: 'Ước tính 10 km xe máy', value: fmtM(tenKmCost) },
        ],
        insight: `Đổ <b>${liters.toFixed(liters % 1 === 0 ? 0 : 1)} lít</b> ${selectedFuel.name} cần khoảng <b>${fmtM(totalCost)}</b>. Nếu muốn kiểm soát ngân sách, mốc dễ nhớ là <b>100.000 đ ≈ ${(100000 / price).toFixed(2)} lít</b>.`
      };
    },
  },
  {
    id: 'epass', name: 'Phí ETC / ePass', category: 'Phương tiện', abbr: 'ETC',
    intent: 'Transactional intent', panel: 'generic', ui: 'calculator-product',
    description: 'Tính tổng phí cầu đường ETC theo tuyến cao tốc và loại xe, xem danh sách trạm và số dư ePass cần nạp trước chuyến đi.',
    jtbd: 'Tôi sắp đi cao tốc và muốn biết <b>tổng phí ETC phải trả qua các trạm</b>, để nạp đúng số tiền vào thẻ ePass trước khi xuất phát — tránh hụt số dư giữa đường.',
    formula: 'Tổng phí = <b>∑ Phí từng trạm × Hệ số loại xe</b><br>Nếu khứ hồi: <b>× 2</b>',
    resultLabel: 'TỔNG PHÍ ETC',
    ctaText: 'Nạp tiền ePass / VETC qua MoMo ngay',
    ctaUrl: 'https://onelink.momo.vn/nap-tien',
    disclaimer: 'Phí tham chiếu theo biểu phí ETC/VETC tháng 6/2026 — chỉ áp dụng cho xe đi qua tất cả trạm trên tuyến. Một số đoạn chưa có cao tốc hoặc chưa thu ETC sẽ không tính. Cần cập nhật khi Bộ GTVT điều chỉnh biểu phí.',
    fields: [
      { id: 'epassVehicleType', label: 'Loại xe', type: 'pills', ui: { valueType: 'enum', precision: 'exact', decisionMode: 'compare', optionCount: 3 }, options: [
        { value: 'L1', label: 'Xe con (Loại 1)' },
        { value: 'L2', label: 'Xe 12-30 chỗ / tải 2-4T (Loại 2)' },
        { value: 'L3', label: 'Xe tải lớn / đầu kéo (Loại 3+)' },
      ], value: 'L1', tooltip: 'Loại 1 = xe con < 12 chỗ và xe tải < 2T. Loại 2 = xe 12-30 chỗ và xe tải 2-4T. Loại 3+ = xe tải trên 4T và xe đầu kéo. Phí tăng theo hệ số ×1 / ×1,5 / ×2.' },
      { id: 'epassRoute', label: 'Tuyến đường', type: 'select-items', ui: { valueType: 'enum', precision: 'exact', decisionMode: 'compare', compareOptions: true, optionCount: 7 }, options: [
        { value: 'hcm-vung-tau',    label: 'HCM → Vũng Tàu',        note: '~85 km · 3 trạm' },
        { value: 'hcm-phan-thiet',  label: 'HCM → Phan Thiết',      note: '~200 km · 5 trạm' },
        { value: 'hcm-can-tho',     label: 'HCM → Cần Thơ',         note: '~180 km · 3 trạm' },
        { value: 'hn-hai-phong',    label: 'Hà Nội → Hải Phòng',    note: '~120 km · 4 trạm' },
        { value: 'hn-ninh-binh',    label: 'Hà Nội → Ninh Bình',    note: '~90 km · 4 trạm' },
        { value: 'hn-quang-ninh',   label: 'Hà Nội → Quảng Ninh',   note: '~160 km · 6 trạm' },
        { value: 'hn-lao-cai',      label: 'Hà Nội → Lào Cai',      note: '~245 km · 5 trạm' },
      ], value: 'hcm-vung-tau', tooltip: 'Chọn tuyến cao tốc bạn dự định di chuyển. Danh sách trạm và phí theo từng tuyến sẽ được hiển thị ở kết quả.' },
      { id: 'epassTrip', label: 'Loại chuyến đi', type: 'pills', ui: { valueType: 'enum', precision: 'exact', decisionMode: 'compare', optionCount: 2 }, options: [
        { value: 'one-way',    label: 'Một chiều' },
        { value: 'round-trip', label: 'Khứ hồi' },
      ], value: 'round-trip' },
    ],
    compute(v) {
      const ROUTES = {
        'hcm-vung-tau': { name: 'HCM → Vũng Tàu', distance: 85, stations: [
          { name: 'Trạm T1 Long Phước', fee1: 55000 },
          { name: 'Trạm T2 Long Thành', fee1: 55000 },
          { name: 'Trạm T3 Phước Hòa',  fee1: 38000 },
        ]},
        'hcm-phan-thiet': { name: 'HCM → Phan Thiết', distance: 200, stations: [
          { name: 'Trạm T1 Long Phước',    fee1: 55000 },
          { name: 'Trạm T2 Long Thành',    fee1: 55000 },
          { name: 'Trạm T3 Dầu Giây',      fee1: 26000 },
          { name: 'Trạm T4 Phan Thiết 1',  fee1: 86000 },
          { name: 'Trạm T5 Phan Thiết 2',  fee1: 86000 },
        ]},
        'hcm-can-tho': { name: 'HCM → Cần Thơ', distance: 180, stations: [
          { name: 'Trạm T1 Trung Lương',   fee1: 50000 },
          { name: 'Trạm T2 Mỹ Thuận',      fee1: 62000 },
          { name: 'Trạm T3 Mỹ Thuận 2',    fee1: 62000 },
        ]},
        'hn-hai-phong': { name: 'Hà Nội → Hải Phòng', distance: 120, stations: [
          { name: 'Trạm T1 Sài Đồng',      fee1: 52000 },
          { name: 'Trạm T2 Kênh Giang',    fee1: 52000 },
          { name: 'Trạm T3 An Dương',       fee1: 45000 },
          { name: 'Trạm T4 Tân Cảng',      fee1: 38000 },
        ]},
        'hn-ninh-binh': { name: 'Hà Nội → Ninh Bình', distance: 90, stations: [
          { name: 'Trạm T1 Pháp Vân',      fee1: 45000 },
          { name: 'Trạm T2 Cầu Giẽ',       fee1: 35000 },
          { name: 'Trạm T3 Đồng Văn',      fee1: 26000 },
          { name: 'Trạm T4 Đại Xuyên',     fee1: 26000 },
        ]},
        'hn-quang-ninh': { name: 'Hà Nội → Quảng Ninh', distance: 160, stations: [
          { name: 'Trạm T1 Sài Đồng',      fee1: 52000 },
          { name: 'Trạm T2 Kênh Giang',    fee1: 52000 },
          { name: 'Trạm T3 An Dương',       fee1: 45000 },
          { name: 'Trạm T4 Tân Cảng',      fee1: 38000 },
          { name: 'Trạm T5 Hạ Long 1',     fee1: 55000 },
          { name: 'Trạm T6 Hạ Long 2',     fee1: 55000 },
        ]},
        'hn-lao-cai': { name: 'Hà Nội → Lào Cai', distance: 245, stations: [
          { name: 'Trạm T1 Nội Bài',       fee1: 45000 },
          { name: 'Trạm T2 Phú Thọ',       fee1: 45000 },
          { name: 'Trạm T3 Yên Bái',       fee1: 45000 },
          { name: 'Trạm T4 Lào Cai 1',     fee1: 45000 },
          { name: 'Trạm T5 Lào Cai 2',     fee1: 38000 },
        ]},
      };
      const TYPE_MULT  = { L1: 1.0, L2: 1.5, L3: 2.0 };
      const TYPE_LABEL = { L1: 'xe con (loại 1)', L2: 'loại 2', L3: 'loại 3+' };
      const route = ROUTES[v.epassRoute] || ROUTES['hcm-vung-tau'];
      const mult = TYPE_MULT[v.epassVehicleType] || 1.0;
      const isRT = v.epassTrip === 'round-trip';
      const oneWay = route.stations.reduce((s, st) => s + Math.round(st.fee1 * mult), 0);
      const total = isRT ? oneWay * 2 : oneWay;
      const recBalance = Math.ceil(total * 1.1 / 10000) * 10000;
      const details = [
        ...route.stations.map(st => ({ label: st.name, value: Math.round(st.fee1 * mult).toLocaleString('vi-VN') + ' đ' })),
        { label: `Tổng 1 chiều (${route.stations.length} trạm)`, value: oneWay.toLocaleString('vi-VN') + ' đ' },
        ...(isRT ? [{ label: 'Tổng khứ hồi', value: total.toLocaleString('vi-VN') + ' đ' }] : []),
        { label: 'Số dư ePass nên nạp', value: recBalance.toLocaleString('vi-VN') + ' đ' },
      ];
      return {
        result: total.toLocaleString('vi-VN') + ' đ',
        badge: isRT ? 'Khứ hồi' : 'Một chiều',
        details,
        insight: `Tuyến <b>${route.name}</b> (${route.distance} km) qua <b>${route.stations.length} trạm ETC</b>, tổng phí ${isRT ? 'khứ hồi' : 'một chiều'} ${TYPE_LABEL[v.epassVehicleType]} là <b>${total.toLocaleString('vi-VN')} đ</b>. Nên nạp tối thiểu <b>${recBalance.toLocaleString('vi-VN')} đ</b> vào ePass để qua tất cả trạm không bị dừng.`,
      };
    },
  },
  {
    id: 'camera-phat-nguoi', name: 'Camera Phạt Nguội', category: 'Phương tiện', abbr: 'CAM',
    intent: 'Informational intent', panel: 'camera-lookup', ui: 'calculator-product',
    description: 'Tra cứu các tuyến đường có camera phạt nguội theo khu vực, loại lỗi thường gặp và mức độ rủi ro — tổng hợp từ dữ liệu vi phạm thực tế.',
    jtbd: 'Tôi muốn biết <b>đường nào trong khu vực tôi hay đi có gắn camera phạt nguội</b>, lỗi nào camera đang theo dõi, để chủ động phòng tránh và không bị phạt oan.',
    formula: 'Dữ liệu tổng hợp từ <b>kết quả tra cứu phạt nguội</b> — tuyến đường và lỗi vi phạm được aggregate theo khu vực.',
    resultLabel: 'ĐIỂM CAMERA GHI NHẬN',
    ctaText: 'Tra cứu biển số của bạn ngay trên MoMo',
    ctaUrl: 'https://onelink.momo.vn/phat-nguoi',
    disclaimer: 'Dữ liệu mang tính tham chiếu, tổng hợp từ kết quả tra cứu vi phạm — không phải vị trí camera chính thức từ Cục CSGT. Camera có thể di chuyển hoặc bổ sung theo kế hoạch tuần tra.',
    fields: [
      { id: 'camCity', label: 'Thành phố', type: 'select-items', ui: { valueType: 'enum', precision: 'exact', decisionMode: 'compare', compareOptions: true, optionCount: 3 }, options: [
        { value: 'hcm', label: 'TP. Hồ Chí Minh', note: '94 điểm ghi nhận' },
        { value: 'hn',  label: 'Hà Nội',            note: '78 điểm ghi nhận' },
        { value: 'dn',  label: 'Đà Nẵng',            note: '31 điểm ghi nhận' },
      ], value: 'hcm' },
      { id: 'camType', label: 'Lọc theo loại vi phạm', type: 'pills', ui: { valueType: 'enum', precision: 'exact', decisionMode: 'compare', optionCount: 4 }, options: [
        { value: 'all',       label: 'Tất cả' },
        { value: 'speed',     label: 'Quá tốc độ' },
        { value: 'red-light', label: 'Vượt đèn đỏ' },
        { value: 'lane',      label: 'Sai làn / đè vạch' },
      ], value: 'all' },
    ],
    compute(v) {
      const DB = {
        hcm: { city: 'TP.HCM', cameras: [
          { road: 'Đinh Bộ Lĩnh',          district: 'Q.Bình Thạnh', types: ['speed','red-light'], records: 512, risk: 'Cao' },
          { road: 'Xô Viết Nghệ Tĩnh',     district: 'Q.Bình Thạnh', types: ['speed'],             records: 287, risk: 'Cao' },
          { road: 'Ung Văn Khiêm',          district: 'Q.Bình Thạnh', types: ['lane'],              records: 134, risk: 'Trung bình' },
          { road: 'Nguyễn Thị Minh Khai',  district: 'Q.3',           types: ['red-light'],         records: 398, risk: 'Cao' },
          { road: 'Cách Mạng Tháng 8',     district: 'Q.3',           types: ['red-light','lane'],  records: 341, risk: 'Cao' },
          { road: 'Đinh Tiên Hoàng',        district: 'Q.1',           types: ['red-light'],         records: 276, risk: 'Cao' },
          { road: 'Lê Duẩn',               district: 'Q.1',           types: ['speed'],             records: 189, risk: 'Trung bình' },
          { road: 'Cộng Hòa',              district: 'Q.Tân Bình',    types: ['speed','red-light'], records: 423, risk: 'Cao' },
          { road: 'Hoàng Văn Thụ',         district: 'Q.Tân Bình',    types: ['red-light'],         records: 198, risk: 'Trung bình' },
          { road: 'Lý Thường Kiệt',        district: 'Q.Tân Bình',    types: ['lane'],              records: 112, risk: 'Trung bình' },
          { road: 'Nguyễn Oanh',           district: 'Q.Gò Vấp',      types: ['speed'],             records: 267, risk: 'Cao' },
          { road: 'Quang Trung',           district: 'Q.Gò Vấp',      types: ['speed','lane'],      records: 184, risk: 'Trung bình' },
          { road: 'Trường Chinh',          district: 'Q.12',           types: ['speed'],             records: 356, risk: 'Cao' },
          { road: 'Tô Ký',                 district: 'Q.12',           types: ['red-light'],         records: 143, risk: 'Trung bình' },
          { road: 'Nguyễn Văn Linh',       district: 'Q.7',            types: ['speed'],             records: 301, risk: 'Cao' },
          { road: 'Huỳnh Tấn Phát',        district: 'Q.7',            types: ['lane'],              records: 97,  risk: 'Thấp' },
          { road: 'Võ Văn Kiệt',           district: 'Q.8',            types: ['speed'],             records: 412, risk: 'Cao' },
          { road: 'QL1A (Bình Chánh)',     district: 'Bình Chánh',     types: ['speed'],             records: 478, risk: 'Cao' },
          { road: 'Nguyễn Văn Bứa',        district: 'Hóc Môn',        types: ['speed'],             records: 89,  risk: 'Thấp' },
          { road: 'QL13 (giáp Bình Dương)',district: 'Thủ Đức',        types: ['speed'],             records: 367, risk: 'Cao' },
        ]},
        hn: { city: 'Hà Nội', cameras: [
          { road: 'Nguyễn Trãi',           district: 'Đống Đa',       types: ['speed','red-light'], records: 489, risk: 'Cao' },
          { road: 'Tây Sơn',               district: 'Đống Đa',       types: ['speed'],             records: 213, risk: 'Trung bình' },
          { road: 'Đường Láng',            district: 'Đống Đa',       types: ['lane','speed'],      records: 178, risk: 'Trung bình' },
          { road: 'Tố Hữu',               district: 'Hà Đông',        types: ['speed'],             records: 437, risk: 'Cao' },
          { road: 'Lê Văn Lương',          district: 'Hà Đông',        types: ['speed','lane'],      records: 312, risk: 'Cao' },
          { road: 'Quang Trung',           district: 'Hà Đông',        types: ['red-light'],         records: 156, risk: 'Trung bình' },
          { road: 'Xuân Thủy',            district: 'Cầu Giấy',       types: ['red-light'],         records: 267, risk: 'Cao' },
          { road: 'Cầu Giấy',             district: 'Cầu Giấy',       types: ['lane'],              records: 198, risk: 'Trung bình' },
          { road: 'Phạm Hùng',            district: 'Cầu Giấy',       types: ['speed'],             records: 321, risk: 'Cao' },
          { road: 'Đinh Tiên Hoàng',       district: 'Hoàn Kiếm',      types: ['red-light'],         records: 234, risk: 'Cao' },
          { road: 'Tràng Tiền',            district: 'Hoàn Kiếm',      types: ['red-light','lane'],  records: 167, risk: 'Trung bình' },
          { road: 'Giải Phóng',            district: 'Thanh Xuân',     types: ['speed'],             records: 398, risk: 'Cao' },
          { road: 'Nguyễn Xiển',           district: 'Thanh Xuân',     types: ['speed'],             records: 145, risk: 'Trung bình' },
          { road: 'Nguyễn Văn Cừ',         district: 'Long Biên',      types: ['speed','red-light'], records: 187, risk: 'Trung bình' },
          { road: 'QL1A (Hà Đông)',        district: 'Hà Đông',        types: ['speed'],             records: 456, risk: 'Cao' },
        ]},
        dn: { city: 'Đà Nẵng', cameras: [
          { road: 'Trần Phú',              district: 'Hải Châu',       types: ['speed','red-light'], records: 312, risk: 'Cao' },
          { road: 'Lê Duẩn',              district: 'Hải Châu',       types: ['red-light'],         records: 245, risk: 'Cao' },
          { road: 'Nguyễn Văn Linh',       district: 'Hải Châu',       types: ['lane'],              records: 134, risk: 'Trung bình' },
          { road: 'Điện Biên Phủ',         district: 'Thanh Khê',      types: ['speed'],             records: 278, risk: 'Cao' },
          { road: 'Nguyễn Tất Thành',      district: 'Thanh Khê',      types: ['speed','lane'],      records: 198, risk: 'Trung bình' },
          { road: 'Nguyễn Văn Thoại',      district: 'Ngũ Hành Sơn',  types: ['speed'],             records: 167, risk: 'Trung bình' },
          { road: 'Lạc Long Quân',         district: 'Ngũ Hành Sơn',  types: ['red-light'],         records: 89,  risk: 'Thấp' },
        ]},
      };
      const RISK_ORDER = { 'Cao': 0, 'Trung bình': 1, 'Thấp': 2 };
      const TYPE_LABEL = { speed: 'Quá tốc độ', 'red-light': 'Vượt đèn đỏ', lane: 'Sai làn / đè vạch' };

      const data = DB[v.camCity] || DB['hcm'];
      const filtered = data.cameras
        .filter(c => v.camType === 'all' || c.types.includes(v.camType))
        .sort((a, b) => (RISK_ORDER[a.risk] - RISK_ORDER[b.risk]) || (b.records - a.records));

      const highCount  = filtered.filter(c => c.risk === 'Cao').length;
      const totalRecords = filtered.reduce((s, c) => s + c.records, 0);

      const details = filtered.map(c => ({
        label: `${c.road} · ${c.district}`,
        value: `${c.types.map(t => TYPE_LABEL[t]).join(' / ')} · ${c.risk === 'Cao' ? '⚠ Cao' : c.risk === 'Trung bình' ? '◆ TB' : '· Thấp'}`,
      }));

      const typeText = v.camType === 'all' ? 'tất cả lỗi' : TYPE_LABEL[v.camType].toLowerCase();
      return {
        result: filtered.length + ' điểm',
        badge: data.city,
        details,
        insight: `<b>${data.city}</b> có <b>${filtered.length} điểm camera</b> ghi nhận lỗi ${typeText}, trong đó <b>${highCount} điểm rủi ro Cao</b>. Tổng <b>${totalRecords.toLocaleString('vi-VN')} lượt vi phạm</b> được ghi nhận — dữ liệu tổng hợp từ tra cứu phạt nguội thực tế.`,
      };
    },
  },
  {
    id: 'quy-du-phong', name: 'Quỹ Dự Phòng', category: 'Financial Health', abbr: 'QDP',
    intent: 'Informational intent', panel: 'generic', ui: 'goal-planner',
    description: 'Lập mục tiêu quỹ khẩn cấp theo chi tiêu, thời gian hoàn thành và lạm phát dự kiến.',
    jtbd: 'Tôi muốn xây quỹ dự phòng cho 3 đến 12 tháng chi tiêu nhưng không biết cần bao nhiêu. Cần ước tính ngay <b>mục tiêu quỹ tại thời điểm hoàn thành, tác động của lạm phát và khoảng còn thiếu</b>, để <b>biết phải để dành bao nhiêu mỗi tháng</b>.',
    formula: 'Chi tiêu tại thời điểm hoàn thành = <b>Chi tiêu hiện tại × (1 + lạm phát)<sup>số tháng ÷ 12</sup></b><br>Quỹ mục tiêu = <b>Chi tiêu tương lai × Số tháng an toàn</b><br>Cần để dành mỗi tháng = <b>(Quỹ mục tiêu − Quỹ hiện có) ÷ Thời gian hoàn thành</b>',
    resultLabel: 'QUỸ DỰ PHÒNG CẦN CÓ',
    ctaText: 'Khám phá giải pháp tích lũy trên MoMo',
    disclaimer: 'Lạm phát là giả định để lập kế hoạch và có thể khác thực tế. Mô phỏng chưa tính lãi phát sinh trên khoản tiền đang tích lũy.',
    fields: [
      { id: 'monthlyExpense', label: 'Chi tiêu hiện tại/tháng',      type: 'money',  min: 1000000, max: 100000000, step: 500000, value: 12000000, chips: [5000000, 12000000, 20000000] },
      { id: 'safeMonths',     label: 'Số tháng an toàn mục tiêu',   type: 'select', options: [
        {value:3,label:'3 tháng'},{value:6,label:'6 tháng (phổ biến)'},
        {value:9,label:'9 tháng'},{value:12,label:'12 tháng'},
      ], value: 6 },
      { id: 'currentSavings', label: 'Quỹ dự phòng hiện có',        type: 'money',  min: 0, max: 500000000, step: 1000000, value: 10000000, chips: [0, 10000000, 50000000] },
      { id: 'targetBuildMonths', label: 'Muốn hoàn thành sau',       type: 'select', options: [
        {value:3,label:'3 tháng'},{value:6,label:'6 tháng'},{value:12,label:'12 tháng'},
        {value:18,label:'18 tháng'},{value:24,label:'24 tháng'},
      ], value: 12 },
      { id: 'expenseInflation', label: 'Lạm phát chi tiêu dự kiến', type: 'range', min: 0, max: 12, step: 0.5, value: 4, unit: '%', chips: [0, 3, 4, 6] },
    ],
    compute(v) {
      if (v.monthlyExpense <= 0 || v.targetBuildMonths <= 0) {
        return { result: 'Chưa thể tính', details: [
          { label: 'Chi tiêu hiện tại', value: 'Cần lớn hơn 0 đ' },
          { label: 'Thời gian hoàn thành', value: 'Cần lớn hơn 0 tháng' },
        ], insight: 'Nhập chi tiêu và thời gian hoàn thành để lập mục tiêu quỹ dự phòng.' };
      }
      const targetToday = v.monthlyExpense * v.safeMonths;
      const futureMonthlyExpense = v.monthlyExpense * Math.pow(1 + v.expenseInflation / 100, v.targetBuildMonths / 12);
      const target = futureMonthlyExpense * v.safeMonths;
      const gap = Math.max(0, target - v.currentSavings);
      const covered = v.currentSavings / v.monthlyExpense;
      const inflationImpact = Math.max(0, target - targetToday);
      const monthlyContribution = gap / v.targetBuildMonths;
      return { result: fmt(target), details: [
        { label: 'Mục tiêu theo giá hôm nay', value: fmtM(targetToday) },
        { label: 'Tác động lạm phát', value: inflationImpact > 0 ? '+ ' + fmtM(inflationImpact) : 'Không đổi' },
        { label: 'Quỹ hiện có', value: fmtM(v.currentSavings) + ' (' + covered.toFixed(1) + ' tháng)' },
        { label: 'Còn thiếu', value: gap > 0 ? fmtM(gap) : 'Đã đủ ✓' },
        { label: `Cần để dành trong ${v.targetBuildMonths} tháng`, value: gap > 0 ? fmt(monthlyContribution) + '/tháng' : 'Đã đạt mục tiêu' },
      ], insight: `Với lạm phát ${v.expenseInflation.toFixed(1)}%/năm, mức chi tiêu ${fmtM(v.monthlyExpense)} hôm nay tương đương <b>${fmtM(futureMonthlyExpense)}/tháng</b> sau ${v.targetBuildMonths} tháng.` };
    },
  },
  {
    id: 'tu-do-tai-chinh', name: 'Tự Do Tài Chính', category: 'Planning', abbr: 'FI',
    intent: 'Informational intent', panel: 'fire',
    description: 'Lập kế hoạch FIRE theo chi tiêu tương lai đã tính lạm phát, tỷ lệ rút vốn an toàn, lợi suất đầu tư và dòng tiền góp hàng tháng.',
    jtbd: 'Tôi muốn nghỉ hưu sớm và sống bằng tài sản đầu tư nhưng không biết cần tích lũy bao nhiêu. Cần biết ngay <b>số tài sản mục tiêu, dòng góp hàng tháng và năm có thể FIRE theo lạm phát và lợi suất kỳ vọng</b>, để <b>có lộ trình cụ thể từ vị trí hiện tại đến tự do tài chính</b>.',
    formula: 'Chi tiêu tương lai = <b>Chi tiêu hiện tại × (1 + lạm phát)ⁿ</b><br>FIRE Number = <b>Chi tiêu tương lai/năm ÷ Tỷ lệ rút vốn an toàn</b><br>Danh mục dự kiến = <b>Tài sản hiện có × (1+r/12)ⁿ + Góp tháng × [((1+r/12)ⁿ - 1) ÷ (r/12)]</b><br><em>Quy tắc 4% chỉ là mốc tham chiếu. Nên stress test với 3-3,5% nếu muốn an toàn hơn hoặc nghỉ hưu dài hơn 30 năm.</em>',
    resultLabel: 'SỐ TIỀN CẦN ĐỂ FIRE',
    fields: [
      { id: 'fireMonthly',      label: 'Chi tiêu hiện tại/tháng', type: 'money',  min: 1000000, max: 150000000, step: 500000, value: 20000000, chips: [10000000, 20000000, 40000000] },
      { id: 'fireYears',        label: 'Số năm muốn đạt FIRE',    type: 'select', options: [
        {value:5,label:'5 năm'},{value:10,label:'10 năm'},{value:15,label:'15 năm'},
        {value:20,label:'20 năm'},{value:25,label:'25 năm'},
      ], value: 15 },
      { id: 'fireInflation',    label: 'Lạm phát chi tiêu/năm',   type: 'range', min: 0, max: 10, step: 0.5, value: 4, unit: '%', chips: [3, 4, 5, 6] },
      { id: 'fireRate',         label: 'Tỷ lệ rút vốn an toàn',   type: 'range', min: 2.5, max: 5.5, step: 0.25, value: 3.5, unit: '%', chips: [3, 3.5, 4, 5] },
      { id: 'fireReturn',       label: 'Lợi suất đầu tư kỳ vọng', type: 'range', min: 0, max: 15, step: 0.5, value: 8, unit: '%', chips: [6, 8, 10, 12] },
      { id: 'fireAssets',       label: 'Tài sản đầu tư hiện có',  type: 'money', min: 0, max: 50000000000, step: 10000000, value: 500000000, chips: [0, 500000000, 2000000000] },
      { id: 'fireContribution', label: 'Đầu tư thêm mỗi tháng',   type: 'money', min: 0, max: 500000000, step: 1000000, value: 10000000, chips: [3000000, 10000000, 30000000] },
    ],
    compute(v) {
      const years = v.fireYears;
      const months = years * 12;
      const monthlyReturn = v.fireReturn / 100 / 12;
      const futureMonthlyExpense = v.fireMonthly * Math.pow(1 + v.fireInflation / 100, years);
      const annualExpenseAtFire = futureMonthlyExpense * 12;
      const fireNum = annualExpenseAtFire / (v.fireRate / 100);
      const growthFactor = Math.pow(1 + monthlyReturn, months);
      const futureCurrentAssets = v.fireAssets * growthFactor;
      const futureContribution = monthlyReturn === 0
        ? v.fireContribution * months
        : v.fireContribution * (growthFactor - 1) / monthlyReturn;
      const projectedPortfolio = futureCurrentAssets + futureContribution;
      const gap = Math.max(0, fireNum - projectedPortfolio);
      const requiredMonthly = Math.max(0, monthlyReturn === 0
        ? (fireNum - futureCurrentAssets) / months
        : (fireNum - futureCurrentAssets) * monthlyReturn / (growthFactor - 1));
      const fiRatio = fireNum ? Math.min(999, Math.round(projectedPortfolio / fireNum * 100)) : 100;
      const passiveNow = v.fireAssets * (v.fireRate / 100) / 12;
      const extraMonthly = Math.max(0, requiredMonthly - v.fireContribution);
      const insight = projectedPortfolio >= fireNum
        ? `Với tốc độ góp hiện tại, sau ${years} năm danh mục dự kiến đạt ${fmtM(projectedPortfolio)}, vượt mục tiêu FIRE khoảng ${fmtM(projectedPortfolio - fireNum)}.`
        : `Kế hoạch hiện tại mới đạt ${fiRatio}% mục tiêu. Cần tăng thêm khoảng ${fmtM(extraMonthly)}/tháng hoặc giảm chi tiêu, kéo dài thời gian, hoặc tăng lợi suất kỳ vọng.`;
      return { result: fmtM(fireNum), details: [
        { label: 'Chi tiêu/tháng tại năm FIRE', value: fmtM(futureMonthlyExpense) },
        { label: 'Danh mục dự kiến sau ' + years + ' năm', value: fmtM(projectedPortfolio) + ' (' + fiRatio + '%)' },
        { label: 'Còn thiếu tại năm mục tiêu', value: gap > 0 ? fmtM(gap) : 'Đã đạt mục tiêu ✓' },
        { label: 'Cần đầu tư/tháng để đạt mục tiêu', value: requiredMonthly > 0 ? fmtM(requiredMonthly) : 'Không cần góp thêm' },
        { label: 'Dòng tiền thụ động hiện tại', value: fmtM(passiveNow) + '/tháng' },
      ], insight };
    },
  },
  {
    id: 'dam-cuoi', name: 'Kế Hoạch Đám Cưới', category: 'Planning', abbr: 'DC',
    intent: 'Informational intent', panel: 'generic',
    description: 'Lập kế hoạch tiền cưới theo số khách, chi phí bàn tiệc, chi phí cố định, tiền mừng dự kiến, quỹ dự phòng và lãi gửi tích lũy.',
    jtbd: 'Tôi sắp cưới và đang lo không biết chuẩn bị bao nhiêu tiền là đủ. Cần ước tính ngay <b>tổng chi phí cưới, tiền mừng dự kiến nhận được và mức để dành thêm mỗi tháng</b>, để <b>cưới đúng kế hoạch tài chính mà không bị áp lực hay phải vay nợ sau cưới</b>.',
    formula: 'Số bàn = <b>Làm tròn lên(Số khách ÷ 10)</b><br>Tổng chi phí = <b>Số bàn × Chi phí/bàn + Chi phí cố định</b><br>Dự phòng = <b>Tổng chi phí × Tỷ lệ dự phòng</b><br>Tiền mặt cần chuẩn bị = <b>max(0, Tổng chi phí + Dự phòng - Tiền mừng dự kiến) + Quỹ sau cưới</b><br>Góp/tháng = <b>PMT để đạt mục tiêu sau n tháng, có tính lãi gửi tích lũy</b><br><em>Không nên xem tiền mừng là chắc chắn. Quỹ sau cưới giúp tránh cưới xong bị hụt dòng tiền.</em>',
    resultLabel: 'CẦN ĐỂ DÀNH MỖI THÁNG',
    fields: [
      { id: 'weddingGuests',       label: 'Số khách dự kiến',       type: 'range', min: 50, max: 600, step: 10, value: 220, unit: 'khách', chips: [100, 200, 350, 500] },
      { id: 'weddingTableCost',    label: 'Chi phí một bàn 10 khách', type: 'money', min: 2000000, max: 30000000, step: 500000, value: 6500000, chips: [4000000, 6500000, 10000000] },
      { id: 'weddingFixedCost',    label: 'Chi phí cố định',        type: 'money', min: 0, max: 1000000000, step: 1000000, value: 90000000, chips: [50000000, 90000000, 150000000] },
      { id: 'weddingGiftPerGuest', label: 'Tiền mừng dự kiến/khách', type: 'money', min: 0, max: 5000000, step: 50000, value: 500000, chips: [300000, 500000, 800000] },
      { id: 'weddingContingency',  label: 'Dự phòng phát sinh',     type: 'range', min: 0, max: 25, step: 1, value: 10, unit: '%', chips: [0, 10, 15, 20] },
      { id: 'weddingBuffer',       label: 'Quỹ sau cưới muốn giữ',  type: 'money', min: 0, max: 500000000, step: 1000000, value: 30000000, chips: [0, 30000000, 80000000] },
      { id: 'weddingSavings',      label: 'Tiết kiệm hiện có',      type: 'money', min: 0, max: 1000000000, step: 1000000, value: 50000000, chips: [0, 50000000, 150000000] },
      { id: 'weddingReturn',       label: 'Lãi gửi kỳ vọng/năm',    type: 'range', min: 0, max: 8, step: 0.5, value: 4.5, unit: '%', chips: [3, 4.5, 6, 7] },
      { id: 'weddingMonths',  label: 'Số tháng còn lại',       type: 'select', options: [
        {value:6,label:'6 tháng'},{value:12,label:'12 tháng'},{value:18,label:'18 tháng'},
        {value:24,label:'24 tháng'},{value:36,label:'36 tháng'},
      ], value: 18 },
    ],
    compute(v) {
      const tables = Math.ceil(v.weddingGuests / 10);
      const foodCost = tables * v.weddingTableCost;
      const directCost = foodCost + v.weddingFixedCost;
      const contingency = directCost * v.weddingContingency / 100;
      const grossBudget = directCost + contingency;
      const expectedGift = v.weddingGuests * v.weddingGiftPerGuest;
      const netWeddingCash = Math.max(0, grossBudget - expectedGift);
      const targetCash = netWeddingCash + v.weddingBuffer;
      const monthlyReturn = v.weddingReturn / 100 / 12;
      const n = v.weddingMonths;
      const futureSavings = v.weddingSavings * Math.pow(1 + monthlyReturn, n);
      const gap = Math.max(0, targetCash - futureSavings);
      const monthly = gap > 0
        ? Math.ceil((monthlyReturn === 0 ? gap / n : gap * monthlyReturn / (Math.pow(1 + monthlyReturn, n) - 1)) / 100000) * 100000
        : 0;
      const insight = monthly === 0
        ? `Tiết kiệm hiện có sau lãi dự kiến đủ để chi trả phần tiền mặt cần chuẩn bị và vẫn giữ ${fmtM(v.weddingBuffer)} quỹ sau cưới.`
        : `Cần để dành ${fmtM(monthly)}/tháng trong ${v.weddingMonths} tháng. Nếu không muốn phụ thuộc tiền mừng, hãy xem thêm kịch bản bỏ biến "tiền mừng dự kiến".`;
      return { result: monthly === 0 ? 'Đã đủ ✓' : fmt(monthly), details: [
        { label: 'Bàn tiệc và chi phí bàn', value: tables + ' bàn · ' + fmtM(foodCost) },
        { label: 'Tổng chi phí trước tiền mừng', value: fmtM(grossBudget) },
        { label: 'Tiền mừng dự kiến bù trừ', value: '- ' + fmtM(expectedGift) },
        { label: 'Mục tiêu tiền mặt cần có', value: fmtM(targetCash) },
        { label: 'Tiết kiệm hiện có sau lãi', value: fmtM(futureSavings) },
        { label: 'Còn thiếu', value: gap > 0 ? fmtM(gap) : 'Không thiếu' },
      ], insight };
    },
  },
  {
    id: 'hoc-phi', name: 'Học Phí Tương Lai', category: 'Planning', abbr: 'HP',
    intent: 'Informational intent', panel: 'generic',
    description: 'Ước tính học phí thực tế theo lạm phát học phí và tính số tiền cần chuẩn bị từ hôm nay.',
    jtbd: 'Tôi muốn dành tiền cho con đi học nhưng không biết X năm nữa học phí sẽ tăng bao nhiêu. Cần ước tính ngay <b>học phí tương lai sau lạm phát và khoản chênh so với hiện tại</b>, để <b>chuẩn bị quỹ giáo dục đúng lộ trình mà không bị bất ngờ khi đến năm con cần dùng</b>.',
    formula: 'Học phí tương lai = <b>Học phí hiện tại × (1 + Lạm phát/năm)ⁿ</b><br><em>n = số năm đến khi cần dùng</em>',
    resultLabel: 'HỌC PHÍ TƯƠNG LAI ƯỚC TÍNH',
    fields: [
      { id: 'currentFee',   label: 'Học phí/năm hiện tại',   type: 'money',  min: 1000000, max: 500000000, step: 1000000, value: 30000000, chips: [15000000, 30000000, 80000000] },
      { id: 'yearsUntil',   label: 'Số năm đến khi cần',     type: 'select', options: [
        {value:1,label:'1 năm'},{value:3,label:'3 năm'},{value:5,label:'5 năm'},
        {value:10,label:'10 năm'},{value:15,label:'15 năm'},{value:18,label:'18 năm'},
      ], value: 5 },
      { id: 'feeInflation', label: 'Tăng học phí/năm',       type: 'range',  min: 3, max: 20, step: 0.5, value: 8, unit: '%', chips: [5, 8, 12, 15], chipLabels: ['Công lập', 'Ngoài CL', 'Tư thục CLC', 'Quốc tế'] },
    ],
    compute(v) {
      const future = v.currentFee * Math.pow(1 + v.feeInflation / 100, v.yearsUntil);
      const totalNeeded = future * 4; // 4-year degree estimate
      const monthlySave = totalNeeded / (v.yearsUntil * 12);
      const insight = 'Với lạm phát học phí ' + v.feeInflation + '%/năm, sau ' + v.yearsUntil + ' năm học phí sẽ tăng '
        + ((Math.pow(1 + v.feeInflation / 100, v.yearsUntil) - 1) * 100).toFixed(0) + '% so với hiện tại.';
      return { result: fmtM(future), details: [
        { label: 'Tổng 4 năm đại học', value: fmtM(totalNeeded) },
        { label: 'Cần để dành/tháng', value: fmtM(monthlySave) },
        { label: 'Tăng so với hiện tại', value: fmtM(future - v.currentFee) },
      ], insight };
    },
  },
  {
    id: 'phat-nguoi', name: 'Tra cứu Phạt Nguội', category: 'Platform', abbr: 'PN',
    intent: 'Transactional intent', panel: 'phat-nguoi',
    description: 'Kiểm tra biển số có vi phạm giao thông đang chờ xử lý. Kết quả mô phỏng theo dữ liệu Cục CSGT và hệ thống giám sát.',
    jtbd: 'Tôi muốn kiểm tra nhanh <b>xe của mình có bị phạt nguội không</b> trước khi đăng kiểm hoặc sang tên, để <b>xử lý kịp thời và tránh bị giữ xe</b>.',
  },
];

const UI_DECISION_FALLBACKS = {
  money: { valueType: 'money', precision: 'exact', decisionMode: 'confirm' },
  range: { valueType: 'number', precision: 'approximate', decisionMode: 'explore' },
  select: { valueType: 'enum', precision: 'exact', decisionMode: 'confirm' },
  pills: { valueType: 'enum', precision: 'exact', decisionMode: 'compare' },
  'select-items': { valueType: 'enum', precision: 'exact', decisionMode: 'compare', compareOptions: true },
};

function deriveFieldUi(field) {
  const fallback = UI_DECISION_FALLBACKS[field.type] || {};
  return {
    ...fallback,
    sampleNumbers: Array.isArray(field.chips) && field.chips.length > 0,
    optionCount: Array.isArray(field.options) ? field.options.length : undefined,
    ...field.ui,
  };
}

function inferFieldControl(field) {
  const ui = deriveFieldUi(field);
  if (ui.control) return ui.control;

  if (Array.isArray(field.options) && field.options.length) {
    if (ui.compareOptions) return 'select-items';
    if ((ui.decisionMode === 'compare' || field.type === 'pills') && field.options.length <= 4) return 'pills';
    if (field.type === 'select-items') return 'select-items';
    return 'select';
  }

  if (ui.valueType === 'money') return 'money';
  if (ui.decisionMode === 'explore' || ui.valueType === 'percent' || ui.valueType === 'score') return 'range';
  return field.type || 'money';
}

function normalizeFieldDefinition(field) {
  const ui = deriveFieldUi(field);
  return {
    ...field,
    declaredType: field.type,
    ui,
    type: inferFieldControl({ ...field, ui }),
  };
}

function normalizeToolDefinition(tool) {
  if (!Array.isArray(tool.fields)) return tool;
  return {
    ...tool,
    fields: tool.fields.map(normalizeFieldDefinition),
  };
}

for (let i = 0; i < TOOLS.length; i += 1) {
  TOOLS[i] = normalizeToolDefinition(TOOLS[i]);
}

// ─── State
let currentToolId = TOOLS[0].id;
let detailMode = false;

// ─── Sidebar
function renderSidebar() {
  const categories = [...new Set(TOOLS.map(t => t.category))];
  let html = '';
  categories.forEach(cat => {
    const items = TOOLS.filter(t => t.category === cat);
    html += `<section class="tool-group">
      <div class="tool-group-head">
        <span>${cat}</span>
        <strong>${items.length} tools</strong>
      </div>
      <div class="tool-group-items">
        ${items.map(t => `
          <button class="tool-item${t.id === currentToolId ? ' active' : ''}" data-id="${t.id}">
            <span class="tool-icon">${t.abbr}</span>
            <span class="tool-item-label"><strong>${t.name}</strong><span>${t.category}</span></span>
          </button>
        `).join('')}
      </div>
    </section>`;
  });
  document.getElementById('toolList').innerHTML = html;
}

function bindToolList() {
  const list = document.getElementById('toolList');
  if (!list || list.dataset.bound === '1') return;
  list.dataset.bound = '1';
  list.addEventListener('click', event => {
    const btn = event.target.closest('.tool-item');
    if (!btn || !list.contains(btn)) return;
    event.preventDefault();
    selectTool(btn.dataset.id);
    const workspace = document.getElementById('tools');
    if (workspace) {
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      workspace.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    }
  });
}

function setDetailMode(enabled) {
  detailMode = enabled;
  document.body.classList.toggle('tool-detail-mode', enabled);
}

function syncHash(id) {
  if (location.hash.slice(1) === id) return;
  try {
    history.replaceState(null, '', `#${id}`);
  } catch(e) {
    location.hash = id;
  }
  if (location.hash.slice(1) !== id) location.hash = id;
}

function selectTool(id, options = {}) {
  const { updateHash = true, detail = true, focusPanel = true } = options;
  const tool = TOOLS.find(t => t.id === id);
  if (!tool) return;
  currentToolId = id;
  setDetailMode(detail);
  if (updateHash) syncHash(id);
  renderSidebar();
  document.getElementById('genericPanel').hidden = tool.panel !== 'generic';
  document.getElementById('goldPanel').hidden    = tool.panel !== 'gold';
  document.getElementById('stockPanel').hidden   = tool.panel !== 'stock';
  document.getElementById('cicPanel').hidden      = tool.panel !== 'cic';
  document.getElementById('bankRatePanel').hidden = tool.panel !== 'bank-rate';
  document.getElementById('fxPanel').hidden       = tool.panel !== 'fx';
  document.getElementById('fxComparePanel').hidden     = tool.panel !== 'fx-compare';
  document.getElementById('travelBudgetPanel').hidden  = tool.panel !== 'travel-budget';
  document.getElementById('khPanel').hidden            = tool.panel !== 'kieu-hoi';
  document.getElementById('firePanel').hidden          = tool.panel !== 'fire';
  document.getElementById('ciCarePanel').hidden        = tool.panel !== 'ci-care';
  document.getElementById('phatNguoiPanel').hidden      = tool.panel !== 'phat-nguoi';
  document.getElementById('cameraLookupPanel').hidden   = tool.panel !== 'camera-lookup';
  if (tool.panel === 'generic')       renderGenericPanel(tool);
  if (tool.panel === 'gold')          initGoldPanel();
  if (tool.panel === 'stock')         renderStockTable();
  if (tool.panel === 'cic')           renderCicPanel();
  if (tool.panel === 'bank-rate')     computeBankRate();
  if (tool.panel === 'fx')            computeFx();
  if (tool.panel === 'fx-compare')    initFxComparePanel();
  if (tool.panel === 'travel-budget') initTravelBudgetPanel();
  if (tool.panel === 'kieu-hoi')      initKhPanel();
  if (tool.panel === 'fire')          initFirePanel();
  if (tool.panel === 'ci-care')       initCiCarePanel();
  if (tool.panel === 'phat-nguoi')    initPhatNguoiPanel();
  if (tool.panel === 'camera-lookup') initCameraLookupPanel();
  renderToolPicker();
  if (focusPanel) {
    const activePanel = document.querySelector('.tool-panel:not([hidden])');
    if (activePanel) {
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      activePanel.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    }
  }
}

function renderToolPicker() {
  const listEl = document.getElementById('genericToolPicker');
  const countEl = document.getElementById('genericToolCount');
  if (!listEl || !countEl) return;

  countEl.textContent = `${TOOLS.length} tools`;
  listEl.innerHTML = TOOLS.map(tool => `
    <button
      type="button"
      class="tool-switcher-item${tool.id === currentToolId ? ' active' : ''}"
      role="option"
      aria-selected="${tool.id === currentToolId}"
      data-id="${tool.id}">
      <span class="tool-switcher-item-main">
        <strong>${tool.name}</strong>
        <small>${tool.category}</small>
      </span>
      <span class="tool-switcher-item-code">${tool.abbr}</span>
    </button>
  `).join('');
}

function bindToolPicker() {
  const listEl = document.getElementById('genericToolPicker');
  if (!listEl || listEl.dataset.bound === '1') return;

  listEl.dataset.bound = '1';
  listEl.addEventListener('click', event => {
    const btn = event.target.closest('.tool-switcher-item');
    if (!btn || !listEl.contains(btn)) return;
    event.preventDefault();
    selectTool(btn.dataset.id);
  });
  renderToolPicker();
}

// ─── Generic Panel
function renderGenericPanel(tool) {
  const panelEl = document.getElementById('genericPanel');
  const calculatorEl = panelEl?.querySelector('.calculator-layout');
  if (panelEl) panelEl.dataset.ui = tool.ui || 'default';
  if (calculatorEl) calculatorEl.classList.toggle('calculator-product-layout', tool.ui === 'calculator-product' || tool.ui === 'vehicle-compare');
  if (calculatorEl) calculatorEl.classList.toggle('debt-payoff-layout', tool.ui === 'debt-matrix');
  if (calculatorEl) calculatorEl.classList.toggle('goal-planner-layout', tool.ui === 'goal-planner');
  document.getElementById('genericCategory').textContent    = tool.category.toUpperCase();
  document.getElementById('genericTitle').textContent       = tool.name;
  document.getElementById('genericDescription').textContent = tool.description;
  document.getElementById('genericIntent').textContent      = tool.intent;
  const formulaEl = document.getElementById('genericFormula');
  if (formulaEl) {
    if (tool.formula) { formulaEl.innerHTML = tool.formula; formulaEl.style.display = ''; }
    else formulaEl.style.display = 'none';
  }
  const jtbdEl = document.getElementById('genericJtbd');
  if (jtbdEl) {
    const body = jtbdEl.querySelector('p');
    if (tool.jtbd && body) {
      body.innerHTML = tool.jtbd;
      jtbdEl.style.display = '';
    } else {
      jtbdEl.style.display = 'none';
    }
  }

  // Highlights row (4 icons)
  const hlEl = document.getElementById('genericHighlights');
  if (hlEl) {
    if (tool.highlights && tool.highlights.length) {
      hlEl.innerHTML = tool.highlights.map(h => `
        <div class="highlight-item">
          <span class="highlight-icon">${svgIcon(h.icon, 'highlight-svg')}</span>
          <span class="highlight-text">${h.text}</span>
        </div>
      `).join('');
      hlEl.style.display = '';
    } else {
      hlEl.style.display = 'none';
    }
  }

  renderToolPartners(tool);

  // Disclaimer
  const discEl = document.getElementById('genericDisclaimer');
  if (discEl) {
    if (tool.disclaimer) { discEl.textContent = tool.disclaimer; discEl.style.display = ''; }
    else discEl.style.display = 'none';
  }

  // CTA text
  const ctaEl = document.getElementById('genericCta');
  if (ctaEl) {
    ctaEl.textContent = tool.ctaText || 'Xem giải pháp phù hợp trên MoMo';
    ctaEl.onclick = () => momo_track('cta_click', { cta: tool.ctaText ? 'check_now' : 'view_solution', tool_id: tool.id });
  }

  const container = document.getElementById('genericFields');
  if (container) container.dataset.toolId = tool.id;
  const condAttr = f => f.condition ? ` data-cond-field="${f.condition.field}" data-cond-value="${[].concat(f.condition.value).join(',')}"` : '';
  const initialFieldValues = Object.fromEntries(tool.fields.map(f => [f.id, f.value]));
  const renderFieldLabel = f => `
    <span class="field-label-main">
      <span>${f.label}</span>
      ${f.tooltip ? `
        <button
          type="button"
          class="field-help"
          aria-label="Giải thích cho trường ${escapeHtml(f.label)}"
          data-tooltip="${escapeHtml(f.tooltip)}">i</button>
      ` : ''}
    </span>
  `;
  const renderField = (f, options = {}) => {
    const compactClass = options.compact ? ' compact-field' : '';
    const showChips = !options.hideChips;
    const ariaLabel = options.ariaLabel || f.label;
    if (f.type === 'money') {
      const formattedInitial = (f.value || 0).toLocaleString('vi-VN');
      return `<div class="field-group${compactClass}" data-field="${f.id}"${condAttr(f)}>
        <label class="field-label" for="${f.id}">${renderFieldLabel(f)}</label>
        <div class="money-input-row">
          <input type="text" inputmode="numeric" id="${f.id}" value="${formattedInitial}" aria-label="${ariaLabel}">
          <span class="unit-tag">đ</span>
        </div>
        <div class="money-smart-chips" id="${f.id}SmartChips" hidden></div>
        ${showChips ? `<div class="money-chips">
          ${(f.chips || []).map(c => `<button type="button" class="chip-btn${c === f.value ? ' active' : ''}" data-val="${c}">${fmtChip(c)}</button>`).join('')}
        </div>` : ''}
      </div>`;
    }
    if (f.type === 'range' || f.type === 'stepper') {
      const unitTxt = (f.unit || '').trim();
      const unitTag = unitTxt ? `<span class="unit-tag">${unitTxt}</span>` : '';
      const chips = f.chips || autoChips(f);
      const sliderMarkup = f.type === 'range'
        ? `<input type="range" class="range-slider" id="${f.id}Range" value="${f.value}" min="${f.min}" max="${f.max}" step="${f.step}" aria-label="${ariaLabel}">`
        : '';
      return `<div class="field-group${compactClass}" data-field="${f.id}"${condAttr(f)}>
        <label class="field-label" for="${f.id}">${renderFieldLabel(f)}</label>
        <div class="num-input-row">
          <button type="button" class="num-step" data-target="${f.id}" data-dir="-1" aria-label="Giảm">−</button>
          <input type="number" id="${f.id}" value="${f.value}" min="${f.min}" max="${f.max}" step="${f.step}" aria-label="${ariaLabel}">
          ${unitTag}
          <button type="button" class="num-step" data-target="${f.id}" data-dir="1" aria-label="Tăng">+</button>
        </div>
        ${sliderMarkup}
        ${showChips && chips.length ? `<div class="num-chips${f.chipLabels ? ' num-chips-labeled' : ''}">
          ${chips.map((c, i) => `<button type="button" class="chip-btn${f.chipLabels?.[i] ? ' chip-labeled' : ''}${+c === +f.value ? ' active' : ''}" data-val="${c}"><span>${formatChip(c, f)}</span>${f.chipLabels?.[i] ? `<small>${f.chipLabels[i]}</small>` : ''}</button>`).join('')}
        </div>` : ''}
      </div>`;
    }
    if (f.type === 'pills') {
      const optionsList = resolveFieldOptions(f, initialFieldValues);
      return `<div class="field-group${compactClass}" data-field="${f.id}"${condAttr(f)}>
        <label class="field-label" for="${f.id}">${renderFieldLabel(f)}</label>
        <input type="hidden" id="${f.id}" value="${f.value}">
        <div class="pills-grid" role="group" aria-label="${ariaLabel}">
          ${optionsList.map(o => `<button type="button" class="pill-btn${o.note ? ' pill-btn-explained' : ''}${String(o.value) === String(f.value) ? ' active' : ''}" data-val="${o.value}" aria-pressed="${String(o.value) === String(f.value)}"><span>${o.label}</span>${o.note ? `<small>${o.note}</small>` : ''}</button>`).join('')}
        </div>
      </div>`;
    }
    if (f.type === 'select-items') {
      const optionsList = resolveFieldOptions(f, initialFieldValues);
      return `<div class="field-group${compactClass}" data-field="${f.id}"${condAttr(f)}>
        <label class="field-label" for="${f.id}">${renderFieldLabel(f)}</label>
        <input type="hidden" id="${f.id}" value="${f.value}">
        <div class="select-items-grid" role="group" aria-label="${ariaLabel}">
          ${optionsList.map(o => `<button type="button" class="select-item-btn${String(o.value) === String(f.value) ? ' active' : ''}" data-val="${o.value}" aria-pressed="${String(o.value) === String(f.value)}">
            <span class="select-item-mark">${o.label}</span>
            ${o.note ? `<small>${o.note}</small>` : ''}
          </button>`).join('')}
        </div>
      </div>`;
    }
    const optionsList = resolveFieldOptions(f, initialFieldValues);
    const opts = optionsList.map(o => `<option value="${o.value}"${String(o.value) === String(f.value) ? ' selected' : ''}>${o.label}</option>`).join('');
    return `<div class="field-group${compactClass}" data-field="${f.id}"${condAttr(f)}>
      <label class="field-label" for="${f.id}">${renderFieldLabel(f)}</label>
      <select id="${f.id}" aria-label="${ariaLabel}">${opts}</select>
    </div>`;
  };

  const renderDebtMatrix = () => {
    const field = id => tool.fields.find(item => item.id === id);
    const debtRows = [
      { name: 'Thẻ tín dụng', note: 'Ưu tiên kiểm soát lãi suất cao', fields: ['dpCardBalance', 'dpCardRate', 'dpCardMin'] },
      { name: 'Vay tiêu dùng', note: 'Khoản vay trả góp đang hoạt động', fields: ['dpLoanBalance', 'dpLoanRate', 'dpLoanMin'] },
      { name: 'Khoản nợ khác', note: 'Các nghĩa vụ nợ còn lại', fields: ['dpOtherBalance', 'dpOtherRate', 'dpOtherMin'] },
    ];
    return `<div class="debt-matrix">
      <div class="debt-matrix-head">
        <div><span>CÁC KHOẢN NỢ</span><strong>Nhập dư nợ đang hoạt động</strong></div>
        <small>Đơn vị: VNĐ và %/năm</small>
      </div>
      ${debtRows.map(row => `<section class="debt-entry">
        <header class="debt-entry-head">
          <span class="debt-entry-dot" aria-hidden="true"></span>
          <div><strong>${row.name}</strong><small>${row.note}</small></div>
        </header>
        <div class="debt-entry-grid">
          ${row.fields.map(id => renderField(field(id), { compact: true, hideChips: true, ariaLabel: `${row.name}: ${field(id).label}` })).join('')}
        </div>
      </section>`).join('')}
      <section class="payoff-controls">
        <div class="payoff-controls-head">
          <div><span>KẾ HOẠCH THANH TOÁN</span><strong>Chọn cách bạn muốn trả nợ</strong></div>
          <small>Kết quả cập nhật tức thì</small>
        </div>
        <div class="payoff-controls-grid">
          ${renderField(field('dpExtra'), { compact: true })}
          ${renderField(field('dpStrategy'), { compact: true })}
        </div>
        <div class="strategy-guide">
          <span><b>Muốn trả ít lãi hơn?</b> Chọn Giảm tổng lãi</span>
          <span><b>Muốn thấy tiến độ sớm?</b> Chọn Xóa khoản nhỏ</span>
        </div>
      </section>
    </div>`;
  };

  const renderVehicleCompare = () => {
    const sharedFields = tool.fields.filter(f => f.group === 'shared');
    const fuelFields = tool.fields.filter(f => f.group === 'fuel');
    const evFields = tool.fields.filter(f => f.group === 'ev');
    return `
      <div class="vc-shared">
        ${sharedFields.map(f => renderField(f)).join('')}
      </div>
      <div class="vc-columns">
        <div class="vc-col vc-col-fuel">
          <div class="vc-col-header">
            <span class="vc-col-dot vc-col-dot-fuel" aria-hidden="true"></span>
            <div>
              <strong>Xe xăng</strong>
              <small>Chi phí nhiên liệu</small>
            </div>
          </div>
          ${fuelFields.map(f => renderField(f)).join('')}
        </div>
        <div class="vc-col vc-col-ev">
          <div class="vc-col-header">
            <span class="vc-col-dot vc-col-dot-ev" aria-hidden="true"></span>
            <div>
              <strong>Xe điện</strong>
              <small>Chi phí sạc điện</small>
            </div>
          </div>
          ${evFields.map(f => renderField(f)).join('')}
        </div>
      </div>`;
  };

  container.classList.toggle('debt-payoff-fields', tool.ui === 'debt-matrix');
  container.classList.toggle('goal-planner-fields', tool.ui === 'goal-planner');
  container.classList.toggle('vehicle-compare-fields', tool.ui === 'vehicle-compare');
  container.innerHTML = tool.ui === 'debt-matrix'
    ? renderDebtMatrix()
    : tool.ui === 'vehicle-compare'
    ? renderVehicleCompare()
    : tool.fields.map(f => renderField(f)).join('');

  // Conditional field visibility based on data-cond-field/value
  applyConditionalFields();

  tool.fields.forEach(f => {
    const el = document.getElementById(f.id);
    const rangeEl = f.type === 'range' ? document.getElementById(`${f.id}Range`) : null;
    if (rangeEl) setRangeFill(rangeEl);
    el.addEventListener('input', () => {
      if (rangeEl && rangeEl.value !== el.value) {
        rangeEl.value = el.value;
        setRangeFill(rangeEl);
      }
      if (f.type === 'range' || f.type === 'stepper' || f.type === 'money') {
        const currentNum = f.type === 'money' ? parseMoney(el.value) : +el.value;
        document.querySelectorAll(`[data-field="${f.id}"] .chip-btn`).forEach(btn => {
          btn.classList.toggle('active', +btn.dataset.val === currentNum);
        });
      }
      if (f.type === 'money') {
        const raw = el.value.replace(/[^\d]/g, '');
        const bare = +raw;
        const smartEl = document.getElementById(`${f.id}SmartChips`);
        if (smartEl && raw.length > 0 && raw === el.value.replace(/\s/g, '') && bare > 0 && bare <= 9999) {
          const mults = [1_000_000, 10_000_000, 100_000_000];
          if (bare <= 99) mults.push(1_000_000_000);
          const suggs = mults.map(m => bare * m).filter(v => v >= 1_000_000 && v <= (f.max || 100_000_000_000));
          if (suggs.length) {
            smartEl.innerHTML = '<span class="smart-chips-hint">Ý bạn muốn nhập:</span>' +
              suggs.map(v => `<button type="button" class="chip-btn smart-chip" data-val="${v}">${fmtSmartChip(v)}</button>`).join('');
            smartEl.hidden = false;
            smartEl.onclick = e => {
              const btn = e.target.closest('.smart-chip');
              if (!btn) return;
              el.value = (+btn.dataset.val).toLocaleString('vi-VN');
              smartEl.hidden = true;
              el.dispatchEvent(new Event('input', { bubbles: true }));
            };
          } else {
            smartEl.hidden = true;
          }
        } else if (smartEl) {
          smartEl.hidden = true;
        }
      }
      if (f.type === 'pills') {
        document.querySelectorAll(`[data-field="${f.id}"] .pill-btn`).forEach(btn => {
          const isActive = String(btn.dataset.val) === String(el.value);
          btn.classList.toggle('active', isActive);
          btn.setAttribute('aria-pressed', String(isActive));
        });
      }
      if (f.type === 'select-items') {
        document.querySelectorAll(`[data-field="${f.id}"] .select-item-btn`).forEach(btn => {
          const isActive = String(btn.dataset.val) === String(el.value);
          btn.classList.toggle('active', isActive);
          btn.setAttribute('aria-pressed', String(isActive));
        });
      }
      refreshDynamicFieldOptions(tool);
      applyConditionalFields();
      computeGeneric(tool);
    });
    if (f.type === 'money') {
      el.addEventListener('blur', () => {
        const num = parseMoney(el.value);
        el.value = num.toLocaleString('vi-VN');
        const smartEl = document.getElementById(`${f.id}SmartChips`);
        if (smartEl) smartEl.hidden = true;
      });
    }
    if (f.type === 'money' || f.type === 'range' || f.type === 'stepper') {
      document.querySelectorAll(`[data-field="${f.id}"] .chip-btn`).forEach(btn => {
        btn.addEventListener('click', () => {
          if (f.type === 'money') {
            el.value = (+btn.dataset.val).toLocaleString('vi-VN');
          } else {
            el.value = btn.dataset.val;
          }
          el.dispatchEvent(new Event('input', { bubbles: true }));
        });
      });
    }
    if (f.type === 'select-items') {
      document.querySelectorAll(`[data-field="${f.id}"] .select-item-btn`).forEach(btn => {
        btn.addEventListener('click', () => {
          el.value = btn.dataset.val;
          el.dispatchEvent(new Event('input', { bubbles: true }));
        });
      });
    }
    if (f.type === 'range' || f.type === 'stepper') {
      rangeEl?.addEventListener('input', () => {
        el.value = rangeEl.value;
        setRangeFill(rangeEl);
        el.dispatchEvent(new Event('input', { bubbles: true }));
      });
      document.querySelectorAll(`[data-field="${f.id}"] .num-step`).forEach(btn => {
        btn.addEventListener('click', () => {
          const dir = +btn.dataset.dir;
          const step = f.step || 1;
          const current = +el.value || f.min;
          const newVal = current + dir * step;
          const clamped = Math.max(f.min, Math.min(f.max, newVal));
          el.value = +clamped.toFixed(4);
          el.dispatchEvent(new Event('input', { bubbles: true }));
        });
      });
    }
    if (f.type === 'pills') {
      document.querySelectorAll(`[data-field="${f.id}"] .pill-btn`).forEach(btn => {
        btn.addEventListener('click', () => {
          el.value = btn.dataset.val;
          el.dispatchEvent(new Event('input', { bubbles: true }));
        });
      });
    }
  });

  refreshDynamicFieldOptions(tool);
  computeGeneric(tool);
}

function renderToolPartners(tool, vals = null) {
  const partEl = document.getElementById('genericPartners');
  if (!partEl) return;

  if (tool.id === 'bao-hiem-o-to') {
    partEl.innerHTML = '';
    partEl.style.display = 'none';
    return;
  }

  partEl.className = 'partners-row';
  if (tool.partners && tool.partners.length) {
    partEl.innerHTML = `
      <div class="partners-title">${tool.partnerTitle || 'Đối tác đề xuất'}</div>
      <div class="partners-grid">
        ${tool.partners.map(p => `
          <div class="partner-card">
            <span class="partner-abbr" style="background:${p.color}">${p.abbr}</span>
            <span class="partner-name">${p.name}</span>
          </div>
        `).join('')}
      </div>
    `;
    partEl.style.display = '';
  } else {
    partEl.style.display = 'none';
  }
}

function normalizeDetailText(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/<[^>]*>/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function formatDonutValue(value) {
  return String(value || '').replace(/\sđ$/, '&nbsp;đ');
}

function dedupeVisualDetails(details, visual) {
  if (!visual || !Array.isArray(details) || visual.dedupeDetails === false) return details;
  const visualLabels = new Set((visual.items || []).map(item => normalizeDetailText(item.label)));
  const visualValues = new Set((visual.items || []).map(item => normalizeDetailText(item.value)));
  const totalLabel = normalizeDetailText(visual.totalLabel);
  const totalValue = normalizeDetailText(visual.totalValue);

  return details.filter(detail => {
    const label = normalizeDetailText(detail.label);
    const value = normalizeDetailText(detail.value);
    if (visualLabels.has(label) || visualValues.has(value)) return false;
    if (value === totalValue && (label.includes('tổng') || label === totalLabel)) return false;
    return true;
  });
}

function autoChips(f) {
  const range = f.max - f.min;
  const raw = [f.min + range * 0.25, f.min + range * 0.5, f.min + range * 0.75];
  return raw.map(v => {
    const stepped = Math.round(v / f.step) * f.step;
    return +stepped.toFixed(4);
  });
}

function setRangeFill(el) {
  const min = Number(el.min || 0);
  const max = Number(el.max || 100);
  const value = Number(el.value || min);
  const ratio = max > min ? (value - min) / (max - min) : 0;
  el.style.setProperty('--slider-fill', `${Math.max(0, Math.min(100, ratio * 100))}%`);
}

function formatChip(val, f) {
  const unit = (f.unit || '').trim();
  if (unit === '%') return val + '%';
  if (unit === 'điểm') return val + ' đ';
  if (unit === 'năm') return val + ' năm';
  if (unit === 'tháng') return val + ' tháng';
  if (unit === 'khách') return val + ' khách';
  if (val >= 1e9) return (val / 1e9 % 1 === 0 ? val / 1e9 : +(val / 1e9).toFixed(1)) + ' tỷ';
  if (val >= 1e6) return (val / 1e6 % 1 === 0 ? val / 1e6 : +(val / 1e6).toFixed(1)) + ' tr';
  return val + (unit ? ' ' + unit : '');
}

function readToolFieldValues(tool) {
  const vals = {};
  tool.fields.forEach(f => {
    const el = document.getElementById(f.id);
    const raw = el ? el.value : f.value;
    if (f.type === 'money') {
      vals[f.id] = parseMoney(raw);
    } else {
      const num = +raw;
      vals[f.id] = (raw !== '' && !isNaN(num)) ? num : raw;
    }
  });
  return vals;
}

function resolveFieldOptions(field, vals = {}) {
  const options = typeof field.options === 'function' ? field.options(vals) : field.options;
  return Array.isArray(options) ? options : [];
}

function refreshDynamicFieldOptions(tool) {
  const vals = readToolFieldValues(tool);
  tool.fields.forEach(f => {
    if (typeof f.options !== 'function' || f.type !== 'select') return;
    const el = document.getElementById(f.id);
    if (!el) return;
    const options = resolveFieldOptions(f, vals);
    const currentValue = String(el.value || '');
    const nextValue = options.some(option => String(option.value) === currentValue)
      ? currentValue
      : String(options[0]?.value || '');
    el.innerHTML = options.map(option => `<option value="${option.value}"${String(option.value) === nextValue ? ' selected' : ''}>${option.label}</option>`).join('');
    el.value = nextValue;
    vals[f.id] = nextValue;
  });
}

function applyConditionalFields() {
  document.querySelectorAll('[data-cond-field]').forEach(el => {
    const fieldId = el.dataset.condField;
    const allowed = (el.dataset.condValue || '').split(',');
    const current = document.getElementById(fieldId)?.value;
    el.style.display = allowed.includes(String(current)) ? '' : 'none';
  });
}

function syncTietKiemUi(tool, vals) {
  if (tool.id !== 'tiet-kiem') return;
  const isMonthly = vals.savingMode === 'monthly';
  const setFieldLabel = (fieldId, text) => {
    const labelSpan = document.querySelector(`[data-field="${fieldId}"] .field-label-main > span`);
    if (labelSpan) labelSpan.textContent = text;
  };
  const setFieldTooltip = (fieldId, text) => {
    const helpEl = document.querySelector(`[data-field="${fieldId}"] .field-help`);
    if (helpEl) helpEl.setAttribute('data-tooltip', text);
  };

  setFieldLabel('principal', isMonthly ? 'Số tiền gửi mỗi tháng' : 'Số tiền gửi ban đầu');
  setFieldLabel('term', isMonthly ? 'Kỳ hạn tái gửi áp dụng' : 'Kỳ hạn gửi');
  setFieldTooltip(
    'term',
    isMonthly
      ? 'Đây là kỳ hạn của sản phẩm tiết kiệm dùng để áp bảng lãi suất niêm yết khi bạn gửi đều và tái gửi tự động, không phải thời gian mục tiêu tích lũy.'
      : 'Đây là kỳ hạn của khoản tiền gửi 1 lần. Lãi suất niêm yết được map cố định theo bảng sản phẩm ngày 23/6/2026.'
  );

  const formulaEl = document.getElementById('genericFormula');
  if (formulaEl) {
    formulaEl.innerHTML = isMonthly
      ? 'Gửi đều hàng tháng: <b>FV = M × ((1 + mr)<sup>n</sup> - 1) / mr</b><br><em>M = số tiền gửi mỗi tháng, mr = lãi suất tháng, n = số tháng tích lũy. Kỳ hạn tái gửi quyết định mức lãi suất niêm yết áp dụng.</em>'
      : 'Gửi 1 lần: <b>Lãi = Gốc × Lãi suất/năm × Kỳ hạn ÷ 12</b><br>Tổng nhận = <b>Gốc + Lãi</b><br><em>Áp dụng lãi đơn cuối kỳ theo bảng niêm yết ngày 23/6/2026.</em>';
    formulaEl.style.display = '';
  }
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

function fmtSmartChip(val) {
  if (val >= 1e9) {
    const b = val / 1e9;
    return (b % 1 === 0 ? b : b.toFixed(1)) + ' tỷ';
  }
  const m = val / 1e6;
  return (m % 1 === 0 ? m : m.toFixed(1)) + ' triệu';
}

function computeGeneric(tool) {
  const vals = readToolFieldValues(tool);
  syncTietKiemUi(tool, vals);
  const res = tool.compute(vals);
  renderToolPartners(tool, vals);
  document.getElementById('resultLabel').textContent  = res.resultLabel || tool.resultLabel;
  document.getElementById('resultValue').textContent  = res.result;
  const detailRows = dedupeVisualDetails(res.details, res.visual);
  document.getElementById('resultDetails').innerHTML  = detailRows.map(d =>
    `<div class="result-row"><span>${d.label}</span><strong>${d.value}</strong></div>`
  ).join('');
  const badgeEl = document.getElementById('resultBadge');
  if (badgeEl) {
    if (res.badge) { badgeEl.textContent = res.badge; badgeEl.style.display = 'inline-flex'; }
    else badgeEl.style.display = 'none';
  }
  const visualEl = document.getElementById('resultVisual');
  if (visualEl) {
    if (res.visual && res.visual.items?.length) {
      const totalAmount = res.visual.items.reduce((sum, item) => sum + (item.amount || 0), 0) || 1;
      let offset = 0;
      const segments = res.visual.items.map(item => {
        const pct = Math.max(0, (item.amount || 0) / totalAmount);
        const start = Math.round(offset * 360);
        offset += pct;
        const end = Math.round(offset * 360);
        return `${item.color} ${start}deg ${end}deg`;
      }).join(', ');
      visualEl.innerHTML = `
        <div class="result-visual-head">
          <strong>${res.visual.title}</strong>
          ${res.visual.showHeadSummary ? `<span>${res.visual.totalLabel}: <b>${res.visual.totalValue}</b></span>` : ''}
        </div>
        <div class="result-visual-body">
          <div class="result-visual-legend">
            ${res.visual.items.map(item => `
              <div class="result-legend-row">
                <span class="result-legend-dot" style="background:${item.color}"></span>
                <div class="result-legend-copy">
                  <span>${item.label}</span>
                  <b>${item.value}</b>
                </div>
              </div>
            `).join('')}
          </div>
          <div class="result-donut" style="--donut-fill: conic-gradient(${segments})">
            <div class="result-donut-center">
              <div>
                <span>${res.visual.totalLabel}</span>
                <strong>${formatDonutValue(res.visual.totalValue)}</strong>
              </div>
            </div>
          </div>
        </div>
      `;
      visualEl.style.display = '';
    } else {
      visualEl.style.display = 'none';
      visualEl.innerHTML = '';
    }
  }
  const insightEl = document.getElementById('resultInsight');
  if (insightEl) {
    if (res.insight) { insightEl.innerHTML = res.insight; insightEl.style.display = ''; }
    else insightEl.style.display = 'none';
  }
  const scheduleEl = document.getElementById('amortizationSchedule');
  if (scheduleEl) {
    if (res.schedule && res.schedule.length) {
      scheduleEl.style.display = '';
      scheduleEl.innerHTML = `
        <div class="amortization-head">
          <div>
            <strong>Lịch trả nợ - Dư nợ giảm dần</strong>
            <small>${res.schedule.length} kỳ · Phí thu hộ cố định 20.000đ/tháng</small>
          </div>
          <span class="amortization-tag">Reducing Balance</span>
        </div>
        <div class="amortization-table-wrap">
          <table class="amortization-table">
            <thead><tr>
              <th class="col-period">Kỳ</th>
              <th>Lãi trong kỳ</th>
              <th>Gốc trong kỳ</th>
              <th>Gốc + Lãi</th>
              <th>Phí thu hộ</th>
              <th class="col-emi">Tổng EMI</th>
              <th>Số gốc còn lại</th>
            </tr></thead>
            <tbody>
              ${res.schedule.map(s => `
                <tr>
                  <td class="col-period">${s.period}</td>
                  <td>${fmt(s.interest)}</td>
                  <td>${fmt(s.principal)}</td>
                  <td>${fmt(s.emi)}</td>
                  <td>${fmt(s.fee)}</td>
                  <td class="col-emi"><strong>${fmt(s.total)}</strong></td>
                  <td>${fmt(s.balance)}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `;
    } else {
      scheduleEl.style.display = 'none';
      scheduleEl.innerHTML = '';
    }
  }
  momo_track('tool_calculate', { tool_id: tool.id, tool_name: tool.name, tool_category: tool.category });
}

// ─── Gold Panel
// Giá tham chiếu snapshot 20/06/2026 từ bảng giá công bố SJC/PNJ/DOJI/BTMC/BTMH.
// prevBuy/prevSell = giá đóng cửa hôm qua (19/06/2026) để hiển thị delta.
const GOLD_PRODUCTS = [
  { id: 'sjc-luong',     name: 'SJC 1 lượng',          brand: 'SJC',  location: '',     unit: 'lượng', buy: 144200000, sell: 147200000, prevBuy: 147700000, prevSell: 150700000, trend: 'down' },
  { id: 'sjc-nhan',      name: 'SJC Nhẫn 1 chỉ',       brand: 'SJC',  location: '',     unit: 'chỉ',   buy: 14380000,  sell: 14680000,  prevBuy: 14730000,  prevSell: 15030000,  trend: 'down' },
  { id: 'pnj-hcm',       name: 'PNJ HCM 1 lượng',      brand: 'PNJ',  location: 'HCM',  unit: 'lượng', buy: 143500000, sell: 146500000, prevBuy: 146800000, prevSell: 149800000, trend: 'down' },
  { id: 'pnj-hn',        name: 'PNJ Hà Nội 1 lượng',   brand: 'PNJ',  location: 'HN',   unit: 'lượng', buy: 143300000, sell: 146400000, prevBuy: 146600000, prevSell: 149700000, trend: 'down' },
  { id: 'pnj-nhan',      name: 'PNJ Nhẫn 1 chỉ',       brand: 'PNJ',  location: '',     unit: 'chỉ',   buy: 14250000,  sell: 14550000,  prevBuy: 14500000,  prevSell: 14800000,  trend: 'down' },
  { id: 'doji-hn',       name: 'DOJI Hà Nội 1 lượng',  brand: 'DOJI', location: 'HN',   unit: 'lượng', buy: 143800000, sell: 146800000, prevBuy: 146900000, prevSell: 149900000, trend: 'down' },
  { id: 'doji-sg',       name: 'DOJI Sài Gòn 1 lượng', brand: 'DOJI', location: 'SG',   unit: 'lượng', buy: 143700000, sell: 146700000, prevBuy: 146800000, prevSell: 149800000, trend: 'down' },
  { id: 'btmc-luong',    name: 'BTMC 1 lượng',         brand: 'BTMC', location: '',     unit: 'lượng', buy: 143600000, sell: 146600000, prevBuy: 146700000, prevSell: 149700000, trend: 'down' },
  { id: 'btmh-luong',    name: 'BTMH 1 lượng',         brand: 'BTMH', location: '',     unit: 'lượng', buy: 143500000, sell: 146500000, prevBuy: 146600000, prevSell: 149600000, trend: 'down' },
];

const GOLD_WORLD = { pair: 'XAU/USD', price: 4194.00, change: -70.00, changePct: -1.64, high: 4268.50, low: 4158.20 };

// Tỷ giá USD/VND tham chiếu để tính premium VN vs thế giới
const GOLD_USD_VND = 26090;
// 1 lượng = 37,5g · 1 troy ounce = 31,1035g · 1 lượng = 1,20565 oz
const LUONG_PER_OUNCE = 37.5 / 31.1035;
// Premium TB 1 năm tham chiếu (SJC vs giá thế giới quy đổi)
const PREMIUM_AVG_1Y_PCT = 17.0;

const GOLD_NEWS = [
  { time: '14:35 · 20/06', tag: 'Thế giới',  title: 'Vàng thế giới rơi sát 4.150 USD/ounce, áp lực bán tăng khi USD mạnh', source: 'Tuổi Trẻ' },
  { time: '11:20 · 20/06', tag: 'Trong nước', title: 'SJC giảm 3,5 triệu/lượng theo đà giảm của vàng thế giới', source: '24h' },
  { time: '09:05 · 20/06', tag: 'Phân tích',  title: 'Premium SJC vs thế giới về dưới 15%, thấp nhất 6 tháng', source: 'CafeF' },
  { time: '19/06',         tag: 'Dự báo',    title: 'Goldman Sachs giữ mục tiêu 5.400 USD/oz cuối 2026', source: 'Lao Động' },
];

const TREND_ICON = { up: '▲', down: '▼', flat: '—' };
const TREND_COLOR = { up: '#12b76a', down: '#f04438', flat: '#98a2b3' };

// Chart state
let goldChartProductId = 'sjc-luong';
let goldChartRange = '1M';

// Deterministic pseudo-random based on seed (so chart looks stable per product/range)
function goldRand(seed) {
  let x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

// Generate price history for a product over a given range
function genGoldHistory(product, range) {
  const config = {
    '1D':  { points: 24, step: 'h',  label: 'giờ',  trendBias: 0.001 },
    '1W':  { points: 7,  step: 'd',  label: 'ngày', trendBias: 0.005 },
    '1M':  { points: 30, step: 'd',  label: 'ngày', trendBias: 0.02  },
    '3M':  { points: 12, step: 'w',  label: 'tuần', trendBias: 0.05  },
  }[range];
  const sellPrice = product.sell;
  const seedBase = product.id.split('').reduce((s, c) => s + c.charCodeAt(0), 0);
  const trendDir = product.trend === 'up' ? 1 : product.trend === 'down' ? -1 : 0.3;
  const points = [];
  for (let i = 0; i < config.points; i++) {
    const progress = i / (config.points - 1);
    const baseTrend = trendDir * config.trendBias * progress;
    const noise = (goldRand(seedBase + i * 7.3) - 0.5) * config.trendBias * 0.6;
    const price = sellPrice * (1 - trendDir * config.trendBias + baseTrend + noise);
    let label;
    if (config.step === 'h') label = `${String(9 + i).padStart(2, '0')}:00`;
    else if (config.step === 'd') label = `${config.points - i}${range === '1W' ? 'd' : ''}`;
    else label = `W${config.points - i}`;
    points.push({ price, label, i });
  }
  // Anchor end point to current price
  points[points.length - 1].price = sellPrice;
  return { points, config };
}

function renderGoldChart() {
  const product = GOLD_PRODUCTS.find(p => p.id === goldChartProductId) || GOLD_PRODUCTS[0];
  const { points } = genGoldHistory(product, goldChartRange);

  const min = Math.min(...points.map(p => p.price));
  const max = Math.max(...points.map(p => p.price));
  const range = max - min || 1;
  const width = 720;
  const height = 160;
  const pad = 20;
  const coords = points.map((point, index) => {
    const x = pad + index * ((width - pad * 2) / (points.length - 1));
    const y = height - pad - ((point.price - min) / range) * (height - pad * 2);
    return { ...point, x, y };
  });
  const line = coords.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');
  const area = `${line} L${coords[coords.length - 1].x.toFixed(1)},${height - pad} L${coords[0].x.toFixed(1)},${height - pad} Z`;
  const delta = (points[points.length - 1].price - points[0].price) / points[0].price * 100;
  const deltaText = `${delta >= 0 ? '+' : ''}${delta.toFixed(2)}%`;

  const rangeLabel = { '1D': '24 giờ', '1W': '7 ngày', '1M': '30 ngày', '3M': '3 tháng' }[goldChartRange];
  document.getElementById('goldChartTitle').textContent = `${product.name} · ${rangeLabel}`;
  const changeEl = document.getElementById('goldChartChange');
  changeEl.textContent = deltaText;
  changeEl.className = delta >= 0 ? 'up' : 'down';

  document.getElementById('goldChart').innerHTML = `
    <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="Biểu đồ giá ${product.name}" preserveAspectRatio="none">
      <defs>
        <linearGradient id="goldGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
          <stop offset="100%" stop-color="#f59e0b" stop-opacity="0"/>
        </linearGradient>
      </defs>
      <path class="gold-chart-area" d="${area}" fill="url(#goldGrad)"></path>
      <path class="gold-chart-line" d="${line}"></path>
    </svg>`;

  const firstLabel = points[0].label;
  const lastLabel = points[points.length - 1].label;
  document.getElementById('goldChartAxis').innerHTML =
    `<span>${firstLabel}</span><b>Thấp ${fmtM(min)} · Cao ${fmtM(max)}</b><span>${lastLabel}</span>`;
}

function initGoldPanel() {
  // Quick market snapshot (Vàng + USD + VN-Index)
  const sjcRef = GOLD_PRODUCTS.find(p => p.id === 'sjc-luong');
  const sjcDelta = sjcRef.sell - sjcRef.prevSell;
  // Cùng GOLD_USD_VND để khớp với premium calc trong renderGoldDecision
  const usdSell = GOLD_USD_VND;
  const vniValue = 1382.45;
  const vniDelta = -12.30;
  const quickMarket = document.getElementById('quickMarket');
  if (quickMarket) quickMarket.innerHTML = `
    <div class="quick-market-card">
      <span>SJC 1 lượng (bán)</span>
      <strong>${fmtM(sjcRef.sell)}</strong>
      <em class="${sjcDelta >= 0 ? 'up' : 'down'}">${sjcDelta >= 0 ? '+' : ''}${fmtM(sjcDelta)} vs hôm qua</em>
    </div>
    <div class="quick-market-card">
      <span>USD/VND (bán)</span>
      <strong>${new Intl.NumberFormat('vi-VN').format(usdSell)} đ</strong>
      <em>Vietcombank tham chiếu</em>
    </div>
    <div class="quick-market-card">
      <span>VN-Index</span>
      <strong>${vniValue.toLocaleString('vi-VN', {minimumFractionDigits:2})}</strong>
      <em class="${vniDelta >= 0 ? 'up' : 'down'}">${vniDelta >= 0 ? '+' : ''}${vniDelta.toFixed(2)} điểm</em>
    </div>
    <div class="quick-market-card">
      <span>XAU/USD</span>
      <strong>$${GOLD_WORLD.price.toLocaleString('en-US', {minimumFractionDigits:2})}</strong>
      <em class="${GOLD_WORLD.change >= 0 ? 'up' : 'down'}">${GOLD_WORLD.change >= 0 ? '+' : ''}${GOLD_WORLD.change.toFixed(2)} (${GOLD_WORLD.changePct.toFixed(2)}%)</em>
    </div>
  `;

  // XAU/USD hero bar
  const w = GOLD_WORLD;
  const sign = w.change >= 0 ? '+' : '';
  const clr = w.change >= 0 ? '#12b76a' : '#f04438';
  document.getElementById('goldWorldBar').innerHTML = `
    <div class="gold-world-hero">
      <div class="gold-world-pair">
        <span class="gold-world-label">XAU/USD · Vàng thế giới</span>
        <strong class="gold-world-price">$${w.price.toLocaleString('en-US', {minimumFractionDigits:2})}</strong>
        <span class="gold-world-change" style="color:${clr}">${sign}${w.change.toFixed(2)} (${sign}${w.changePct.toFixed(2)}%)</span>
      </div>
      <div class="gold-world-stats">
        <div><small>Cao nhất ngày</small><b>$${w.high.toLocaleString('en-US',{minimumFractionDigits:2})}</b></div>
        <div><small>Thấp nhất ngày</small><b>$${w.low.toLocaleString('en-US',{minimumFractionDigits:2})}</b></div>
        <div><small>Đơn vị</small><b>Troy ounce</b></div>
      </div>
    </div>
  `;

  // Decision panel: Premium VN vs thế giới + 30D position + spread signal
  renderGoldDecision();

  // Price table với cột "Hôm qua" + delta
  document.getElementById('goldPriceTable').innerHTML = GOLD_PRODUCTS.map(p => {
    const delta = p.sell - p.prevSell;
    const deltaPct = p.prevSell > 0 ? (delta / p.prevSell * 100) : 0;
    const deltaClass = delta > 0 ? 'up' : delta < 0 ? 'down' : 'flat';
    const deltaSign = delta > 0 ? '+' : '';
    const deltaIcon = delta > 0 ? '▲' : delta < 0 ? '▼' : '—';
    const locTag = p.location ? `<small class="gold-row-loc">${p.location}</small>` : '';
    return `
    <div class="gold-table-row">
      <span class="gold-row-name"><b>${p.brand}</b>${p.name.replace(p.brand, '').replace(p.location || '~~no-loc~~', '').trim()} ${locTag}</span>
      <span class="gold-row-buy">${fmtM(p.buy)}<small>/${p.unit}</small></span>
      <span class="gold-row-sell">${fmtM(p.sell)}<small>/${p.unit}</small></span>
      <span class="gold-row-delta ${deltaClass}">${deltaIcon} ${deltaSign}${fmtM(delta)}<small>${deltaSign}${deltaPct.toFixed(2)}%</small></span>
    </div>`;
  }).join('');

  // News feed
  const goldNewsList = document.getElementById('goldNewsList');
  if (goldNewsList) {
    goldNewsList.innerHTML = GOLD_NEWS.map(n => `
      <a class="gold-news-item" href="#" onclick="event.preventDefault();momo_track('news_click',{title:'${n.title.replace(/'/g,"\\'")}',source:'${n.source}'})">
        <span class="gold-news-tag">${n.tag}</span>
        <strong class="gold-news-title">${n.title}</strong>
        <small class="gold-news-meta">${n.time} · ${n.source}</small>
      </a>
    `).join('');
  }

  // Chart product selector (only lượng-based products to keep prices comparable)
  const chartProducts = GOLD_PRODUCTS.filter(p => p.unit === 'lượng');
  document.getElementById('goldChartProductCtrl').innerHTML = chartProducts.map(p =>
    `<button type="button" data-chart-product="${p.id}"${p.id === goldChartProductId ? ' class="active"' : ''}>${p.brand}${p.location ? ' ' + p.location : ''}</button>`
  ).join('');

  // Calculator select
  document.getElementById('goldProduct').innerHTML = GOLD_PRODUCTS.map(p =>
    `<option value="${p.id}">${p.name}</option>`
  ).join('');

  if (!initGoldPanel._bound) {
    initGoldPanel._bound = true;

    // Chart product buttons
    document.getElementById('goldChartProductCtrl').addEventListener('click', e => {
      const btn = e.target.closest('[data-chart-product]');
      if (!btn) return;
      document.querySelectorAll('[data-chart-product]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      goldChartProductId = btn.dataset.chartProduct;
      renderGoldChart();
    });

    // Chart range buttons
    document.getElementById('goldChartRangeCtrl').addEventListener('click', e => {
      const btn = e.target.closest('[data-range]');
      if (!btn) return;
      document.querySelectorAll('[data-range]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      goldChartRange = btn.dataset.range;
      renderGoldChart();
    });
    ['goldBudget', 'goldProduct'].forEach(id => {
      document.getElementById(id).addEventListener('input', () => computeGold());
      document.getElementById(id).addEventListener('change', () => computeGold());
    });

    document.querySelectorAll('#goldScenarioChips button').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#goldScenarioChips button').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById('goldScenario').value = btn.dataset.pct;
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
  }

  renderGoldChart();
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

  const insightEl = document.getElementById('goldInsight');
  if (qty === 0) {
    // Fallback khi budget không đủ 1 đơn vị: gợi ý sản phẩm nhỏ hơn
    const fallback = GOLD_PRODUCTS.filter(x => x.unit === 'chỉ' && budget >= x.sell)
      .sort((a, b) => a.sell - b.sell)[0];
    if (fallback) {
      const fallbackQty = Math.floor(budget / fallback.sell);
      insightEl.innerHTML = `Ngân sách ${fmtM(budget)} chưa đủ 1 ${p.unit} ${p.brand} (${fmtM(p.sell)}/${p.unit}). Gợi ý: <b>${fallback.name}</b> — đủ mua ${fallbackQty} chỉ. <button type="button" class="gold-insight-cta" onclick="document.getElementById('goldProduct').value='${fallback.id}';computeGold();">Chuyển sang ${fallback.brand} nhẫn</button>`;
    } else {
      insightEl.textContent = `Ngân sách ${fmtM(budget)} chưa đủ mua ${p.brand} ${p.name}. Cần tối thiểu ${fmtM(p.sell)} cho 1 ${p.unit}.`;
    }
    return;
  }

  const pctSign = pct >= 0 ? '+' : '';
  insightEl.textContent = pct >= breakEven
    ? `Kịch bản ${pctSign}${pct}% đủ bù chênh lệch mua-bán (${breakEven.toFixed(1)}%). Ước tính lãi ${fmtM(Math.abs(profit))} trên tổng đầu tư.`
    : `Kịch bản ${pctSign}${pct}% chưa bù được chênh lệch mua-bán (${breakEven.toFixed(1)}%). Cần tăng thêm để hòa vốn.`;
}

// Tính premium VN vs thế giới + vị trí 30D + đánh giá spread
function renderGoldDecision() {
  const goldDecision = document.getElementById('goldDecision');
  if (!goldDecision) return;

  const sjc = GOLD_PRODUCTS.find(p => p.id === 'sjc-luong');
  // Premium = SJC sell - (XAU/USD × lượng/oz × USD/VND)
  const worldPerLuong = GOLD_WORLD.price * LUONG_PER_OUNCE * GOLD_USD_VND;
  const premiumAbs = sjc.sell - worldPerLuong;
  const premiumPct = premiumAbs / worldPerLuong * 100;
  const premiumDeltaVsAvg = premiumPct - PREMIUM_AVG_1Y_PCT;
  const premiumSignal = premiumDeltaVsAvg < -2 ? 'attractive'
    : premiumDeltaVsAvg > 2 ? 'expensive' : 'neutral';
  const premiumLabel = { attractive: 'Thấp hơn TB', expensive: 'Cao hơn TB', neutral: 'Quanh TB' }[premiumSignal];
  const premiumColor = { attractive: '#027a48', expensive: '#b42318', neutral: '#475467' }[premiumSignal];

  // Vị trí 30D từ chart (dùng cùng generator với chart)
  const { points } = genGoldHistory(sjc, '1M');
  const prices = points.map(p => p.price);
  const min30 = Math.min(...prices);
  const max30 = Math.max(...prices);
  const pos30 = (sjc.sell - min30) / (max30 - min30) * 100;
  const pos30Signal = pos30 < 30 ? 'low' : pos30 > 70 ? 'high' : 'mid';
  const pos30Label = { low: 'Gần đáy 30 ngày', high: 'Gần đỉnh 30 ngày', mid: 'Vùng giữa 30 ngày' }[pos30Signal];
  const pos30Color = { low: '#027a48', high: '#b42318', mid: '#475467' }[pos30Signal];

  // Spread mua-bán: hôm nay vs TB tham chiếu (giả định TB ~2,5tr/lượng)
  const spread = sjc.sell - sjc.buy;
  const SPREAD_AVG = 2500000;
  const spreadDelta = spread - SPREAD_AVG;
  const spreadSignal = spreadDelta > 200000 ? 'wide' : spreadDelta < -200000 ? 'narrow' : 'normal';
  const spreadLabel = { wide: 'Rộng hơn TB', narrow: 'Hẹp hơn TB', normal: 'Quanh TB' }[spreadSignal];
  const spreadColor = { wide: '#b42318', narrow: '#027a48', normal: '#475467' }[spreadSignal];

  // Tổng hợp signal → recommendation đơn giản
  const buySignals = (premiumSignal === 'attractive' ? 1 : 0)
                    + (pos30Signal === 'low' ? 1 : 0)
                    + (spreadSignal === 'narrow' ? 1 : 0);
  const waitSignals = (premiumSignal === 'expensive' ? 1 : 0)
                    + (pos30Signal === 'high' ? 1 : 0)
                    + (spreadSignal === 'wide' ? 1 : 0);
  let verdict, verdictDetail, verdictTone;
  if (buySignals >= 2 && buySignals > waitSignals) {
    verdict = 'Có thể cân nhắc vào tiền';
    verdictDetail = `${buySignals}/3 tín hiệu nghiêng về mua. Vẫn nên chia nhỏ, không all-in một lần.`;
    verdictTone = 'buy';
  } else if (waitSignals >= 2 && waitSignals > buySignals) {
    verdict = 'Có thể chờ thêm';
    verdictDetail = `${waitSignals}/3 tín hiệu cảnh báo. Premium hoặc giá đang cao so với tham chiếu.`;
    verdictTone = 'wait';
  } else {
    verdict = 'Tín hiệu trung tính';
    verdictDetail = 'Chưa có lợi thế rõ ràng cho cả mua và chờ. Cân theo nhu cầu thực và thời điểm cá nhân.';
    verdictTone = 'neutral';
  }

  goldDecision.innerHTML = `
    <div class="gold-decision-grid">
      <div class="gold-decision-card primary">
        <span class="gold-decision-label">Chênh lệch VN vs thế giới</span>
        <strong class="gold-decision-value">${premiumAbs >= 0 ? '+' : ''}${fmtM(premiumAbs)}/lượng</strong>
        <p class="gold-decision-meta">SJC ${fmtM(sjc.sell)} · Thế giới quy đổi ${fmtM(worldPerLuong)} (${GOLD_WORLD.price.toFixed(0)} USD × ${LUONG_PER_OUNCE.toFixed(3)} oz/lượng × ${(GOLD_USD_VND/1000).toFixed(2)}k VND/USD)</p>
        <p class="gold-decision-signal" style="color:${premiumColor}">
          <b>${premiumPct.toFixed(1)}%</b> · ${premiumLabel} (TB 1 năm ${PREMIUM_AVG_1Y_PCT}%)
        </p>
      </div>
      <div class="gold-decision-card">
        <span class="gold-decision-label">Vị trí giá trong 30 ngày</span>
        <strong class="gold-decision-value">${pos30.toFixed(0)}%</strong>
        <p class="gold-decision-meta">Đáy ${fmtM(min30)} · Đỉnh ${fmtM(max30)}</p>
        <p class="gold-decision-signal" style="color:${pos30Color}">${pos30Label}</p>
      </div>
      <div class="gold-decision-card">
        <span class="gold-decision-label">Chênh mua-bán SJC</span>
        <strong class="gold-decision-value">${fmtM(spread)}/lượng</strong>
        <p class="gold-decision-meta">Tham chiếu TB ${fmtM(SPREAD_AVG)}/lượng</p>
        <p class="gold-decision-signal" style="color:${spreadColor}">${spreadLabel}</p>
      </div>
    </div>
    <div class="gold-verdict gold-verdict-${verdictTone}">
      <span class="gold-verdict-kicker">Tổng hợp tín hiệu</span>
      <strong class="gold-verdict-title">${verdict}</strong>
      <p class="gold-verdict-detail">${verdictDetail}</p>
      <button class="gold-verdict-alert" type="button" onclick="momo_track('cta_click',{cta:'set_gold_alert',location:'gold_decision'});alert('Mockup: gửi cảnh báo khi SJC < '+ ${Math.round(sjc.sell * 0.97 / 1000000)} +' triệu/lượng (tính năng thật sẽ qua app MoMo).')">🔔 Đặt cảnh báo giá</button>
    </div>
  `;
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

// ─── CIC Score Panel
let cicScore = 570;
let selectedNplGroup = 1;
let cicSimFactor = 'A';
let cicSimScenario = 'a1';

function getBand(score) {
  return CIC_BANDS.find(b => score >= b.min && score <= b.max) || CIC_BANDS[CIC_BANDS.length - 1];
}

function initCicPanel() {
  // Rank ticks 10 → 1 (left = worst, right = best)
  document.getElementById('cicV2Ticks').innerHTML = [10,9,8,7,6,5,4,3,2,1].map(n => `<span>${n}</span>`).join('');

  // Score axis marks at band boundaries
  document.getElementById('cicScoreAxis').innerHTML = [300, 421, 541, 621, 701, 821, 900].map(s => `<span>${s}</span>`).join('');

  const slider = document.getElementById('cicV2Slider');
  if (!initCicPanel._bound) {
    initCicPanel._bound = true;
    slider.addEventListener('input', e => {
      cicScore = +e.target.value;
      updateCicV2();
      if (currentToolId === 'cic-stimulator') renderCicSimulator();
    });
  }
  slider.value = cicScore;
  updateCicV2();
  renderNplSelector();
  renderNplImpact(selectedNplGroup);
}

// ─── NPL (Nhóm nợ) Section
function renderNplSelector() {
  const wrap = document.getElementById('nplSelector');
  if (!wrap) return;
  wrap.innerHTML = NPL_GROUPS.map(g => `
    <button class="npl-pill${g.nhom === selectedNplGroup ? ' active' : ''}"
            type="button"
            role="tab"
            aria-selected="${g.nhom === selectedNplGroup}"
            data-nhom="${g.nhom}"
            style="--npl-dot:${g.color}; --npl-bg:${hexToRgba(g.color, 0.08)}">
      <span class="npl-pill-dot"></span>
      <span class="npl-pill-num">NHÓM ${g.nhom}</span>
      <span class="npl-pill-label">${g.label}</span>
    </button>
  `).join('');
  wrap.querySelectorAll('.npl-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      const nhom = +btn.dataset.nhom;
      selectedNplGroup = nhom;
      const g = NPL_GROUPS.find(x => x.nhom === nhom);
      renderNplSelector();
      renderNplImpact(nhom);
      // Auto-snap slider to typical score for this group
      cicScore = g.snapScore;
      const slider = document.getElementById('cicV2Slider');
      if (slider) slider.value = cicScore;
      updateCicV2();
      momo_track('npl_group_select', { nhom, label: g.label });
    });
  });
}

function renderNplImpact(nhom) {
  const g = NPL_GROUPS.find(x => x.nhom === nhom);
  if (!g) return;
  const impact = document.getElementById('nplImpact');
  if (!impact) return;
  impact.style.setProperty('--npl-dot', g.color);
  impact.style.setProperty('--npl-bg', hexToRgba(g.color, 0.08));

  document.getElementById('nplBadge').textContent = `NHÓM ${g.nhom}`;
  document.getElementById('nplGroupLabel').textContent = g.label;
  document.getElementById('nplTag').textContent = g.tag;
  document.getElementById('nplSummary').textContent = g.summary;
  document.getElementById('nplOverdue').textContent = g.overdue;
  document.getElementById('nplScore').textContent = `${g.scoreRange[0]} - ${g.scoreRange[1]}`;
  document.getElementById('nplDuration').textContent = g.duration;

  const iconMap = { good: '✓', partial: '△', bad: '✗' };
  document.getElementById('nplAccess').innerHTML = g.access.map(a => `
    <div class="npl-access-row">
      <span class="npl-access-icon ${a.status}">${iconMap[a.status]}</span>
      <span class="npl-access-type">${a.type}</span>
      <span class="npl-access-note">${a.note}</span>
    </div>
  `).join('');

  document.getElementById('nplRoadmap').innerHTML = g.roadmap.map(r => `<li>${r}</li>`).join('');
}

function hexToRgba(hex, alpha) {
  const h = hex.replace('#', '');
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// SVG semi-circular gauge
function renderCicGauge(score) {
  const cx = 110, cy = 110, r = 90;
  const startAngle = 180, endAngle = 360;
  const range = endAngle - startAngle;
  const pct = (score - 300) / 600;
  const needleAngle = startAngle + pct * range;
  const rad = a => (a * Math.PI) / 180;
  const arcPt = (a, radius = r) => `${cx + radius * Math.cos(rad(a))},${cy + radius * Math.sin(rad(a))}`;

  // Build colored arc segments: red 300-540, orange 541-620, yellow 621-700, lightgreen 701-820, green 821-900
  const segs = [
    { from: 300, to: 540, color: '#dc2626' },
    { from: 540, to: 620, color: '#ea580c' },
    { from: 620, to: 700, color: '#eab308' },
    { from: 700, to: 820, color: '#84cc16' },
    { from: 820, to: 900, color: '#16a34a' },
  ];
  const arcSegs = segs.map(s => {
    const a1 = startAngle + ((s.from - 300) / 600) * range;
    const a2 = startAngle + ((s.to   - 300) / 600) * range;
    const large = a2 - a1 > 180 ? 1 : 0;
    return `<path d="M${arcPt(a1)} A${r},${r} 0 ${large} 1 ${arcPt(a2)}" stroke="${s.color}" stroke-width="14" fill="none" stroke-linecap="butt"/>`;
  }).join('');

  // Needle
  const needleLen = r - 12;
  const needleX = cx + needleLen * Math.cos(rad(needleAngle));
  const needleY = cy + needleLen * Math.sin(rad(needleAngle));

  return `
    <svg viewBox="0 0 220 130" role="img" aria-label="CIC score gauge">
      ${arcSegs}
      <line x1="${cx}" y1="${cy}" x2="${needleX.toFixed(1)}" y2="${needleY.toFixed(1)}" stroke="#1d2939" stroke-width="3" stroke-linecap="round"/>
      <circle cx="${cx}" cy="${cy}" r="6" fill="#1d2939"/>
    </svg>
    <div class="cic-v2-gauge-num"><strong>${score}</strong><small>Hạng ${getBand(score).hang}</small></div>
  `;
}

function updateCicV2() {
  const band = getBand(cicScore);

  // Bubble follows slider thumb
  const bubble = document.getElementById('cicV2Bubble');
  bubble.textContent = cicScore;
  const pct = (cicScore - 300) / 600;
  bubble.style.left = `clamp(28px, ${(pct * 100).toFixed(1)}%, calc(100% - 28px))`;

  // Gauge
  document.getElementById('cicV2Gauge').innerHTML = renderCicGauge(cicScore);

  // Rank badge: emoji + rank + credit label
  const creditLabel = band.hang === 1 ? 'Hạn mức cao'
    : band.hang === 2 ? 'Hạn mức tốt'
    : band.hang === 3 ? 'Hạn mức khá'
    : band.hang === 4 ? 'Hạn mức trung bình'
    : band.hang === 5 ? 'Hạn mức thấp'
    : band.hang === 6 ? 'Hạn mức hạn chế'
    : 'Khó được duyệt';
  const badgeBg = band.hang <= 3 ? '#dcfce7' : band.hang <= 5 ? '#fef9c3' : '#fee2e2';
  const badgeColor = band.hang <= 3 ? '#15803d' : band.hang <= 5 ? '#854d0e' : '#b91c1c';
  const badge = document.getElementById('cicRankBadge');
  badge.textContent = `Hạng ${band.hang} · ${creditLabel}`;
  badge.style.background = badgeBg;
  badge.style.color = badgeColor;
}

function renderCicPanel() {
  const isSimulator = currentToolId === 'cic-stimulator';
  const panel = document.getElementById('cicPanel');
  panel.classList.toggle('cic-score-mode', !isSimulator);
  panel.classList.toggle('cic-simulator-mode', isSimulator);

  const copy = isSimulator ? {
    kicker: 'CREDIT / CIC SIMULATOR',
    title: 'CIC Simulator',
    desc: 'Mô phỏng tác động của từng hành vi tín dụng lên điểm CIC và hạng vay vốn.',
    sliderTitle: 'Điểm nền hiện tại',
    sliderHint: 'Kéo để đặt baseline',
    cta: 'Xem cách cải thiện điểm CIC',
    disclaimer: 'Mô phỏng dựa trên trọng số tham khảo của hành vi tín dụng. Kết quả không thay thế điểm CIC chính thức.',
  } : {
    kicker: 'CREDIT / CIC SCORE',
    title: 'Tra cứu hạng tín dụng CIC',
    desc: 'Nhập điểm CIC hiện tại để xem hạng tín dụng và khả năng tiếp cận khoản vay.',
    sliderTitle: 'Điểm CIC hiện tại',
    sliderHint: 'Kéo để tra hạng',
    cta: 'Kiểm tra điểm CIC ngay',
    disclaimer: 'Điểm CIC được chấm và quản lý bởi Trung tâm Thông tin Tín dụng Quốc gia Việt Nam (CIC). Kết quả ở đây mang tính tham khảo theo công thức xếp hạng công khai.',
  };

  document.getElementById('cicPanelKicker').textContent = copy.kicker;
  document.getElementById('cicPanelTitle').textContent = copy.title;
  document.getElementById('cicPanelDesc').textContent = copy.desc;
  document.getElementById('cicSliderTitle').textContent = copy.sliderTitle;
  document.getElementById('cicSliderHint').textContent = copy.sliderHint;
  document.getElementById('cicCtaBtn').textContent = copy.cta;
  document.getElementById('cicDisclaimerText').textContent = copy.disclaimer;

  document.getElementById('cicSimSection').hidden = !isSimulator;
  document.getElementById('nplSection').hidden = isSimulator;

  updateCicV2();
  if (isSimulator) {
    renderCicSimulator();
  } else {
    renderNplSelector();
    renderNplImpact(selectedNplGroup);
  }
}

function getCicSimScenario() {
  const group = CIC_BEHAVIORS[cicSimFactor] || CIC_BEHAVIORS.A;
  return group.scenarios.find(s => s.id === cicSimScenario) || group.scenarios[0];
}

function renderCicSimulator() {
  const factorGrid = document.getElementById('cicFactorGrid');
  const scenarioList = document.getElementById('cicScenarioList');
  const result = document.getElementById('cicSimResult');
  if (!factorGrid || !scenarioList || !result) return;

  factorGrid.innerHTML = Object.entries(CIC_BEHAVIORS).map(([key, group]) => `
    <button class="cic-factor-card${key === cicSimFactor ? ' active' : ''}" type="button" data-factor="${key}">
      <small>${key}</small>
      <strong>${group.label}</strong>
      <span>${group.sub}</span>
    </button>
  `).join('');

  factorGrid.querySelectorAll('[data-factor]').forEach(btn => {
    btn.addEventListener('click', () => {
      cicSimFactor = btn.dataset.factor;
      cicSimScenario = CIC_BEHAVIORS[cicSimFactor].scenarios[0].id;
      renderCicSimulator();
    });
  });

  const group = CIC_BEHAVIORS[cicSimFactor] || CIC_BEHAVIORS.A;
  scenarioList.innerHTML = `
    <div class="cic-scenario-panel-head">
      <span>${group.label}</span>
      <strong>${group.sub}</strong>
    </div>
    ${group.scenarios.map(s => `
      <button class="cic-sim-scenario${s.id === cicSimScenario ? ' active' : ''}" type="button" data-scenario="${s.id}">
        <span>${s.label}</span>
        <b class="${s.delta >= 0 ? 'pos' : 'neg'}">${s.delta >= 0 ? '+' : ''}${s.delta}</b>
      </button>
    `).join('')}
  `;

  scenarioList.querySelectorAll('[data-scenario]').forEach(btn => {
    btn.addEventListener('click', () => {
      cicSimScenario = btn.dataset.scenario;
      renderCicSimulator();
    });
  });

  const scenario = getCicSimScenario();
  const projected = Math.max(300, Math.min(900, cicScore + scenario.delta));
  const baseBand = getBand(cicScore);
  const projectedBand = getBand(projected);
  const deltaClass = scenario.delta >= 0 ? 'pos' : 'neg';
  const bandShift = projectedBand.hang === baseBand.hang
    ? `Giữ Hạng ${baseBand.hang}`
    : projectedBand.hang < baseBand.hang
      ? `Tăng từ Hạng ${baseBand.hang} lên Hạng ${projectedBand.hang}`
      : `Giảm từ Hạng ${baseBand.hang} xuống Hạng ${projectedBand.hang}`;

  result.innerHTML = `
    <div class="cic-sim-score-row">
      <div><small>Điểm nền</small><strong>${cicScore}</strong><span>Hạng ${baseBand.hang}</span></div>
      <div class="cic-sim-delta ${deltaClass}">${scenario.delta >= 0 ? '+' : ''}${scenario.delta}</div>
      <div><small>Dự phóng</small><strong>${projected}</strong><span>Hạng ${projectedBand.hang}</span></div>
    </div>
    <div class="cic-sim-verdict">
      <strong>${bandShift}</strong>
      <p>${scenario.rec}</p>
    </div>
  `;
}

// ─── FIRE Panel (chart-first)
const FIRE_PINK = '#af0171';
let fireBound = false;

function parseFireMoney(s) { return +String(s).replace(/[^\d]/g, '') || 0; }
function fmtFireMoney(n) { return (Math.round(n) || 0).toLocaleString('vi-VN'); }

function initFirePanel() {
  if (!fireBound) {
    fireBound = true;
    ['fireMonthlyInp', 'fireAssetsInp', 'fireContribInp'].forEach(id => {
      const el = document.getElementById(id);
      el.addEventListener('input', renderFirePanel);
      el.addEventListener('blur', () => { el.value = fmtFireMoney(parseFireMoney(el.value)); });
    });
    document.getElementById('fireYearsInp').addEventListener('change', renderFirePanel);
    ['fireInflationInp', 'fireRateInp', 'fireReturnInp'].forEach(id =>
      document.getElementById(id).addEventListener('input', renderFirePanel));
    document.querySelectorAll('#firePanel .fire-chips').forEach(group => {
      const targetId = group.dataset.target;
      group.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', () => {
          document.getElementById(targetId).value = fmtFireMoney(+btn.dataset.val);
          renderFirePanel();
        });
      });
    });
  }
  const f = document.getElementById('fireFormula');
  const cfg = TOOLS.find(t => t.id === 'tu-do-tai-chinh');
  if (f && cfg) f.innerHTML = cfg.formula;
  renderFirePanel();
}

function readFire() {
  return {
    monthly: parseFireMoney(document.getElementById('fireMonthlyInp').value),
    years: +document.getElementById('fireYearsInp').value,
    assets: parseFireMoney(document.getElementById('fireAssetsInp').value),
    contribution: parseFireMoney(document.getElementById('fireContribInp').value),
    inflation: +document.getElementById('fireInflationInp').value,
    rate: +document.getElementById('fireRateInp').value,
    ret: +document.getElementById('fireReturnInp').value,
  };
}

function renderFirePanel() {
  const v = readFire();
  const pct = n => String(n).replace('.', ',') + '%';
  document.getElementById('fireInflationOut').textContent = pct(v.inflation);
  document.getElementById('fireRateOut').textContent = pct(v.rate);
  document.getElementById('fireReturnOut').textContent = pct(v.ret);

  document.querySelectorAll('#firePanel .fire-chips').forEach(group => {
    const cur = parseFireMoney(document.getElementById(group.dataset.target).value);
    group.querySelectorAll('button').forEach(b => b.classList.toggle('active', +b.dataset.val === cur));
  });

  const months = v.years * 12;
  const mr = v.ret / 100 / 12;
  const futureMonthly = v.monthly * Math.pow(1 + v.inflation / 100, v.years);
  const fireNum = futureMonthly * 12 / (v.rate / 100);
  const traj = [];
  for (let y = 0; y <= v.years; y++) {
    const m = y * 12;
    const gf = Math.pow(1 + mr, m);
    const fc = mr === 0 ? v.contribution * m : v.contribution * (gf - 1) / mr;
    traj.push(v.assets * gf + fc);
  }
  const projected = traj[traj.length - 1];
  const gap = Math.max(0, fireNum - projected);
  const gfEnd = Math.pow(1 + mr, months);
  const requiredMonthly = Math.max(0, mr === 0
    ? (fireNum - v.assets * gfEnd) / months
    : (fireNum - v.assets * gfEnd) * mr / (gfEnd - 1));
  const fiRatio = fireNum ? Math.min(999, Math.round(projected / fireNum * 100)) : 100;
  const extraMonthly = Math.max(0, requiredMonthly - v.contribution);
  const onTrack = projected >= fireNum;

  document.getElementById('fireVerdict').innerHTML = onTrack
    ? `<span class="fire-verdict-pill ontrack">✓ Đã đủ điều kiện FIRE</span><span>Dư ~${fmtM(projected - fireNum)} sau ${v.years} năm</span>`
    : `<span class="fire-verdict-pill behind">Mới đạt ${fiRatio}% mục tiêu</span><span>Còn thiếu ${fmtM(gap)} sau ${v.years} năm</span>`;
  document.getElementById('fireTargetV').textContent = fmtM(fireNum);
  document.getElementById('fireProjV').textContent = fmtM(projected);
  document.getElementById('fireLever').innerHTML = onTrack
    ? `<span class="fire-lever-ico">🎉</span><span>Bạn đang đi đúng hướng. Giữ tốc độ góp <b>${fmtM(v.contribution)}/tháng</b> là đạt mục tiêu.</span>`
    : `<span class="fire-lever-ico">💡</span><span>Đòn bẩy nhanh nhất: tăng góp lên <b>${fmtM(requiredMonthly)}/tháng</b> (thêm ${fmtM(extraMonthly)}) để về đích đúng hạn.</span>`;

  drawFireChart(traj, fireNum, v.years);
}

function drawFireChart(traj, target, years) {
  const W = 600, H = 240, padL = 14, padR = 14, padT = 20, padB = 26;
  const plotW = W - padL - padR, plotH = H - padT - padB;
  const yMax = Math.max(target, ...traj) * 1.12 || 1;
  const x = i => padL + (i / years) * plotW;
  const y = val => padT + plotH - (val / yMax) * plotH;
  const pts = traj.map((val, i) => `${x(i).toFixed(1)},${y(val).toFixed(1)}`);
  const linePath = 'M' + pts.join(' L');
  const areaPath = `M${x(0).toFixed(1)},${(padT + plotH).toFixed(1)} L` + pts.join(' L') + ` L${x(years).toFixed(1)},${(padT + plotH).toFixed(1)} Z`;
  const targetY = y(target), endX = x(years), endY = y(traj[traj.length - 1]);
  const xticks = [0, Math.round(years / 2), years];
  const xlabels = xticks.map(t =>
    `<text x="${x(t).toFixed(1)}" y="${H - 8}" style="font-size:11px;fill:#98a2b3" text-anchor="${t === 0 ? 'start' : t === years ? 'end' : 'middle'}">Năm ${t}</text>`
  ).join('');
  document.getElementById('fireChart').innerHTML =
    `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Lộ trình tích sản so với mục tiêu FIRE">
      <line x1="${padL}" y1="${(padT + plotH).toFixed(1)}" x2="${W - padR}" y2="${(padT + plotH).toFixed(1)}" stroke="#e4e7ec" stroke-width="1"/>
      <path d="${areaPath}" fill="${FIRE_PINK}" fill-opacity="0.10"/>
      <line x1="${padL}" y1="${targetY.toFixed(1)}" x2="${W - padR}" y2="${targetY.toFixed(1)}" stroke="#98a2b3" stroke-width="1.5" stroke-dasharray="6 5"/>
      <text x="${W - padR}" y="${(targetY - 7).toFixed(1)}" style="font-size:11px;fill:#667085;font-weight:700" text-anchor="end">Mục tiêu ${fmtM(target)}</text>
      <path d="${linePath}" fill="none" stroke="${FIRE_PINK}" stroke-width="2.5" stroke-linejoin="round"/>
      <circle cx="${endX.toFixed(1)}" cy="${endY.toFixed(1)}" r="5" fill="${FIRE_PINK}"/>
      <text x="${(endX - 6).toFixed(1)}" y="${(endY - 10).toFixed(1)}" style="font-size:12px;fill:${FIRE_PINK};font-weight:800" text-anchor="end">${fmtM(traj[traj.length - 1])}</text>
      ${xlabels}
    </svg>`;
}

// ─── Init
// ─── Bank Rate Panel
const BANK_RATES = [
  { id: 'cake', name: 'Cake by VPBank', abbr: 'CAKE', color: '#ec4899', rates: { 1: 4.75, 3: 4.75, 6: 7.2, 12: 7.4 } },
  { id: 'stb',  name: 'Sacombank',      abbr: 'STB',  color: '#2563eb', rates: { 1: 4.6, 3: 4.6, 6: 6.6, 12: 6.8 } },
  { id: 'hdb',  name: 'HDBank',         abbr: 'HDB',  color: '#f97316', rates: { 1: 3.5, 3: 3.6, 6: 5.4, 12: 5.7 } },
  { id: 'agr',  name: 'Agribank',       abbr: 'AGR',  color: '#15803d', rates: { 1: 2.6, 3: 2.9, 6: 4.0, 12: 5.2 } },
  { id: 'vcb',  name: 'Vietcombank', abbr: 'VCB', color: '#005c2f', rates: { 1: 1.6, 3: 2.0, 6: 3.0, 12: 4.7 } },
  { id: 'bidv', name: 'BIDV',        abbr: 'BID', color: '#1a56db', rates: { 1: 1.7, 3: 2.2, 6: 3.3, 12: 4.8 } },
  { id: 'vtb',  name: 'Vietinbank',  abbr: 'CTG', color: '#b91c1c', rates: { 1: 1.7, 3: 2.2, 6: 3.3, 12: 4.8 } },
  { id: 'tcb',  name: 'Techcombank', abbr: 'TCB', color: '#c2410c', rates: { 1: 2.3, 3: 3.0, 6: 4.5, 12: 5.2 } },
  { id: 'mb',   name: 'MB Bank',     abbr: 'MB',  color: '#1d4ed8', rates: { 1: 2.1, 3: 2.7, 6: 4.0, 12: 5.0 } },
  { id: 'acb',  name: 'ACB',         abbr: 'ACB', color: '#0891b2', rates: { 1: 2.1, 3: 2.7, 6: 4.0, 12: 5.2 } },
];

let bankTerm = 6;

function formatBankDepositValue(value) {
  const amount = parseMoney(value);
  return amount ? amount.toLocaleString('vi-VN') : '';
}

function initBankRatePanel() {
  document.querySelectorAll('#bankTermControl button').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#bankTermControl button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      bankTerm = +btn.dataset.term;
      computeBankRate();
    });
  });
  document.querySelectorAll('[data-deposit]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-deposit]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('bankDeposit').value = (+btn.dataset.deposit).toLocaleString('vi-VN');
      computeBankRate();
    });
  });
  document.getElementById('bankDeposit').addEventListener('input', () => {
    const input = document.getElementById('bankDeposit');
    const deposit = parseMoney(input.value);
    input.value = formatBankDepositValue(input.value);
    document.querySelectorAll('[data-deposit]').forEach(btn => {
      btn.classList.toggle('active', +btn.dataset.deposit === deposit);
    });
    computeBankRate();
  });
  document.getElementById('bankDeposit').addEventListener('blur', () => {
    const input = document.getElementById('bankDeposit');
    input.value = formatBankDepositValue(input.value) || '1.000.000';
  });
  computeBankRate();
}

function computeBankRate() {
  const principal = parseMoney(document.getElementById('bankDeposit').value) || 100000000;
  const term = bankTerm;
  const sorted = [...BANK_RATES].sort((a, b) => b.rates[term] - a.rates[term]);
  const maxRate = sorted[0].rates[term];
  const topInterest = principal * maxRate / 100 / 12 * term;
  const topCount = sorted.filter(bank => bank.rates[term] === maxRate).length;
  document.getElementById('bankRateTable').innerHTML =
    `<div class="bank-rate-header"><span>Ngân hàng</span><span>Lãi suất/năm</span><span>Lãi dự kiến / Tổng cuối kỳ</span></div>` +
    sorted.map((b) => {
      const rate = b.rates[term];
      const interest = principal * rate / 100 / 12 * term;
      const total = principal + interest;
      const isBest = rate === maxRate;
      const delta = Math.max(0, topInterest - interest);
      return `<div class="bank-rate-row${isBest ? ' best' : ''}">
        <div class="bank-name">
          <span class="bank-abbr" style="background:${b.color}">${b.abbr}</span>
          <span>${b.name}</span>
          ${isBest ? `<span class="best-badge">${topCount > 1 ? 'Đồng hạng top' : 'Top rate'}</span>` : ''}
        </div>
        <div class="bank-rate-pct">${rate.toFixed(1)}%
          <div class="rate-bar"><div class="rate-fill" style="width:${(rate / maxRate * 100).toFixed(0)}%"></div></div>
        </div>
        <div class="bank-net">
          <strong class="bank-net-profit">+${fmtM(interest)}</strong>
          <small class="bank-net-total">Tổng: ${fmtM(total)}</small>
          ${!isBest && delta > 0 ? `<small class="bank-net-gap">Ít hơn top: ${fmtM(delta)}</small>` : ''}
        </div>
      </div>`;
    }).join('');
}

// ─── FX Panel
const FX_RATES = [
  { code: 'USD', name: 'Đô la Mỹ',          flag: '🇺🇸', buy: 25250, sell: 25570, ref: 25050, per: 1 },
  { code: 'EUR', name: 'Euro',               flag: '🇪🇺', buy: 27100, sell: 27800, ref: 27380, per: 1 },
  { code: 'JPY', name: 'Yên Nhật (100¥)',   flag: '🇯🇵', buy: 16200, sell: 17200, ref: 16850, per: 100 },
  { code: 'CNY', name: 'Nhân dân tệ',       flag: '🇨🇳', buy:  3450, sell:  3580, ref:  3520, per: 1 },
  { code: 'KRW', name: 'Won HQ (100₩)',      flag: '🇰🇷', buy:  1750, sell:  1880, ref:  1820, per: 100 },
  { code: 'SGD', name: 'Đô la Singapore',   flag: '🇸🇬', buy: 18800, sell: 19400, ref: 19100, per: 1 },
];

const FX_CURRENCIES = [
  { code: 'VND', name: 'Việt Nam đồng', flag: '🇻🇳' },
  ...FX_RATES.map(r => ({ code: r.code, name: r.name, flag: r.flag })),
];

const FX_HISTORY_FACTORS = [
  { label: 'T-6', factor: -0.014 },
  { label: 'T-5', factor: -0.009 },
  { label: 'T-4', factor: -0.012 },
  { label: 'T-3', factor: -0.004 },
  { label: 'T-2', factor: 0.003 },
  { label: 'T-1', factor: 0.008 },
  { label: 'Now', factor: 0 },
];

let fxFrom = 'VND';
let fxTo = 'USD';

let fxBound = false;

function initFxPanel() {
  document.getElementById('fxRateGrid').innerHTML = FX_RATES.map(r =>
    `<div class="fx-rate-row fx-card" data-code="${r.code}">
      <span class="fx-rate-flag">${r.flag}</span>
      <span class="fx-rate-code">${r.code}<small>${r.name}</small></span>
      <span class="fx-rate-vals"><b>${new Intl.NumberFormat('vi-VN').format(r.sell / r.per)} đ</b><small>Mua ${new Intl.NumberFormat('vi-VN').format(r.buy / r.per)}</small></span>
    </div>`
  ).join('');
  document.querySelectorAll('.fx-card').forEach(card => {
    card.addEventListener('click', () => {
      fxTo = card.dataset.code;
      if (fxFrom === fxTo) fxFrom = 'VND';
      syncFxPairControls({ resetAmount: false });
    });
  });

  const currencyOptions = FX_CURRENCIES.map(c =>
    `<option value="${c.code}">${c.flag} ${c.code} · ${c.name}</option>`
  ).join('');
  document.getElementById('fxFromCurrency').innerHTML = currencyOptions;
  document.getElementById('fxToCurrency').innerHTML = currencyOptions;

  if (!fxBound) {
    fxBound = true;
    document.getElementById('fxFromCurrency').addEventListener('change', e => {
      fxFrom = e.target.value;
      normalizeFxPair('from');
      syncFxPairControls({ resetAmount: true });
    });
    document.getElementById('fxToCurrency').addEventListener('change', e => {
      fxTo = e.target.value;
      normalizeFxPair('to');
      syncFxPairControls({ resetAmount: false });
    });
    document.getElementById('fxSwap').addEventListener('click', () => {
      [fxFrom, fxTo] = [fxTo, fxFrom];
      syncFxPairControls({ resetAmount: true });
    });
    const amt = document.getElementById('fxAmount');
    amt.addEventListener('input', computeFx);
    amt.addEventListener('blur', () => { amt.value = fmtFxAmountInput(parseFireMoney(amt.value), fxFrom); });
  }
  syncFxPairControls({ resetAmount: false });
}

function fmtFxAmountInput(n, code) {
  if (code === 'VND') return (Math.round(n) || 0).toLocaleString('vi-VN');
  return new Intl.NumberFormat('vi-VN', { maximumFractionDigits: 2 }).format(n || 0);
}

function normalizeFxPair(changed) {
  if (fxFrom !== fxTo) return;
  if (changed === 'from') {
    fxTo = fxFrom === 'VND' ? 'USD' : 'VND';
  } else {
    fxFrom = fxTo === 'VND' ? 'USD' : 'VND';
  }
}

function syncFxPairControls({ resetAmount } = {}) {
  document.getElementById('fxFromCurrency').value = fxFrom;
  document.getElementById('fxToCurrency').value = fxTo;
  document.getElementById('fxAmountUnit').textContent = fxFrom;
  updateFxQuickValues(resetAmount);
  document.querySelectorAll('.fx-card').forEach(card => {
    card.classList.toggle('active', card.dataset.code === fxTo || (fxTo === 'VND' && card.dataset.code === fxFrom));
  });
  computeFx();
}

function updateFxQuickValues(resetAmount = false) {
  const values = fxFrom === 'VND'
    ? [
      { value: 5000000, label: '5tr' },
      { value: 10000000, label: '10tr' },
      { value: 50000000, label: '50tr' },
    ]
    : [
      { value: 100, label: '100' },
      { value: 500, label: '500' },
      { value: 1000, label: '1.000' },
    ];
  const wrap = document.getElementById('fxQuickValues');
  const amt = document.getElementById('fxAmount');
  const current = parseFireMoney(amt.value);
  wrap.innerHTML = values.map(v =>
    `<button type="button" data-fx="${v.value}">${v.label}</button>`
  ).join('');
  wrap.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      amt.value = fmtFxAmountInput(+btn.dataset.fx, fxFrom);
      computeFx();
    });
  });
  if (resetAmount) amt.value = fmtFxAmountInput(values[1].value, fxFrom);
}

function rateToVnd(code, type = 'ref') {
  if (code === 'VND') return 1;
  const fx = FX_RATES.find(r => r.code === code) || FX_RATES[0];
  return fx[type] / fx.per;
}

function getPairRate(from, to, mode = 'mid') {
  if (from === to) return 1;
  if (mode === 'bank') {
    if (from === 'VND') return 1 / rateToVnd(to, 'sell');
    if (to === 'VND') return rateToVnd(from, 'buy');
    return rateToVnd(from, 'buy') / rateToVnd(to, 'sell');
  }
  return rateToVnd(from, 'ref') / rateToVnd(to, 'ref');
}

function formatFxCurrency(value, code) {
  if (code === 'VND') return fmtM(value);
  return new Intl.NumberFormat('vi-VN', {
    maximumFractionDigits: value >= 1000 ? 0 : 2,
  }).format(value) + ' ' + code;
}

function formatFxRate(rate) {
  const digits = rate < 0.01 ? 6 : rate < 1 ? 4 : rate < 100 ? 2 : 0;
  return new Intl.NumberFormat('vi-VN', { maximumFractionDigits: digits }).format(rate);
}

function getFxDisplayRates(from, to, bankRate, midRate, effectiveRate) {
  if (from === 'VND' && to !== 'VND') {
    return {
      base: to,
      quote: from,
      bank: bankRate > 0 ? 1 / bankRate : 0,
      mid: midRate > 0 ? 1 / midRate : 0,
      effective: effectiveRate > 0 ? 1 / effectiveRate : 0,
    };
  }
  return {
    base: from,
    quote: to,
    bank: bankRate,
    mid: midRate,
    effective: effectiveRate,
  };
}

function computeFx() {
  const amount = parseFireMoney(document.getElementById('fxAmount').value);
  const bankRate = getPairRate(fxFrom, fxTo, 'bank');
  const midRate = getPairRate(fxFrom, fxTo, 'mid');
  const received = Math.max(0, amount * bankRate);
  const effectiveRate = amount > 0 ? received / amount : 0;
  const displayRates = getFxDisplayRates(fxFrom, fxTo, bankRate, midRate, effectiveRate);

  const direction = fxFrom === 'VND' ? 'sell' : 'buy';
  const foreignCode = fxFrom === 'VND' ? fxTo : fxFrom;
  const foreignData = FX_RATES.find(r => r.code === foreignCode);

  document.getElementById('fxResultLabel').textContent = `Nhận được (${fxTo})`;
  document.getElementById('fxResultValue').textContent = formatFxCurrency(received, fxTo);

  if (foreignData) {
    const buyVnd = foreignData.buy / foreignData.per;
    const sellVnd = foreignData.sell / foreignData.per;
    const usedLabel = direction === 'sell' ? 'giá bán' : 'giá mua';
    document.getElementById('fxAppliedRate').innerHTML =
      `1 ${foreignCode} = ${formatFxRate(direction === 'sell' ? sellVnd : buyVnd)} đ<br><span style="font-size:11px;font-weight:600;color:var(--muted)">${usedLabel} ngân hàng</span>`;
  } else {
    document.getElementById('fxAppliedRate').textContent = `1 ${displayRates.base} = ${formatFxRate(displayRates.bank)} ${displayRates.quote}`;
  }

  // Trend → verdict + lever
  const seed = (fxFrom + fxTo).split('').reduce((s, c) => s + c.charCodeAt(0), 0) % 11;
  const firstFactor = FX_HISTORY_FACTORS[0].factor + Math.sin(1 * (seed + 1)) * 0.004;
  const trendPct = (-firstFactor) * 100;
  let verdictClass, verdictTitle, verdictSub, leverIco, rec;
  if (Math.abs(trendPct) < 0.4) {
    verdictClass = 'ontrack'; verdictTitle = 'Tỷ giá ít biến động';
    verdictSub = `Dao động ${Math.abs(trendPct).toFixed(1)}% trong 7 ngày`;
    leverIco = '✓'; rec = 'có thể đổi bất cứ lúc nào, không cần canh thời điểm.';
  } else if (trendPct > 0) {
    verdictClass = 'behind'; verdictTitle = 'Tỷ giá đang ở vùng cao';
    verdictSub = `Tăng ${trendPct.toFixed(1)}% trong 7 ngày`;
    leverIco = '⏳'; rec = 'nếu chưa gấp có thể chờ thêm để tránh mua đỉnh.';
  } else {
    verdictClass = 'ontrack'; verdictTitle = 'Tỷ giá đang ở vùng thấp';
    verdictSub = `Giảm ${Math.abs(trendPct).toFixed(1)}% trong 7 ngày`;
    leverIco = '💡'; rec = 'đang là thời điểm tốt để đổi.';
  }
  document.getElementById('fxVerdict').innerHTML =
    `<span class="fire-verdict-pill ${verdictClass}">${verdictTitle}</span><span>${verdictSub}</span>`;
  document.getElementById('fxInsight').innerHTML =
    `<span class="fire-lever-ico">${leverIco}</span><span>Đổi <b>${formatFxCurrency(amount, fxFrom)}</b> được <b>${formatFxCurrency(received, fxTo)}</b>. Tỷ giá ${foreignCode}/VND ${rec}</span>`;

  renderFxChart(displayRates);
}

function renderFxChart(displayRates) {
  const seed = (fxFrom + fxTo).split('').reduce((sum, char) => sum + char.charCodeAt(0), 0) % 11;
  const points = FX_HISTORY_FACTORS.map((item, index) => {
    const wave = Math.sin((index + 1) * (seed + 1)) * 0.004;
    return { label: item.label, rate: displayRates.mid * (1 + item.factor + wave) };
  });
  points[points.length - 1].rate = displayRates.mid;
  const rates = points.map(p => p.rate);
  const min = Math.min(...rates), max = Math.max(...rates), range = max - min || 1;
  const W = 600, H = 220, padL = 14, padR = 14, padT = 18, padB = 24;
  const plotW = W - padL - padR, plotH = H - padT - padB;
  const x = i => padL + (i / (points.length - 1)) * plotW;
  const y = rate => padT + plotH - ((rate - min) / range) * plotH;
  const pts = points.map((p, i) => `${x(i).toFixed(1)},${y(p.rate).toFixed(1)}`);
  const linePath = 'M' + pts.join(' L');
  const areaPath = `M${x(0).toFixed(1)},${(padT + plotH).toFixed(1)} L` + pts.join(' L') + ` L${x(points.length - 1).toFixed(1)},${(padT + plotH).toFixed(1)} Z`;
  const endX = x(points.length - 1), endY = y(points[points.length - 1].rate);
  const delta = (points[points.length - 1].rate - points[0].rate) / points[0].rate * 100;
  const deltaText = `${delta >= 0 ? '+' : ''}${delta.toFixed(2)}%`;

  document.getElementById('fxChartTitle').textContent = `Xu hướng 6 tháng · 1 ${displayRates.base} = ${formatFxRate(displayRates.mid)} ${displayRates.quote}`;
  const chg = document.getElementById('fxChartChange');
  chg.textContent = deltaText;
  chg.style.color = delta >= 0 ? '#dc2626' : '#16a34a';

  const xlabels = [0, Math.floor((points.length - 1) / 2), points.length - 1].map(i =>
    `<text x="${x(i).toFixed(1)}" y="${H - 7}" style="font-size:11px;fill:#98a2b3" text-anchor="${i === 0 ? 'start' : i === points.length - 1 ? 'end' : 'middle'}">${points[i].label}</text>`
  ).join('');

  document.getElementById('fxChart').innerHTML =
    `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Xu hướng tỷ giá ${fxFrom} sang ${fxTo}">
      <line x1="${padL}" y1="${(padT + plotH).toFixed(1)}" x2="${W - padR}" y2="${(padT + plotH).toFixed(1)}" stroke="#e4e7ec" stroke-width="1"/>
      <path d="${areaPath}" fill="${FIRE_PINK}" fill-opacity="0.10"/>
      <path d="${linePath}" fill="none" stroke="${FIRE_PINK}" stroke-width="2.5" stroke-linejoin="round"/>
      <circle cx="${endX.toFixed(1)}" cy="${endY.toFixed(1)}" r="5" fill="${FIRE_PINK}"/>
      <text x="${(endX - 6).toFixed(1)}" y="${(endY - 10).toFixed(1)}" style="font-size:12px;fill:${FIRE_PINK};font-weight:800" text-anchor="end">${formatFxRate(points[points.length - 1].rate)}</text>
      ${xlabels}
    </svg>`;
}

// ─── FX Compare Panel
const BANK_FX_DATA = [
  { id: 'vcb',   name: 'Vietcombank', abbr: 'VCB',  type: 'bank',   spread: 0    },
  { id: 'bidv',  name: 'BIDV',        abbr: 'BIDV', type: 'bank',   spread: 0.001},
  { id: 'tcb',   name: 'Techcombank', abbr: 'TCB',  type: 'bank',   spread:-0.001},
  { id: 'acb',   name: 'ACB',         abbr: 'ACB',  type: 'bank',   spread: 0.002},
  { id: 'mb',    name: 'MB Bank',     abbr: 'MB',   type: 'bank',   spread:-0.002},
  { id: 'eib',   name: 'Eximbank',    abbr: 'EIB',  type: 'bank',   spread: 0.003},
  { id: 'agri',  name: 'Agribank',    abbr: 'AGR',  type: 'bank',   spread: 0.001},
  { id: 'hatrung', name: 'Hà Trung (HN)',  abbr: 'HT', type: 'market', spread:-0.005},
  { id: 'sgsq',    name: 'Saigon Square', abbr: 'SQ', type: 'market', spread:-0.004},
];

const FXC_STATE = { currency:'USD', side:'sell', amount:1000 };

function initFxComparePanel() {
  const fxcCurCtrl = document.getElementById('fxcCurrencyControl');
  if (fxcCurCtrl) {
    fxcCurCtrl.onclick = e => {
      const btn = e.target.closest('button[data-cur]');
      if (!btn) return;
      FXC_STATE.currency = btn.dataset.cur;
      fxcCurCtrl.querySelectorAll('button').forEach(b => b.classList.toggle('active', b.dataset.cur === FXC_STATE.currency));
      document.getElementById('fxcAmountUnit').textContent = FXC_STATE.currency;
      renderFxCompare();
    };
  }
  const fxcSideCtrl = document.getElementById('fxcSideControl');
  if (fxcSideCtrl) {
    fxcSideCtrl.onclick = e => {
      const btn = e.target.closest('button[data-side]');
      if (!btn) return;
      FXC_STATE.side = btn.dataset.side;
      fxcSideCtrl.querySelectorAll('button').forEach(b => b.classList.toggle('active', b.dataset.side === FXC_STATE.side));
      document.getElementById('fxcAmountLabel').textContent = FXC_STATE.side === 'sell' ? 'Số ngoại tệ cần mua' : 'Số ngoại tệ cần bán';
      renderFxCompare();
    };
  }
  const fxcAmt = document.getElementById('fxcAmount');
  if (fxcAmt) {
    fxcAmt.oninput = () => { FXC_STATE.amount = +fxcAmt.value || 0; renderFxCompare(); };
  }
  const fxcQuick = document.getElementById('fxcQuickValues');
  if (fxcQuick) {
    fxcQuick.onclick = e => {
      const btn = e.target.closest('button[data-fxc]');
      if (!btn) return;
      FXC_STATE.amount = +btn.dataset.fxc;
      fxcAmt.value = FXC_STATE.amount;
      fxcQuick.querySelectorAll('button').forEach(b => b.classList.toggle('active', +b.dataset.fxc === FXC_STATE.amount));
      renderFxCompare();
    };
  }
  renderFxCompare();
}

function renderFxCompare() {
  const ref = FX_RATES.find(r => r.code === FXC_STATE.currency);
  if (!ref) return;
  const baseBuy  = ref.buy  / ref.per;
  const baseSell = ref.sell / ref.per;
  const rows = BANK_FX_DATA.map(src => {
    // Positive spread = wider gap (conservative): lower buy, higher sell
    // Negative spread = competitive (market venues): higher buy, lower sell
    const buy  = Math.round(baseBuy  * (1 - (src.spread || 0)));
    const sell = Math.round(baseSell * (1 + (src.spread || 0)));
    return { ...src, buy, sell, spreadPct: ((sell - buy) / sell * 100) };
  });
  // best for user
  const target = FXC_STATE.side; // 'sell' = mua (so user pays bank's sell rate, want lowest) ; 'buy' = bán (want highest)
  const sorted = [...rows].sort((a, b) => target === 'sell' ? a.sell - b.sell : b.buy - a.buy);
  const bestId = sorted[0].id;
  const worstId = sorted[sorted.length - 1].id;
  const bestRate = target === 'sell' ? sorted[0].sell : sorted[0].buy;
  const worstRate = target === 'sell' ? sorted[sorted.length - 1].sell : sorted[sorted.length - 1].buy;
  const savings = Math.abs(worstRate - bestRate) * FXC_STATE.amount;

  const html = `
    <div class="fxc-summary">
      <div class="fxc-summary-item">
        <small>Giá tốt nhất hôm nay</small>
        <strong>1 ${FXC_STATE.currency} = ${formatFxRate(bestRate)} đ <span class="fxc-best-src">@ ${sorted[0].abbr}</span></strong>
      </div>
      <div class="fxc-summary-item">
        <small>Tiết kiệm so với nơi đắt nhất</small>
        <strong class="fxc-save">${savings.toLocaleString('vi-VN')} đ</strong>
      </div>
    </div>
    <table class="fxc-table">
      <thead>
        <tr><th>Nguồn</th><th>Giá mua (VND)</th><th>Giá bán (VND)</th><th>Spread</th><th>Tổng giao dịch</th></tr>
      </thead>
      <tbody>
        ${sorted.map(r => {
          const isBest = r.id === bestId;
          const isWorst = r.id === worstId;
          const useRate = target === 'sell' ? r.sell : r.buy;
          const totalVnd = useRate * FXC_STATE.amount;
          return `<tr class="${isBest?'fxc-best-row':isWorst?'fxc-worst-row':''}">
            <td><strong>${r.name}</strong><br><small style="color:#888">${r.type==='market'?'Điểm đổi tiền tự do':'Ngân hàng'}</small></td>
            <td>${formatFxRate(r.buy)}</td>
            <td>${formatFxRate(r.sell)}</td>
            <td><small>${r.spreadPct.toFixed(2)}%</small></td>
            <td>${totalVnd.toLocaleString('vi-VN')} đ ${isBest?'<span class="fxc-tag fxc-tag-best">RẺ NHẤT</span>':isWorst?'<span class="fxc-tag fxc-tag-worst">ĐẮT NHẤT</span>':''}</td>
          </tr>`;
        }).join('')}
      </tbody>
    </table>
  `;
  document.getElementById('fxcResults').innerHTML = html;
}

// ─── Travel Budget Panel
const TRAVEL_DESTINATIONS = [
  { code:'TH', name:'Thái Lan',   flag:'🇹🇭', currency:'THB', dailyVND:{ budget:800000, mid:1800000, luxury:4500000 },
    momo: { coverage:75, tier:'high', network:'AliPay+',
            places:['7-Eleven, FamilyMart — QR thanh toán', 'BigC, Lotus\'s, Central, Robinson — scan QR', 'Klook / KKday — thanh toán tour qua MoMo', 'Street food, taxi Bangkok có biển AliPay+'] } },
  { code:'SG', name:'Singapore',  flag:'🇸🇬', currency:'SGD', dailyVND:{ budget:2000000, mid:4500000, luxury:10000000 },
    momo: { coverage:65, tier:'high', network:'NETS QR / AliPay+',
            places:['Hawker centres — NETS QR', 'MRT/Bus — SimplyGo QR', 'Shopping mall — biển AliPay+', 'Klook — vé tham quan'] } },
  { code:'MY', name:'Malaysia',   flag:'🇲🇾', currency:'MYR', dailyVND:{ budget:1000000, mid:2300000, luxury:5500000 },
    momo: { coverage:60, tier:'high', network:'TNG eWallet / AliPay+',
            places:['Touch \'n Go QR — khắp KL', 'Sunway, Pavilion, KLCC mall', 'Grab ride + GrabFood', 'Genting cable car — quầy QR'] } },
  { code:'CN', name:'Trung Quốc', flag:'🇨🇳', currency:'CNY', dailyVND:{ budget:1500000, mid:3500000, luxury:8500000 },
    momo: { coverage:85, tier:'high', network:'AliPay direct',
            places:['AliPay QR khắp cửa hàng', 'Didi — taxi/xe', '12306 — vé tàu cao tốc', 'Tourist sites, restaurant, conbini'] } },
  { code:'JP', name:'Nhật Bản',   flag:'🇯🇵', currency:'JPY', dailyVND:{ budget:2500000, mid:5500000, luxury:13000000 },
    momo: { coverage:35, tier:'medium', network:'AliPay+',
            places:['Don Quijote, BicCamera, Yodobashi', 'Conbini chains (7-Eleven, FamilyMart, Lawson)', 'Lotte / Tokyo Skytree shops', 'Tourist hot spot có biển AliPay+'] } },
  { code:'KR', name:'Hàn Quốc',   flag:'🇰🇷', currency:'KRW', dailyVND:{ budget:2200000, mid:4800000, luxury:11000000 },
    momo: { coverage:35, tier:'medium', network:'AliPay+ / Naver Pay',
            places:['Olive Young, ARITAUM — cosmetic', 'Lotte / Shilla duty free', 'Myeongdong, Hongdae shops', 'Klook — vé tour Seoul'] } },
  { code:'TW', name:'Đài Loan',   flag:'🇹🇼', currency:'TWD', dailyVND:{ budget:1800000, mid:3800000, luxury:9000000 },
    momo: { coverage:30, tier:'medium', network:'AliPay+',
            places:['7-Eleven, FamilyMart — QR', 'Shin Kong Mitsukoshi mall', 'Taipei 101 shops', 'Klook — night market tour'] } },
  { code:'US', name:'Mỹ',         flag:'🇺🇸', currency:'USD', dailyVND:{ budget:3500000, mid:7500000, luxury:18000000 },
    momo: { coverage:0, tier:'none', network:null, places:[] } },
  { code:'AU', name:'Úc',         flag:'🇦🇺', currency:'AUD', dailyVND:{ budget:3200000, mid:7000000, luxury:16500000 },
    momo: { coverage:0, tier:'none', network:null, places:[] } },
  { code:'FR', name:'Pháp',       flag:'🇫🇷', currency:'EUR', dailyVND:{ budget:3000000, mid:6500000, luxury:15500000 },
    momo: { coverage:5, tier:'low', network:'AliPay+ (limited)', places:['Luxury brands ở Champs-Élysées — limited acceptance'] } },
];

const TRAVEL_BREAKDOWN = {
  lodging: { name:'Lưu trú',    weight:0.40, icon:'lodging' },
  food:    { name:'Ăn uống',    weight:0.25, icon:'food' },
  transport:{ name:'Di chuyển', weight:0.15, icon:'transport' },
  activity:{ name:'Tham quan',  weight:0.15, icon:'activity' },
  misc:    { name:'Chi khác',   weight:0.05, icon:'misc' },
};

const TB_STATE = { destCode:'JP', days:7, tier:'mid' };

function initTravelBudgetPanel() {
  const sel = document.getElementById('tbDestination');
  if (sel) {
    sel.innerHTML = TRAVEL_DESTINATIONS.map(d => `<option value="${d.code}">${d.flag} ${d.name} · ${d.currency}</option>`).join('');
    sel.value = TB_STATE.destCode;
    sel.onchange = () => { TB_STATE.destCode = sel.value; renderTravelBudget(); };
  }
  const dayInput = document.getElementById('tbDays');
  if (dayInput) {
    dayInput.oninput = () => { TB_STATE.days = +dayInput.value || 1; renderTravelBudget(); };
  }
  const quick = dayInput?.parentElement?.parentElement?.querySelector('.quick-values');
  if (quick) {
    quick.onclick = e => {
      const btn = e.target.closest('button[data-tbd]');
      if (!btn) return;
      TB_STATE.days = +btn.dataset.tbd;
      dayInput.value = TB_STATE.days;
      quick.querySelectorAll('button').forEach(b => b.classList.toggle('active', +b.dataset.tbd === TB_STATE.days));
      renderTravelBudget();
    };
  }
  const tierCtrl = document.getElementById('tbTierControl');
  if (tierCtrl) {
    tierCtrl.onclick = e => {
      const btn = e.target.closest('button[data-tier]');
      if (!btn) return;
      TB_STATE.tier = btn.dataset.tier;
      tierCtrl.querySelectorAll('button').forEach(b => b.classList.toggle('active', b.dataset.tier === TB_STATE.tier));
      renderTravelBudget();
    };
  }
  renderTravelBudget();
}

function renderTravelBudget() {
  const dest = TRAVEL_DESTINATIONS.find(d => d.code === TB_STATE.destCode);
  if (!dest) return;
  const dailyVnd = dest.dailyVND[TB_STATE.tier];
  const total = dailyVnd * TB_STATE.days;
  document.getElementById('tbTotal').textContent = fmtM(total);
  // approx USD conversion
  const usd = total / 25500;
  document.getElementById('tbTotalUsd').textContent = `≈ ${Math.round(usd).toLocaleString('en-US')} USD · ${dest.flag} ${dest.name} · ${TB_STATE.days} ngày`;

  const breakdownHtml = Object.entries(TRAVEL_BREAKDOWN).map(([k, v]) => {
    const amt = total * v.weight;
    return `<div class="tb-row">
      <span class="tb-icon">${svgIcon(v.icon, 'tb-icon-svg')}</span>
      <span class="tb-name">${v.name}</span>
      <div class="tb-bar"><div class="tb-bar-fill" style="width:${v.weight*100}%"></div></div>
      <strong class="tb-amt">${fmtM(amt)}</strong>
    </div>`;
  }).join('');
  document.getElementById('tbBreakdown').innerHTML = breakdownHtml;

  // Per-day cost + tier comparison (fills the left column, aids the spend-tier decision)
  const dailyCard = document.getElementById('tbDailyCard');
  if (dailyCard) {
    const tiers = [
      { id:'budget', label:'Tiết kiệm', icon:'tier-budget' },
      { id:'mid',    label:'Cân bằng',  icon:'tier-mid' },
      { id:'luxury', label:'Cao cấp',   icon:'tier-luxury' },
    ];
    const maxDaily = Math.max(...tiers.map(t => dest.dailyVND[t.id]));
    dailyCard.innerHTML = `
      <div class="tb-daily-head">
        <span class="tb-daily-k">Chi phí trung bình / ngày</span>
        <strong class="tb-daily-v">${fmtM(dailyVnd)}</strong>
      </div>
      <div class="tb-tier-compare">
        ${tiers.map(t => {
          const d = dest.dailyVND[t.id];
          const on = t.id === TB_STATE.tier;
          return `<button type="button" class="tb-tier-row${on?' on':''}" data-tier="${t.id}">
            <span class="tb-tier-label">${svgIcon(t.icon, 'tb-tier-icon')} ${t.label}</span>
            <span class="tb-tier-bar"><span class="tb-tier-fill" style="width:${Math.round(d/maxDaily*100)}%"></span></span>
            <span class="tb-tier-amt">${fmtM(d)}</span>
          </button>`;
        }).join('')}
      </div>
      <p class="tb-daily-note">Chênh lệch chủ yếu ở lưu trú và ăn uống. Chạm một mức để đổi chuẩn chi tiêu.</p>`;
    dailyCard.querySelectorAll('.tb-tier-row').forEach(btn => {
      btn.onclick = () => {
        TB_STATE.tier = btn.dataset.tier;
        document.querySelectorAll('#tbTierControl button').forEach(b => b.classList.toggle('active', b.dataset.tier === TB_STATE.tier));
        renderTravelBudget();
      };
    });
  }

  // Payment hierarchy — MoMo as primary source of fund
  renderTbPayment(dest, total);
}

function renderTbPayment(dest, total) {
  const m = dest.momo || { coverage:0, tier:'none', network:null, tips:[] };
  const box = document.getElementById('tbCashMix');
  if (!box) return;

  if (m.tier === 'none') {
    const cardPct = 60, cashPct = 40;
    box.classList.add('tb-pay-fallback');
    box.innerHTML = `
      <div class="tb-pay-unsupported">
        <strong>${svgIcon('not-supported', 'tb-status-svg')} MoMo chưa thanh toán được tại ${dest.name}</strong>
        <p>Network chưa cover. Dùng thẻ + cash thay thế:</p>
      </div>
      <div class="tb-pay-backup tb-pay-backup-primary">
        <div class="tb-pay-row">
          <div class="tb-pay-icon">${svgIcon('card', 'tb-pay-svg')}</div>
          <div class="tb-pay-info">
            <strong>Card quốc tế (chính)</strong>
            <small>Visa / Master / Amex — hotel, mall, online booking</small>
          </div>
          <div class="tb-pay-amount"><b>${cardPct}%</b><small>${fmtM(total * cardPct / 100)}</small></div>
        </div>
        <div class="tb-pay-row">
          <div class="tb-pay-icon">${svgIcon('cash', 'tb-pay-svg')}</div>
          <div class="tb-pay-info">
            <strong>Cash (dự phòng)</strong>
            <small>Tip, taxi, market nhỏ — đổi tại NH/Hà Trung trước chuyến</small>
          </div>
          <div class="tb-pay-amount"><b>${cashPct}%</b><small>${fmtM(total * cashPct / 100)}</small></div>
        </div>
      </div>`;
    return;
  }

  let momoPct, cardPct, cashPct;
  if (m.tier === 'high')   { momoPct = 60; cardPct = 25; cashPct = 15; }
  else if (m.tier === 'medium') { momoPct = 35; cardPct = 30; cashPct = 35; }
  else /* low */            { momoPct = 15; cardPct = 35; cashPct = 50; }

  const momoAmt = total * momoPct / 100;
  const cardAmt = total * cardPct / 100;
  const cashAmt = total * cashPct / 100;

  box.classList.remove('tb-pay-fallback');
  box.innerHTML = `
    <div class="tb-pay-primary">
      <div class="tb-pay-primary-head">
        <div class="tb-pay-logo">${svgIcon('momo-wallet', 'tb-wallet-svg')}</div>
        <div class="tb-pay-primary-info">
          <strong>MoMo Wallet · Primary</strong>
          <small>${dest.flag} ${dest.name} · Coverage <b>${m.coverage}%</b>${m.network?` · qua ${m.network}`:''}</small>
        </div>
        <div class="tb-pay-primary-amount">
          <b>${momoPct}%</b>
          <small>${fmtM(momoAmt)}</small>
        </div>
      </div>
      <div class="tb-pay-places-label">Thanh toán được tại</div>
      <ul class="tb-pay-tips">
        ${m.places.map(p => `<li>✓ ${p}</li>`).join('')}
      </ul>
    </div>

    <div class="tb-pay-backup">
      <small class="tb-pay-backup-label">Card + Cash cho phần MoMo chưa cover</small>
      <div class="tb-pay-row">
        <div class="tb-pay-icon">${svgIcon('card', 'tb-pay-svg')}</div>
        <div class="tb-pay-info">
          <strong>Card quốc tế</strong>
          <small>Hotel, premium mall, online booking ngoài MoMo network</small>
        </div>
        <div class="tb-pay-amount"><b>${cardPct}%</b><small>${fmtM(cardAmt)}</small></div>
      </div>
      <div class="tb-pay-row">
        <div class="tb-pay-icon">${svgIcon('cash', 'tb-pay-svg')}</div>
        <div class="tb-pay-info">
          <strong>Cash local</strong>
          <small>Tip, taxi không-app, chợ truyền thống, đền/chùa</small>
        </div>
        <div class="tb-pay-amount"><b>${cashPct}%</b><small>${fmtM(cashAmt)}</small></div>
      </div>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(location.search);
  const isEmbed = params.get('embed') === '1';
  const toolParam = params.get('tool');
  const target = toolParam || location.hash.slice(1);
  const targetTool = TOOLS.find(t => t.id === target);
  const initialTool = targetTool || TOOLS[0];
  currentToolId = initialTool.id;
  if (isEmbed) {
    document.body.classList.add('embed');
    injectEmbedBadge();
  }

  renderSidebar();
  bindToolList();
  bindToolPicker();
  renderGenericPanel(initialTool.panel === 'generic' ? initialTool : TOOLS[0]);
  initGoldPanel();
  initStockPanel();
  initCicPanel();
  initBankRatePanel();
  initFxPanel();
  initFxComparePanel();
  initTravelBudgetPanel();
  selectTool(initialTool.id, { updateHash: Boolean(targetTool) && !isEmbed, detail: true });

  window.addEventListener('hashchange', () => {
    const tool = TOOLS.find(t => t.id === location.hash.slice(1));
    if (tool && tool.id !== currentToolId) selectTool(tool.id, { updateHash: false, detail: true });
  });
});

// Powered-by footer for embed/widget contexts
function injectEmbedBadge() {
  const ws = document.querySelector('.tool-workspace');
  if (!ws || document.getElementById('embedBadge')) return;
  const badge = document.createElement('div');
  badge.id = 'embedBadge';
  badge.className = 'embed-badge';
  badge.innerHTML = `<span>Công cụ cung cấp bởi</span><strong>MoMo Widget Store</strong>`;
  ws.appendChild(badge);
}

// ─── CI Care Panel ─────────────────────────────────────────────────
const CI_CANCER_IDS    = new Set([1, 18, 33]);
const CI_KIDNEY_IDS    = new Set([6]);
const CI_TRANSPLANT_IDS = new Set([9]);

// Which special benefit groups are applicable per disease
function ciApplicable(diseaseId) {
  return {
    cancer:    CI_CANCER_IDS.has(diseaseId),
    dialysis:  CI_KIDNEY_IDS.has(diseaseId),
    transplant: CI_TRANSPLANT_IDS.has(diseaseId),
  };
}

function initCiCarePanel() {
  ciOnDiseaseChange();
  ciCalc();
}

function ciOnDiseaseChange() {
  const id = parseInt(document.getElementById('ciDiseaseSelect').value, 10);
  const app = ciApplicable(id);

  // Show/hide rows and reset hidden fields to 0 to prevent stale values
  const cancerRow = document.getElementById('ciCancerRow');
  if (cancerRow) {
    cancerRow.style.display = app.cancer ? '' : 'none';
    if (!app.cancer) {
      ['ciCancer', 'ciReconSurgery'].forEach(fid => {
        const el = document.getElementById(fid);
        if (el) el.value = 0;
      });
    }
  }

  const dialysisGroup = document.getElementById('ciDialysisGroup');
  if (dialysisGroup) {
    dialysisGroup.style.display = app.dialysis ? '' : 'none';
    if (!app.dialysis) {
      const el = document.getElementById('ciDialysisWeeks');
      if (el) { el.value = 0; }
      const lbl = document.getElementById('ciDialysisWeeksVal');
      if (lbl) lbl.textContent = '0 tuần';
    }
  }

  const transplantInput = document.getElementById('ciOrgTransplant');
  const transplantGroup = transplantInput?.closest('.ci-field-group');
  if (transplantGroup) {
    transplantGroup.style.display = app.transplant ? '' : 'none';
    if (!app.transplant && transplantInput) transplantInput.value = 0;
  }

  ciCalc();
}

function ciCalc() {
  const g  = id => document.getElementById(id);
  const gv = id => parseFloat(g(id)?.value || 0) || 0;
  const gi = id => parseInt(g(id)?.value || 0, 10) || 0;

  const diseaseId = parseInt(g('ciDiseaseSelect')?.value || 1, 10);
  const app = ciApplicable(diseaseId);

  const hospDays      = gi('ciHospDays');
  const icuDays       = gi('ciIcuDays');
  const dialysisWeeks = app.dialysis  ? gi('ciDialysisWeeks') : 0;
  const convDays      = gi('ciConvDays');
  if (g('ciHospDaysVal'))      g('ciHospDaysVal').textContent      = hospDays + ' ngày';
  if (g('ciIcuDaysVal'))       g('ciIcuDaysVal').textContent       = icuDays + ' ngày';
  if (g('ciDialysisWeeksVal')) g('ciDialysisWeeksVal').textContent = dialysisWeeks + ' tuần';
  if (g('ciConvDaysVal'))      g('ciConvDaysVal').textContent      = convDays + ' ngày';

  const hospCostPerDay = gv('ciHospCostPerDay');
  const icuCostPerDay  = gv('ciIcuCostPerDay');
  const rawHosp        = hospDays * hospCostPerDay;
  const rawIcu         = icuDays  * icuCostPerDay;
  const rawSurgery     = gv('ciSurgery');
  const rawOther       = gv('ciOther');
  const rawPre         = gv('ciPreHosp');
  const rawPost        = gv('ciPostHosp');
  const rawAmbulance   = gv('ciAmbulance');
  const rawCancer      = app.cancer    ? gv('ciCancer')        : 0;
  const rawRecon       = app.cancer    ? gv('ciReconSurgery')  : 0;
  const rawDialysis    = app.dialysis  ? dialysisWeeks * 3 * 1200000 : 0;
  const rawTransplant  = app.transplant ? gv('ciOrgTransplant') : 0;
  const rawConv        = convDays * 1500000;
  const rawPall        = gv('ciPalliative');

  const CAP_HOSP_DAY   = 3000000;
  const CAP_AMBULANCE  = 15000000;
  const CAP_DIALYSIS   = 250000000;
  const CAP_RECON      = 25000000;
  const CAP_PALLIATIVE = 60000000;

  const cappedHosp      = hospDays * Math.min(hospCostPerDay, CAP_HOSP_DAY);
  const cappedIcu       = rawIcu;
  const cappedSurgery   = rawSurgery;
  const cappedOther     = rawOther;
  const cappedPre       = rawPre;
  const cappedPost      = rawPost;
  const cappedAmbulance = Math.min(rawAmbulance, CAP_AMBULANCE);
  const cappedCancer    = rawCancer;
  const cappedRecon     = Math.min(rawRecon, CAP_RECON);
  const cappedDialysis  = Math.min(rawDialysis, CAP_DIALYSIS);
  const cappedTransplant = rawTransplant;
  const cappedConv      = Math.min(rawConv, 1500000 * 30);
  const cappedPall      = Math.min(rawPall, CAP_PALLIATIVE);

  const totalRaw    = rawHosp + rawIcu + rawSurgery + rawOther + rawPre + rawPost
    + rawAmbulance + rawCancer + rawRecon + rawDialysis + rawTransplant + rawConv + rawPall;
  const totalCapped = cappedHosp + cappedIcu + cappedSurgery + cappedOther + cappedPre + cappedPost
    + cappedAmbulance + cappedCancer + cappedRecon + cappedDialysis + cappedTransplant + cappedConv + cappedPall;

  const insurancePays = totalCapped * 0.8;
  const userPays      = totalRaw - insurancePays;

  if (g('ciResultAmount'))   g('ciResultAmount').textContent    = fmtM(insurancePays);
  if (g('ciUserPaysInline')) g('ciUserPaysInline').textContent  = fmtM(userPays);
  if (g('ciTotalCost'))      g('ciTotalCost').textContent       = fmtM(totalRaw);
  if (g('ciCappedCost'))     g('ciCappedCost').textContent      = fmtM(totalCapped);
  if (g('ciInsurancePays'))  g('ciInsurancePays').innerHTML     = '<strong>' + fmtM(insurancePays) + '</strong>';
  if (g('ciUserPays2'))      g('ciUserPays2').textContent       = fmtM(userPays);

  const rows = [
    { label: 'Giường (' + hospDays + ' ngày)', raw: rawHosp, capped: cappedHosp, note: hospCostPerDay > CAP_HOSP_DAY ? 'Hạn mức 3tr/ngày' : null },
    { label: 'ICU (' + icuDays + ' ngày)', raw: rawIcu, capped: cappedIcu },
    { label: 'Phẫu thuật', raw: rawSurgery, capped: cappedSurgery },
    { label: 'Chi phí nội trú khác', raw: rawOther, capped: cappedOther },
    { label: 'Trước nhập viện', raw: rawPre, capped: cappedPre },
    { label: 'Sau xuất viện', raw: rawPost, capped: cappedPost },
    { label: 'Xe cấp cứu', raw: rawAmbulance, capped: cappedAmbulance, note: rawAmbulance > CAP_AMBULANCE ? 'Hạn mức 15tr/năm' : null },
    { label: 'Điều trị ung thư', raw: rawCancer, capped: cappedCancer },
    { label: 'PT tái tạo ung thư', raw: rawRecon, capped: cappedRecon, note: rawRecon > CAP_RECON ? 'Hạn mức 25tr/lần' : null },
    { label: 'Chạy thận (' + dialysisWeeks + ' tuần)', raw: rawDialysis, capped: cappedDialysis, note: rawDialysis > CAP_DIALYSIS ? 'Hạn mức 250tr/năm' : null },
    { label: 'Ghép nội tạng', raw: rawTransplant, capped: cappedTransplant },
    { label: 'Chăm sóc sau ĐT (' + convDays + ' ngày)', raw: rawConv, capped: cappedConv, note: rawConv > 1500000 * 30 ? 'Hạn mức 45tr' : null },
    { label: 'Chăm sóc giảm nhẹ', raw: rawPall, capped: cappedPall, note: rawPall > CAP_PALLIATIVE ? 'Hạn mức 60tr' : null },
  ].filter(r => r.raw > 0);

  const bdEl = g('ciBreakdown');
  if (bdEl) {
    bdEl.innerHTML = rows.length ? rows.map(r => {
      const isCapped = r.note && r.capped < r.raw;
      return `<div class="ci-breakdown-row">
        <span class="ci-bd-label">${r.label}${r.note ? '<br><small style="color:#b45309">⚠ ' + r.note + '</small>' : ''}</span>
        <span class="ci-bd-val">${isCapped ? '<span class="ci-bd-val ci-capped">' + fmtM(r.raw) + '</span> ' : ''}${fmtM(r.capped * 0.8)}</span>
      </div>`;
    }).join('') : '<p style="font-size:12px;color:var(--muted);padding:8px 0;margin:0">Nhập chi phí dự kiến để xem chi tiết.</p>';
  }

  const insightEl = g('ciInsight');
  if (insightEl) {
    if (totalRaw === 0) {
      insightEl.innerHTML = 'Nhập ít nhất một khoản chi phí bên trái để xem kết quả tính toán.';
    } else {
      const coverRate = Math.round(insurancePays / totalRaw * 100);
      const capLoss   = totalRaw - totalCapped;
      let txt = `Tổng chi phí <b>${fmtM(totalRaw)}</b> — MoMoCare chi trả <b>${fmtM(insurancePays)}</b> (${coverRate}%), bạn tự lo <b>${fmtM(userPays)}</b>.`;
      if (capLoss > 500000) txt += ` <span style="color:#b45309">Phần vượt hạn mức không được bồi thường: <b>${fmtM(capLoss)}</b>.</span>`;
      insightEl.innerHTML = txt;
    }
  }
}

// ─── PHẠT NGUỘI PANEL ───────────────────────────────────────────────────────

const PN_MOCK = {
  // plates with violations
  '29A12345': {
    violations: [
      { date: '14/05/2026', time: '07:32', location: 'Đường Giải Phóng, Hà Nội', type: 'Vượt đèn đỏ', unit: 'PC08 Hà Nội', fine: 4000000, status: 'Chưa xử lý', ref: 'VPHC-2026-00412' },
      { date: '02/04/2026', time: '16:55', location: 'Vành đai 3, Hoàng Mai, Hà Nội', type: 'Quá tốc độ từ 10–20 km/h', unit: 'PC08 Hà Nội', fine: 800000, status: 'Chưa xử lý', ref: 'VPHC-2026-00287' },
    ],
  },
  '51G999': {
    violations: [
      { date: '21/06/2026', time: '08:10', location: 'Đinh Tiên Hoàng, Q.1, TP.HCM', type: 'Đi ngược chiều', unit: 'PC08 TP.HCM', fine: 1200000, status: 'Chưa xử lý', ref: 'VPHC-2026-01155' },
    ],
  },
  '43B56789': {
    violations: [
      { date: '30/05/2026', time: '22:14', location: 'Nguyễn Văn Linh, Đà Nẵng', type: 'Không đội mũ bảo hiểm', unit: 'PC08 Đà Nẵng', fine: 400000, status: 'Đã xử lý', ref: 'VPHC-2026-00801' },
    ],
  },
};

let pnVehicle = 'oto';

function initPhatNguoiPanel() {
  const formula = document.getElementById('pnFormula');
  if (formula) formula.style.display = 'block';
  pnReset();
}

function pnReset() {
  const el = document.getElementById('pnResult');
  if (!el) return;
  el.innerHTML = `
    <div class="pn-empty-state">
      <div class="pn-empty-icon">🔍</div>
      <p>Nhập biển số và nhấn <strong>Tra cứu</strong> để kiểm tra vi phạm</p>
      <p class="pn-hint">Thử: <span class="pn-sample" onclick="pnSample('29A12345')">29A·12345</span> · <span class="pn-sample" onclick="pnSample('51G999')">51G·999</span> · <span class="pn-sample" onclick="pnSample('CLEAN')">Không vi phạm</span></p>
    </div>`;
}

function pnOnInput() {
  const inp = document.getElementById('pnPlateInput');
  if (!inp) return;
  // auto uppercase, strip spaces
  inp.value = inp.value.toUpperCase().replace(/\s/g, '');
}

function pnSetVehicle(v, btn) {
  pnVehicle = v;
  document.querySelectorAll('.pn-vtab').forEach(b => b.classList.toggle('active', b.dataset.v === v));
}

function pnSample(plate) {
  const inp = document.getElementById('pnPlateInput');
  if (!inp) return;
  inp.value = plate === 'CLEAN' ? '30H99999' : plate;
  pnSearch();
}

function pnSearch() {
  const inp = document.getElementById('pnPlateInput');
  const el  = document.getElementById('pnResult');
  const btn = document.getElementById('pnSearchBtn');
  const lbl = document.getElementById('pnBtnLabel');
  if (!inp || !el) return;

  const raw   = inp.value.trim().toUpperCase().replace(/[·.\-\s]/g, '');
  if (!raw) { el.innerHTML = '<p class="pn-error">Vui lòng nhập biển số trước khi tra cứu.</p>'; return; }

  // Loading state
  lbl.textContent = 'Đang tra cứu…';
  btn.disabled = true;
  el.innerHTML = '<div class="pn-loading"><span class="pn-spinner"></span><span>Đang kết nối hệ thống CSGT…</span></div>';

  setTimeout(() => {
    lbl.textContent = 'Tra cứu';
    btn.disabled = false;

    const data = PN_MOCK[raw];
    if (data) {
      const total = data.violations.reduce((s, v) => s + (v.status === 'Chưa xử lý' ? v.fine : 0), 0);
      const pending = data.violations.filter(v => v.status === 'Chưa xử lý');
      el.innerHTML = `
        <div class="pn-result-header ${pending.length ? 'has-violation' : 'all-clear'}">
          <div class="pn-result-icon">${pending.length ? '⚠️' : '✅'}</div>
          <div>
            <div class="pn-result-plate">${formatPlate(raw)}</div>
            <div class="pn-result-summary">${pending.length ? `<strong>${pending.length} vi phạm chưa xử lý</strong> · Tổng phạt ước tính <strong>${fmt(total)}</strong>` : 'Không có vi phạm đang chờ xử lý'}</div>
          </div>
        </div>
        <div class="pn-violations">
          ${data.violations.map(v => `
          <div class="pn-violation-card ${v.status === 'Đã xử lý' ? 'resolved' : ''}">
            <div class="pn-violation-top">
              <span class="pn-vtype">${v.type}</span>
              <span class="pn-vstatus ${v.status === 'Đã xử lý' ? 'done' : 'pending'}">${v.status}</span>
            </div>
            <div class="pn-violation-meta">
              <span>📅 ${v.date} lúc ${v.time}</span>
              <span>📍 ${v.location}</span>
              <span>🏛️ ${v.unit}</span>
              <span>🔖 Mã: ${v.ref}</span>
            </div>
            <div class="pn-violation-fine">
              <span class="pn-fine-label">Mức phạt tham chiếu</span>
              <span class="pn-fine-amt ${v.status === 'Đã xử lý' ? 'resolved' : ''}">${fmt(v.fine)}</span>
            </div>
          </div>`).join('')}
        </div>
        <p class="pn-disclaimer">Kết quả mô phỏng. Tra cứu chính thức tại <a href="https://www.csgt.vn" target="_blank" rel="noopener">csgt.vn</a> hoặc trên ứng dụng MoMo.</p>`;
    } else {
      // No violations
      el.innerHTML = `
        <div class="pn-result-header all-clear">
          <div class="pn-result-icon">✅</div>
          <div>
            <div class="pn-result-plate">${formatPlate(raw)}</div>
            <div class="pn-result-summary">Không tìm thấy vi phạm đang chờ xử lý</div>
          </div>
        </div>
        <div class="pn-clear-body">
          <p>Hệ thống không ghi nhận vi phạm chưa xử lý cho biển số này tại thời điểm tra cứu.</p>
          <ul class="pn-clear-notes">
            <li>Vi phạm mới có thể chưa được đồng bộ (thường mất 3–7 ngày)</li>
            <li>Nên tra cứu lại sau các chuyến đi dài hoặc trước kỳ đăng kiểm</li>
            <li>Tra cứu chính thức tại <a href="https://www.csgt.vn" target="_blank" rel="noopener">csgt.vn</a> để xác nhận</li>
          </ul>
          <button class="pn-recheck-btn" onclick="document.getElementById('pnPlateInput').value='';document.getElementById('pnPlateInput').focus()">Tra cứu biển số khác</button>
        </div>
        <p class="pn-disclaimer">Kết quả mô phỏng — không thay thế kết quả chính thức từ cơ quan chức năng.</p>`;
    }
  }, 900);
}

function pnShowPay(ref) {
  const el = document.getElementById('pnResult');
  const existing = document.querySelector('.pn-pay-modal');
  if (existing) existing.remove();
  const modal = document.createElement('div');
  modal.className = 'pn-pay-modal';
  modal.innerHTML = `
    <div class="pn-pay-inner">
      <div class="pn-pay-header"><strong>Nộp phạt qua MoMo</strong><button onclick="this.closest('.pn-pay-modal').remove()">✕</button></div>
      <div class="pn-pay-steps">
        <div class="pn-pay-step"><span>1</span><p>Mở ứng dụng MoMo → Tiện ích → <strong>Phạt Nguội</strong></p></div>
        <div class="pn-pay-step"><span>2</span><p>Nhập biển số hoặc mã quyết định <strong>${ref}</strong></p></div>
        <div class="pn-pay-step"><span>3</span><p>Xác nhận thông tin và thanh toán bằng số dư MoMo hoặc tài khoản ngân hàng</p></div>
      </div>
      <button class="pn-pay-cta" onclick="this.closest('.pn-pay-modal').remove()">Đã hiểu</button>
    </div>`;
  document.getElementById('phatNguoiPanel').appendChild(modal);
}

function formatPlate(raw) {
  // 29A12345 → 29A·12345
  const m = raw.match(/^(\d{2}[A-Z]{1,2})(\d+)$/);
  return m ? `${m[1]}·${m[2]}` : raw;
}

// ─── KIỀU HỐI PANEL ────────────────────────────────────────────────────────

const KH_CORRIDORS = [
  { code: 'US', flag: '🇺🇸', name: 'Mỹ',       currency: 'USD', midRate: 25500, per: 1 },
  { code: 'AU', flag: '🇦🇺', name: 'Úc',        currency: 'AUD', midRate: 16800, per: 1 },
  { code: 'KR', flag: '🇰🇷', name: 'Hàn Quốc', currency: 'KRW', midRate: 18.5,  per: 1 },
  { code: 'JP', flag: '🇯🇵', name: 'Nhật',     currency: 'JPY', midRate: 170,   per: 1 },
  { code: 'DE', flag: '🇩🇪', name: 'EU',        currency: 'EUR', midRate: 27800, per: 1 },
  { code: 'TW', flag: '🇹🇼', name: 'Đài Loan', currency: 'TWD', midRate: 790,   per: 1 },
];

const KH_PROVIDERS = [
  {
    id: 'momo',  name: 'MoMo',          emoji: '💜',
    tag: 'Đối tác MoMo', tagClass: 'kh-tag-primary',
    feeFixed: 50000, feePct: 0,    rateSpread: 0.005,
    timeLabel: 'Trong ngày', timeClass: 'kh-time-fast',
    note: 'Lock tỷ giá ngay khi gửi, không phí ẩn',
  },
  {
    id: 'wise',  name: 'Wise',          emoji: '🌿',
    tag: 'Tỷ giá tốt nhất', tagClass: 'kh-tag-best',
    feeFixed: 0, feePct: 0.007, rateSpread: 0.001,
    timeLabel: '1–2 ngày', timeClass: 'kh-time-normal',
    note: 'Tỷ giá giữa thị trường, phí thấp nhất ngành',
  },
  {
    id: 'wu',    name: 'Western Union', emoji: '🟡',
    tag: 'Phổ biến',       tagClass: 'kh-tag-neutral',
    feeFixed: 0, feePct: 0.025, rateSpread: 0.02,
    timeLabel: 'Tức thì',  timeClass: 'kh-time-fast',
    note: 'Nhận tiền mặt tại điểm toàn cầu, không cần TK',
  },
  {
    id: 'remitly', name: 'Remitly',    emoji: '📲',
    tag: 'App quốc tế',    tagClass: 'kh-tag-neutral',
    feeFixed: 0, feePct: 0.015, rateSpread: 0.012,
    timeLabel: '1–3 ngày', timeClass: 'kh-time-normal',
    note: 'Chuyển qua app, hỗ trợ nhiều quốc gia',
  },
  {
    id: 'bank',  name: 'Ngân hàng',    emoji: '🏦',
    tag: 'Truyền thống',   tagClass: 'kh-tag-slow',
    feeFixed: 300000, feePct: 0.001, rateSpread: 0.025,
    timeLabel: '2–3 ngày', timeClass: 'kh-time-slow',
    note: 'Phí SWIFT + chênh lệch tỷ giá cao',
  },
];

let KH_STATE = { corridor: 'US', amount: 10000000, bound: false };

function initKhPanel() {
  const grid = document.getElementById('khCorridorGrid');
  if (grid && !grid.dataset.init) {
    grid.dataset.init = '1';
    grid.innerHTML = KH_CORRIDORS.map(c =>
      `<button type="button" class="kh-corridor-btn${c.code === KH_STATE.corridor ? ' active' : ''}" data-code="${c.code}">
        <span class="kh-corr-flag">${c.flag}</span>
        <span class="kh-corr-name">${c.name}</span>
        <span class="kh-corr-cur">${c.currency}</span>
      </button>`
    ).join('');
    grid.onclick = e => {
      const btn = e.target.closest('[data-code]');
      if (!btn) return;
      KH_STATE.corridor = btn.dataset.code;
      grid.querySelectorAll('.kh-corridor-btn').forEach(b => b.classList.toggle('active', b.dataset.code === KH_STATE.corridor));
      renderKh();
    };
  }

  const qv = document.getElementById('khQuickValues');
  if (qv && !qv.dataset.init) {
    qv.dataset.init = '1';
    qv.onclick = e => {
      const btn = e.target.closest('[data-kh]');
      if (!btn) return;
      KH_STATE.amount = +btn.dataset.kh;
      const inp = document.getElementById('khAmount');
      inp.value = KH_STATE.amount.toLocaleString('vi-VN');
      qv.querySelectorAll('button').forEach(b => b.classList.toggle('active', +b.dataset.kh === KH_STATE.amount));
      renderKh();
    };
  }

  if (!KH_STATE.bound) {
    KH_STATE.bound = true;
    const inp = document.getElementById('khAmount');
    inp.addEventListener('input', () => {
      KH_STATE.amount = parseFireMoney(inp.value) || 0;
      renderKh();
    });
    inp.addEventListener('blur', () => {
      inp.value = KH_STATE.amount.toLocaleString('vi-VN');
    });
  }

  renderKh();
}

function computeKhProvider(p, corridor, amount) {
  const rate = corridor.midRate * (1 - p.rateSpread);
  const fee = p.feeFixed + amount * p.feePct;
  const netSend = Math.max(0, amount - fee);
  const received = netSend / corridor.midRate * corridor.midRate / corridor.midRate * (1 / (1 + p.rateSpread));
  // received = (amount - fee) / (midRate * (1 + rateSpread)) — VND → foreign
  const receivedAmt = (amount - fee) / (corridor.midRate * (1 + p.rateSpread));
  return { fee, rate, receivedAmt: Math.max(0, receivedAmt) };
}

function fmtKhForeign(val, currency, midRate) {
  if (!isFinite(val) || val <= 0) return '--';
  if (currency === 'KRW' || currency === 'JPY') {
    return Math.round(val).toLocaleString('vi-VN') + ' ' + currency;
  }
  return val.toLocaleString('vi-VN', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' ' + currency;
}

function fmtKhRate(rate, currency) {
  const decimals = rate < 100 ? 2 : 0;
  return '1 ' + currency + ' = ' + rate.toLocaleString('vi-VN', { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) + ' đ';
}

function renderKh() {
  const corridor = KH_CORRIDORS.find(c => c.code === KH_STATE.corridor);
  if (!corridor) return;
  const amount = KH_STATE.amount;

  // Mid rate info
  const midEl = document.getElementById('khMidRate');
  if (midEl) {
    midEl.innerHTML = `<span class="kh-mid-label">Tỷ giá tham chiếu</span> <span class="kh-mid-val">1 ${corridor.currency} = ${corridor.midRate.toLocaleString('vi-VN')} đ</span>`;
  }

  // Compute all providers
  const results = KH_PROVIDERS.map(p => {
    const { fee, rate, receivedAmt } = computeKhProvider(p, corridor, amount);
    return { ...p, fee, rate, receivedAmt };
  });

  // Sort by received descending
  const sorted = [...results].sort((a, b) => b.receivedAmt - a.receivedAmt);
  const best = sorted[0];
  const worst = sorted[sorted.length - 1];
  const saving = best.receivedAmt - worst.receivedAmt;

  const el = document.getElementById('khResults');
  if (!el) return;

  const isMini = amount < 100000;

  el.innerHTML = `
    <div class="kh-best-card">
      <div class="kh-best-eyebrow">Kênh tốt nhất cho bạn</div>
      <div class="kh-best-provider">
        <span class="kh-best-emoji">${best.emoji}</span>
        <div>
          <strong>${best.name}</strong>
          <span class="kh-tag ${best.tagClass}">${best.tag}</span>
        </div>
      </div>
      <div class="kh-best-received">
        <span class="kh-best-label">Người nhận được</span>
        <strong class="kh-best-val">${fmtKhForeign(best.receivedAmt, corridor.currency, corridor.midRate)}</strong>
      </div>
      <div class="kh-best-meta">
        <span>Phí: <b>${fmtM(best.fee)}</b></span>
        <span>·</span>
        <span>${fmtKhRate(best.rate, corridor.currency, corridor.midRate)}</span>
        <span>·</span>
        <span class="${best.timeClass}">${best.timeLabel}</span>
      </div>
      <div class="kh-best-note">${best.note}</div>
    </div>

    <div class="kh-compare-head">So sánh tất cả kênh <span class="kh-cur-badge">${corridor.flag} ${corridor.currency}</span></div>
    <div class="kh-compare-table">
      <div class="kh-row kh-row-head">
        <span>Kênh</span>
        <span>Nhận được</span>
        <span>Phí</span>
        <span>Tỷ giá</span>
        <span>Thời gian</span>
      </div>
      ${sorted.map((p, i) => `
        <div class="kh-row${i === 0 ? ' kh-row-best' : ''}">
          <span class="kh-row-provider">
            <span class="kh-row-emoji">${p.emoji}</span>
            <span class="kh-row-name">${p.name}</span>
            ${i === 0 ? '<span class="kh-badge-best">Tốt nhất</span>' : ''}
          </span>
          <span class="kh-row-received">${fmtKhForeign(p.receivedAmt, corridor.currency, corridor.midRate)}</span>
          <span class="kh-row-fee">${p.fee > 0 ? fmtM(p.fee) : 'Miễn phí'}</span>
          <span class="kh-row-rate">${fmtKhRate(p.rate, corridor.currency, corridor.midRate)}</span>
          <span class="kh-row-time ${p.timeClass}">${p.timeLabel}</span>
        </div>
      `).join('')}
    </div>

    ${saving > 0.001 ? `
    <div class="fire-lever" style="margin-top:12px">
      <span class="fire-lever-ico">💡</span>
      <span>Dùng <b>${best.name}</b> thay vì <b>${worst.name}</b>, người nhận được thêm <b>${fmtKhForeign(saving, corridor.currency, corridor.midRate)}</b> — tương đương <b>${fmtM(saving * corridor.midRate)}</b>.</span>
    </div>` : ''}

    <button class="fire-cta" type="button" style="margin-top:16px" onclick="momo_track('cta_click',{cta:'kieu_hoi',location:'kh_panel'})">Chuyển tiền quốc tế qua MoMo</button>
  `;
}

// ── Camera Phạt Nguội Panel ────────────────────────────────────────────────

const CAM_DB = {
  hcm: { city: 'TP.HCM', cameras: [
    { road: 'Đinh Bộ Lĩnh',           district: 'Q.Bình Thạnh',  types: ['speed','red-light'], records: 512, risk: 'Cao' },
    { road: 'Võ Văn Kiệt',            district: 'Q.8',            types: ['speed'],             records: 412, risk: 'Cao' },
    { road: 'Cộng Hòa',               district: 'Q.Tân Bình',     types: ['speed','red-light'], records: 423, risk: 'Cao' },
    { road: 'QL1A (Bình Chánh)',       district: 'Bình Chánh',     types: ['speed'],             records: 478, risk: 'Cao' },
    { road: 'QL13 (giáp Bình Dương)', district: 'Thủ Đức',        types: ['speed'],             records: 367, risk: 'Cao' },
    { road: 'Nguyễn Thị Minh Khai',   district: 'Q.3',            types: ['red-light'],         records: 398, risk: 'Cao' },
    { road: 'Cách Mạng Tháng 8',      district: 'Q.3',            types: ['red-light','lane'],  records: 341, risk: 'Cao' },
    { road: 'Trường Chinh',           district: 'Q.12',            types: ['speed'],             records: 356, risk: 'Cao' },
    { road: 'Nguyễn Văn Linh',        district: 'Q.7',             types: ['speed'],             records: 301, risk: 'Cao' },
    { road: 'Đinh Tiên Hoàng',         district: 'Q.1',            types: ['red-light'],         records: 276, risk: 'Cao' },
    { road: 'Nguyễn Oanh',            district: 'Q.Gò Vấp',       types: ['speed'],             records: 267, risk: 'Cao' },
    { road: 'Xô Viết Nghệ Tĩnh',      district: 'Q.Bình Thạnh',   types: ['speed'],             records: 287, risk: 'Cao' },
    { road: 'Lê Duẩn',                district: 'Q.1',             types: ['speed'],             records: 189, risk: 'Trung bình' },
    { road: 'Hoàng Văn Thụ',          district: 'Q.Tân Bình',      types: ['red-light'],         records: 198, risk: 'Trung bình' },
    { road: 'Lý Thường Kiệt',         district: 'Q.Tân Bình',      types: ['lane'],              records: 112, risk: 'Trung bình' },
    { road: 'Quang Trung',            district: 'Q.Gò Vấp',        types: ['speed','lane'],      records: 184, risk: 'Trung bình' },
    { road: 'Tô Ký',                  district: 'Q.12',             types: ['red-light'],         records: 143, risk: 'Trung bình' },
    { road: 'Ung Văn Khiêm',          district: 'Q.Bình Thạnh',    types: ['lane'],              records: 134, risk: 'Trung bình' },
    { road: 'Huỳnh Tấn Phát',         district: 'Q.7',              types: ['lane'],              records: 97,  risk: 'Thấp' },
    { road: 'Nguyễn Văn Bứa',         district: 'Hóc Môn',         types: ['speed'],             records: 89,  risk: 'Thấp' },
  ]},
  hn: { city: 'Hà Nội', cameras: [
    { road: 'Nguyễn Trãi',            district: 'Đống Đa',         types: ['speed','red-light'], records: 489, risk: 'Cao' },
    { road: 'Tố Hữu',                 district: 'Hà Đông',         types: ['speed'],             records: 437, risk: 'Cao' },
    { road: 'QL1A (Hà Đông)',         district: 'Hà Đông',         types: ['speed'],             records: 456, risk: 'Cao' },
    { road: 'Giải Phóng',             district: 'Thanh Xuân',      types: ['speed'],             records: 398, risk: 'Cao' },
    { road: 'Lê Văn Lương',           district: 'Hà Đông',         types: ['speed','lane'],      records: 312, risk: 'Cao' },
    { road: 'Phạm Hùng',              district: 'Cầu Giấy',        types: ['speed'],             records: 321, risk: 'Cao' },
    { road: 'Xuân Thủy',             district: 'Cầu Giấy',        types: ['red-light'],         records: 267, risk: 'Cao' },
    { road: 'Đinh Tiên Hoàng',        district: 'Hoàn Kiếm',       types: ['red-light'],         records: 234, risk: 'Cao' },
    { road: 'Tây Sơn',               district: 'Đống Đa',          types: ['speed'],             records: 213, risk: 'Trung bình' },
    { road: 'Đường Láng',             district: 'Đống Đa',          types: ['lane','speed'],      records: 178, risk: 'Trung bình' },
    { road: 'Quang Trung',            district: 'Hà Đông',          types: ['red-light'],         records: 156, risk: 'Trung bình' },
    { road: 'Nguyễn Xiển',            district: 'Thanh Xuân',       types: ['speed'],             records: 145, risk: 'Trung bình' },
    { road: 'Cầu Giấy',              district: 'Cầu Giấy',         types: ['lane'],              records: 198, risk: 'Trung bình' },
    { road: 'Tràng Tiền',             district: 'Hoàn Kiếm',        types: ['red-light','lane'],  records: 167, risk: 'Trung bình' },
    { road: 'Nguyễn Văn Cừ',          district: 'Long Biên',        types: ['speed','red-light'], records: 187, risk: 'Trung bình' },
  ]},
  dn: { city: 'Đà Nẵng', cameras: [
    { road: 'Trần Phú',               district: 'Hải Châu',        types: ['speed','red-light'], records: 312, risk: 'Cao' },
    { road: 'Lê Duẩn',               district: 'Hải Châu',         types: ['red-light'],         records: 245, risk: 'Cao' },
    { road: 'Điện Biên Phủ',          district: 'Thanh Khê',       types: ['speed'],             records: 278, risk: 'Cao' },
    { road: 'Nguyễn Văn Linh',        district: 'Hải Châu',        types: ['lane'],              records: 134, risk: 'Trung bình' },
    { road: 'Nguyễn Tất Thành',       district: 'Thanh Khê',       types: ['speed','lane'],      records: 198, risk: 'Trung bình' },
    { road: 'Nguyễn Văn Thoại',       district: 'Ngũ Hành Sơn',   types: ['speed'],             records: 167, risk: 'Trung bình' },
    { road: 'Lạc Long Quân',          district: 'Ngũ Hành Sơn',   types: ['red-light'],         records: 89,  risk: 'Thấp' },
  ]},
};

const CAM_TYPE_LABELS = { speed: 'Quá tốc độ', 'red-light': 'Vượt đèn đỏ', lane: 'Sai làn / đè vạch' };
const CAM_RISK_ORDER  = { 'Cao': 0, 'Trung bình': 1, 'Thấp': 2 };

let camState = { city: 'hcm', type: 'all' };

function initCameraLookupPanel() {
  camState = { city: 'hcm', type: 'all' };
  renderCamPanel();
}

function camSetCity(city) {
  camState.city = city;
  renderCamPanel();
}

function camSetType(type) {
  camState.type = type;
  renderCamPanel();
}

function renderCamPanel() {
  const data     = CAM_DB[camState.city] || CAM_DB.hcm;
  const filtered = data.cameras
    .filter(c => camState.type === 'all' || c.types.includes(camState.type))
    .sort((a, b) => (CAM_RISK_ORDER[a.risk] - CAM_RISK_ORDER[b.risk]) || (b.records - a.records));

  const highCount    = filtered.filter(c => c.risk === 'Cao').length;
  const midCount     = filtered.filter(c => c.risk === 'Trung bình').length;
  const totalRecords = filtered.reduce((s, c) => s + c.records, 0);

  const cities = [
    { value: 'hcm', label: 'TP. Hồ Chí Minh', count: CAM_DB.hcm.cameras.length },
    { value: 'hn',  label: 'Hà Nội',           count: CAM_DB.hn.cameras.length },
    { value: 'dn',  label: 'Đà Nẵng',          count: CAM_DB.dn.cameras.length },
  ];
  const tabs = document.getElementById('camCityTabs');
  if (tabs) tabs.innerHTML = cities.map(c => `
    <button class="cam-city-tab${c.value === camState.city ? ' active' : ''}" onclick="camSetCity('${c.value}')">
      ${c.label}<span class="cam-count-badge">${c.count}</span>
    </button>
  `).join('');

  const types = [
    { value: 'all',       label: 'Tất cả' },
    { value: 'speed',     label: 'Quá tốc độ' },
    { value: 'red-light', label: 'Vượt đèn đỏ' },
    { value: 'lane',      label: 'Sai làn' },
  ];
  const pills = document.getElementById('camTypePills');
  if (pills) pills.innerHTML = types.map(t => `
    <button class="cam-type-pill${t.value === camState.type ? ' active' : ''}" onclick="camSetType('${t.value}')">
      ${t.label}
    </button>
  `).join('');

  const summary = document.getElementById('camSummary');
  if (summary) summary.innerHTML = `
    <span class="cam-stat-total">${filtered.length} điểm camera</span>
    <span class="cam-stat-sep">·</span>
    <span class="cam-stat-high">${highCount} Cao</span>
    <span class="cam-stat-sep">·</span>
    <span class="cam-stat-mid">${midCount} Trung bình</span>
    <span class="cam-stat-sep">·</span>
    <span class="cam-stat-rec">${totalRecords.toLocaleString('vi-VN')} lượt ghi nhận</span>
  `;

  const tbody = document.getElementById('camTableBody');
  if (tbody) tbody.innerHTML = filtered.length === 0
    ? '<tr><td colspan="4" class="cam-empty">Không có điểm camera nào cho bộ lọc này.</td></tr>'
    : filtered.map(c => {
        const typeText  = c.types.map(t => CAM_TYPE_LABELS[t]).join(' / ');
        const riskClass = c.risk === 'Cao' ? 'cam-risk-high' : c.risk === 'Trung bình' ? 'cam-risk-mid' : 'cam-risk-low';
        const riskIcon  = c.risk === 'Cao' ? '⚠' : c.risk === 'Trung bình' ? '◆' : '·';
        return `<tr>
          <td class="cam-td-road">
            <span class="cam-road-name">${c.road}</span>
            <span class="cam-records-sub">${c.records.toLocaleString('vi-VN')} lượt</span>
          </td>
          <td class="cam-td-district">${c.district}</td>
          <td class="cam-td-type">${typeText}</td>
          <td class="cam-td-risk"><span class="cam-risk-badge ${riskClass}">${riskIcon} ${c.risk}</span></td>
        </tr>`;
      }).join('');
}
