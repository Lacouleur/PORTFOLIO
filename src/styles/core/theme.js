/* eslint-disable react/prop-types */
import React from "react";
import { ThemeProvider } from "styled-components";

const colorsList = {
  brightRed: "#FF5F55",
  brightSand: "#f2e4c4",
  darkLake: "#2a4240",
  dark80: "#2b302f",
  dark50: "#4e5151",
  white: "#EDF3EF",
  white50: "#f2e4c490",
};

const fontSizesList = {
  artTitleBig: "italic 600 32px Labrada",
  artTitleMedium: "italic 700 20px Labrada",
  titleBig: "normal 700 64px 'DM Sans', sans-serif",
  titleMedium: "normal 700 32px 'DM Sans', sans-serif",
  titleSmall: "normal 700 20px 'DM Sans', sans-serif",
  titleTiny: "italic 700 16px 'DM Sans', sans-serif",
  bodyMedium: "normal 500 16px 'DM Sans', sans-serif",
  labelSmall: "normal 500 12px 'DM Sans', sans-serif",
  labelLink: "italic 500 16px 'DM Sans', sans-serif",
};

const { brightRed, brightSand, darkLake, dark80, dark50, white, white50 } =
  colorsList;

const themeLight = {
  colors: {
    background: brightSand,
    font: darkLake,
    fontDimmed: white50,
    accent: brightRed,
  },
  fonts: {
    ...fontSizesList,
  },
};

const themeDark = {
  colors: {
    background: darkLake,
    font: brightSand,
    fontDimmed: white50,
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
