/* =====================================================================
   Motor principal: render, liquid glass, scroll nativo + ScrollTrigger,
   narrativa de valores, carrusel con momentum, hoja modal, protocolo.
   ===================================================================== */

(function () {
  'use strict';

  const K = window.KIT;
  const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hasGsap = typeof window.gsap !== 'undefined';
  const hasST = hasGsap && typeof window.ScrollTrigger !== 'undefined';
  const hasSplit = hasGsap && typeof window.SplitText !== 'undefined';
  if (hasST) gsap.registerPlugin(ScrollTrigger);
  if (hasSplit) gsap.registerPlugin(SplitText);

  const $ = (s, c) => (c || document).querySelector(s);
  const $$ = (s, c) => Array.from((c || document).querySelectorAll(s));
  const fmt = (n, dec) => n.toLocaleString('es-MX', { minimumFractionDigits: dec, maximumFractionDigits: dec });
  const IMG = (k) => `assets/img/${k}.webp`;

  let lenis = null;

  /* =================== LIQUID GLASS: brillo que sigue al puntero =================== */

  function initGlass() {
    if (!window.matchMedia('(hover: hover)').matches) return;
    document.addEventListener('pointermove', (e) => {
      const el = e.target.closest ? e.target.closest('[data-glass]') : null;
      if (!el) return;
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100).toFixed(1) + '%');
      el.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100).toFixed(1) + '%');
    }, { passive: true });
  }

  /* =================== RENDER =================== */

  function renderStats() {
    const root = $('#stats');
    K.indicadores.forEach((s) => {
      const el = document.createElement('article');
      el.className = 'stat glass';
      el.setAttribute('data-glass', '');
      el.innerHTML = `
        <div class="stat__value" data-count="${s.valor}" data-dec="${s.decimales}" data-prefix="${s.prefijo || ''}" data-suffix="${s.sufijo || ''}">${s.prefijo || ''}0<small>${s.sufijo || ''}</small></div>
        <div><div class="stat__label">${s.etiqueta}</div><p class="stat__note">${s.nota}</p><div class="stat__source">${s.fuente}</div></div>`;
      root.appendChild(el);
    });
  }

  function renderTiles() {
    const root = $('#tiles');
    K.roles.forEach((r) => {
      const el = document.createElement('article');
      el.className = 'tile';
      el.innerHTML = `
        <img src="${IMG(r.img)}" alt="" loading="lazy">
        <div class="tile__card glass glass--thick" data-glass>
          <h3>${r.titulo}</h3><p>${r.linea}</p><small>${r.fuente}</small>
        </div>`;
      root.appendChild(el);
    });
  }

  function renderMexico() {
    $('#mexicoTitle').textContent = K.mexico.titulo;
    $('#mexicoLine').textContent = K.mexico.linea;
    const list = $('#mexicoList');
    K.mexico.bullets.forEach((b) => { const li = document.createElement('li'); li.textContent = b; list.appendChild(li); });
    $('#mexicoSource').textContent = 'Fuente: ' + K.mexico.fuente;
  }

  function renderValues() {
    const media = $('#valuesMedia');
    const steps = $('#valuesSteps');
    const dots = $('#valuesDots');
    K.valoresPrincipales.forEach((v, i) => {
      const img = document.createElement('img');
      img.src = IMG(v.img); img.alt = ''; img.loading = i === 0 ? 'eager' : 'lazy';
      if (i === 0) img.classList.add('is-on');
      media.appendChild(img);
      const step = document.createElement('div');
      step.className = 'values__step'; step.dataset.index = i;
      steps.appendChild(step);
      const dot = document.createElement('i');
      if (i === 0) dot.classList.add('is-on');
      dots.appendChild(dot);
    });
    setValue(0, true);
  }

  let currentValue = -1;
  function setValue(i, instant) {
    if (i === currentValue) return;
    currentValue = i;
    const v = K.valoresPrincipales[i];
    const imgs = $$('#valuesMedia img');
    const dots = $$('#valuesDots i');
    dots.forEach((d, j) => d.classList.toggle('is-on', j === i));
    const word = $('#valuesWord'), trad = $('#valuesTrad'), line = $('#valuesLine'), biz = $('#valuesBiz');
    const apply = () => { word.textContent = v.palabra; trad.textContent = v.trad; line.textContent = v.linea; biz.textContent = v.negocio; };
    if (!hasGsap || REDUCED || instant) {
      apply();
      imgs.forEach((im, j) => { im.classList.toggle('is-on', j === i); im.style.opacity = j === i ? 1 : 0; });
      return;
    }
    imgs.forEach((im, j) => {
      gsap.to(im, { opacity: j === i ? 1 : 0, scale: j === i ? 1 : 1.08, duration: 1.1, ease: 'power2.out', overwrite: true });
    });
    gsap.timeline()
      .to([word, trad, line, biz], { y: -10, opacity: 0, duration: 0.25, stagger: 0.03, ease: 'power2.in' })
      .call(apply)
      .fromTo([word, trad, line, biz], { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55, stagger: 0.05, ease: 'power3.out' });
  }

  function renderValuesExtra() {
    $('#manifesto').textContent = K.manifiesto;
    const root = $('#valuesExtra');
    K.valoresExtra.forEach((v) => {
      const b = document.createElement('button');
      b.className = 'chip glass'; b.setAttribute('data-glass', '');
      b.innerHTML = `${v.palabra} <em>${v.trad}</em>`;
      b.addEventListener('click', () => openSheet(v.palabra, `<div class="sheet__item"><h4>${v.trad}</h4><p>${v.texto}</p></div>`));
      root.appendChild(b);
    });
  }

  function renderHof() {
    const root = $('#hofReads');
    K.hofstede.lecturas.forEach((l) => {
      const el = document.createElement('div');
      el.className = 'read';
      el.innerHTML = `<div class="read__dim">${l.dim}</div><p>${l.texto}</p>`;
      root.appendChild(el);
    });
    const st = $('#structure');
    K.estructura.forEach((s) => {
      const el = document.createElement('article');
      el.className = 'struct';
      el.innerHTML = `<h4>${s.titulo}</h4><p>${s.texto}</p>`;
      st.appendChild(el);
    });
  }

  function renderLaender() {
    const root = $('#laenderGrid');
    const names = { norte: 'Norte', oeste: 'Oeste', sur: 'Sur', este: 'Este' };
    K.laender.forEach((l) => {
      const b = document.createElement('button');
      b.className = 'land glass'; b.setAttribute('data-glass', ''); b.type = 'button';
      b.dataset.region = l.region;
      b.setAttribute('aria-expanded', 'false');
      b.innerHTML = `<span class="land__region">${names[l.region]}</span><span class="land__name">${l.nombre}</span><span class="land__capital">${l.capital}</span><span class="land__text"><span>${l.rasgo}</span></span>`;
      b.addEventListener('click', () => { const open = b.classList.toggle('is-open'); b.setAttribute('aria-expanded', String(open)); });
      root.appendChild(b);
    });
    $$('#laenderFilter .chip').forEach((chip) => {
      chip.addEventListener('click', () => {
        $$('#laenderFilter .chip').forEach((c) => c.classList.remove('is-active'));
        chip.classList.add('is-active');
        const r = chip.dataset.region;
        $$('.land', root).forEach((land) => land.classList.toggle('is-dim', r !== 'todos' && land.dataset.region !== r));
      });
    });
    $('#relLine').textContent = K.religion.linea;
    const div = $('#diversity');
    K.diversidad.forEach((d) => {
      const el = document.createElement('article');
      el.className = 'div';
      el.innerHTML = `<h4>${d.titulo}</h4><p>${d.texto}</p>${d.fuente ? `<small>${d.fuente}</small>` : ''}`;
      div.appendChild(el);
    });
  }

  function renderRisks() {
    const track = $('#risksTrack');
    const dots = $('#risksDots');
    K.riesgos.forEach((r, i) => {
      const el = document.createElement('article');
      el.className = 'risk glass'; el.setAttribute('data-glass', '');
      el.innerHTML = `<span class="risk__num">${r.num}</span><h3>${r.titulo}</h3><p class="risk__why">${r.porque}</p><p class="risk__do">${r.hacer}</p>`;
      track.appendChild(el);
      const d = document.createElement('i'); if (i === 0) d.classList.add('is-on'); dots.appendChild(d);
    });
  }

  const CHECK_KEY = 'kit-de-check';
  function renderProtocol() {
    const root = $('#phases');
    let state = {};
    try { state = JSON.parse(localStorage.getItem(CHECK_KEY) || '{}'); } catch (e) { state = {}; }
    const inputs = [];
    const phases = [];

    K.recomendaciones.fases.forEach((f, fi) => {
      const el = document.createElement('section');
      el.className = 'phase' + (fi === 0 ? ' is-open' : '');
      el.innerHTML = `
        <button class="phase__head" aria-expanded="${fi === 0}">
          <span class="phase__num">${fi + 1}</span>
          <span class="phase__title">${f.fase}</span>
          <span class="phase__count"></span>
          <span class="phase__chev"></span>
        </button>
        <div class="phase__body"><ul></ul></div>`;
      const ul = $('ul', el);
      const own = [];
      f.items.forEach((item, ii) => {
        const id = `c-${fi}-${ii}`;
        const li = document.createElement('li');
        li.innerHTML = `<label class="check"><input type="checkbox" id="${id}" ${state[id] ? 'checked' : ''}><span class="check__box"></span><span class="check__text">${item}</span></label>`;
        const input = $('input', li);
        input.addEventListener('change', () => {
          state[id] = input.checked;
          try { localStorage.setItem(CHECK_KEY, JSON.stringify(state)); } catch (e) { /* sin almacenamiento */ }
          update();
        });
        inputs.push(input); own.push(input);
        ul.appendChild(li);
      });
      $('.phase__head', el).addEventListener('click', () => {
        const open = el.classList.toggle('is-open');
        $('.phase__head', el).setAttribute('aria-expanded', String(open));
      });
      phases.push({ el, own });
      root.appendChild(el);
    });

    const ring = $('#ringFg');
    const C = 2 * Math.PI * 52;
    function update() {
      const done = inputs.filter((i) => i.checked).length;
      const pct = inputs.length ? done / inputs.length : 0;
      ring.style.strokeDashoffset = String(C * (1 - pct));
      $('#checkPct').textContent = Math.round(pct * 100) + ' %';
      $('#checkLabel').textContent = `${done} de ${inputs.length}`;
      phases.forEach((p) => {
        const d = p.own.filter((i) => i.checked).length;
        $('.phase__count', p.el).textContent = `${d} / ${p.own.length}`;
        p.el.classList.toggle('is-done', d === p.own.length);
      });
    }
    $('#checkReset').addEventListener('click', () => {
      inputs.forEach((i) => { i.checked = false; });
      state = {};
      try { localStorage.removeItem(CHECK_KEY); } catch (e) { /* sin almacenamiento */ }
      update();
    });
    update();
  }

  function renderGlossaryAndSources() {
    const g = $('#glossary');
    K.glosario.forEach((t) => {
      const el = document.createElement('span');
      el.className = 'term';
      el.innerHTML = `<span class="term__de">${t.de}</span><span class="term__es">${t.es}</span>`;
      g.appendChild(el);
    });
    const s = $('#sourcesList');
    K.fuentes.forEach((f) => {
      const li = document.createElement('li');
      li.innerHTML = `<span>${f.nombre} <a href="${f.url}" target="_blank" rel="noopener noreferrer">${f.url.replace(/^https?:\/\//, '')}</a></span>`;
      s.appendChild(li);
    });
    const c = $('#creditsList');
    const credits = window.KIT_CREDITS || {};
    Object.keys(credits).forEach((k) => {
      const cr = credits[k];
      const li = document.createElement('li');
      li.innerHTML = `<span>${cr.file.replace(/\.(jpe?g|JPG)$/, '')} · ${cr.artist || 'Autor no indicado'} · <a href="${cr.page}" target="_blank" rel="noopener noreferrer">${cr.license || 'Wikimedia Commons'}</a></span>`;
      c.appendChild(li);
    });
  }

  /* ---------- Etapa 2 ---------- */

  function sysPanelHtml(s) {
    const datos = `<dl class="sys__facts">${s.datos.map((d) => `<div><dt>${d.k}</dt><dd>${d.v}</dd></div>`).join('')}</dl>`;
    let extra = '';
    if (s.id === 'politico') {
      extra = `
        <div class="meter">
          <div class="meter__head"><span>${s.estabilidadNota}</span><strong>${s.estabilidad}<small>/100</small></strong></div>
          <span class="meter__track"><i style="--w:${s.estabilidad}%"></i></span>
        </div>
        <p class="sys__impact"><b>Impacto en los negocios.</b> ${s.impacto}</p>
        <button class="link" data-sheet="politico">Estructura, contrapesos y momento actual</button>`;
    }
    if (s.id === 'economico') {
      extra = `
        <div class="theories">${s.teorias.map((t) => `<article class="theory"><span>${t.autor}</span><h4>${t.nombre}</h4><p>${t.texto}</p></article>`).join('')}</div>
        <p class="sys__impact"><b>De dónde viene su competitividad.</b> ${s.competitividad}</p>`;
    }
    if (s.id === 'legal') {
      extra = `<div class="laws">${s.leyes.map((l) => `<article class="law"><span class="law__tag">${l.tag}</span><h4>${l.nombre}</h4><p>${l.texto}</p></article>`).join('')}</div>`;
    }
    return `
      <div class="sys__intro">
        <span class="sys__num">${s.num}</span>
        <h3>${s.titulo}</h3>
        <p class="sys__lead">${s.resumen}</p>
        ${datos}
      </div>
      <div class="sys__body">${extra}</div>
      <p class="source sys__source">Fuente: ${s.fuente}</p>`;
  }

  function renderSistema() {
    const tabs = $('#sysTabs');
    const panel = $('#sysPanel');
    const show = (i, animate) => {
      $$('.tab', tabs).forEach((t, j) => { t.classList.toggle('is-active', j === i); t.setAttribute('aria-selected', String(j === i)); });
      const paint = () => { panel.innerHTML = sysPanelHtml(K.sistema[i]); };
      if (!animate || !hasGsap || REDUCED) { paint(); return; }
      gsap.to(panel, { opacity: 0, y: 8, duration: 0.18, ease: 'power2.in', onComplete: () => {
        paint();
        gsap.fromTo(panel, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.45, ease: 'power3.out' });
        if (hasST) ScrollTrigger.refresh();
      } });
    };
    K.sistema.forEach((s, i) => {
      const b = document.createElement('button');
      b.className = 'tab'; b.type = 'button'; b.setAttribute('role', 'tab');
      b.innerHTML = `<span>${s.num}</span> ${s.titulo.split(' y ')[0].replace('Sistema ', '')}`;
      b.addEventListener('click', () => show(i, true));
      tabs.appendChild(b);
    });
    show(0, false);
  }

  function renderInversion() {
    const C = K.comercioIED;
    $('#fdiFigures').innerHTML = C.cifras.map((c) => `<div class="fig"><strong>${c.valor}</strong><span>${c.unidad}</span><small>${c.etiqueta}</small></div>`).join('');
    $('#fdiExport').innerHTML = C.exporta.map((x) => `<li>${x}</li>`).join('');
    $('#fdiImport').innerHTML = C.importa.map((x) => `<li>${x}</li>`).join('');
    $('#fdiWhy').innerHTML = C.atractivo.map((a) => `<article class="why"><h4>${a.titulo}</h4><p>${a.texto}</p></article>`).join('');
    $('#fdiLectura').textContent = C.lectura;
    $('#fdiSource').textContent = 'Fuente: ' + C.fuente;
  }

  function renderRetos() {
    const R = K.retos;
    const filter = $('#retosFilter');
    const grid = $('#retosGrid');
    const tipos = [{ id: 'todos', nombre: 'Todos' }].concat(R.tipos);
    tipos.forEach((t, i) => {
      const b = document.createElement('button');
      b.className = 'chip glass' + (i === 0 ? ' is-active' : ''); b.setAttribute('data-glass', ''); b.type = 'button';
      b.textContent = t.nombre; b.dataset.tipo = t.id;
      filter.appendChild(b);
    });
    R.tipos.forEach((t) => t.items.forEach((it) => {
      const el = document.createElement('article');
      el.className = 'challenge glass'; el.setAttribute('data-glass', '');
      el.dataset.tipo = t.id;
      el.innerHTML = `<span class="challenge__tag">${t.nombre}</span><h4>${it.t}</h4><p>${it.d}</p>`;
      grid.appendChild(el);
    }));
    filter.addEventListener('click', (e) => {
      const chip = e.target.closest('.chip'); if (!chip) return;
      $$('.chip', filter).forEach((c) => c.classList.toggle('is-active', c === chip));
      const id = chip.dataset.tipo;
      $$('.challenge', grid).forEach((c) => { c.hidden = id !== 'todos' && c.dataset.tipo !== id; });
      if (hasGsap && !REDUCED) gsap.fromTo($$('.challenge:not([hidden])', grid), { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45, stagger: 0.035, ease: 'power3.out', overwrite: true });
      if (hasST) ScrollTrigger.refresh();
    });
    $('#retosSource').textContent = 'Fuente: ' + R.fuente;
  }

  function renderNegociador() {
    const E = K.empresario;
    $('#empLinea').textContent = E.linea;
    $('#empRasgos').innerHTML = E.rasgos.map((r) => `<article class="trait glass" data-glass><h4>${r.titulo}</h4><p>${r.texto}</p></article>`).join('');
    $('#empPrio').innerHTML = E.prioridades.map((p) => `<div class="bar"><span class="bar__name">${p.nombre}</span><span class="bar__track"><i style="--w:${p.peso}%"></i></span></div>`).join('');
    $('#empNota').textContent = E.prioridadesNota + ' Fuente: ' + E.fuente + '.';
  }

  const SKILL_KEY = 'kit-de-skills';
  function renderHabilidades() {
    const H = K.habilidades;
    let state = {};
    try { state = JSON.parse(localStorage.getItem(SKILL_KEY) || '{}'); } catch (e) { state = {}; }
    const root = $('#skillGroups');
    const inputs = [];
    H.grupos.forEach((g) => {
      const col = document.createElement('section');
      col.className = 'skillgroup';
      col.innerHTML = `<h3>${g.nombre}</h3><ul></ul>`;
      const ul = $('ul', col);
      g.items.forEach((it, i) => {
        const id = `s-${g.id}-${i}`;
        const li = document.createElement('li');
        li.innerHTML = `<label class="check"><input type="checkbox" id="${id}" ${state[id] ? 'checked' : ''}><span class="check__box"></span><span class="check__text"><b>${it.t}</b>${it.d}</span></label>`;
        const input = $('input', li);
        input.addEventListener('change', () => {
          state[id] = input.checked;
          try { localStorage.setItem(SKILL_KEY, JSON.stringify(state)); } catch (e) { /* sin almacenamiento */ }
          update();
        });
        inputs.push(input);
        ul.appendChild(li);
      });
      root.appendChild(col);
    });
    function update() {
      const done = inputs.filter((i) => i.checked).length;
      const pct = Math.round(done / inputs.length * 100);
      $('#skillPct').textContent = pct + ' %';
      $('#skillBar').style.width = pct + '%';
      $('#skillMsg').textContent = pct === 0 ? 'Empieza a marcar.' : pct < 50 ? 'Buen inicio. Prepárate más antes de viajar.' : pct < 100 ? 'Casi listo. Refuerza lo que falta.' : 'Listo para negociar en Alemania.';
    }
    update();
    $('#skillSource').textContent = 'Fuente: ' + H.fuente;
  }

  function renderAll() {
    renderStats(); renderTiles(); renderMexico(); renderSistema(); renderInversion(); renderRetos(); renderValues(); renderValuesExtra(); renderHof(); renderLaender(); renderNegociador(); renderHabilidades(); renderRisks(); renderProtocol(); renderGlossaryAndSources();
  }

  /* =================== HOJA MODAL =================== */

  const sheet = $('#sheet');
  const sheetCard = $('.sheet__card', sheet);
  let sheetOpen = false;
  const isMobileSheet = () => window.matchMedia('(max-width: 860px)').matches;

  function openSheet(title, html) {
    $('#sheetTitle').textContent = title;
    $('#sheetBody').innerHTML = html;
    sheet.classList.add('is-open');
    sheet.setAttribute('aria-hidden', 'false');
    sheetOpen = true;
    document.body.classList.add('is-locked');
    if (lenis) lenis.stop();
    sheetCard.scrollTop = 0;
    if (hasGsap && !REDUCED) {
      if (isMobileSheet()) gsap.fromTo(sheetCard, { y: '100%' }, { y: '0%', duration: 0.55, ease: 'power4.out' });
      else gsap.fromTo(sheetCard, { y: 30, scale: 0.96, opacity: 0, filter: 'blur(8px)' }, { y: 0, scale: 1, opacity: 1, filter: 'blur(0px)', duration: 0.5, ease: 'power3.out' });
    } else {
      sheetCard.style.transform = 'none'; sheetCard.style.opacity = 1;
    }
    $('#sheetClose').focus();
  }

  function closeSheet(velocity) {
    if (!sheetOpen) return;
    sheetOpen = false;
    const done = () => {
      sheet.classList.remove('is-open');
      sheet.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('is-locked');
      if (lenis) lenis.start();
    };
    if (hasGsap && !REDUCED) {
      if (isMobileSheet()) gsap.to(sheetCard, { y: '100%', duration: velocity ? Math.max(0.2, Math.min(0.45, 600 / velocity)) : 0.4, ease: 'power3.in', onComplete: done });
      else gsap.to(sheetCard, { y: 24, scale: 0.97, opacity: 0, filter: 'blur(6px)', duration: 0.28, ease: 'power2.in', onComplete: done });
    } else done();
  }

  function initSheet() {
    $('#sheetScrim').addEventListener('click', () => closeSheet());
    $('#sheetClose').addEventListener('click', () => closeSheet());
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeSheet(); });

    document.addEventListener('click', (e) => {
      const b = e.target.closest('[data-sheet]');
      if (!b) return;
      const kind = b.dataset.sheet;
      if (kind === 'roles') {
        const items = K.roles.map((r) => ({ t: r.titulo, d: r.detalle, f: r.fuente })).concat(K.rolesExtra.map((r) => ({ t: r.titulo, d: r.detalle, f: r.fuente })));
        openSheet('Su papel en los negocios internacionales', items.map((i) => `<div class="sheet__item"><h4>${i.t}</h4><p>${i.d}</p><small>Fuente: ${i.f}</small></div>`).join(''));
      }
      if (kind === 'politico') {
        const P = K.sistema.find((x) => x.id === 'politico');
        openSheet('Sistema político', P.detalle.map((i) => `<div class="sheet__item"><h4>${i.t}</h4><p>${i.d}</p></div>`).join('') + `<p class="source">Fuente: ${P.fuente}.</p>`);
      }
      if (kind === 'religion') {
        const R = K.religion;
        openSheet('Festivos y tradiciones',
          `<div class="sheet__grid">${R.festivos.map((f) => `<div class="sheet__item"><h4>${f.alcance}</h4><p>${f.nombre}</p></div>`).join('')}</div>` +
          `<div class="sheet__grid">${R.tradiciones.map((t) => `<div class="sheet__item"><h4>${t.nombre}</h4><p>${t.texto}</p></div>`).join('')}</div>` +
          `<p class="source">Fuente: ${R.fuente}; Auswärtiges Amt.</p>`);
      }
    });

    /* Arrastrar para cerrar (móvil): 1:1 con el dedo, banda elástica hacia arriba, velocidad al soltar. */
    let dragging = false, startY = 0, lastY = 0, lastT = 0, vel = 0, moved = 0;
    sheetCard.addEventListener('pointerdown', (e) => {
      if (!isMobileSheet() || sheetCard.scrollTop > 2) return;
      dragging = true; moved = 0; startY = lastY = e.clientY; lastT = performance.now(); vel = 0;
      sheetCard.setPointerCapture(e.pointerId);
      if (hasGsap) gsap.killTweensOf(sheetCard);
    });
    sheetCard.addEventListener('pointermove', (e) => {
      if (!dragging) return;
      const now = performance.now();
      const dy = e.clientY - startY;
      vel = (e.clientY - lastY) / Math.max(1, now - lastT) * 1000;
      lastY = e.clientY; lastT = now;
      moved = dy;
      const y = dy >= 0 ? dy : -(Math.abs(dy) * 80) / (80 + Math.abs(dy));
      sheetCard.style.transform = `translateY(${y}px)`;
    });
    const release = () => {
      if (!dragging) return;
      dragging = false;
      const h = sheetCard.getBoundingClientRect().height;
      const projected = moved + (vel / 1000) * 0.998 / (1 - 0.998);
      if (vel > 500 || projected > h * 0.45) { closeSheet(Math.abs(vel)); return; }
      if (hasGsap) gsap.to(sheetCard, { y: 0, duration: 0.45, ease: 'elastic.out(1, 0.75)', clearProps: 'transform' });
      else sheetCard.style.transform = '';
    };
    sheetCard.addEventListener('pointerup', release);
    sheetCard.addEventListener('pointercancel', release);
  }

  /* =================== RELOJ =================== */

  function initClock() {
    const el = $('#clockBerlin'), note = $('#clockNote');
    const tf = new Intl.DateTimeFormat('es-MX', { timeZone: 'Europe/Berlin', hour: '2-digit', minute: '2-digit', hour12: false });
    const hf = new Intl.DateTimeFormat('en-US', { timeZone: 'Europe/Berlin', hour: 'numeric', hour12: false, weekday: 'short' });
    function tick() {
      const now = new Date();
      el.textContent = tf.format(now);
      const parts = hf.formatToParts(now);
      const hour = parseInt(parts.find((p) => p.type === 'hour').value, 10) % 24;
      const wd = parts.find((p) => p.type === 'weekday').value;
      const weekend = wd === 'Sat' || wd === 'Sun';
      let msg;
      if (weekend) msg = 'Berlín · fin de semana';
      else if (hour >= 8 && hour < 12) msg = 'Berlín · horario de oficina';
      else if (hour >= 12 && hour < 13) msg = 'Berlín · Mittagspause';
      else if (hour >= 13 && hour < 17) msg = 'Berlín · horario de oficina';
      else msg = 'Berlín · Feierabend';
      note.textContent = msg;
      const dot = $('.hero__clock-dot');
      const on = !weekend && hour >= 8 && hour < 17 && !(hour === 12);
      dot.style.background = on ? 'var(--green)' : 'rgba(255,255,255,0.35)';
      dot.style.boxShadow = on ? '0 0 0 4px rgba(48,209,88,0.2)' : 'none';
    }
    tick(); setInterval(tick, 15000);
  }

  /* =================== SCROLL =================== */

  function scrollToHash(hash) {
    const target = document.querySelector(hash);
    if (!target) return;
    target.scrollIntoView({ behavior: REDUCED ? 'auto' : 'smooth' });
  }

  function closeMenu() {
    const burger = $('#burger'), menu = $('#menu');
    burger.classList.remove('is-open'); burger.setAttribute('aria-expanded', 'false');
    menu.classList.remove('is-open'); menu.setAttribute('aria-hidden', 'true');
  }

  function initNav() {
    const nav = $('#nav');
    const burger = $('#burger'), menu = $('#menu');
    burger.addEventListener('click', () => {
      const open = !menu.classList.contains('is-open');
      burger.classList.toggle('is-open', open); burger.setAttribute('aria-expanded', String(open));
      menu.classList.toggle('is-open', open); menu.setAttribute('aria-hidden', String(!open));
    });
    document.addEventListener('click', (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const hash = a.getAttribute('href');
      if (hash.length < 2) return;
      e.preventDefault();
      closeMenu();
      if (sheetOpen) closeSheet();
      scrollToHash(hash);
      history.replaceState(null, '', hash);
    });

    let lastY = 0;
    const onScroll = () => {
      const y = window.scrollY;
      const down = y > lastY + 4;
      const up = y < lastY - 4;
      if (y > 120 && down && !menu.classList.contains('is-open')) nav.classList.add('is-hidden');
      else if (up || y <= 120) nav.classList.remove('is-hidden');
      lastY = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    if (lenis) lenis.on('scroll', onScroll);

    if (hasST) {
      const map = { cifras: ['#cifras', '#comercio', '#papel', '#mexico'], sistema: ['#sistema', '#inversion', '#retos'], cultura: ['#cultura', '#valores-extra', '#hofstede', '#alemanias', '#mapa'], negociador: ['#negociador', '#habilidades'], riesgos: ['#riesgos'], protocolo: ['#protocolo'] };
      Object.keys(map).forEach((key) => map[key].forEach((sel) => {
        const el = document.querySelector(sel); if (!el) return;
        ScrollTrigger.create({ trigger: el, start: 'top center', end: 'bottom center', onToggle: (self) => { if (self.isActive) $$('.nav__links a').forEach((a) => a.classList.toggle('is-active', a.dataset.nav === key)); } });
      }));
    }
  }

  /* =================== MOTION =================== */

  function initHero() {
    const img = $('#heroMedia img');
    if (!hasST || REDUCED) { img.style.transform = 'none'; return; }
    gsap.to(img, { yPercent: 18, scale: 1.02, ease: 'none', scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true } });
    gsap.to('#heroContent', { y: -60, opacity: 0, ease: 'none', scrollTrigger: { trigger: '#hero', start: '40% top', end: 'bottom top', scrub: true } });
  }

  function introHero() {
    if (!hasGsap || REDUCED) return;
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
    tl.fromTo('#heroMedia img', { scale: 1.12 }, { scale: 1, duration: 2.2, ease: 'power2.out' }, 0);
    if (hasSplit) {
      const split = SplitText.create('.hero__title', { type: 'chars', charsClass: 'char' });
      tl.from(split.chars, { yPercent: 100, opacity: 0, duration: 1.1, stagger: 0.04 }, 0.1);
    } else {
      tl.from('.hero__title', { y: 40, opacity: 0, duration: 1.1 }, 0.1);
    }
    tl.from('.hero__eyebrow', { y: 12, opacity: 0, duration: 0.8 }, 0.3)
      .from('.hero__sub', { y: 16, opacity: 0, duration: 0.9 }, 0.6)
      .from('.hero__actions .btn', { y: 14, opacity: 0, duration: 0.8, stagger: 0.08 }, 0.8)
      .from('.hero__clock', { y: 10, opacity: 0, duration: 0.8 }, 1)
      .from('.nav__pill', { y: -20, opacity: 0, duration: 0.8 }, 0.9);
  }

  function initParallax() {
    if (!hasST || REDUCED) return;
    $$('[data-parallax] img').forEach((img) => {
      const section = img.closest('section');
      gsap.fromTo(img, { yPercent: -8 }, { yPercent: 8, ease: 'none', scrollTrigger: { trigger: section, start: 'top bottom', end: 'bottom top', scrub: true } });
    });
    $$('.tile').forEach((tile) => {
      const img = $('img', tile);
      gsap.fromTo(img, { scale: 1.18 }, { scale: 1.04, ease: 'none', scrollTrigger: { trigger: tile, start: 'top bottom', end: 'bottom top', scrub: true } });
      gsap.from($('.tile__card', tile), { y: 30, opacity: 0, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: tile, start: 'top 60%', once: true } });
    });
  }

  function initReveals() {
    if (!hasST || REDUCED) return;
    $$('.reveal').forEach((el) => {
      gsap.from(el, { y: 28, opacity: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%', once: true } });
    });
    ['.stat', '.read', '.struct', '.land', '.div', '.phase', '.term', '.fig', '.flow', '.why', '.challenge', '.trait', '.skillgroup'].forEach((sel) => {
      const els = $$(sel); if (!els.length) return;
      ScrollTrigger.batch(els, { start: 'top 92%', once: true, onEnter: (batch) => gsap.fromTo(batch, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.06, ease: 'power3.out', overwrite: true }) });
    });
    ['.trade__panel', '.mexico__card', '.sys', '.hof__card', '.rel', '.quiz', '.prio', '.device', '.manifesto'].forEach((sel) => {
      const el = $(sel); if (!el) return;
      gsap.from(el, { y: 40, opacity: 0, scale: 0.98, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 85%', once: true } });
    });
    gsap.from('.bar__track i', { width: 0, duration: 1.2, stagger: 0.08, ease: 'power3.out', scrollTrigger: { trigger: '.prio', start: 'top 80%', once: true } });
    if (hasSplit) {
      const split = SplitText.create('#finalTitle', { type: 'chars,words', charsClass: 'char' });
      gsap.from(split.chars, { yPercent: 110, opacity: 0, duration: 1.1, stagger: 0.04, ease: 'power4.out', scrollTrigger: { trigger: '.final', start: 'top 65%', once: true } });
    }
  }

  function initCounters() {
    $$('[data-count]').forEach((el) => {
      const target = parseFloat(el.dataset.count), dec = parseInt(el.dataset.dec, 10);
      const paint = (v) => { el.innerHTML = `${el.dataset.prefix}${fmt(v, dec)}<small>${el.dataset.suffix}</small>`; };
      if (!hasST || REDUCED) { paint(target); return; }
      const obj = { v: 0 };
      gsap.to(obj, { v: target, duration: 1.8, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%', once: true }, onUpdate: () => paint(obj.v) });
    });
  }

  function initValuesScroll() {
    const steps = $$('.values__step');
    if (!hasST || REDUCED) {
      if (!('IntersectionObserver' in window)) return;
      const io = new IntersectionObserver((entries) => entries.forEach((e) => { if (e.isIntersecting) setValue(parseInt(e.target.dataset.index, 10), true); }), { threshold: 0.5 });
      steps.forEach((s) => io.observe(s));
      return;
    }
    steps.forEach((step) => {
      ScrollTrigger.create({ trigger: step, start: 'top 55%', end: 'bottom 55%', onToggle: (self) => { if (self.isActive) setValue(parseInt(step.dataset.index, 10)); } });
    });
  }

  /* =================== CARRUSEL CON MOMENTUM =================== */

  function initCarousel() {
    const track = $('#risksTrack');
    const cards = $$('.risk', track);
    const dots = $$('#risksDots i');
    const prev = $('#risksPrev'), next = $('#risksNext');
    if (!track || !cards.length) return;

    const cardStep = () => cards[1] ? cards[1].offsetLeft - cards[0].offsetLeft : cards[0].offsetWidth;
    const padLeft = () => cards[0].offsetLeft;
    const indexAt = (x) => Math.max(0, Math.min(cards.length - 1, Math.round((x) / cardStep())));
    const currentIndex = () => indexAt(track.scrollLeft);

    function goTo(i, smooth) {
      i = Math.max(0, Math.min(cards.length - 1, i));
      track.scrollTo({ left: i * cardStep(), behavior: smooth === false ? 'auto' : 'smooth' });
    }
    function paintDots() { const i = currentIndex(); dots.forEach((d, j) => d.classList.toggle('is-on', j === i)); }
    track.addEventListener('scroll', paintDots, { passive: true });
    prev.addEventListener('click', () => goTo(currentIndex() - 1));
    next.addEventListener('click', () => goTo(currentIndex() + 1));

    /* Arrastre con puntero (escritorio): 1:1 y proyección de la velocidad al soltar. */
    let dragging = false, startX = 0, startLeft = 0, lastX = 0, lastT = 0, vel = 0, moved = false;
    track.addEventListener('pointerdown', (e) => {
      if (e.pointerType === 'touch') return;
      dragging = true; moved = false; startX = lastX = e.clientX; startLeft = track.scrollLeft; lastT = performance.now(); vel = 0;
      track.setPointerCapture(e.pointerId);
    });
    track.addEventListener('pointermove', (e) => {
      if (!dragging) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 6) { moved = true; track.classList.add('is-dragging'); }
      const now = performance.now();
      vel = (e.clientX - lastX) / Math.max(1, now - lastT) * 1000;
      lastX = e.clientX; lastT = now;
      track.scrollLeft = startLeft - dx;
    });
    const release = () => {
      if (!dragging) return;
      dragging = false;
      track.classList.remove('is-dragging');
      if (!moved) return;
      const projected = track.scrollLeft - (vel / 1000) * 0.998 / (1 - 0.998);
      goTo(indexAt(projected));
    };
    track.addEventListener('pointerup', release);
    track.addEventListener('pointercancel', release);
    track.addEventListener('click', (e) => { if (moved) e.preventDefault(); }, true);
    void padLeft;
    paintDots();
  }

  /* =================== CARGA =================== */

  function runLoader(done) {
    const loader = $('#loader');
    if (!hasGsap || REDUCED) { loader.remove(); document.body.classList.remove('is-loading'); done(); return; }
    if (lenis) lenis.stop();
    gsap.timeline({ onComplete: () => { loader.remove(); document.body.classList.remove('is-loading'); if (lenis) lenis.start(); done(); } })
      .to('.loader__word', { opacity: 1, duration: 0.35, ease: 'power2.out' }, 0)
      .to('#loaderBar', { width: '100%', duration: 0.55, ease: 'power2.inOut' }, 0.05)
      .to('.loader__word', { opacity: 0, y: -8, duration: 0.25, ease: 'power2.in' }, 0.55)
      .to(loader, { opacity: 0, duration: 0.35, ease: 'power2.inOut' }, 0.65)
      .call(introHero, null, 0.65);
  }

  function start() {
    renderAll();
    initGlass();
    initNav();
    initClock();
    initSheet();
    if (window.KitCharts) KitCharts.init();
    if (window.KitCultureMap) KitCultureMap.init();
    if (window.KitSimulator) KitSimulator.init();
    initCarousel();

    const go = () => runLoader(() => {
      initHero();
      initParallax();
      initReveals();
      initCounters();
      initValuesScroll();
      if (hasST) ScrollTrigger.refresh();
      if (location.hash.length > 1) setTimeout(() => scrollToHash(location.hash), 300);
    });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(go); else go();
    window.addEventListener('load', () => { if (hasST) ScrollTrigger.refresh(); });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
