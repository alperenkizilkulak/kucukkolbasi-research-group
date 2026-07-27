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
Chrome/Edge, pick a page, click text, type, and save.
