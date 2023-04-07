import React from "react";
import artStationIcon from "../styles/assets/icons/Social/Artstation.svg";
import InstaIcon from "../styles/assets/icons/Social/Instagram.svg";
import mailToIcon from "../styles/assets/icons/Social/Mail.svg";
import {
  HeaderContainer,
  HeaderName,
  SocialIcon,
  SocialIconsBox,
  HeaderLeftContainer,
} from "../styles/styledComponents/Header.sc";
import SwitchButton from "./atoms/SwitchButton";
import { toggleIsDark } from "../store/redux";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

function Header() {
  const dispatch = useDispatch();
  const { isDark } = useSelector((state) => state.main);
  const isHome = useLocation().pathname === "/";

  return (
    <HeaderContainer>
      <HeaderLeftContainer>
        {!isHome && (
          <SwitchButton
            action={() => {
              dispatch(toggleIsDark());
            }}
            isChecked={isDark}
            componentId="switch-dark-light-theme"
          />
        )}
        <SocialIconsBox isHome={isHome}>
          <SocialIcon
            src={artStationIcon}
            onClick={() =>
              window
                .open("https://www.artstation.com/j_lacouleur", "_blank")
                .focus()
            }
          />
          <SocialIcon
            src={InstaIcon}
            onClick={() =>
              window
                .open("https://www.instagram.com/damien_voindrot.art", "_blank")
                .focus()
            }
          />
          <SocialIcon
            mail="true"
            src={mailToIcon}
            onClick={() =>
              window.open("mailto:" + "damien.voindrot@gmail.com", "_blank")
            }
          />
        </SocialIconsBox>
      </HeaderLeftContainer>
      {!isHome && <HeaderName>Damien Voindrot</HeaderName>}
    </HeaderContainer>
  );
}

/* Header.defaultProps = {
  position: undefined,
};

Header.propTypes = {
  position: PropTypes.string,
};
 */
export default Header;
