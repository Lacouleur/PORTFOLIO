export function handleClickScroll(name) {
  const element = document.getElementById(name);
  const yOffset = -130;
  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
  if (element) {
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}
