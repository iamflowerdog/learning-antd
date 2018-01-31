/**
 * Created by yang on 2018/1/31.
 */
import React from 'react';
import {Row, Col} from 'antd';

class MyRow extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return(
            <div>
                <Row>
                    <Col span={12}>col-12</Col>
                    <Col span={12}>col-12</Col>
                </Row>
                <Row>
                    <Col span={8}>col-8</Col>
                    <Col span={8}>col-8</Col>
                    <Col span={8}>col-8</Col>
                </Row>
                <Row>
                    <Col span={6}>col-6</Col>
                    <Col span={6}>col-6</Col>
                    <Col span={6}>col-6</Col>
                    <Col span={6}>col-6</Col>
                </Row>
            </div>
        )
    }
}

export default MyRow;