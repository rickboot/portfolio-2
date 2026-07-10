# Phison nav mockup

A local, static mockup of phison.com's header nav, subnav (mega-menu dropdowns),
and one subpage per top-level nav item — built to visually match the live site
so different nav hierarchy options can be reviewed by stakeholders without
touching the real site.

## Viewing it

From this folder:

```
python3 -m http.server 8811
```

Then open `http://localhost:8811/`.

## How it's built

The real CSS files (colors, spacing, typography, dropdown/offcanvas behavior)
were copied verbatim from a saved export of the live homepage — see
`assets/css/*.css`. Only a small `assets/css/mockup.css` and
`assets/js/mockup.js` were added on top, to:

- open the dropdowns/mobile menu without the site's full Joomla/Gantry JS
  bundle (not needed here — the real CSS classes already do the showing/hiding,
  this just toggles them)
- style the new page content (hero banners, card grids, stat bars)

**The nav hierarchy itself lives in one place: `generator/nav-data.js`.** Edit
that file — add, remove, rename, or re-nest items — then run:

```
node generator/build.js
```

to regenerate every HTML page with the new hierarchy. This is the intended
way to try different nav options.

Page-specific content (hero copy, card descriptions) lives in `generator/pages.js`.

## Known simplifications

- Subnav items link one level deep (to their parent top-level page), since no
  second-level pages were requested. Change hrefs in `nav-data.js` once
  second-level pages exist.
- Search and language-switcher are decorative (not wired to a backend).
- The header isn't sticky-on-scroll (the real site does this via JS not
  included here).
- Roboto/Raleway load from Google Fonts as a stand-in — the real site's own
  font files weren't included in the page export. Font Awesome icons were
  replaced with small inline SVGs so the mockup has no CDN dependency for
  icons.
- Homepage content beyond the header is original real copy (from a
  screenshot of the live homepage) styled to match, not a byte-for-byte
  clone — the real homepage's decorative photography/background images
  weren't captured in the export used to build this.
