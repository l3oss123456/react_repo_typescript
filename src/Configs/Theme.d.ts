// import { ThemeOptions } from "@mui/material";
import React from "react";

declare module "@mui/material/styles" {
  interface Theme {
    configs: {
      theme: {
        light: {
          primary: {
            main: string;
            light: string;
            dark: string;
            contrastText: string;
          };
          text: {
            primary: string;
            secondary: string;
            disabled: string;
            info: string;
            warning: string;
            error: string;
          };
        };
        dark: {
          primary: {
            main: string;
            light: string;
            dark: string;
            contrastText: string;
          };
          text: {
            primary: string;
            secondary: string;
            disabled: string;
            info: string;
            warning: string;
            error: string;
          };
        };
      };

      palette: {
        light: {
          primary: {
            main: string;
            light: string;
            dark: string;
            contrastText: string;
          };
          text: {
            primary: string;
            secondary: string;
            disabled: string;
            info: string;
            warning: string;
            error: string;
          };
        };
        dark: {
          primary: {
            main: string;
            light: string;
            dark: string;
            contrastText: string;
          };
          text: {
            primary: string;
            secondary: string;
            disabled: string;
            info: string;
            warning: string;
            error: string;
          };
        };
      };

      typography: {
        h1: {
          fontSize: string;
          fontFamily: string;
          fontWeight: number;
          lineHeight: number;
          letterSpacing: string;
        };
        h2: {
          fontSize: string;
          fontFamily: string;
          fontWeight: string;
          lineHeight: number;
          letterSpacing: string;
        };
        text: {
          fontSize: string;
          fontFamily: string;
          fontWeight: string;
          lineHeight: number;
          letterSpacing: string;
        };
      };
    };
  }

  //   interface ThemeOptions {
  //     status: {
  //       danger: React.CSSProperties["color"];
  //     };
  //     configs: {
  //       typography: {
  //         fontSize: React.CSSProperties["fontSize"];
  //       };
  //     };
  //   }
}
