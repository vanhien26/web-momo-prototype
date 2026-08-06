import confetti from 'canvas-confetti';

function fireConfetti() {
  confetti({
    particleCount: 80,
    spread: 70,
    origin: { y: 0.6 },
    colors: ["#eb2f96", "#c22181", "#16a34a", "#2563eb", "#d97706"]
  });
}

export { fireConfetti as f };
