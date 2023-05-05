/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

import {
  NavContainer,
  NavText,
  NavButton,
  CrossIcon,
  NavButtonBackground,
} from "../../styles/styledComponents/molecules/mainNav.sc";
import texts from "../../utils/texts/texts.json";
import ArrowDownIcon from "../../styles/assets/icons/Arrow/Down.svg";
import ArrowRightIcon from "../../styles/assets/icons/Arrow/Right.svg";
import { setFixedNav, setLocation, toggleIsFirstLoad } from "../../store/redux";
import { useScrollPosition } from "../../utils/customHooks/useScrollPosition";
import { handleClickScroll } from "../../utils/helpers/navigationHelpers";

function Navigation({ stylevariant, fixedVersion }) {
  const { isFirstLoad, location } = useSelector((state) => state.nav);
  const dispatch = useDispatch();
  const navigationRef = useRef(null);

  useScrollPosition(navigationRef, dispatch, setFixedNav, -48, fixedVersion);

  return (
    <NavContainer
      id={fixedVersion ? "fixedNav" : "classicNav"}
      stylevariant={stylevariant}
      fixedVersion={fixedVersion}
      ref={fixedVersion ? undefined : navigationRef}
    >
      <NavButton
        onClick={() => {
          if (location !== "paintings") {
            handleClickScroll("paintings");
            dispatch(setLocation("paintings"));
          }
          dispatch(toggleIsFirstLoad(false));
        }}
        galerieName="paintings"
        location={location}
        stylevariant={stylevariant}
        smooth
      >
        {stylevariant && stylevariant === "galerie" && (
          <>
            <NavText stylevariant={stylevariant}>
              {texts.mainPage.fr.nav.paintings} -{" "}
              {texts.mainPage.en.nav.paintings}
            </NavText>
            <CrossIcon
              src={location === "/paints" ? ArrowDownIcon : ArrowRightIcon}
            />
            <NavButtonBackground
              $firstload={!!isFirstLoad}
              location={location}
              galerieName="paintings"
            />
          </>
        )}
      </NavButton>
      <NavButton
        onClick={() => {
          if (location !== "illustrations") {
            handleClickScroll("illustrations");
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
        {stylevariant && stylevariant === "galerie" && (
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
            <NavButtonBackground
              $firstload={!!isFirstLoad}
              location={location}
              galerieName="illustrations"
            />
          </>
        )}
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
