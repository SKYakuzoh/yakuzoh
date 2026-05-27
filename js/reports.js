fetch('reports/reports.json')
  .then(r => r.json())
  .then(reports => {
    const grid = document.getElementById('reports-grid');
    grid.innerHTML = reports.map(r => `
      <div class="report-card ${!r.available ? 'disabled' : ''}">
        <div class="report-card-header">
          <span class="badge badge-crit">${r.risk}</span>
          <span class="badge">${r.difficulty}</span>
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
  })
  .catch(e => {
    document.getElementById('reports-grid').innerHTML = '<p>Erreur de chargement des rapports.</p>';
    console.error(e);
  });
