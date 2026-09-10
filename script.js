document.documentElement.classList.add('js');

const navStyles = document.createElement('link');
navStyles.rel = 'stylesheet';
navStyles.href = 'nav.css';
document.head.appendChild(navStyles);

const motionStyles = document.createElement('link');
motionStyles.rel = 'stylesheet';
motionStyles.href = 'motion.css';
document.head.appendChild(motionStyles);

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(pointer:fine)').matches;
const currentFile = window.location.pathname.split('/').pop() || 'index.html';

const navigation = [
  ['projects.html', 'Projects'],
  ['engineering.html', 'Engineering'],
  ['results.html', 'Results'],
  ['experience.html', 'Experience'],
  ['automation.html', 'Automation']
];

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

const ambient = document.createElement('div');
ambient.className = 'motion-ambient';
ambient.setAttribute('aria-hidden', 'true');
ambient.innerHTML = '<div class="motion-grid"></div><div class="motion-light"></div><div class="motion-noise"></div>';
document.body.prepend(ambient);

const socialRail = document.createElement('aside');
socialRail.className = 'social-rail';
socialRail.setAttribute('aria-label', 'Profiles');
socialRail.innerHTML = `
  <a href="https://www.linkedin.com/in/rasmus-lantz" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
  <a href="https://github.com/rasmuslantz" target="_blank" rel="noreferrer" aria-label="GitHub">gh</a>`;
document.body.appendChild(socialRail);

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
      <span><a href="https://www.linkedin.com/in/rasmus-lantz" target="_blank" rel="noreferrer">LinkedIn ↗</a> · <a href="https://github.com/rasmuslantz" target="_blank" rel="noreferrer">GitHub ↗</a></span>
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

if (currentFile === 'index.html' || currentFile === '') {
  const hero = document.querySelector('.hero');
  if (hero) {
    const visual = document.createElement('div');
    visual.className = 'hero-visual';
    visual.setAttribute('aria-hidden', 'true');
    visual.innerHTML = `
      <svg viewBox="0 0 760 650" role="presentation">
        <path class="hero-path" d="M80 510 C170 380 230 455 310 330 S470 190 650 95"/>
        <path class="hero-path hero-path-strong" d="M45 175 C165 105 225 250 355 195 S535 250 705 165"/>
        <path class="hero-path" d="M180 610 C285 540 330 505 390 410 S555 370 700 445"/>
        <circle class="hero-node" cx="80" cy="510" r="5"/><circle class="hero-node accent" cx="310" cy="330" r="6"/><circle class="hero-node" cx="650" cy="95" r="5"/>
        <circle class="hero-node" cx="45" cy="175" r="4"/><circle class="hero-node" cx="355" cy="195" r="5"/><circle class="hero-node accent" cx="705" cy="165" r="5"/>
        <circle class="hero-node" cx="180" cy="610" r="4"/><circle class="hero-node" cx="390" cy="410" r="5"/><circle class="hero-node" cx="700" cy="445" r="5"/>
      </svg>`;
    hero.appendChild(visual);
  }
}

document.querySelectorAll('.section-heading').forEach((heading, index) => {
  heading.dataset.sectionIndex = String(index + 1).padStart(2, '0');
});

document.querySelectorAll('.page-hero, .hero').forEach((section) => {
  if (!section.querySelector('.scroll-rule')) {
    const rule = document.createElement('div');
    rule.className = 'scroll-rule';
    rule.setAttribute('aria-hidden', 'true');
    section.appendChild(rule);
  }
});

if (!reducedMotion) {
  const heroTitle = document.querySelector('.hero h1');
  if (heroTitle && !heroTitle.dataset.motionSplit) {
    const words = heroTitle.textContent.trim().split(/\s+/);
    const label = words.join(' ');
    heroTitle.setAttribute('aria-label', label);
    heroTitle.dataset.motionSplit = 'true';
    heroTitle.innerHTML = words.map((word, index) =>
      `<span class="motion-word" aria-hidden="true" style="animation-delay:${.12 + index * .055}s">${word}</span>${index < words.length - 1 ? '<span class="motion-word-space" aria-hidden="true"> </span>' : ''}`
    ).join('');
  }
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const progress = document.querySelector('.page-progress');
const siteHeader = document.querySelector('.site-header');
let ticking = false;
const updateScrollEffects = () => {
  ticking = false;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const value = max > 0 ? window.scrollY / max : 0;
  if (progress) progress.style.transform = `scaleX(${Math.min(1, Math.max(0, value))})`;
  document.documentElement.style.setProperty('--scroll-progress', value.toFixed(4));
  if (siteHeader) siteHeader.classList.toggle('is-scrolled', window.scrollY > 28);
  const aside = document.querySelector('.hero-aside');
  if (aside && window.scrollY < window.innerHeight) {
    aside.style.setProperty('--hero-parallax', `${Math.min(window.scrollY * .055, 28)}px`);
  }
};
const onScroll = () => {
  if (!ticking) {
    requestAnimationFrame(updateScrollEffects);
    ticking = true;
  }
};
window.addEventListener('scroll', onScroll, { passive: true });
updateScrollEffects();

if (!reducedMotion && finePointer) {
  let pointerFrame = 0;
  window.addEventListener('pointermove', (event) => {
    cancelAnimationFrame(pointerFrame);
    pointerFrame = requestAnimationFrame(() => {
      document.documentElement.style.setProperty('--motion-x', `${event.clientX}px`);
      document.documentElement.style.setProperty('--motion-y', `${event.clientY}px`);
    });
  }, { passive: true });
}

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

if (!reducedMotion && finePointer) {
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

  document.querySelectorAll('.button, .nav-cta, .social-rail a').forEach((element) => {
    element.classList.add('magnetic');
    element.addEventListener('pointermove', (event) => {
      const rect = element.getBoundingClientRect();
      const x = event.clientX - (rect.left + rect.width / 2);
      const y = event.clientY - (rect.top + rect.height / 2);
      element.style.transform = `translate(${x * .12}px, ${y * .12}px)`;
    });
    element.addEventListener('pointerleave', () => { element.style.transform = ''; });
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
        { opacity: 0, transform: 'translateY(6px)' }
      ], { duration: 165, easing: 'ease', fill: 'forwards' }).finished.finally(() => { window.location.href = target.href; });
    });
  });
}
