/** @format */

import React from 'react';
import ScrollApp from './components/ScrollApp';
const Footer = () => {
	// console.log('TEST : > ');

	return (
		<div className='container-fluid'>
			<div className='row'>
				<div className='text-center col-lg-12 col-sm-12 col-md-12 col-xs-12'>
					<footer className='App-footer'>
						<ScrollApp />
					</footer>
				</div>
			</div>
			<div className='row '>
				<div className='col-lg-12 col-sm-12 col-md-12 col-xs-12'></div>
			</div>
		</div>
	);
};
export default Footer;
