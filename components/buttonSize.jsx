/*
 * 1. 学习 antd 按钮的使用
 * 2. facebook 官方不建议再使用 createClass
 *     Accessing createClass via the main React package is deprecated,
 *    and will be removed in React v16.0. Use a plain JavaScript class instead.
 * 3.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {Button, Radio, Icon} from 'antd';

/*let Hello = React.createClass({
    render(){
        return (
            <div>
                <Radio/>
            </div>
        )
    }
});*/

class ButtonSize extends React.Component{

     render(){
        return (
            <div>
                <Radio/>
            </div>
        )
    }
}

export default ButtonSize;
