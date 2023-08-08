import React from "react"
import { Link } from "react-router-dom"
import "./index.less"

export const Navbar = () => {
    return (
        <div className={"header-wrap"}>
            <div className={"nav"}>
                <Link to="/">float</Link>
            </div>
            <div className={"nav"}>
                <Link to="/about">flex</Link>
            </div>

            <div className={"nav"}>
                <Link to="/grid">grid</Link>
            </div>
        </div>
    )
}
