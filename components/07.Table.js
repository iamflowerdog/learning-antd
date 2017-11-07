/**
 * Created by yang on 2017/11/6.
 */

import React from 'react';



import { Table, Button } from 'antd';

const columns = [{
    title: 'Name',
    dataIndex: 'name',
}, {
    title: 'Age',
    dataIndex: 'age',
}, {
    title: 'Address',
    dataIndex: 'address',
}];


class MyTable extends React.Component {
    state = {
        selectedRowKeys: [], // Check here to configure the default column
        selectedRows: [],
        loading: false,
        data: [{
            key: 0,
            firstName: 'John',
            lastName: 'Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
        }, {
            key: 1,
            firstName: 'Jim',
            lastName: 'Green',
            age: 42,
            address: 'London No. 1 Lake Park',
        }, {
            key: 2,
            firstName: 'Joe',
            lastName: 'Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
        }],
    };
    start = () => {
        this.setState({ loading: false });
        // ajax request after empty completing
        let data = this.state.selectedRows;
        console.log(data);

    };
    onSelectChange = (selectedRowKeys, selectedRows) => {
        // console.log('selectedRowKeys changed: ', selectedRowKeys, selectedRows);
        this.setState({ selectedRowKeys , selectedRows});
    };
    render() {
        const { loading, selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0;
        return (
            <div>
                <div style={{ marginBottom: 16 }}>
                    <Button
                        type="primary"
                        onClick={this.start}
                        disabled={!hasSelected}
                        loading={loading}
                    >
                        Reload
                    </Button>
                    <span style={{ marginLeft: 8 }}>
                        {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                    </span>
                </div>
                <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.data} />
            </div>
        );
    }
}

export default MyTable