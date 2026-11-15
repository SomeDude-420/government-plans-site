/* ============================================================
   Simple Plans - the page logic.
   Jobs:
     1. Pick the language (English or Hindi).
     2. Draw the list of plans on index.html.
     3. Draw one plan on plan.html.
   You should not need to change this file to add a plan.
   ============================================================ */

const LANG_KEY = "simple-plans-lang";

function getLang() {
  const fromUrl = new URLSearchParams(window.location.search).get("lang");
  if (fromUrl === "hi" || fromUrl === "en") {
    localStorage.setItem(LANG_KEY, fromUrl);
    return fromUrl;
  }
  return localStorage.getItem(LANG_KEY) === "hi" ? "hi" : "en";
}

let LANG = getLang();

/* Get a word from js/ui.js in the current language. */
function txt(key) {
  const table = UI[LANG] || UI.en;
  return Object.prototype.hasOwnProperty.call(table, key) ? table[key] : UI.en[key] || key;
}

/* Safely put text into HTML. */
function esc(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

/* Keep the chosen language in links inside the site. */
function withLang(href) {
  if (LANG === "en" || href.startsWith("http") || href.startsWith("#") || href.startsWith("mailto:")) {
    return href;
  }
  const parts = href.split("?");
  const params = new URLSearchParams(parts[1] || "");
  params.set("lang", LANG);
  return parts[0] + "?" + params.toString();
}

function planById(id) {
  return PLANS.find(function (plan) {
    return plan.id === id;
  });
}

/* The plan's words in the current language, plus the shared bits. */
function planWords(plan) {
  const words = plan[LANG] || plan.en;
  return {
    id: plan.id,
    emoji: plan.emoji,
    official: plan.official,
    fit: plan.fit || [],
    name: words.name,
    fullName: words.fullName,
    topic: words.topic,
    oneLine: words.oneLine,
    whoGets: words.whoGets,
    good: words.good,
    bad: words.bad,
    howTo: words.howTo,
  };
}

/* ---------- Language setup ---------- */

function fillStaticText() {
  document.documentElement.lang = LANG;

  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    el.textContent = txt(el.getAttribute("data-i18n"));
  });
  document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
    el.innerHTML = txt(el.getAttribute("data-i18n-html"));
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
    el.setAttribute("placeholder", txt(el.getAttribute("data-i18n-placeholder")));
  });

  document.querySelectorAll(".js-checked").forEach(function (el) {
    el.textContent = LAST_CHECKED[LANG] || LAST_CHECKED.en;
  });

  document.querySelectorAll("a[href]").forEach(function (a) {
    const href = a.getAttribute("href");
    if (!href || href.startsWith("http") || href.startsWith("#") || href.startsWith("mailto:")) return;
    a.setAttribute("href", withLang(href));
  });

  const button = document.getElementById("lang-toggle");
  if (button) {
    button.addEventListener("click", function () {
      const next = LANG === "en" ? "hi" : "en";
      localStorage.setItem(LANG_KEY, next);
      const url = new URL(window.location.href);
      if (next === "hi") {
        url.searchParams.set("lang", "hi");
      } else {
        url.searchParams.delete("lang");
      }
      window.location.href = url.toString();
    });
  }
}

/* ---------- Home page ---------- */

function drawCard(sourcePlan) {
  const plan = planWords(sourcePlan);
  const a = document.createElement("a");
  a.className = "card";
  a.href = withLang("plan.html?plan=" + encodeURIComponent(plan.id));

  a.innerHTML =
    '<div class="card-top">' +
      '<span class="card-emoji" aria-hidden="true">' + plan.emoji + "</span>" +
      "<div>" +
        "<h3>" + esc(plan.name) + "</h3>" +
        '<p class="card-sub">' + esc(plan.topic) + "</p>" +
      "</div>" +
    "</div>" +
    "<p>" + esc(plan.oneLine) + "</p>" +
    '<p class="card-more">' + esc(txt("cardMore")) + "</p>";

  return a;
}

