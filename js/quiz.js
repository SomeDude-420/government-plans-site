/* ============================================================
   The finder page (find.html).
   Six small questions, then it suggests plans whose "fit" rule
   matches the answers. The rules live in js/plans.js.
   ============================================================ */

/* Does this plan fit these answers?
   "Not sure" about the poor list still counts as a yes, but the card is
   marked "Maybe" (see isMaybePlan below). */
function fitsPlan(sourcePlan, answers) {
  function answerOk(key) {
    if (answers[key] === "yes") return true;
    if (answers[key] === "notsure" && key === "poor") return true;
    return false;
  }

  const groups = sourcePlan.fit || [];
  if (groups.length === 0) return true;

  return groups.some(function (group) {
    return Object.keys(group).every(function (key) {
      return group[key] === answerOk(key);
    });
  });
}

function isMaybePlan(sourcePlan, answers) {
  if (answers.poor !== "notsure") return false;
  if (!fitsPlan(sourcePlan, answers)) return false;
  return (sourcePlan.fit || []).some(function (group) {
    return group.poor === true;
  });
}

function initQuiz() {
  const root = document.getElementById("quiz");
  if (!root) return;

  const pack = QUIZ[LANG] || QUIZ.en;
  const answers = {};
  let step = 0;

  document.title = pack.title + " — Simple Plans";

  function drawIntro() {
    root.innerHTML =
      '<h1 class="quiz-title">' + esc(pack.title) + "</h1>" +
      '<p class="lede">' + esc(pack.intro) + "</p>" +
      '<button class="btn" id="quiz-start" type="button">' + esc(pack.start) + "</button>";
    document.getElementById("quiz-start").addEventListener("click", function () {
      step = 0;
      draw();
    });
  }

  function drawQuestion() {
    const question = pack.questions[step];
    root.innerHTML =
      '<p class="quiz-progress">' + esc(pack.questionOf) + " " + (step + 1) +
        " " + esc(pack.of) + " " + pack.questions.length + "</p>" +
      '<h1 class="quiz-q">' + esc(question.q) + "</h1>" +
      '<div class="quiz-options">' +
        question.options.map(function (option) {
          return '<button class="quiz-option" type="button" data-value="' +
            esc(option.value) + '">' + esc(option.label) + "</button>";
        }).join("") +
      "</div>" +
      (step > 0
        ? '<button class="quiz-back" id="quiz-back" type="button">← ' + esc(pack.back) + "</button>"
        : "");

    root.querySelectorAll(".quiz-option").forEach(function (button) {
      button.addEventListener("click", function () {
        answers[question.id] = button.getAttribute("data-value");
        step += 1;
        draw();
      });
    });

    const back = document.getElementById("quiz-back");
    if (back) {
      back.addEventListener("click", function () {
        step -= 1;
        draw();
      });
    }
  }

  function drawResults() {
    const matched = PLANS.filter(function (plan) { return fitsPlan(plan, answers); });
    const anyMaybe = matched.some(isMaybe);

    let html =
      '<h1 class="quiz-title">' + esc(pack.resultsTitle) + "</h1>" +
      '<p class="lede">' + esc(pack.resultsIntro) + "</p>";

    if (anyMaybe) {
      html += '<p class="quiz-note">' + esc(pack.maybeNote) + "</p>";
    }

    if (matched.length === 0) {
      html += '<p class="quiz-empty">' + esc(pack.noResults) + "</p>";
    }

    root.innerHTML = html;

    if (matched.length > 0) {
      const list = document.createElement("div");
      list.className = "cards";
      matched.forEach(function (sourcePlan) {
        const card = drawCard(sourcePlan);
        if (isMaybePlan(sourcePlan, answers)) {
          const badge = document.createElement("span");
          badge.className = "badge";
          badge.textContent = pack.maybe;
          card.querySelector(".card-top").appendChild(badge);
        }
        list.appendChild(card);
      });
      root.appendChild(list);
    }

    const caveat = document.createElement("p");
    caveat.className = "quiz-caveat";
    caveat.textContent = pack.caveat;
    root.appendChild(caveat);

    const actions = document.createElement("div");
    actions.className = "quiz-actions";
    actions.innerHTML =
      '<button class="quiz-back" id="quiz-restart" type="button">' + esc(pack.restart) + "</button>" +
      '<a class="back" href="' + withLang("index.html") + '">' + esc(pack.seeAll) + "</a>";
    root.appendChild(actions);

    document.getElementById("quiz-restart").addEventListener("click", function () {
      step = 0;
      Object.keys(answers).forEach(function (key) {
        delete answers[key];
      });
      drawIntro();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  function draw() {
    if (step < pack.questions.length) {
      drawQuestion();
    } else {
      drawResults();
    }
  }

  drawIntro();
}

initQuiz();
