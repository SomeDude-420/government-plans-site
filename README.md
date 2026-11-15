# Simple Plans / आसान योजनाएँ

**Live site:** <https://simplle-plans-india.netlify.app>

A small website that explains government plans in very simple English **and simple
Hindi**. For each plan it shows four things:

1. **Good things** — what actually helps you.
2. **Not-so-good things** — the problems, limits and hidden costs.
3. **Who can get it** — so you know if it is meant for you.
4. **How to apply** — steps, papers needed, and what to avoid.

It also has a **finder**: six small questions, then it shows the plans that may fit
your family.

Right now it covers 9 Indian schemes: PM-KISAN, Ayushman Bharat, Ujjwala, MGNREGA,
PM Awas (rural), Ration Card, Scholarship (NSP), Old Age Pension, and Crop Insurance.

---

## How to open the site

### Option A: work on it (live reload)

In a terminal, inside this folder:

```
python3 dev-server.py
```

Open <http://127.0.0.1:8000>. Every time a file is saved, the browser refreshes by
itself. Press `Ctrl+C` in the terminal to stop it.

### Option B: just look at it

Double-click `index.html`. It opens in the browser and works offline.

---

## Pages

| Page | What it is |
|---|---|
| `index.html` | The list of plans, with search |
| `plan.html?plan=pm-kisan` | One plan in full |
| `find.html` | The six-question finder |
| `?lang=hi` | Any page, in Hindi |

The language button in the top corner switches between English and Hindi, and the
choice is remembered in that browser.

---

## How to add a new plan

Open `js/plans.js`. Copy one whole block from `{` to `},` and paste it below the last
one. Each plan has two copies of its words: `en` (English) and `hi` (Hindi).
Change both.

| Field | What to write |
|---|---|
| `id` | Short name with dashes, no spaces. Example: `"pm-fasal-bima"` |
| `emoji` | One emoji for the card |
| `official` | The official government website |
| `fit` | When the finder should suggest it (see below) |
| `en` / `hi` | The words in each language |

Inside `en` and `hi`:

| Field | What to write |
|---|---|
| `name` | The short name people use |
| `fullName` | The full official name |
| `topic` | One word, like `"Farmers"` / `"किसान"` |
| `oneLine` | The whole plan in one sentence |
| `whoGets` | List of who is allowed |
| `good` | List of good things |
| `bad` | List of problems |
| `howTo` | Steps to apply, in order |

### How `fit` works

The finder answers are named: `rural`, `land`, `age60`, `age70`, `poor`, `student`.
A plan is suggested if **any** group inside `fit` matches. For example:

```js
fit: [{ land: true }]                // only families with farm land
fit: [{ poor: true }]                // only families on the poor list
fit: [{ rural: true, poor: true }]   // village AND poor
fit: [{ poor: true }, { age70: true }] // poor OR aged 70+
```

If you leave `fit` out, that plan is never suggested by the finder.

### Writing rules

- One idea per bullet. Keep it under about 18 words.
- No words like "beneficiary", "disbursement", "criterion". Say "person who gets
  it", "payment", "rule".
- Always write both sides. A page with only praise is an advertisement, not an
  explainer.
- Check the number on the official site before publishing, then update
  `LAST_CHECKED` at the bottom of `js/plans.js`.

### Text that is not in a plan

Words like the page title, buttons and headings live in `js/ui.js`, again in `en`
and `hi`. If you add a new line of text to a page, add its key there in both
languages.

---

## Files

```
index.html            Home page: plan list + search
plan.html             One plan in full
find.html             The six-question finder
css/style.css         All colours and spacing
js/plans.js           The plan information
js/ui.js              All the other words, in both languages
js/app.js             Draws the list and the plan pages
js/quiz.js            The finder logic
dev-server.py         Local server with live reload (not part of the site)
```

---

## Publishing it for free

You need an account for these, so it is a two-minute job on your side.

### Step 0: make the upload folder

The working folder has extra files (dev server, git history, notes). Build a clean
copy for the web:

```
python3 make-site.py
```

This creates a folder called `site` with only the 8 files a website needs. Run it
again after every change, before you re-upload.

### Easiest: Netlify Drop

1. Go to <https://app.netlify.com/drop> and sign up (free, can use Google).
2. Drag the **`site`** folder onto the page.
3. You get a web address like `https://random-name-123.netlify.app`.
4. To rename it: **Site configuration → Change site name**.
5. To update later: open your site → **Deploys** → drag the `site` folder there
   again. (Run `make-site.py` first so it has the newest files.)

### GitHub Pages

The folder is already a git repository with one commit. To put it on GitHub:

1. Create a free account at <https://github.com> and click **New repository**.
   Name it `government-plans-site`, keep it **Public**, do not add a README.
2. In a terminal in this folder, run these lines one by one (replace `YOURNAME`):

```
git remote add origin https://github.com/YOURNAME/government-plans-site.git
git branch -M main
git push -u origin main
```

3. On GitHub: **Settings → Pages → Branch: main → Save**.
4. After a minute your site is at `https://YOURNAME.github.io/government-plans-site/`.

Note: GitHub Pages serves the whole repository, not just `site`. That works
because `index.html` sits in the main folder. The extra files are harmless but
public.

---

## Please keep this promise

The site says clearly that it is not run by the government. Keep that notice, keep
the official website links, and keep both the good and the bad points. That honesty
is the whole point of the site.
