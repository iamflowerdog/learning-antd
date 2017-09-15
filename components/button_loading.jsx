/*
 1. button loading 设置
 */

import React from 'react';
import {Button} from 'antd';


export default class ButtonLoading extends React.Component {
     render(){
         return (
             <div>
                 <Button type='danger' loading={{delay: 2}}>
                     按钮
                 </Button>
             </div>
         )
     }
}
