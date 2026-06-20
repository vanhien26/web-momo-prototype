// ── Formatters
const fmt  = n => new Intl.NumberFormat('vi-VN').format(Math.round(n)) + ' đ';
const fmtM = n => {
  const abs = Math.abs(n), sign = n < 0 ? '-' : '';
  if (abs >= 1e9) return sign + new Intl.NumberFormat('vi-VN', {maximumFractionDigits:1}).format(abs/1e9) + ' tỷ';
  if (abs >= 1e6) return sign + new Intl.NumberFormat('vi-VN', {maximumFractionDigits:1}).format(abs/1e6) + ' triệu';
  return fmt(n);
};

function val(id) {
  const el = document.getElementById(id);
  return el ? +el.value : 0;
}

function setResult({ main, mainLabel, second, secondLabel, progress = 50 }) {
  const set = (id, v) => { const e = document.getElementById(id); if (e) e.textContent = v; };
  const pct = Math.min(100, Math.max(0, progress || 0));
  set('mainLabel',   mainLabel   || 'Kết quả chính');
  set('mainResult',  main        || '—');
  set('secondLabel', secondLabel || 'Kết quả phụ');
  set('secondResult',second      || '—');
  const bar = document.getElementById('progressBar');
  if (bar) bar.style.width = pct + '%';
}

