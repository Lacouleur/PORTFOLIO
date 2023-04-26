import React from "react";
import { ThemeProvider } from "styled-components";

const colorsList = {
  brightRed: "#FF5F55",
  brightGreen: "#72F9C8",
  darkGreen: "#2C3A38",
  dark80: "#2b302f",
  dark50: "#4e5151",
  white: "#EDF3EF",
  white50: "#a8c0b7",
};

const fontSizesList = {
  artTitleBig: "italic 600 32px/32px Labrada",
  artTitleMedium: "italic 700 20px/29px Labrada",
  titleBig: "normal 700 64px 'DM Sans', sans-serif",
  titleMedium: "normal 700 32px 'DM Sans', sans-serif",
  titleSmall: "normal 700 20px/26px 'DM Sans', sans-serif",
  titleTiny: "italic 700 16px/16px 'DM Sans', sans-serif",
  bodyMedium: "normal 500 16px/19px 'DM Sans', sans-serif",
  labelSmall: "normal 500 14px/18px 'DM Sans', sans-serif",
  labelLink: "italic 500 16px/19px 'DM Sans', sans-serif",
};

const { brightRed, brightGreen, darkGreen, dark80, dark50, white, white50 } =
  colorsList;

const themeLight = {
  colors: {
    background: brightGreen,
    font: darkGreen,
    fontDimmed: white50,
    accent: brightRed,
  },
  fonts: {
    ...fontSizesList,
  },
};

const themeDark = {
  colors: {
    background: darkGreen,
    font: brightGreen,
    fontDimmed: dark50,
    accent: brightRed,
  },
  fonts: {
    ...fontSizesList,
  },
};

function Theme({ children, isDark }) {
  return (
    <ThemeProvider theme={isDark ? themeDark : themeLight}>
      {children}
    </ThemeProvider>
  );
}

export default Theme;
