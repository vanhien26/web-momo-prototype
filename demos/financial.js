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
      { icon: '📅', text: 'Trả góp đến 48 tháng' },
      { icon: '⚡', text: 'Duyệt trong 1 phút' },
      { icon: '📄', text: 'Không cần CM thu nhập' },
      { icon: '🌐', text: '100% online' },
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
    intent: 'Commercial intent', panel: 'generic',
    description: 'Ước tính số tiền thanh toán hằng kỳ khi chuyển đổi trả góp dư nợ hoặc giao dịch qua Ví Trả Sau MoMo.',
    jtbd: 'Tôi đang muốn mua một món hàng trả góp qua Ví Trả Sau và phân vân chọn kỳ hạn nào phù hợp. Cần thấy ngay <b>số tiền gốc và phí trả mỗi tháng</b> cho từng kỳ hạn, để <b>cân đối tài chính cá nhân</b>.',
    formula: 'Trả mỗi kỳ = <b>(Dư nợ chuyển đổi ÷ Kỳ hạn) + 3% × Dư nợ chuyển đổi</b><br><em>Ví Trả Sau áp dụng phí chuyển đổi cố định 3%/tháng tính trên dư nợ đăng ký trả góp ban đầu.</em>',
    resultLabel: 'TRẢ MỖI THÁNG (gồm gốc & phí)',
    fields: [
      { id: 'postpaidAmount', label: 'Số tiền cần trả góp', type: 'money', min: 100000, max: 30000000, step: 100000, value: 3000000, chips: [1000000, 3000000, 10000000] },
      { id: 'installmentTerm', label: 'Kỳ hạn trả góp', type: 'select', options: [
        {value:3,label:'3 tháng (phí 3%/tháng)'},{value:6,label:'6 tháng (phí 3%/tháng)'},
        {value:9,label:'9 tháng (phí 3%/tháng)'},{value:12,label:'12 tháng (phí 3%/tháng)'},
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
      ], insight: '💡 Phí dịch vụ Ví Trả Sau <b>33.000đ/tháng</b> chỉ phát sinh trong tháng có giao dịch (miễn phí 5 giao dịch đầu tiên sau khi mở ví).' };
    },
  },
  {
    id: 'cic-score', name: 'CIC Score', category: 'Credit', abbr: 'CIC',
    intent: 'Informational intent', panel: 'generic',
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
    id: 'bao-hiem-o-to', name: 'BH Ô Tô', category: 'Insurance', abbr: 'BH',
    intent: 'Commercial intent', panel: 'generic',
    description: 'Mô phỏng phí bảo hiểm vật chất ô tô (BHVC tự nguyện) theo giá trị xe và độ tuổi xe. Tỷ lệ tham chiếu thị trường 2026 từ Bảo Việt, PJICO, OPES, MIC: 1,4% - 2% giá trị xe.',
    jtbd: 'Tôi sắp mua hoặc gia hạn bảo hiểm vật chất cho xe và muốn biết phải trả bao nhiêu. Cần biết ngay <b>phí bảo hiểm năm dự kiến theo giá trị xe và độ tuổi xe của mình</b>, để <b>dự trù ngân sách và so sánh giữa các gói trước khi quyết định mua</b>.',
    formula: 'Phí BHVC/năm = <b>Giá trị xe × Tỷ lệ phí (%)</b> + <b>VAT 10%</b><br><em>Tỷ lệ thị trường: xe con dưới 3 năm 1,4% &nbsp;·&nbsp; 3-6 năm 1,6% &nbsp;·&nbsp; trên 6 năm 1,8% &nbsp;·&nbsp; SUV/Pickup +0,2%</em>',
    resultLabel: 'PHÍ BẢO HIỂM NĂM',
    fields: [
      { id: 'carValue',      label: 'Giá trị xe',  type: 'money',  min: 100000000, max: 5000000000, step: 10000000, value: 500000000, chips: [200000000, 500000000, 1000000000] },
      { id: 'insuranceRate', label: 'Loại xe và độ tuổi', type: 'select', options: [
        {value:1.4, label:'1,40% - Xe con dưới 3 năm'},
        {value:1.6, label:'1,60% - Xe con 3-6 năm SUV/Pickup mới'},
        {value:1.8, label:'1,80% - Xe con trên 6 năm hoặc SUV/Pickup 3-6 năm'},
        {value:2.0, label:'2,00% - SUV/Pickup trên 6 năm'},
      ], value: 1.4 },
    ],
    compute(v) {
      const p = v.carValue * v.insuranceRate / 100, vat = p * 0.1;
      return { result: fmt(p + vat), details: [
        { label: 'Phí bảo hiểm thuần', value: fmt(p) },
        { label: 'VAT (10%)', value: fmt(vat) },
        { label: 'Bồi thường tối đa', value: fmtM(v.carValue) },
        { label: 'Tỷ lệ phí áp dụng', value: v.insuranceRate.toFixed(2) + '%' },
      ]};
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
      { id: 'months',        label: 'Số tháng dự kiến tham gia',          type: 'range', min: 12, max: 360, step: 12, value: 240, unit: 'tháng', chips: [60, 120, 240, 360] },
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
        {value:0,label:'Lao động nữ'},{value:1,label:'Lao động nam'},
      ], value: 0 },
      { id: 'lhBirthYear', label: 'Năm sinh',          type: 'range', min: 1960,    max: 2005,     step: 1,      value: 1980,      unit: '', chips: [1970, 1980, 1990, 2000] },
      { id: 'lhYears',     label: 'Số năm đã đóng BHXH', type: 'range', min: 1,       max: 40,       step: 1,      value: 20,        unit: 'năm', chips: [15, 20, 30, 35] },
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
      { id: 'yearsPre2014',   label: 'Số năm đóng trước 2014',                type: 'range', min: 0, max: 25, step: 0.5, value: 0,  unit: 'năm', chips: [0, 5, 10, 15, 20] },
      { id: 'yearsPost2014',  label: 'Số năm đóng từ 2014',                   type: 'range', min: 0, max: 15, step: 0.5, value: 10, unit: 'năm', chips: [0, 5, 10, 15] },
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
    id: 'tiet-kiem', name: 'Tiết Kiệm', category: 'Savings', abbr: 'TK',
    intent: 'Informational intent', panel: 'generic',
    description: 'Tính số tiền nhận được khi gửi tiết kiệm theo kỳ hạn và lãi suất. Lãi tiết kiệm cá nhân tại TCTD được miễn thuế TNCN theo Điều 4 Luật Thuế TNCN.',
    jtbd: 'Tôi có một khoản tiền nhàn rỗi và muốn ước tính nhận được bao nhiêu lãi nếu gửi tiết kiệm. Cần biết ngay <b>số tiền thực nhận khi đáo hạn theo lãi suất và kỳ hạn</b>, để <b>so sánh với gửi MoMo, mua vàng hoặc đầu tư khác trước khi quyết định</b>.',
    formula: 'Lãi = <b>Gốc × Lãi suất/năm × Kỳ hạn (tháng) ÷ 12</b><br>Tổng nhận = <b>Gốc + Lãi</b><br><em>Áp dụng lãi đơn cuối kỳ (không ghép lãi). Lãi tiết kiệm cá nhân được miễn thuế TNCN.</em>',
    resultLabel: 'NHẬN KHI ĐÁO HẠN',
    fields: [
      { id: 'principal', label: 'Số tiền gửi',    type: 'money',  min: 1000000, max: 2000000000, step: 1000000, value: 50000000, chips: [10000000, 50000000, 200000000] },
      { id: 'rate',      label: 'Lãi suất/năm',  type: 'range',  min: 2, max: 8, step: 0.1, value: 5.5, unit: '%', chips: [4, 5, 6, 7] },
      { id: 'term',      label: 'Kỳ hạn',         type: 'select', options: [
        {value:1,label:'1 tháng'},{value:3,label:'3 tháng'},
        {value:6,label:'6 tháng'},{value:12,label:'12 tháng'},{value:24,label:'24 tháng'},
      ], value: 12 },
    ],
    compute(v) {
      const interest = v.principal * v.rate / 100 / 12 * v.term;
      return { result: fmt(v.principal + interest), details: [
        { label: 'Tiền gốc', value: fmt(v.principal) },
        { label: 'Lãi nhận', value: fmt(interest) },
        { label: 'Thuế TNCN', value: 'Miễn (Điều 4 Luật TNCN)' },
      ]};
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
    ],
    compute(v) {
      const location = v.location;
      const education = v.education;
      const age = v.age;
      
      let baseCost = 0;
      let eduCost = 0;
      
      if (location === 'city') {
        baseCost = 4000000;
        if (education === 'public') eduCost = 1500000;
        else if (education === 'private') eduCost = 6000000;
        else eduCost = 20000000;
      } else {
        baseCost = 2500000;
        if (education === 'public') eduCost = 800000;
        else if (education === 'private') eduCost = 3000000;
        else eduCost = 10000000;
      }
      
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
        const r = 0.06 / 12;
        const N = yearsLeft * 12;
        monthlySave = uniCostFuture * r / (Math.pow(1 + r, N) - 1);
      }
      
      return {
        result: fmtM(totalCost),
        details: [
          { label: 'Chi phí cơ bản/tháng', value: fmt(baseCost) },
          { label: 'Học phí dự kiến/tháng', value: fmt(eduCost) },
          { label: 'Tổng quỹ ĐH khi 18 tuổi', value: fmtM(uniCostFuture) },
          { label: 'Tiền tích lũy ĐH/tháng', value: fmt(monthlySave) },
        ],
        insight: yearsLeft > 0 ? `💡 Cần tích lũy khoảng <b>${fmt(monthlySave)}</b>/tháng vào danh mục đầu tư (lợi suất kỳ vọng 6%/năm) từ hôm nay để chuẩn bị sẵn quỹ đại học ${fmtM(uniCostFuture)} cho con.` : '💡 Con đã đủ tuổi hoặc lớn hơn 18 tuổi. Hãy bắt đầu lập kế hoạch tài chính cho tương lai tự lập của con.',
      };
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
        {value:'luong-hd',     label:'💼 Lương từ HĐLĐ (biểu lũy tiến 5 bậc)'},
        {value:'ctv',          label:'🧑‍💻 CTV / Freelance (khấu trừ 10% tại nguồn)'},
        {value:'dau-tu',       label:'📈 Đầu tư vốn / Cổ tức (5% cố định)'},
        {value:'trung-thuong', label:'🎁 Trúng thưởng / Quà tặng (10% vượt 10tr)'},
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
        const bhxhCap = 50600000, bhtnCap = 93600000; // 20× lương cơ sở / 20× lương tối thiểu vùng I
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
    id: 'gold',  name: 'Giá Vàng & Sức Mua', category: 'Investment', abbr: 'AU',  panel: 'gold',
  },
  {
    id: 'stock', name: 'Tập Đầu Tư CK',      category: 'Investment', abbr: 'CK',  panel: 'stock',
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
    id: 'quy-du-phong', name: 'Quỹ Dự Phòng', category: 'Planning', abbr: 'QDP',
    intent: 'Informational intent', panel: 'generic',
    description: 'Tính quy mô quỹ khẩn cấp cần có theo chi tiêu và số tháng an toàn mục tiêu.',
    jtbd: 'Tôi muốn xây quỹ dự phòng cho 3 đến 12 tháng chi tiêu nhưng không biết cần bao nhiêu. Cần ước tính ngay <b>mục tiêu quỹ dự phòng và khoảng còn thiếu so với tiết kiệm hiện có</b>, để <b>biết phải gửi thêm bao nhiêu mỗi tháng để hoàn thành mục tiêu trong thời gian mong muốn</b>.',
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
      { id: 'feeInflation', label: 'Tăng học phí/năm',       type: 'range',  min: 3, max: 20, step: 0.5, value: 8, unit: '%', chips: [5, 8, 12, 15] },
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
];

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
  });
}

