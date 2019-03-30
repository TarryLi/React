import React,{Component, Fragment} from 'react';
import axios from 'axios';
// import './style.css';
import TodoItem from './TodoItem';

class TodoList extends Component{

    constructor(props){
        super(props);
        this.state = {
            inputValue:'',
            list: []
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }

    //在组件即将被挂载到页面时自动执行
    componentWillMount(){
        console.log('componentWillMount');
    }


    render(){
        console.log('render');
        return(
            <Fragment>
                <div>
                    <label htmlFor="insertArea">输入内容</label>
                    <input
                        id={'insertArea'}
                        className={'input'}
                        type="text"
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                    />
                    <button onClick={this.handleBtnClick}>提交</button>
                </div>
                <ul>{this.getTodoItem()}</ul>
            </Fragment>
        )
    }

    //在组件已被被挂载到页面时自动执行
    componentDidMount(){
        console.log('componentWillMount');
        axios.get(' /todolist')
            .then((res) => {
                console.log(res);
                this.setState(()=>{
                    return {
                        list:[...res.data]
                    }
                })
            })
            .catch(() => {console.log('err')})
    }

    //在组件更之前自动执行
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate');
        return true;
    }

    //在组件更之前自动执行，但在shouldComponentUpdate之后
    componentWillUpdate(){
        console.log('componentWillUpdate');
    }

    //在组件更之后自动执行
    componentDidUpdate(){
        console.log('componentDidUpdate');
    }

    getTodoItem(){
        return this.state.list.map((item,index) =>{
            return (
                <TodoItem
                    content = {item}
                    index = {index}
                    deleteItem = {this.handleItemDelete}
                    key = {index}
                />
            )
        })

    }

    handleInputChange(e){
        const value = e.target.value;
        this.setState(() => ({
            inputValue: value
        }));
    }

    handleBtnClick(){
        this.setState((prevState) => ({
            list: [...prevState.list,prevState.inputValue],
            inputValue: ''
        }));
    }

    handleItemDelete(index){
        this.setState((prevState) => {
            const list = [...prevState.list];
            list.splice(index,1);
            return{list};
        });
    }
}

export default TodoList;