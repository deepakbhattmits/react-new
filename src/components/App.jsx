/** @format */

import React, { Component } from 'react';

import ReactTable from 'react-table-6';
import { connect } from 'react-redux';
//  import LoadingSpinner from './reusable/LoadingSpinner';
import Modal from 'react-responsive-modal';
import { ReactComponent as DownArrowSVG } from '../assets/images/icon-down-arrow.svg';
import { ReactComponent as UpArrowSVG } from '../assets/images/icon-up-arrow.svg';

import 'react-table-6/react-table.css';
class App extends Component {
	state = {
		_id: '',
		name: '',
		gender: '',
		email: '',
		create_date: '',
		phone: '',
		data: [],
		selectedData: [],
		msg: '',
		open: false,
		showWarning: true,
		isLoading: false,
		propsExample: 'Deepak',
		sortDesc: {},
	};

	renderLoadButton = () => {
		console.log('data :', !!this.state.data.length);
		const { isSignedIn } = this.props.auth;

		if (isSignedIn && !!!this.state.data.length) {
			return (
				<button className='ui button primary' onClick={this.getData}>
					Load Data
					{this.state.isLoading ? <i className='sync icon spin'></i> : ''}
				</button>
			);
		}
	};

	inputHandleChange = (e) => {
		// this.setState({value: e.target.value});
	};
	inputHandleChangename = (e) => {
		this.setState({
			name: e.target.value,
		});
	};
	inputHandleChangeemail = (e) => {
		this.setState({
			email: e.target.value,
		});
	};
	inputHandleChangegender = (e) => {
		this.setState({
			gender: e.target.value,
		});
	};

	inputHandleChangephone = (e) => {
		this.setState({
			phone: e.target.value,
		});
	};

