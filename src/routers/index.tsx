import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "../pages/home"
import { BasePath } from "../types/config"
import { Float } from "../pages/float"
import { Grid } from "../pages/grid"
import Flex from "../pages/flex"
import { Cybr } from "../components/Cybr"
import { WebGl } from "../pages/webgl"
import BoxWrap from "../pages/BoxWrap"

export const Router = (props: any) => {
    return (
        <Routes>
            <Route path={BasePath} element={<Home {...props} />} />
            <Route path={`${BasePath}/flex`} element={<Flex />} />
            <Route path={`${BasePath}/float`} element={<Float />} />
            <Route path={`${BasePath}/grid`} element={<Grid />} />
            <Route path={`${BasePath}/cybr`} element={<Cybr />} />
            <Route path={`${BasePath}/webgl`} element={<WebGl />} />
            <Route path={`${BasePath}/boxWrap`} element={<BoxWrap />} />
        </Routes>
    )
}
