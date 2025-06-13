// 1. Body Ripple Effect
document.body.addEventListener('click', function (e) {
  // Don't ripple on links, buttons, images, form fields, or .profile-pic
  if (e.target.closest('a, button, img, input, textarea, .profile-pic')) return;
  const ripple = document.createElement('span');
  ripple.className = 'body-ripple';
  const size = 120;
  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left = (e.clientX - size / 2) + 'px';
  ripple.style.top = (e.clientY - size / 2) + 'px';
  document.body.appendChild(ripple);
  ripple.addEventListener('animationend', () => ripple.remove());
});

// 2. Intro Overlay Fade Out
window.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    const overlay = document.getElementById('intro-overlay');
    if (overlay) {
      overlay.style.opacity = '0';
      setTimeout(() => overlay.style.display = 'none', 1000);
    }
  }, 1500); // Show intro for 1.5 seconds
});

document.getElementById('contactForm').addEventListener('submit', function (e) {
  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();
  if (!name || !email || !message) {
    alert('Please fill out all fields.');
    e.preventDefault();
    return false;
  }
  // Optionally add more validation here
});
