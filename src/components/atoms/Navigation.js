/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

import {
  NavContainer,
  NavText,
  NavButton,
  CrossIcon,
  NavButtonBackground,
  SpanNav,
  Blur,
} from "../../styles/styledComponents/molecules/mainNav.sc";
import texts from "../../utils/texts/texts.json";
import ArrowDownIcon from "../../styles/assets/icons/Arrow/Down.svg";
import ArrowRightIcon from "../../styles/assets/icons/Arrow/Right.svg";
import { setFixedNav, setLocation, toggleIsFirstLoad } from "../../store/redux";
import { useScrollPosition } from "../../utils/customHooks/useScrollPosition";
import { handleClickScroll } from "../../utils/helpers/navigationHelpers";

function Navigation({ stylevariant, fixedVersion }) {
  const { isFirstLoad, location, titleHeight } = useSelector(
    (state) => state.nav,
  );
  const { device } = useSelector((state) => state.main);
  const dispatch = useDispatch();

  const [viewHeight, setViewHeight] = useState(window.innerHeight);
  const navPosition = device === "mobile" ? viewHeight : -48;
  const navigationRef = useRef();

  useScrollPosition(
    navigationRef,
    dispatch,
    setFixedNav,
    navPosition,
    fixedVersion,
  );

  useEffect(() => {
    if (device === "mobile" && window.innerHeight !== viewHeight) {
      setViewHeight(window.innerHeight);
    }
  }, [window.innerHeight, window.innerWidth]);

  return (
    <NavContainer
      stylevariant={stylevariant}
      fixedVersion={fixedVersion}
      ref={navigationRef}
      viewHeight={viewHeight}
      titleHeight={titleHeight}
      id={`${stylevariant}-navigation`}
    >
      <NavButton
        onClick={() => {
          if (
            location !== "paintings" ||
            navigationRef.current.id === "home-navigation"
          ) {
            handleClickScroll("paintings", device);
            dispatch(setLocation("paintings"));
          }
          dispatch(toggleIsFirstLoad(false));
        }}
        galerieName="paintings"
        location={location || "paintings"}
        stylevariant={stylevariant}
        smooth
      >
        <Blur stylevariant={stylevariant} />
        <NavText
          stylevariant={stylevariant}
          galerieName="paintings"
          location={location || "paintings"}
        >
          {texts.mainPage.fr.nav.paintings}
          <SpanNav>{stylevariant === "galerie" && "\u00A0-\u00A0"}</SpanNav>
          {texts.mainPage.en.nav.paintings}
        </NavText>
        <CrossIcon
          src={location === "/paints" ? ArrowDownIcon : ArrowRightIcon}
        />

        <NavButtonBackground
          $firstload={!!isFirstLoad}
          location={location || "paintings"}
          galerieName="paintings"
          image="https://ik.imagekit.io/artworks/paintings/complementary_maze/dvoindrot-complementary_maze-0.jpg"
          stylevariant={stylevariant}
        />
      </NavButton>
      <NavButton
        onClick={() => {
          if (
            location !== "illustrations" ||
            navigationRef.current.id === "home-navigation"
          ) {
            handleClickScroll("illustrations", device);
            dispatch(setLocation("illustrations"));
          }
          dispatch(toggleIsFirstLoad(false));
        }}
        $firstLoad={isFirstLoad}
        location={location}
        galerieName="illustrations"
        stylevariant={stylevariant}
        smooth
      >
        <NavText stylevariant={stylevariant}>
          {texts.mainPage.fr.nav.illustrations}
          <SpanNav>{stylevariant === "galerie" && "\u00A0-\u00A0"}</SpanNav>
          {texts.mainPage.en.nav.illustrations}
        </NavText>
        <CrossIcon
          src={location === "/illustrations" ? ArrowDownIcon : ArrowRightIcon}
        />

        <Blur stylevariant={stylevariant} />

        <NavButtonBackground
          image="https://ik.imagekit.io/artworks/illustrations/cards/dvoindrot-cards-1.jpg"
          $firstload={!!isFirstLoad}
          location={location}
          stylevariant={stylevariant}
          galerieName="illustrations"
        />
      </NavButton>
    </NavContainer>
  );
}

Navigation.defaultProps = {
  stylevariant: "galerie",
  fixedVersion: false,
};

Navigation.propTypes = {
  stylevariant: PropTypes.string,
  fixedVersion: PropTypes.bool,
};
export default Navigation;

/* {stylevariant && stylevariant === "home" && (
  <>
    <NavText stylevariant={stylevariant}>
      {texts.mainPage.fr.nav.paintings}
    </NavText>
    <NavText stylevariant={stylevariant}>
      {texts.mainPage.en.nav.paintings}
    </NavText>
  </>
)}
 */
