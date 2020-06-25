/** @format */

import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoadingSpinner from '../components/reusable/LoadingSpinner';
const App = lazy(() => import('../components/App'));
const Search = lazy(() => import('../components/search'));
const Submit = lazy(() => import('../components/submit'));
const SearchRecord = lazy(() => import('../components/SearchRecord'));
const RegistrationForm = lazy(() => import('../components/RegistrationForm'));
const RegistrationFormHooks = lazy(() =>
	import('../components/RegistrationFormHooks')
);
const SimpleForm = lazy(() => import('../components/SimpleForm'));
const Header = lazy(() => import('../Header'));
const Footer = lazy(() => import('../Footer'));
const IPAddress = lazy(() => import('../components/IPAddress'));
const SearchRecipe = lazy(() => import('../components/SearchRecipe'));

const ReactRouter = () => {
	// console.log('TEST : ')
	return (
		<Suspense fallback={<LoadingSpinner />}>
			<Router>
				<div>
					<Header />
					<div className='container-fluid'>
						<Switch>
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
							<Route path='/IPAddress'>
								<IPAddress />
							</Route>
							<Route path='/searchR'>
								<SearchRecipe />
							</Route>
							<Route path='/registerHook'>
								<RegistrationFormHooks />
							</Route>
						</Switch>
					</div>
					<Footer />
				</div>
			</Router>
		</Suspense>
	);
};

export default ReactRouter;
