import React, { useState } from "react";
import Header from "../../components/header";
import texts from "../../texts/texts.json";
import {
  Link,
  TextBlock,
  TextBody,
  Title,
} from "../../styles/styledComponents/atoms/texts.sc";
import {
  HomeTextBox,
  HomeSiteContainer,
} from "../../styles/styledComponents/Home.sc";
import { useDispatch, useSelector } from "react-redux";
import SwitchButton from "../../components/atoms/SwitchButton";
import { toggleIsDark } from "../../store/redux";

function Home() {
  const dispatch = useDispatch();
  const { isDark } = useSelector((state) => state.main);
  return (
    <>
      <Header />
      <HomeSiteContainer>
        <Title>Damien Voindrot</Title>
        <SwitchButton
          action={() => {
            dispatch(toggleIsDark());
          }}
          isChecked={isDark}
          styleVariant={"homeSwitch"}
          componentId="switch-dark-light-theme-home"
        />
        <HomeTextBox>
          <TextBlock>
            <TextBody>{texts.mainPage.fr.prez}</TextBody>
            <Link
              onClick={() =>
                window.open(`${texts.mainPage.fr.cta.link}`, "_blank")
              }
            >
              {texts.mainPage.fr.cta.text}
            </Link>
          </TextBlock>
          <TextBlock>
            <TextBody>{texts.mainPage.en.prez}</TextBody>
            <Link
              onClick={() =>
                window.open(`${texts.mainPage.en.cta.link}`, "_blank")
              }
            >
              {texts.mainPage.en.cta.text}
            </Link>
          </TextBlock>
        </HomeTextBox>
      </HomeSiteContainer>
    </>
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
