'use strict';

/* ── Navbar mobile toggle ───────────────────────────────────────────────── */
const toggle  = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-links');

if (toggle && navList) {
  toggle.addEventListener('click', () => {
    const open = navList.classList.toggle('open');
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open);
  });

  // close on link click
  navList.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navList.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', false);
    });
  });

  // close on outside click
  document.addEventListener('click', e => {
    if (!toggle.contains(e.target) && !navList.contains(e.target)) {
      navList.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', false);
    }
  });
}

/* ── Active nav link ────────────────────────────────────────────────────── */
(function markActive() {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href').split('/').pop() || 'index.html';
    if (href === page) a.classList.add('active');
  });
})();

/* ── Smooth scroll for anchor links ────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = 70;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* ── Scroll-reveal (Intersection Observer) ──────────────────────────────── */
const revealStyle = document.createElement('style');
revealStyle.textContent = `
  .reveal { opacity: 0; transform: translateY(20px); transition: opacity .5s ease, transform .5s ease; }
  .reveal.visible { opacity: 1; transform: none; }
`;
document.head.appendChild(revealStyle);

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.card, .report-card, .kc-item, .contact-item, .cvss-item, .tool-cat').forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

/* ── Navbar shrink on scroll ────────────────────────────────────────────── */
const navbar = document.querySelector('.navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.style.borderBottomColor = window.scrollY > 10 ? 'rgba(30,30,30,.8)' : 'var(--border)';
  }, { passive: true });
}
