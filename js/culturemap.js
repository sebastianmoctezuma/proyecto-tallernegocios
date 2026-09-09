/* =====================================================================
   Mapa cultural interactivo (escalas de Erin Meyer).
   Alemania y México fijos; el usuario arrastra su propio marcador.
   ===================================================================== */

(function () {
  'use strict';

  const K = window.KIT;
  const STORAGE = 'kit-de-cmap';

  function load() {
    try { return JSON.parse(localStorage.getItem(STORAGE) || '{}'); } catch (e) { return {}; }
  }
  function save(obj) {
    try { localStorage.setItem(STORAGE, JSON.stringify(obj)); } catch (e) { /* almacenamiento no disponible */ }
  }

  function init() {
    const root = document.getElementById('cmapScales');
    const summary = document.getElementById('cmapSummary');
    const src = document.getElementById('cmapSource');
    if (!root) return;
    const C = K.cultureMap;
    if (src) src.textContent = 'Fuente: ' + C.fuente;

    const stored = load();
    const you = {};
    C.escalas.forEach((s) => { you[s.id] = typeof stored[s.id] === 'number' ? stored[s.id] : s.mx; });

    const rows = C.escalas.map((s) => {
      const row = document.createElement('div');
      row.className = 'scale';
      row.dataset.id = s.id;
      row.innerHTML = `
        <div class="scale__meta">
          <div class="scale__name">${s.nombre}</div>
          <span class="scale__gap" data-gap></span>
          <button class="scale__toggle" type="button" aria-expanded="false">Leer la diferencia</button>
        </div>
        <div class="scale__track-wrap">
          <div class="scale__ends"><span>${s.izq}</span><span>${s.der}</span></div>
          <div class="scale__track" role="slider" aria-label="Tu posición en ${s.nombre}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${you[s.id]}" tabindex="0">
            <div class="scale__ticks"></div>
            <div class="scale__line"></div>
            <div class="scale__bridge" data-bridge></div>
            <div class="scale__dot scale__dot--de" style="left:${s.de}%"><span>DE</span></div>
            <div class="scale__dot scale__dot--mx" style="left:${s.mx}%"><span>MX</span></div>
            <div class="scale__you" data-you style="left:${you[s.id]}%" aria-hidden="true"></div>
          </div>
        </div>
        <p class="scale__text">${s.texto}</p>
      `;
      root.appendChild(row);
      return { el: row, s };
    });

    function updateRow(r) {
      const v = you[r.s.id];
      const handle = r.el.querySelector('[data-you]');
      const bridge = r.el.querySelector('[data-bridge]');
      const gap = r.el.querySelector('[data-gap]');
      const track = r.el.querySelector('.scale__track');
      handle.style.left = v + '%';
      track.setAttribute('aria-valuenow', Math.round(v));
      const a = Math.min(v, r.s.de), b = Math.max(v, r.s.de);
      bridge.style.left = a + '%';
      bridge.style.width = (b - a) + '%';
      const d = Math.round(Math.abs(v - r.s.de));
      gap.textContent = d <= 8 ? 'Estás alineado con Alemania' : d <= 25 ? `Distancia con Alemania: ${d} puntos` : `Brecha amplia: ${d} puntos`;
    }

    function updateSummary() {
      const total = C.escalas.reduce((acc, s) => acc + Math.abs(you[s.id] - s.de), 0);
      const avg = Math.round(total / C.escalas.length);
      const worst = C.escalas.slice().sort((x, y) => Math.abs(you[y.id] - y.de) - Math.abs(you[x.id] - x.de))[0];
      let texto;
      if (avg <= 12) texto = 'Tu estilo ya es muy cercano al alemán. Tu reto no es adaptarte a ellos, sino no perder la calidez que funciona en México.';
      else if (avg <= 30) texto = `Distancia moderada. Concéntrate en la escala donde más te alejas: ${worst.nombre.toLowerCase()}. Ahí ocurrirán los malentendidos.`;
      else if (avg <= 50) texto = `Brecha considerable. Tu mayor diferencia está en ${worst.nombre.toLowerCase()}. Estudia los riesgos culturales y ensaya en el simulador antes de la primera reunión.`;
      else texto = `Estás en el extremo opuesto del mapa. Tu mayor choque será en ${worst.nombre.toLowerCase()}. Necesitas preparación deliberada: protocolo, ensayo y un intérprete cultural en las primeras reuniones.`;
      summary.innerHTML = `<strong>${avg}</strong><p><b>Distancia cultural promedio con Alemania.</b> ${texto}</p>`;
    }

    rows.forEach((r) => {
      const track = r.el.querySelector('.scale__track');
      const handle = r.el.querySelector('[data-you]');
      const toggle = r.el.querySelector('.scale__toggle');
      let dragging = false;

      function setFromClientX(x) {
        const rect = track.getBoundingClientRect();
        const pct = Math.max(0, Math.min(100, ((x - rect.left) / rect.width) * 100));
        you[r.s.id] = pct;
        updateRow(r);
        updateSummary();
      }

      track.addEventListener('pointerdown', (e) => {
        dragging = true;
        track.setPointerCapture(e.pointerId);
        document.body.classList.add('is-dragging');
        setFromClientX(e.clientX);
      });
      track.addEventListener('pointermove', (e) => { if (dragging) setFromClientX(e.clientX); });
      const stop = () => {
        if (!dragging) return;
        dragging = false;
        document.body.classList.remove('is-dragging');
        save(you);
      };
      track.addEventListener('pointerup', stop);
      track.addEventListener('pointercancel', stop);

      track.addEventListener('keydown', (e) => {
        let delta = 0;
        if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') delta = -5;
        if (e.key === 'ArrowRight' || e.key === 'ArrowUp') delta = 5;
        if (e.key === 'Home') { you[r.s.id] = 0; delta = null; }
        if (e.key === 'End') { you[r.s.id] = 100; delta = null; }
        if (delta === 0) return;
        e.preventDefault();
        if (delta) you[r.s.id] = Math.max(0, Math.min(100, you[r.s.id] + delta));
        updateRow(r); updateSummary(); save(you);
      });

      toggle.addEventListener('click', () => {
        const open = r.el.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', String(open));
        toggle.textContent = open ? 'Cerrar' : 'Leer la diferencia';
      });

      handle.addEventListener('pointerenter', () => document.dispatchEvent(new CustomEvent('kit:cursor', { detail: 'drag' })));
      handle.addEventListener('pointerleave', () => document.dispatchEvent(new CustomEvent('kit:cursor', { detail: 'none' })));

      updateRow(r);
    });

    updateSummary();
  }

  window.KitCultureMap = { init };
})();
