'use strict';

const RISK_CLASS = {
  'Critique': 'badge-crit', 'Critical': 'badge-crit',
  'Élevé':    'badge-hard', 'High':     'badge-hard',
  'Moyen':    'badge-medium','Medium':  'badge-medium',
  'Bas':      'badge-easy', 'Low':      'badge-easy',
};
const DIFF_CLASS = {
  'Easy': 'badge-easy', 'Medium': 'badge-medium',
  'Hard': 'badge-hard', 'Insane': 'badge-crit',
};

let REPORTS_DATA = null;
let gridEl, prevBtn, nextBtn;

function lang() {
  return (typeof currentLang !== 'undefined') ? currentLang
    : (localStorage.getItem('sk-lang') === 'en' ? 'en' : 'fr');
}

function descOf(r) {
  return (lang() === 'en' && r.description_en) ? r.description_en : r.description;
}

function riskLabel(r) {
  if (lang() === 'en') {
    return ({ 'Critique': 'Critical', 'Élevé': 'High', 'Moyen': 'Medium', 'Bas': 'Low' })[r.risk] || r.risk;
  }
  return r.risk;
}

function viewLabel() { return lang() === 'en' ? 'View report' : 'Voir le rapport'; }
function pendingLabel(){ return lang() === 'en' ? 'Report in progress' : 'Rapport en cours'; }

window.renderReports = function(l) {
  if (!REPORTS_DATA || !gridEl) return;
  gridEl.innerHTML = REPORTS_DATA.map(r => `
    <div class="report-card ${!r.available ? 'disabled' : ''}">
      <div class="report-card-header">
        <span class="badge ${RISK_CLASS[r.risk] || 'badge-crit'}">${riskLabel(r)}</span>
        <span class="badge ${DIFF_CLASS[r.difficulty] || ''}">${r.difficulty}</span>
      </div>
      <h3 class="report-card-title">${r.name}</h3>
      <p class="report-card-meta">${r.type}</p>
      <p class="report-card-desc">${descOf(r)}</p>
      <div class="report-card-footer">
        ${r.available
          ? `<a href="${r.file}" target="_blank" class="btn">${viewLabel()}</a>`
          : `<span class="btn btn-disabled">${pendingLabel()}</span>`}
      </div>
    </div>
  `).join('');

  /* re-observer reveal */
  gridEl.querySelectorAll('.report-card').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });
  if (typeof updateArrows === 'function') updateArrows();
};

function updateArrows() {
  if (!gridEl) return;
  prevBtn.disabled = gridEl.scrollLeft <= 0;
  nextBtn.disabled = gridEl.scrollLeft + gridEl.clientWidth >= gridEl.scrollWidth - 1;
}

fetch('reports/reports.json')
  .then(r => r.json())
  .then(reports => {
    REPORTS_DATA = reports;
    gridEl = document.getElementById('reports-grid');
    prevBtn = document.getElementById('prev-btn');
    nextBtn = document.getElementById('next-btn');
    if (!gridEl) return;

    window.renderReports(lang());

    function scrollStep() {
      const card = gridEl.querySelector('.report-card');
      return card ? card.offsetWidth + 20 : 320;
    }
    prevBtn.addEventListener('click', () => gridEl.scrollBy({ left: -scrollStep(), behavior: 'smooth' }));
    nextBtn.addEventListener('click', () => gridEl.scrollBy({ left:  scrollStep(), behavior: 'smooth' }));
    gridEl.addEventListener('scroll', updateArrows, { passive: true });
    updateArrows();
  })
  .catch(e => {
    const g = document.getElementById('reports-grid');
    if (g) g.innerHTML = '<p>' + (lang() === 'en' ? 'Error loading reports.' : 'Erreur de chargement des rapports.') + '</p>';
    console.error(e);
  });