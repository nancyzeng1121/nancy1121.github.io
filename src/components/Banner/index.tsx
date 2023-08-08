import React, { useState } from "react"
import styles from "./index.less"
import bilibiliWinterView1 from "../../assets/image/bilibili-winter-view-1.jpg"
import bilibiliWinterView2 from "../../assets/image/bilibili-winter-view-2.jpg"
import bilibiliWinterTree1 from "../../assets/image/bilibili-winter-tree-1.png"
import bilibiliWinterTree2 from "../../assets/image/bilibili-winter-tree-2.png"
import bilibiliWinterTree3 from "../../assets/image/bilibili-winter-tree-3.png"
import bilibiliWinterSnow3 from "../../assets/image/bilibili-winter-view-3-snow.png"
import bilibiliWinterView3 from "../../assets/media/bilibili-winter-view-3.webm"
export const Banner = () => {
    const [style, setStyle] = useState({})
    const [isMove, setIsMove] = useState(false)
    const [startingPoint, setStartingPoint] = useState(0)
    const handleMouseEnter = (e: any) => {
        setStartingPoint(e.clientX)
        setIsMove(true)
    }
    const handleMouseOut = (e: any) => {
        setIsMove(false)
        setStyle({ "--percentage": 0.5 })
    }

    const handleMouseMove = (e: any) => {
        const percentage: any = ((startingPoint - e.clientX) / window.outerWidth) * 2 + 0.5
        setStyle({ "--percentage": percentage })
    }
    return (
        <div
            className={`${styles.banner} ${isMove && styles.moving}`}
            onMouseEnter={handleMouseEnter}
            onMouseOut={handleMouseOut}
            onMouseMove={handleMouseMove}
            style={{ ...style }}
        >
            <div className={styles.view}>
                <img src={bilibiliWinterView1} className={styles.morning} alt="" />
                <img src={bilibiliWinterView2} className={styles.afternoon} alt="" />
                <img
                    src={
                        "data:image/png;base64,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"
                    }
                    className={styles.ball}
                    alt=""
                />
                <video autoPlay loop muted className={styles.evening}>
                    <source src={bilibiliWinterView3} type="video/webm" />
                </video>
                <img src={bilibiliWinterSnow3} className={styles.windowCover} alt="" />
            </div>
            <div className={styles.tree}>
                <img src={bilibiliWinterTree1} className={styles.morning} alt="" />
                <img src={bilibiliWinterTree2} className={styles.afternoon} alt="" />
                <img src={bilibiliWinterTree3} className={styles.evening} alt="" />
            </div>
        </div>
    )
}
