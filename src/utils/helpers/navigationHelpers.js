function getYOffSet(name, device) {
  if (name === "home") return 0;
  if (device === "mobile") return -80;
  if (name === "paintings") return -160;
  if (name === "illustrations") return -120;
}

export function handleClickScroll(name, device) {
  const element = document.getElementById(name);
  const yOffset = getYOffSet(name, device);
  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
  if (element) {
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}
