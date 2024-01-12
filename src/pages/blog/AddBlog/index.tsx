import React, {useState} from "react"
import {Button} from "antd";
import {MdEditor} from "md-editor-rt";
import RequireInfo from "./requireInfo";
import {useNavigate} from "react-router-dom";

const AddBlog = () => {
  const navigate = useNavigate()
  const [text, setText] = useState("hello md-editor-rt！");
  const [theme]: any = useState("dark");
  const [modalVisible, setModalVisible] = useState({isModalOpen: false, text: ""})

  const handleSubmit = () => {
    console.log(1111)
    setModalVisible({isModalOpen: true, text})
  }

  const handleChange = (v: any) => {
    setText(v)
  }
  return <>
        <div style={{height: "calc(100% - 40px)" , width: "100%"}}>
          <MdEditor modelValue={text} onChange={(v) => handleChange(v) } theme={theme} />
        </div>
        <div className={"footer-container"}>
          <div className={"footer-wrap"}>
            <Button type={"primary"} onClick={() => handleSubmit()}>保存</Button>
            <Button onClick={() => navigate("/")}>取消</Button>
          </div>
          <RequireInfo {...modalVisible} handleCancel={() =>  setModalVisible({isModalOpen: false, text})}/>
        </div>
    </>
}
export default AddBlog
