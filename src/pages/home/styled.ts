// import React from "react";
import { Button, Divider } from "@mui/material"
import { styled } from "@mui/material/styles"

interface Props {
    bgcolor?: string
    fontcolor?: string
    bold?: boolean
    color?: string
}

export const SuccessBtn = styled(Button)<Props>((props) => {
    const { theme } = props

    return {
        background: theme.configs.paletteTheme.primary.main,
        color: theme.configs.paletteTheme.text.primary,

        ":hover": {
            background: theme.configs.paletteTheme.primary.light
        }
    }
})

export const CMDivider = styled(Divider)<Props>(({ theme }) => {
    return {
        background: `red`,
        margin: `${theme.spacing(5)} 0px`
    }
})

export const TestBtn = styled(Button)<Props>((props) => {
    return {
        color: props.fontcolor,
        background: props.bgcolor
    }
})
