
import * as React from 'react';
import stringSimilarity from 'string-similarity'
import {Button, Form, Input, InputNumber} from "antd";
import {useEffect, useState} from "react";
import FuzzySet from "fuzzyset.js";

const NatureAnalysis = () => {
  const [form] = Form.useForm()
  const [matchText, SetMatchText] = useState('')

  const array1 = [{ name: 'Apple' }, { name: 'Orange' }, { name: 'Banana' }];
  const array2 = [{ name: 'Aple' }, { name: 'Orenge' }, { name: 'Bannana' }];

  array1.forEach((obj1) => {
    array2.forEach((obj2) => {
      const similarity = stringSimilarity.compareTwoStrings(obj1.name, obj2.name);
      if (similarity >= 0.8) {
        console.log(`Matched: ${obj1.name} and ${obj2.name}`);
      }
    });
  });

  useEffect(() => {
    form.setFieldsValue({
      name1: "Apple",
      name2: "Aple",
      similar: 0.8
    })
  }, [])
  
  const similarity = stringSimilarity.compareTwoStrings('固定支架', '固支');

  console.log(similarity);

  const onChange = (value: string, name: string) => {
    const formValues = form.getFieldsValue()
    if(formValues.name1 && formValues.name2){
      const array = [formValues[name === 'name1' ? 'name2' : 'name1']];
      const fuzzyset = FuzzySet(array);

      const result = fuzzyset.get(value);
      if (result) {
        form.setFieldsValue({...formValues, [name]: value, similar: result[0][0]})
      } else {
        form.setFieldsValue({...formValues, [name]: value, similar: 0})
      }
    }
  }

  const onBatch = async () => {
    form.validateFields().then(values => {
      let text = ''
      const array = [values.name1];
      const fuzzyset = FuzzySet(array);

      const result = fuzzyset.get(values.name2);

      if (result) {
        if(result[0][0] === values.similar){
          text = `匹配: ${values.name1} and ${values.name2}`
          console.log(`Matched: ${values.name2} and ${result[0][1]}`);
        } else {
          text = '不匹配'
        }


      } else {
        text = '不匹配'
        console.log('No match found');
      }

      SetMatchText(text)
    }).catch(err => {
      console.log(err)
    })
  }

 return <div style={{margin: '40px'}}>

    <h1>自然语言对比分析</h1>

    <Form form={form}>
      <Form.Item name="name1"
                 label={'名称1'}
                 rules={[{required: true, message: '请输入'}]}>
        <Input onBlur={(e) => onChange(e.target.value, 'name1')}/>
      </Form.Item>
      <Form.Item name="name2"
                 label={'名称2'}
                 rules={[{required: true, message: '请输入'}]}>
        <Input onBlur={(e) => onChange(e.target.value, 'name2')}/>
      </Form.Item>
      <Form.Item name="similar"
                 label={'相似度'}
                 rules={[{required: true, message: '请输入'}]}>
        <InputNumber max={1} min={0}/>
      </Form.Item>
      <Form.Item>
        <Button onClick={() => onBatch()} type={"primary"}>提交</Button>
        {matchText}
      </Form.Item>
    </Form>
  </div>;
};

export default NatureAnalysis;
