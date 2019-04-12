import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/main.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import ReactRouter from './router/ReactRouter';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

const store = createStore(
    reducers
    );

ReactDOM.render(
    <Provider store={ store }>
        <ReactRouter/>
    </Provider>
    ,
    document.getElementById('root'));
