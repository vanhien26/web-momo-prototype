(() => {
  const vehicleLabels = { oto: 'Ô tô', xemay: 'Xe máy', xedien: 'Xe máy điện' };

  document.querySelectorAll('[data-lookup-form]').forEach(form => {
    let vehicle = 'oto';
    const buttons = [...form.querySelectorAll('[data-vehicle]')];
    const input = form.querySelector('[data-plate-input]');
    const result = form.querySelector('[data-lookup-result]');

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        vehicle = button.dataset.vehicle;
        buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
      });
    });

    form.addEventListener('submit', event => {
      event.preventDefault();
      const plate = (input?.value || '').replace(/[\s.\-]/g, '').toUpperCase();
      if (!plate || plate.length < 7) {
        result.className = 'lookup-result is-visible is-alert';
        result.innerHTML = '<strong>Biển số chưa đúng định dạng</strong><p>Nhập liền biển số, ví dụ 29A12345.</p>';
        input?.focus();
        return;
      }

      const location = form.dataset.location || 'toàn quốc';
      const hasDemoViolation = plate === '29A12345';
      result.className = `lookup-result is-visible${hasDemoViolation ? ' is-alert' : ''}`;
      result.innerHTML = hasDemoViolation
        ? `<strong>${plate} có 1 vi phạm mô phỏng</strong><p>${vehicleLabels[vehicle]} · Ghi nhận tại ${location}. Mở MoMo để xem dữ liệu chính thức và trạng thái xử lý.</p>`
        : `<strong>Chưa thấy vi phạm trong dữ liệu mô phỏng</strong><p>${plate} · ${vehicleLabels[vehicle]}. Hãy kiểm tra lại định kỳ vì dữ liệu có thể cần thời gian xác minh.</p>`;
      result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  });

  const search = document.querySelector('[data-location-search]');
  if (search) {
    const cards = [...document.querySelectorAll('[data-location-card]')];
    const count = document.querySelector('[data-location-count]');
    search.addEventListener('input', () => {
      const query = search.value.trim().toLocaleLowerCase('vi');
      let visible = 0;
      cards.forEach(card => {
        const matched = card.textContent.toLocaleLowerCase('vi').includes(query);
        card.classList.toggle('is-hidden', !matched);
        if (matched) visible += 1;
      });
      if (count) count.textContent = `${visible} địa phương`;
    });
  }
})();
