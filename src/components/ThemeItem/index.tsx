import React from "react"
import styles from "./index.less"
import { ColorItemProps } from "../../types"
export const ThemeItem = (props: any) => {
    const { callback, colorItem } = props

    const handleTheme = (name: string) => {
      document.documentElement.style.setProperty('--theme', `var(--${name})`);

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
                    <span className={'icon iconfont icon-xiangqu'} />
                </div>
            ))}
        </div>
    )
}
