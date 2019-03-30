import React, {Component,Fragment} from 'react';
import { Input, Button, List } from 'antd';

const ReduxUi = (props) =>{
    return(
        <Fragment>
            <div style={{ marginTop: 30, marginLeft: 30 }}>
                <Input 
                    value={props.inputValue} 
                    placeholder='Todo info' 
                    style={{ width: 300, marginRight: 10 }} 
                    onChange={props.handleInputChange}
                />
                <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
            </div>
            <div style={{ marginTop: 30, marginLeft: 30, width: 300}}>
                <List
                    bordered
                    dataSource={props.list}
                    renderItem={(item,index) => (<List.Item onClick={() => {props.handleItemDelete(index)}}>{item}</List.Item>)}
                />
            </div>
        </Fragment>
    )
}

// class ReduxUi extends Component{
//     render(){
//         return(
//             <Fragment>
//                 <div style={{ marginTop: 30, marginLeft: 30 }}>
//                     <Input 
//                         value={this.props.inputValue} 
//                         placeholder='Todo info' 
//                         style={{ width: 300, marginRight: 10 }} 
//                         onChange={this.props.handleInputChange}
//                     />
//                     <Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
//                 </div>
//                 <div style={{ marginTop: 30, marginLeft: 30, width: 300}}>
//                     <List
//                         bordered
//                         dataSource={this.props.list}
//                         renderItem={(item,index) => (<List.Item onClick={(index) => {this.props.handleItemDelete(index)}}>{item}</List.Item>)}
//                     />
//                 </div>
//             </Fragment>
//         )
//     }
// }

export default ReduxUi;