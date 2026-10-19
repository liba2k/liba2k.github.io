# orlyliba.github.io

Personal portfolio website for **Orly Liba**, ready to deploy on GitHub Pages (`https://orlyliba.github.io`).

## Structure

```text
orlyliba.github.io/
├── .nojekyll
├── index.html          # Main single-page site
├── styles.css          # Stylesheet (Lato font, white background, #ff8800 LibaLabs orange accents)
├── script.js           # Auto-advancing carousels & image lightbox
└── assets/
    └── images/
        ├── orly-profile.jpg
        ├── logos/      # Organization & university icons
        ├── projects/   # Embedded timeline project thumbnails
        └── hobbies/    # Running & Painting carousel photos
```

## Adding More Running or Painting Photos

To add more photos to the **Running** (or **Painting**) carousel:

1. Drop your image files into `assets/images/hobbies/` (e.g. `assets/images/hobbies/running-2.jpg`).
2. In `index.html`, find the `<!-- Running Card with Auto-Advancing Carousel -->` section and add an `<img>` line inside `<div class="carousel-track">`:
   ```html
   <img src="assets/images/hobbies/running-2.jpg" alt="Trail running" class="carousel-slide" loading="lazy" />
   ```
   The carousel arrows, dot indicators, auto-advance timer, and lightbox zoom will automatically include the new slide.

## Deploying to GitHub Pages

1. Create a repository named **`orlyliba.github.io`** under [`https://github.com/orlyliba`](https://github.com/orlyliba) (or use your existing repo).
2. Push the contents of this folder to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Launch new personal portfolio site"
   git branch -M main
   git remote add origin git@github.com:orlyliba/orlyliba.github.io.git
   git push -u origin main
   ```
3. In your repository on GitHub, go to **Settings → Pages** and ensure **Source** is set to **Deploy from a branch (`main` / `/ (root)`)**.
