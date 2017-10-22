/*
 * 1. 学习 antd 按钮的使用
 * 2. facebook 官方不建议再使用 createClass
 *     Accessing createClass via the main React package is deprecated,
 *    and will be removed in React v16.0. Use a plain JavaScript class instead.
 * 3.
 */

import React from 'react';
import {Button, Radio, Icon} from 'antd';


class ButtonSize extends React.Component{


    constructor(props) {
        super(props);
        // console.log(this);
        this.state = {
            size: 'default'
        };
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick(event){
        console.log(this);
        console.log(event.target.value);
        this.setState({
            size: event.target.value
        })
    };

    render(){
       // console.log(this);
        let size = this.state.size;
        return (
            <div>
                <Radio.Group value={size} onChange={this.handleClick}>
                    <Radio.Button value="large">large</Radio.Button>
                    <Radio.Button value="default">default</Radio.Button>
                    <Radio.Button value="small">small</Radio.Button>
                </Radio.Group>

                <br/><br/>

                <Button type='primary' size={size} shape='circle' icon='download'/>
                <Button type='dashed' size={size} icon='download'>download</Button>
                <Button type='danger' size={size}>download</Button>

                <br/><br/>

                <Button.Group size={size}>
                    <Button type='primary'>
                        <Icon type="left"/>Backward
                    </Button>
                    &nbsp;
                    <Button type='primary'>
                        <Icon type="right"/>Forward
                    </Button>
                </Button.Group>
            </div>
        );
    }
}

export default ButtonSize;
