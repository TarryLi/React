import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component{
    constructor(props){
        super(props)
        this.handelClick = this.handelClick.bind(this)
    }

    //接收到参数，父组件从新render时执行
    componentWillReceiveProps(){
        console.log('componentWillReceiveProps')
    }

    //将组件从页面剔除
    componentWillUnmount(){
        console.log('componentWillUnmount')
    }

    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.content !== this.props.content){
            return true
        }else{
            return false
        }
    }

    render(){
        const {content,test} = this.props
        return(
            <div onClick={this.handelClick}>
                {test}-{content}
            </div>
        )
    }

    handelClick(){
        const {deleteItem,index} = this.props
        deleteItem(index)
    }

}

TodoItem.propTypes = {
    test: PropTypes.string.isRequired,
    content: PropTypes.string,
    deleteItem: PropTypes.func,
    index: PropTypes.number
}

TodoItem.defaultProps = {
    test: 'Todo'
}

export default TodoItem;