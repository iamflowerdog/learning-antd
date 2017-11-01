import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {DatePicker, Button} from 'antd';
import ButtonSize from './components/buttonSize';
import ButtonLoading from './components/button_loading';
import TreeDemo from './components/03.tree'
import Dynamic from './components/04.DynamicFieldSet';
import DynamicSelf from './components/05.dynamic-self';
import D06 from './components/06.dynamic-button';


function App() {
    return (
        <div>
            <h1>海哥教你玩转antd</h1>
            <hr/>
            <br/>
            <DatePicker/>
            <br/><br/><br/>

            <hr/>

            <Button type='primary'> primary </Button>
            <Button> default </Button>
            <Button type='dashed'> dashed </Button>
            <Button type='danger'> danger </Button>

            <br/><br/><br/>

            <ButtonSize/>

            <br/><br/><br/>

            <ButtonLoading/>


        </div>
    )
}

function Root1() {
    return (
        <div>

            <D06/>
        </div>
    )
}

function Root2() {

}

ReactDOM.render(
    <DynamicSelf/>,
    document.getElementById('root2')
);

ReactDOM.render(
    <App/>,
    document.getElementById("root")
);

ReactDOM.render(
    <Root1/>,
    document.getElementById("root1")
);





















