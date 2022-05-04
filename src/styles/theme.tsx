import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#903A58",
    },
    secondary: {
      main: "#3a9072",
      light: "#3a907224",
    },
  },
  typography: {
    h1: {},
  },
});

const CustomThemeProvider = ({ children }: any) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default CustomThemeProvider;
