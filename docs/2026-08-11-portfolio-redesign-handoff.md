# Portfolio redesign — session handoff (2026-08-11)

Status snapshot to resume work in a future session. The full technical
reference (architecture, gotchas, commands) lives in `CLAUDE.md` at the repo
root — read that first. This file is the narrative of *how we got here* and
*what's still open*.

## ⚠️ First thing to do next session

**Nothing from this session has been committed to git yet.** Everything below
exists only in the working directory. Run `git status` to see ~119 changed
paths (deletions of the old template, new Jekyll files untracked). Decide with
the user whether to commit as one squashed change or a few logical ones
(e.g. "migrate to Jekyll", "adopt Anime-based design", "refactor: green
accent + unify font") before doing anything else risky.

## What happened, in order

1. **Audit.** Compared the live site against the CV: it described a student
   "about to graduate" — the CV shows a working Data Engineer at Muttdata
   (Jun 2024–present), a TA/Product Owner role at UBA, two certifications
   (AWS, Databricks), and an NLP specialization — none of which appeared on
   the site. Also found: dead code (unused `translation.js`, orphaned Netlify
   function, HTML5UP demo pages), no real SEO, oversized images (icon.ico
   alone was 332KB), and a client-side-JS-only bilingual toggle with no real
   crawlable English URLs.

2. **Stack decision.** Compared Jekyll vs. Astro vs. keeping vanilla HTML,
   specifically for GitHub Pages hosting. Landed on **Jekyll, built natively
   by GitHub Pages** (no Actions workflow) — matches the user's own
   `CLAUDE.md` priorities (simplicity, minimal deps, GH Pages compatibility),
   and every plugin used (`jekyll-seo-tag`, `jekyll-sitemap`) is in GitHub's
   plugin whitelist so no CI pipeline is needed.

3. **First implementation.** Built the Jekyll site from scratch: bilingual
   content (`_data/{es,en}/*.yml`) sourced from the CV, `_projects/` Markdown
   collection for 3 featured project deep-dives (FiuFit, Earthquake Damage
   Prediction, RustTorrent) plus a compact "other projects" grid, real
   `/en/` URLs with `hreflang` alternates, and a hand-written CSS design
   system. Removed the entire old HTML5UP template, jQuery, Font Awesome,
   the 10 duplicated route pages, and the orphaned Netlify function.
   Validated with `bundle exec jekyll build` (had to install Ruby locally —
   see `CLAUDE.md` → Local Development). Along the way, fixed two real Jekyll
   bugs worth remembering (documented in `CLAUDE.md` → Implementation
   gotchas): `theme: null` is required or GitHub Pages silently injects the
   Primer theme's unused CSS, and Liquid `{% assign %}` variables don't cross
   include/layout boundaries.

4. **First design didn't land.** The user found the original hand-built
   design "bastante feo" (pretty ugly) and asked to switch to the "Anime"
   template from the open-source [OSSPhilippines/freefolio](https://github.com/OSSPhilippines/freefolio)
   collection (MIT licensed), reusing its structure with changes rather than
   its literal sections.

5. **Redesign onto the Anime template.** Ported the template's visual
   language into the existing Jekyll structure (content/data layer untouched,
   only templates + CSS changed): dark background, card-based sections with
   hover-lift (`.box`, `.row`), Bangers + Kosugi Maru fonts, Boxicons. Mapped
   our real sections (Experience, Expertise, Projects, Education,
   Certifications, Contact) onto the template's `.home` / `.row-grid` /
   `.box-grid` / `.cta` / `.contact-form` patterns, rather than copying its
   literal Home/About/Services/Resume sections. Updated `CLAUDE.md` to record
   this as a deliberate, explicit brand-direction change (not something to
   silently revert later).

6. **Refactor pass on the new design** (this session's last stretch):
   - Dropped the Bangers display font entirely — everything now uses Kosugi
     Maru, including headings and the logo. Removed the now-unused Bangers
     Google Fonts request.
   - Swapped the accent color from the template's original purple (`#9370DB`)
     to green `#39a88d` — chosen by the user from two candidates
     (`#39a88d`/`#05604a`) to match a new hero photo. All accent color usage
     runs through two CSS custom properties (`--main-color`,
     `--main-color-soft`) in `assets/css/main.css`, so this was a two-line
     change.
   - Replaced the hero photo. **Note:** the first attempt hit a real problem —
     I deleted `images/picture_2.jpg` during step 3's cleanup, and it turned
     out to have never been committed to git, so it was unrecoverable from
     history. The user re-supplied the photo (dropped at
     `assets/images/picture_2.jpg`); it's now resized/compressed into
     `assets/images/headshot.jpg` (the original raw upload was deleted after
     conversion, no need to keep both).

## Current state

- Stack, file structure, bilingual URL scheme, and all "don't break this"
  gotchas: see `CLAUDE.md` (kept up to date throughout, safe to trust it).
- Design tokens: `assets/css/main.css` top of file (`:root`) — one accent hue
  only (green), one font family (Kosugi Maru) for everything, Boxicons via
  CDN for icons.
- A local Jekyll dev server may still be running in the background from this
  session (`bundle exec jekyll serve --host 0.0.0.0 --port 4000`, PID varies
  by session) — if `http://localhost:4000/` doesn't respond next time, just
  start it again per `CLAUDE.md` → Local Development.
- Last full validation: `bundle exec jekyll build --trace` clean, no
  unrendered Liquid, no broken internal links, no leftover purple/Bangers
  references outside the historical note in `CLAUDE.md`.

## Open items for next session

- [ ] **Commit the work** (nothing is committed yet — see warning above).
- [ ] Confirm GitHub repo Settings → Pages is set to "Deploy from a branch"
  (should already be the case for a `*.github.io` repo, but wasn't
  re-confirmed after all these changes).
- [ ] No visual QA has been done in an actual browser by the assistant (no
  display available in this environment) — the user has been eyeballing it
  themselves via the local server. Worth a final full read-through on both
  `/` and `/en/`, desktop and mobile widths, before calling it done.
- [ ] Two stray untracked files were seen early in the session
  (`cv/*.pdf:Zone.Identifier`) — they were gone by the time it mattered, but
  worth a `git status` glance in case Windows/WSL download artifacts
  reappear.
- [ ] Nothing else was flagged as broken or pending at hand-off — the last
  message from the user was a "looks great" sign-off after the font/color/photo
  refactor.
