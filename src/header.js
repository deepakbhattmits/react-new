import React, { Component } from "react";

import Navigation from './components/navigation' 
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
				    <Navigation />
				</header>
			</div>
		</div>
	  </div>
    );
  }
}

export default Header;
