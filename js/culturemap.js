/* =====================================================================
   Test "¿Qué tan alemán es tu estilo?"
   Ocho preguntas basadas en las escalas de Erin Meyer. El resultado
   ubica a la persona frente a Alemania y México en cada dimensión.
   ===================================================================== */

(function () {
  'use strict';

  const K = window.KIT;
  const STORAGE = 'kit-de-quiz';
  const OPTIONS = [
    { label: 'Totalmente A', value: 0 },
    { label: 'Más bien A', value: 25 },
    { label: 'Depende', value: 50 },
    { label: 'Más bien B', value: 75 },
    { label: 'Totalmente B', value: 100 }
  ];

  function load() { try { return JSON.parse(localStorage.getItem(STORAGE) || 'null'); } catch (e) { return null; } }
  function save(v) { try { localStorage.setItem(STORAGE, JSON.stringify(v)); } catch (e) { /* sin almacenamiento */ } }
  const hasGsap = () => typeof window.gsap !== 'undefined';

  function init() {
    const root = document.getElementById('quiz');
    const src = document.getElementById('cmapSource');
    if (!root) return;
    const C = K.cultureMap;
    if (src) src.textContent = 'Basado en las ocho escalas de ' + C.fuente;

    const answers = {};
    let index = 0;

    function swap(build) {
      const old = Array.from(root.children);
      const apply = () => { root.innerHTML = ''; build(); if (hasGsap()) gsap.fromTo(root.children, { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45, stagger: 0.05, ease: 'power3.out' }); };
      if (hasGsap() && old.length) gsap.to(old, { y: -10, opacity: 0, duration: 0.22, stagger: 0.02, ease: 'power2.in', onComplete: apply });
      else apply();
    }

    function intro() {
      const saved = load();
      swap(() => {
        const box = document.createElement('div');
        box.className = 'quiz__intro';
        box.innerHTML = `
          <h3 class="quiz__title">Descubre tu estilo de negociación</h3>
          <p>En cada pregunta verás dos formas de actuar, A y B. Elige la que más se parece a ti. Al final verás qué tan cerca estás de la forma alemana de hacer negocios y en qué te conviene ajustarte.</p>`;
        const row = document.createElement('div'); row.className = 'quiz__actions';
        const start = document.createElement('button'); start.className = 'btn'; start.textContent = 'Empezar el test';
        start.addEventListener('click', () => { index = 0; Object.keys(answers).forEach((k) => delete answers[k]); question(); });
        row.appendChild(start);
        if (saved) {
          const see = document.createElement('button'); see.className = 'btn btn--glass'; see.textContent = 'Ver mi último resultado';
          see.addEventListener('click', () => { Object.assign(answers, saved); result(); });
          row.appendChild(see);
        }
        box.appendChild(row);
        root.appendChild(box);
      });
    }

    function question() {
      const s = C.escalas[index];
      swap(() => {
        const prog = document.createElement('div'); prog.className = 'quiz__progress';
        C.escalas.forEach((x, i) => { const bar = document.createElement('i'); if (i < index) bar.classList.add('is-done'); if (i === index) bar.classList.add('is-current'); prog.appendChild(bar); });
        root.appendChild(prog);
        const step = document.createElement('span'); step.className = 'quiz__step'; step.textContent = `Pregunta ${index + 1} de ${C.escalas.length} · ${s.nombre}`;
        root.appendChild(step);
        const title = document.createElement('h3'); title.className = 'quiz__title'; title.textContent = '¿Cuál se parece más a ti?';
        root.appendChild(title);
        const pair = document.createElement('div'); pair.className = 'quiz__pair';
        pair.innerHTML = `<div class="quiz__side"><b>A</b>${s.a}</div><div class="quiz__side"><b>B</b>${s.b}</div>`;
        root.appendChild(pair);
        const scale = document.createElement('div'); scale.className = 'quiz__scale';
        OPTIONS.forEach((o) => {
          const b = document.createElement('button'); b.className = 'quiz__opt'; b.type = 'button'; b.textContent = o.label;
          b.addEventListener('click', () => {
            scale.querySelectorAll('.quiz__opt').forEach((x) => x.classList.remove('is-picked'));
            b.classList.add('is-picked');
            answers[s.id] = o.value;
            setTimeout(() => { index += 1; if (index < C.escalas.length) question(); else { save(answers); result(); } }, 260);
          });
          scale.appendChild(b);
        });
        root.appendChild(scale);
      });
    }

    function result() {
      const dist = C.escalas.map((s) => ({ s, d: Math.abs(answers[s.id] - s.de) }));
      const avg = Math.round(dist.reduce((a, x) => a + x.d, 0) / dist.length);
      const closeness = Math.max(0, 100 - avg);
      const worst = dist.slice().sort((a, b) => b.d - a.d)[0];
      let read;
      if (avg <= 15) read = 'Tu estilo ya es casi alemán. Tu reto será no perder la calidez que funciona en México.';
      else if (avg <= 30) read = 'Estás cerca. Con pequeños ajustes te vas a entender bien con una contraparte alemana.';
      else if (avg <= 50) read = 'Hay una brecha real. Sin preparación habrá malentendidos; el simulador y los diez riesgos son tu siguiente paso.';
      else read = 'Negocias muy a la mexicana. Frente a un alemán necesitarás cambiar de código de forma consciente en casi todo.';

      swap(() => {
        const wrap = document.createElement('div'); wrap.className = 'quiz__result';
        wrap.innerHTML = `
          <div class="quiz__score"><strong>${closeness} %</strong><span>de afinidad con el estilo alemán de negociar. ${read}</span></div>
          <div class="quiz__legend"><span><i style="background:#F5B82E"></i>Alemania</span><span><i style="background:#FF453A"></i>México</span><span><i class="you"></i>Tú</span></div>
          <div class="quiz__rows"></div>
          <div class="quiz__tip"><b>Donde más te alejas: ${worst.s.nombre.toLowerCase()}.</b> ${worst.s.texto}</div>`;
        const rows = wrap.querySelector('.quiz__rows');
        C.escalas.forEach((s) => {
          const v = answers[s.id];
          const d = Math.round(Math.abs(v - s.de));
          const a = Math.min(v, s.de), b = Math.max(v, s.de);
          const row = document.createElement('div'); row.className = 'scale';
          row.innerHTML = `
            <div><div class="scale__name">${s.nombre}</div><span class="scale__gap">${d <= 12 ? 'Alineado con Alemania' : d <= 30 ? `A ${d} puntos de Alemania` : `Brecha amplia: ${d} puntos`}</span></div>
            <div class="scale__track-wrap">
              <div class="scale__ends"><span>${s.izq}</span><span>${s.der}</span></div>
              <div class="scale__track">
                <div class="scale__line"></div>
                <div class="scale__bridge" style="left:${a}%;width:${b - a}%"></div>
                <div class="scale__dot scale__dot--de" style="left:${s.de}%"><span>DE</span></div>
                <div class="scale__dot scale__dot--mx" style="left:${s.mx}%"><span>MX</span></div>
                <div class="scale__you" style="left:${s.mx}%" title="Tú"></div>
              </div>
            </div>`;
          rows.appendChild(row);
          requestAnimationFrame(() => requestAnimationFrame(() => { row.querySelector('.scale__you').style.left = v + '%'; }));
        });
        const actions = document.createElement('div'); actions.className = 'quiz__actions';
        const again = document.createElement('button'); again.className = 'btn btn--glass'; again.textContent = 'Repetir el test';
        again.addEventListener('click', intro);
        const sim = document.createElement('a'); sim.className = 'btn'; sim.href = '#simulador'; sim.textContent = 'Practicar en el simulador';
        actions.appendChild(again); actions.appendChild(sim);
        wrap.appendChild(actions);
        root.appendChild(wrap);
      });
    }

    intro();
  }

  window.KitCultureMap = { init };
})();
