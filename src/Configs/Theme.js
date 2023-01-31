import { createTheme } from "@mui/material";
import Palette from "./Palette";
import Typography from "./Typography";

const theme = createTheme({
  spacing: 8,
  // palette: {
  //   //   // secondary: {
  //   //   //   main: `#fff`,
  //   //   // },
  //   // neutral: {
  //   //   main: "#64748B",
  //   //   contrastText: "#fff",
  //   // },
  // },

  // palette: Palette,
  // typography: Typography,

  typography: {
    fontFamily: `Roboto-Regular`,
    // h1: {
    //   fontFamily: `Roboto-Bold`,
    // },
    // h2: {
    //   fontFamily: `Roboto-Bold`,
    // },
  },

  configs: {
    theme: Palette,
    // palette: Palette,
    typography: Typography,
  },
});

export default theme;
