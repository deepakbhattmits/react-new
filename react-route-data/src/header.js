import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from './img/logo.svg';
import './css/index.css';

class Header extends Component {
/*   active = {
    fontWeight: "bold",
    color: "red"
  }; */
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
			<div className="text-center col-lg-12 col-sm-12 col-md-12 col-xs-12">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome</h1>
				</header>
			</div>
		</div>
		<div className="row ">
			<div className="col-lg-12 col-sm-12 col-md-12 col-xs-12">
				<nav>
        		<NavLink exact to="/" className ='nav-menu'>
						  Home Page
						</NavLink>
				
						<NavLink to="/search" className ='nav-menu'>
						  Search data
						</NavLink>

						<NavLink to="/submit" className ='nav-menu'>
						  Save Record
						</NavLink>
					</nav>
			</div>
		</div>
	  </div>
    );
  }
}

export default Header;
