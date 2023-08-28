import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  SubTitle,
  Title,
  TitleContainer,
} from "../../styles/styledComponents/atoms/texts.sc";
import { HomeSection } from "../../styles/styledComponents/Home.sc";
import { setShowName, setTitleHeight } from "../../store/redux";
import { useScrollPosition } from "../../utils/customHooks/useScrollPosition";

function Home() {
  const dispatch = useDispatch();
  const titleRef = useRef(null);
  const { titleHeight } = useSelector((state) => state.nav);

  useScrollPosition(titleRef, dispatch, setShowName);

  useEffect(() => {
    const CurrentTitleHeight = titleRef?.current.clientHeight;
    if (CurrentTitleHeight && CurrentTitleHeight !== titleHeight) {
      dispatch(setTitleHeight(titleRef.current.clientHeight));
    }
  }, [window.innerHeight, window.innerWidth]);

  return (
    <HomeSection>
      <TitleContainer ref={titleRef} id="title">
        <Title>Jaune Lacouleur</Title>
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