// ── Calculation engines per data-logic key
const CALCS = {

  monthlyLoan() {
    const P = val('amount'), r = val('rate') / 100 / 12, n = val('months');
    if (!P || !n) { setResult({ main:'—', mainLabel:'TRẢ MỖI THÁNG', second:'—', secondLabel:'TỔNG TIỀN TRẢ', progress:0 }); return; }
    const mo = r === 0 ? P / n : P * r * Math.pow(1+r,n) / (Math.pow(1+r,n)-1);
    const total = mo * n, interest = total - P;
    setResult({
      main: fmt(mo), mainLabel: 'TRẢ MỖI THÁNG',
      second: fmt(total), secondLabel: 'TỔNG TIỀN TRẢ',
      progress: Math.min(100, (interest / P) * 100 * 2),
    });
  },

  installment() {
    const price = val('price'), down = val('down'), n = val('months'), r = val('fee') / 100 / 12;
    const principal = price - down;
    if (!principal || !n) { setResult({ main:'—', mainLabel:'TRẢ MỖI THÁNG', second:'—', secondLabel:'TỔNG PHẢI TRẢ', progress:0 }); return; }
    const mo = r === 0 ? principal / n : principal * r * Math.pow(1+r,n) / (Math.pow(1+r,n)-1);
    const total = down + mo * n;
    setResult({
      main: fmt(mo), mainLabel: 'TRẢ MỖI THÁNG',
      second: fmt(total), secondLabel: 'TỔNG PHẢI TRẢ',
      progress: price > 0 ? (down / price) * 100 : 0,
    });
  },

  saving() {
    const P = val('principal'), r = val('rate') / 100, n = val('months');
    if (!P || !n) { setResult({ main:'—', mainLabel:'NHẬN KHI ĐÁO HẠN', second:'—', secondLabel:'TIỀN LÃI SAU THUẾ', progress:0 }); return; }
    const interest = P * r / 12 * n;
    const tax = interest * 0.05;
    setResult({
      main: fmt(P + interest - tax), mainLabel: 'NHẬN KHI ĐÁO HẠN',
      second: fmt(interest - tax), secondLabel: 'TIỀN LÃI SAU THUẾ',
      progress: Math.min(100, (interest / P) * 100 * 5),
    });
  },

  tax() {
    const gross = val('income'), deps = val('dependents'), ins = val('insurance');
    const personal = 11000000, dep = deps * 4400000;
    const taxable = Math.max(0, gross - ins - personal - dep);
    const brackets = [5e6, 10e6, 18e6, 32e6, 52e6, 80e6, Infinity];
    const rates    = [.05, .10, .15, .20, .25, .30, .35];
    let tax = 0, prev = 0;
    for (let i = 0; i < brackets.length; i++) {
      if (taxable <= prev) break;
      tax += Math.min(taxable - prev, brackets[i]) * rates[i];
      prev += brackets[i];
    }
    const net = gross - ins - tax;
    setResult({
      main: fmt(tax), mainLabel: 'THUẾ TNCN/THÁNG',
      second: fmt(net), secondLabel: 'LƯƠNG NET NHẬN VỀ',
      progress: gross > 0 ? Math.min(100, (tax / gross) * 100 * 4) : 0,
    });
  },

  fund() {
    const pmt = val('monthly'), r = val('rate') / 100 / 12, n = val('years') * 12;
    if (!pmt || !n) { setResult({ main:'—', mainLabel:'GIÁ TRỊ TƯƠNG LAI', second:'—', secondLabel:'TỔNG ĐÃ ĐẦU TƯ', progress:0 }); return; }
    const fv = r === 0 ? pmt * n : pmt * (Math.pow(1+r, n) - 1) / r;
    const invested = pmt * n;
    setResult({
      main: fmtM(fv), mainLabel: 'GIÁ TRỊ TƯƠNG LAI',
      second: fmtM(invested), secondLabel: 'TỔNG ĐÃ ĐẦU TƯ',
      progress: invested > 0 ? Math.min(100, ((fv - invested) / fv) * 100) : 0,
    });
  },

  carInsurance() {
    const carValue = val('carValue'), r = val('rate') / 100, liability = val('liability');
    const comp = carValue * r, vat = comp * 0.1;
    const total = comp + vat + liability;
    setResult({
      main: fmt(total), mainLabel: 'TỔNG PHÍ/NĂM',
      second: fmt(comp + vat), secondLabel: 'PHÍ VẬT CHẤT (gồm VAT)',
      progress: Math.min(100, r * 100 * 20),
    });
  },

  socialInsurance() {
    const salary = val('salary'), months = val('months'), r = val('rate') / 100;
    const monthly = salary * r;
    const total = monthly * months;
    setResult({
      main: fmtM(total), mainLabel: 'TỔNG ĐÃ ĐÓNG BHXH',
      second: fmt(monthly), secondLabel: 'ĐÓNG MỖI THÁNG',
      progress: Math.min(100, (months / 360) * 100),
    });
  },

  retirement() {
    const expense = val('expense'), years = val('years'), inflation = val('inflation') / 100;
    const retireYears = val('retireYears') || 20;
    const returnRate = (val('returnRate') || 0) / 100;
    
    // Tỷ suất sinh lời thực tế (Real rate of return) sau lạm phát
    const r = (1 + returnRate) / (1 + inflation) - 1;
    const futureCost = expense * Math.pow(1 + inflation, years);
    
    // Công thức tính Giá trị hiện tại của dòng tiền đều (Annuity Present Value) trong thời kỳ hưu trí
    let totalNeeded = 0;
    const n_months = retireYears * 12;
    if (Math.abs(r) < 1e-6) {
      totalNeeded = futureCost * n_months;
    } else {
      const r_month = Math.pow(1 + r, 1/12) - 1;
      totalNeeded = futureCost * (1 - Math.pow(1 + r_month, -n_months)) / r_month;
    }

    // Tính số tiền cần tiết kiệm mỗi tháng trước khi nghỉ hưu (Future Value of Annuity)
    let monthlySave = 0;
    if (years > 0) {
      const r_save_month = returnRate / 12;
      const n_save_months = years * 12;
      if (r_save_month === 0) {
        monthlySave = totalNeeded / n_save_months;
      } else {
        monthlySave = totalNeeded * r_save_month / (Math.pow(1 + r_save_month, n_save_months) - 1);
      }
    }

    // Cập nhật kết quả chính và phụ
    setResult({
      main: fmtM(totalNeeded), mainLabel: 'TỔNG VỐN CẦN TÍCH LŨY',
      second: fmt(futureCost), secondLabel: 'CHI PHÍ KHI HƯU/THÁNG',
      progress: Math.min(100, (years / 40) * 100),
    });

    // Hiển thị phần tiết kiệm bổ sung
    const insightEl = document.getElementById('savingInsight');
    if (insightEl) {
      if (years > 0) {
        insightEl.innerHTML = `🎯 Để đạt mục tiêu này, bạn cần tiết kiệm khoảng <strong>${fmt(monthlySave)}</strong>/tháng từ nay đến khi nghỉ hưu (giả định lợi suất đầu tư đạt ${val('returnRate')}%/năm).`;
        insightEl.style.display = 'block';
      } else {
        insightEl.style.display = 'none';
      }
    }
  },

  emergency() {
    const expense = val('expense'), months = val('months'), current = val('current');
    const target = expense * months;
    const gap = Math.max(0, target - current);
    const pct = target > 0 ? Math.min(100, (current / target) * 100) : 0;
    setResult({
      main: fmt(target), mainLabel: 'QUỸ CẦN CÓ',
      second: gap > 0 ? fmt(gap) : 'Đã đủ ✓', secondLabel: 'CÒN THIẾU',
      progress: pct,
    });
  },

  fire() {
    const expense = val('expense'), withdraw = val('withdraw') || 4, current = val('current');
    const fireNum = expense * 12 / (withdraw / 100);
    const gap = Math.max(0, fireNum - current);
    const pct = fireNum > 0 ? Math.min(100, (current / fireNum) * 100) : 0;
    setResult({
      main: fmtM(fireNum), mainLabel: 'FIRE NUMBER CẦN ĐẠT',
      second: gap > 0 ? fmtM(gap) : 'Đã đạt FIRE ✓', secondLabel: 'CÒN THIẾU',
      progress: pct,
    });
  },

  wedding() {
    const target = val('target'), current = val('current'), months = val('months');
    const gap = Math.max(0, target - current);
    const monthly = months > 0 ? gap / months : 0;
    const pct = target > 0 ? Math.min(100, (current / target) * 100) : 0;
    setResult({
      main: months > 0 ? fmt(monthly) : '—', mainLabel: 'CẦN ĐỂ DÀNH/THÁNG',
      second: gap > 0 ? fmt(gap) : 'Đã đủ ✓', secondLabel: 'SỐ TIỀN CÒN THIẾU',
      progress: pct,
    });
  },

  tuition() {
    const fee = val('fee'), years = val('years') || 1, inflation = val('inflation') / 100;
    const futureFee = fee * Math.pow(1 + inflation, years);
    // Tổng học phí 4 năm đại học (phí tăng mỗi năm theo lạm phát)
    let total = 0;
    for (let i = 0; i < 4; i++) total += futureFee * Math.pow(1 + inflation, i);
    const monthly = years > 0 ? total / (years * 12) : 0;
    setResult({
      main: fmt(futureFee), mainLabel: 'HỌC PHÍ NĂM ĐẦU (dự tính)',
      second: fmt(monthly), secondLabel: 'CẦN ĐỂ DÀNH/THÁNG',
      progress: Math.min(100, (years / 18) * 100),
    });
  },
};

function runCalc() {
  const btn = document.querySelector('[data-run][data-logic]');
  const logic = btn && btn.dataset.logic;
  if (logic && CALCS[logic]) CALCS[logic]();
}

document.addEventListener('DOMContentLoaded', () => {
  // Run on load with default values
  runCalc();
  // Live update on any input change
  document.querySelectorAll('[data-input]').forEach(el => {
    el.addEventListener('input', runCalc);
    el.addEventListener('change', runCalc);
  });
  // Button click also triggers (instant feedback)
  const btn = document.querySelector('[data-run]');
  if (btn) btn.addEventListener('click', runCalc);
});
