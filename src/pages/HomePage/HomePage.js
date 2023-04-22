import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header";
import texts from "../../utils/texts/texts.json";
import {
  CtaLink,
  TextBlock,
  TextBody,
  Title,
} from "../../styles/styledComponents/atoms/texts.sc";
import {
  HomeTextBox,
  HomeSiteContainer,
  HomeSection,
  HomepageContainer,
} from "../../styles/styledComponents/Home.sc";
import SwitchButton from "../../components/atoms/SwitchButton";
import { toggleIsDark } from "../../store/redux";
import { Wrapper } from "../../styles/core/breakpoints";
import Navigation from "../../components/atoms/Navigation";

function Home() {
  const { isDark } = useSelector((state) => state.main);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <HomepageContainer>
      <Header />
      {/*    <HomeSection
        onWheel={(event) => {
          if (event.nativeEvent.wheelDelta < 0) {
            navigate("/paints");
          }
        }}
      > */}
      <HomeSection>
        <Title>Damien Voindrot</Title>
        <SwitchButton
          action={() => {
            dispatch(toggleIsDark());
          }}
          isChecked={isDark}
          stylevariant="homeSwitch"
          componentId="switch-dark-light-theme-home"
        />
        <HomeTextBox>
          <TextBlock>
            <TextBody>{texts.mainPage.fr.prez}</TextBody>
            <CtaLink
              onClick={() =>
                window.open(`${texts.mainPage.fr.cta.link}`, "_blank")
              }
            >
              {texts.mainPage.fr.cta.text}
            </CtaLink>
          </TextBlock>
          <TextBlock>
            <TextBody>{texts.mainPage.en.prez}</TextBody>
            <CtaLink
              onClick={() =>
                window.open(`${texts.mainPage.en.cta.link}`, "_blank")
              }
            >
              {texts.mainPage.en.cta.text}
            </CtaLink>
          </TextBlock>
        </HomeTextBox>
      </HomeSection>
    </HomepageContainer>
  );
}

/* Home.defaultProps = {
  position: undefined,
};

Home.propTypes = {
  position: PropTypes.string,
};
 */
export default Home;
