import React, { FC, useMemo } from "react"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { CssBaseline, StyledEngineProvider } from "@mui/material"
import Typography from "./Typography"
import Palette from "./Palette"

interface Props {
    children: React.ReactNode
}

const ThemeCustomization: FC<Props> = ({ children }) => {
    const typographyTheme = Typography(`Roboto-Regular`)

    const themeOptions = useMemo(
        () => ({
            breakpoints: {
                values: {
                    xs: 0,
                    sm: 768,
                    md: 1024,
                    lg: 1266,
                    xl: 1536
                }
            },
            typography: typographyTheme,
            configs: {
                paletteTheme: Palette(`dark`)
            }
        }),
        [typographyTheme]
    )

    const themes = createTheme(themeOptions)

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={themes}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </StyledEngineProvider>
    )
}

export default ThemeCustomization
