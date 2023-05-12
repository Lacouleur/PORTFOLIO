import { useState, useEffect } from "react";

export function useScrollPosition(
  elementRef,
  dispatch,
  setter,
  positionShift = 0,
  exeption = false,
) {
  const [ElementTop, setElementTop] = useState(undefined);

  const isSticky = () => {
    const { scrollY: scrollTop } = window;

    if (scrollTop >= ElementTop + positionShift) {
      if (dispatch) {
        dispatch(setter(true));
      } else {
        setter(true);
      }
    } else if (dispatch) {
      dispatch(setter(false));
    } else {
      setter(false);
    }
  };

  useEffect(() => {
    if (exeption) return;
    const ElementEl = elementRef.current.offsetTop;
    setElementTop(ElementEl);
  }, [elementRef]);

  useEffect(() => {
    if (!ElementTop || exeption) return;
    window.addEventListener("load", isSticky);
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
      window.removeEventListener("load", isSticky);
    };
  }, [ElementTop]);
}

export default useScrollPosition;
