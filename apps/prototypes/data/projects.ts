import type { Project, ProjectContext, MerchantEntity } from './types';
import { MERCHANT_ENTITIES } from './merchants';

function merchantInventory(m: MerchantEntity){ return m.primary.vol + m.secondaries.reduce((s,k)=>s+k.vol,0); }

export const PROJECTS: Project[] = [
  {
    id:'phat-nguoi', name:'Phạt Nguội', division:'VTTI', pillar:'P3', pillarName:'Dịch vụ Công & Tiện ích',
    priority:'P0', microsite:'momo.vn/phat-nguoi', vol:1500000, sov:null, targetSov:40,
    clusters:[
      { id:'ph-t1a', name:'Kiến thức phạt nguội', funnel:'tofu', vol:245000, keywords:[
        {kw:'phạt nguội là gì', vol:245000, intent:'info', status:'published', rank:null, isPrimary:true, secondaries:[
          {kw:'phạt nguội nghĩa là gì', vol:8500},
          {kw:'phạt nguội tiếng anh là gì', vol:1200},
          {kw:'phạt nguội khác phạt nóng thế nào', vol:6400},
          {kw:'phạt nguội có bị giam xe không', vol:14200},
        ]},
      ]},
      { id:'ph-t1b', name:'Kiến thức phạt nguội', funnel:'tofu', vol:380000, keywords:[
        {kw:'cách tra cứu phạt nguội', vol:380000, intent:'info', status:'published', rank:3.8, isPrimary:true, secondaries:[
          {kw:'hướng dẫn tra cứu phạt nguội', vol:22000},
          {kw:'tra cứu phạt nguội bằng số CMND', vol:5400},
          {kw:'tra cứu phạt nguội qua website', vol:11500},
          {kw:'làm sao biết mình bị phạt nguội', vol:18000},
        ]},
      ]},
      { id:'ph-t1c', name:'Kiến thức phạt nguội', funnel:'tofu', vol:265000, keywords:[
        {kw:'phạt nguội bao lâu cập nhật', vol:265000, intent:'info', status:'published', rank:null, isPrimary:true, secondaries:[
          {kw:'bao lâu có thông báo phạt nguội', vol:9200},
          {kw:'phạt nguội cập nhật mất bao lâu', vol:4500},
          {kw:'sau bao lâu thì biết bị phạt nguội', vol:6800},
        ]},
      ]},
      { id:'ph-m1a', name:'So sánh cách tra cứu', funnel:'mofu', vol:135000, keywords:[
        {kw:'tra phạt nguội online vs trực tiếp', vol:135000, intent:'comm', status:'published', rank:5.1, isPrimary:true, secondaries:[
          {kw:'tra phạt nguội ở đâu nhanh nhất', vol:12000},
          {kw:'có nên tra phạt nguội online không', vol:4200},
          {kw:'so sánh app tra phạt nguội và CSGT', vol:2800},
        ]},
      ]},
      { id:'ph-m1b', name:'So sánh cách tra cứu', funnel:'mofu', vol:175000, keywords:[
        {kw:'app tra cứu phạt nguội uy tín', vol:175000, intent:'comm', status:'published', rank:null, isPrimary:true, secondaries:[
          {kw:'app tra cứu phạt nguội', vol:35000},
          {kw:'ứng dụng tra phạt nguội', vol:8400},
          {kw:'app tra phạt nguội', vol:18500},
          {kw:'app tra cứu phạt nguội miễn phí', vol:9800},
          {kw:'app tra phạt nguội tốt nhất', vol:5600},
        ]},
      ]},
      { id:'ph-b1a', name:'Tra cứu phạt nguội ngay', funnel:'bofu', vol:185000, keywords:[
        {kw:'tra phạt nguội MoMo', vol:185000, intent:'trans', status:'published', rank:2.4, isPrimary:true, secondaries:[
          {kw:'tra phạt nguội bằng MoMo', vol:8800},
          {kw:'kiểm tra phạt nguội trên MoMo', vol:6200},
          {kw:'MoMo có tra phạt nguội không', vol:4400},
          {kw:'hướng dẫn tra phạt nguội qua MoMo', vol:3200},
        ]},
      ]},
      { id:'ph-b1b', name:'Tra cứu phạt nguội ngay', funnel:'bofu', vol:115000, keywords:[
        {kw:'kiểm tra phạt nguội biển số xe', vol:115000, intent:'trans', status:'published', rank:7.2, isPrimary:true, secondaries:[
          {kw:'tra phạt nguội theo biển số', vol:24000},
          {kw:'kiểm tra phạt nguội xe máy', vol:18500},
          {kw:'kiểm tra phạt nguội ô tô', vol:15600},
          {kw:'tra phạt nguội biển số xe máy', vol:9800},
        ]},
      ]},
    ]
  },
  {
    id:'vay-nhanh', name:'Vay Nhanh', division:'FS', pillar:'P1', pillarName:'Tài chính & Tín dụng',
    priority:'CAO', microsite:'momo.vn/vay-nhanh', vol:4375800, sov:6, targetSov:40,
    clusters:[
      { id:'vn-t1', name:'Kiến thức vay cơ bản', funnel:'tofu', vol:245000, keywords:[
        {kw:'vay tiền online là gì',           vol:22100,  intent:'info', status:'published', rank:null, isPrimary:true},
        {kw:'vay tín chấp là gì',              vol:18400,  intent:'info', status:'published', rank:null, isPrimary:false},
        {kw:'lãi suất vay tiêu dùng 2026',     vol:76000,  intent:'info', status:'outline',  rank:null, isPrimary:false},
        {kw:'cách tính lãi vay giảm dần',      vol:52300,  intent:'info', status:'none',      rank:null, isPrimary:false},
        {kw:'vay online có an toàn không',      vol:76200,  intent:'info', status:'published', rank:null, isPrimary:false},
      ]},
      { id:'vn-t2', name:'So sánh nơi vay', funnel:'tofu', vol:310000, keywords:[
        {kw:'app vay tiền uy tín 2026',        vol:124000, intent:'comm', status:'published', rank:6.1,  isPrimary:true},
        {kw:'vay tiền ngân hàng hay app',       vol:56000,  intent:'comm', status:'outline-review',   rank:null, isPrimary:false},
        {kw:'vay nhanh lãi suất thấp nhất',    vol:130000, intent:'comm', status:'published', rank:4.8,  isPrimary:false},
      ]},
      { id:'vn-m1', name:'Điều kiện & hồ sơ vay', funnel:'mofu', vol:380000, keywords:[
        {kw:'điều kiện vay nhanh MoMo',         vol:48000,  intent:'comm', status:'outline-review',  rank:null, isPrimary:true},
        {kw:'vay MoMo cần giấy tờ gì',          vol:243000, intent:'comm', status:'none',     rank:null, isPrimary:false},
        {kw:'hồ sơ vay tiêu dùng cần gì',       vol:89000,  intent:'comm', status:'outline', rank:null, isPrimary:false},
      ]},
      { id:'vn-m2', name:'Tính toán & mô phỏng vay', funnel:'mofu', vol:280000, keywords:[
        {kw:'tính lãi vay 10 triệu 12 tháng',          vol:67000,  intent:'comm', status:'none', rank:null, isPrimary:true},
        {kw:'vay 20 triệu trả bao nhiêu mỗi tháng',    vol:213000, intent:'comm', status:'none', rank:null, isPrimary:false},
      ]},
      { id:'vn-b1', name:'Vay ngay qua MoMo', funnel:'bofu', vol:565200, keywords:[
        {kw:'vay nhanh MoMo',               vol:320000, intent:'trans', status:'published', rank:3.2,  isPrimary:true},
        {kw:'đăng ký vay tiền MoMo',        vol:245200, intent:'trans', status:'published', rank:2.1,  isPrimary:false},
      ]},
    ]
  },
  {
    id:'bhyt', name:'BHYT', division:'FS', pillar:'P2', pillarName:'Bảo hiểm Công nghệ',
    priority:'CAO', microsite:'momo.vn/bao-hiem-y-te', vol:1415740, sov:0, targetSov:40,
    clusters:[
      { id:'bh-t1', name:'Kiến thức BHYT cơ bản', funnel:'tofu', vol:780000, keywords:[
        {kw:'bảo hiểm y tế là gì',              vol:145000, intent:'info', status:'published', rank:null, isPrimary:true},
        {kw:'quyền lợi BHYT 2026',              vol:320000, intent:'info', status:'outline-review',   rank:null, isPrimary:false},
        {kw:'mức đóng BHYT tự nguyện',          vol:315000, intent:'info', status:'outline',  rank:null, isPrimary:false},
      ]},
      { id:'bh-m1', name:'So sánh & nơi mua BHYT', funnel:'mofu', vol:430000, keywords:[
        {kw:'mua BHYT tự nguyện ở đâu',         vol:187000, intent:'comm', status:'none',      rank:null, isPrimary:true},
        {kw:'BHYT tự nguyện MoMo có tốt không', vol:243000, intent:'comm', status:'none',      rank:null, isPrimary:false},
      ]},
      { id:'bh-b1', name:'Đăng ký BHYT qua MoMo', funnel:'bofu', vol:205740, keywords:[
        {kw:'mua BHYT qua MoMo',                 vol:120000, intent:'trans', status:'none', rank:null, isPrimary:true},
        {kw:'gia hạn BHYT tự nguyện online',     vol:85740,  intent:'trans', status:'none', rank:null, isPrimary:false},
      ]},
    ]
  },
  {
    id:'cic-score', name:'CIC Score', division:'FS', pillar:'P1', pillarName:'Tài chính & Tín dụng',
    priority:'CAO', microsite:'momo.vn/diem-tin-dung', vol:96790, sov:0, targetSov:40,
    clusters:[
      { id:'cic-t1', name:'Kiến thức điểm tín dụng', funnel:'tofu', vol:52000, keywords:[
        {kw:'điểm tín dụng CIC là gì',             vol:18400, intent:'info', status:'published', rank:12.4, isPrimary:true},
        {kw:'điểm tín dụng ảnh hưởng gì',          vol:14200, intent:'info', status:'outline',  rank:null, isPrimary:false},
        {kw:'cải thiện điểm CIC như thế nào',       vol:19400, intent:'info', status:'none',      rank:24.2, isPrimary:false},
      ]},
      { id:'cic-m1', name:'Tra cứu & kiểm tra CIC', funnel:'mofu', vol:28000, keywords:[
        {kw:'tra cứu điểm tín dụng miễn phí',    vol:16400, intent:'comm', status:'none', rank:31.8, isPrimary:true},
        {kw:'xem điểm CIC trên MoMo',            vol:11600, intent:'comm', status:'none', rank:8.2,  isPrimary:false},
      ]},
      { id:'cic-b1', name:'Kiểm tra điểm CIC ngay', funnel:'bofu', vol:16790, keywords:[
        {kw:'kiểm tra điểm tín dụng MoMo',       vol:16790, intent:'trans', status:'none', rank:18.6, isPrimary:true},
      ]},
    ]
  },
  {
    id:'vi-tra-sau', name:'Ví Trả Sau (BNPL)', division:'FS', pillar:'P1', pillarName:'Tài chính & Tín dụng',
    priority:'LEADER', microsite:'momo.vn/vi-tra-sau', vol:135290, sov:54, targetSov:40,
    clusters:[
      { id:'vts-t1', name:'Kiến thức BNPL', funnel:'tofu', vol:68000, keywords:[
        {kw:'ví trả sau là gì',                        vol:28400, intent:'info', status:'published', rank:null, isPrimary:true},
        {kw:'mua trước trả sau hoạt động thế nào',     vol:39600, intent:'info', status:'published', rank:3.4,  isPrimary:false},
      ]},
      { id:'vts-m1', name:'So sánh BNPL thị trường', funnel:'mofu', vol:42000, keywords:[
        {kw:'MoMo ví trả sau vs Kredivo',   vol:14000, intent:'comm', status:'published', rank:1.8, isPrimary:true},
        {kw:'BNPL nào uy tín nhất VN 2026', vol:28000, intent:'comm', status:'published', rank:4.2, isPrimary:false},
      ]},
      { id:'vts-b1', name:'Kích hoạt Ví Trả Sau', funnel:'bofu', vol:25290, keywords:[
        {kw:'kích hoạt ví trả sau MoMo',         vol:17890, intent:'trans', status:'published', rank:2.8, isPrimary:true},
        {kw:'đăng ký mua trước trả sau MoMo',    vol:7400,  intent:'trans', status:'published', rank:null, isPrimary:false},
      ]},
    ]
  },
  {
    id:'bh-xe-may', name:'BH Xe Máy', division:'FS', pillar:'P2', pillarName:'Bảo hiểm Công nghệ',
    priority:'CAO', microsite:'momo.vn/bao-hiem-xe-may', vol:58810, sov:38, targetSov:40,
    clusters:[
      { id:'bxm-t1', name:'Kiến thức BH xe máy', funnel:'tofu', vol:31000, keywords:[
        {kw:'bảo hiểm xe máy bắt buộc là gì', vol:14200, intent:'info', status:'published', rank:null, isPrimary:true},
        {kw:'phí bảo hiểm xe máy 2026',        vol:16800, intent:'info', status:'published', rank:null, isPrimary:false},
      ]},
      { id:'bxm-m1', name:'So sánh gói BH xe máy', funnel:'mofu', vol:12000, keywords:[
        {kw:'bảo hiểm xe máy MoMo vs Bảo Việt', vol:12000, intent:'comm', status:'outline', rank:null, isPrimary:true},
      ]},
      { id:'bxm-b1', name:'Mua BH xe máy ngay', funnel:'bofu', vol:27810, keywords:[
        {kw:'mua bảo hiểm xe máy online',       vol:18400, intent:'trans', status:'published', rank:null, isPrimary:true},
        {kw:'gia hạn bảo hiểm xe máy MoMo',     vol:9410,  intent:'trans', status:'published', rank:null, isPrimary:false},
      ]},
    ]
  },
  {
    id:'bh-o-to', name:'BH Ô Tô', division:'FS', pillar:'P2', pillarName:'Bảo hiểm Công nghệ',
    priority:'CAO', microsite:'momo.vn/bao-hiem-o-to', vol:74000, sov:0, targetSov:40,
    clusters:[
      { id:'bot-t1', name:'Kiến thức BH ô tô', funnel:'tofu', vol:44000, keywords:[
        {kw:'bảo hiểm ô tô vật chất là gì',    vol:22000, intent:'info', status:'none',     rank:28.4, isPrimary:true},
        {kw:'phí bảo hiểm ô tô bắt buộc 2026', vol:22000, intent:'info', status:'outline', rank:34.6, isPrimary:false},
      ]},
      { id:'bot-m1', name:'So sánh & tính phí BH ô tô', funnel:'mofu', vol:30000, keywords:[
        {kw:'so sánh BH ô tô MoMo vs Bảo Việt', vol:12000, intent:'comm', status:'none', rank:42.1, isPrimary:true},
        {kw:'tính phí BH ô tô online',           vol:18000, intent:'comm', status:'none', rank:48.8, isPrimary:false},
      ]},
    ]
  },
  {
    id:'bhxh', name:'BHXH', division:'FS', pillar:'P2', pillarName:'Bảo hiểm Công nghệ',
    priority:'COMING', microsite:'momo.vn/bao-hiem-xa-hoi', vol:938090, sov:null, targetSov:40,
    clusters:[]
  },
  {
    id:'cic-fs', name:'Điểm tín dụng (FS)', division:'FS', pillar:'P1', pillarName:'Tài chính & Tín dụng',
    priority:'CAO', microsite:'momo.vn/diem-tin-dung', vol:679670, sov:null, targetSov:35,
    clusters:[
      { id:'cic-c1', theme:'Vay nhanh', name:'Vay nhanh online', funnel:'bofu', vol:439200, keywords:[
        {kw:'vay nhanh', vol:135000, intent:'trans', status:'none', rank:null, secondaries:[
          {kw:'vay tiền online', vol:90500},
          {kw:'vay online', vol:49500},
          {kw:'vay tiền', vol:49500},
          {kw:'vay tiền nhanh', vol:40500},
          {kw:'vay tiền online chuyển khoản ngay', vol:33100},
          {kw:'vay app', vol:27100},
          {kw:'tài chính', vol:12100},
          {kw:'thông tư 11', vol:1900},
        ]},
      ]},
      { id:'cic-c2', theme:'Vay nhanh', name:'Mở thẻ ngân hàng', funnel:'mofu', vol:3780, keywords:[
        {kw:'bao nhiêu tuổi được mở tài khoản ngân hàng', vol:2900, intent:'comm', status:'none', rank:null, secondaries:[
          {kw:'bao nhiêu tuổi được làm thẻ ngân hàng', vol:880},
        ]},
      ]},
      { id:'cic-c3', theme:'Nợ xấu', name:'Tìm hiểu khái niệm/ quy trình nợ xấu', funnel:'mofu', vol:44010, keywords:[
        {kw:'vỡ nợ', vol:5400, intent:'comm', status:'none', rank:null, secondaries:[
          {kw:'nợ xấu là gì', vol:4400},
          {kw:'nợ quá hạn 10 ngày', vol:4400},
          {kw:'quy trình thu hồi nợ tín chấp', vol:3600},
          {kw:'nợ quá hạn 1 ngày có sao không', vol:3600},
          {kw:'dư nợ là gì', vol:1900},
          {kw:'nợ nhóm 2', vol:1600},
          {kw:'nợ nhóm 2 là gì', vol:1300},
          {kw:'nợ xấu nhóm 2', vol:880},
          {kw:'nợ xấu nhóm 3', vol:880},
          {kw:'nợ xấu nhóm 5', vol:720},
          {kw:'nợ chú ý là gì', vol:720},
          {kw:'các nhóm nợ', vol:720},
          {kw:'nợ nhóm 3', vol:720},
          {kw:'nhóm nợ', vol:590},
          {kw:'các nhóm nợ xấu', vol:590},
          {kw:'nợ ngân hàng bao nhiêu thì bị khởi kiện', vol:590},
          {kw:'nợ quá hạn bao lâu thì bị khởi kiện', vol:590},
          {kw:'nợ nhóm 1', vol:480},
          {kw:'nợ nhóm 5', vol:480},
          {kw:'nợ xấu ngân hàng', vol:480},
          {kw:'nợ chú ý', vol:390},
          {kw:'phân loại nợ', vol:390},
          {kw:'nợ xấu nhóm 1', vol:390},
          {kw:'nợ nhóm 2 bao nhiêu ngày', vol:320},
          {kw:'nợ nhóm 2 bao lâu được xoá', vol:320},
          {kw:'nợ nhóm 2 bao lâu được xóa', vol:320},
          {kw:'nợ nhóm 3 bao nhiêu ngày', vol:320},
          {kw:'nhóm nợ xấu', vol:320},
          {kw:'nợ nhóm 4', vol:320},
          {kw:'tỷ lệ nợ quá hạn bao nhiêu là an toàn', vol:260},
          {kw:'tổng dư nợ là gì', vol:260},
          {kw:'dư nợ', vol:260},
          {kw:'nợ bao nhiêu tiền thì bị khởi kiện', vol:260},
          {kw:'nợ nhóm 1 là gì', vol:260},
          {kw:'nợ quá hạn', vol:260},
          {kw:'nợ quá hạn 30 ngày', vol:260},
          {kw:'vỡ nợ là gì', vol:260},
          {kw:'dư nợ thẻ tín dụng là gì', vol:210},
          {kw:'ngân hàng nào có nguy cơ phá sản', vol:210},
          {kw:'danh sách các ngân hàng bị phá sản', vol:210},
          {kw:'nợ cần chú ý', vol:210},
          {kw:'5 nhóm nợ ngân hàng', vol:210},
          {kw:'nợ xấu nhóm 4', vol:210},
          {kw:'nợ quá hạn là gì', vol:210},
          {kw:'dư nợ cho vay là gì', vol:170},
          {kw:'nợ ngoại bảng là gì', vol:170},
          {kw:'nợ cần chú ý là gì', vol:170},
          {kw:'nợ cần chú ý là nhóm mấy', vol:170},
          {kw:'nợ quá hạn là nợ nhóm mấy', vol:170},
          {kw:'tỷ lệ nợ xấu', vol:170},
          {kw:'bể nợ là gì', vol:170},
          {kw:'danh sách các ngân hàng có nguy cơ phá sản', vol:140},
          {kw:'nợ là gì', vol:140},
          {kw:'nợ nhóm 2 là sao', vol:140},
          {kw:'nợ xấu nhóm 2 bao lâu được xoá', vol:140},
          {kw:'nợ dưới tiêu chuẩn', vol:140},
          {kw:'nợ xấu fe', vol:140},
          {kw:'bị nợ xấu ngân hàng phải làm sao', vol:140},
          {kw:'xử lý nợ xấu', vol:140},
          {kw:'các nhóm nợ quá hạn', vol:140},
          {kw:'nợ xấu ngân hàng có sao không', vol:140},
          {kw:'nợ xấu ngân hàng là gì', vol:140},
        ]},
      ]},
      { id:'cic-c4', theme:'Nợ xấu', name:'Vay tiền khi có nợ xấu', funnel:'bofu', vol:37240, keywords:[
        {kw:'nợ xấu vẫn vay tiền online trả góp theo tháng', vol:8100, intent:'trans', status:'none', rank:null, secondaries:[
          {kw:'vay tiền online nợ xấu vẫn vay được', vol:4400},
          {kw:'vay nợ xấu', vol:3600},
          {kw:'vay tiền nợ xấu', vol:3600},
          {kw:'công ty tài chính cho vay nợ xấu', vol:2900},
          {kw:'nợ xấu vay ở đâu', vol:1300},
          {kw:'danh sách ngân hàng cho vay nợ xấu', vol:1300},
          {kw:'vay tiền nợ xấu nhóm 5', vol:1300},
          {kw:'vay hỗ trợ nợ xấu', vol:1300},
          {kw:'mua iphone trả góp', vol:1000},
          {kw:'ngân hàng bắc a vỡ nợ', vol:880},
          {kw:'ngân hàng bắc á vỡ nợ', vol:880},
          {kw:'nợ xấu có vay được không', vol:880},
          {kw:'các ngân hàng cho vay nợ xấu nhóm 5', vol:720},
          {kw:'nhận làm hồ sơ nợ xấu', vol:590},
          {kw:'vay tiền fe credit không trả có sao không', vol:480},
          {kw:'nợ xấu có vay thế chấp được không', vol:390},
          {kw:'làm gì khi bạn mượn tiền không trả', vol:320},
          {kw:'vay tiền không trả có bị đi tù không', vol:320},
          {kw:'nợ xấu vay được ngân hàng nào', vol:320},
          {kw:'nợ xấu vay được ở đâu', vol:320},
          {kw:'cho vay tiền không trả', vol:260},
          {kw:'nợ tiền', vol:260},
          {kw:'ngân hàng nào cho vay nợ xấu nhóm 2', vol:260},
          {kw:'trả góp bao nợ xấu', vol:260},
          {kw:'nợ xấu có mua trả góp được không', vol:260},
          {kw:'nợ chú ý vay được ngân hàng nào', vol:260},
          {kw:'ngân hàng cho vay nợ xấu', vol:260},
          {kw:'nợ xấu có vay được ngân hàng chính sách không', vol:260},
          {kw:'nợ xấu vẫn vay được', vol:260},
        ]},
      ]},
      { id:'cic-c5', theme:'Nợ xấu', name:'Check nợ xấu', funnel:'mofu', vol:26880, keywords:[
        {kw:'kiểm tra nợ xấu', vol:5400, intent:'comm', status:'none', rank:null, secondaries:[
          {kw:'check nợ xấu', vol:2900},
          {kw:'cách kiểm tra nợ xấu', vol:2900},
          {kw:'check nợ xấu', vol:2900},
          {kw:'kiểm tra nợ xấu bằng số điện thoại', vol:2400},
          {kw:'tra cứu nợ xấu', vol:1900},
          {kw:'kiểm tra nợ xấu cá nhân bằng cmnd', vol:1600},
          {kw:'nợ xấu fe bao lâu được xoá', vol:1300},
          {kw:'tra nợ xấu', vol:1000},
          {kw:'nợ xấu dưới 10 triệu bao lâu được xóa', vol:1000},
          {kw:'app kiểm tra nợ xấu', vol:880},
          {kw:'nợ xấu có xóa được không', vol:320},
          {kw:'xóa nợ xấu', vol:320},
          {kw:'cách xóa nợ xấu', vol:320},
          {kw:'nợ xấu bao lâu thì xóa', vol:320},
          {kw:'nợ xấu bao lâu được xoá', vol:260},
          {kw:'nợ xấu nhóm 3 bao lâu được xoá', vol:260},
          {kw:'nợ xấu nhóm 5 bao lâu được xoá', vol:260},
          {kw:'cách xóa nợ xấu ngân hàng', vol:140},
          {kw:'làm sao để xóa nợ xấu', vol:140},
          {kw:'nợ xấu bao lâu thì được xoá', vol:140},
          {kw:'app check nợ xấu', vol:110},
          {kw:'quy định về xóa nợ xấu', vol:50},
          {kw:'xóa nợ xấu ngân hàng', vol:30},
          {kw:'nợ xấu nhóm 1 bao lâu được xoá', vol:30},
        ]},
      ]},
      { id:'cic-c6', theme:'Nợ xấu', name:'Quản lý nợ & giải pháp', funnel:'mofu', vol:9630, keywords:[
        {kw:'kiểm tra nợ xấu bằng cmnd', vol:4400, intent:'comm', status:'none', rank:null, secondaries:[
          {kw:'nợ nần', vol:720},
          {kw:'cách trả nợ 1 tỷ', vol:480},
          {kw:'nợ nhiều quá phải làm sao', vol:480},
          {kw:'cách trả', vol:390},
          {kw:'dư nợ giảm dần', vol:390},
          {kw:'nợ nần chồng chất', vol:390},
          {kw:'cách kiểm tra số tiền đã ứng', vol:320},
          {kw:'cách kiểm tra tiền nợ viettel', vol:320},
          {kw:'cách kiểm tra nợ xấu của mình', vol:210},
          {kw:'cách kiểm tra tiền ứng viettel', vol:210},
          {kw:'kiểm tra tiền ứng viettel', vol:210},
          {kw:'giải nghiệp nợ nần', vol:210},
          {kw:'tôi đã vượt qua nợ nần như thế nào', vol:210},
          {kw:'cuộc sống be tắc vì nợ nần', vol:210},
          {kw:'dư nợ gốc là gì', vol:170},
          {kw:'cách kiểm tra số tiền đã ứng viettel', vol:170},
          {kw:'kiểm tra tiền nợ viettel', vol:140},
        ]},
      ]},
      { id:'cic-c7', theme:'Nợ xấu', name:'Tác hại của nợ xấu', funnel:'tofu', vol:1990, keywords:[
        {kw:'nợ thẻ tín dụng quá hạn', vol:720, intent:'info', status:'none', rank:null, secondaries:[
          {kw:'nợ xấu có mở thẻ tín dụng được không', vol:590},
          {kw:'nợ thẻ tín dụng', vol:260},
          {kw:'nợ xấu có làm thẻ tín dụng được không', vol:170},
          {kw:'nợ thẻ tín dụng không trả', vol:140},
          {kw:'nợ thẻ tín dụng có sao không', vol:110},
        ]},
      ]},
      { id:'cic-c8', theme:'Brand', name:'CIC', funnel:'tofu', vol:86100, keywords:[
        {kw:'check cic', vol:12100, intent:'info', status:'none', rank:null, secondaries:[
          {kw:'cic là gì', vol:9900},
          {kw:'cic org vn dang nhap', vol:8100},
          {kw:'cic đăng nhập', vol:8100},
          {kw:'cic org vn', vol:5400},
          {kw:'tra cuu cic', vol:3600},
          {kw:'kiểm tra cic', vol:3600},
          {kw:'tra cứu cic cá nhân', vol:3600},
          {kw:'tra cứu cic miễn phí', vol:3600},
          {kw:'tra cic', vol:2900},
          {kw:'check cic cá nhân', vol:2400},
          {kw:'cách check cic', vol:2400},
          {kw:'cic gov', vol:1900},
          {kw:'cic credit connect', vol:1900},
          {kw:'check cic online', vol:1600},
          {kw:'cic org', vol:1600},
          {kw:'tra cứu cic cá nhân online', vol:1300},
          {kw:'cic tra cứu', vol:1300},
          {kw:'dang nhap cic', vol:1300},
          {kw:'cic nợ xấu', vol:1300},
          {kw:'cách kiểm tra cic', vol:1000},
          {kw:'kiểm tra cic cá nhân', vol:880},
          {kw:'cic org vn dang ky', vol:880},
          {kw:'kiểm tra cic cá nhân online', vol:880},
          {kw:'cic tín dụng', vol:880},
          {kw:'check cic là gì', vol:590},
          {kw:'dịch vụ xóa nợ xấu trên cic', vol:590},
          {kw:'cic log in', vol:480},
          {kw:'điểm tín dụng cic', vol:390},
          {kw:'cic vietnam', vol:320},
          {kw:'cách xóa nợ xấu trên cic', vol:170},
          {kw:'cic viet nam', vol:140},
          {kw:'cicb creditinfo', vol:140},
          {kw:'xóa nợ xấu trên cic', vol:140},
          {kw:'cic cập nhật ngày nào', vol:140},
          {kw:'nợ xấu cic bao lâu được xoá', vol:110},
          {kw:'số điện thoại trung tâm cic', vol:110},
          {kw:'cic việt nam', vol:90},
          {kw:'cic website', vol:70},
          {kw:'cách xóa nợ xấu cic', vol:50},
          {kw:'check cic s37', vol:30},
          {kw:'cic sbv', vol:30},
          {kw:'dang ky tai khoan cic', vol:30},
          {kw:'trung tâm cic quốc gia', vol:30},
          {kw:'cic data', vol:30},
        ]},
      ]},
      { id:'cic-c9', theme:'Brand', name:'Điểm tín dụng', funnel:'tofu', vol:5440, keywords:[
        {kw:'điểm tín dụng', vol:880, intent:'info', status:'none', rank:null, secondaries:[
          {kw:'kiểm tra điểm tín dụng', vol:880},
          {kw:'điểm tín dụng là gì', vol:720},
          {kw:'trung tâm thông tin tín dụng quốc gia việt nam', vol:720},
          {kw:'trung tâm thông tin tín dụng quốc gia', vol:480},
          {kw:'check điểm tín dụng', vol:480},
          {kw:'cách kiểm tra điểm tín dụng', vol:320},
          {kw:'điểm tín dụng 600', vol:260},
          {kw:'cách tăng điểm tín dụng', vol:140},
          {kw:'tra điểm tín dụng', vol:140},
          {kw:'cách kiểm tra điểm tín dụng cá nhân', vol:110},
          {kw:'điểm tín dụng bao nhiêu là tốt', vol:90},
          {kw:'kiểm tra thẻ tín dụng', vol:90},
          {kw:'chấm điểm tín dụng', vol:40},
          {kw:'credit score là gì', vol:30},
          {kw:'chấm điểm tín dụng là gì', vol:30},
          {kw:'cham diem tin dung', vol:30},
        ]},
      ]},
      { id:'cic-c10', theme:'Thẻ tín dụng', name:'Thẻ tín dụng/ visa', funnel:'mofu', vol:25400, keywords:[
        {kw:'thẻ visa', vol:6600, intent:'comm', status:'none', rank:null, secondaries:[
          {kw:'mở thẻ tín dụng online', vol:6600},
          {kw:'cvv là gì', vol:4400},
          {kw:'thẻ visa là gì', vol:4400},
          {kw:'cvc là gì', vol:2400},
          {kw:'hạn mức tín dụng là gì', vol:1000},
        ]},
      ]},
    ]
  },
  {
    id:'merchant', name:'Merchant', division:'GPD', pillar:'CONTENT', pillarName:'Merchant Topic Cluster',
    microsite:'momo.vn/merchant', sov:null, targetSov:40, isDistributed:true,
    merchants:MERCHANT_ENTITIES,
    vol:MERCHANT_ENTITIES.reduce((sum,m)=>sum+merchantInventory(m),0),
    clusters:[]
  }
];

