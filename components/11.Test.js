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