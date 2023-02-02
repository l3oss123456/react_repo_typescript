import React, { FC } from "react"
import { Link } from "react-router-dom"
import pages from "../../menuItems/Pages"
import { removeLocalStorage } from "../../services/utils/Storage"

interface Props {}

const HeaderLayout: FC<Props> = () => {
    return (
        <div style={{ background: `black`, marginBottom: 20 }}>
            <div style={{ display: `flex`, gap: 20 }}>
                {pages.map((page, index) => {
                    return (
                        <Link
                            to={page.url}
                            key={index}
                            style={{
                                color: `white`,
                                textDecoration: `none`
                            }}
                        >
                            {page.title}
                        </Link>
                    )
                })}

                <Link to={`/login`}>
                    <button
                        onClick={() => {
                            removeLocalStorage(`loginInfo`)
                        }}
                    >
                        Logout
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default HeaderLayout
