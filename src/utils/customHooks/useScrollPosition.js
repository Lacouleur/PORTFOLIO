import { useState, useEffect } from "react";

export function useScrollPosition(
  elementRef,
  dispatch,
  setter,
  positionShift = 0,
  exeption = false,
) {
  const [navBarTop, setNavbarTop] = useState(undefined);

  const isSticky = () => {
    const { scrollY: scrollTop } = window;

    if (scrollTop >= navBarTop + positionShift) {
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
    const navBarEl = elementRef.current.offsetTop;
    setNavbarTop(navBarEl);
  }, [elementRef]);

  useEffect(() => {
    if (!navBarTop || exeption) return;
    window.addEventListener("load", isSticky);
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
      window.removeEventListener("load", isSticky);
    };
  }, [navBarTop]);
}

export default useScrollPosition;
