import React, {useEffect} from "react"
import {Form, Input, Modal} from "antd";
// import {saveAs} from "file-saver";

const RequireInfo = (props: any) => {
  const {isModalOpen, handleCancel, text} = props
  const [form] = Form.useForm();


  useEffect(() => {
    console.log(props, "=====ll====")
  }, [isModalOpen])

  const handleSubmit = async () => {
    try{
      const formV = await form.validateFields()

      // dada 表示要转换的字符串数据，type 表示要转换的数据格式
      const blob = new Blob([text], {
        type: "text/markdown"
      })
      // 根据 blob生成 url链接
      const objectURL = URL.createObjectURL(blob)

      // 创建一个 a 标签Tag
      const aTag = document.createElement("a")
      // 设置文件的下载地址
      aTag.href = objectURL
      // 设置保存后的文件名称
      aTag.download = `${formV.name}.md`
      // 给 a 标签添加点击事件
      aTag.click()
      handleCancel && handleCancel()
      URL.revokeObjectURL(objectURL)

    }catch (e){
      return e
    }



  }
  return <Modal title="填写必要信息" open={isModalOpen} onOk={() => handleSubmit()} onCancel={handleCancel}>
    <Form
      form={form}
      name="register"
      scrollToFirstError
    >
      <Form.Item
        name="name"
        label="标题"
        rules={[
          {
            required: true,
            message: "请填写标题",
          },
        ]}
      >
        <Input />
      </Form.Item>
    </Form>
  </Modal>
}
export default RequireInfo
