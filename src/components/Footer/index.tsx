import styles from "./index.less"
import React from "react"
import {blogAuthName} from "../../utils";

export const Footer = (props: any) => {
    const { theme } = props
    return (
        <footer>
            <div className={`${styles.footer} ${styles[theme]}`}>
                <div>React</div>
                <div>Copyright © 2022 - </div>
                <div>{blogAuthName}!</div>
            </div>
        </footer>
    )
}
