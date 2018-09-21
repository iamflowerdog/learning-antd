/**
 * Created by yang on 2017/10/21.
 *
 * 在绑定删除回调函数的时候，需要传参数的时候，可以通过一下两种方式
 *      1. onClick={this.remove.bind(this,k)} // 这里bind不会立刻调用
 *
 *      2. onClick={() => this.remove(k)}
 *
 *  因为react里面绑定事件回调函数，不建议立即调用 下面是❌错误写法
 *
 *      onClick = {this.remove(k)}
 */

import React from 'react';
import {Button, Form, Input, Card, Icon, Radio} from 'antd';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

let uuid = 0;
class DynamicSelf extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        };
        this.handleClick = this.handleClick.bind(this);
    }

    add= () => {
        uuid++;
        const {form} = this.props;
        // 你也可以通过数据绑定去获取表单的值 (给虚拟DOM元素设置 ref 属性)
        const keys = form.getFieldValue('keys');
        const nextKeys = keys.concat(uuid);

        //  set form value 设置一组输入控件的值
        form.setFieldsValue({
            keys: nextKeys
        })

    };

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

        const {getFieldDecorator, getFieldValue, setFieldsValue} = this.props.form;

        /*
        * 1. 原始页面的 keys 是从 [0,1,2,3...] 数组递增的，为了数据回显，我们可以提前注册一些和原始页面不一样的keys值
        * 2. 方法是，从后台获取到的数组 索引也是从[0,1,2...]开始的，我们可以数据回显的keys数组索引变为负的[-0,-1,-2...]
        * 3. 方法如下
        * */
        let applyMemberDTOs = item.applyMemberDTOs.map((dto, index) => (-index));


        getFieldDecorator('keys', {initialValue: applyMemberDTOs});

        setFieldsValue({
            'workMethod': item.workMethod,
            'keys': applyMemberDTOs
        });

        applyMemberDTOs.map((k,index) => {
            ['names', 'email', 'phone'].forEach((field) => {
                getFieldDecorator(`${field}-${k}`, {initialValue: item.applyMemberDTOs[-k][field]});

                // 对于一些 Select 表单，回显值需要用 setFieldsValue 设置回显值
                setFieldsValue({
                    [`${field}-${k}`]: item.applyMemberDTOs[-k][field],
                })
            });

            // getFieldDecorator(`email-${k}`, {initialValue: item.applyMemberDTOs[-k].email});
            // getFieldDecorator(`phone-${k}`, {initialValue: item.applyMemberDTOs[-k].phone});

        });

    };

    remove= (k)=> {
        const {form} = this.props;

        const keys = form.getFieldValue('keys');

        if(keys.length === 1){
            return;
        }
        // form.setFieldsValue({
        //     keys: keys.filter((key) => {
        //         return key !== k;
        //     })
        // })
        form.setFieldsValue({
            keys: keys.filter(key => key !== k),
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        // 获取表单输入的数据
        this.props.form.validateFields((error,value) => {
            if(!error){
                console.log(value);
                // let applyMemberDTOs = {};

                const keys = this.props.form.getFieldValue('keys');
                const applyMemberDTOs = keys.map((k, index) => {
                    return {
                        names: value[`names-${k}`],
                        email: value[`email-${k}`],
                        phone: value[`phone-${k}`],
                    };
                });


                let data = {
                    workMethod: this.props.form.getFieldValue('workMethod'),
                    applyMemberDTOs: applyMemberDTOs
                };

                console.log(data);


            }
        })

    };

    render(){
        const {getFieldDecorator, getFieldValue} = this.props.form;
        const formItemLayout = {
            labelCol: {
                span: 4
            },
            wrapperCol: {
                span: 20,
            }
        };
        const formItemLayoutWithOutLabel = {
            wrapperCol:{span: 20, offset: 4}
        };

        // 与数据回显时候的 keys [-0,-1,-2] 相呼应
        getFieldDecorator('keys', {initialValue: [0]});

        const keys = getFieldValue('keys');

        console.log(keys);

        const formItems = keys.map((k, index) => {



            return(
                <div key={k}>
                    <FormItem label='姓名' {...formItemLayout}>
                        {
                            getFieldDecorator(`names-${k}`, {
                                rules: [
                                    {required: true, message: '请输入表单信息'}
                                ]
                            })(
                                <Input placeholder="请输入律师姓名" style={{width: '60%', marginRight: 8}}/>
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

                    <FormItem label='邮箱' {...formItemLayout}>
                        {
                            getFieldDecorator(`email-${k}`, {
                                rules: [
                                    {required: true, message: '请输入表单信息'}
                                ]
                            })(
                                <Input placeholder="请输入律师邮箱" style={{width: '60%', marginRight: 8}}/>
                            )
                        }
                    </FormItem>

                    <FormItem label='电话' {...formItemLayout}>
                        {
                            getFieldDecorator(`phone-${k}`, {
                                rules: [
                                    {required: true, message: '请输入表单信息'}
                                ]
                            })(
                                <Input placeholder="请输入律师电话" style={{width: '60%', marginRight: 8}}/>
                            )
                        }
                    </FormItem>
                </div>
            )
        });
        return(
            <Card title="表单输入">
                <Form onSubmit={this.handleSubmit}>

                    <FormItem
                        label="办案方式"
                        {...formItemLayout}
                    >
                        {getFieldDecorator(`workMethod`, {
                            rules: [{
                                required: true, message: '请选择办案方式',
                            }],
                        })(
                            <RadioGroup>
                                <Radio value="1011000001">个人办案</Radio>
                                <Radio value="1011000002">团队办案</Radio>
                            </RadioGroup>
                        )}
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

export default Form.create()(DynamicSelf);