/* ─── BUSINESS CONTEXT ──────────────────────────────────────────────────────── */
export const PROJECT_CONTEXT: Record<string, ProjectContext> = {
  'cic-fs': {
    description: 'Hub Điểm tín dụng (FS) - bao phủ toàn bộ search demand quanh điểm tín dụng CIC, nợ xấu, thẻ tín dụng và vay nhanh cho user có nhu cầu hiểu/đánh giá tín dụng cá nhân.',
    valueProp: 'Tra cứu CIC miễn phí trên MoMo, phân tích điểm tín dụng và đề xuất sản phẩm tài chính phù hợp (vay nhanh, thẻ tín dụng) dựa trên hồ sơ tín dụng.',
    audience: 'Người trưởng thành 22-45 tuổi đang quan tâm điểm tín dụng cá nhân, có lịch sử nợ xấu, hoặc cần vay nhanh và mở thẻ tín dụng tại Việt Nam.',
    userProblem: 'User không biết cách tra điểm CIC, không hiểu nợ xấu ảnh hưởng thế nào, và bối rối giữa các kênh vay/thẻ khi có rủi ro tín dụng.',
    growthOutcome: 'Biến search intent về CIC/nợ xấu thành lượt tra cứu điểm tín dụng và xử lý hồ sơ vay/thẻ chất lượng trên MoMo.',
    northStar: 'Qualified CIC lookup + downstream credit application',
  },
  'phat-nguoi': {
    description: 'Dịch vụ tra cứu và thanh toán phạt vi phạm giao thông trực tuyến, kết nối trực tiếp với dữ liệu của Cục CSGT Bộ Công an.',
    valueProp: 'Tra cứu tức thì không cần đến trụ sở CSGT, thanh toán ngay trong app, lịch sử tra cứu và biên lai được lưu tự động.',
    audience: 'Chủ phương tiện giao thông tại Việt Nam, đặc biệt người dùng đô thị thường xuyên di chuyển bằng xe máy/ô tô.',
    userProblem: 'Chủ xe không biết mình có vi phạm, nguồn tra cứu nào đáng tin và cần xử lý tiếp ra sao.',
    growthOutcome: 'Biến search intent tra cứu thành lượt kiểm tra đủ thông tin và hành động xử lý trong MoMo.',
    northStar: 'Qualified lookup to App',
  },
  'vay-nhanh': {
    description: 'Nền tảng kết nối vay vốn tín chấp và tiêu dùng từ các đối tác tài chính uy tín — FE Credit, Home Credit, VPBank và các tổ chức tín dụng được cấp phép.',
    valueProp: 'Phê duyệt trong 5 phút, giải ngân trong ngày, so sánh lãi suất minh bạch từ nhiều tổ chức tín dụng trong một giao diện duy nhất.',
    audience: 'Người trưởng thành 22–45 tuổi có nhu cầu vay tiêu dùng 5–100 triệu, đủ điều kiện tín dụng cơ bản.',
    userProblem: 'Người cần vay khó đánh giá điều kiện, chi phí và mức phù hợp trước khi bắt đầu hồ sơ.',
    growthOutcome: 'Giúp người dùng tự đánh giá và chuyển sang hồ sơ vay có chất lượng cao hơn.',
    northStar: 'Qualified loan application',
  },
  'bhyt': {
    description: 'Mua và gia hạn BHYT tự nguyện trực tuyến, hợp tác với BHXH Việt Nam — hoàn toàn không cần đến bưu điện hay cơ quan BHXH địa phương.',
    valueProp: 'Thủ tục 100% online, nhận thẻ BHYT điện tử ngay sau thanh toán, nhắc gia hạn tự động hàng năm.',
    audience: 'Lao động tự do, freelancer, hộ kinh doanh cá thể chưa tham gia BHYT bắt buộc qua doanh nghiệp (nhóm 28M+ người tại VN).',
    userProblem: 'Người lao động tự do khó hiểu quyền lợi, mức đóng và cách mua hoặc gia hạn BHYT.',
    growthOutcome: 'Chuyển nhu cầu tìm hiểu thành lượt gia hạn hoặc đăng ký BHYT hợp lệ trên MoMo.',
    northStar: 'Qualified BHYT renewal',
  },
  'cic-score': {
    description: 'Tra cứu điểm tín dụng CIC miễn phí và nhận phân tích, tư vấn cải thiện hồ sơ tín dụng cá nhân theo thời gian thực.',
    valueProp: 'Dữ liệu thời gian thực từ CIC, phân tích chi tiết điểm mạnh/yếu, lộ trình cải thiện cụ thể theo từng tháng.',
    audience: 'Người chuẩn bị vay vốn, người bị từ chối vay, hoặc người muốn hiểu và cải thiện hồ sơ tín dụng cá nhân.',
    userProblem: 'Người dùng không biết điểm tín dụng hiện tại ảnh hưởng thế nào đến khả năng vay và cách cải thiện.',
    growthOutcome: 'Biến nhu cầu kiểm tra CIC thành kế hoạch cải thiện và hành động tài chính phù hợp.',
    northStar: 'Credit score check completion',
  },
  'vi-tra-sau': {
    description: 'Dịch vụ Mua trước Trả sau (BNPL) tích hợp sâu vào hệ sinh thái MoMo, sử dụng được tại 50,000+ điểm merchant trực tuyến và ngoại tuyến.',
    valueProp: 'Không lãi suất nếu trả đúng hạn 15 ngày, hạn mức cá nhân hóa lên đến 20 triệu, kích hoạt tức thì không cần hồ sơ giấy.',
    audience: 'Millennials và Gen Z (18–35 tuổi) có thói quen thanh toán số, cần linh hoạt dòng tiền ngắn hạn.',
    userProblem: 'Người dùng cần linh hoạt dòng tiền nhưng chưa rõ điều kiện, hạn mức và chi phí trả sau.',
    growthOutcome: 'Giúp người đủ điều kiện hiểu rõ cam kết và kích hoạt Ví Trả Sau có chủ đích.',
    northStar: 'Qualified BNPL activation',
  },
  'bh-xe-may': {
    description: 'Mua bảo hiểm xe máy bắt buộc (TNDS) và bảo hiểm thân vỏ tự nguyện từ nhiều công ty bảo hiểm hàng đầu trực tiếp trên MoMo.',
    valueProp: 'Gia hạn trong 2 phút, nhận giấy chứng nhận bảo hiểm điện tử hợp lệ ngay lập tức, nhắc gia hạn tự động.',
    audience: 'Chủ xe máy (~35M xe đang lưu hành tại VN), đặc biệt người cần gia hạn bảo hiểm nhanh không cần qua đại lý.',
    userProblem: 'Chủ xe khó phân biệt loại bảo hiểm, quyền lợi và nơi mua chứng nhận hợp lệ nhanh chóng.',
    growthOutcome: 'Chuyển nhu cầu tra cứu và so sánh thành lượt mua hoặc gia hạn bảo hiểm xe máy.',
    northStar: 'Insurance purchase completion',
  },
  'bh-o-to': {
    description: 'Mua và quản lý bảo hiểm ô tô bắt buộc (TNDS) và bảo hiểm vật chất từ các đối tác bảo hiểm uy tín tại Việt Nam.',
    valueProp: 'Tính phí minh bạch, so sánh nhiều gói từ nhiều nhà bảo hiểm, quản lý toàn bộ chứng chỉ bảo hiểm số trên app.',
    audience: 'Chủ ô tô (~5M xe) cần mua mới hoặc gia hạn bảo hiểm hàng năm, tập trung tại các đô thị lớn.',
    userProblem: 'Chủ ô tô khó so sánh phạm vi bảo vệ, phí và điều khoản giữa nhiều gói bảo hiểm.',
    growthOutcome: 'Đưa người dùng từ tìm hiểu sang yêu cầu báo phí và mua gói phù hợp trên MoMo.',
    northStar: 'Qualified quote to purchase',
  },
  'bhxh': {
    description: 'Tra cứu quá trình tham gia BHXH và đóng BHXH tự nguyện qua MoMo, không cần đến cơ quan BHXH địa phương (đang phát triển).',
    valueProp: 'Tiện lợi 100% online, nhắc đóng đúng kỳ, tích hợp trực tiếp với ví MoMo để thanh toán tức thì.',
    audience: 'Lao động tự do, người hoạt động nghề độc lập muốn đảm bảo quyền lợi hưu trí, ốm đau và thai sản.',
    userProblem: 'Người lao động tự do khó hiểu quyền lợi dài hạn, mức đóng và quy trình tham gia BHXH tự nguyện.',
    growthOutcome: 'Giúp người dùng lập kế hoạch đóng và chuyển sang đăng ký hoặc thanh toán đúng kỳ.',
    northStar: 'Qualified BHXH contribution',
  },
  'merchant': {
    description: 'Dự án Content Plan phân tán theo Merchant. Mỗi Merchant tương ứng một Primary Keyword và một bài viết, đi kèm Secondary Keywords hỗ trợ.',
    valueProp: 'Quản lý topic cluster, search volume và tiến độ viết bài tập trung theo từng Merchant.',
    audience: 'Người dùng tìm kiếm thương hiệu, menu, địa điểm, ưu đãi hoặc cách thanh toán tại một Merchant cụ thể.',
    userProblem: 'Các nhu cầu tìm kiếm quanh Merchant chưa được gom thành topic cluster và triển khai thành nội dung có thứ tự ưu tiên.',
    growthOutcome: 'Chuyển search inventory của từng Merchant thành một bài viết hoàn chỉnh, có coverage từ Primary và Secondary Keywords.',
    northStar: 'Published Merchant articles',
  },
};

