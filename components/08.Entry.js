/**
 * Created by yang on 2017/12/5.
 */
import React from 'react';
import {Tabs, Radio} from 'antd';
const TabPane = Tabs.TabPane;
import Tree from './03.tree';
import Dynamic from './06.dynamic-button';
import Table from './07.Table';

class SlidingTabsDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'top',
        };
    }

    handleModeChange = (e) => {
        const mode = e.target.value;
        this.setState({mode});
    }

    render() {
        const {mode} = this.state;
        return (
            <div className="entry">
                <div className="header">
                    <Radio.Group onChange={this.handleModeChange} value={mode}>
                        <Radio.Button value="top">Horizontal</Radio.Button>
                        <Radio.Button value="left">Vertical</Radio.Button>
                    </Radio.Group>
                </div>
                <Tabs
                    defaultActiveKey="1"
                    tabPosition={mode}
                    style={{height: 1000}}
                >
                    <TabPane tab="组织结构" key="1">
                        <Tree/>
                    </TabPane>
                    <TabPane tab="动态表单" key="2">
                        <Dynamic/>
                    </TabPane>
                    <TabPane tab="表格" key="3">
                        <Table/>
                    </TabPane>
                    <TabPane tab="Tab 4" key="4">Content of tab 4</TabPane>
                    <TabPane tab="Tab 5" key="5">Content of tab 5</TabPane>
                    <TabPane tab="Tab 6" key="6">Content of tab 6</TabPane>
                    <TabPane tab="Tab 7" key="7">Content of tab 7</TabPane>
                    <TabPane tab="Tab 8" key="8">Content of tab 8</TabPane>
                    <TabPane tab="Tab 9" key="9">Content of tab 9</TabPane>
                    <TabPane tab="Tab 10" key="10">Content of tab 10</TabPane>
                    <TabPane tab="Tab 11" key="11">Content of tab 11</TabPane>
                </Tabs>
            </div>
        );
    }
}


export default SlidingTabsDemo;
