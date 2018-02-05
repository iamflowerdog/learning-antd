/**
 * Created by yang on 2017/11/1.
 */
import React from 'react';
import {Button, Input, Form, Card, Radio, Icon} from 'antd';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

class Dynamic extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            uuid: 0,
        };
        this.add = this.add.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.remove = this.remove.bind(this);
    }

    add(){
        let newUuid = ++this.state.uuid;
        const {form} = this.props;
        this.setState({
            uuid: newUuid
        });
        const keys = form.getFieldValue('keys');
        const nextKeys = keys.concat(newUuid);

        //  set form value 设置一组输入控件的值
        form.setFieldsValue({
            keys: nextKeys
        })

    }

    remove(k){
        const {form} = this.props;
        const keys = form.getFieldValue('keys');
        form.setFieldsValue({
            keys: keys.filter((item) => {
                return item !== k
            })
        })
    }

    handleSubmit(e){
        e.preventDefault(); // 为了防止屏幕闪烁
        this.props.form.validateFields((error, value) => {
            console.log(error, value);
            if(!error){
                console.log(value);
                const keys = this.props.form.getFieldValue('keys');
                const applyMemberDTOs = keys.map((k,index) => {
                    return {
                        names: value[`names-${k}`],
                        email: value[`email-${k}`],
                        phone: value[`phone-${k}`],
                    }
                });

                let data = {
                    workMethod: this.props.form.getFieldValue('workMethod'),
                    applyMemberDTOs: applyMemberDTOs
                };

                console.log(data);
            }
        });


    }

    handleClick(){
        let item = {
            workMethod: '1011000002',
            applyMemberDTOs: [
                {
                    names: '测试',
                    email: '1111@11.com',
                    phone: '13839425758',
                },
                {
                    names: 'hhh',
                    email: '222@11.com',
                    phone: '13833425758',
                },
                {
                    names: 'ttt',
                    email: 'rrr@11.com',
                    phone: '13836425758',
                },
            ]
        };
        let applyMemberDTOs = item.applyMemberDTOs.map((item,index) => {
            return -index;
        });

        const {getFieldDecorator, setFieldsValue} = this.props.form;

        getFieldDecorator('keys', {initialValue: applyMemberDTOs});
        setFieldsValue({
            workMethod: item.workMethod,
            keys: applyMemberDTOs
        });
        applyMemberDTOs.map((k, index) => {
            
            ['names', 'email', 'phone'].forEach((field,index) => {
                getFieldDecorator(`${field}-${k}`, {initialValue: item.applyMemberDTOs[-k][field]});
            })
            // getFieldDecorator(`names-${k}`, {initialValue: item.applyMemberDTOs[-k].names});
            // getFieldDecorator(`email-${k}`, {initialValue: item.applyMemberDTOs[-k].email});
            // getFieldDecorator(`phone-${k}`, {initialValue: item.applyMemberDTOs[-k].phone});
        })

    }

    render(){
        const {getFieldDecorator, getFieldValue} = this.props.form;
        const formItemLayout = {
            labelCol: {
                span: 4,
                offset: 2
            },
            wrapperCol: {
                span: 16,
            }
        };
        const formItemLayoutWithOutLabel = {
            wrapperCol:{span: 20, offset: 4}
        };

        getFieldDecorator('keys', {initialValue: [0]});

        const keys = getFieldValue('keys');
        
        const formItems = keys.map((k,index) => {
            return(
                <div key={k}>
                    <FormItem label='姓名' {...formItemLayout}>
                        {
                            getFieldDecorator(`names-${k}`, {
                                rules: [
                                    {required: true, message: 'please input'}
                                ]
                            })(
                                <Input autoComplete="off"/>
                            )
                        }
                        {
                            keys.length > 1 ? (
                                <Icon
                                    className="dynamic-delete-button"
                                    type="minus-circle-o"
                                    disabled={keys.length === 1}
                                    onClick={() => this.remove(k)}

                                />
                            ) : null
                        }
                    </FormItem>

                    <FormItem label='email' {...formItemLayout}>
                        {
                            getFieldDecorator(`email-${k}`, {
                                rules: [
                                    {required: true, message: 'please input email'}
                                ]
                            })(
                                <Input/>
                            )
                        }
                    </FormItem>

                    <FormItem label='phone' {...formItemLayout}>
                        {
                            getFieldDecorator(`phone-${k}`, {
                                rules: [
                                    {required: true, message: 'please input phone'}
                                ]
                            })(
                                <Input/>
                            )
                        }
                    </FormItem>
                </div>
            )
        });


        return(
            <Card title="表单测试">
                <Form onSubmit={this.handleSubmit}>

                    <FormItem label='办案方式' {...formItemLayout}>
                        {
                            getFieldDecorator('workMethod',{
                                rules: [
                                    {required: true, message: "请选择开票类型"}
                                ]
                            })(
                                <RadioGroup>
                                    <Radio value="1011000001">个人办案</Radio>
                                    <Radio value="1011000002">团队办案</Radio>
                                </RadioGroup>
                            )
                        }

                    </FormItem>

                    {formItems}

                    <FormItem {...formItemLayoutWithOutLabel}>
                        <Button type='dashed' onClick={this.add} style={{width: '80%'}}>
                            <Icon type="plus"/>添加按钮
                        </Button>
                    </FormItem>

                    <FormItem {...formItemLayoutWithOutLabel}>
                        <Button type='primary' htmlType='submit'>Submit</Button>
                        &nbsp; &nbsp;
                        <Button type='primary' onClick={this.handleClick}>显示初始值</Button>
                    </FormItem>


                </Form>

            </Card>
        )
    }
}

export default Form.create()(Dynamic);

















