# Leandro De Paula — Independent Technology Consulting

A minimalist, static, single-page consulting website. Plain HTML5, CSS, and a
small optional JavaScript file — no frameworks, no build step, no
dependencies.

## Files

```
index.html    Page content, structured data, SEO/social meta tags, Tymeslot embed
styles.css    All styling
script.js     Optional progressive enhancement (footer year only)
README.md     This file
```

## Preview locally

No build step is required. Either:

- Open `index.html` directly in a browser, or
- Serve the folder so relative paths behave exactly as they will in
  production:

  ```
  cd personal-homepage
  python3 -m http.server 8000
  ```

  Then visit `http://localhost:8000`.

The site works with JavaScript disabled: the page content, navigation, and
`mailto:` links all still work. The Tymeslot booking widget itself requires
JavaScript (it's a third-party embed); with JavaScript off, or if the
Tymeslot script fails to load, a visible fallback link to
`https://tymeslot.app/leo` is shown in its place.

## Updating the booking widget

The "Book a free consultation" buttons in the header and hero are plain
anchor links to `#book`, which scrolls to the live scheduler embedded in
the final consultation section (`index.html`, inside `<section id="contact">`).

The scheduler itself is Tymeslot's official inline embed:

```html
<div id="tymeslot-booking" data-username="leo" data-layout="column"></div>
<script src="https://tymeslot.app/embed.js" async></script>
```

To point it at a different Tymeslot account, change `data-username="leo"`
to the new username, and update the fallback link (`https://tymeslot.app/leo`,
appears twice — once as a normal fallback, once inside `<noscript>`) to match.

## Updating contact information

Search `index.html` for the following and replace as needed:

- Email address: `dipaula.leandro@gmail.com` (appears in the header,
  hero, contact section, footer, and the JSON-LD structured data block)
- LinkedIn URL: `https://www.linkedin.com/in/iamleandro-de-paula/`
  (appears in the footer icon link and the JSON-LD `sameAs` field)

## Updating SEO and social-sharing values

All of the following live in the `<head>` of `index.html`:

- **Title and meta description** — edit the `<title>` and
  `<meta name="description">` tags.
- **Canonical URL** — no domain has been assigned yet. Once one exists,
  add a `<link rel="canonical" href="...">` tag where the
  `CANONICAL_URL_PLACEHOLDER` comment is.
- **Open Graph image** — no social preview image is included. Create a
  1200×630 image (e.g. `og-image.png`) in the site root, then uncomment
  the `og:image` tags where the `OG_IMAGE_PLACEHOLDER` comment is.
- **Favicon** — a minimal inline SVG monogram is used as a placeholder so
  the browser tab isn't blank. Replace the `<link rel="icon" ...>` tag
  with references to real favicon files (e.g. `favicon.ico`,
  `apple-touch-icon.png`) whenever you have them.
- **Structured data** — the `Person` and `ProfessionalService` JSON-LD
  block near the top of `<head>` only includes fields with known values.
  Extend it if you add a domain, logo, or other verifiable details.

## Deploying

This is a plain static site — it deploys to any static host as-is. For
example:

- **GitHub Pages**: push `index.html`, `styles.css`, and `script.js` to
  the repository and enable Pages for the branch/folder.
- **Netlify / Vercel / Cloudflare Pages**: point the project at this
  folder with no build command and a publish directory of `.`.
- **Any web server / S3 bucket / etc.**: upload the three files as-is.

No environment variables, build tooling, or server-side rendering is
required.
