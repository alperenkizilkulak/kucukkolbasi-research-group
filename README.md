# Küçükkolbaşı Research Group — Website

Bilingual (TR/EN) website of the Küçükkolbaşı Research Group, Department of
Chemistry, Faculty of Science, Selçuk University, Konya.

Research focus: metal–organic frameworks (MOFs), ligand design and synthesis,
electrochemical sensors and biosensors, nanomaterials.

- Instagram: [@kucukkolbasi_research_group](https://www.instagram.com/kucukkolbasi_research_group/)
- Group leader: [Prof. Dr. Semahat Küçükkolbaşı](https://scholar.google.com/citations?user=sWPpHgcAAAAJ)

## Structure

Plain HTML/CSS/JS — no build step.

| Path | Purpose |
|---|---|
| `index.html` | Home: hero, about, research areas, latest news |
| `team.html` | Team member profiles |
| `news.html` | News/blog listing |
| `news/*.html` | Individual articles |
| `css/style.css` | All styling (brand colors in `:root`) |
| `js/main.js` | Language toggle, mobile nav, scroll animations |
| `editor.html` | Local visual text editor (Chrome/Edge; edits your local copy only) |

## Editing

Every piece of text exists twice — a Turkish and an English span:

```html
<span class="tr">Ekibimiz</span><span class="en">Our Team</span>
```

Edit both when changing content. For visual editing, open `editor.html` in
Chrome/Edge, click "Site Klasörünü Aç", and pick this folder: you get a page
tree, click-to-type text editing, an arrange mode (move/duplicate/delete
elements, change links and images), a block palette (headings, paragraphs,
buttons, images, lists, quotes, cards, sections), page creation (main pages
and subpages with automatic menu/parent linking) and page deletion with
link cleanup.

Site conventions: subpages live one level deep in a folder named after the
parent page (like `news/`); asset paths from subpages start with `../`.

## Workflow (any computer)

1. `git pull` before starting work.
2. Edit files (by hand, with `editor.html`, or with Claude Code).
3. `git add -A && git commit -m "describe the change" && git push`
4. GitHub Pages redeploys automatically ~1 minute after the push.

Live site: https://alperenkizilkulak.github.io/kucukkolbasi-research-group/
Repo: https://github.com/alperenkizilkulak/kucukkolbasi-research-group
