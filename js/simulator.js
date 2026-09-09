/* =====================================================================
   Simulador de reunión: conversación con tres personas y controles
   interactivos por escena (compositor de correo, hora de llegada, orden
   de saludo, armado de presentación, respuesta a objeción, cierre).
   ===================================================================== */

(function () {
  'use strict';

  const hasGsap = () => typeof window.gsap !== 'undefined';

  const PEOPLE = {
    H: { id: 'H', name: 'Dra. Hartmann', role: 'Directora general', initials: 'KH' },
    V: { id: 'V', name: 'Herr Vogel', role: 'Director técnico', initials: 'MV' },
    Y: { id: 'Y', name: 'Frau Yilmaz', role: 'Ingeniera de compras', initials: 'AY' }
  };

  const DIAG = [
    { min: 50, titulo: 'Verhandlungsprofi', texto: 'Estás listo para negociar en Alemania. Entiendes que la formalidad es respeto, la crítica es interés y la lentitud es seriedad.' },
    { min: 30, titulo: 'Fortgeschritten', texto: 'Buen instinto con puntos ciegos. Repasa los riesgos y el mapa cultural, en especial crítica, tiempo y decisiones.' },
    { min: 0, titulo: 'Anfänger', texto: 'Tu estilo funciona en México pero choca con el código alemán. Empieza por Ordnung, Pünktlichkeit y Sachlichkeit, y vuelve a intentarlo.' }
  ];

  function init() {
    const chat = document.getElementById('simChat');
    const controls = document.getElementById('simControls');
    const peopleEl = document.getElementById('simPeople');
    const scoreEl = document.getElementById('simScore');
    const maxEl = document.getElementById('simMax');
    if (!chat || !controls) return;

    const MAX = 60;
    maxEl.textContent = MAX;
    let score = 0;
    let scene = 0;
    const results = [];
    const trust = { H: 50, V: 50, Y: 50 };

    /* ---------- personas ---------- */
    Object.values(PEOPLE).forEach((p) => {
      const el = document.createElement('div');
      el.className = 'person'; el.dataset.id = p.id;
      el.innerHTML = `<span class="person__avatar">${p.initials}</span><span class="person__meta"><span class="person__name">${p.name}</span><span class="person__bar"><i style="width:50%"></i></span></span>`;
      peopleEl.appendChild(el);
    });
    function bump(id, delta) {
      trust[id] = Math.max(5, Math.min(100, trust[id] + delta));
      const el = peopleEl.querySelector(`.person[data-id="${id}"]`);
      const bar = el.querySelector('.person__bar i');
      bar.style.width = trust[id] + '%';
      bar.style.background = trust[id] >= 60 ? 'var(--green)' : trust[id] >= 40 ? 'var(--accent)' : 'var(--red)';
      el.classList.remove('is-up', 'is-down');
      requestAnimationFrame(() => el.classList.add(delta >= 0 ? 'is-up' : 'is-down'));
      setTimeout(() => el.classList.remove('is-up', 'is-down'), 900);
    }
    function setScore(v) {
      const from = score; score = v;
      if (hasGsap()) { const o = { v: from }; gsap.to(o, { v: score, duration: 0.6, ease: 'power2.out', onUpdate: () => { scoreEl.textContent = Math.round(o.v); } }); }
      else scoreEl.textContent = score;
    }

    /* ---------- chat ---------- */
    const wait = (ms) => new Promise((r) => setTimeout(r, ms));
    function bubble(kind, html, who) {
      const el = document.createElement('div');
      el.className = `msg msg--${kind}`;
      el.innerHTML = (who ? `<span class="msg__who">${who}</span>` : '') + html;
      chat.appendChild(el);
      if (hasGsap()) gsap.fromTo(el, { y: 12, opacity: 0, scale: 0.97 }, { y: 0, opacity: 1, scale: 1, duration: 0.45, ease: 'power3.out' });
      chat.scrollTop = chat.scrollHeight;
      return el;
    }
    async function them(person, text, delay) {
      const t = bubble('them', '<span class="typing"><i></i><i></i><i></i></span>', person.name);
      await wait(delay || 700 + Math.min(1200, text.length * 12));
      t.innerHTML = `<span class="msg__who">${person.name} · ${person.role}</span>${text}`;
      chat.scrollTop = chat.scrollHeight;
    }
    const me = (text) => bubble('me', text);
    const sys = (text, cls) => bubble('sys' + (cls ? ' is-' + cls : ''), text);

    function clearControls() { controls.innerHTML = ''; }
    function ctl(html) {
      const wrap = document.createElement('div');
      wrap.innerHTML = html;
      while (wrap.firstChild) controls.appendChild(wrap.firstChild);
      if (hasGsap()) gsap.fromTo(controls.children, { y: 10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, stagger: 0.05, ease: 'power3.out' });
    }
    function actions(label, onClick, disabled) {
      const row = document.createElement('div');
      row.className = 'ctl__actions';
      const b = document.createElement('button');
      b.className = 'btn btn--accent btn--small'; b.textContent = label; b.disabled = !!disabled;
      b.addEventListener('click', onClick);
      row.appendChild(b); controls.appendChild(row);
      return b;
    }
    function segControl(label, options, onChange) {
      const wrap = document.createElement('div');
      wrap.className = 'ctl__seg';
      wrap.innerHTML = `<span class="ctl__label">${label}</span><div class="seg"></div>`;
      const seg = wrap.querySelector('.seg');
      let value = null;
      options.forEach((o, i) => {
        const b = document.createElement('button');
        b.className = 'seg__btn'; b.type = 'button'; b.textContent = o.label;
        b.addEventListener('click', () => { seg.querySelectorAll('.seg__btn').forEach((x) => x.classList.remove('is-active')); b.classList.add('is-active'); value = i; onChange(i); });
        seg.appendChild(b);
      });
      controls.appendChild(wrap);
      return () => value;
    }

    async function feedback(pts, best, text, person, extra) {
      const good = pts >= best * 0.7;
      sys(`${good ? 'Bien resuelto' : 'Costó puntos'} · ${pts} de ${best}. ${text}`, good ? 'good' : 'bad');
      results[scene] = pts;
      setScore(score + pts);
      bump(person, Math.round((pts - best / 2) * 1.6));
      if (extra) extra.forEach(([id, d]) => bump(id, d));
      clearControls();
      const last = scene === SCENES.length - 1;
      actions(last ? 'Ver mi diagnóstico' : 'Continuar', () => { scene += 1; if (scene < SCENES.length) SCENES[scene](); else end(); });
    }

    /* ---------- escenas ---------- */

    async function s1() {
      clearControls();
      sys('Paso 1 de 6 · El correo');
      await them(PEOPLE.H, 'Recibí su mensaje a través de CAMEXA. Estoy a la espera de su propuesta de reunión.', 900);
      const parts = { g: null, t: null, c: null };
      const G = [{ label: 'Hola Katrin,', pts: 0, txt: 'Hola Katrin,' }, { label: 'Estimada Dra. Hartmann:', pts: 3, txt: 'Estimada Dra. Hartmann:' }, { label: 'Sehr geehrte Frau Dr. Hartmann,', pts: 4, txt: 'Sehr geehrte Frau Dr. Hartmann,' }];
      const T = [{ label: 'Esta semana', pts: 0, txt: 'me encantaría platicar esta semana, ¿qué día le queda bien?' }, { label: '14 o 21 de octubre, 60 min', pts: 3, txt: 'propongo una reunión de 60 minutos el 14 o el 21 de octubre.' }];
      const C = [{ label: '"¡Oportunidad increíble!"', pts: 0, txt: 'Tenemos una oportunidad increíble que va a revolucionar su negocio.' }, { label: 'Adjunto agenda', pts: 3, txt: 'Adjunto la agenda propuesta. Quedo atento a su confirmación.' }];
      const preview = document.createElement('div');
      preview.className = 'preview'; preview.textContent = 'Tu correo aparecerá aquí.';
      controls.appendChild(preview);
      let send;
      const paint = () => {
        const g = parts.g !== null ? G[parts.g].txt : '…'; const t = parts.t !== null ? T[parts.t].txt : '…'; const c = parts.c !== null ? C[parts.c].txt : '…';
        preview.textContent = `${g}\n\n${t} ${c}`;
        send.disabled = parts.g === null || parts.t === null || parts.c === null;
      };
      segControl('Saludo', G, (i) => { parts.g = i; paint(); });
      segControl('Plazo', T, (i) => { parts.t = i; paint(); });
      segControl('Cierre', C, (i) => { parts.c = i; paint(); });
      send = actions('Enviar correo', async () => {
        const pts = G[parts.g].pts + T[parts.t].pts + C[parts.c].pts;
        me(preview.textContent.replace(/\n\n/g, '<br><br>'));
        clearControls();
        await them(PEOPLE.H, pts >= 8 ? 'Gracias por la propuesta clara. Confirmo el 21 de octubre a las 10:00 en Stuttgart. Agenda recibida.' : pts >= 4 ? 'Gracias. ¿Podría enviarme una agenda y dos fechas concretas para revisarlas con mi equipo?' : 'Le agradecería un tono más formal y una propuesta concreta de fecha y agenda.');
        feedback(pts, 10, pts >= 8 ? 'Título correcto, fechas con anticipación y agenda por escrito.' : 'En Alemania el primer correo define si te toman en serio: título, fechas concretas y agenda.', 'H');
      }, true);
    }

    async function s2() {
      clearControls();
      sys('Paso 2 de 6 · La llegada');
      await them(PEOPLE.Y, 'La reunión es a las 10:00. Por favor regístrese en recepción al llegar.', 800);
      let minutes = 600; let notify = false;
      const out = document.createElement('div'); out.className = 'range-out';
      const paint = () => { const h = Math.floor(minutes / 60), m = minutes % 60; out.innerHTML = `${h}:${String(m).padStart(2, '0')}<small>${minutes < 595 ? 'con margen' : minutes <= 600 ? 'justo a tiempo' : `${minutes - 600} min tarde`}</small>`; };
      paint();
      ctl('<span class="ctl__label">Tu tren tiene retraso. ¿A qué hora llegas a la puerta?</span>');
      controls.appendChild(out);
      const range = document.createElement('input');
      range.type = 'range'; range.className = 'range'; range.min = 580; range.max = 615; range.value = 600;
      range.addEventListener('input', () => { minutes = parseInt(range.value, 10); paint(); });
      controls.appendChild(range);
      const tg = document.createElement('label');
      tg.className = 'toggle';
      tg.innerHTML = '<input type="checkbox"><span class="toggle__track"></span><span>Llamo a la asistente antes de las 10:00 para avisar</span>';
      tg.querySelector('input').addEventListener('change', (e) => { notify = e.target.checked; });
      controls.appendChild(tg);
      actions('Llegar', async () => {
        let pts = minutes <= 592 ? 7 : minutes <= 600 ? 5 : 1;
        if (notify) pts += 3;
        me(`Llego a las ${Math.floor(minutes / 60)}:${String(minutes % 60).padStart(2, '0')}${notify ? ' y avisé por teléfono antes.' : '.'}`);
        clearControls();
        await them(PEOPLE.H, minutes > 600 && !notify ? 'Le esperábamos a las 10:00. Tenemos menos tiempo del previsto.' : minutes > 600 ? 'Gracias por avisar. Ajustamos la agenda para terminar a tiempo.' : 'Puntual. Pasemos a la sala.');
        feedback(pts, 10, minutes <= 592 && notify ? 'Con margen y avisando: la combinación perfecta.' : minutes > 600 && !notify ? 'Ocho minutos sin aviso ya dejan huella. Avisa siempre antes de la hora.' : 'Bien. Un aviso previo suma aunque llegues a tiempo.', 'H', [['Y', notify ? 4 : -2]]);
      });
    }

    async function s3() {
      clearControls();
      sys('Paso 3 de 6 · Los primeros minutos');
      await them(PEOPLE.Y, 'En la sala están la Dra. Hartmann, Herr Vogel y yo.', 700);
      const order = [];
      ctl('<span class="ctl__label">Toca a las personas en el orden en que las saludas</span>');
      const row = document.createElement('div'); row.className = 'ctl__row';
      const shown = document.createElement('div'); shown.className = 'order'; shown.innerHTML = '<small>Aún no saludas a nadie.</small>';
      ['Y', 'V', 'H'].forEach((id) => {
        const b = document.createElement('button'); b.className = 'pick'; b.type = 'button';
        b.innerHTML = `<b>${order.length}</b>${PEOPLE[id].name}`;
        b.addEventListener('click', () => {
          order.push(id); b.classList.add('is-used');
          shown.innerHTML = order.map((o, i) => `<span>${i + 1}. ${PEOPLE[o].name}</span>`).join('');
          if (order.length === 3) topic.style.display = '';
        });
        row.appendChild(b);
      });
      controls.appendChild(row); controls.appendChild(shown);
      const topic = document.createElement('div'); topic.style.display = 'none'; topic.className = 'ctl__seg';
      topic.innerHTML = '<span class="ctl__label">¿Con qué rompes el hielo?</span>';
      const T = [{ t: 'Un comentario breve sobre lo puntual del tren alemán', pts: 6, r: 'Un comentario neutro y breve. Directo al trabajo después.' }, { t: 'Un chiste sobre el tráfico y preguntas por sus familias', pts: 0, r: 'Humor prematuro y preguntas personales: no entiendes el código.' }, { t: 'Nada. Te sientas y esperas a que hablen', pts: 3, r: 'Aceptable, pero un saludo cálido y breve suma.' }];
      let chosen = null;
      T.forEach((o, i) => {
        const b = document.createElement('button'); b.className = 'opt'; b.type = 'button'; b.textContent = o.t;
        b.addEventListener('click', () => { topic.querySelectorAll('.opt').forEach((x) => x.classList.remove('is-picked')); b.classList.add('is-picked'); chosen = i; go.disabled = false; });
        topic.appendChild(b);
      });
      controls.appendChild(topic);
      const go = actions('Saludar', async () => {
        const correct = order.join('') === 'HVY';
        const orderPts = correct ? 4 : order[0] === 'H' ? 2 : 0;
        const pts = orderPts + T[chosen].pts;
        me(`Saludo a ${order.map((o) => PEOPLE[o].name).join(', ')}. ${T[chosen].t}.`);
        clearControls();
        await them(PEOPLE.V, correct ? 'Buenos días. Empecemos con la agenda.' : 'Buenos días. Le presento a mis colegas por su cargo: la Dra. Hartmann dirige la empresa.');
        feedback(pts, 10, `${correct ? 'Orden por rango correcto.' : 'El saludo empieza por el mayor rango y llega a todos.'} ${T[chosen].r}`, 'Y', [['H', correct ? 3 : -2]]);
      }, true);
    }

    async function s4() {
      clearControls();
      sys('Paso 4 de 6 · La presentación');
      await them(PEOPLE.V, 'Tiene 20 minutos. Nos interesa cómo produce, no solo qué produce.', 800);
      const SLIDES = [
        { id: 'ctx', t: 'Contexto del mercado' }, { id: 'met', t: 'Método y proceso' }, { id: 'cert', t: 'Certificaciones y datos' },
        { id: 'cas', t: 'Casos con cifras' }, { id: 'prop', t: 'Propuesta y precio' }, { id: 'vid', t: 'Video emocional de la empresa' }
      ];
      const IDEAL = ['ctx', 'met', 'cert', 'cas', 'prop'];
      const order = [];
      ctl('<span class="ctl__label">Arma tu presentación tocando las diapositivas en orden (5 espacios)</span>');
      const row = document.createElement('div'); row.className = 'ctl__row';
      const shown = document.createElement('div'); shown.className = 'order'; shown.innerHTML = '<small>Sin diapositivas.</small>';
      const buttons = {};
      SLIDES.forEach((s) => {
        const b = document.createElement('button'); b.className = 'pick'; b.type = 'button'; b.textContent = s.t;
        b.addEventListener('click', () => {
          if (order.length >= 5) return;
          order.push(s.id); b.classList.add('is-used');
          shown.innerHTML = order.map((o, i) => `<span>${i + 1}. ${SLIDES.find((x) => x.id === o).t}</span>`).join('');
          present.disabled = order.length < 5;
        });
        buttons[s.id] = b; row.appendChild(b);
      });
      controls.appendChild(row); controls.appendChild(shown);
      const undoRow = document.createElement('div'); undoRow.className = 'ctl__actions';
      const undo = document.createElement('button'); undo.className = 'btn btn--glass glass btn--small'; undo.textContent = 'Quitar última';
      undo.addEventListener('click', () => { const id = order.pop(); if (id) buttons[id].classList.remove('is-used'); shown.innerHTML = order.length ? order.map((o, i) => `<span>${i + 1}. ${SLIDES.find((x) => x.id === o).t}</span>`).join('') : '<small>Sin diapositivas.</small>'; present.disabled = order.length < 5; });
      undoRow.appendChild(undo); controls.appendChild(undoRow);
      const present = actions('Presentar', async () => {
        let pts = 0;
        order.forEach((id, i) => { if (IDEAL[i] === id) pts += 2; else if (IDEAL.includes(id)) pts += 1; });
        if (order.includes('vid')) pts = Math.max(0, pts - 3);
        if (order[0] === 'prop') pts = Math.max(0, pts - 2);
        me(`Presento: ${order.map((o) => SLIDES.find((x) => x.id === o).t).join(' → ')}.`);
        clearControls();
        await them(PEOPLE.V, pts >= 8 ? 'Estructura clara. Las certificaciones responden a mis dudas antes de preguntar.' : order.includes('vid') ? 'El video no nos dice nada sobre sus tolerancias. Vayamos a los datos.' : 'Me falta el método antes de la conclusión. ¿Cómo garantiza la calidad?');
        feedback(pts, 10, pts >= 8 ? 'Deductivo: contexto, método, evidencia, propuesta.' : 'El alemán quiere el porqué y el cómo antes del qué. Sin video, sin empezar por el precio.', 'V');
      }, true);
    }

    async function s5() {
      clearControls();
      sys('Paso 5 de 6 · La objeción');
      await them(PEOPLE.V, 'Sus datos de tolerancia son insuficientes. Así no funciona con nuestras máquinas.', 1100);
      const O = [
        { t: '"Con respeto, creo que no está entendiendo la propuesta. Nuestros clientes están muy contentos."', pts: 0, r: 'Defensivo y personal; el argumento no es técnico.', reply: 'No hablo de sus otros clientes. Hablo de nuestras máquinas.' },
        { t: '"Gracias por la precisión. ¿Qué rango requiere su línea? Le envío el reporte de metrología esta semana."', pts: 10, r: 'Tomas la crítica como información y comprometes una entrega concreta.', reply: '± 0.01 mm. Si su reporte lo confirma, seguimos.' },
        { t: '"Sí, claro, eso lo ajustamos sin problema." Y cambias de tema.', pts: 2, r: 'Un sí vacío. Vogel lo anotará y lo contrastará después.', reply: 'Lo anoto. Espero ver ese ajuste por escrito.' }
      ];
      ctl('<span class="ctl__label">¿Cómo respondes?</span>');
      O.forEach((o) => {
        const b = document.createElement('button'); b.className = 'opt'; b.type = 'button'; b.textContent = o.t;
        b.addEventListener('click', async () => {
          me(o.t.replace(/^"|"$/g, ''));
          clearControls();
          await them(PEOPLE.V, o.reply);
          feedback(o.pts, 10, o.r, 'V', [['H', o.pts >= 8 ? 3 : -1]]);
        });
        controls.appendChild(b);
      });
    }

    async function s6() {
      clearControls();
      sys('Paso 6 de 6 · El cierre');
      await them(PEOPLE.H, 'Lo analizaremos internamente y le informaremos en cuatro semanas.', 900);
      const O = [
        { t: 'Insistes: "¿No podríamos definirlo la próxima semana? Tengo otras ofertas."', pts: 0, r: 'Presionar el proceso alemán es contraproducente. Cuatro semanas son una buena señal.', reply: 'Nuestro proceso es el que es. Le informaremos.' },
        { t: 'Agradeces, confirmas el plazo y ofreces enviar un Protokoll con acuerdos y fechas.', pts: 7, r: 'Respetas el proceso y formalizas por escrito.', reply: 'Perfecto. Esperamos su Protokoll.' },
        { t: 'Los invitas a cenar esa noche para "cerrar la relación".', pts: 3, r: 'Intención buena, orden inverso: la relación llega después del desempeño.', reply: 'Gracias, hoy no será posible. Quizá más adelante.' }
      ];
      ctl('<span class="ctl__label">¿Qué haces?</span>');
      O.forEach((o) => {
        const b = document.createElement('button'); b.className = 'opt'; b.type = 'button'; b.textContent = o.t;
        b.addEventListener('click', async () => {
          me(o.t);
          clearControls();
          await them(PEOPLE.H, o.reply);
          let hours = 24;
          const out = document.createElement('div'); out.className = 'range-out';
          const paint = () => { out.innerHTML = `${hours} h<small>${hours <= 24 ? 'dentro del estándar alemán' : hours <= 48 ? 'aceptable, pero tarde' : 'demasiado tarde'}</small>`; };
          paint();
          ctl('<span class="ctl__label">¿Cuántas horas después envías el resumen por escrito?</span>');
          controls.appendChild(out);
          const range = document.createElement('input'); range.type = 'range'; range.className = 'range'; range.min = 2; range.max = 96; range.step = 2; range.value = 24;
          range.addEventListener('input', () => { hours = parseInt(range.value, 10); paint(); });
          controls.appendChild(range);
          actions('Enviar resumen', async () => {
            const extra = hours <= 24 ? 3 : hours <= 48 ? 1 : 0;
            me(`Envío el Protokoll ${hours} horas después de la reunión.`);
            clearControls();
            await them(PEOPLE.Y, hours <= 24 ? 'Recibido. Coincide con lo acordado. Lo circulo al equipo.' : 'Recibido. Habíamos esperado el resumen antes.');
            feedback(o.pts + extra, 10, `${o.r} ${hours <= 24 ? 'Y el Protokoll en 24 horas cierra el círculo.' : 'El Protokoll llegó tarde; el estándar es 24 horas.'}`, 'H', [['Y', extra >= 3 ? 3 : -1]]);
          });
        });
        controls.appendChild(b);
      });
    }

    const SCENES = [s1, s2, s3, s4, s5, s6];

    function end() {
      const diag = DIAG.find((d) => score >= d.min) || DIAG[DIAG.length - 1];
      const weak = results.map((p, i) => ({ p, i })).filter((x) => x.p < 6).map((x) => ['el correo', 'la llegada', 'los primeros minutos', 'la presentación', 'la objeción', 'el cierre'][x.i]);
      const best = Object.keys(trust).sort((a, b) => trust[b] - trust[a])[0];
      const worst = Object.keys(trust).sort((a, b) => trust[a] - trust[b])[0];
      sys('Fin de la reunión');
      clearControls();
      const r = document.createElement('div');
      r.className = 'result';
      r.innerHTML = `<span class="result__tag">${diag.titulo}</span><h3>${score} de ${MAX} puntos</h3><p>${diag.texto}</p><p>${weak.length ? `Puntos débiles: ${weak.join(', ')}.` : 'No fallaste ninguna situación.'} Quien más confía en ti: ${PEOPLE[best].name}. Quien menos: ${PEOPLE[worst].name}.</p>`;
      controls.appendChild(r);
      const row = document.createElement('div'); row.className = 'ctl__actions'; row.style.justifyContent = 'center';
      const again = document.createElement('button'); again.className = 'btn btn--accent btn--small'; again.textContent = 'Volver a intentarlo';
      again.addEventListener('click', restart);
      const link = document.createElement('a'); link.className = 'btn btn--glass glass btn--small'; link.href = '#riesgos'; link.textContent = 'Repasar los riesgos';
      row.appendChild(again); row.appendChild(link); controls.appendChild(row);
      if (hasGsap()) gsap.fromTo(r, { y: 16, opacity: 0, scale: 0.97 }, { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: 'power3.out' });
    }

    function restart() {
      chat.innerHTML = ''; results.length = 0; scene = 0; setScore(0);
      Object.keys(trust).forEach((id) => { trust[id] = 50; const bar = peopleEl.querySelector(`.person[data-id="${id}"] .person__bar i`); bar.style.width = '50%'; bar.style.background = 'var(--accent)'; });
      intro();
    }

    function intro() {
      clearControls();
      sys('Maschinenbau Hartmann GmbH · Stuttgart · empresa familiar, 480 empleados');
      them(PEOPLE.H, 'Buenos días. Soy Katrin Hartmann, directora general. Mi equipo y yo revisaremos su propuesta como proveedor de componentes.', 600).then(() => {
        actions('Comenzar la reunión', () => SCENES[0]());
      });
    }

    intro();
  }

  window.KitSimulator = { init };
})();
