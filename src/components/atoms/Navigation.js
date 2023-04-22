/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  NavContainer,
  NavText,
  NavButton,
  CrossIcon,
} from "../../styles/styledComponents/molecules/mainNav.sc";
import texts from "../../utils/texts/texts.json";
import ArrowDownIcon from "../../styles/assets/icons/Arrow/Down.svg";
import ArrowRightIcon from "../../styles/assets/icons/Arrow/Right.svg";
import { toggleIsFirstLoad } from "../../store/redux";
import useScrollPosition from "../../utils/customHooks/useScrollPosition";

function Navigation({ stylevariant }) {
  const location = useLocation().pathname;
  const { isFirstLoad } = useSelector((state) => state.nav);
  const dispatch = useDispatch();
  const navigationRef = useRef(null);
  const [fixedNav, setFixedNav] = useState(false);
  const [navBarTop, setNavbarTop] = useState(undefined);

  const isSticky = (e) => {
    const scrollTop = window.scrollY;
    console.warn("scrollTop", scrollTop);
    console.warn("navBarTop", navBarTop);
    if (scrollTop >= navBarTop) {
      setFixedNav(true);
    } else {
      setFixedNav(false);
    }
  };

  useEffect(() => {
    const navBarEl = navigationRef.current.getBoundingClientRect();
    setNavbarTop(navBarEl.top);
  }, []);

  useEffect(() => {
    if (!navBarTop) return;
    console.error("called 2");
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, [navBarTop]);

  return (
    <NavContainer
      stylevariant={fixedNav ? "fixed" : stylevariant}
      ref={navigationRef}
    >
      <NavButton
        onClick={() => {
          dispatch(toggleIsFirstLoad(false));
        }}
        $firstload={!!isFirstLoad}
        location={location}
        stylevariant={stylevariant}
        to="/paints"
      >
        {stylevariant && stylevariant === "home" && (
          <>
            <NavText stylevariant={stylevariant}>
              {texts.mainPage.fr.nav.paints}
            </NavText>
            <NavText stylevariant={stylevariant}>
              {texts.mainPage.en.nav.paints}
            </NavText>
          </>
        )}
        {stylevariant && stylevariant === "galery" && (
          <>
            <NavText stylevariant={stylevariant}>
              {texts.mainPage.fr.nav.paints} - {texts.mainPage.en.nav.paints}
            </NavText>
            <CrossIcon
              src={location === "/paints" ? ArrowDownIcon : ArrowRightIcon}
            />
          </>
        )}
      </NavButton>
      <NavButton
        onClick={() => {
          dispatch(toggleIsFirstLoad(false));
        }}
        $firstLoad={isFirstLoad}
        location={location}
        stylevariant={stylevariant}
        to="/illustrations"
        $last
      >
        {stylevariant && stylevariant === "home" && (
          <>
            <NavText stylevariant={stylevariant}>
              {texts.mainPage.fr.nav.illustrations}
            </NavText>
            <NavText stylevariant={stylevariant}>
              {texts.mainPage.en.nav.illustrations}
            </NavText>
          </>
        )}
        {stylevariant && stylevariant === "galery" && (
          <>
            <NavText stylevariant={stylevariant}>
              {texts.mainPage.fr.nav.illustrations} -{" "}
              {texts.mainPage.en.nav.illustrations}
            </NavText>
            <CrossIcon
              src={
                location === "/illustrations" ? ArrowDownIcon : ArrowRightIcon
              }
            />
          </>
        )}
      </NavButton>
    </NavContainer>
  );
}

/* Navigation.defaultProps = {
  position: undefined,
};

Navigation.propTypes = {
  position: PropTypes.string,
};
 */

export default Navigation;
