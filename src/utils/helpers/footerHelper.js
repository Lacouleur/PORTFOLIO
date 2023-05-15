export function watchFooterScroll(
  setFooterAnim,
  setIsFooterFixed,

  isFullView,
) {
  if (isFullView) setIsFooterFixed(false);
  if (window.scrollY !== 0) {
    setFooterAnim("out");
    if (window.scrollY > 500) {
      setIsFooterFixed(false);
    }
  }
  if (window.scrollY === 0) {
    setFooterAnim("in");
    setIsFooterFixed(true);
  }
}
