const RISK_CLASS = {
  'Critique': 'badge-crit',
  'Élevé':    'badge-hard',
  'Moyen':    'badge-medium',
  'Bas':      'badge-easy',
};
const DIFF_CLASS = {
  'Easy':   'badge-easy',
  'Medium': 'badge-medium',
  'Hard':   'badge-hard',
  'Insane': 'badge-crit',
};

fetch('reports/reports.json')
  .then(r => r.json())
  .then(reports => {
    const grid = document.getElementById('reports-grid');
    grid.innerHTML = reports.map(r => `
      <div class="report-card ${!r.available ? 'disabled' : ''}">
        <div class="report-card-header">
          <span class="badge ${RISK_CLASS[r.risk] || 'badge-crit'}">${r.risk}</span>
          <span class="badge ${DIFF_CLASS[r.difficulty] || ''}">${r.difficulty}</span>
        </div>
        <h3>${r.name}</h3>
        <p>${r.type}</p>
        <p style="font-size:.85rem;color:var(--text-muted)">${r.description}</p>
        ${r.available
          ? `<a href="${r.file}" target="_blank" class="btn">Voir le rapport</a>`
          : `<span class="btn btn-disabled">Rapport en cours</span>`
        }
      </div>
    `).join('');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
      });
    }, { threshold: 0.1 });
    grid.querySelectorAll('.report-card').forEach(el => {
      el.classList.add('reveal');
      observer.observe(el);
    });

    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    function scrollStep() {
      const card = grid.querySelector('.report-card');
      return card ? card.offsetWidth + 20 : 320;
    }

    function updateArrows() {
      prevBtn.disabled = grid.scrollLeft <= 0;
      nextBtn.disabled = grid.scrollLeft + grid.clientWidth >= grid.scrollWidth - 1;
    }

    prevBtn.addEventListener('click', () => {
      grid.scrollBy({ left: -scrollStep(), behavior: 'smooth' });
    });
    nextBtn.addEventListener('click', () => {
      grid.scrollBy({ left: scrollStep(), behavior: 'smooth' });
    });

    grid.addEventListener('scroll', updateArrows, { passive: true });
    updateArrows();
  })
  .catch(e => {
    document.getElementById('reports-grid').innerHTML = '<p>Erreur de chargement des rapports.</p>';
    console.error(e);
  });
