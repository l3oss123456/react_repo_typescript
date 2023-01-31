// import React from "react";
import { styled, Button, Divider } from "@mui/material";

export const SuccessBtn = styled(Button)(({ theme }) => {
  const selectedTheme = `dark`;

  // console.log("themethemetheme", theme);
  // console.log("themethemetheme", theme.configs.palette);

  // const typography = theme.configs.typography;

  return {
    // background: `lightgreen`,
    // color: `purple`,

    background: theme[`configs`][`theme`][selectedTheme][`primary`][`main`],
    color: theme[`configs`][`theme`][selectedTheme][`text`][`primary`],
    // fontFamily: typography.text.fontFamily,

    ":hover": {
      // background: `red`,
      background: theme[`configs`][`theme`][selectedTheme][`primary`][`light`],
    },
  };
});

export const CMDivider = styled(Divider)(({ theme }) => {
  return {
    background: `red`,
    margin: `${theme.spacing(5)} 0px`,
  };
});
