import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";

const theme = createTheme({
  palette: {
    // primary: {
    // main: "#903A58",
    // },
  },
  typography: {
    h1: {},
  },
});

const CustomThemeProvider = ({ children }: any) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
  //   return <>{children}</>
};

export default CustomThemeProvider;
