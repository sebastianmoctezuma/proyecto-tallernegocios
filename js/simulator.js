/* =====================================================================
   Simulador de reunión: escenas ramificadas con puntaje y diagnóstico.
   ===================================================================== */

(function () {
  'use strict';

  const K = window.KIT;
  const LETTERS = ['A', 'B', 'C', 'D'];

  function init() {
    const screen = document.getElementById('simScreen');
    const startEl = document.getElementById('simStart');
    const introEl = document.getElementById('simIntro');
    const beginBtn = document.getElementById('simBegin');
    const meter = document.getElementById('simMeter');
    const scoreEl = document.getElementById('simScore');
    const maxEl = document.getElementById('simMax');
    const stepsEl = document.getElementById('simSteps');
    if (!screen) return;

    const S = K.simulador;
    const max = S.escenas.reduce((acc, e) => acc + Math.max(...e.opciones.map((o) => o.puntos)), 0);
    maxEl.textContent = max;
    introEl.textContent = S.intro;

    let index = 0;
    let score = 0;
    const results = [];

    S.escenas.forEach((e) => {
      const li = document.createElement('li');
      li.innerHTML = `<i></i><span>${e.contexto}</span>`;
      stepsEl.appendChild(li);
    });
    const stepItems = Array.from(stepsEl.children);

    function hasGsap() { return typeof window.gsap !== 'undefined'; }

    function swap(nodeBuilder) {
      const old = screen.firstElementChild;
      const next = nodeBuilder();
      if (hasGsap() && old) {
        gsap.to(old, {
          opacity: 0, y: -16, duration: 0.35, ease: 'power2.in', onComplete: () => {
            old.remove();
            screen.appendChild(next);
            gsap.fromTo(next, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' });
            gsap.fromTo(next.querySelectorAll('.opt'), { opacity: 0, x: -14 }, { opacity: 1, x: 0, duration: 0.5, stagger: 0.08, delay: 0.15, ease: 'power3.out' });
          }
        });
      } else {
        if (old) old.remove();
        screen.appendChild(next);
      }
    }

    function updateMeter() {
      const pct = (score / max) * 100;
      meter.style.width = pct + '%';
      meter.style.background = pct >= 75 ? '#E3B02F' : pct >= 45 ? '#F2CB5E' : '#C8102E';
      if (hasGsap()) {
        const obj = { v: parseInt(scoreEl.textContent, 10) || 0 };
        gsap.to(obj, { v: score, duration: 0.6, ease: 'power2.out', onUpdate: () => { scoreEl.textContent = Math.round(obj.v); } });
      } else {
        scoreEl.textContent = score;
      }
    }

    function markSteps() {
      stepItems.forEach((li, i) => {
        li.classList.toggle('is-current', i === index);
        li.classList.toggle('is-done', i < index);
        li.classList.toggle('is-bad', i < index && results[i] !== undefined && results[i] < 6);
      });
    }

    function renderScene() {
      const e = S.escenas[index];
      markSteps();
      swap(() => {
        const wrap = document.createElement('div');
        wrap.className = 'sim__scene';
        wrap.innerHTML = `
          <span class="sim__context">Paso ${index + 1} de ${S.escenas.length} · ${e.contexto}</span>
          <p class="sim__situation">${e.situacion}</p>
          <div class="sim__options" role="group" aria-label="Opciones"></div>
        `;
        const opts = wrap.querySelector('.sim__options');
        e.opciones.forEach((o, i) => {
          const b = document.createElement('button');
          b.className = 'opt';
          b.type = 'button';
          b.innerHTML = `<span class="opt__letter">${LETTERS[i]}</span><span>${o.texto}</span>`;
          b.addEventListener('click', () => choose(wrap, e, o, b));
          opts.appendChild(b);
        });
        return wrap;
      });
    }

    function choose(wrap, scene, option, btn) {
      const best = Math.max(...scene.opciones.map((o) => o.puntos));
      const good = option.puntos >= best * 0.7;
      wrap.querySelectorAll('.opt').forEach((b) => { b.disabled = true; });
      btn.classList.add('is-chosen');
      if (!good) btn.classList.add('is-bad');
      score += option.puntos;
      results[index] = option.puntos;
      updateMeter();

      const fb = document.createElement('div');
      fb.className = 'sim__feedback' + (good ? '' : ' is-bad');
      const isLast = index === S.escenas.length - 1;
      fb.innerHTML = `
        <strong>${good ? 'Bien resuelto' : 'Costó puntos'} · ${option.puntos} de ${best}</strong>
        <p>${option.feedback}</p>
        <button class="btn btn--gold" type="button">${isLast ? 'Ver mi diagnóstico' : 'Siguiente situación'}</button>
      `;
      fb.querySelector('button').addEventListener('click', () => {
        index += 1;
        if (index < S.escenas.length) renderScene(); else renderEnd();
      });
      wrap.appendChild(fb);
      if (hasGsap()) gsap.fromTo(fb, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' });
      fb.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    function renderEnd() {
      markSteps();
      stepItems.forEach((li) => li.classList.remove('is-current'));
      const diag = S.diagnosticos.find((d) => score >= d.min) || S.diagnosticos[S.diagnosticos.length - 1];
      const weak = results
        .map((p, i) => ({ p, e: S.escenas[i] }))
        .filter((x) => x.p < 6)
        .map((x) => x.e.contexto.toLowerCase());
      swap(() => {
        const wrap = document.createElement('div');
        wrap.className = 'sim__end';
        wrap.innerHTML = `
          <span class="sim__tag">Diagnóstico</span>
          <div class="sim__result">${diag.titulo}</div>
          <h2>${score} de ${max} puntos</h2>
          <p>${diag.texto}${weak.length ? ` Tus puntos débiles: ${weak.join(', ')}.` : ' No fallaste ninguna situación.'}</p>
          <div class="sim__actions">
            <button class="btn btn--gold" type="button" data-restart>Volver a intentarlo</button>
            <a class="btn btn--ghost" href="#riesgos">Repasar los riesgos</a>
          </div>
        `;
        wrap.querySelector('[data-restart]').addEventListener('click', restart);
        return wrap;
      });
    }

    function restart() {
      index = 0; score = 0; results.length = 0;
      updateMeter();
      renderScene();
    }

    beginBtn.addEventListener('click', () => {
      index = 0; score = 0; results.length = 0;
      updateMeter();
      renderScene();
    });

    markSteps();
  }

  window.KitSimulator = { init };
})();
