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
import {Button, Form, Input, Card, Icon} from 'antd';

const FormItem = Form.Item;

let uuid = 0;
class DynamicSelf extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        };
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


        getFieldDecorator('keys', {initialValue: [{'names': undefined}]});

        const keys = getFieldValue('keys');

        const formItems = keys.map((k, index) => {
            return(
                <FormItem label='姓名' {...formItemLayout} key={k}>
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
            )
        });
        return(
            <Card title="表单输入">
                <Form onSubmit={this.handleSubmit}>

                    {formItems}

                    <FormItem {...formItemLayoutWithOutLabel}>
                        <Button type='dashed' onClick={this.add} style={{width: '80%'}}>
                            <Icon type="plus"/>添加按钮
                        </Button>
                    </FormItem>

                    <FormItem {...formItemLayoutWithOutLabel}>
                        <Button type='primary' htmlType='submit'>Submit</Button>
                    </FormItem>


                </Form>
            </Card>
        )
    }
}

export default Form.create()(DynamicSelf);