import React from "react"
import { RenderDescComponent } from "../../components/Box"
import styles from "./index.less"

const Flex = () => {
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
        <div className={styles.container}>
            <div className={styles.flexWrap}>
                {comList.map(v => (
                    <RenderDescComponent style={{ flex: "0 0 calc(33% - 20px)" }} key={v.name}>
                        <div>{v.name}</div>
                    </RenderDescComponent>
                ))}
            </div>
            <div className={styles.flexWrap}>
                {comList.map(v => (
                    <RenderDescComponent style={{ flex: "0 0 calc(50% - 20px)" }} key={v.name}>
                        <div>{v.name}</div>
                    </RenderDescComponent>
                ))}
            </div>
        </div>
    )
}

export default Flex
