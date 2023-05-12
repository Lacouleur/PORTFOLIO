import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  FooterContainer,
  FooterCredit,
  FooterName,
} from "../../styles/styledComponents/Footer.sc";

function Footer() {
  const [isFooterFixed, setIsFooterFixed] = useState(true);
  const [footerAnim, setFooterAnim] = useState("in");

  const { isFullView } = useSelector((state) => state.main);

  useEffect(() => {
    if (window.scrollY !== 0) {
      setFooterAnim("out");
      if (window.scrollY > 500) {
        setIsFooterFixed(false);
      }
    }
    if (window.scrollY === 0) {
      setFooterAnim("in");
      setIsFooterFixed(true);
    }
  }, [window.scrollY]);

  return (
    <FooterContainer
      isFooterFixed={isFullView.toogle ? false : isFooterFixed}
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
