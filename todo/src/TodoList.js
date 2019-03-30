import React, { Component, Fragment } from 'react';
import axios from 'axios';
import './style.css'
import TodoItem from './TodoItem'
import Test from './Test'

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: [],
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleItemDelete = this.handleItemDelete.bind(this)
    }

    //组件挂载到页面上之前
    componentWillMount(){
        console.log('componentWillMount')
    }

    //页面第一次被加载
    componentDidMount(){
        console.log('componentDidMount')
        axios.get('https://easy-mock.com/mock/5c667192cf310c0623aa7174/example/todolist')
        .then((res) => {
            console.log(res.data.data)
            this.setState(() => ({
                list: [...res.data.data]
            }))
        })
        .catch(() => {console.log('err')}) 
    }

    //组建被更新之前
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate')
        return true
    }

    //在组件更新之前，在shouldComponentUpdate之后，前提是shouldComponentUpdate返回true
    componentWillUpdate(){
        console.log('componentWillUpdate')
    }

    //组件完成更新之后
    componentDidUpdate(){
        console.log('componentDidUpdate')
    }

    render() {
        console.log('render')
        return (
            <Fragment>
                <label htmlFor='insertArea'>输入内容</label>
                <input
                    id='insertArea'
                    value={this.state.inputValue} 
                    onChange={this.handleInputChange} 
                    className='input' 
                />
                <button onClick={this.handleBtnClick}>提交</button>
                <ul>
                    {this.getTodoList()}
                </ul>
                <Test content={this.state.inputValue}/>
            </Fragment>
        )
    }

    getTodoList(){
        return this.state.list.map((item, index) => {
            return (
                <TodoItem 
                    key={index}
                    content={item}
                    index={index}
                    deleteItem={this.handleItemDelete}
                />
            )
        })
    }

    handleInputChange(e) {
        const value = e.target.value
        this.setState(() => ({
            inputValue: value
        }))
    }

    handleBtnClick(e) {
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }))
    }

    handleItemDelete(index) {
        this.setState((prevState) => {
            const list = [...prevState.list]
            list.splice(index, 1)
            return{list}
        })
    }
}
export default TodoList;