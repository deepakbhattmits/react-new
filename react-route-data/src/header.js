import React, { Component } from "react";
//import logo from './img/logo.svg';
// import logo from './img/logo.png';
import './css/index.css';

import Navigation from './components/navigation';

class Header extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
    			<div className="text-center col-lg-12 col-sm-12 col-md-12 col-xs-12">
    				<header>
    					  <Navigation />
    				</header>
    			</div>
    		</div>
	  </div>
    );
  }
}

export default Header;
