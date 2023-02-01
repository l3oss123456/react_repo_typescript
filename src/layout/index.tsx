import React, { FC } from "react"
import HeaderLayout from "./Header"

interface Props {
    children: React.ReactNode
}

const Layout: FC<Props> = ({ children }) => {
    return (
        <div>
            <HeaderLayout />
            {children}
        </div>
    )
}

export default Layout
