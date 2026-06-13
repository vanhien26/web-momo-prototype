const STATIONS = [
  'Bến Thành',
  'Nhà hát Thành phố',
  'Ba Son',
  'Văn Thánh',
  'Tân Cảng',
  'Thảo Điền',
  'An Phú',
  'Rạch Chiếc',
  'Phước Long',
  'Bình Thái',
  'Thủ Đức',
  'Khu Công nghệ cao',
  'Đại học Quốc gia',
  'Suối Tiên',
];

const TICKET_TYPES = [
  {
    id: 'single',
    name: '1 lượt',
    subtitle: 'Core commuter flow',
    price: 12000,
    note: 'Phù hợp đi làm, đi học, hoặc thử tuyến.',
    validity: 'Trong ngày',
    badge: 'Default'
  },
  {
    id: 'roundtrip',
    name: 'Khứ hồi',
    subtitle: 'Two-way journey',
    price: 22000,
    note: 'Đi và về trong cùng một ngày.',
    validity: 'Trong ngày',
    badge: 'Return'
  },
  {
    id: 'daypass',
    name: '1 ngày',
    subtitle: 'Explore pass',
    price: 35000,
    note: 'Đi nhiều lượt trong một ngày.',
    validity: '24 giờ',
    badge: 'Day'
  },
  {
    id: '3day',
    name: '3 ngày',
    subtitle: 'Visitor pass',
    price: 70000,
    note: 'Dành cho khách tham quan cuối tuần.',
    validity: '72 giờ',
    badge: 'Trip'
  },
  {
    id: 'month',
    name: '30 ngày',
    subtitle: 'Monthly commute',
    price: 280000,
    note: 'Tối ưu cho người đi lại thường xuyên.',
    validity: '30 ngày',
    badge: 'Plan'
  },
];

const PAYMENT_METHODS = [
  {
    id: 'balance',
    name: 'MoMo balance',
    title: 'Thanh toán bằng số dư MoMo',
    copy: 'Phù hợp cho flow nhanh nhất: người dùng mở app, kiểm tra số dư, xác nhận và nhận vé ngay. Với Dev, module cần có trạng thái số dư đủ, thiếu, và xác nhận thành công.',
  },
  {
    id: 'bank',
    name: 'Linked bank',
    title: 'Thanh toán từ ngân hàng liên kết',
    copy: 'Dành cho luồng có OTP hoặc 3DS. Nên tách payment sheet, trạng thái chờ, và state thất bại để team implement dễ hơn.',
  },
];

const fmt = value => new Intl.NumberFormat('vi-VN').format(Math.round(value)) + ' đ';

const $ = selector => document.querySelector(selector);

const state = {
  ticketId: 'single',
  paymentId: 'balance',
};

function diffStations(from, to) {
  const fromIndex = STATIONS.indexOf(from);
  const toIndex = STATIONS.indexOf(to);
  if (fromIndex < 0 || toIndex < 0) return 0;
  return Math.max(1, Math.abs(toIndex - fromIndex));
}

function estimateMinutes(segmentCount) {
  return 6 + segmentCount * 3;
}

function deriveFare(ticketId, segmentCount) {
  const base = {
    single: 12000,
    roundtrip: 22000,
    daypass: 35000,
    '3day': 70000,
    month: 280000,
  }[ticketId] || 12000;

  const extraSegments = Math.max(0, segmentCount - 4);
  const surcharge = ticketId === 'month' ? 0 : extraSegments * 1500;
  return base + surcharge;
}

function renderStations(origin, destination) {
  const rail = $('#stationRail');
  const start = STATIONS.indexOf(origin);
  const end = STATIONS.indexOf(destination);
  const from = Math.min(start, end);
  const to = Math.max(start, end);

  rail.innerHTML = STATIONS.map((station, index) => {
    const active = index >= from && index <= to;
    const label = index === start ? 'Xuất phát' : index === end ? 'Đích đến' : active ? 'Trên tuyến' : 'Ngoài tuyến';
    return `
      <div class="station-item${active ? ' active' : ''}">
        <span class="station-dot"></span>
        <div class="station-info">
          <strong>${station}</strong>
          <small>${label}</small>
        </div>
        <span class="station-meta">${index + 1}</span>
      </div>
    `;
  }).join('');
}

