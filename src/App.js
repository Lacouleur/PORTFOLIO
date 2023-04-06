import React, { useState } from "react";

import Home from "./pages/HomePage/HomePage";
import Theme from "./styles/core/theme";
import PageContainer from "./styles/styledComponents/PagesContainer.sc";
import { Provider, useSelector } from "react-redux";

function App() {
  const { isDark } = useSelector((state) => state.main);

  return (
    <Theme isDark={isDark}>
      <PageContainer position="absolute">
        <Home />
      </PageContainer>
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
