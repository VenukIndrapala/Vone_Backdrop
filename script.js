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
