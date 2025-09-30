import React from "react";
import { IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useThemeContext } from "./useThemeContext.js";

export default function ColorModeSelect({ sx }) {
  const { darkMode, toggleTheme } = useThemeContext();

  return (
    <IconButton
      sx={{ ...sx }}
      onClick={toggleTheme}
      color="inherit"
      aria-label="toggle light/dark mode"
    >
      {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
}
