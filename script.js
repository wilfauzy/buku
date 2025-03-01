// Retro Pixel Animation
document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.retro-header, .retro-footer');
  elements.forEach(el => {
    el.style.animation = 'pixelate 2s infinite';
  });
});

// Keyframes for Pixel Animation
const styleSheet = document.createElement('style');
styleSheet.innerHTML = `
  @keyframes pixelate {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
`;
document.head.appendChild(styleSheet);