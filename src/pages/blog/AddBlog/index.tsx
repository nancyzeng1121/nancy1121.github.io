import React, {useState} from "react"
import {Button} from "antd";
import {MdEditor} from "md-editor-rt";
import RequireInfo from "./requireInfo";

const AddBlog = () => {
  const [text, setText] = useState("hello md-editor-rt！");
  const [theme]: any = useState("dark");
  const [modalVisible, setModalVisible] = useState({isModalOpen: false, text: ""})

  const handleSubmit = () => {
    console.log(1111)
    setModalVisible({isModalOpen: true, text})
  }
  return <>
        <MdEditor modelValue={text} onChange={setText} theme={theme} />
        <div className={"footer-container"}>
          <div className={"footer-wrap"}>
            <Button type={"primary"} onClick={() => handleSubmit()}>保存</Button>
            <Button>取消</Button>
          </div>
          <RequireInfo {...modalVisible} handleCancel={() =>  setModalVisible({isModalOpen: false, text})}/>
        </div>
    </>
}
export default AddBlog
