/** @format */

import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import GoogleAuth from './GoogleAuth';

class Navigation extends React.Component {
	render() {
		// console.log('TEST :> ', props);
		return (
			<nav className='navbar navbar-expand-lg navbar-light bg-light'>
				<div className='App-header'>
					<a className='navbar-brand' href='/'>
						<img src={logo} className='App-logo img-responsive' alt='logo' />
					</a>
				</div>
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarSupportedContent'>
					<ul className='navbar-nav mr-auto'>
						<li className='nav-item'>
							<NavLink exact to='/' className='nav-menu'>
								Home Page
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink to='/search' className='nav-menu'>
								Search data
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink to='/submit' className='nav-menu'>
								Save Record
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink to='/searchRecord' className='nav-menu'>
								Search Record By name
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink exact to='/register' className='nav-menu'>
								Register
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink exact to='/registerHook' className='nav-menu'>
								Register Hooks
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink exact to='/SimpleForm' className='nav-menu'>
								SimpleForm
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink exact to='/ListUsers' className='nav-menu'>
								Users
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink exact to='/searchR' className='nav-menu'>
								Search receipeis
							</NavLink>
						</li>
					</ul>
					<GoogleAuth />
				</div>
			</nav>
		);
	}
}
export default Navigation;
