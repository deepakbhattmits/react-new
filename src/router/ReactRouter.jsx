/** @format */

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from '../components/App';
import Search from '../components/search';
import Submit from '../components/submit';
import SearchRecord from '../components/searchRecord';
import RegistrationForm from '../components/RegistrationForm';

import RegistrationFormHooks from '../components/RegistrationFormHooks';
import SimpleForm from '../components/SimpleForm';
import Header from '../header';
import Footer from '../footer';
import ListUsers from '../components/ListUsers';
import SearchRecipe from '../components/SearchRecipe';

const ReactRouter = () => {
	// console.log('TEST : ')
	return (
		<Router>
			<div>
				<Header />
				<div className='container-fluid'>
					<Route exact path='/'>
						<App />
					</Route>
					<Route path='/Search'>
						<Search />
					</Route>
					<Route path='/Submit'>
						<Submit />
					</Route>
					<Route path='/searchRecord'>
						<SearchRecord />
					</Route>
					<Route path='/register'>
						<RegistrationForm />
					</Route>
					<Route path='/SimpleForm'>
						<SimpleForm />
					</Route>
					<Route path='/ListUsers'>
						<ListUsers />
					</Route>
					<Route path='/searchR'>
						<SearchRecipe />
					</Route>
					<Route path='/registerHook'>
						<RegistrationFormHooks />
					</Route>
				</div>
				<Footer />
			</div>
		</Router>
	);
};

export default ReactRouter;
