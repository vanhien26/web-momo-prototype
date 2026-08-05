import confetti from 'canvas-confetti';

/** Trigger celebration confetti pháo hoa */
export function fireConfetti() {
  confetti({
    particleCount: 80,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#eb2f96', '#c22181', '#16a34a', '#2563eb', '#d97706'],
  });
}

/** Trigger burst confetti from a specific element position */
export function fireConfettiFromElement(el: HTMLElement) {
  const rect = el.getBoundingClientRect();
  const x = (rect.left + rect.width / 2) / window.innerWidth;
  const y = (rect.top + rect.height / 2) / window.innerHeight;

  confetti({
    particleCount: 50,
    spread: 60,
    origin: { x, y },
    colors: ['#eb2f96', '#ffd6ee', '#16a34a', '#f59e0b'],
  });
}
