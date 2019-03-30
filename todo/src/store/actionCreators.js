import {CHANGE_INPUT_VALUE, ADD_TODO_LIST, DELETE_TODO_ITEM, INIT_LIST_ACTION} from './actionType'
import axios from 'axios'

export const getInputChangeAction = (value) =>({
    type: CHANGE_INPUT_VALUE,
    value
})

export const getAddListAction = () =>({
    type: ADD_TODO_LIST,
})

export const getDeleteItemAction = (index) =>({
    type: DELETE_TODO_ITEM,
    index
})

export const initListAction = (data) =>({
    type: INIT_LIST_ACTION,
    data
})

export const getTodoList = () =>{
    return (dispatch) => {
        axios.get('https://easy-mock.com/mock/5c667192cf310c0623aa7174/example/todolist').then((res) => {
            const data = res.data.data;
            const action = initListAction(data);
            dispatch(action);
        })
    }
}