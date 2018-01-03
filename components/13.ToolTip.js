/**
 * Created by yang on 2018/1/3.
 */
import React from 'react';
import {Tooltip} from 'antd';

class MyTooltip extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Tooltip title="prompt text" overlayClassName="test" mouseEnterDelay={0} overlayStyle={{color: 'red'}} trigger='hover'>
                <span>Tooltip will show when mouse enter.</span>
            </Tooltip>
        )
    }
}

export default MyTooltip;
