import { useState, useEffect } from "react";

export function useScrollPosition(
  elementRef,
  dispatch,
  setter,
  positionShift = 0,
  exeption = false,
) {
  const [navBarTop, setNavbarTop] = useState(undefined);

  const isSticky = (called) => {
    console.warn("Called", called);

    const { scrollY: scrollTop } = window;

    if (scrollTop >= navBarTop - positionShift) {
      dispatch(setter(true));
    } else {
      dispatch(setter(false));
    }
  };

  useEffect(() => {
    if (exeption) return;
    const navBarEl = elementRef.current.offsetTop;
    setNavbarTop(navBarEl);
  }, [elementRef]);

  useEffect(() => {
    if (!navBarTop || exeption) return;
    window.addEventListener("load", () => isSticky("Load listener"));
    window.addEventListener("scroll", () => isSticky("scroll listener"));
    return () => {
      window.removeEventListener("scroll", () => isSticky("unmount"));
      window.removeEventListener("load", () => isSticky("unmount load"));
    };
  }, [navBarTop]);
}

export default useScrollPosition;
