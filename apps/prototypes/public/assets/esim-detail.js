(function(){
  const destinations=window.ESIM_DESTINATIONS||[];
  const devices=window.ESIM_DEVICES||{};
  const params=new URLSearchParams(window.location.search);
  const destinationId=params.get('destination')||document.body.dataset.destination||'thailand';
  const destination=destinations.find(item=>item.id===destinationId)||destinations[0];
  const app=document.getElementById('app');
  const money=value=>new Intl.NumberFormat('vi-VN').format(value)+'đ';
  let tripDays=7;
  let selectedPlan=recommendPlan(destination.plans,tripDays);
  document.title=`eSIM ${destination.name} | MoMo`;
  const description=document.querySelector('meta[name="description"]');
  if(description) description.content=`Chọn gói eSIM ${destination.name} theo số ngày đi, data và thiết bị trước khi mua trên MoMo.`;

  function recommendPlan(plans,days){
    const eligible=plans.filter(plan=>plan.days>=days).sort((a,b)=>a.days-b.days||a.price-b.price);
    return eligible[0]||[...plans].sort((a,b)=>b.days-a.days)[0];
  }

  function render(){
    document.documentElement.style.setProperty('--accent',destination.accent);
    app.innerHTML=`
      <header class="topbar"><div class="shell topbar-inner">
        <a class="brand" href="../esim-du-lich.html"><img src="https://homepage.momocdn.net/fileuploads/svg/momo-file-240411162904.svg" alt="MoMo"><span><strong>eSIM ${destination.name}</strong><small>eSIM Du Lịch</small></span></a>
        <nav class="top-links"><a href="../../lab.html">Prototype Lab</a><a href="#plans" class="button">Chọn gói</a></nav>
      </div></header>
      <main>
        <section class="hero"><div class="shell">
          <div class="breadcrumb"><a href="../esim-du-lich.html">eSIM Du Lịch</a><span>/</span><strong>${destination.name}</strong></div>
          <div class="hero-grid">
            <div><div class="eyebrow">${destination.region} · Trang điểm đến</div><div class="flag">${destination.flag}</div><h1>eSIM ${destination.name}</h1><p class="hero-copy">${destination.intro}</p>
              <div class="hero-actions"><a class="button" href="#plans">Xem gói data</a><a class="button secondary" href="#compatibility">Kiểm tra thiết bị</a></div>
              <div class="trust"><span>4G/5G</span><span>${destination.network}</span><span>Nhận QR 1 đến 5 phút</span><span>Hỗ trợ 24/7</span></div>
            </div>
            <div class="hero-card"><img src="https://homepage.momocdn.net/img/1920x640_desktop-260408103921.jpg" alt="Du lịch ${destination.name}"><div class="hero-card-copy"><small>Khu vực phủ sóng phổ biến</small><strong>${destination.hero}</strong></div></div>
          </div>
        </div></section>

        <section class="booking-wrap" id="plans"><div class="shell booking">
          <div class="booking-main"><div class="section-label">Gói data ${destination.name}</div><h2>Chọn theo số ngày đi</h2><p class="helper">Hệ thống chỉ đề xuất gói có thời hạn bằng hoặc dài hơn chuyến đi.</p>
            <span class="control-label">Thời gian sử dụng</span><div class="day-options">${[5,7,10,15,30].map(day=>`<button class="day${day===tripDays?' active':''}" type="button" data-day="${day}">${day} ngày</button>`).join('')}</div>
            <span class="control-label">Gói phù hợp</span><div class="plans">${renderPlans()}</div>
            <div class="recommend" id="recommendation"></div>
          </div>
          <aside class="checkout"><div class="section-label">Tóm tắt</div><h3>Gói eSIM đã chọn</h3><div class="route"><b>${destination.flag}</b><div><strong>${destination.name}</strong><small>${destination.network}</small></div></div>
            <div class="summary-list"><div class="summary-row"><span>Data</span><strong id="sumData"></strong></div><div class="summary-row"><span>Hiệu lực</span><strong id="sumDays"></strong></div><div class="summary-row"><span>Loại gói</span><strong>Data-only</strong></div><div class="summary-row"><span>Nhận eSIM</span><strong>QR qua email</strong></div></div>
            <div class="total"><span>Tạm tính<small style="display:block">Giá mock</small></span><strong id="sumPrice"></strong></div><button class="button full" id="buyButton" type="button">Tiếp tục trên MoMo</button><p class="fineprint">Giá và inventory trong prototype cần được thay bằng plan feed production trước khi triển khai.</p>
          </aside>
        </div></section>

        <section class="section"><div class="shell"><div class="section-head"><div class="section-label">Lợi ích theo điểm đến</div><h2>Đủ mạng cho toàn bộ hành trình</h2><p>Thông tin quan trọng được đặt trước checkout để user hiểu rõ cách nhận, cài và kích hoạt eSIM.</p></div>
          <div class="benefits"><article class="card"><div class="card-icon">📶</div><h3>Mạng địa phương</h3><p>Kết nối qua ${destination.network}, tốc độ thực tế phụ thuộc vị trí và hạ tầng mạng.</p></article><article class="card"><div class="card-icon">▦</div><h3>Nhận QR nhanh</h3><p>QR eSIM được gửi qua email sau khi thanh toán thành công.</p></article><article class="card"><div class="card-icon">📱</div><h3>Giữ SIM chính</h3><p>Không tháo SIM hiện tại, vẫn dùng các ứng dụng liên lạc quen thuộc.</p></article><article class="card"><div class="card-icon">🛟</div><h3>Hỗ trợ 24/7</h3><p>Có hướng dẫn khi chưa nhận QR, không cài được hoặc không vào được mạng.</p></article></div>
        </div></section>

        <section class="section soft" id="compatibility"><div class="shell"><div class="section-head"><div class="section-label">Compatibility gate</div><h2>Kiểm tra trước khi mua</h2><p>Model và phiên bản theo thị trường có thể khác nhau. Đây là gate bắt buộc trước checkout.</p></div>
          <div class="compat"><select id="brandSelect">${Object.keys(devices).map(brand=>`<option>${brand}</option>`).join('')}</select><select id="modelSelect"></select><button id="checkDevice" type="button">Kiểm tra thiết bị</button><div class="compat-result" id="compatResult"></div></div>
        </div></section>

        <section class="section"><div class="shell"><div class="section-head"><div class="section-label">Activation</div><h2>Cài trước, bật khi đến nơi</h2></div><div class="steps"><article class="card"><div class="step-num">01 · MUA GÓI</div><h3>Chọn đúng thời hạn</h3><p>Đảm bảo số ngày hiệu lực bao phủ toàn bộ chuyến đi.</p></article><article class="card"><div class="step-num">02 · NHẬN QR</div><h3>Kiểm tra email</h3><p>Nhận QR và thông tin cài đặt trong khoảng 1 đến 5 phút.</p></article><article class="card"><div class="step-num">03 · CÀI ESIM</div><h3>Dùng Wi-Fi ổn định</h3><p>Cài profile eSIM trước khi khởi hành, không xóa QR sau khi quét.</p></article><article class="card"><div class="step-num">04 · KÍCH HOẠT</div><h3>Bật data roaming</h3><p>Chọn eSIM du lịch cho dữ liệu di động khi đã đến ${destination.name}.</p></article></div></div></section>

        <section class="section soft"><div class="shell"><div class="section-head"><div class="section-label">FAQ ${destination.name}</div><h2>Câu hỏi trước chuyến đi</h2></div><div class="faq">
          <details open><summary>Khi nào gói eSIM bắt đầu tính thời hạn?</summary><p>Thời điểm bắt đầu tùy chính sách của từng gói và nhà mạng. User cần đọc điều kiện gói trước khi cài hoặc bật data roaming.</p></details>
          <details><summary>Gói eSIM ${destination.name} có gọi thoại không?</summary><p>Các gói trong prototype được mô tả là data-only. User có thể gọi qua ứng dụng Internet. Thoại và SMS cần kiểm tra theo plan feed thực tế.</p></details>
          <details><summary>Nếu có sóng nhưng chưa vào mạng thì làm gì?</summary><p>Kiểm tra eSIM đã được chọn cho dữ liệu di động, bật data roaming, tắt Wi-Fi và khởi động lại thiết bị. Nếu vẫn lỗi, liên hệ hỗ trợ 24/7.</p></details>
        </div></div></section>

        <section class="section"><div class="shell"><div class="section-head"><div class="section-label">Điểm đến khác</div><h2>Tiếp tục hành trình</h2></div><div class="related">${destinations.filter(item=>item.id!==destination.id).slice(0,4).map(item=>`<a href="destination.html?destination=${item.id}"><b>${item.flag}</b><strong>${item.name}</strong><small>${item.region}</small></a>`).join('')}</div></div></section>
      </main>
      <footer class="footer"><div class="shell footer-inner"><p>Dữ liệu dịch vụ theo MoMo eSIM Du Lịch. Giá và inventory là mock cho prototype.</p><a class="button secondary" href="https://www.momo.vn/esim-du-lich" target="_blank" rel="noreferrer">Xem nguồn MoMo</a></div></footer><div class="toast" id="toast" role="status" aria-live="polite"></div>`;
    bindEvents();updateSummary();updateModels();
  }

  function renderPlans(){return destination.plans.map(plan=>`<button class="plan${plan.id===selectedPlan.id?' active':''}" type="button" data-plan="${plan.id}"><span class="plan-tag">${plan.tag}</span><div class="plan-data">${plan.data}</div><div class="plan-validity">Hiệu lực ${plan.days} ngày · 4G/5G</div><div class="plan-price">${money(plan.price)}</div><div class="plan-note">Có hotspot tùy nhà mạng</div></button>`).join('')}
  function updatePlans(){document.querySelector('.plans').innerHTML=renderPlans();document.querySelectorAll('.plan').forEach(button=>button.addEventListener('click',()=>{selectedPlan=destination.plans.find(plan=>plan.id===button.dataset.plan);updatePlans();updateSummary();signal(`Đã chọn ${selectedPlan.data}`)}))}
  function updateSummary(){document.getElementById('sumData').textContent=selectedPlan.data;document.getElementById('sumDays').textContent=`${selectedPlan.days} ngày`;document.getElementById('sumPrice').textContent=money(selectedPlan.price);document.getElementById('recommendation').innerHTML=`<strong>Đề xuất:</strong> ${selectedPlan.data} trong ${selectedPlan.days} ngày bao phủ chuyến đi ${tripDays} ngày.`}
  function updateModels(){const brand=document.getElementById('brandSelect').value;document.getElementById('modelSelect').innerHTML=devices[brand].map(model=>`<option>${model}</option>`).join('');document.getElementById('compatResult').classList.remove('show')}
  function signal(message){const toast=document.getElementById('toast');toast.textContent=message;toast.classList.add('show');clearTimeout(toast.timer);toast.timer=setTimeout(()=>toast.classList.remove('show'),1800)}
  function bindEvents(){document.querySelectorAll('.day').forEach(button=>button.addEventListener('click',()=>{tripDays=Number(button.dataset.day);selectedPlan=recommendPlan(destination.plans,tripDays);document.querySelectorAll('.day').forEach(item=>item.classList.toggle('active',item===button));updatePlans();updateSummary()}));document.querySelectorAll('.plan').forEach(button=>button.addEventListener('click',()=>{selectedPlan=destination.plans.find(plan=>plan.id===button.dataset.plan);updatePlans();updateSummary();signal(`Đã chọn ${selectedPlan.data}`)}));document.getElementById('brandSelect').addEventListener('change',updateModels);document.getElementById('checkDevice').addEventListener('click',()=>{const result=document.getElementById('compatResult');result.textContent=`✓ ${document.getElementById('modelSelect').value} thuộc nhóm thiết bị hỗ trợ eSIM. Hãy kiểm tra thêm phiên bản theo thị trường.`;result.classList.add('show');signal('Đã kiểm tra thiết bị')});document.getElementById('buyButton').addEventListener('click',()=>signal(`Prototype: checkout gói ${selectedPlan.data} tại ${destination.name}`))}
  render();
})();
