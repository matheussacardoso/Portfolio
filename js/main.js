(function () {
  "use strict";

  var D = window.PORTFOLIO;
  var root = document.documentElement;
  root.classList.add("js");

  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var lang = store.get("lang") || ((navigator.language || "en").toLowerCase().indexOf("pt") === 0 ? "pt" : "en");
  var currentFilter = "all";

  function $(id) { return document.getElementById(id); }
  function t(key) { return (D.i18n[lang] && D.i18n[lang][key]) || D.i18n.en[key] || ""; }
  function tr(v) { return v && typeof v === "object" ? (v[lang] || v.en || "") : (v || ""); }
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  /* ---------- Static bindings ---------- */
  function bindStatic() {
    var p = D.profile, s = D.socials;
    $("heroName").textContent = p.name;
    $("heroPhoto").src = p.photo;

    $("heroGithub").href = s.github;
    $("heroLinkedin").href = s.linkedin;
    $("footGithub").href = s.github;
    $("footLinkedin").href = s.linkedin;
    $("contactEmail").href = "mailto:" + s.email;
    $("footEmail").href = "mailto:" + s.email;
    $("contactMailText").textContent = s.email;
    $("cvLink").href = p.cv;
    $("navCv").href = p.cv;
    $("year").textContent = new Date().getFullYear();
  }

  /* ---------- i18n ---------- */
  function applyLang() {
    root.lang = lang === "pt" ? "pt-BR" : "en";
    document.querySelectorAll("[data-i18n]").forEach(function (n) {
      var v = t(n.getAttribute("data-i18n"));
      if (v) n.textContent = v;
    });
    $("langToggle").textContent = lang === "pt" ? "EN" : "PT";
    $("langToggle").setAttribute("aria-label", lang === "pt" ? "Switch to English" : "Mudar para Português");
    $("aboutText").innerHTML = tr(D.about); // trusted, author-controlled HTML
    $("heroRole").textContent = tr(D.profile.role);
    $("footLocation").textContent = tr(D.profile.location);
    renderStats();
    renderProjects();
    renderTimeline("educationList", D.education);
    renderTimeline("experienceList", D.experience);
    renderLanguages();
    restartTyped();
  }

  $("langToggle").addEventListener("click", function () {
    lang = lang === "pt" ? "en" : "pt";
    store.set("lang", lang);
    applyLang();
  });

  /* ---------- Theme ---------- */
  function effectiveTheme() {
    return root.dataset.theme || (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
  }
  function syncThemeColor() {
    var m = document.querySelector('meta[name="theme-color"]');
    if (m) m.content = effectiveTheme() === "light" ? "#f6f5f1" : "#0b0b0f";
  }
  $("themeToggle").addEventListener("click", function () {
    var next = effectiveTheme() === "light" ? "dark" : "light";
    root.dataset.theme = next;
    store.set("theme", next);
    syncThemeColor();
  });
  syncThemeColor();

  /* ---------- About stats ---------- */
  function renderStats() {
    var ul = $("stats");
    ul.textContent = "";
    (D.stats || []).forEach(function (s) {
      var li = el("li");
      li.appendChild(el("strong", null, s.value));
      li.appendChild(el("span", null, tr(s.label)));
      ul.appendChild(li);
    });
  }

  /* ---------- Projects ---------- */
  function projectCard(p) {
    var card = el("article", "card reveal is-visible");
    card.dataset.category = p.category;

    var top = el("div", "card__top");
    top.appendChild(el("span", "badge" + (p.status === "ongoing" ? " badge--ongoing" : ""), t("status." + p.status)));
    if (p.year) top.appendChild(el("span", "card__year", p.year));
    card.appendChild(top);

    card.appendChild(el("h4", "card__title", tr(p.title)));
    card.appendChild(el("p", "card__desc", tr(p.description)));

    var tags = el("ul", "tags");
    (p.tags || []).forEach(function (tg) { tags.appendChild(el("li", "tag", tg)); });
    card.appendChild(tags);

    var links = el("div", "card__links");
    [[p.link, "card.code"], [p.demo, "card.demo"]].forEach(function (l) {
      if (!l[0]) return;
      var a = el("a", "card__link");
      a.href = l[0]; a.target = "_blank"; a.rel = "noopener";
      a.appendChild(document.createTextNode(t(l[1]) + " "));
      a.appendChild(el("span", "arrow", "↗"));
      links.appendChild(a);
    });
    card.appendChild(links);
    return card;
  }

  function renderProjects() {
    var groups = { ongoingGrid: "ongoing", recentGrid: "completed" };
    Object.keys(groups).forEach(function (id) {
      var grid = $(id);
      grid.textContent = "";
      var list = D.projects.filter(function (p) {
        return p.status === groups[id] && (currentFilter === "all" || p.category === currentFilter);
      });
      if (!list.length) { grid.appendChild(el("p", "empty", t("empty"))); return; }
      list.forEach(function (p) { grid.appendChild(projectCard(p)); });
    });
  }

  document.querySelectorAll(".chip[data-filter]").forEach(function (chip) {
    chip.addEventListener("click", function () {
      document.querySelectorAll(".chip[data-filter]").forEach(function (c) {
        c.classList.toggle("is-active", c === chip);
        c.setAttribute("aria-selected", c === chip ? "true" : "false");
      });
      currentFilter = chip.dataset.filter;
      renderProjects();
    });
  });

  /* ---------- Resume ---------- */
  function renderTimeline(id, items) {
    var ol = $(id);
    ol.textContent = "";
    (items || []).forEach(function (it) {
      var li = el("li");
      li.appendChild(el("span", "timeline__period", tr(it.period)));
      li.appendChild(el("h4", "timeline__title", tr(it.title)));
      if (it.place) li.appendChild(el("p", "timeline__place", tr(it.place)));
      if (it.description) li.appendChild(el("p", "timeline__desc", tr(it.description)));
      var bullets = it.bullets && (it.bullets[lang] || it.bullets.en);
      if (bullets && bullets.length) {
        var ul = el("ul", "timeline__bullets");
        bullets.forEach(function (b) { ul.appendChild(el("li", null, b)); });
        li.appendChild(ul);
      }
      if (it.stack && it.stack.length) {
        var tags = el("ul", "tags");
        it.stack.forEach(function (tg) { tags.appendChild(el("li", "tag", tg)); });
        li.appendChild(tags);
      }
      ol.appendChild(li);
    });
  }

  function renderCerts() {
    var ul = $("certList");
    (D.certifications || []).forEach(function (c) { ul.appendChild(el("li", null, tr(c))); });
  }

  function renderLanguages() {
    var ul = $("langList");
    ul.textContent = "";
    (D.languages || []).forEach(function (l) {
      var li = el("li");
      li.appendChild(el("span", null, tr(l.name)));
      li.appendChild(el("span", null, tr(l.level)));
      ul.appendChild(li);
    });
  }

  /* ---------- Skills ---------- */
  function renderSkills(id, items) {
    var ul = $(id);
    items.forEach(function (s) {
      var li = el("li");
      var a = el("a", "skill");
      a.href = s.url; a.target = "_blank"; a.rel = "noopener"; a.title = s.name;
      if (s.icon) { var i = el("i", s.icon); i.setAttribute("aria-hidden", "true"); a.appendChild(i); }
      else a.appendChild(el("span", "skill__fallback", s.name.slice(0, 2).toUpperCase()));
      a.appendChild(el("span", null, s.name));
      li.appendChild(a);
      ul.appendChild(li);
    });
  }

  /* ---------- Typed role ---------- */
  var typedTimer = null;
  function restartTyped() {
    clearTimeout(typedTimer);
    var words = tr(D.profile.typed) || [];
    var node = $("typed");
    if (!words.length) return;
    if (reduceMotion) { node.textContent = words[0]; return; }
    var w = 0, c = 0, deleting = false;
    (function tick() {
      var word = words[w];
      c += deleting ? -1 : 1;
      node.textContent = word.slice(0, c);
      var delay = deleting ? 40 : 85;
      if (!deleting && c === word.length) { deleting = true; delay = 1600; }
      else if (deleting && c === 0) { deleting = false; w = (w + 1) % words.length; delay = 350; }
      typedTimer = setTimeout(tick, delay);
    })();
  }

  /* ---------- Header, mobile menu, scroll-spy ---------- */
  var header = $("header"), nav = $("nav"), menuBtn = $("menuToggle");
  function onScroll() { header.classList.toggle("is-scrolled", window.scrollY > 10); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  function setMenu(open) {
    nav.classList.toggle("is-open", open);
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
  }
  menuBtn.addEventListener("click", function () { setMenu(!nav.classList.contains("is-open")); });
  nav.addEventListener("click", function (e) { if (e.target.closest("a")) setMenu(false); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });

  var links = {};
  document.querySelectorAll(".nav__link").forEach(function (a) { links[a.getAttribute("href").slice(1)] = a; });

  if ("IntersectionObserver" in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        Object.keys(links).forEach(function (k) { links[k].classList.toggle("is-active", k === en.target.id); });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    document.querySelectorAll("main section[id]").forEach(function (s) { spy.observe(s); });

    var revealer = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-visible"); revealer.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal:not(.is-visible)").forEach(function (n) { revealer.observe(n); });
  } else {
    document.querySelectorAll(".reveal").forEach(function (n) { n.classList.add("is-visible"); });
  }

  /* ---------- Init ---------- */
  bindStatic();
  renderCerts();
  renderSkills("skillsLanguages", D.skills.languages);
  renderSkills("skillsTools", D.skills.tools);
  applyLang();
})();
