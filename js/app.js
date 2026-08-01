import { PROJECTS, CODE_EXAMPLES } from './projects-data.js';

let activeCategory = 'all';
let searchQuery = '';

document.addEventListener('DOMContentLoaded', () => {
  initBackgroundCanvas();
  renderCatalog();
  initSearchAndFilters();
  initCodeExamples();
  initStatsCounter();
});

/* Canvas Particle Grid Background */
function initBackgroundCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = Array.from({ length: 45 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: Math.random() * 1.8 + 0.6,
    vx: (Math.random() - 0.5) * 0.3,
    vy: (Math.random() - 0.5) * 0.3,
    alpha: Math.random() * 0.5 + 0.2
  }));

  function draw() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(139, 92, 246, ${p.alpha})`;
      ctx.shadowBlur = 8;
      ctx.shadowColor = '#8b5cf6';
      ctx.fill();
    });

    requestAnimationFrame(draw);
  }

  draw();
}

/* Search and Filter Handlers */
function initSearchAndFilters() {
  const searchInput = document.getElementById('search-input');
  const filterBtns = document.querySelectorAll('.filter-btn');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderCatalog();
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.dataset.category || 'all';
      renderCatalog();
    });
  });
}

/* Render Projects Grid */
function renderCatalog() {
  const catalogGrid = document.getElementById('catalog-grid');
  if (!catalogGrid) return;

  const filtered = PROJECTS.filter(project => {
    // Exclude featured items from catalog grid if desired, or show all
    const matchesCategory = activeCategory === 'all' || project.category === activeCategory;
    const matchesSearch = !searchQuery || 
      project.title.toLowerCase().includes(searchQuery) ||
      project.description.toLowerCase().includes(searchQuery) ||
      project.system.toLowerCase().includes(searchQuery) ||
      project.tech.some(t => t.toLowerCase().includes(searchQuery));

    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    catalogGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
        <p style="font-size: 1.1rem; margin-bottom: 0.5rem;">No repositories found matching "${searchQuery}"</p>
        <span style="font-size: 0.9rem; color: var(--text-dim);">Try searching for SNES, Genesis, Sonic, Rust, or C++</span>
      </div>
    `;
    return;
  }

  catalogGrid.innerHTML = filtered.map(p => `
    <div class="project-card">
      <div>
        <div class="card-top">
          <span class="system-badge">${escapeHtml(p.systemBadge)}</span>
          <span class="version-tag">${escapeHtml(p.version)}</span>
        </div>
        <h3 class="project-title">${escapeHtml(p.title)}</h3>
        <p class="project-desc">${escapeHtml(p.description)}</p>
        <div class="tag-list">
          ${p.tech.map(t => `<span class="tag">${escapeHtml(t)}</span>`).join('')}
        </div>
      </div>
      <div class="card-actions">
        ${p.demoUrl ? `
          <a href="${p.demoUrl}" target="_blank" rel="noopener" class="btn-card-launch">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            Launch Demo
          </a>
        ` : `
          <a href="${p.githubUrl}" target="_blank" rel="noopener" class="btn-card-launch" style="background: rgba(255,255,255,0.08);">
            View Spec
          </a>
        `}
        <a href="${p.githubUrl}" target="_blank" rel="noopener" class="btn-card-repo" title="View Source on GitHub">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
        </a>
      </div>
    </div>
  `).join('');
}

/* Code Snippet Tabs & Copying */
function initCodeExamples() {
  const codeContainer = document.getElementById('code-display');
  const codeTabs = document.querySelectorAll('.code-tab');
  const copyBtn = document.getElementById('btn-copy-code');

  if (!codeContainer) return;

  function updateCode(key) {
    if (CODE_EXAMPLES[key]) {
      codeContainer.textContent = CODE_EXAMPLES[key];
    }
  }

  codeTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      codeTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      updateCode(tab.dataset.snippet);
    });
  });

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(codeContainer.textContent).then(() => {
        const origText = copyBtn.innerHTML;
        copyBtn.innerHTML = `✓ Copied!`;
        setTimeout(() => {
          copyBtn.innerHTML = origText;
        }, 2000);
      });
    });
  }

  // Load default
  updateCode('snes');
}

/* Animated Counter for Hero Stats */
function initStatsCounter() {
  const statNumbers = document.querySelectorAll('.stat-number');
  statNumbers.forEach(numEl => {
    const target = parseInt(numEl.dataset.target, 10);
    if (isNaN(target)) return;

    let count = 0;
    const duration = 1200;
    const stepTime = Math.max(floor(duration / target), 30);
    
    const timer = setInterval(() => {
      count++;
      numEl.textContent = count;
      if (count >= target) {
        numEl.textContent = target + (numEl.dataset.suffix || '');
        clearInterval(timer);
      }
    }, stepTime);
  });
}

function floor(val) {
  return Math.floor(val);
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
