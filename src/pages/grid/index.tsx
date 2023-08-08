import React from "react"
import { RenderDescComponent } from "../../components/Box"
import styles from "./index.less"

export const Grid = () => {
    const comList = [
        {
            name: "1234"
        },
        {
            name: "1234"
        },
        {
            name: "1234"
        },
        {
            name: "1234"
        }
    ]
    return (
        <div className={styles.gridContainer}>
            <div className={styles.gridWrap}>
                {comList.map(v => (
                    <RenderDescComponent key={v.name}>
                        <div>{v.name}</div>
                    </RenderDescComponent>
                ))}
            </div>
            <div className={styles.gridWrapTwo}>
                {comList.map(v => (
                    <RenderDescComponent key={v.name}>
                        <div>{v.name}</div>
                    </RenderDescComponent>
                ))}
            </div>
        </div>
    )
}
