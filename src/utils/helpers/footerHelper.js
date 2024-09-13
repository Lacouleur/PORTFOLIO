export function watchFooterScroll(mode, scrollY) {
  const Yposition = scrollY || window.scrollY;
  if (Yposition !== 0) {
    if (mode === "anim") {
      return "out";
    }
    if (Yposition > 500 && mode === "isFixed") {
      return false;
    }
  }
  if (Yposition === 0) {
    if (mode === "anim") {
      return "in";
    }
    if (mode === "isFixed") {
      return true;
    }
  }
}
