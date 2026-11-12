# Semos AL website

Static website for **Semos AL**, the Albanian branch of [Semos](https://semos.com.mk/).
It is a copy of the semos.com.mk site, rebranded for Semos AL, in two languages:

| Language | Location | Example |
|----------|----------|---------|
| English (default) | `/` (repository root) | `/about_us.html` |
| Albanian (Shqip)  | `/sq/` | `/sq/about_us.html` |

Every page exists in both folders under the **same file name**. The `EN | SQ` switch in the
top header links each page to its counterpart, so when you add a page add it in both places.

## Structure

```
index.html, *.html     English pages
sq/*.html              Albanian pages (assets referenced with ../)
css/  js/  img/        shared styles, scripts, images
fonts/ favicon/        shared fonts and icons
downloads/             PDF brochures
css/semos-al.css       Semos AL additions (language switch, logo tweaks)
img/semos_al_white.svg Semos AL logo (white, "albania" under the wordmark)
```

## Contact details used

- Address: Rruga Bilal Golemi 31, Komuna e Parisit, 1060 Tirana, Albania
- Email: info@semos.al
- Phone: +355 67 20 42290
- Facebook: facebook.com/semosalb · LinkedIn: linkedin.com/company/semosal · Instagram: instagram.com/semosal

To change them, search and replace across both the root and `sq/` pages.

## Hosting on GitHub Pages

1. Push this repository to GitHub.
2. Repository **Settings → Pages → Build and deployment**: Source = *Deploy from a branch*,
   Branch = `main`, folder = `/ (root)`.
3. The site is published at `https://<user>.github.io/<repo>/` within a minute or two.

Custom domain (e.g. `semos.al`): add a `CNAME` file containing the domain, set the domain in
Settings → Pages, and point DNS at GitHub Pages (`A` records 185.199.108.153, 185.199.109.153,
185.199.110.153, 185.199.111.153, or a `CNAME` record to `<user>.github.io` for `www`).

## Local preview

Any static server works, e.g. `npx serve .` or `python -m http.server`, then open
http://localhost:8000/ (opening files directly with `file://` works too, but some scripts
behave better over http).
