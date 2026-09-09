/* =====================================================================
   Gráficas (Chart.js 4): comercio exterior, radar Hofstede, dona religión.
   Cada gráfica se crea cuando entra al viewport para que su animación
   se vea completa.
   ===================================================================== */

(function () {
  'use strict';

  const K = window.KIT;
  const GOLD = '#E3B02F';
  const GRAPHIT = '#14181F';
  const STAHL = '#8A8F96';
  const ROT = '#C8102E';

  if (window.Chart) {
    Chart.defaults.font.family = "'Archivo', 'Helvetica Neue', Arial, sans-serif";
    Chart.defaults.font.size = 12;
    Chart.defaults.color = 'rgba(20,24,31,.7)';
    Chart.defaults.plugins.tooltip.backgroundColor = GRAPHIT;
    Chart.defaults.plugins.tooltip.titleFont = { weight: '700', size: 13 };
    Chart.defaults.plugins.tooltip.bodyFont = { size: 12 };
    Chart.defaults.plugins.tooltip.padding = 12;
    Chart.defaults.plugins.tooltip.cornerRadius = 2;
    Chart.defaults.plugins.tooltip.displayColors = false;
  }

  const fmt = (n, dec) => n.toLocaleString('es-MX', { minimumFractionDigits: dec, maximumFractionDigits: dec });

  function whenVisible(el, cb) {
    if (!el) return;
    if (!('IntersectionObserver' in window)) { cb(); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { io.disconnect(); cb(); } });
    }, { threshold: 0.25 });
    io.observe(el);
  }

  /* ---------- Comercio exterior ---------- */

  function initTrade() {
    const canvas = document.getElementById('tradeChart');
    if (!canvas || !window.Chart) return;
    const note = document.getElementById('tradeNote');
    const source = document.getElementById('tradeSource');
    const tabs = Array.from(document.querySelectorAll('.tab[data-chart]'));
    let chart = null;
    let current = 'socios';

    function isPercent(key) { return key === 'productos'; }

    function datasetFor(key) {
      const d = K[key];
      const colors = d.labels.map((l, i) => {
        if (key === 'socios' && i === 0) return GRAPHIT;
        if (key === 'exportDestinos' && i === 0) return GRAPHIT;
        if (key === 'importOrigen' && i === 0) return GRAPHIT;
        if (key === 'productos' && l === 'Otros') return '#C9CBC6';
        return GOLD;
      });
      return {
        labels: d.labels,
        datasets: [{
          data: d.valores,
          backgroundColor: colors,
          hoverBackgroundColor: colors.map((c) => (c === GOLD ? '#F2CB5E' : c)),
          borderWidth: 0,
          borderRadius: 2,
          barPercentage: 0.78,
          categoryPercentage: 0.9
        }]
      };
    }

    function build(key) {
      current = key;
      const d = K[key];
      note.textContent = d.nota;
      source.textContent = 'Fuente: ' + d.fuente;
      const data = datasetFor(key);
      const pct = isPercent(key);

      if (chart) {
        chart.data = data;
        chart.options.scales.x.ticks.callback = (v) => (pct ? v + ' %' : fmt(v, 0));
        chart.options.scales.x.max = pct ? 32 : undefined;
        chart.update();
        return;
      }

      chart = new Chart(canvas, {
        type: 'bar',
        data,
        options: {
          indexAxis: 'y',
          responsive: true,
          maintainAspectRatio: false,
          animation: { duration: 1100, easing: 'easeOutQuart' },
          layout: { padding: { right: 24 } },
          scales: {
            x: {
              grid: { color: 'rgba(20,24,31,.08)', drawTicks: false },
              border: { display: false },
              ticks: { callback: (v) => (pct ? v + ' %' : fmt(v, 0)), padding: 8 },
              max: pct ? 32 : undefined
            },
            y: {
              grid: { display: false },
              border: { display: false },
              ticks: { font: { weight: '600', size: 12.5 }, color: GRAPHIT, padding: 10 }
            }
          },
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: (ctx) => {
                  const v = ctx.parsed.x;
                  if (isPercent(current)) return fmt(v, 1) + ' % de las exportaciones';
                  return fmt(v, 1) + ' mil millones de euros';
                }
              }
            }
          }
        }
      });
    }

    tabs.forEach((t) => {
      t.addEventListener('click', () => {
        tabs.forEach((x) => { x.classList.remove('is-active'); x.setAttribute('aria-selected', 'false'); });
        t.classList.add('is-active');
        t.setAttribute('aria-selected', 'true');
        build(t.dataset.chart);
      });
    });

    whenVisible(canvas.closest('.trade__chart'), () => build('socios'));
  }

  /* ---------- Hofstede (radar) ---------- */

  function initHofstede() {
    const canvas = document.getElementById('hofChart');
    if (!canvas || !window.Chart) return;
    const H = K.hofstede;
    const chips = document.getElementById('hofChips');
    const src = document.getElementById('hofSource');
    if (src) src.textContent = 'Fuente: ' + H.fuente;

    const active = { Alemania: true, 'México': true, 'EE. UU.': false };
    let chart = null;

    function hexToRgba(hex, a) {
      const n = parseInt(hex.slice(1), 16);
      return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`;
    }

    function datasets() {
      return Object.keys(H.paises).map((name) => {
        const p = H.paises[name];
        return {
          label: name,
          data: p.valores,
          borderColor: p.color,
          backgroundColor: hexToRgba(p.color, name === 'Alemania' ? 0.28 : 0.12),
          pointBackgroundColor: p.color,
          pointBorderColor: '#F7F7F4',
          pointRadius: 4,
          pointHoverRadius: 6,
          borderWidth: name === 'Alemania' ? 2.5 : 1.75,
          hidden: !active[name]
        };
      });
    }

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
        if (chart) {
          const idx = Object.keys(H.paises).indexOf(name);
          chart.setDatasetVisibility(idx, active[name]);
          chart.update();
        }
      });
      chips.appendChild(b);
    });

    whenVisible(canvas.closest('.hofstede__canvas'), () => {
      chart = new Chart(canvas, {
        type: 'radar',
        data: { labels: H.dimensiones, datasets: datasets() },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          animation: { duration: 1200, easing: 'easeOutQuart' },
          scales: {
            r: {
              min: 0, max: 100,
              ticks: { stepSize: 25, display: false },
              grid: { color: 'rgba(20,24,31,.12)', circular: false },
              angleLines: { color: 'rgba(20,24,31,.12)' },
              pointLabels: { font: { weight: '600', size: 12 }, color: GRAPHIT, padding: 10 }
            }
          },
          plugins: {
            legend: { display: false },
            tooltip: { callbacks: { label: (ctx) => `${ctx.dataset.label}: ${ctx.parsed.r}` } }
          }
        }
      });
    });
  }

  /* ---------- Religión (dona) ---------- */

  function initReligion() {
    const canvas = document.getElementById('relChart');
    if (!canvas || !window.Chart) return;
    const R = K.religion;
    const big = document.getElementById('relBig');
    const small = document.getElementById('relSmall');
    const src = document.getElementById('relSource');
    if (src) src.textContent = 'Fuente: ' + R.fuente;

    whenVisible(canvas.closest('.religion__donut'), () => {
      new Chart(canvas, {
        type: 'doughnut',
        data: {
          labels: R.labels,
          datasets: [{ data: R.valores, backgroundColor: R.colores, borderColor: '#F7F7F4', borderWidth: 3, hoverOffset: 10 }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: '70%',
          animation: { animateRotate: true, duration: 1400, easing: 'easeOutQuart' },
          onHover: (evt, els) => {
            if (els.length) {
              const i = els[0].index;
              big.textContent = fmt(R.valores[i], R.valores[i] % 1 ? 1 : 0) + ' %';
              small.textContent = R.labels[i].toLowerCase();
            } else {
              big.textContent = '47 %';
              small.textContent = 'sin religión';
            }
          },
          plugins: {
            legend: { position: 'bottom', labels: { boxWidth: 10, boxHeight: 10, padding: 14, font: { weight: '600' } } },
            tooltip: { callbacks: { label: (ctx) => ' ' + fmt(ctx.parsed, ctx.parsed % 1 ? 1 : 0) + ' % de la población' } }
          }
        }
      });
    });
  }

  window.KitCharts = { init() { initTrade(); initHofstede(); initReligion(); } };
})();
