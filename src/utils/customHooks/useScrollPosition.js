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
    const scrollTop = window.scrollY;
    if (scrollTop >= navBarTop + positionShift) {
      dispatch(setter(true));
    } else {
      dispatch(setter(false));
    }
  };

  useEffect(() => {
    if (exeption) return;
    const navBarEl = elementRef.current.getBoundingClientRect();
    setNavbarTop(navBarEl.top);
  }, [elementRef]);

  useEffect(() => {
    if (!navBarTop || exeption) return;
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, [navBarTop]);
}

export default useScrollPosition;
