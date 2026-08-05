export interface WorkflowStep {
  title: string;
  desc: string;
  input: string;
  role: string;
  output: string;
  items: string[];
  proof: string;
}

export const PLG_WORKFLOW_STEPS: WorkflowStep[] = [
  {
    title: "Business Context / Knowledge Base",
    desc: "MoSpark quản lý toàn bộ business context và knowledge base làm Source of Truth cho project.",
    input: "Business objective, compliance note, payment flow, product owner brief.",
    role: "Chuẩn hóa knowledge base để mọi output sau đó bám đúng policy và mục tiêu.",
    output: "Project Source of Truth cho Phạt Nguội.",
    items: [
      "Brief về nhu cầu tra cứu phạt nguội, user intent và flow thanh toán qua MoMo.",
      "Nguồn dữ liệu được phép dùng: CSGT, Cục Đăng kiểm, quy định pháp lý và MoMo payment flow.",
      "Rule guardrail cho content: không tự suy diễn mức phạt, không claim real-time nếu chưa có data.",
    ],
    proof: "Không để GenAI tự suy diễn sai về pháp lý, data source hoặc payment flow.",
  },
  {
    title: "Keyword Research & Mapping",
    desc: "Keyword Research, Market Research và Keyword Mapping được xử lý trong cùng một PLG Project để biến demand thành cấu trúc triển khai.",
    input:
      "Seed topic: phạt nguội xe máy, tra cứu biển số, nộp phạt online, market gap và product priority.",
    role: "Tổng hợp search intent, SERP pattern, pain point, keyword cluster rồi mapping sang URL, page type, component và conversion path.",
    output: "Keyword map có intent, page type, widget, CTA và internal link cho Phạt Nguội.",
    items: [
      "Nhóm nhu cầu: tra cứu, hiểu quy định, biết mức phạt, nộp phạt, lưu biên lai.",
      'Map cluster "tra cứu phạt nguội" vào utility widget có input biển số, result state và app-deeplink.',
      'Map cluster "phạt nguội là gì" vào article, FAQ, answer block và internal link về công cụ tra cứu.',
      'Map cluster "nộp phạt online" vào CTA mở app MoMo, payment instruction và event tracking.',
    ],
    proof:
      "Không tách research khỏi mapping. Mỗi keyword phải có URL, component và hành động tiếp theo.",
  },
  {
    title: "Web Structure",
    desc: "Web Structure được build bằng Vibe Code từ project brief, không bắt đầu bằng trang trắng.",
    input: "Source of Truth, keyword map, UI requirement và widget contract.",
    role: "Generate cấu trúc web, component, route và prototype có thể handoff cho Dev.",
    output: "Mini Web Phạt Nguội có route, widget và content frame.",
    items: [
      "Home / landing giải thích use case và CTA tra cứu.",
      "Article template có product embed, FAQ và schema-ready blocks.",
      "Widget tra cứu biển số có loading, empty state, result state và app-deeplink.",
    ],
    proof:
      "Vibe Code trong MoSpark tạo ra web surface có logic sản phẩm, không chỉ layout tĩnh.",
  },
  {
    title: "Content Production",
    desc: "GenAI Content lấy toàn bộ context từ PLG Project và dùng Claude để sản xuất bản nháp hoàn chỉnh trước khi qua SEO/GEO gate.",
    input:
      "Content brief, keyword map, source citation, page structure, product embed requirement và CTA policy.",
    role: "Sinh outline, draft, FAQ, product embed, internal links và block nội dung theo đúng project context.",
    output: "Bản draft Phạt Nguội hoàn chỉnh, ước tính khoảng 20k/bài với Claude.",
    items: [
      "Bài viết có cấu trúc H1/H2/H3 theo intent, không copy từ prompt đơn lẻ.",
      "Product embed: widget tra cứu phạt nguội và CTA mở MoMo đúng ngữ cảnh.",
      "FAQ, answer block, internal links và hướng dẫn thanh toán được sinh từ source of truth.",
      "Bản draft chưa publish ngay mà chuyển sang bước SEO/GEO để chuẩn hóa.",
    ],
    proof:
      "Content Production là output của PLG Project, không phải một màn chat GenAI độc lập.",
  },
  {
    title: "SEO/GEO Optimization",
    desc: "Chuẩn hóa content cho Search Engine và AI Search sau khi đã có draft, đảm bảo bài viết vừa crawl tốt vừa dễ được AI trích dẫn đúng.",
    input:
      "Draft content, keyword map, SERP pattern, AI answer pattern, source citation, schema-ready blocks và W2A requirement.",
    role: "Tối ưu heading, entity mention, citation, answer block, FAQ, internal links, product embed, crawlable widget fallback và freshness signal.",
    output: "SEO/GEO-ready content package cho Phạt Nguội.",
    items: [
      "Search Engine: title, meta, H1/H2/H3, canonical, internal links, FAQ/HowTo block và nội dung crawlable.",
      "AI Search: câu trả lời ngắn, entity statement, citation/source block, disambiguation và structured summary.",
      "Product layer: embed widget đúng intent, CTA mở app, deeplink fallback và event tracking cho W2A.",
      "Quality gate: factuality, source coverage, readability, snippet readiness và SEO/GEO score.",
    ],
    proof:
      "SEO/GEO không chỉ là ranking. Mục tiêu là content chuẩn hóa đủ tốt cho Google Search, AI Search và conversion.",
  },
  {
    title: "Brand Entity & Social Proof",
    desc: "Với MoSpark, đây không phải là công cụ tự thực thi. Web Platform lập kế hoạch và follow với Cell team để build Entity, Brand, Social Signal và Social Proof.",
    input:
      "SEO/GEO content package, brand entity gap, owned channels, social surfaces, PR proof, product proof và Cell team owner.",
    role: "Chuẩn hóa checklist, owner, backlog và follow-up rhythm để Cell team củng cố tín hiệu thương hiệu quanh use case.",
    output: "Entity, Brand và Social Proof build plan cho Phạt Nguội.",
    items: [
      "Chuẩn hóa cách MoMo được mô tả trong use case Phạt Nguội trên momo.vn, social, PR và các owned surfaces.",
      "Follow Cell team tạo social posts, source proof, product proof, user proof và internal links hỗ trợ entity.",
      "Theo dõi SoV, AI citation gap và social signal gap để bổ sung backlog theo tuần.",
      "Không expose như một automation tool. MoSpark đóng vai trò governance, tracking và coordination.",
    ],
    proof:
      "Entity và social proof cần phối hợp vận hành. Web Platform không thay Cell team, nhưng giúp team build đúng tín hiệu và đo được gap.",
  },
  {
    title: "Monitor & Optimize W2A",
    desc: "MoSpark tracking toàn diện end-to-end user flow từ Web đến App để optimize W2A.",
    input: "Event schema, widget interaction, app open, payment start và payment success.",
    role: "Quan sát toàn bộ funnel, tìm drop-off và đề xuất tối ưu content, widget, CTA.",
    output: "W2A dashboard cho Phạt Nguội.",
    items: [
      "Track impression, scroll depth, widget start, result view, CTA click và app open.",
      "Đo conversion từ article sang tra cứu, từ tra cứu sang mở app, từ mở app sang thanh toán.",
      "Đề xuất optimize theo dữ liệu: đổi CTA, move widget, thêm FAQ hoặc bổ sung citation.",
    ],
    proof:
      "MoSpark khép vòng từ acquisition đến transaction, không dừng ở publish một landing page.",
  },
];
