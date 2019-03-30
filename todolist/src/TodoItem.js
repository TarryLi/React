import React,{Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component{

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    shouldComponentUpdate(nextProps,nextState){
        if (nextProps.content !== this.props.content) {
            return true;
        }else{
            return false;
        }
    }

    render(){
        const {content} = this.props;
        return <div onClick={this.handleClick}>{content}</div>
    }

    handleClick(){
        const {deleteItem, index} = this.props;
         deleteItem(index);
    }

    //一个组件要从父组件接受参数
    //如果这个组件第一次存在于父组件中，不会被执行
    //如果这个组件之前已经存在于父组件中，才会执行
    componentWillReceiveProps(){
        console.log('componentWillReceiveProps');
    }
}

//参数校验
TodoItem.propTypes = {
    content: PropTypes.string,
    deleteItem: PropTypes.func,
    index: PropTypes.number
};

//默认值
TodoItem.defaultProps = {

};

export default TodoItem;