import Image from "../../assets/image/dbssjc.png"
import React from "react"
import styles from "./index.less"

export const Float = () => {
    return (
        <div className={styles.container}>
            <header className={styles.clearfix}>
                <div className={styles.logo}>
                    <img src={Image} alt="" className={styles.hImage} />
                </div>
                <ul className={`${styles.clearfix} ${styles.navl}`}>
                    <li>首页</li>
                    <li>456</li>
                    <li>123</li>
                    <li>关于</li>
                </ul>
            </header>

            <div className={`${styles.clearfix} ${styles.content}`}>
                <div className={styles.aside}>一行有六个字</div>
                <main></main>
                <div className={styles.ad}></div>
            </div>

            <div className={styles.imageList}>
                <div className={`${styles.clearfix} ${styles.x}`}>
                    <div className={styles.image} />
                    <div className={styles.image} />
                    <div className={styles.image}></div>
                    <div className={styles.image}></div>
                    <div className={styles.image}></div>
                    <div className={styles.image}></div>
                    <div className={styles.image}></div>
                </div>
            </div>
        </div>
    )
}
