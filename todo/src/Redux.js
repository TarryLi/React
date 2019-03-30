import React, { Component } from 'react';
import 'antd/dist/antd.css'
import store from './store'
import {getInputChangeAction, getAddListAction, getDeleteItemAction, getTodoList} from './store/actionCreators'
import ReduxUi from './ReduxUi'
// import axios from 'axios'

class Redux extends Component {

    constructor(props){
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
        store.subscribe(this.handleStoreChange);
    }

    render() {
        return (
            <ReduxUi 
                inputValue={this.state.inputValue}
                handleInputChange = {this.handleInputChange}
                handleBtnClick = {this.handleBtnClick}
                list = {this.state.list}
                handleItemDelete = {this.handleItemDelete}
            />    
        )
    }

    componentDidMount(){
        const action = getTodoList()
        store.dispatch(action);
    }

    handleInputChange(e){
        const action = getInputChangeAction(e.target.value)
        store.dispatch(action);
    }

    handleStoreChange(){
        this.setState(store.getState())
    }

    handleBtnClick(){
        const action = getAddListAction()
        store.dispatch(action);
    }

    handleItemDelete(index){
        const action = getDeleteItemAction(index)
        store.dispatch(action)
    }
}

export default Redux;