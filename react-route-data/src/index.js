import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import '../node_modules/jquery/dist/jquery.min.js';
import '../node_modules/popper.js/dist/popper.min.js';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router}  from 'react-router-dom';
import ReactRouter from './router/router';
ReactDOM.render(
  <Router>
    <ReactRouter/>
  </Router>
    ,
    document.getElementById('root'));
