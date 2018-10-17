import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import App from './App';
import App1 from './App1';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<App1 />, document.getElementById('root1'));
registerServiceWorker();
