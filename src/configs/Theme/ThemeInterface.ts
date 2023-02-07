import React from "react"

declare module "@mui/material/styles" {
    interface Theme {
        configs: {
            paletteTheme: {
                primary: {
                    main?: string
                    light?: string
                    dark?: string
                    contrastText?: string
                }
                text: {
                    primary?: string
                    secondary?: string
                    disabled?: string
                    info?: string
                    warning?: string
                    error?: string
                }
            }
        }
    }
}
