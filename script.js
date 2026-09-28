// Vallibel One — Knowledge Session Backdrop
// The loop itself runs on pure CSS animation (see style.css).
// This script only adds one convenience: double-click / double-tap
// anywhere on the screen to toggle fullscreen mode, so whoever is
// running the display doesn't need to hunt for the F11 key.

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {
      // Some browsers (notably iOS Safari) don't support the Fullscreen API.
      console.log("Fullscreen not supported on this browser/device.");
    });
  } else {
    document.exitFullscreen();
  }
}

document.addEventListener("dblclick", toggleFullscreen);

// Show a one-time hint on load, then fade it out.
window.addEventListener("DOMContentLoaded", () => {
  const hint = document.createElement("div");
  hint.className = "fullscreen-hint";
  hint.textContent = "Double-click anywhere for fullscreen";
  document.body.appendChild(hint);

  setTimeout(() => { hint.style.opacity = "0"; }, 6000);
  setTimeout(() => { hint.remove(); }, 7500);
});

// Intro lockup: tune the tagline's letter-spacing so its visible edges line up exactly with the logo's visible edges.
function fitIntroLockup() {
  const img = document.querySelector('.s1 .logo-img');
  const tag = document.querySelector('.s1 .tag');
  if (!img || !tag || !img.offsetWidth) return;
  const target = img.offsetWidth * 0.952;      // logo PNG has 2.4% transparent padding each side
  tag.style.letterSpacing = '';                // start from the CSS values
  tag.style.paddingLeft = '';
  const ls0 = parseFloat(getComputedStyle(tag).letterSpacing) || 0;
  const visible = tag.offsetWidth - 2 * ls0;   // minus trailing spacing and its balancing padding
  const gaps = tag.textContent.length - 1;
  if (!visible || gaps < 1) return;
  const ls = ls0 + (target - visible) / gaps;  // spread the remaining difference evenly across letters
  tag.style.letterSpacing = ls + 'px';
  tag.style.paddingLeft = ls + 'px';
}
window.addEventListener('load', fitIntroLockup);
window.addEventListener('resize', fitIntroLockup);
if (document.fonts) {
  if (document.fonts.ready) document.fonts.ready.then(fitIntroLockup);
  document.fonts.addEventListener('loadingdone', fitIntroLockup); // refit when Manrope finishes loading
}
setTimeout(fitIntroLockup, 400);
setTimeout(fitIntroLockup, 1500);
