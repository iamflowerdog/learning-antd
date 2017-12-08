/**
 * Created by yang on 2017/12/8.
 */
import React from 'react';



class Test extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            obj: this.props.obj,
        };
    }

    render(){
        console.log(this.state.obj);
        return(
            <div>
                <h1>hello world</h1>
            </div>
        )
    }
}

export default Test;

//测试 React 组件 this.state 在注册组件的时候 this.props.title 属性 如果是Ajax请求，会有缓存