import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList'
import App from './App'
import Red from './Redux'

ReactDOM.render(<TodoList />, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<Red />, document.getElementById('red'));

