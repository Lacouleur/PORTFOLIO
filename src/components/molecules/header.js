import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InstaIcon from "../../styles/assets/icons/Social/Instagram.svg";
import mailToIcon from "../../styles/assets/icons/Social/Mail.svg";
import {
  HeaderContainer,
  HeaderName,
  SocialIcon,
  SocialIconsBox,
  HeaderLeftContainer,
} from "../../styles/styledComponents/Header.sc";
import SwitchButton from "../atoms/SwitchButton";
import { toggleIsDark } from "../../store/redux";
import useDelayUnmount from "../../utils/customHooks/useDelayUnmount";
import { handleClickScroll } from "../../utils/helpers/navigationHelpers";
import useClickOutside from "../../utils/customHooks/useClickOutside";

function Header() {
  const dispatch = useDispatch();
  const { isDark, device } = useSelector((state) => state.main);
  const [isInstaSelector, setIsInstaSelector] = useState(false);
  const { showName } = useSelector((state) => state.header);
  const headerRef = useRef();

  const shouldRender = useDelayUnmount(showName, 200);

  useClickOutside(headerRef, () => setIsInstaSelector(false));

  return (
    <HeaderContainer $selector={isInstaSelector} ref={headerRef}>
      <HeaderLeftContainer>
        <SwitchButton
          action={() => {
            dispatch(toggleIsDark());
          }}
          isChecked={isDark}
          componentId="switch-dark-light-theme"
        />

        <SocialIconsBox>
          {/*          <SocialIcon
            src={artStationIcon}
            onClick={() =>
              window
                .open("https://www.artstation.com/j_lacouleur", "_blank")
                .focus()
            }
          /> */}
          <SocialIcon
            src={InstaIcon}
            onClick={() =>
              window
                .open(
                  "https://www.instagram.com/jaune_lacouleur.art/",
                  "_blank",
                )
                .focus()
            }
          />
          {/* <Selector onClick={() => setIsInstaSelector(!isInstaSelector)}>
            <SocialIcon $selector={isInstaSelector} src={InstaIcon} />
            {renderExpend && (
              <SelectorContainer expend={!!isInstaSelector}>
                <SelectorText
                  onClick={() =>
                    window
                      .open(
                        "https://www.instagram.com/damien_voindrot.art/",
                        "_blank",
                      )
                      .focus()
                  }
                >
                  Insta Peintures
                </SelectorText>
                <SelectorSeparator />
                <SelectorText
                  onClick={() =>
                    window
                      .open(
                        "https://www.instagram.com/damienv.illus/",
                        "_blank",
                      )
                      .focus()
                  }
                  last
                >
                  Insta Illustrations
                </SelectorText>
              </SelectorContainer>
            )}
          </Selector> */}

          <SocialIcon
            mail="true"
            src={mailToIcon}
            onClick={() =>
              window.open("mailto:" + "j.lacouleur@gmail.com", "_blank")
            }
          />
        </SocialIconsBox>
      </HeaderLeftContainer>
      {shouldRender && (
        <HeaderName
          onClick={() => {
            handleClickScroll("home", device);
          }}
          fade={showName ? "in" : "out"}
        >
          Jaune Lacouleur
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
