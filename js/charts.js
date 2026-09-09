/* =====================================================================
   Gráficas (Chart.js 4): comercio exterior, radar Hofstede, dona religión.
   Cada gráfica se crea cuando entra al viewport.
   ===================================================================== */

(function () {
  'use strict';

  const K = window.KIT;
  const ACCENT = '#F5B82E';
  const WHITE = '#F5F5F7';
  const INK = '#1D1D1F';
  const MUTED_DARK = 'rgba(245,245,247,0.6)';
  const MUTED_LIGHT = '#6e6e73';

  if (window.Chart) {
    Chart.defaults.font.family = "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Inter Tight', system-ui, sans-serif";
    Chart.defaults.font.size = 12;
    Chart.defaults.plugins.tooltip.backgroundColor = 'rgba(22,22,26,0.92)';
    Chart.defaults.plugins.tooltip.titleFont = { weight: '600', size: 13 };
    Chart.defaults.plugins.tooltip.padding = 12;
    Chart.defaults.plugins.tooltip.cornerRadius = 12;
    Chart.defaults.plugins.tooltip.displayColors = false;
  }

  const fmt = (n, dec) => n.toLocaleString('es-MX', { minimumFractionDigits: dec, maximumFractionDigits: dec });

  function whenVisible(el, cb) {
    if (!el) return;
    if (!('IntersectionObserver' in window)) { cb(); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { io.disconnect(); cb(); } });
    }, { threshold: 0.2 });
    io.observe(el);
  }

  /* ---------- Comercio exterior (sobre vidrio oscuro) ---------- */

  function initTrade() {
    const canvas = document.getElementById('tradeChart');
    if (!canvas || !window.Chart) return;
    const note = document.getElementById('tradeNote');
    const source = document.getElementById('tradeSource');
    const tabs = Array.from(document.querySelectorAll('.seg__btn[data-chart]'));
    const thumb = document.getElementById('segThumb');
    let chart = null;
    let current = 'socios';

    const isPercent = (key) => key === 'productos';

    function dataFor(key) {
      const d = K[key];
      const colors = d.labels.map((l, i) => {
        if (i === 0 && key !== 'productos') return WHITE;
        if (key === 'productos' && l === 'Otros') return 'rgba(245,245,247,0.25)';
        return ACCENT;
      });
      return {
        labels: d.labels,
        datasets: [{ data: d.valores, backgroundColor: colors, hoverBackgroundColor: colors.map((c) => (c === ACCENT ? '#FFD166' : c)), borderWidth: 0, borderRadius: 6, borderSkipped: false, barPercentage: 0.72, categoryPercentage: 0.9 }]
      };
    }

    function moveThumb(btn) {
      if (!thumb || !btn) return;
      thumb.style.left = btn.offsetLeft + 'px';
      thumb.style.width = btn.offsetWidth + 'px';
    }

    function build(key) {
      current = key;
      const d = K[key];
      note.textContent = d.nota;
      source.textContent = 'Fuente: ' + d.fuente;
      const pct = isPercent(key);
      if (chart) {
        chart.data = dataFor(key);
        chart.options.scales.x.ticks.callback = (v) => (pct ? v + ' %' : fmt(v, 0));
        chart.options.scales.x.max = pct ? 32 : undefined;
        chart.update();
        return;
      }
      chart = new Chart(canvas, {
        type: 'bar',
        data: dataFor(key),
        options: {
          indexAxis: 'y', responsive: true, maintainAspectRatio: false,
          animation: { duration: 1000, easing: 'easeOutQuart' },
          layout: { padding: { right: 12 } },
          scales: {
            x: { grid: { color: 'rgba(255,255,255,0.08)', drawTicks: false }, border: { display: false }, ticks: { color: MUTED_DARK, callback: (v) => (pct ? v + ' %' : fmt(v, 0)), padding: 6 }, max: pct ? 32 : undefined },
            y: { grid: { display: false }, border: { display: false }, ticks: { color: WHITE, font: { weight: '500', size: 12.5 }, padding: 8 } }
          },
          plugins: {
            legend: { display: false },
            tooltip: { callbacks: { label: (ctx) => (isPercent(current) ? fmt(ctx.parsed.x, 1) + ' % de las exportaciones' : fmt(ctx.parsed.x, 1) + ' mil millones de euros') } }
          }
        }
      });
    }

    tabs.forEach((t) => {
      t.addEventListener('click', () => {
        tabs.forEach((x) => { x.classList.remove('is-active'); x.setAttribute('aria-selected', 'false'); });
        t.classList.add('is-active'); t.setAttribute('aria-selected', 'true');
        moveThumb(t);
        build(t.dataset.chart);
      });
    });
    const active = tabs.find((t) => t.classList.contains('is-active'));
    requestAnimationFrame(() => moveThumb(active));
    window.addEventListener('resize', () => moveThumb(tabs.find((t) => t.classList.contains('is-active'))));
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => moveThumb(tabs.find((t) => t.classList.contains('is-active'))));

    whenVisible(canvas.closest('.trade__chart'), () => build('socios'));
  }

  /* ---------- Hofstede (radar, sobre vidrio claro) ---------- */

  function initHofstede() {
    const canvas = document.getElementById('hofChart');
    if (!canvas || !window.Chart) return;
    const H = K.hofstede;
    const chips = document.getElementById('hofChips');
    const src = document.getElementById('hofSource');
    if (src) src.textContent = 'Fuente: ' + H.fuente;
    const active = { Alemania: true, 'México': true, 'EE. UU.': false };
    let chart = null;

    const rgba = (hex, a) => { const n = parseInt(hex.slice(1), 16); return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`; };

    const datasets = () => Object.keys(H.paises).map((name) => {
      const p = H.paises[name];
      return { label: name, data: p.valores, borderColor: p.color, backgroundColor: rgba(p.color, name === 'Alemania' ? 0.3 : 0.14), pointBackgroundColor: p.color, pointBorderColor: '#fff', pointRadius: 4, pointHoverRadius: 6, borderWidth: name === 'Alemania' ? 2.5 : 1.75, hidden: !active[name] };
    });

    Object.keys(H.paises).forEach((name) => {
      const b = document.createElement('button');
      b.className = 'chip' + (active[name] ? ' is-active' : '');
      b.setAttribute('aria-pressed', String(active[name]));
      b.style.setProperty('--chip-color', H.paises[name].color);
      b.innerHTML = `<i></i>${name}`;
      b.addEventListener('click', () => {
        active[name] = !active[name];
        b.classList.toggle('is-active', active[name]);
        b.setAttribute('aria-pressed', String(active[name]));
        if (chart) { chart.setDatasetVisibility(Object.keys(H.paises).indexOf(name), active[name]); chart.update(); }
      });
      chips.appendChild(b);
    });

    whenVisible(canvas.closest('.hof__canvas'), () => {
      chart = new Chart(canvas, {
        type: 'radar',
        data: { labels: H.dimensiones, datasets: datasets() },
        options: {
          responsive: true, maintainAspectRatio: false,
          animation: { duration: 1100, easing: 'easeOutQuart' },
          scales: { r: { min: 0, max: 100, ticks: { display: false, stepSize: 25 }, grid: { color: 'rgba(0,0,0,0.08)' }, angleLines: { color: 'rgba(0,0,0,0.08)' }, pointLabels: { color: INK, font: { weight: '500', size: 12 }, padding: 8 } } },
          plugins: { legend: { display: false }, tooltip: { callbacks: { label: (ctx) => `${ctx.dataset.label}: ${ctx.parsed.r}` } } }
        }
      });
    });
  }

  /* ---------- Religión (dona, sobre vidrio oscuro) ---------- */

  function initReligion() {
    const canvas = document.getElementById('relChart');
    if (!canvas || !window.Chart) return;
    const R = K.religion;
    const big = document.getElementById('relBig');
    const small = document.getElementById('relSmall');
    const src = document.getElementById('relSource');
    if (src) src.textContent = 'Fuente: ' + R.fuente;
    whenVisible(canvas.closest('.rel__donut'), () => {
      new Chart(canvas, {
        type: 'doughnut',
        data: { labels: R.labels, datasets: [{ data: R.valores, backgroundColor: R.colores, borderColor: 'rgba(0,0,0,0)', borderWidth: 2, hoverOffset: 8, spacing: 2 }] },
        options: {
          responsive: true, maintainAspectRatio: false, cutout: '74%',
          animation: { animateRotate: true, duration: 1300, easing: 'easeOutQuart' },
          onHover: (evt, els) => {
            if (els.length) { const i = els[0].index; big.textContent = fmt(R.valores[i], R.valores[i] % 1 ? 1 : 0) + ' %'; small.textContent = R.labels[i].toLowerCase(); }
            else { big.textContent = '47 %'; small.textContent = 'sin religión'; }
          },
          plugins: { legend: { display: false }, tooltip: { callbacks: { label: (ctx) => ' ' + fmt(ctx.parsed, ctx.parsed % 1 ? 1 : 0) + ' %' } } }
        }
      });
    });
  }

  window.KitCharts = { init() { initTrade(); initHofstede(); initReligion(); } };
})();