function setDetailMode(enabled) {
  detailMode = enabled;
  document.body.classList.toggle('tool-detail-mode', enabled);
}

function syncHash(id) {
  if (location.hash.slice(1) === id) return;
  try { history.replaceState(null, '', `#${id}`); } catch(e) {}
}

function selectTool(id, options = {}) {
  const { updateHash = true, detail = true } = options;
  const tool = TOOLS.find(t => t.id === id);
  if (!tool) return;
  currentToolId = id;
  setDetailMode(detail);
  if (updateHash) syncHash(id);
  renderSidebar();
  renderRelatedTools();
  document.getElementById('genericPanel').hidden = tool.panel !== 'generic';
  document.getElementById('goldPanel').hidden    = tool.panel !== 'gold';
  document.getElementById('stockPanel').hidden   = tool.panel !== 'stock';
  document.getElementById('cicPanel').hidden      = tool.panel !== 'cic';
  document.getElementById('bankRatePanel').hidden = tool.panel !== 'bank-rate';
  document.getElementById('fxPanel').hidden       = tool.panel !== 'fx';
  document.getElementById('fxComparePanel').hidden     = tool.panel !== 'fx-compare';
  document.getElementById('travelBudgetPanel').hidden  = tool.panel !== 'travel-budget';
  document.getElementById('firePanel').hidden          = tool.panel !== 'fire';
  if (tool.panel === 'generic')   renderGenericPanel(tool);
  if (tool.panel === 'gold')      initGoldPanel();
  if (tool.panel === 'stock')     renderStockTable();
  if (tool.panel === 'cic')       renderCicPanel();
  if (tool.panel === 'bank-rate') computeBankRate();
  if (tool.panel === 'fx')        computeFx();
  if (tool.panel === 'fx-compare') initFxComparePanel();
  if (tool.panel === 'travel-budget') initTravelBudgetPanel();
  if (tool.panel === 'fire')      initFirePanel();
}

