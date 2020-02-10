/** @format */

import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import './assets/css/_main.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import ReactRouter from './router/ReactRouter';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	reducers,
	composeEnhancers(applyMiddleware(reduxThunk))
);
const rootElement = document.querySelector('#root');
ReactDOM.render(
	<Provider store={store}>
		<ReactRouter />
	</Provider>,
	rootElement
);