function renderTicketOptions() {
  const wrap = $('#ticketOptions');
  wrap.innerHTML = TICKET_TYPES.map(ticket => `
    <button class="ticket-option${ticket.id === state.ticketId ? ' active' : ''}" data-ticket="${ticket.id}" type="button">
      <small>${ticket.badge}</small>
      <strong>${ticket.name}</strong>
      <p>${ticket.note}</p>
      <b>${fmt(ticket.price)}</b>
    </button>
  `).join('');

  wrap.querySelectorAll('[data-ticket]').forEach(button => {
    button.addEventListener('click', () => {
      state.ticketId = button.dataset.ticket;
      render();
    });
  });
}

function renderPaymentTabs() {
  const tabs = $('#paymentTabs');
  tabs.innerHTML = PAYMENT_METHODS.map(method => `
    <button class="payment-tab${method.id === state.paymentId ? ' active' : ''}" data-payment="${method.id}" type="button">
      ${method.name}
    </button>
  `).join('');

  tabs.querySelectorAll('[data-payment]').forEach(button => {
    button.addEventListener('click', () => {
      state.paymentId = button.dataset.payment;
      render();
    });
  });
}

function render() {
  const origin = $('#originStation').value;
  const destination = $('#destinationStation').value;
  const ticket = TICKET_TYPES.find(item => item.id === state.ticketId) || TICKET_TYPES[0];
  const payment = PAYMENT_METHODS.find(item => item.id === state.paymentId) || PAYMENT_METHODS[0];
  const segmentCount = diffStations(origin, destination);
  const fare = deriveFare(ticket.id, segmentCount);
  const minutes = estimateMinutes(segmentCount);
  const ticketIndex = TICKET_TYPES.findIndex(item => item.id === ticket.id) + 1;

  $('#segmentCount').textContent = `${segmentCount} trạm`;
  $('#travelTime').textContent = `${minutes} phút`;
  $('#fareTitle').textContent = ticket.name;
  $('#fareSubtitle').textContent = `${origin} -> ${destination}`;
  $('#fareValue').textContent = fmt(fare);
  $('#qrLabel').textContent = `MOO-METRO-${String(ticketIndex).padStart(3, '0')}`;
  $('#qrHint').textContent = `${payment.title}. QR sẽ đổi sang trạng thái active sau xác nhận thanh toán.`;
  $('#ticketLabel').textContent = ticket.name;
  $('#validityLabel').textContent = ticket.validity;
  $('#gateLabel').textContent = `${origin} - ${destination}`;
  $('#statusLabel').textContent = 'Chờ thanh toán';
  $('#paymentCopy').innerHTML = `<strong>${payment.title}.</strong> ${payment.copy}`;

  renderStations(origin, destination);
  renderTicketOptions();
  renderPaymentTabs();
}

function hydrateStationSelects() {
  const origin = $('#originStation');
  const destination = $('#destinationStation');

  origin.innerHTML = STATIONS.map((station, index) => `<option value="${station}">${station}</option>`).join('');
  destination.innerHTML = STATIONS.map((station, index) => `<option value="${station}">${station}</option>`).join('');

  origin.value = 'Bến Thành';
  destination.value = 'Suối Tiên';
}

function bindEvents() {
  $('#originStation').addEventListener('change', () => {
    if ($('#originStation').value === $('#destinationStation').value) {
      const nextIndex = Math.min(STATIONS.length - 1, STATIONS.indexOf($('#originStation').value) + 1);
      $('#destinationStation').value = STATIONS[nextIndex];
    }
    render();
  });

  $('#destinationStation').addEventListener('change', () => {
    if ($('#originStation').value === $('#destinationStation').value) {
      const prevIndex = Math.max(0, STATIONS.indexOf($('#destinationStation').value) - 1);
      $('#originStation').value = STATIONS[prevIndex];
    }
    render();
  });

  $('#rideDate').addEventListener('change', render);
  $('#rideTime').addEventListener('change', render);

  $('#buyButton').addEventListener('click', () => {
    const ticket = TICKET_TYPES.find(item => item.id === state.ticketId) || TICKET_TYPES[0];
    $('#statusLabel').textContent = 'Đã thanh toán';
    $('#qrHint').textContent = `Vé ${ticket.name} đã sẵn sàng. State này nên map sang màn success và màn ticket wallet.`;
    $('#buyButton').textContent = 'Vé đã sẵn sàng';
  });
}

function init() {
  hydrateStationSelects();
  bindEvents();

  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  $('#rideDate').value = `${yyyy}-${mm}-${dd}`;

  render();
}

init();