	handleSubmit = (e) => {
		e.preDefault();

		this.setState({
			name: e.target.name.value,
			gender: e.target.gender.value,
			Mobile: e.target.phone.value,
			email: e.target.email.value,
		});

		fetch('http://localhost:8080/api/contacts/:' + this.state._id, {
			method: 'put',
			body: JSON.stringify(this.state),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then((response) => {
				// console.log('Success:', JSON.stringify(response));
			})
			.catch((error) => {
				// console.error('Error:', error);
			});
	};
	onOpenModal = () => {
		this.setState({ open: true });
	};

	onCloseModal = () => {
		this.setState({ open: false });
		this.setState({
			msg: '',
		});
	};
	handleChange = (e) => {
		this.onOpenModal();

		this.setState({
			_id: e['_id'],
			name: e['name'],
			email: e['email'],
			phone: e['phone'],
			gender: e['gender'],
			create_date: e['create_date'],
		});

		this.setState({ value: e['Username'] });
	};

	deleteRow = (e) => {};

	// getData = () => {
	// 	fetch(
	// 		'https://cors-anywhere.herokuapp.com/http://starlord.hackerearth.com/movies'
	// 	)
	// 		.then(response => response.json())

	// 		.then(json => {
	// 			// console.log('pre test : ', json, 'TEST : ', json.data);
	// 			this.setState({ data: json });
	// 		})
	// 		.catch(function(error) {
	// 			// console.log('error:', error);
	// 		});
	// };
	isLoading = () => {
		console.log('here :');
		this.setState({ isLoading: false });
	};
	getData = async () => {
		this.setState({ isLoading: true });
		const respose = await fetch(
			'https://cors-anywhere.herokuapp.com/http://starlord.hackerearth.com/movies'
		);
		const data = await respose.json();
		this.setState({ data: data }, () => this.isLoading());
	};

	sortFunction = (e) => {
		// console.log('option : ', e);
		const sortDesc = { [e[0].id]: e[0].desc };
		this.setState({ sortDesc });
	};
	render() {
		// console.log('main TEST :', this.state.data);

		const columns = [
			{
				// Header: 'Director Name',
				accessor: 'director_name', // String-based value accessors!,
				Header: (rowInfo) => {
					//  console.log(
					// 		'Director Name - SORT : ',
					// 		rowInfo,
					// 		'asc :',
					// 		this.state.sortDesc['director_name']
					// 	);
					return (
						<>
							<span>Director Name</span>
							<DownArrowSVG
								className={`icon down --arrow ${
									this.state.sortDesc['director_name'] ? 'active' : ''
								}`}
							/>

							<UpArrowSVG
								className={`icon up --arrow ${
									this.state.sortDesc['director_name'] ? '' : 'active'
								}`}
							/>
						</>
					);
				},
			},
			{
				// Header: 'Movie Title',
				accessor: 'movie_title', // String-based value accessors!
				Header: (rowInfo) => {
					// console.log('SORT : ', rowInfo, this.state.sortDesc);
					return (
						<>
							<span>Movie Title</span>
							<DownArrowSVG
								className={`icon down --arrow ${
									this.state.sortDesc['movie_title'] ? 'active' : ''
								}`}
							/>

							<UpArrowSVG
								className={`icon up --arrow ${
									this.state.sortDesc['movie_title'] ? '' : 'active'
								}`}
							/>
						</>
					);
				},
			},
			{
				// Header: 'Country',
				accessor: 'country', // String-based value accessors!
				Header: (rowInfo) => {
					// console.log('SORT : ', rowInfo, this.state.sortDesc);
					return (
						<>
							<span>Country</span>
							<DownArrowSVG
								className={`icon down --arrow ${
									this.state.sortDesc['country'] ? 'active' : ''
								}`}
							/>

							<UpArrowSVG
								className={`icon up --arrow ${
									this.state.sortDesc['country'] ? '' : 'active'
								}`}
							/>
						</>
					);
				},
			},
			{
				// Header: 'Plot Keywords',
				accessor: 'plot_keywords', // String-based value accessors!
				Header: (rowInfo) => {
					// console.log('SORT : ', rowInfo, this.state.sortDesc);
					return (
						<>
							<span>Plot Keywords</span>
							<DownArrowSVG
								className={`icon down --arrow ${
									this.state.sortDesc['plot_keywords'] ? 'active' : ''
								}`}
							/>

							<UpArrowSVG
								className={`icon up --arrow ${
									this.state.sortDesc['plot_keywords'] ? '' : 'active'
								}`}
							/>
						</>
					);
				},
			},
			{
				// Header: 'Title Year',
				accessor: 'title_year', // String-based value accessors!
				Header: (rowInfo) => {
					// console.log('SORT : ', rowInfo, this.state.sortDesc);
					return (
						<>
							<span>Title Year</span>
							<DownArrowSVG
								className={`icon down --arrow ${
									this.state.sortDesc['title_year'] ? 'active' : ''
								}`}
							/>

							<UpArrowSVG
								className={`icon up --arrow ${
									this.state.sortDesc['title_year'] ? '' : 'active'
								}`}
							/>
						</>
					);
				},
			},
			{
				// Header: 'Content Rating',
				accessor: 'content_rating', // String-based value accessors!
				Header: (rowInfo) => {
					// console.log('SORT : ', rowInfo, this.state.sortDesc);
					return (
						<>
							<span>Content Rating</span>
							<DownArrowSVG
								className={`icon down --arrow ${
									this.state.sortDesc['content_rating'] ? 'active' : ''
								}`}
							/>

							<UpArrowSVG
								className={`icon up --arrow ${
									this.state.sortDesc['content_rating'] ? '' : 'active'
								}`}
							/>
						</>
					);
				},
			},
		];
		return (
			<div className='container-fluid'>
				<div className='row'>
					<div className='col-lg-12 col-sm-12 col-md-12 col-xs-12'>
						{this.REACT_VERSION}
					</div>
				</div>
				<div className='row'>
					<div className='col-lg-2 col-sm-2 col-md-2 col-xs-4 text-left'>
						{this.renderLoadButton()}
					</div>
					<div className='col-lg-10 col-sm-10 col-md-10 col-xs-8 text-center'>
						<span className='fa-spiner fa-spin h2 '>STUDENT RECORD</span>
						<span className='h2 '>{this.state.msg} </span>
					</div>
				</div>
				<div className='row'>
					<div className='col-lg-12 col-sm-12 col-md-12 col-xs-12'>
						<ReactTable
							data={this.state.data}
							columns={columns}
							onSortedChange={(e) => {
								this.sortFunction(e);
							}}
							className='react-table'
							style={{ textTransform: 'uppercase' }}
							showPagination={false}
							defaultPageSize={100}
							loadingText='Loading...'
							noDataText='No rows found'
						/>
					</div>
				</div>

				<div className='row'>
					<div className='col-lg-12 col-sm-12 col-md-12 col-xs-12'>
						<Modal open={this.state.open} onClose={this.onCloseModal}>
							<form className='form-horizontal' onSubmit={this.handleSubmit}>
								<div className='form-group'>
									<label className='control-label col-sm-2' name='fname'>
										name :
									</label>
									<div className='col-sm-10'>
										<input
											type='text'
											className='form-control'
											_id='fname'
											name='name'
											value={this.state.name}
											onChange={this.inputHandleChangename.bind(this)}
											ref={(node) => (this.inputNode = node)}
										/>
									</div>
								</div>
								<div className='form-group'>
									<label className='control-label col-sm-2' name='email'>
										email :
									</label>
									<div className='col-sm-10'>
										<input
											type='email'
											className='form-control'
											_id='email'
											name='email'
											value={this.state.email}
											onChange={this.inputHandleChangeemail.bind(this)}
											ref={(node) => (this.inputNode = node)}
										/>
									</div>
								</div>
								<div className='form-group'>
									<label className='control-label col-sm-2' htmlFor='phone'>
										Mobile :
									</label>
									<div className='col-sm-10'>
										<input
											type='text'
											className='form-control'
											_id='phone'
											name='phone'
											value={this.state.phone}
											onChange={this.inputHandleChangephone.bind(this)}
											ref={(node) => (this.inputNode = node)}
										/>
									</div>
								</div>
								<div className='form-group'>
									<label className='control-label col-sm-2' name='htown'>
										gender:
									</label>
									<div className='col-sm-10'>
										<input
											type='text'
											className='form-control'
											_id='htown'
											name='gender'
											value={this.state.gender}
											onChange={this.inputHandleChangegender.bind(this)}
											ref={(node) => (this.inputNode = node)}
										/>
									</div>
								</div>
								<div className='form-group'>
									<div className='col-lg-6 col-sm-6 col-xs-6'>
										<input type='submit' value='Submit' />
									</div>
									<div className='col-lg-6 col-sm-6 col-xs-6'>
										<input
											type='reset'
											onClick={this.onCloseModal}
											value='Cancle'
										/>
									</div>
								</div>
								<div className='form-group'>
									<span className='h2'>{this.state.msg}</span>
								</div>
							</form>
						</Modal>
					</div>
				</div>
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		auth: state.auth,
	};
};
export default connect(mapStateToProps, null)(App);
