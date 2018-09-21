/**
 * Created by yang on 2017/12/5.
 */
import React from 'react';
import {Tabs, Radio} from 'antd';
const TabPane = Tabs.TabPane;
import Tree from './03.tree';
import Dynamic from './05.dynamic-self';
import Table from './07.Table';
import MyCollapse from './09.Collapse';
import MyPagination from './10.Pagination';
import Test from './11.Test';
import MyLoader from './12.react-content-loader';
import MyTooltip from './13.ToolTip';
import MyRow from './14.Row';
import DateRange from './16.DateRange';

class SlidingTabsDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'top',
            obj: [],
        };

        setTimeout(() => {
            this.setState({
                obj: {
                    name: 'yyh'
                }
            });
        }, 1000)
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
                    defaultActiveKey="12"
                    tabPosition={mode}

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
                    <TabPane tab="折叠面板" key="4">
                        <MyCollapse/>
                    </TabPane>
                    <TabPane tab="分页" key="5">
                        <MyPagination/>
                    </TabPane>
                    <TabPane tab="Tab 6" key="6">
                        <Test obj={this.state.obj}/>
                    </TabPane>
                    <TabPane tab="Tab 7" key="7">
                        <MyLoader/>
                    </TabPane>
                    <TabPane tab="toolTip" key="8">
                        <MyTooltip/>
                    </TabPane>

                    <TabPane tab="Tab 10 珊格布局" key="10">
                        <MyRow/>
                    </TabPane>
                    <TabPane tab="Tab 11 upload" key="11">

                    </TabPane>
                    <TabPane tab="自定义日期范围" key="12">
                        <DateRange/>
                    </TabPane>

                </Tabs>
            </div>
        );
    }
}


export default SlidingTabsDemo;
