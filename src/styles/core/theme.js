/* eslint-disable react/prop-types */
import React from "react";
import { ThemeProvider } from "styled-components";

const colorsList = {
  brightRed: "#FF5F55",
  light: "#f2e4c4",
  darkLake: "#0d292b",
  dark80: "#2b302f",
  dark50: "#4e5151",
  white50: "#f2e4c490",
  warmGrey70: "#c1b6ac70",
};

/* light: "#CCD5AE",
  darkLake: "#253d3b", */
/* const colorsList = {
  brightRed: "#FF5F55",
  light: "#f2e4c4",
  darkLake: "#253d3b",
  dark80: "#2b302f",
  dark50: "#4e5151",
  white50: "#f2e4c490",
  warmGrey70: "#c1b6ac70",
};
 */
/* const colorsList = {
  brightRed: "#FF5F55",
  light: "#6bf9c5",
  darkLake: "#2C3A38",
  dark80: "#2b302f",
  dark50: "#4e5151",
  white50: "#72fffa50",
  warmGrey70: "#72fffa70",
}; */

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

const { brightRed, light, darkLake, dark80, dark50, warmGrey70, white50 } =
  colorsList;

const themeLight = {
  colors: {
    background: "#d6d3bc",
    font: "#02171f",
    fontDimmed: "#587885",
    accent: brightRed,
    dark: "#2e2421",
    white: "#F9FBE7",
    backgroundDimmed: "#ECCDB4",
  },
  fonts: {
    ...fontSizesList,
  },
};

const themeDark = {
  colors: {
    background: darkLake,
    font: "#f2e4c4",
    fontDimmed: white50,
    accent: brightRed,
    dark: "#2e2421",
    white: "#F9FBE7",
    backgroundDimmed: "#1a4245",
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
