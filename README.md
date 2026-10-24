# santschi.theprintlab.org

Personal academic website of Stephanie Santschi. Plain static HTML, CSS and JavaScript. No build step, no cookies, no trackers, nothing loaded from other servers.

## Files

| File | Content |
|---|---|
| `index.html` | Home: facts, statement, About, short bio, contact |
| `research.html` | Research, digital track record, partners, projects |
| `publications.html` | All publications |
| `talks.html` | All talks since 2013 |
| `teaching.html` | Courses, supervision, workshops |
| `cv.html` | Positions, education, exhibitions, grants, service |
| `404.html` | Page shown for broken links |
| `style.css`, `site.js` | Shared design and functions for all pages |
| `*.jpg`, `*.png` | Photos and icons |
| `Santschi_CV.pdf` | CV download (May 2026) |
| `CNAME` | Tells GitHub Pages to serve the site at santschi.theprintlab.org |
| `.nojekyll` | Tells GitHub Pages to serve the files as they are |
| `robots.txt`, `sitemap.xml` | Help search engines find all pages |

## Publishing with GitHub Pages

1. Create a public repository, for example `santschi-website`.
2. Upload all files in this folder to the root of the repository, including `CNAME` and `.nojekyll`.
3. In the repository, open Settings, then Pages. Under "Build and deployment", choose "Deploy from a branch", branch `main`, folder `/ (root)`.
4. At the DNS provider of theprintlab.org, add a CNAME record: name `santschi`, value `<your-github-username>.github.io`.
5. Back in Settings, Pages, enter `santschi.theprintlab.org` as custom domain if it is not already shown, wait for the DNS check, then tick "Enforce HTTPS".

## Updating

Edit the HTML files directly. The menu and footer are repeated in each page, so a change there must be made in all six pages.
