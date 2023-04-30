export function isMobileViewHook(setIsMobile, px) {
  window.addEventListener("load", () => {
    getWidthAndDecideScreen(setIsMobile, px);
  });
  window.addEventListener("resize", () => {
    getWidthAndDecideScreen(setIsMobile, px);
  });
  getWidthAndDecideScreen(setIsMobile, px);
}

function getWidthAndDecideScreen(setIsMobile, px) {
  if (window.screen.width < px) {
    setIsMobile(true);
  } else {
    setIsMobile(false);
  }
}
