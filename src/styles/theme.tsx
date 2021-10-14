import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#903A58",
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
