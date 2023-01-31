// import React from "react";
import { styled, Button, Divider } from "@mui/material";

interface Props {
  bgcolor?: string;
  fontcolor?: string;
  bold?: boolean;
  color?: string;
}

export const SuccessBtn = styled(Button)<Props>((props) => {
  const { theme } = props;
  const selectedTheme = `dark`;

  return {
    background: theme[`configs`][`theme`][selectedTheme][`primary`][`main`],
    color: theme[`configs`][`theme`][selectedTheme][`text`][`primary`],
    fontFamily: theme[`configs`][`typography`][`text`][`fontFamily`],

    ":hover": {
      background: theme[`configs`][`theme`][selectedTheme][`primary`][`light`],
    },
  };
});

export const CMDivider = styled(Divider)<Props>(({ theme }) => {
  return {
    background: `red`,
    margin: `${theme.spacing(5)} 0px`,
  };
});

export const TestBtn = styled(Button)<Props>((props) => {
  return {
    color: props.fontcolor,
    background: props.bgcolor,
  };
});

// export const TestBtn = styled(Button)`
//   color: #20b2aa;

//   :hover {
//     color: #2e8b57;
//   }
// `;
