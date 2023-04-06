import React from "react";
import artStationIcon from "../styles/assets/icons/Social/Artstation.svg";
import InstaIcon from "../styles/assets/icons/Social/Instagram.svg";
import mailToIcon from "../styles/assets/icons/Social/Mail.svg";
import {
  HeaderContainer,
  HeaderName,
  SocialIcon,
  SocialIconsBox,
} from "../styles/styledComponents/Header.sc";

function Header() {
  return (
    <HeaderContainer>
      <SocialIconsBox>
        <SocialIcon src={artStationIcon} />
        <SocialIcon src={InstaIcon} />
        <SocialIcon mail src={mailToIcon} />
      </SocialIconsBox>

      <HeaderName>Damien Voindrot</HeaderName>
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
