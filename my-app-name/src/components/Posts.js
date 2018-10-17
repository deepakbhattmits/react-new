import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import logo from './img/logo.svg';
import './css/App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

class Posts extends Component {
  render() {
    return (
      <div className="containter-fluid App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
		  <div>
        <ul className="list-inline">
          <li className="list-inline-item"><Link to="/">Home</Link></li>
          <li className="list-inline-item"><Link to="/airports">Airports</Link></li>
          <li className="list-inline-item"><Link to="/cities">Cities</Link></li>
        </ul>
      </div>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
		<Route path="/" component={Home}/>
        <Route path="/airports" component={Airport}/>
        <Route path="/cities" component={City}/>
      </div>
    );
  }
}
export default Posts