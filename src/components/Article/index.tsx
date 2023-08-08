import React from "react"
import styles from "./index.less"
import { Avatar } from "../Avatar"
export const Article = () => {
    return (
        <div className={styles.articleWrap}>
            <div className={styles.articleBg}>
                <div className={styles.fuzzy}>
                    <div className={styles.title}>Hello World</div>
                    <div className={styles.date}>2021/1/14</div>
                </div>
            </div>
            <div className={styles.author}>
                <div className={styles.avatar}>
                    <Avatar />
                </div>

                <div className={styles.name}>なんでも</div>
            </div>
        </div>
    )
}
