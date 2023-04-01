import React, { useState } from "react";

import Home from "./pages/HomePage/HomePage";
import Theme from "./styles/core/theme";
import PageContainer from "./styles/styledComponents/PagesContainer.sc";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  return (
    <Theme isDark={isDarkTheme}>
      <PageContainer
        onClick={() => setIsDarkTheme(!isDarkTheme)}
        position="absolute"
      >
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
