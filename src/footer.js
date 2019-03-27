import React, { Component } from "react";
import ScrollApp from './components/scroll';
import './css/index.css';

class Footer extends Component {
/*   active = {
    fontWeight: "bold",
    color: "red"
  }; */
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
			<div className="text-center col-lg-12 col-sm-12 col-md-12 col-xs-12">
				<footer className="App-footer">
				
				<ScrollApp />
				</footer>
			</div>
		</div>
		<div className="row ">
			<div className="col-lg-12 col-sm-12 col-md-12 col-xs-12">
			
			</div>
		</div>
	  </div>
    );
  }
}

export default Footer;
