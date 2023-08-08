import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"
import styles from "./index.less"
import { ColorItemProps } from "../../types"
export const ThemeItem = (props: any) => {
    const { callback, colorItem } = props

    const handleTheme = (name: string) => {
        callback(name)
    }

    return (
        <div className={styles.boxWrap}>
            {colorItem.map((v: ColorItemProps, index: number) => (
                <div
                    className={`${styles.box} ${styles[v.name]} ${v.active && styles.checked}`}
                    onClick={() => handleTheme(v.name)}
                    key={index}
                >
                    <FontAwesomeIcon icon={solid("check")} />
                </div>
            ))}
        </div>
    )
}
