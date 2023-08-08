import React, { useEffect, useState } from "react"
import Img from "../../assets/image/bg.jpg"
import styles from "./index.less"
import { UploadOutlined } from "@ant-design/icons"
import type { UploadProps } from "antd"
import { Button, message, Upload } from "antd"
import * as XLSX from "xlsx"
import { UploadFile } from "antd/lib/upload/interface"

export const WebGl = () => {
    const [context, setContext] = useState<any>(null)
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        const canvas: any = document.getElementById("canvas")
        const gl = canvas.getContext("2d")
        if (!gl) {
            alert("Unable to initialize WebGL. Your browser or machine may not support it.")
            return
        }
        setContext(gl)
    }, [])
    useEffect(() => {
        if (context !== null) {
            const img = new Image()
            img.src = Img
            img.onload = () => {
                context.drawImage(img, 0, 0)
                setLoaded(true)
            }
        }
    }, [context])
    useEffect(() => {
        if (loaded) {
            // ddf
        }
    }, [loaded])
    const handleUpload = (uploadFile: UploadFile<any> | Blob) => {
        // const uploadChange = (uploadFile) => {
        // 通过FileReader对象读取文件
        const fileReader = new FileReader()
        // readAsArrayBuffer之后才会启动onload事件
        fileReader.onload = (event: any) => {
            if (event?.target?.result) {
                const data = new Uint8Array(event?.target?.result)
                const { SheetNames = [], Sheets } = XLSX.read(data, { type: "array" })
                console.log(SheetNames, Sheets, "列")
                // 这里只取第一个sheet
                const workSheets = Sheets[SheetNames[0]]
                const sheetRows = XLSX.utils.sheet_to_json(workSheets)
                console.log(sheetRows, "转换的excel")
            }
        }
        // uploadFile是上传文件的文件流
        fileReader.readAsArrayBuffer(uploadFile as Blob)
    }

    const props: UploadProps = {
        name: "file",
        // action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
        headers: {
            authorization: "authorization-text"
        },
        onChange(info) {
            // handleUpload()
            handleUpload(info?.file)
            console.log(info.file, "=====info")
            if (info.file.status !== "uploading") {
                console.log(info.file, info.fileList)
            }
            if (info.file.status === "done") {
                message.success(`${info.file.name} file uploaded successfully`)
            } else if (info.file.status === "error") {
                message.error(`${info.file.name} file upload failed.`)
            }
        }
    }

    return (
        <>
            <Upload {...props}>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
            <canvas
                id={"canvas"}
                width={"400"}
                height={"400"}
                style={{ border: "1px solid black" }}
                className={styles.canvas}
            />
        </>
    )
}
