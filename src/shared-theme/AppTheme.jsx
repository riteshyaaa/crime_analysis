import React from "react";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "./ThemeProvider.jsx";
import { useThemeContext } from "./useThemeContext.js";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#f48fb1",
    },
    background: {
      default: "#303030",
      paper: "#424242",
    },
  },
});

function AppThemeContent({ children }) {
  const { darkMode } = useThemeContext();
  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}

export default function AppTheme({ children }) {
  return (
    <ThemeProvider>
      <AppThemeContent>{children}</AppThemeContent>
    </ThemeProvider>
  );
}
