# Vallibel One — Knowledge Session Backdrop

A looping, full-screen backdrop for the university knowledge sharing session.
Pure HTML/CSS animation, no build step, no dependencies to install.

## Files
- `index.html` — the page structure
- `style.css` — all styling and the loop animation
- `script.js` — one convenience feature: double-click/tap to toggle fullscreen
- `assets/` — logo, board of directors photo, QR code, background image

## Upload to GitHub (no coding tools needed)

1. Go to your repo: https://github.com/VenukIndrapala/Vone_Backdrop
2. Click **Add file → Upload files**.
3. Drag in `index.html`, `style.css`, `script.js`, and `README.md` from this folder.
4. Then drag in the whole `assets` folder (most browsers preserve the folder
   structure when you drop a folder here — if it doesn't, create the files
   one at a time using **Add file → Upload files** while typing `assets/logo-white.png`
   etc. as the file name so GitHub creates the folder for you).
5. Scroll down, add a commit message like "Add backdrop files", and click
   **Commit changes**.

## Enable GitHub Pages

1. In the repo, go to **Settings → Pages** (left sidebar).
2. Under **Build and deployment → Source**, choose **Deploy from a branch**.
3. Under **Branch**, choose `main` and folder `/ (root)`, then **Save**.
4. Wait about a minute, then refresh the page — GitHub will show your live URL:

   **https://venukindrapala.github.io/Vone_Backdrop/**

## Using it on the day

- Open that URL in a browser on the display laptop.
- Double-click anywhere on the page to go fullscreen (or press F11).
- The backdrop loops automatically — no interaction needed once it's fullscreen.
- Disable sleep/screensaver on that laptop for the duration of the session.
