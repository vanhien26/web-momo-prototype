(() => {
  const BUTTON_ID = 'next-app-bridge';

  document.querySelectorAll(`#${BUTTON_ID}, a[aria-label="Quay lại dự án Next.js"]`).forEach(el => el.remove());
})();
