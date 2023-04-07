import React, { useState } from "react";

import Home from "./pages/HomePage/HomePage";
import Theme from "./styles/core/theme";
import {
  PageContainer,
  SiteContainer,
} from "./styles/styledComponents/PagesContainer.sc";
import { Provider, useSelector } from "react-redux";

function App() {
  const { isDark } = useSelector((state) => state.main);

  return (
    <Theme isDark={isDark}>
      <SiteContainer position="absolute">
        <PageContainer>
          <Home />
        </PageContainer>
      </SiteContainer>
    </Theme>
  );
}

/* App.defaultProps = {
  position: undefined,
};

App.propTypes = {
  position: PropTypes.string,
};
 */
export default App;
