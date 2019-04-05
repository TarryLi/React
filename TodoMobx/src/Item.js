import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Table } from 'antd';

@inject('store')
@observer
class Item extends Component {
    render() {
        const { store } = this.props;
        const columns = [{
            title: 'TodoList',
            align: 'center',
            dataIndex: 'value',
        }];
        const rowSelection = {
            selectedRowKeys: store.selectedRowKeys,
            onChange: store.checkChange,
        };
        return <Table
            dataSource={store.list.toJS()}
            rowSelection={rowSelection}
            columns={columns}
            bordered={true}
            style={{ marginTop: 10 }}
            showHeader={false}
            pagination={false}
            size='middle'
            rowKey='key'
        />
    }
}

export default Item;