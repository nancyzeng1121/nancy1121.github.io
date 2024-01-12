import React from "react"
import styles from "./index.less"
import article from "../../assets/image/personal.jpg"
export const Avatar = () => {
    return (
        <div className={styles.avatar}>
            <img src={article} alt="" />
        </div>
    )
}
