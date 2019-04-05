import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppStore from './stores/AppStore.jsx';
import { Provider } from "mobx-react"

const store = new AppStore();
ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>,
document.getElementById('app'));
