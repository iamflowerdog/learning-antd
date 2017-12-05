/**
 * Created by yang on 2017/12/5.
 */
import React from 'react';
import {Pagination} from 'antd';

class MyPagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Pagination defaultCurrent={1} total={500} showSizeChanger/>
        )
    }
}


export default MyPagination;