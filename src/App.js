import React, { Component } from 'react';
import { createForm } from '@formily/core'
import { FormProvider, FormConsumer, Field, createSchemaField } from '@formily/react'
import '@formily/antd/dist/antd.css'
import 'antd/dist/antd.css'
import {
  Form,
  FormItem,
  DatePicker,
  Checkbox,
  Cascader,
  Editable,
  Input,
  NumberPicker,
  Switch,
  Password,
  PreviewText,
  Radio,
  Reset,
  Select,
  Space,
  Submit,
  TimePicker,
  Transfer,
  TreeSelect,
  Upload,
  FormGrid,
  FormLayout,
  FormTab,
  FormCollapse,
  ArrayTable,
  ArrayCards,
  FormButtonGroup
} from '@formily/antd'

const form = createForm({
  readOnly: true,
  disabled: true
})

const SchemaField = createSchemaField({
  components: {
    Form,
    FormItem,
    DatePicker,
    Checkbox,
    Cascader,
    Editable,
    Input,
    NumberPicker,
    Switch,
    Password,
    PreviewText,
    Radio,
    Reset,
    Select,
    Space,
    Submit,
    TimePicker,
    Transfer,
    TreeSelect,
    Upload,
    FormGrid,
    FormLayout,
    FormTab,
    FormCollapse,
    ArrayTable,
    ArrayCards,
  }
})
class formMain extends Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {
    form.setInitialValues({
      username: '干燥',
    })

  }
  submitForm = (data) => {
    console.log('data', data)
  }
  render() {
    //JSON Schema
    const schemaData = JSON.parse(`{"form":{"labelCol":0,"wrapperCol":0},"schema":{"type":"object","properties":{"wyfp2r321vr":{"type":"void","x-component":"FormLayout","x-component-props":{"style":{"display":"block","flexDirection":"column","alignContent":"stretch","backgroundColor":"rgba(239,236,253,1)"}},"_designableId":"wyfp2r321vr","x-index":0,"properties":{"username":{"type":"string | number","title":"1、您存在以下哪些皮肤问题/症状？（多选）（必选）？","x-decorator":"FormItem","x-component":"Radio.Group","enum":[{"children":[],"label":"A: 干燥","value":"干燥"},{"children":[],"label":"B: 起屑","value":"B: 起屑"},{"children":[],"label":"C: 开裂/皮损","value":"开裂/皮损"},{"children":[],"label":"D: 瘙痒","value":"瘙痒"},{"children":[],"label":"E: 泛红/红疹","value":"泛红/红疹"},{"children":[],"label":"F: 湿疹","value":"湿疹"},{"children":[],"label":"G: 痘痘","value":"痘痘"},{"children":[],"label":"H: 暗沉","value":"暗沉"},{"children":[],"label":"I: 色斑","value":"色斑"},{"children":[],"label":"J: 其他","value":"其他"}],"x-validator":[],"x-component-props":{"style":{"display":"flex","flexDirection":"column","flexWrap":"wrap","alignContent":"stretch","justifyContent":"center","alignItems":"flex-start","padding":"10px 0px 0px 10px"}},"x-decorator-props":{"style":{"display":"block","flexDirection":"column","flexWrap":"wrap","justifyContent":"center","alignContent":"flex-end","alignItems":"stretch","width":"auto","padding":"15px 15px 15px 15px","borderWidth":"0px","borderStyle":"none"},"inset":true,"wrapperWrap":false,"labelWrap":true,"wrapperAlign":"left","labelAlign":"left","layout":"vertical","size":"default","feedbackLayout":"loose","gridSpan":0,"asterisk":true,"colon":false,"labelWidth":"auto","wrapperWidth":"auto","wrapperCol":0,"addonBefore":"","tooltip":"","fullness":false},"required":true,"_designableId":"username","x-index":0,"x-pattern":"editable"},"9mwa2g89aba":{"title":"","type":"string","x-decorator":"FormItem","x-component":"Input","x-validator":[],"x-component-props":{"style":{"display":"flex","flexDirection":"row","flexWrap":"wrap","alignContent":"center"},"bordered":false},"x-decorator-props":{"style":{"display":"flex","padding":"0px 0px 0px 0px","margin":"-25px 20px 0px 20px","borderWidth":"1px","borderStyle":"solid","borderColor":"rgba(205,203,214,0.16)"},"inset":false,"fullness":false,"labelWrap":false},"_designableId":"9mwa2g89aba","x-index":1,"x-reactions":{"dependencies":[{"property":"value","type":"any","source":"wyfp2r321vr.username","name":"v_xp67byegrw9"}],"fulfill":{"state":{"visible":"{{$deps.v_xp67byegrw9 == '其他'}}"}}},"required":true}}}},"_designableId":"xwqg3myu0tz"}}`).schema
    return (
      <div>

        <FormProvider form={form}>
          <SchemaField
            schema={schemaData}
          />
          {/* <FormButtonGroup>
                    <Submit onSubmit={this.submitForm}>提交</Submit>
                  </FormButtonGroup> */}
        </FormProvider>
      </div>
      // <Subsuccess/>
    );
  }
}

export default formMain;