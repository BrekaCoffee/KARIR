// 👀 Observer untuk efek fade-in saat scroll
document.addEventListener('DOMContentLoaded', () => {
  const fadeEl = document.querySelector('.fade-in');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });

  observer.observe(fadeEl);
});

// ⏱️ Sembunyikan loading setelah 3 detik
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loading-screen').style.display = 'none';
    document.getElementById('main-content').classList.remove('hidden');
  }, 3000);
});
