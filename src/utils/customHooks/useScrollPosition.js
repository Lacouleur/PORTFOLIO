import { useState, useEffect } from "react";

export function useScrollPosition(
  elementRef,
  dispatch,
  setter,
  positionShift = 0,
  exeption = false,
) {
  const [ElementTop, setElementTop] = useState(undefined);
  const [ElementHeight, setElementHeight] = useState(undefined);
  const [ElementId, setElementId] = useState(undefined);

  function setOrDispatch(testRez) {
    if (dispatch) {
      dispatch(setter(testRez));
    } else {
      setter(testRez);
    }
  }

  const isSticky = () => {
    const { scrollY: scrollTop } = window;

    if (ElementId === "home-navigation") return;

    setOrDispatch(scrollTop >= ElementTop + positionShift);
  };

  useEffect(() => {
    if (exeption) return;
    if (!elementRef) return;
    if (elementRef.current) {
      setElementHeight(elementRef.current.offsetHeight);
      setElementTop(elementRef.current.offsetTop);
      setElementId(elementRef.current.id);
      isSticky();
    }
  }, [elementRef]);

  useEffect(() => {
    if (!ElementTop || exeption) return;
    window.addEventListener("load", isSticky);
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("load", isSticky);
      window.removeEventListener("resize", isSticky);
    };
  }, [ElementTop]);
}

export default useScrollPosition;
