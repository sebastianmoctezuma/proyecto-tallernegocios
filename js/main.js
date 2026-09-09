/* =====================================================================
   Motor principal: render de contenido, motion (GSAP + ScrollTrigger +
   SplitText), smooth scroll (Lenis), navegación, hero, cursor, checklist.
   ===================================================================== */

(function () {
  'use strict';

  const K = window.KIT;
  const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hasGsap = typeof window.gsap !== 'undefined';
  const hasST = hasGsap && typeof window.ScrollTrigger !== 'undefined';
  const hasSplit = hasGsap && typeof window.SplitText !== 'undefined';

  if (hasGsap) {
    if (hasST) gsap.registerPlugin(ScrollTrigger);
    if (hasSplit) gsap.registerPlugin(SplitText);
    if (window.ScrollToPlugin) gsap.registerPlugin(ScrollToPlugin);
  }

  const $ = (s, c) => (c || document).querySelector(s);
  const $$ = (s, c) => Array.from((c || document).querySelectorAll(s));
  const fmt = (n, dec) => n.toLocaleString('es-MX', { minimumFractionDigits: dec, maximumFractionDigits: dec });

  /* =================== RENDER DE CONTENIDO =================== */

  function renderStats() {
    const root = $('#stats');
    K.indicadores.forEach((s) => {
      const el = document.createElement('article');
      el.className = 'stat';
      el.innerHTML = `
        <div class="stat__value" data-count="${s.valor}" data-dec="${s.decimales}" data-prefix="${s.prefijo || ''}" data-suffix="${s.sufijo || ''}">${s.prefijo || ''}0<small>${s.sufijo || ''}</small></div>
        <div>
          <div class="stat__label">${s.etiqueta}</div>
          <p class="stat__note">${s.nota}</p>
          <div class="stat__source">Fuente: ${s.fuente}</div>
        </div>`;
      root.appendChild(el);
    });
  }

  function renderMarquee() {
    const track = $('#marqueeTrack');
    const items = K.marquee.concat(K.marquee);
    items.forEach((t) => {
      const s = document.createElement('span');
      s.className = 'marquee__item';
      s.textContent = t;
      track.appendChild(s);
    });
  }

  function renderRoles() {
    const root = $('#rolesGrid');
    K.roles.forEach((r) => {
      const el = document.createElement('article');
      el.className = 'role';
      el.innerHTML = `<div class="role__data">${r.dato}</div><h4>${r.titulo}</h4><p>${r.texto}</p><span class="role__source">Fuente: ${r.fuente}</span>`;
      root.appendChild(el);
    });
  }

  function renderFairs() {
    const root = $('#fairsTrack');
    K.ferias.forEach((f, i) => {
      const el = document.createElement('article');
      el.className = 'fair';
      el.innerHTML = `
        <div>
          <span class="fair__month">${f.mes}</span>
          <div class="fair__name">${f.nombre}</div>
          <div class="fair__city">${f.ciudad}</div>
        </div>
        <div>
          <div class="fair__sector">${f.sector}</div>
          <div class="fair__data">${f.dato}</div>
        </div>
        <span class="fair__big" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>`;
      root.appendChild(el);
    });
  }

  function renderMexico() {
    const list = $('#mexicoList');
    K.mexico.bullets.forEach((b) => { const li = document.createElement('li'); li.textContent = b; list.appendChild(li); });
    $('#mexicoSource').textContent = 'Fuente: ' + K.mexico.fuente;
  }

  function renderManifesto() {
    const p = $('#manifestoText');
    K.manifiesto.split(' ').forEach((w) => {
      const s = document.createElement('span');
      s.className = 'word';
      s.textContent = w;
      p.appendChild(s);
    });
  }

  function renderValues() {
    const root = $('#valuesAccordion');
    K.valores.forEach((v, i) => {
      const b = document.createElement('button');
      b.className = 'acc' + (i === 0 ? ' is-open' : '');
      b.type = 'button';
      b.setAttribute('aria-expanded', String(i === 0));
      b.innerHTML = `
        <span class="acc__num">${String(i + 1).padStart(2, '0')}</span>
        <span class="acc__vertical">${v.palabra}</span>
        <span class="acc__body">
          <span class="acc__word">${v.palabra}</span>
          <span class="acc__trad" style="display:block">${v.trad}</span>
          <span class="acc__text" style="display:block">${v.texto}</span>
          <span class="acc__biz" style="display:block">${v.negocio}</span>
        </span>`;
      const open = () => {
        $$('.acc', root).forEach((x) => { x.classList.remove('is-open'); x.setAttribute('aria-expanded', 'false'); });
        b.classList.add('is-open');
        b.setAttribute('aria-expanded', 'true');
      };
      b.addEventListener('mouseenter', () => { if (window.matchMedia('(hover: hover)').matches) open(); });
      b.addEventListener('click', open);
      b.addEventListener('focus', open);
      root.appendChild(b);
    });
  }

  function renderHofReads() {
    const root = $('#hofReads');
    K.hofstede.lecturas.forEach((l) => {
      const el = document.createElement('div');
      el.className = 'read';
      el.innerHTML = `<div class="read__dim">${l.dim}</div><p>${l.texto}</p>`;
      root.appendChild(el);
    });
  }

  function renderReligion() {
    $('#relText').textContent = K.religion.texto;
    const hol = $('#holidays');
    K.religion.festivos.forEach((f) => {
      const li = document.createElement('li');
      li.innerHTML = `<span>${f.nombre}</span><span>${f.alcance}</span>`;
      hol.appendChild(li);
    });
    const tr = $('#traditions');
    K.religion.tradiciones.forEach((t) => {
      const el = document.createElement('div');
      el.className = 'tradition';
      el.innerHTML = `<strong>${t.nombre}</strong><p>${t.texto}</p>`;
      tr.appendChild(el);
    });
  }

  function renderStructure() {
    const root = $('#structureGrid');
    K.estructura.forEach((s) => {
      const el = document.createElement('article');
      el.className = 'struct';
      el.innerHTML = `<h4>${s.titulo}</h4><p>${s.texto}</p>`;
      root.appendChild(el);
    });
  }

  function renderLaender() {
    const root = $('#laenderGrid');
    const names = { norte: 'Norte', oeste: 'Oeste', sur: 'Sur', este: 'Este' };
    K.laender.forEach((l) => {
      const b = document.createElement('button');
      b.className = 'land';
      b.type = 'button';
      b.dataset.region = l.region;
      b.innerHTML = `
        <div>
          <span class="land__region">${names[l.region]}</span>
          <div class="land__name">${l.nombre}</div>
          <div class="land__capital">${l.capital}</div>
        </div>
        <p class="land__text">${l.rasgo}</p>`;
      b.addEventListener('click', () => b.classList.toggle('is-open'));
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

    const div = $('#diversity');
    K.diversidad.forEach((d) => {
      const el = document.createElement('article');
      el.className = 'div';
      el.innerHTML = `<h4>${d.titulo}</h4><p>${d.texto}</p>${d.fuente ? `<small>Fuente: ${d.fuente}</small>` : ''}`;
      div.appendChild(el);
    });
  }

  function renderRisks() {
    const root = $('#risksStack');
    K.riesgos.forEach((r) => {
      const el = document.createElement('article');
      el.className = 'risk';
      el.innerHTML = `
        <div class="risk__num">${r.num}</div>
        <div>
          <h3>${r.titulo}</h3>
          <div class="risk__cols">
            <div class="risk__col risk__col--why"><strong>Por qué es un riesgo</strong><p>${r.porque}</p></div>
            <div class="risk__col risk__col--do"><strong>Qué hacer en su lugar</strong><p>${r.hacer}</p></div>
          </div>
        </div>`;
      root.appendChild(el);
    });
  }

  const CHECK_KEY = 'kit-de-check';
  function renderChecklist() {
    const root = $('#phases');
    let state = {};
    try { state = JSON.parse(localStorage.getItem(CHECK_KEY) || '{}'); } catch (e) { state = {}; }
    const inputs = [];

    K.recomendaciones.fases.forEach((f, fi) => {
      const el = document.createElement('section');
      el.className = 'phase';
      el.innerHTML = `<div class="phase__num">${fi + 1}</div><div><div class="phase__title">${f.fase}</div><ul></ul></div>`;
      const ul = $('ul', el);
      f.items.forEach((item, ii) => {
        const id = `c-${fi}-${ii}`;
        const li = document.createElement('li');
        li.innerHTML = `<label class="check"><input type="checkbox" id="${id}" ${state[id] ? 'checked' : ''}><span class="check__box"></span><span class="check__text">${item}</span></label>`;
        const input = $('input', li);
        input.addEventListener('change', () => {
          state[id] = input.checked;
          try { localStorage.setItem(CHECK_KEY, JSON.stringify(state)); } catch (e) { /* sin almacenamiento */ }
          updateProgress();
        });
        inputs.push(input);
        ul.appendChild(li);
      });
      root.appendChild(el);
    });

    function updateProgress() {
      const done = inputs.filter((i) => i.checked).length;
      $('#checkBar').style.width = (done / inputs.length) * 100 + '%';
      $('#checkLabel').textContent = `${done} de ${inputs.length} completados`;
    }

    $('#checkReset').addEventListener('click', () => {
      inputs.forEach((i) => { i.checked = false; });
      state = {};
      try { localStorage.removeItem(CHECK_KEY); } catch (e) { /* sin almacenamiento */ }
      updateProgress();
    });

    updateProgress();
  }

  function renderGlossary() {
    const root = $('#glossary');
    K.glosario.forEach((g) => {
      const el = document.createElement('article');
      el.className = 'term';
      el.innerHTML = `<div class="term__de">${g.de}</div><p class="term__es">${g.es}</p>`;
      root.appendChild(el);
    });
  }

  function renderSources() {
    const root = $('#sourcesList');
    K.fuentes.forEach((f) => {
      const li = document.createElement('li');
      li.innerHTML = `<span>${f.nombre} <a href="${f.url}" target="_blank" rel="noopener noreferrer">${f.url.replace(/^https?:\/\//, '')}</a></span>`;
      root.appendChild(li);
    });
  }

  function renderAll() {
    renderStats(); renderMarquee(); renderRoles(); renderFairs(); renderMexico();
    renderManifesto(); renderValues(); renderHofReads(); renderReligion(); renderStructure(); renderLaender();
    renderRisks(); renderChecklist(); renderGlossary(); renderSources();
  }

  /* =================== RELOJ DE BERLÍN =================== */

  function initClock() {
    const el = $('#clockBerlin');
    const note = $('#clockNote');
    const tf = new Intl.DateTimeFormat('es-MX', { timeZone: 'Europe/Berlin', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
    const hf = new Intl.DateTimeFormat('en-US', { timeZone: 'Europe/Berlin', hour: 'numeric', hour12: false, weekday: 'short' });
    function tick() {
      const now = new Date();
      el.textContent = tf.format(now);
      const parts = hf.formatToParts(now);
      const hour = parseInt(parts.find((p) => p.type === 'hour').value, 10) % 24;
      const wd = parts.find((p) => p.type === 'weekday').value;
      const weekend = wd === 'Sat' || wd === 'Sun';
      let msg;
      if (weekend) msg = 'Fin de semana. No es momento de escribir.';
      else if (hour >= 8 && hour < 12) msg = 'Horario de oficina. Buen momento para un correo.';
      else if (hour >= 12 && hour < 13) msg = 'Mittagspause. Espera una hora.';
      else if (hour >= 13 && hour < 17) msg = 'Horario de oficina. Buen momento para llamar.';
      else if (hour >= 17 && hour < 18) msg = 'Los viernes ya es Feierabend. Mejor mañana.';
      else msg = 'Feierabend. El trabajo terminó por hoy.';
      note.textContent = msg;
    }
    tick();
    setInterval(tick, 1000);
  }

  /* =================== HERO CANVAS =================== */

  function initHeroCanvas() {
    const canvas = $('#heroCanvas');
    if (!canvas || REDUCED) return;
    const ctx = canvas.getContext('2d');
    let w, h, dpr, dots = [];
    const GAP = 30;
    const mouse = { x: -9999, y: -9999, active: false };
    let t = 0;

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      dots = [];
      const cols = Math.ceil(w / GAP) + 1, rows = Math.ceil(h / GAP) + 1;
      for (let i = 0; i < cols; i++) for (let j = 0; j < rows; j++) {
        dots.push({ bx: i * GAP, by: j * GAP, x: i * GAP, y: j * GAP, vx: 0, vy: 0 });
      }
    }

    function frame() {
      t += 0.008;
      ctx.clearRect(0, 0, w, h);
      const R = 170, R2 = R * R;
      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];
        const wave = Math.sin(d.bx * 0.01 + t) * Math.cos(d.by * 0.012 + t * 0.8);
        let tx = d.bx, ty = d.by;
        let near = 0;
        if (mouse.active) {
          const dx = d.bx - mouse.x, dy = d.by - mouse.y;
          const dist2 = dx * dx + dy * dy;
          if (dist2 < R2) {
            const dist = Math.sqrt(dist2) || 1;
            near = 1 - dist / R;
            const push = near * near * 26;
            tx += (dx / dist) * push; ty += (dy / dist) * push;
          }
        }
        d.vx += (tx - d.x) * 0.12; d.vy += (ty - d.y) * 0.12;
        d.vx *= 0.72; d.vy *= 0.72;
        d.x += d.vx; d.y += d.vy;
        const base = 0.08 + (wave + 1) * 0.04;
        const size = 1 + near * 1.8;
        if (near > 0.02) {
          ctx.fillStyle = `rgba(227,176,47,${0.25 + near * 0.75})`;
        } else {
          ctx.fillStyle = `rgba(247,247,244,${base})`;
        }
        ctx.beginPath(); ctx.arc(d.x, d.y, size, 0, Math.PI * 2); ctx.fill();
      }
      requestAnimationFrame(frame);
    }

    const hero = $('#hero');
    hero.addEventListener('pointermove', (e) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; mouse.active = true;
    });
    hero.addEventListener('pointerleave', () => { mouse.active = false; });
    window.addEventListener('resize', resize);
    resize();
    frame();
  }

  /* =================== CURSOR =================== */

  function initCursor() {
    const cur = $('#cursor');
    if (!cur || !hasGsap || REDUCED || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    const label = $('#cursorLabel');
    const xTo = gsap.quickTo(cur, 'x', { duration: 0.18, ease: 'power3' });
    const yTo = gsap.quickTo(cur, 'y', { duration: 0.18, ease: 'power3' });
    window.addEventListener('pointermove', (e) => { xTo(e.clientX); yTo(e.clientY); });
    const hoverSel = 'a, button, .acc, .land, .tab, .chip, .check, .opt';
    document.addEventListener('pointerover', (e) => { if (e.target.closest(hoverSel)) cur.classList.add('is-hover'); });
    document.addEventListener('pointerout', (e) => { if (e.target.closest(hoverSel)) cur.classList.remove('is-hover'); });
    document.addEventListener('kit:cursor', (e) => {
      cur.classList.toggle('is-drag', e.detail === 'drag');
      label.textContent = e.detail === 'drag' ? 'ARRASTRA' : '';
    });
  }

  /* =================== BOTONES MAGNÉTICOS =================== */

  function initMagnetic() {
    if (!hasGsap || REDUCED || !window.matchMedia('(hover: hover)').matches) return;
    $$('[data-magnetic]').forEach((btn) => {
      const xTo = gsap.quickTo(btn, 'x', { duration: 0.5, ease: 'elastic.out(1, 0.5)' });
      const yTo = gsap.quickTo(btn, 'y', { duration: 0.5, ease: 'elastic.out(1, 0.5)' });
      btn.addEventListener('pointermove', (e) => {
        const r = btn.getBoundingClientRect();
        xTo((e.clientX - (r.left + r.width / 2)) * 0.3);
        yTo((e.clientY - (r.top + r.height / 2)) * 0.4);
      });
      btn.addEventListener('pointerleave', () => { xTo(0); yTo(0); });
    });
  }

  /* =================== SMOOTH SCROLL =================== */

  let lenis = null;
  function initLenis() {
    if (typeof window.Lenis === 'undefined' || REDUCED) return;
    lenis = new Lenis({ lerp: 0.09, smoothWheel: true, wheelMultiplier: 1 });
    if (hasST) {
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time) => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);
    } else {
      const raf = (time) => { lenis.raf(time); requestAnimationFrame(raf); };
      requestAnimationFrame(raf);
    }
  }

  function scrollToHash(hash) {
    const target = document.querySelector(hash);
    if (!target) return;
    const offset = -72;
    if (lenis) lenis.scrollTo(target, { offset, duration: 1.4 });
    else if (hasGsap && window.ScrollToPlugin) gsap.to(window, { scrollTo: { y: target, offsetY: 72 }, duration: 1, ease: 'power3.inOut' });
    else target.scrollIntoView({ behavior: 'smooth' });
  }

  function initAnchors() {
    document.addEventListener('click', (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const hash = a.getAttribute('href');
      if (hash.length < 2) return;
      e.preventDefault();
      closeMenu();
      scrollToHash(hash);
      history.replaceState(null, '', hash);
    });
  }

  /* =================== NAVEGACIÓN =================== */

  function closeMenu() {
    const burger = $('#burger'), menu = $('#mobileMenu');
    burger.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
    menu.classList.remove('is-open');
    menu.setAttribute('aria-hidden', 'true');
    if (lenis) lenis.start();
  }

  function initNav() {
    const nav = $('#nav');
    const burger = $('#burger');
    const menu = $('#mobileMenu');
    const progress = $('#navProgress');

    burger.addEventListener('click', () => {
      const open = !menu.classList.contains('is-open');
      burger.classList.toggle('is-open', open);
      burger.setAttribute('aria-expanded', String(open));
      menu.classList.toggle('is-open', open);
      menu.setAttribute('aria-hidden', String(!open));
      if (lenis) { if (open) lenis.stop(); else lenis.start(); }
    });

    const darkEls = ['#hero', '#fairs', '#riesgos', '#simulador', '.final', '.footer'].map((s) => document.querySelector(s)).filter(Boolean);
    const NAV_LINE = 40;

    function onScroll() {
      const y = window.scrollY || document.documentElement.scrollTop;
      nav.classList.toggle('is-solid', y > 40);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = Math.min(100, (y / max) * 100) + '%';
      const overDark = darkEls.some((el) => { const r = el.getBoundingClientRect(); return r.top <= NAV_LINE && r.bottom >= NAV_LINE; });
      nav.classList.toggle('is-dark-bg', overDark);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    if (lenis) lenis.on('scroll', onScroll);
    if (hasGsap) gsap.ticker.add(onScroll);
    onScroll();

    if (hasST) {
      const map = { mundo: '#mundo', cultura: '#cultura', negocios: ['#negocios', '#riesgos', '#recomendaciones', '#glosario'], simulador: '#simulador' };
      Object.keys(map).forEach((key) => {
        const sels = [].concat(map[key]);
        sels.forEach((sel) => {
          const el = document.querySelector(sel);
          if (!el) return;
          ScrollTrigger.create({
            trigger: el, start: 'top center', end: 'bottom center',
            onToggle: (self) => {
              if (self.isActive) {
                $$('.nav__links a').forEach((a) => a.classList.toggle('is-active', a.dataset.nav === key));
              }
            }
          });
        });
      });
    }
  }

  /* =================== MOTION =================== */

  function splitLines() {
    if (!hasSplit || !hasST || REDUCED) return;
    $$('.split').forEach((el) => {
      SplitText.create(el, {
        type: 'lines',
        mask: 'lines',
        linesClass: 'line',
        autoSplit: true,
        onSplit(self) {
          return gsap.from(self.lines, {
            yPercent: 110, opacity: 0, duration: 1.1, stagger: 0.08, ease: 'power4.out',
            scrollTrigger: { trigger: el, start: 'top 88%', once: true }
          });
        }
      });
    });
  }

  function initCounters() {
    if (!hasST) {
      $$('[data-count]').forEach((el) => {
        el.innerHTML = `${el.dataset.prefix}${fmt(parseFloat(el.dataset.count), parseInt(el.dataset.dec, 10))}<small>${el.dataset.suffix}</small>`;
      });
      return;
    }
    $$('[data-count]').forEach((el) => {
      const target = parseFloat(el.dataset.count);
      const dec = parseInt(el.dataset.dec, 10);
      const obj = { v: 0 };
      gsap.to(obj, {
        v: target, duration: 2, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 85%', once: true },
        onUpdate: () => { el.innerHTML = `${el.dataset.prefix}${fmt(obj.v, dec)}<small>${el.dataset.suffix}</small>`; }
      });
    });
  }

  function initMarqueeMotion() {
    if (!hasGsap || REDUCED) return;
    const track = $('#marqueeTrack');
    const tween = gsap.to(track, { xPercent: -50, duration: 28, ease: 'none', repeat: -1 });
    const marquee = $('.marquee');
    marquee.addEventListener('pointerenter', () => gsap.to(tween, { timeScale: 0.25, duration: 0.6 }));
    marquee.addEventListener('pointerleave', () => gsap.to(tween, { timeScale: 1, duration: 0.6 }));
    if (hasST) {
      ScrollTrigger.create({
        trigger: marquee, start: 'top bottom', end: 'bottom top',
        onUpdate: (self) => { tween.timeScale(self.direction === -1 ? -1 : 1); }
      });
    }
  }

  function initManifesto() {
    if (!hasST || REDUCED) return;
    const words = $$('#manifestoText .word');
    gsap.to(words, {
      opacity: 1, stagger: 0.06, ease: 'none',
      scrollTrigger: { trigger: '#manifesto', start: 'top 75%', end: 'bottom 40%', scrub: 0.6 }
    });
  }

  function initFairs() {
    if (!hasST || REDUCED) return;
    const mm = gsap.matchMedia();
    mm.add('(min-width: 861px)', () => {
      const section = $('#fairs');
      const pin = $('.fairs__pin');
      const track = $('#fairsTrack');
      const getDistance = () => track.scrollWidth - (window.innerWidth - track.getBoundingClientRect().left) + 40;
      const tween = gsap.to(track, {
        x: () => -getDistance(),
        ease: 'none',
        scrollTrigger: {
          trigger: section, pin, scrub: 0.8, start: 'top top',
          end: () => '+=' + getDistance(),
          invalidateOnRefresh: true, anticipatePin: 1
        }
      });
      $$('.fair', track).forEach((card) => {
        gsap.from(card, {
          scale: 0.86, opacity: 0.35, ease: 'none',
          scrollTrigger: { trigger: card, containerAnimation: tween, start: 'left 95%', end: 'left 60%', scrub: true }
        });
      });
      return () => {};
    });
    mm.add('(max-width: 860px)', () => {
      const track = $('#fairsTrack');
      const pin = $('.fairs__pin');
      pin.style.height = 'auto';
      pin.style.padding = '5rem var(--gutter)';
      track.style.overflowX = 'auto';
      track.style.width = '100%';
      track.style.paddingBottom = '1rem';
      return () => { pin.style.height = ''; pin.style.padding = ''; track.style.overflowX = ''; track.style.width = ''; track.style.paddingBottom = ''; };
    });
  }

  function initRisksStack() {
    if (!hasST || REDUCED) return;
    const cards = $$('.risk');
    cards.forEach((card, i) => {
      const next = cards[i + 1];
      if (!next) return;
      gsap.to(card, {
        scale: 0.94, opacity: 0.35, yPercent: -3, ease: 'none',
        scrollTrigger: { trigger: next, start: 'top bottom', end: 'top 6rem', scrub: true }
      });
    });
  }

  function initReveals() {
    if (!hasST || REDUCED) return;
    const groups = ['.stat', '.role', '.struct', '.land', '.div', '.tradition', '.term', '.phase', '.read', '.scale', '.mexico li', '.holidays li'];
    groups.forEach((sel) => {
      const els = $$(sel);
      if (!els.length) return;
      ScrollTrigger.batch(els, {
        start: 'top 90%',
        once: true,
        onEnter: (batch) => gsap.fromTo(batch, { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, stagger: 0.07, ease: 'power3.out', overwrite: true })
      });
    });
    $$('.chapter__intro, .values__head p, .roles__intro p, .cmap__head p, .risks__head p, .hofstede__chart p, .structure__head p, .laender__head p').forEach((el) => {
      gsap.from(el, { y: 20, opacity: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 90%', once: true } });
    });
    gsap.from('.trade__chart', { y: 40, opacity: 0, duration: 1.1, ease: 'power3.out', scrollTrigger: { trigger: '.trade__chart', start: 'top 85%', once: true } });
    gsap.from('.cmap__summary', { y: 30, opacity: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: '.cmap__summary', start: 'top 90%', once: true } });
    gsap.from('.sim__frame', { y: 40, opacity: 0, duration: 1.1, ease: 'power3.out', scrollTrigger: { trigger: '.sim__frame', start: 'top 85%', once: true } });

    if (hasSplit) {
      const finalTitle = $('#finalTitle');
      const split = SplitText.create(finalTitle, { type: 'chars,words', charsClass: 'char' });
      gsap.from(split.chars, {
        yPercent: 120, opacity: 0, rotate: 6, duration: 1.2, stagger: 0.05, ease: 'power4.out',
        scrollTrigger: { trigger: '.final', start: 'top 70%', once: true }
      });
    }
  }

  /* =================== PRELOADER + INTRO =================== */

  function introHero() {
    const title = $('#heroTitle');
    const lead = $('#heroLead');
    const kicker = $('.hero__kicker');
    const actions = $$('.hero__actions .btn');
    const clock = $('.hero__clock');
    const scroll = $('.hero__scroll');
    const ghost = $('.hero__ghost span');
    if (!hasGsap || REDUCED) return;

    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
    if (hasSplit) {
      const split = SplitText.create(title, { type: 'chars,words', charsClass: 'char' });
      tl.from(split.chars, { yPercent: 110, opacity: 0, duration: 1.2, stagger: { each: 0.035, from: 'start' } }, 0);
    } else {
      tl.from(title, { y: 40, opacity: 0, duration: 1.2 }, 0);
    }
    tl.from(kicker, { y: 16, opacity: 0, duration: 0.9 }, 0.2)
      .from(lead, { y: 24, opacity: 0, duration: 1 }, 0.6)
      .from(actions, { y: 20, opacity: 0, duration: 0.9, stagger: 0.1 }, 0.85)
      .from([clock, scroll], { opacity: 0, duration: 1 }, 1.1)
      .from(ghost, { scale: 1.15, opacity: 0, duration: 2.2, ease: 'power2.out' }, 0);

    gsap.to(ghost, {
      xPercent: -8, ease: 'none',
      scrollTrigger: hasST ? { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true } : undefined
    });
    gsap.to('.hero__content', {
      y: -80, opacity: 0.2, ease: 'none',
      scrollTrigger: hasST ? { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true } : undefined
    });
  }

  function runPreloader(done) {
    const pre = $('#preloader');
    const bar = $('#preloaderBar');
    const words = $$('.preloader__word');
    document.body.classList.add('is-loading');
    if (lenis) lenis.stop();

    if (!hasGsap || REDUCED) {
      pre.remove();
      document.body.classList.remove('is-loading');
      if (lenis) lenis.start();
      done();
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        pre.remove();
        document.body.classList.remove('is-loading');
        if (lenis) lenis.start();
        done();
      }
    });
    tl.to(bar, { width: '100%', duration: 1.6, ease: 'power2.inOut' }, 0)
      .fromTo(words[0], { yPercent: 40, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }, 0.1)
      .to(words[0], { yPercent: -40, opacity: 0, duration: 0.5, ease: 'power3.in' }, 0.9)
      .fromTo(words[1], { yPercent: 40, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }, 1.15)
      .to(words[1], { opacity: 0, duration: 0.3 }, 1.75)
      .to(pre, { yPercent: -100, duration: 0.9, ease: 'power4.inOut' }, 1.75);
    tl.call(introHero, null, 1.95);
  }

  /* =================== ARRANQUE =================== */

  function start() {
    renderAll();
    initLenis();
    initAnchors();
    initNav();
    initClock();
    initHeroCanvas();
    initCursor();
    initMagnetic();
    if (window.KitCharts) KitCharts.init();
    if (window.KitCultureMap) KitCultureMap.init();
    if (window.KitSimulator) KitSimulator.init();

    const afterFonts = () => {
      runPreloader(() => {
        splitLines();
        initCounters();
        initMarqueeMotion();
        initManifesto();
        initFairs();
        initRisksStack();
        initReveals();
        if (hasST) ScrollTrigger.refresh();
        if (location.hash && location.hash.length > 1) setTimeout(() => scrollToHash(location.hash), 200);
      });
    };

    if (document.fonts && document.fonts.ready) document.fonts.ready.then(afterFonts); else afterFonts();
    window.addEventListener('load', () => { if (hasST) ScrollTrigger.refresh(); });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
