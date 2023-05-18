/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

import {
  NavContainer,
  NavText,
  NavButton,
  NavButtonBackground,
  SpanNav,
  NavSeparator,
} from "../../styles/styledComponents/molecules/mainNav.sc";
import texts from "../../utils/texts/texts.json";
import { setFixedNav, setLocation, toggleIsFirstLoad } from "../../store/redux";
import { useScrollPosition } from "../../utils/customHooks/useScrollPosition";
import {
  handleClickScroll,
  handleSizeChange,
} from "../../utils/helpers/navigationHelpers";

function Navigation({ stylevariant, fixedVersion }) {
  const { isFirstLoad, location, titleHeight } = useSelector(
    (state) => state.nav,
  );
  const { device } = useSelector((state) => state.main);
  const dispatch = useDispatch();

  const navigationRef = useRef();

  const [viewSize, setViewSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const [backgroundImgsSize, setBackgroundImgsSize] = useState(800);
  const [navPosition, setNavPosition] = useState(
    device === "mobile" ? -96 : -48,
  );
  const [navigationSize, setNavigationSize] = useState({
    height: 0,
    width: 0,
  });

  const paintingButtonUrl = `https://ik.imagekit.io/artworks/paintings/tr:w-${backgroundImgsSize}/candy_maze/dvoindrot-candy_maze-0.jpg`;

  const illustrationButtonUrl = `https://ik.imagekit.io/artworks/illustrations/tr:w-${backgroundImgsSize}/personal/dvoindrot-personal-2.jpg`;

  useScrollPosition(
    navigationRef,
    dispatch,
    setFixedNav,
    navPosition,
    fixedVersion,
  );

  useEffect(() => {
    setNavPosition(device === "mobile" ? -96 : -48);
    setBackgroundImgsSize(device === "mobile" ? 600 : 900);
  }, [device]);

  useEffect(() => {
    handleSizeChange(
      navigationRef,
      viewSize,
      navigationSize,
      setViewSize,
      setNavigationSize,
    );
  }, [window.innerHeight, window.innerWidth]);

  return (
    <NavContainer
      stylevariant={stylevariant}
      fixedVersion={fixedVersion}
      ref={navigationRef}
      viewSize={viewSize}
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
        <NavText
          stylevariant={stylevariant}
          galerieName="paintings"
          location={location || "paintings"}
        >
          {texts.mainPage.fr.nav.paintings}
          <SpanNav>{stylevariant === "galerie" && "\u00A0-\u00A0"}</SpanNav>
          {texts.mainPage.en.nav.paintings}
        </NavText>

        <NavButtonBackground
          navigationSize={navigationSize}
          viewSize={viewSize}
          $firstload={!!isFirstLoad}
          location={location || "paintings"}
          image={paintingButtonUrl}
          stylevariant={stylevariant}
          galerieName="paintings"
        />
      </NavButton>
      <NavSeparator stylevariant={stylevariant} />
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
        {/*  <CrossIcon
          stylevariant={stylevariant}
          src={location === "illustrations" ? ArrowDownIcon : ArrowRightIcon}
        /> */}

        <NavButtonBackground
          navigationSize={navigationSize}
          viewSize={viewSize}
          image={illustrationButtonUrl}
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