function renderHome() {
  const list = document.getElementById("plan-list");
  const search = document.getElementById("search");
  const note = document.getElementById("search-note");
  if (!list) return;

  function draw(filter) {
    const word = (filter || "").trim().toLowerCase();
    const shown = PLANS.filter(function (sourcePlan) {
      if (!word) return true;
      const plan = planWords(sourcePlan);
      const other = sourcePlan[LANG === "en" ? "hi" : "en"];
      const haystack = [
        plan.name, plan.fullName, plan.topic, plan.oneLine,
        other.name, other.fullName, plan.whoGets.join(" ")
      ].join(" ").toLowerCase();
      return haystack.includes(word);
    });

    list.replaceChildren();
    shown.forEach(function (plan) {
      list.appendChild(drawCard(plan));
    });

    if (!note) return;
    if (word && shown.length === 0) {
      note.hidden = false;
      note.textContent = txt("searchNone");
    } else if (word) {
      note.hidden = false;
      note.textContent =
        shown.length === 1
          ? txt("searchFoundOne")
          : shown.length + " " + txt("searchFoundMany");
    } else {
      note.hidden = true;
    }
  }

  draw("");

  if (search) {
    search.addEventListener("input", function () {
      draw(search.value);
    });
  }
}

/* ---------- Plan page ---------- */

function bulletList(items) {
  return "<ul>" + items.map(function (item) {
    return "<li>" + esc(item) + "</li>";
  }).join("") + "</ul>";
}

function renderPlan() {
  const page = document.getElementById("plan-page");
  if (!page) return;

  const id = new URLSearchParams(window.location.search).get("plan");
  const source = planById(id);

  if (!source) {
    page.innerHTML =
      '<a class="back" href="' + withLang("index.html") + '">' + esc(txt("backAll")) + "</a>" +
      "<h1>" + esc(txt("notFoundTitle")) + "</h1>" +
      "<p>" + esc(txt("notFoundBody")) + "</p>";
    return;
  }

  const plan = planWords(source);
  document.title = plan.name + " — Simple Plans";

  page.innerHTML =
    '<a class="back" href="' + withLang("index.html") + '">' + esc(txt("backAll")) + "</a>" +

    '<div class="plan-head">' +
      '<p class="kicker">' + esc(plan.topic) + "</p>" +
      "<h1>" + esc(plan.name) + "</h1>" +
      '<p class="fullname">' + esc(txt("fullNameLabel")) + " " + esc(plan.fullName) + "</p>" +
      '<p class="summary">' + esc(plan.oneLine) + "</p>" +
    "</div>" +

    '<section class="block good">' +
      "<h2>" + esc(txt("goodHeading")) + "</h2>" +
      bulletList(plan.good) +
    "</section>" +

    '<section class="block bad">' +
      "<h2>" + esc(txt("badHeading")) + "</h2>" +
      bulletList(plan.bad) +
    "</section>" +

    '<section class="block plain">' +
      "<h2>" + esc(txt("whoHeading")) + "</h2>" +
      bulletList(plan.whoGets) +
    "</section>" +

    '<section class="block plain">' +
      "<h2>" + esc(txt("howHeading")) + "</h2>" +
      '<ol class="steps">' +
        plan.howTo.map(function (step) {
          return "<li>" + esc(step) + "</li>";
        }).join("") +
      "</ol>" +
    "</section>" +

    '<div class="official">' +
      "<p>" + esc(txt("officialNote")) + "</p>" +
      '<a class="btn" href="' + esc(plan.official) + '" target="_blank" rel="noopener noreferrer">' +
        esc(txt("officialBtn")) +
      "</a>" +
      '<p class="checked">' + esc(txt("checkedLabel")) + " " +
        esc(LAST_CHECKED[LANG] || LAST_CHECKED.en) + ". " +
        esc(txt("checkedAfter")) + "</p>" +
    "</div>";
}

/* ---------- Start ---------- */

fillStaticText();
renderHome();
renderPlan();
