import React, { FC } from "react"
import { Box } from "@mui/material"

interface Props {
    children: React.ReactNode
    style?: Object
}

const Spacer: FC<Props> = ({ children, style }) => {
    return (
        <Box
            //   direction={`column`}
            //   spacing={3}
            // sx={{
            //     m: `0px 50px`
            // }}
            style={{ margin: ` 0px 50px`, ...style }}
        >
            {children}
        </Box>
    )
}

export default Spacer
