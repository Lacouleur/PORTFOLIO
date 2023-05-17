function getYOffSet(name, device) {
  if (name === "home") return 0;
  if (device === "mobile") return -80;
  if (name === "paintings") return -150;
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

export function handleSizeChange(
  navigationRef,
  viewSize,
  navigationSize,
  setViewSize,
  setNavigationSize,
) {
  if (
    window.innerHeight !== viewSize.height ||
    window.innerWidth !== viewSize.width
  ) {
    setViewSize({ height: window.innerHeight, width: window.innerWidth });
  }
  if (
    navigationRef.current.clientHeight !== navigationSize.height ||
    navigationRef.current.clientWidth !== navigationSize.width
  ) {
    setNavigationSize({
      height: navigationRef.current.clientHeight,
      width: navigationRef.current.clientWidth,
    });
  }
}