/* ─── STATUS CONFIG ─────────────────────────────────────────────────────────── */
export const STATUS_CYCLE = ['none','outline','outline-review','draft','published'] as const;
export const STATUS_LABEL: Record<string,string> = {
  none:             '+ Tạo Outline',
  outline:          'Duyệt Outline ›',
  'outline-review': '→ Tạo bài nháp',
  draft:            'Chờ review',
  published:        '✓ Đã xuất bản',
};
export const MERCHANT_STATUS_CYCLE = ['none','outline','outline-review','draft','draft-review','published'] as const;
export const MERCHANT_STATUS_LABEL: Record<string,string> = {
  none:             'Chưa bắt đầu',
  outline:          'Outline',
  'outline-review': 'Outline Review',
  draft:            'Draft',
  'draft-review':   'Draft Review',
  published:        'Published',
};
export const MERCHANT_ACTION_LABEL: Record<string,string> = {
  none:             'Edit',
  outline:          'Duyệt Outline',
  'outline-review': 'Tạo Draft',
  draft:            'Duyệt Draft',
  'draft-review':   'Publish',
  published:        'Đã Xuất Bản',
};

export const CLUSTER_THEME: Record<string,string> = {
  'vn-t1':'Kiến thức vay', 'vn-t2':'So sánh giải pháp vay',
  'vn-m1':'Điều kiện và hồ sơ', 'vn-m2':'Tính toán khoản vay', 'vn-b1':'Vay qua MoMo',
  'bh-t1':'Kiến thức BHYT', 'bh-m1':'Lựa chọn và quyền lợi', 'bh-b1':'Đăng ký và gia hạn',
  'cic-t1':'Kiến thức tín dụng', 'cic-m1':'Tra cứu CIC', 'cic-b1':'Kiểm tra trên MoMo',
  'vts-t1':'Kiến thức BNPL', 'vts-m1':'So sánh BNPL', 'vts-b1':'Kích hoạt Ví Trả Sau',
  'bxm-t1':'Kiến thức bảo hiểm xe máy', 'bxm-m1':'So sánh gói bảo hiểm', 'bxm-b1':'Mua và gia hạn',
  'bot-t1':'Kiến thức bảo hiểm ô tô', 'bot-m1':'So sánh và tính phí',
};