// ─── Related Tools (bottom-of-page navigation)
function renderRelatedTools() {
  const grid = document.getElementById('relatedToolsGrid');
  if (!grid) return;
  const current = TOOLS.find(t => t.id === currentToolId);
  const others = TOOLS.filter(t => t.id !== currentToolId);
  const titleEl = document.getElementById('relatedToolsTitle');
  const subEl = document.getElementById('relatedToolsSub');
  if (titleEl && current) titleEl.textContent = `Khám phá utilities khác ngoài ${current.name}`;
  if (subEl) subEl.textContent = `Còn ${others.length} công cụ tài chính khác trong Money Lab cho các quyết định khác của bạn.`;
  const categories = [...new Set(others.map(t => t.category))];
  grid.innerHTML = categories.map(cat => {
    const items = others.filter(t => t.category === cat);
    return `<div class="related-tool-group">
      <div class="related-tool-group-head"><span>${cat}</span><b>${items.length}</b></div>
      <div class="related-tool-group-items">
        ${items.map(t => `
          <button class="related-tool-card" data-id="${t.id}" type="button">
            <span class="related-tool-icon">${t.abbr}</span>
            <span class="related-tool-meta">
              <strong>${t.name}</strong>
              <small>${(t.description || '').slice(0, 60).replace(/\.\s.*$/, '') || t.category}</small>
            </span>
            <span class="related-tool-arrow" aria-hidden="true">→</span>
          </button>
        `).join('')}
      </div>
    </div>`;
  }).join('');
}

