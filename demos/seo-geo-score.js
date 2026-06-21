const SCENARIOS = {
  ready: {
    pageType: 'Blog Article', riskProfile: 'ymyl', canonical: 'https://www.momo.vn/blog/vay-nhanh-an-toan', primaryKeyword: 'vay nhanh',
    metaTitle: 'Vay nhanh an toàn: Điều kiện, chi phí và cách đăng ký',
    metaDescription: 'Tìm hiểu điều kiện vay nhanh, chi phí cần biết và các bước đăng ký an toàn trên MoMo. Nội dung được rà soát để giúp bạn đưa ra quyết định phù hợp.',
    h1: 'Vay nhanh an toàn: Điều kiện và cách đăng ký',
    contentBody: `Tóm tắt: Vay nhanh là hình thức tiếp cận khoản vay trong thời gian ngắn. Người vay cần kiểm tra điều kiện, tổng chi phí và khả năng trả nợ trước khi đăng ký.

## Vay nhanh là gì?
Vay nhanh giúp người dùng hoàn tất đăng ký trực tuyến với quy trình rút gọn. MoMo đóng vai trò nền tảng kết nối, thông tin phê duyệt do đối tác tài chính cung cấp.

## Điều kiện và chi phí cần kiểm tra
Hãy đối chiếu độ tuổi, thu nhập, lịch sử tín dụng, lãi suất, phí dịch vụ và tổng số tiền phải trả. Không nên chỉ nhìn vào số tiền nhận ban đầu.

## Các bước đăng ký
Chuẩn bị giấy tờ định danh, đọc điều khoản, xác nhận thông tin và chỉ tiếp tục khi hiểu rõ lịch trả nợ. Xem thêm hướng dẫn quản lý khoản vay trên momo.vn.

## Câu hỏi thường gặp
Vay nhanh có được duyệt ngay không? Thời gian phê duyệt phụ thuộc hồ sơ và chính sách của đối tác.

[Nguồn: Ngân hàng Nhà nước Việt Nam, tài liệu giáo dục tài chính. Rà soát 21/06/2026]

Nội dung chỉ nhằm cung cấp thông tin, không phải tư vấn tài chính cá nhân.`,
    signals: {indexable:true,schema:true,og:true,alt:true,internal:true,cta:true,sources:true,author:true,reviewer:true,disclaimer:true,updated:true},
    cwv: {state:'pass', evidence:'Lab: LCP 2.1s · TBT 120ms · CLS 0.04'}
  },
  optimize: {
    pageType: 'Blog Article', riskProfile: 'ymyl', canonical: 'https://www.momo.vn/blog/vay-nhanh-an-toan', primaryKeyword: 'vay nhanh',
    metaTitle: 'Cách đăng ký khoản vay trên MoMo an toàn 2026',
    metaDescription: 'Hướng dẫn đăng ký khoản vay và những điều cần lưu ý.',
    h1: 'Vay nhanh trên MoMo cần điều kiện gì?',
    contentBody: `Vay nhanh trên MoMo giúp người dùng tiếp cận khoản vay trực tuyến từ đối tác tài chính.

## Điều kiện đăng ký
Người dùng cần có giấy tờ định danh hợp lệ và đáp ứng chính sách của đơn vị cung cấp khoản vay.

## Quy trình thực hiện
Đăng nhập MoMo, xem đề xuất, đọc điều khoản và gửi yêu cầu. Kết quả phụ thuộc quá trình thẩm định.

## Câu hỏi thường gặp
Tôi có được duyệt ngay không? Mỗi hồ sơ có thời gian xử lý khác nhau.

Nội dung mang tính tham khảo, không phải tư vấn tài chính.`,
    signals: {indexable:true,schema:true,og:false,alt:false,internal:true,cta:true,sources:false,author:true,reviewer:true,disclaimer:true,updated:true},
    cwv: null
  },
  blocked: {
    pageType: 'Blog Article', riskProfile: 'ymyl', canonical: 'https://www.momo.vn/blog/draft-article', primaryKeyword: '',
    metaTitle: 'Bài viết mới', metaDescription: 'Nội dung đang được tạo.', h1: 'Thông tin bạn cần biết',
    contentBody: `Nội dung được tạo tự động và chưa qua rà soát.

## Thông tin chung
Vui lòng đọc thêm trước khi quyết định.`,
    signals: {indexable:false,schema:false,og:false,alt:false,internal:false,cta:false,sources:false,author:false,reviewer:false,disclaimer:false,updated:false},
    cwv: {state:'fail', evidence:'Lab: LCP 4.8s · TBT 780ms · CLS 0.28'}
  }
};

