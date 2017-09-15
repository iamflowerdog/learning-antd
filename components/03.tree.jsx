/*
    1. 树形结构文件
 */

import React from 'react';

import {Tree} from 'antd'

const TreeNode = Tree.TreeNode;

export default class TreeDemo extends React.Component {
    render(){
        return(
            <Tree>
                <TreeNode title="组织结构">
                    <TreeNode title="无讼">
                        <TreeNode title="企业服务中心" isLeaf={true}>
                            <TreeNode title="业务运营部">
                                <TreeNode title="商机组">
                                    <TreeNode title="主管"/>
                                    <TreeNode title="负责人"/>
                                </TreeNode>
                                <TreeNode title="销售1组">
                                    <TreeNode title="主管"/>
                                    <TreeNode title="负责人"/>
                                </TreeNode>
                                <TreeNode title="销售2组"></TreeNode>
                            </TreeNode>
                            <TreeNode title="中心经理">

                            </TreeNode>
                        </TreeNode>
                        <TreeNode title="行业研发中心">
                            <TreeNode/>
                        </TreeNode>
                        <TreeNode title="CEO">
                            <TreeNode title="蒋友毅"/>
                        </TreeNode>
                    </TreeNode>
                    <TreeNode title="天同">
                        <TreeNode title="火女"></TreeNode>
                        <TreeNode title="冰女"></TreeNode>
                    </TreeNode>
                </TreeNode>
            </Tree>
        )
    }
}