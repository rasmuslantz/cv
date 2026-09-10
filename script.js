document.documentElement.classList.add('js');

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const progress = document.querySelector('.page-progress');
const updateProgress = () => {
  if (!progress) return;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const value = max > 0 ? window.scrollY / max : 0;
  progress.style.transform = `scaleX(${Math.min(1, Math.max(0, value))})`;
};
window.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealItems = [...document.querySelectorAll('.reveal')];

if (!reducedMotion && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const siblings = [...(entry.target.parentElement?.querySelectorAll(':scope > .reveal') || [])];
      const index = Math.max(0, siblings.indexOf(entry.target));
      entry.target.style.transitionDelay = `${Math.min(index * 55, 220)}ms`;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -28px 0px' });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

if (!reducedMotion && window.matchMedia('(pointer:fine)').matches) {
  document.querySelectorAll('.tilt-card').forEach((card) => {
    card.addEventListener('pointermove', (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      card.style.setProperty('--ry', `${x * 1.4}deg`);
      card.style.setProperty('--rx', `${y * -1.1}deg`);
    });
    card.addEventListener('pointerleave', () => {
      card.style.setProperty('--ry', '0deg');
      card.style.setProperty('--rx', '0deg');
    });
  });
}

if (!reducedMotion) {
  document.querySelectorAll('a[href]').forEach((link) => {
    link.addEventListener('click', (event) => {
      if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const href = link.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return;
      const target = new URL(link.href, window.location.href);
      if (target.origin !== window.location.origin || link.target === '_blank') return;
      event.preventDefault();
      document.body.animate([
        { opacity: 1, transform: 'translateY(0)' },
        { opacity: 0, transform: 'translateY(5px)' }
      ], { duration: 150, easing: 'ease', fill: 'forwards' }).finished.finally(() => {
        window.location.href = target.href;
      });
    });
  });
}