const BLOCKS = [
  {id:'technical', label:'Technical SEO', max:25, icon:'T', className:'tech'},
  {id:'content', label:'Content & On-page', max:50, icon:'C', className:'content'},
  {id:'geo', label:'GEO & Trust', max:25, icon:'G', className:'geo'}
];

const fields = ['pageType','riskProfile','canonical','primaryKeyword','metaTitle','metaDescription','h1','contentBody'];
const signals = ['indexable','schema','og','alt','internal','cta','sources','author','reviewer','disclaimer','updated'];
const el = id => document.getElementById(id);
let currentScenario = 'optimize';
let cwvState = null;
let scoreTimer = null;

function normalize(value='') {
  return value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d').trim();
}
function escapeHtml(value='') {
  return String(value).replace(/[&<>'"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));
}
function countWords(value='') { return value.trim() ? value.trim().split(/\s+/).length : 0; }
function countHeadings(value='') { return (value.match(/^#{2,3}\s+/gm)||[]).length; }
function stateIcon(state) { return {pass:'✓',fail:'×',review:'!',pending:'…'}[state] || '·'; }

function loadScenario(name) {
  currentScenario = name;
  const data = SCENARIOS[name];
  fields.forEach(id => { el(id).value = data[id]; });
  signals.forEach(id => { el(id).checked = Boolean(data.signals[id]); });
  cwvState = data.cwv ? {...data.cwv} : null;
  document.querySelectorAll('[data-scenario]').forEach(button => button.classList.toggle('active', button.dataset.scenario === name));
  markSaved();
  updateCounters();
  calculateScore();
}

function getRuleSet() {
  const data = Object.fromEntries(fields.map(id => [id, el(id).value]));
  const flags = Object.fromEntries(signals.map(id => [id, el(id).checked]));
  const primary = normalize(data.primaryKeyword);
  const content = data.contentBody;
  const contentNorm = normalize(content);
  const titleNorm = normalize(data.metaTitle);
  const h1Norm = normalize(data.h1);
  const intro = normalize(content.slice(0, 260));
  const headings = countHeadings(content);
  const wordCount = countWords(content);
  const isYmyl = data.riskProfile === 'ymyl';
  const validKeyword = primary.length >= 2 && primary.length <= 50 && /[a-zA-ZÀ-ỹ]/.test(data.primaryKeyword) && !/[^\p{L}\p{N}\s-]/u.test(data.primaryKeyword);
  const canonicalOk = /^https:\/\/www\.momo\.vn\/[a-z0-9\-/]+$/i.test(data.canonical);
  const titleOk = data.metaTitle.length >= 35 && data.metaTitle.length <= 65 && titleNorm.includes(primary);
  const descriptionOk = data.metaDescription.length >= 90 && data.metaDescription.length <= 165;
  const h1Ok = Boolean(primary) && h1Norm.includes(primary);
  const answerFirst = Boolean(primary) && intro.includes(primary) && /tom tat|tra loi nhanh/.test(intro);
  const coveragePass = headings >= 3 && /cau hoi thuong gap/.test(contentNorm);
  const coverageReview = headings >= 2 && wordCount >= 50;
  const encodingOk = !/[�□]/.test(content);
  const ymylTrust = !isYmyl || (flags.reviewer && flags.disclaimer);
  const sourceBacked = flags.sources && /\[nguon:/.test(contentNorm);
  const authorTrust = flags.author && flags.updated && (!isYmyl || flags.reviewer);
  const extractable = /tom tat|tra loi nhanh/.test(contentNorm) && /cau hoi thuong gap/.test(contentNorm);
  const entityContext = Boolean(primary) && contentNorm.includes(primary) && /momo|doi tac|co quan|san pham/.test(contentNorm);
  const schemaConsistency = flags.schema && Boolean(data.h1) && contentNorm.includes(normalize(data.h1).split(' ').slice(0,2).join(' '));
  const cwv = cwvState || {state:'pending', evidence:'Chưa chạy Lab Performance. Draft không có Field INP.'};

  const rule = (id, block, title, points, state, evidence, fix, hard=false) => ({id,block,title,points,state,evidence,fix,hard,earned:state==='pass'?points:state==='review'?Math.ceil(points/2):0});
  return [
    rule('indexability','technical','Indexability',6,flags.indexable?'pass':'fail',flags.indexable?'Không phát hiện noindex.':'Phát hiện noindex hoặc trang không cho crawl.','Bỏ noindex trước khi Publish.',true),
    rule('canonical','technical','Canonical URL',4,canonicalOk?'pass':'fail',canonicalOk?data.canonical:'URL canonical chưa hợp lệ hoặc không thuộc www.momo.vn.','Kiểm tra canonical theo URL production.'),
    rule('schema','technical','Structured data',4,flags.schema?'pass':'fail',flags.schema?'JSON-LD hợp lệ và được đánh dấu đúng loại trang.':'Chưa có JSON-LD hợp lệ.','Thêm Schema phù hợp page type.'),
    rule('og','technical','Social metadata',3,flags.og?'pass':'fail',flags.og?'Đủ OG title, description, URL và image.':'Thiếu một hoặc nhiều Open Graph fields.','Bổ sung OG metadata.'),
    rule('alt','technical','Image accessibility',3,flags.alt?'pass':'fail',flags.alt?'Tất cả ảnh nội dung có alt.':'Có ảnh nội dung thiếu alt.','Mô tả mục đích ảnh, để alt rỗng với ảnh trang trí.'),
    rule('cwv','technical','Lab performance',5,cwv.state,cwv.evidence,'Chạy Lab Performance và xử lý LCP, TBT, CLS.'),

    rule('primary','content','Primary Keyword',6,validKeyword?'pass':'fail',validKeyword?`1 keyword: “${data.primaryKeyword}”.`:'Primary Keyword trống hoặc sai định dạng.','Chọn 1 keyword từ Keyword Registry.',true),
    rule('h1','content','H1 mô tả đúng chủ đề',7,h1Ok?'pass':'fail',h1Ok?'Một H1 và có chủ đề chính.':'H1 chưa thể hiện Primary Keyword.','Viết lại H1 theo intent, không nhồi từ khóa.'),
    rule('title','content','Meta Title hữu ích',5,titleOk?'pass':'fail',`${data.metaTitle.length} ký tự${titleNorm.includes(primary)&&primary?' · có chủ đề chính':' · thiếu chủ đề chính'}.`,'Viết title mô tả rõ lợi ích, khoảng 35-65 ký tự.'),
    rule('description','content','Meta Description',4,descriptionOk?'pass':'review',`${data.metaDescription.length} ký tự.`,'Tóm tắt giá trị trang trong khoảng 90-165 ký tự.'),
    rule('answer-first','content','Answer-first introduction',6,answerFirst?'pass':'fail',answerFirst?'Đoạn mở đầu trả lời trực tiếp intent.':'Chưa có Tóm tắt hoặc Trả lời nhanh ở đầu bài.','Thêm câu trả lời trực tiếp, không vòng vo.'),
    rule('coverage','content','Intent coverage',7,coveragePass?'pass':coverageReview?'review':'fail',`${headings} heading · ${wordCount} từ · ${/cau hoi thuong gap/.test(contentNorm)?'có':'chưa có'} FAQ.`,'Bổ sung các câu hỏi phụ cần thiết để user hoàn thành JTBD.'),
    rule('internal','content','Internal links',4,flags.internal?'pass':'fail',flags.internal?'Có internal link liên quan trên momo.vn.':'Chưa có internal link hữu ích.','Link đến hub, sản phẩm hoặc hướng dẫn liên quan.'),
    rule('cta','content','CTA theo JTBD',4,flags.cta?'pass':'fail',flags.cta?'Có CTA phù hợp mục tiêu trang.':'Chưa có CTA rõ ràng.','Bổ sung CTA tiếp theo đúng intent.'),
    rule('quality','content','Editorial quality',3,encodingOk?'pass':'fail',encodingOk?'Không phát hiện lỗi encoding.':'Phát hiện ký tự lỗi encoding.','Sửa ký tự hỏng và chạy lại kiểm tra.'),
    rule('ymyl','content','YMYL trust gate',4,ymylTrust?'pass':'fail',!isYmyl?'Không áp dụng YMYL.':ymylTrust?'Có reviewer và disclaimer.':'Thiếu reviewer hoặc disclaimer cho nội dung tài chính.','Gán reviewer chuyên môn và disclaimer.',isYmyl),

    rule('sources','geo','Source-backed claims',7,sourceBacked?'pass':'fail',sourceBacked?'Claim quan trọng có nguồn trong nội dung.':'Chưa thấy nguồn gắn với claim quan trọng.','Thêm nguồn có thẩm quyền, không thêm số liệu chỉ để tăng điểm.'),
    rule('author','geo','Author, reviewer, freshness',5,authorTrust?'pass':'review',authorTrust?'Có tác giả, reviewer và ngày cập nhật.':'Thiếu một tín hiệu trách nhiệm nội dung.','Bổ sung byline, reviewer và dateModified.'),
    rule('extractable','geo','Extractable answers',5,extractable?'pass':'fail',extractable?'Có Tóm tắt và FAQ dễ trích xuất.':'Thiếu answer block hoặc FAQ.','Tạo các answer block ngắn, độc lập về ngữ nghĩa.'),
    rule('entity','geo','Entity context',4,entityContext?'pass':'review',entityContext?'Chủ đề được đặt trong context MoMo và đối tác.':'Entity hoặc mối quan hệ chưa rõ.','Nêu rõ entity, vai trò và mối quan hệ.'),
    rule('schema-match','geo','Schema-content consistency',4,schemaConsistency?'pass':'fail',schemaConsistency?'Schema khớp nội dung hiển thị.':'Schema chưa khớp nội dung chính.','Đồng bộ headline, author, date và entity giữa HTML với Schema.')
  ];
}

function calculateScore() {
  const rules = getRuleSet();
  const total = rules.reduce((sum, item) => sum + item.earned, 0);
  const hardFails = rules.filter(item => item.hard && item.state === 'fail');
  const fails = rules.filter(item => item.state === 'fail' || item.state === 'review');
  const pending = rules.filter(item => item.state === 'pending');
  const passed = rules.filter(item => item.state === 'pass');
  const blocked = hardFails.length > 0 || total < 60;
  const status = blocked ? 'blocked' : total >= 80 ? 'pass' : 'warning';

  el('totalScore').textContent = total;
  el('ringScore').textContent = total;
  el('scoreRing').style.setProperty('--score', total);
  el('scoreRing').style.setProperty('--ring', status==='pass'?'#079455':status==='warning'?'#f79009':'#d92d20');
  el('scoreBar').style.width = `${total}%`;
  el('scoreBar').style.background = status==='pass'?'#079455':status==='warning'?'#f79009':'#d92d20';
  el('statusBadge').className = `status-badge ${status}`;
  el('statusBadge').textContent = status==='pass'?'PASS · Sẵn sàng':status==='warning'?'WARNING · Cần tối ưu':'BLOCKED · Chưa thể Publish';
  el('passCount').textContent = passed.length;
  el('failCount').textContent = fails.length;
  el('pendingCount').textContent = pending.length;
  el('lastRun').textContent = `Auto-score · ${new Date().toLocaleTimeString('vi-VN',{hour:'2-digit',minute:'2-digit'})}`;
  el('gateAlert').className = `gate-alert${blocked?' show':''}`;
  el('gateAlert').textContent = hardFails.length ? `Bị chặn bởi ${hardFails.length} Hard Gate: ${hardFails.map(item=>item.title).join(', ')}.` : total<60 ? 'Bị chặn: Tổng điểm dưới 60.' : '';
  el('publishBtn').disabled = blocked;
  el('publishBtn').textContent = blocked ? 'Publish bị chặn' : status==='warning' ? 'Publish · Cần tối ưu' : 'Publish';
  el('publishHint').textContent = blocked ? 'Sửa Hard Gate hoặc đạt tối thiểu 60 điểm.' : 'Backend sẽ chạy lại Hard Gate khi Publish.';
  renderBlocks(rules);
  renderPriorities(rules);
}

function renderBlocks(rules) {
  const previouslyOpen = new Set([...document.querySelectorAll('.score-block.open')].map(item => item.dataset.block));
  el('blockList').innerHTML = BLOCKS.map((block,index) => {
    const blockRules = rules.filter(rule => rule.block === block.id);
    const earned = blockRules.reduce((sum,rule) => sum + rule.earned,0);
    const issueCount = blockRules.filter(rule => rule.state==='fail'||rule.state==='review').length;
    const isOpen = previouslyOpen.size ? previouslyOpen.has(block.id) : index===1;
    return `<section class="score-block${isOpen?' open':''}" data-block="${block.id}"><button class="block-toggle" type="button" aria-expanded="${isOpen}"><span class="block-icon ${block.className}">${block.icon}</span><span class="block-name"><strong>${block.label}</strong><small>${issueCount?`${issueCount} tiêu chí cần xử lý`:'Không có lỗi'}</small></span><span class="block-score">${earned}/${block.max}</span><span class="caret">›</span></button><div class="rule-list">${blockRules.map(rule=>`<div class="rule-row"><span class="rule-state ${rule.state}">${stateIcon(rule.state)}</span><span class="rule-copy"><strong>${rule.title}${rule.hard?'<i class="hard-tag">Hard Gate</i>':''}</strong><small>${escapeHtml(rule.evidence)}</small></span><span class="rule-points">${rule.earned}/${rule.points}</span></div>`).join('')}</div></section>`;
  }).join('');
}

function renderPriorities(rules) {
  const priorities = rules.filter(rule => rule.state==='fail'||rule.state==='review'||rule.state==='pending').sort((a,b) => Number(b.hard)-Number(a.hard) || b.points-a.points).slice(0,4);
  el('priorityCount').textContent = `${priorities.length} việc`;
  el('priorityList').innerHTML = priorities.length ? priorities.map((rule,index)=>`<div class="priority-item"><span class="priority-rank">${index+1}</span><div><strong>${rule.hard?'Hard Gate · ':''}${rule.title}</strong><p>${escapeHtml(rule.fix)}</p></div></div>`).join('') : '<div class="priority-empty">✓ Không còn lỗi ưu tiên</div>';
}

function updateCounters() {
  el('keywordCount').textContent = `${el('primaryKeyword').value.length}/50`;
  el('titleCount').textContent = `${el('metaTitle').value.length}/80`;
  el('descriptionCount').textContent = `${el('metaDescription').value.length}/180`;
  el('wordStat').textContent = `${countWords(el('contentBody').value)} từ · ${countHeadings(el('contentBody').value)} heading`;
}
function markDirty() { el('saveState').classList.add('dirty'); el('saveState').lastChild.textContent = 'Có thay đổi chưa lưu'; }
function markSaved() { el('saveState').classList.remove('dirty'); el('saveState').lastChild.textContent = 'Đã lưu bản nháp'; }
function queueScore() { clearTimeout(scoreTimer); updateCounters(); markDirty(); scoreTimer=setTimeout(calculateScore,250); }
function showToast(message) { el('toast').textContent=message; el('toast').classList.add('show'); setTimeout(()=>el('toast').classList.remove('show'),2200); }

document.querySelectorAll('[data-scenario]').forEach(button => button.addEventListener('click',()=>loadScenario(button.dataset.scenario)));
fields.forEach(id => el(id).addEventListener(id==='pageType'||id==='riskProfile'?'change':'input',queueScore));
signals.forEach(id => el(id).addEventListener('change',queueScore));
el('blockList').addEventListener('click',event=>{const button=event.target.closest('.block-toggle');if(!button)return;const block=button.closest('.score-block');block.classList.toggle('open');button.setAttribute('aria-expanded',block.classList.contains('open'))});
[el('saveBtn'),el('bottomSaveBtn')].forEach(button=>button.addEventListener('click',()=>{markSaved();showToast('Đã lưu bản nháp và snapshot điểm hiện tại.')}));
el('cwvBtn').addEventListener('click',()=>{const button=el('cwvBtn');button.disabled=true;button.classList.add('running');button.textContent='Đang chạy Lighthouse Lab...';setTimeout(()=>{cwvState=currentScenario==='blocked'?{state:'fail',evidence:'Lab: LCP 4.8s · TBT 780ms · CLS 0.28'}:{state:'pass',evidence:'Lab: LCP 2.2s · TBT 140ms · CLS 0.05. INP cần Field/RUM.'};button.disabled=false;button.classList.remove('running');button.textContent='Chạy lại Lab Performance';calculateScore();showToast('Đã cập nhật Lab Performance.');},850)});
el('publishBtn').addEventListener('click',()=>{if(el('publishBtn').disabled)return;showToast(el('statusBadge').classList.contains('warning')?'Được phép Publish với cảnh báo cần tối ưu.':'Đã qua Governance Gate, sẵn sàng Publish.');});

loadScenario('optimize');
