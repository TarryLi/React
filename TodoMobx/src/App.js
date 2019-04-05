import React, { Component } from 'react';
import Item from './Item';
import { observer, inject } from 'mobx-react';
import { Input, Card, Statistic, Row, Col, Progress, Popconfirm, Button } from 'antd';

@inject('store')
@observer
class App extends Component {
  componentDidMount(){
    const { store } = this.props;
    store.setKey();
  }
  render() {
    const { store } = this.props;
    return (
      <Card
        title="TodoList"
        bordered={true}
        style={{ width: 400, margin: '0 auto' }}
      >
        <Input
          placeholder="Add TodoList"
          onPressEnter={() => { store.AddTodo() }}
          allowClear
          value={store.inputValue}
          onChange={(e) => { store.inputValue = e.target.value }}
        />
        <Item />
        <Row style={{ marginTop: '20px', textAlign: 'center' }}>
          <Col span={6}><Statistic title="Total Items" value={store.total} /></Col>
          <Col span={10}><Progress percent={store.schedule} type="circle" width={70} /></Col>
          <Col span={8}>
            <Popconfirm
              title="是否删除选中的任务?"
              onConfirm={()=>(store.deleteTodo())}
              okText="确认"
              cancelText="取消"
            >
              <Button type="primary" style={{marginTop:'20px'}}>删除所选</Button>
            </Popconfirm>
          </Col>
        </Row>
      </Card>
    )
  }
}

export default App;
