import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  FooterContainer,
  FooterCredit,
  FooterName,
} from "../../styles/styledComponents/Footer.sc";
import { watchFooterScroll } from "../../utils/helpers/footerHelper";

function Footer() {
  const [isFooterFixed, setIsFooterFixed] = useState(true);
  const [footerAnim, setFooterAnim] = useState("in");
  const { isFullView, device } = useSelector((state) => state.main);

  useEffect(() => {
    watchFooterScroll(setFooterAnim, setIsFooterFixed, isFullView.toogle);
  }, [window.scrollY, isFullView.toogle]);

  useEffect(() => {
    watchFooterScroll(setFooterAnim, setIsFooterFixed);
  }, []);

  return (
    <FooterContainer
      isFooterFixed={device !== "mobile" ? isFooterFixed : false}
      fade={footerAnim}
    >
      <FooterCredit>
        This website is coded by <FooterName>Damien Voindrot</FooterName> and
        designed by <FooterName>Thomas Voindrot</FooterName>.
      </FooterCredit>
    </FooterContainer>
  );
}

/*

Footer.defaultProps = {
  position: undefined,
};

Footer.propTypes = {
  position: PropTypes.string,
};
 */

export default Footer;
