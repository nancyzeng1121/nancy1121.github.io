import React from "react"
import { Canvas } from "@react-three/fiber"
import Box from "./Box"
import styles from "./index.less"
// import THREE from "three"

type TestProps = {
    // children: Element[]
    colorManagement: true
    shadowMap: true
    camera: {
        position: [number, number, number]
        fov: number
    }
}

const BoxWrap = () => {
    const testProps: TestProps = {
        colorManagement: true, // 适用于所有颜色和纹理的自动sRGB编码
        shadowMap: true, // gl.shadowMap
        camera: {
            position: [0, 2, 10],
            fov: 70
        }
    }
    return (
        <div className={styles.boxWrap}>
            <Canvas {...testProps}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <pointLight position={[-10, -10, -10]} />
                <Box position={[-1.2, 0, 0]} />
                <Box position={[1.2, 0, 0]} />
            </Canvas>
        </div>
    )
}

export default BoxWrap