function bindRelatedTools() {
  const grid = document.getElementById('relatedToolsGrid');
  if (!grid || grid.dataset.bound === '1') return;
  grid.dataset.bound = '1';
  grid.addEventListener('click', event => {
    const btn = event.target.closest('.related-tool-card');
    if (!btn || !grid.contains(btn)) return;
    event.preventDefault();
    const fromId = currentToolId;
    selectTool(btn.dataset.id);
    document.getElementById('top')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    momo_track('related_tool_click', { from: fromId, to: btn.dataset.id });
  });
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
          <span class="highlight-icon">${h.icon}</span>
          <span class="highlight-text">${h.text}</span>
        </div>
      `).join('');
      hlEl.style.display = '';
    } else {
      hlEl.style.display = 'none';
    }
  }

  // Partners row
  const partEl = document.getElementById('genericPartners');
  if (partEl) {
    if (tool.partners && tool.partners.length) {
      partEl.innerHTML = `
        <div class="partners-title">Đối tác Vay Nhanh</div>
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
  const condAttr = f => f.condition ? ` data-cond-field="${f.condition.field}" data-cond-value="${[].concat(f.condition.value).join(',')}"` : '';
  container.innerHTML = tool.fields.map(f => {
    if (f.type === 'money') {
      const formattedInitial = (f.value || 0).toLocaleString('vi-VN');
      return `<div class="field-group" data-field="${f.id}"${condAttr(f)}>
        <label class="field-label" for="${f.id}">${f.label}</label>
        <div class="money-input-row">
          <input type="text" inputmode="numeric" id="${f.id}" value="${formattedInitial}">
          <span class="unit-tag">đ</span>
        </div>
        <div class="money-chips">
          ${(f.chips || []).map(c => `<button type="button" class="chip-btn${c === f.value ? ' active' : ''}" data-val="${c}">${fmtChip(c)}</button>`).join('')}
        </div>
      </div>`;
    }
    if (f.type === 'range') {
      const unitTxt = (f.unit || '').trim();
      const unitTag = unitTxt ? `<span class="unit-tag">${unitTxt}</span>` : '';
      const chips = f.chips || autoChips(f);
      return `<div class="field-group" data-field="${f.id}"${condAttr(f)}>
        <label class="field-label" for="${f.id}">${f.label}</label>
        <div class="num-input-row">
          <button type="button" class="num-step" data-target="${f.id}" data-dir="-1" aria-label="Giảm">−</button>
          <input type="number" id="${f.id}" value="${f.value}" min="${f.min}" max="${f.max}" step="${f.step}">
          ${unitTag}
          <button type="button" class="num-step" data-target="${f.id}" data-dir="1" aria-label="Tăng">+</button>
        </div>
        ${chips.length ? `<div class="num-chips">
          ${chips.map(c => `<button type="button" class="chip-btn${+c === +f.value ? ' active' : ''}" data-val="${c}">${formatChip(c, f)}</button>`).join('')}
        </div>` : ''}
      </div>`;
    }
    if (f.type === 'pills') {
      return `<div class="field-group" data-field="${f.id}"${condAttr(f)}>
        <label class="field-label" for="${f.id}">${f.label}</label>
        <input type="hidden" id="${f.id}" value="${f.value}">
        <div class="pills-grid">
          ${f.options.map(o => `<button type="button" class="pill-btn${String(o.value) === String(f.value) ? ' active' : ''}" data-val="${o.value}">${o.label}</button>`).join('')}
        </div>
      </div>`;
    }
    const opts = f.options.map(o => `<option value="${o.value}"${String(o.value) === String(f.value) ? ' selected' : ''}>${o.label}</option>`).join('');
    return `<div class="field-group"${condAttr(f)}>
      <label class="field-label" for="${f.id}">${f.label}</label>
      <select id="${f.id}">${opts}</select>
    </div>`;
  }).join('');

  // Conditional field visibility based on data-cond-field/value
  applyConditionalFields();

  tool.fields.forEach(f => {
    const el = document.getElementById(f.id);
    el.addEventListener('input', () => {
      if (f.type === 'range' || f.type === 'money') {
        const currentNum = f.type === 'money' ? parseMoney(el.value) : +el.value;
        document.querySelectorAll(`[data-field="${f.id}"] .chip-btn`).forEach(btn => {
          btn.classList.toggle('active', +btn.dataset.val === currentNum);
        });
      }
      if (f.type === 'pills') {
        document.querySelectorAll(`[data-field="${f.id}"] .pill-btn`).forEach(btn => {
          btn.classList.toggle('active', String(btn.dataset.val) === String(el.value));
        });
      }
      applyConditionalFields();
      computeGeneric(tool);
    });
    if (f.type === 'money') {
      el.addEventListener('blur', () => {
        const num = parseMoney(el.value);
        el.value = num.toLocaleString('vi-VN');
      });
    }
    if (f.type === 'money' || f.type === 'range') {
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
    if (f.type === 'range') {
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

  computeGeneric(tool);
}

function autoChips(f) {
  const range = f.max - f.min;
  const raw = [f.min + range * 0.25, f.min + range * 0.5, f.min + range * 0.75];
  return raw.map(v => {
    const stepped = Math.round(v / f.step) * f.step;
    return +stepped.toFixed(4);
  });
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

function applyConditionalFields() {
  document.querySelectorAll('[data-cond-field]').forEach(el => {
    const fieldId = el.dataset.condField;
    const allowed = (el.dataset.condValue || '').split(',');
    const current = document.getElementById(fieldId)?.value;
    el.style.display = allowed.includes(String(current)) ? '' : 'none';
  });
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
  tool.fields.forEach(f => {
    const raw = document.getElementById(f.id).value;
    if (f.type === 'money') {
      vals[f.id] = parseMoney(raw);
    } else {
      const num = +raw;
      vals[f.id] = (raw !== '' && !isNaN(num)) ? num : raw;
    }
  });
  const res = tool.compute(vals);
  document.getElementById('resultLabel').textContent  = tool.resultLabel;
  document.getElementById('resultValue').textContent  = res.result;
  document.getElementById('resultDetails').innerHTML  = res.details.map(d =>
    `<div class="result-row"><span>${d.label}</span><strong>${d.value}</strong></div>`
  ).join('');
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
const GOLD_PRODUCTS = [
  { id: 'sjc-luong',  name: 'SJC 1 lượng',      brand: 'SJC', unit: 'lượng', buy: 121500000, sell: 124000000, trend: 'up'   },
  { id: 'sjc-nhan',   name: 'SJC Nhẫn 1 chỉ',   brand: 'SJC', unit: 'chỉ',   buy: 12100000,  sell: 12300000,  trend: 'up'   },
  { id: 'pnj-luong',  name: 'PNJ 1 lượng',       brand: 'PNJ', unit: 'lượng', buy: 119000000, sell: 122000000, trend: 'flat' },
  { id: 'pnj-nhan',   name: 'PNJ Nhẫn 1 chỉ',   brand: 'PNJ', unit: 'chỉ',   buy: 11900000,  sell: 12200000,  trend: 'down' },
  { id: 'doji-luong', name: 'DOJI 1 lượng',      brand: 'DOJI',unit: 'lượng', buy: 120500000, sell: 123500000, trend: 'up'   },
  { id: 'btmc-luong', name: 'Bảo Tín Minh Châu', brand: 'BTMC',unit: 'lượng', buy: 120000000, sell: 123000000, trend: 'flat' },
];

const GOLD_WORLD = { pair: 'XAU/USD', price: 3312.50, change: +18.30, changePct: +0.56, high: 3328.10, low: 3298.40 };

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

  // Price table
  document.getElementById('goldPriceTable').innerHTML = GOLD_PRODUCTS.map(p => {
    const spread = p.sell - p.buy;
    const tColor = TREND_COLOR[p.trend];
    const tIcon  = TREND_ICON[p.trend];
    return `
    <div class="gold-table-row">
      <span class="gold-row-name"><b>${p.brand}</b>${p.name.replace(p.brand, '').trim()}</span>
      <span class="gold-row-buy">${fmtM(p.buy)}<small>/${p.unit}</small></span>
      <span class="gold-row-sell">${fmtM(p.sell)}<small>/${p.unit}</small></span>
      <span class="gold-row-spread">${fmtM(spread)}</span>
      <span class="gold-row-trend" style="color:${tColor}">${tIcon}</span>
    </div>`;
  }).join('');

  // Chart product selector (only lượng-based products to keep prices comparable)
  const chartProducts = GOLD_PRODUCTS.filter(p => p.unit === 'lượng');
  document.getElementById('goldChartProductCtrl').innerHTML = chartProducts.map(p =>
    `<button type="button" data-chart-product="${p.id}"${p.id === goldChartProductId ? ' class="active"' : ''}>${p.brand}</button>`
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

// ─── CIC Score Panel
let cicScore = 570;
let selectedNplGroup = 1;

function getBand(score) {
  return CIC_BANDS.find(b => score >= b.min && score <= b.max) || CIC_BANDS[CIC_BANDS.length - 1];
}

function initCicPanel() {
  // Render rank ticks 10 → 1 (left = worst, right = best)
  const ticksEl = document.getElementById('cicV2Ticks');
  ticksEl.innerHTML = [10,9,8,7,6,5,4,3,2,1].map(n => `<span>${n}</span>`).join('');

  const slider = document.getElementById('cicV2Slider');
  if (!initCicPanel._bound) {
    initCicPanel._bound = true;
    slider.addEventListener('input', e => {
      cicScore = +e.target.value;
      updateCicV2();
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
  // Account for thumb width (≈ 20px). We approximate via calc on left position.
  bubble.style.left = `calc(${(pct * 100).toFixed(1)}% )`;

  // Band range
  document.getElementById('cicV2RangeMin').textContent = `${band.min} điểm`;
  document.getElementById('cicV2RangeMax').textContent = `${band.max} điểm`;

  // Band info
  const prospect = band.hang <= 2 ? 'Dễ vay, lãi suất ưu đãi tốt nhất'
    : band.hang <= 4 ? 'Vay được với điều kiện thuận lợi'
    : band.hang === 5 ? 'Một số tổ chức tín dụng có thể xét duyệt'
    : band.hang <= 7 ? 'Khó vay, thường cần tài sản đảm bảo'
    : 'Hầu hết tổ chức tín dụng từ chối';
  document.getElementById('cicV2BandInfo').innerHTML = `
    <div class="cic-v2-band-row"><small>HẠNG</small><b style="color:${band.color}">Hạng ${band.hang} · ${band.label}</b></div>
    <div class="cic-v2-band-row"><small>KHOẢNG ĐIỂM</small><b>${band.min} - ${band.max}</b></div>
    <div class="cic-v2-band-row"><small>TRIỂN VỌNG VAY VỐN</small><b>${prospect}</b></div>
  `;

  // Phone gauge + labels
  document.getElementById('cicV2Gauge').innerHTML = renderCicGauge(cicScore);
  document.getElementById('cicV2RankLabel').textContent = band.label;
  document.getElementById('cicV2RankLabel').style.color = band.color;
  document.getElementById('cicV2RankDesc').textContent = band.desc;
}

function renderCicPanel() {
  updateCicV2();
  renderNplSelector();
  renderNplImpact(selectedNplGroup);
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
  { id: 'vcb',  name: 'Vietcombank', abbr: 'VCB', color: '#005c2f', rates: { 1: 1.6, 3: 2.0, 6: 3.0, 12: 4.7 } },
  { id: 'bidv', name: 'BIDV',        abbr: 'BID', color: '#1a56db', rates: { 1: 1.7, 3: 2.2, 6: 3.3, 12: 4.8 } },
  { id: 'vtb',  name: 'Vietinbank',  abbr: 'CTG', color: '#b91c1c', rates: { 1: 1.7, 3: 2.2, 6: 3.3, 12: 4.8 } },
  { id: 'tcb',  name: 'Techcombank', abbr: 'TCB', color: '#c2410c', rates: { 1: 2.3, 3: 3.0, 6: 4.5, 12: 5.2 } },
  { id: 'mb',   name: 'MB Bank',     abbr: 'MB',  color: '#1d4ed8', rates: { 1: 2.1, 3: 2.7, 6: 4.0, 12: 5.0 } },
  { id: 'acb',  name: 'ACB',         abbr: 'ACB', color: '#0891b2', rates: { 1: 2.1, 3: 2.7, 6: 4.0, 12: 5.2 } },
];

let bankTerm = 6;

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
      document.getElementById('bankDeposit').value = btn.dataset.deposit;
      computeBankRate();
    });
  });
  document.getElementById('bankDeposit').addEventListener('input', computeBankRate);
  computeBankRate();
}

function computeBankRate() {
  const principal = +document.getElementById('bankDeposit').value || 100000000;
  const term = bankTerm;
  const sorted = [...BANK_RATES].sort((a, b) => b.rates[term] - a.rates[term]);
  const maxRate = sorted[0].rates[term];
  document.getElementById('bankRateTable').innerHTML =
    `<div class="bank-rate-header"><span>Ngân hàng</span><span>Lãi suất/năm</span><span>Lợi nhuận / Tổng nhận</span></div>` +
    sorted.map((b, i) => {
      const rate = b.rates[term];
      const interest = principal * rate / 100 / 12 * term;
      const total = principal + interest;
      const isBest = i === 0;
      return `<div class="bank-rate-row${isBest ? ' best' : ''}">
        <div class="bank-name">
          <span class="bank-abbr" style="background:${b.color}">${b.abbr}</span>
          <span>${b.name}</span>
          ${isBest ? '<span class="best-badge">Cao nhất</span>' : ''}
        </div>
        <div class="bank-rate-pct">${rate.toFixed(1)}%
          <div class="rate-bar"><div class="rate-fill" style="width:${(rate / maxRate * 100).toFixed(0)}%"></div></div>
        </div>
        <div class="bank-net">
          <strong class="bank-net-profit">+${fmtM(interest)}</strong>
          <small class="bank-net-total">Tổng: ${fmtM(total)}</small>
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
  lodging: { name:'Lưu trú',    weight:0.40, icon:'🏨' },
  food:    { name:'Ăn uống',    weight:0.25, icon:'🍜' },
  transport:{ name:'Di chuyển', weight:0.15, icon:'🚇' },
  activity:{ name:'Tham quan',  weight:0.15, icon:'🎟️' },
  misc:    { name:'Chi khác',   weight:0.05, icon:'🛍️' },
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
      <span class="tb-icon">${v.icon}</span>
      <span class="tb-name">${v.name}</span>
      <div class="tb-bar"><div class="tb-bar-fill" style="width:${v.weight*100}%"></div></div>
      <strong class="tb-amt">${fmtM(amt)}</strong>
    </div>`;
  }).join('');
  document.getElementById('tbBreakdown').innerHTML = breakdownHtml;

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
        <strong>🚫 MoMo chưa thanh toán được tại ${dest.name}</strong>
        <p>Network chưa cover. Dùng thẻ + cash thay thế:</p>
      </div>
      <div class="tb-pay-backup tb-pay-backup-primary">
        <div class="tb-pay-row">
          <div class="tb-pay-icon">💳</div>
          <div class="tb-pay-info">
            <strong>Card quốc tế (chính)</strong>
            <small>Visa / Master / Amex — hotel, mall, online booking</small>
          </div>
          <div class="tb-pay-amount"><b>${cardPct}%</b><small>${fmtM(total * cardPct / 100)}</small></div>
        </div>
        <div class="tb-pay-row">
          <div class="tb-pay-icon">💵</div>
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
        <div class="tb-pay-logo">💚</div>
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
        <div class="tb-pay-icon">💳</div>
        <div class="tb-pay-info">
          <strong>Card quốc tế</strong>
          <small>Hotel, premium mall, online booking ngoài MoMo network</small>
        </div>
        <div class="tb-pay-amount"><b>${cardPct}%</b><small>${fmtM(cardAmt)}</small></div>
      </div>
      <div class="tb-pay-row">
        <div class="tb-pay-icon">💵</div>
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
  if (isEmbed) {
    document.body.classList.add('embed');
    injectEmbedBadge();
  }

  renderSidebar();
  bindToolList();
  renderRelatedTools();
  bindRelatedTools();
  renderGenericPanel(TOOLS[0]);
  initGoldPanel();
  initStockPanel();
  initCicPanel();
  initBankRatePanel();
  initFxPanel();
  initFxComparePanel();
  initTravelBudgetPanel();

  const target = toolParam || location.hash.slice(1);
  if (target) {
    const tool = TOOLS.find(t => t.id === target);
    if (tool) selectTool(tool.id, { updateHash: !isEmbed, detail: true });
  }
});

// Powered-by footer for embed/widget contexts
function injectEmbedBadge() {
  const ws = document.querySelector('.tool-workspace');
  if (!ws || document.getElementById('embedBadge')) return;
  const badge = document.createElement('div');
  badge.id = 'embedBadge';
  badge.className = 'embed-badge';
  badge.innerHTML = `<span>Công cụ cung cấp bởi</span><strong>MoMo Money Lab</strong>`;
  ws.appendChild(badge);
}
