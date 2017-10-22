/*import React from 'react';
 import ReactDOM from 'react-dom';
 import './index.css';
 import { DatePicker } from 'antd';

 function App() {
 return (
 <div style={{ margin: 100 }}>
 <h1>AntDesign Demo</h1>
 <hr /><br />
 <DatePicker />
 </div>
 );
 }

 ReactDOM.render(<App />, document.getElementById('root'));*/

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {DatePicker, Button} from 'antd';
import ButtonSize from './components/buttonSize';
import ButtonLoading from './components/button_loading';
import TreeDemo from './components/03.tree'
import Dynamic from './components/04.DynamicFieldSet';
import DynamicSelf from './components/05.dynamic-self';


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
            <Dynamic/>
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





















