document.documentElement.classList.add('js');

const navStyles = document.createElement('link');
navStyles.rel = 'stylesheet';
navStyles.href = 'nav.css';
document.head.appendChild(navStyles);

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const navigation = [
  ['projects.html', 'Projects'],
  ['engineering.html', 'Engineering'],
  ['results.html', 'Results'],
  ['experience.html', 'Experience'],
  ['automation.html', 'Automation']
];

const currentFile = window.location.pathname.split('/').pop() || 'index.html';
const nav = document.querySelector('.nav');
if (nav) {
  nav.innerHTML = navigation.map(([href, label]) => {
    const active = currentFile === href ? ' class="active" aria-current="page"' : '';
    return `<a href="${href}"${active}>${label}</a>`;
  }).join('');
}

const navWrap = document.querySelector('.nav-wrap');
const navCta = document.querySelector('.nav-cta');
if (navCta) {
  navCta.href = 'contact.html';
  navCta.textContent = currentFile === 'contact.html' ? 'Contact' : 'Contact ↗';
  if (currentFile === 'contact.html') navCta.classList.add('active');
}

if (navWrap) {
  const toggle = document.createElement('button');
  toggle.className = 'menu-toggle';
  toggle.type = 'button';
  toggle.setAttribute('aria-label', 'Open navigation');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.innerHTML = '<span></span><span></span>';
  navWrap.insertBefore(toggle, navCta || null);

  const mobileMenu = document.createElement('div');
  mobileMenu.className = 'mobile-menu';
  mobileMenu.setAttribute('aria-hidden', 'true');
  mobileMenu.innerHTML = `
    <nav aria-label="Mobile navigation">
      <a href="./">Home <span>00</span></a>
      ${navigation.map(([href, label], index) => `<a href="${href}">${label}<span>0${index + 1}</span></a>`).join('')}
      <a href="contact.html">Contact <span>06</span></a>
    </nav>
    <div class="mobile-menu-meta">
      <span>Rasmus Lantz</span>
      <span>Software · AI · Automation</span>
    </div>`;
  document.body.appendChild(mobileMenu);

  const closeMenu = () => {
    document.body.classList.remove('menu-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation');
    mobileMenu.setAttribute('aria-hidden', 'true');
  };
  const openMenu = () => {
    document.body.classList.add('menu-open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close navigation');
    mobileMenu.setAttribute('aria-hidden', 'false');
  };

  toggle.addEventListener('click', () => document.body.classList.contains('menu-open') ? closeMenu() : openMenu());
  mobileMenu.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  window.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });
}

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
      ], { duration: 150, easing: 'ease', fill: 'forwards' }).finished.finally(() => { window.location.href = target.href; });
    });
  });
}
