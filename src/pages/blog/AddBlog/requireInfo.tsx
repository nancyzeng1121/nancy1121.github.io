import React, {useEffect} from "react"
import {Button, Form, Input, Modal, Upload} from "antd";
import moment from "moment";
import {UploadOutlined} from "@ant-design/icons";
// import {saveAs} from "file-saver";


const RequireInfo = (props: any) => {
  const {isModalOpen, handleCancel, text} = props
  const [form] = Form.useForm();


  useEffect(() => {
  }, [isModalOpen])

  const handleSubmit = async () => {
    try{
      const formV = await form.validateFields()
      // const md = new MarkdownIt();
      // const html = md.render(text);
      const jsonData = {
        name: `${formV.name}`,
        time: moment().format("YYYY-MM-DD HH:mm:ss"),
        html: text,
        img: formV.upload
      };

      const jsonString = JSON.stringify(jsonData, null, 2);

      const blob = new Blob([jsonString], { type: "application/json" });

      const downloadLink = document.createElement("a");
      downloadLink.href = URL.createObjectURL(blob);
      downloadLink.download = `${formV.name}.json`;
      downloadLink.click();
    }catch (e){
      return e
    }
  }

  const normFile = (e: any) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

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
      <Form.Item
        name="upload"
        label="上传图片"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        extra=""
        rules={[
          {
            required: true,
            message: "请填写标题",
          },
        ]}
      >
        <Upload name="logo" listType="picture" maxCount={1} accept={".jpg,.png,.jpeg"}>
          <Button icon={<UploadOutlined />}>上传</Button>
        </Upload>
      </Form.Item>
    </Form>
  </Modal>
}
export default RequireInfo
