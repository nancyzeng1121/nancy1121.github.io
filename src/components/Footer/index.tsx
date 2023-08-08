import styles from "./index.less"
import React from "react"

export const Footer = (props: any) => {
    const { theme } = props
    return (
        <footer>
            <div className={`${styles.footer} ${styles[theme]}`}>
                <div>React</div>
                <div>Copyright © 2022 - </div>
                <div>なんでも!</div>
            </div>
        </footer>
    )
}
