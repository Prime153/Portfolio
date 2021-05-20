import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ParallaxProvider } from "react-scroll-parallax";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#632EFA",
    },
  },
  breakpoints: {
    values: {
      sm: 600,
      lg: 1400,
    },
  },
});

if (typeof window !== "undefined") {
  require("smooth-scroll")('a[href*="#"]');
}

const ThemeLayout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <ParallaxProvider>
      <CssBaseline>{children}</CssBaseline>
    </ParallaxProvider>
  </ThemeProvider>
);

export default ThemeLayout;
