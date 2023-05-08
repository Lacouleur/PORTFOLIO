import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import artStationIcon from "../styles/assets/icons/Social/Artstation.svg";
import InstaIcon from "../styles/assets/icons/Social/Instagram.svg";
import mailToIcon from "../styles/assets/icons/Social/Mail.svg";
import {
  HeaderContainer,
  HeaderName,
  SocialIcon,
  SocialIconsBox,
  HeaderLeftContainer,
  SelectorContainer,
  Selector,
  SelectorBox,
  SelectorText,
  SelectorIcon,
  SelectorSeparator,
} from "../styles/styledComponents/Header.sc";
import SwitchButton from "./atoms/SwitchButton";
import { toggleIsDark } from "../store/redux";
import useDelayUnmount from "../utils/customHooks/useDelayUnmount";
import { handleClickScroll } from "../utils/helpers/navigationHelpers";

function Header() {
  const dispatch = useDispatch();
  const { isDark } = useSelector((state) => state.main);
  const [isInstaSelector, setIsInstaSelector] = useState(false);
  const { showName } = useSelector((state) => state.header);

  const shouldRender = useDelayUnmount(showName, 200);
  const renderExpend = useDelayUnmount(isInstaSelector, 200);

  return (
    <HeaderContainer>
      <HeaderLeftContainer>
        <SwitchButton
          action={() => {
            dispatch(toggleIsDark());
          }}
          isChecked={isDark}
          componentId="switch-dark-light-theme"
        />

        <SocialIconsBox>
          <SocialIcon
            src={artStationIcon}
            onClick={() =>
              window
                .open("https://www.artstation.com/j_lacouleur", "_blank")
                .focus()
            }
          />
          <Selector onClick={() => setIsInstaSelector(!isInstaSelector)}>
            <SocialIcon $selector={isInstaSelector} src={InstaIcon} />
            {renderExpend && (
              <SelectorContainer expend={!!isInstaSelector}>
                <SelectorText>Peintures</SelectorText>
                <SelectorSeparator />
                <SelectorText last>Illustrations</SelectorText>
              </SelectorContainer>
            )}
          </Selector>

          <SocialIcon
            mail="true"
            src={mailToIcon}
            onClick={() =>
              window.open("mailto:" + "damien.voindrot@gmail.com", "_blank")
            }
          />
        </SocialIconsBox>
      </HeaderLeftContainer>
      {shouldRender && (
        <HeaderName
          onClick={() => {
            handleClickScroll("home");
          }}
          fade={showName ? "in" : "out"}
        >
          Damien Voindrot
        </HeaderName>
      )}
    </HeaderContainer>
  );
}

/* onClick={() =>
  window
    .open(
      "https://www.instagram.com/damien_voindrot.art",
      "_blank",
    )
    .focus()
} */

/* Header.defaultProps = {
  position: undefined,
};

Header.propTypes = {
  position: PropTypes.string,
};
 */
export default Header;
