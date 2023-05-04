import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import {
  SubTitle,
  SubTitleBox,
  Title,
  TitleContainer,
} from "../../styles/styledComponents/atoms/texts.sc";
import { HomeSection } from "../../styles/styledComponents/Home.sc";
import { setShowName } from "../../store/redux";
import { useScrollPosition } from "../../utils/customHooks/useScrollPosition";

function Home() {
  const dispatch = useDispatch();
  const titleRef = useRef(null);

  useScrollPosition(titleRef, dispatch, setShowName);

  return (
    <HomeSection>
      <TitleContainer ref={titleRef}>
        <Title>Damien Voindrot</Title>
        <SubTitle>Artiste Visuel / Visual Artist</SubTitle>
      </TitleContainer>
    </HomeSection>
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

// TEXT ON HOMEPAGE
/*         <SwitchButton
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
        </HomeTextBox> */
