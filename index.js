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
import ReactDOM from 'react-dom'
import './index.css';
import {DatePicker, Button} from 'antd';
import ButtonSize from './components/buttonSize'


function App() {
    return (
        <div>
            <h1>海哥教你玩转antd</h1>
            <hr/><br/>
            <DatePicker/>
            <hr/>
            <Button type='primary'> primary </Button>
            <Button> default </Button>
            <Button type='dashed'> dashed </Button>
            <Button type='danger'> danger </Button>
            <hr/>
            <ButtonSize/>
        </div>
    )
}



ReactDOM.render(
    <App/>,
    document.getElementById("root")
);


