export function lockScrollBody(isFullView) {
  const body = document.getElementById("body");
  if (isFullView.toogle) {
    body.setAttribute("style", "overflow: hidden;");
  } else {
    body.setAttribute("style", "overflow: visible;");
  }
}
