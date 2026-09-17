# Leandro De Paula — Independent Technology Consulting

A minimalist, static, single-page consulting website. Plain HTML5, CSS, and a
small optional JavaScript file — no frameworks, no build step, no
dependencies.

## Files

```
index.html    Page content, structured data, SEO/social meta tags
styles.css    All styling
script.js     Optional progressive enhancement (booking-link config, footer year)
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

The site works with JavaScript disabled: all consultation buttons already
fall back to a `mailto:` link.

## Replacing the booking URL

There is one place to set a real scheduling link (Calendly, Cal.com, etc.):
open `script.js` and set the constant near the top of the file:

```js
const BOOKING_URL_PLACEHOLDER = "https://cal.com/your-handle/30min";
```

Every button marked with `data-booking-link` in `index.html` (header CTA,
hero CTA, and the final consultation section) will then point to that URL
automatically. Leave the constant as `null` to keep the current `mailto:`
fallback.

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
