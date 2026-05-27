'use strict';

(async function loadReports() {
  const grid = document.getElementById('reports-grid');
  if (!grid) return;

  const DIFF_BADGE = {
    Hard:   'badge-hard',
    Medium: 'badge-medium',
    Easy:   'badge-easy',
  };
  const RISK_BADGE = {
    Critique: 'badge-crit',
    Élevé:    'badge-hard',
    Moyen:    'badge-medium',
    Bas:      'badge-easy',
  };

  const SVG_PDF = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z"
          stroke="currentColor" stroke-width="1.75" stroke-linejoin="round"/>
    <polyline points="14,2 14,8 20,8" stroke="currentColor" stroke-width="1.75"/>
  </svg>`;

  const SVG_CLOCK = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.75"/>
    <polyline points="12,6 12,12 16,14" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/>
  </svg>`;

  function buildCard(r) {
    const diffClass = DIFF_BADGE[r.difficulty] ?? 'badge-hard';
    const riskClass = RISK_BADGE[r.risk]       ?? 'badge-crit';
    const label     = r.available ? `Rapport ${r.name}` : `Rapport ${r.name} — en cours`;
    const footer    = r.available
      ? `<a href="${r.file}" class="btn" target="_blank" rel="noopener">${SVG_PDF} Voir le rapport</a>`
      : `<span class="btn btn-outline" aria-disabled="true">${SVG_CLOCK} Rapport en cours</span>`;

    return `
<article class="report-card${r.available ? '' : ' disabled'}" aria-label="${label}">
  <div class="report-card-header">
    <h2 class="report-card-title">${r.name}</h2>
  </div>
  <div class="report-card-meta">
    <span class="badge ${diffClass}">${r.difficulty}</span>
    <span class="badge badge-type">${r.type}</span>
    <span class="badge ${riskClass}">${r.risk}</span>
  </div>
  <p class="report-card-desc">${r.description}</p>
  <div class="report-card-footer">${footer}</div>
</article>`;
  }

  try {
    const res = await fetch('reports/reports.json');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const reports = await res.json();
    grid.innerHTML = reports.map(buildCard).join('');
  } catch {
    grid.innerHTML = `<p style="color:var(--text-muted);grid-column:1/-1">
      Impossible de charger les rapports.</p>`;
    return;
  }

  /* scroll-reveal for dynamically inserted cards — mirrors main.js logic */
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.1 });

  grid.querySelectorAll('.report-card').forEach(el => {
    el.classList.add('reveal');
    io.observe(el);
  });
})();
