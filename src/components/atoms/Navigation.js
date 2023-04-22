/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import {
  NavContainer,
  NavText,
  NavButton,
  CrossIcon,
} from "../../styles/styledComponents/molecules/mainNav.sc";
import texts from "../../utils/texts/texts.json";
import ArrowDownIcon from "../../styles/assets/icons/Arrow/Down.svg";
import ArrowRightIcon from "../../styles/assets/icons/Arrow/Right.svg";
import {
  setFixedNav,
  setNavBarRef,
  toggleIsFirstLoad,
} from "../../store/redux";
import useScrollPosition from "../../utils/customHooks/useScrollPosition";

function Navigation({ stylevariant, fixedVersion }) {
  const location = useLocation().pathname;
  const { isFirstLoad } = useSelector((state) => state.nav);
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

Navigation.defaultProps = {
  stylevariant: "galery",
  fixedVersion: false,
};

Navigation.propTypes = {
  stylevariant: PropTypes.string,
  fixedVersion: PropTypes.bool,
};

export default Navigation;
