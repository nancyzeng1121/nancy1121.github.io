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
import BlogComponent from "../pages/blog";
import BlogContent from "../pages/blog/BlogContent";
import Personal from "../pages/personal";
import NotFound from "../pages/NotFound";
import DragSortingTable from "../pages/effect/Draggable";

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
            <Route path={`${BasePath}/boxWrap`} element={<BoxWrap />} />
            <Route path={`${BasePath}/blog`} element={<BlogComponent />} />
            <Route path={`${BasePath}/blogContent/:name`} element={<BlogContent />} />
            <Route path={`${BasePath}/personal`} element={<Personal />} />
            <Route path={`${BasePath}/effect/drag`} element={<DragSortingTable />} />
            <Route path={'*'} element={<NotFound/>} />
        </Routes>
    )
}
