/* ==========================================================================
   Le Manaïa — interactions & rendu de la carte
   ========================================================================== */
(function () {
  "use strict";

  /* ---------- helpers ---------- */
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const esc = (str) =>
    String(str).replace(/[&<>"]/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[m]));

  /* ======================================================================
     MENU RENDERING
     ====================================================================== */
  function renderItem(it, dark) {
    const hasPrice = it.price !== undefined && it.price !== "";
    return `
      <div class="mitem">
        <div class="mitem__top">
          <span class="mitem__name">${esc(it.name)}${it.note ? ` <span class="mitem__note">· ${esc(it.note)}</span>` : ""}</span>
          <span class="mitem__dots" aria-hidden="true"></span>
          ${hasPrice ? `<span class="mitem__price">${esc(it.price)}</span>` : ""}
        </div>
        ${it.desc ? `<p class="mitem__desc">${esc(it.desc)}</p>` : ""}
      </div>`;
  }

  function renderVariant(v) {
    let rows = v.rows
      .map((row) => {
        const header = row.altHeader || v.header;
        const cells = row.prices
          .map(
            (p, i) =>
              `<span class="mvariant__cell"><span class="mvariant__lbl">${esc(header[i])}</span><span class="mvariant__val">${esc(p)}</span></span>`
          )
          .join("");
        return `
        <div class="mvariant__row">
          <div class="mvariant__name">${esc(row.name)}</div>
          ${row.desc ? `<p class="mvariant__desc">${esc(row.desc)}</p>` : ""}
          <div class="mvariant__prices">${cells}</div>
        </div>`;
      })
      .join("");
    return `<div class="mvariant">${rows}</div>`;
  }

  function renderGroup(g) {
    const dark = !!g.boxedDark;
    let cls = "mgroup";
    if (g.boxed) cls += " is-boxed";
    if (g.boxedDark) cls += " is-dark";

    // title style: script sub-labels vs serif section titles
    const titleCls = g.script ? "mgroup__title is-script" : "mgroup__title is-serif";

    let body = "";
    if (g.variants) {
      body = renderVariant(g.variants);
    } else if (g.subgroups) {
      body = g.subgroups
        .map(
          (sg) =>
            `<div class="msub"><p class="msub__title">${esc(sg.sub)}</p>${sg.items
              .map((it) => renderItem(it, dark))
              .join("")}</div>`
        )
        .join("");
    } else if (g.items) {
      body = g.items.map((it) => renderItem(it, dark)).join("");
    }

    return `
      <div class="${cls}">
        <div class="mgroup__head">
          <span class="${titleCls}">${esc(g.title)}</span>
          ${g.note ? `<span class="mgroup__note">${esc(g.note)}</span>` : ""}
        </div>
        <div class="mgroup__underline" aria-hidden="true"></div>
        ${body}
      </div>`;
  }

  function renderCategory(key, cat) {
    const nCols = cat.columns.length;
    const colsCls = nCols >= 3 ? "cols-3" : nCols === 2 ? "cols-2" : "cols-1";
    const cols = cat.columns
      .map((col) => `<div class="mcolumn">${col.groups.map(renderGroup).join("")}</div>`)
      .join("");

    return `
      <div class="mpanel" id="panel-${key}" role="tabpanel" aria-label="${esc(cat.label)}">
        ${cat.intro ? `<p class="mpanel__intro">${esc(cat.intro)}</p>` : ""}
        <div class="mcols ${colsCls}">${cols}</div>
      </div>`;
  }

  function buildMenu() {
    const stage = $("#menuStage");
    if (!stage || typeof MENU === "undefined") return;
    const order = ["sales", "sucres", "glaces", "cocktails", "boissons", "vins", "spiritueux"];
    stage.innerHTML = order.map((k) => (MENU[k] ? renderCategory(k, MENU[k]) : "")).join("");
    // activate first
    const first = $("#panel-sales") || stage.querySelector(".mpanel");
    if (first) first.classList.add("is-active");
  }

  /* tabs behaviour */
  function initTabs() {
    const tabs = $$(".mtab");
    const stage = $("#menuStage");
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const cat = tab.dataset.cat;
        tabs.forEach((t) => {
          t.classList.toggle("is-active", t === tab);
          t.setAttribute("aria-selected", t === tab ? "true" : "false");
        });
        $$(".mpanel", stage).forEach((p) => p.classList.toggle("is-active", p.id === `panel-${cat}`));
        // keep active tab centered in the scroller
        tab.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
        // re-run reveal for freshly shown content
        requestAnimationFrame(scanReveal);
      });
    });
  }

  /* ======================================================================
     NAV / SCROLL STATE
     ====================================================================== */
  function initNav() {
    const nav = $("#nav");
    const hero = $("#accueil");
    const totop = $("#totop");

    const onScroll = () => {
      const y = window.scrollY;
      nav.classList.toggle("is-scrolled", y > 40);
      if (totop) totop.classList.toggle("is-visible", y > 600);
    };

    // hero-dark: while hero fills viewport, nav text is light
    const heroObs = new IntersectionObserver(
      ([e]) => document.body.classList.toggle("hero-dark", e.isIntersecting && e.intersectionRatio > 0.35),
      { threshold: [0, 0.35, 0.6] }
    );
    if (hero) heroObs.observe(hero);

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* mobile drawer */
  function initDrawer() {
    const burger = $("#burger");
    const drawer = $("#drawer");
    if (!burger || !drawer) return;
    const close = () => {
      burger.classList.remove("is-open");
      drawer.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
      drawer.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    };
    burger.addEventListener("click", () => {
      const open = drawer.classList.toggle("is-open");
      burger.classList.toggle("is-open", open);
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      drawer.setAttribute("aria-hidden", open ? "false" : "true");
      document.body.style.overflow = open ? "hidden" : "";
    });
    $$(".drawer__links a", drawer).forEach((a) => a.addEventListener("click", close));
    document.addEventListener("keydown", (e) => e.key === "Escape" && close());
  }

  /* ======================================================================
     SCROLL REVEAL
     ====================================================================== */
  let revealObs;
  function scanReveal() {
    if (!revealObs) return;
    $$(".reveal:not(.is-in)").forEach((el) => revealObs.observe(el));
  }
  function initReveal() {
    if (!("IntersectionObserver" in window)) {
      $$(".reveal").forEach((el) => el.classList.add("is-in"));
      return;
    }
    revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("is-in");
            revealObs.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    // tag sections for reveal
    const targets = [
      ".intro__inner", ".menu__header", ".mpanel__intro",
      ".place__media", ".place__text",
      ".gallery__header", ".gtile",
      ".infocard", ".infos__header"
    ];
    $$(targets.join(",")).forEach((el, i) => {
      el.classList.add("reveal");
      el.style.transitionDelay = `${(i % 6) * 60}ms`;
    });
    scanReveal();
  }

  /* ======================================================================
     PRELOADER
     ====================================================================== */
  function initPreloader() {
    const pl = $("#preloader");
    if (!pl) return;
    const done = () => pl.classList.add("is-done");
    window.addEventListener("load", () => setTimeout(done, 1400));
    // safety
    setTimeout(done, 3200);
  }

  /* ======================================================================
     MISC
     ====================================================================== */
  function initYear() {
    const y = $("#year");
    if (y) y.textContent = new Date().getFullYear();
  }

  /* ---------- boot ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    buildMenu();
    initTabs();
    initNav();
    initDrawer();
    initReveal();
    initPreloader();
    initYear();
  });
})();
