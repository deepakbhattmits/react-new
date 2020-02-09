/** @format */

import React, { Component, Fragment } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import Image from 'react-image-resizer';

import img1 from '../assets/images/image1.jpg';
import img2 from '../assets/images/image2.jpg';
import img3 from '../assets/images/image3.jpg';
import img4 from '../assets/images/image4.jpg';
import img5 from '../assets/images/image5.jpg';
import img6 from '../assets/images/image6.jpg';
import img7 from '../assets/images/image7.jpg';

class SearchRecord extends Component {
	constructor(props) {
		super(props);
		// this.onChangeInput = this.onChangeInput.bind(this);
		// this.onChangeFilter = this.onChangeFilter.bind(this);
		// this.getInitialState = this.getInitialState.bind(this);
		// this.handleChange = this.handleChange.bind(this);
		this.state = {
			data: [],
			query: '',
			filteredData: [],
			selectValue: '-- select any field --'
		};
	}
	componentDidMount() {
		this.getData();
	}
	// eslint-disable-next-line no-undef
	responsive = {
		0: { items: 1 },
		600: { items: 2 },
		1024: { items: 4 },
		1360: { items: 6 }
	};
	getData = () => {
		fetch(
			'https://cors-anywhere.herokuapp.com/http://starlord.hackerearth.com/movies'
		)
			.then(response => response.json())

			.then(json => {
				// console.log('test old : ',json);
				this.setState({ data: json });
				// console.log('test new  : ', this.state.data);
			})
			.catch(function(error) {
				// console.log("error :", error);
			});
	};
	onChangeInput = e => {
		var result = '';
		const query = e.target.value;
		// console.log("test serach :",e.target.value);
		var updatedList = this.state.data;
		if (query !== '') {
			updatedList = updatedList.filter(function(item) {
				// return item.movie_title.toLowerCase().search(
				//       query.toLowerCase()) !== -1;
				// console.log("TEST :",item);
				if (item.movie_title.toLowerCase().search(query.toLowerCase()) >= 0) {
					result =
						item.movie_title.toLowerCase().search(query.toLowerCase()) !== -1;
				} else if (
					item.director_name.toLowerCase().search(query.toLowerCase()) >= 0
				) {
					result =
						item.director_name.toLowerCase().search(query.toLowerCase()) !== -1;
				} else if (
					item.country.toLowerCase().search(query.toLowerCase()) >= 0
				) {
					result =
						item.country.toLowerCase().search(query.toLowerCase()) !== -1;
				} else if (
					item.plot_keywords.toLowerCase().search(query.toLowerCase()) >= 0
				) {
					result =
						item.plot_keywords.toLowerCase().search(query.toLowerCase()) !== -1;
				} else if (
					item.title_year.toLowerCase().search(query.toLowerCase()) >= 0
				) {
					result =
						item.title_year.toLowerCase().search(query.toLowerCase()) !== -1;
				} else if (
					item.content_rating.toLowerCase().search(query.toLowerCase()) >= 0
				) {
					result =
						item.content_rating.toLowerCase().search(query.toLowerCase()) !==
						-1;
				} else {
				}
				return result;
			});

			this.setState({ data: updatedList });
		} else {
			this.getData();
			this.setState({ data: this.state.data });
		}
	};

	getInitialState = () => {
		return this.state.selectValue;
	};
	handleChange = e => {
		this.setState({ selectValue: e.target.value });
	};

	render() {
		const handleOnDragStart = e => e.preDefault();
		const { data } = this.state;

		const style = {
			image: {
				border: '1px solid #ccc',
				background: '#fefefe'
			},
			prodImg: {
				display: 'inline-block',
				margin: '0 2px'
			}
		};
		var message = 'You selected ' + this.state.selectValue;
		return (
			<Fragment>
				<div className='row'>
					<div className='col-lg-12 col-sm-12 col-md-12 col-xs-12'>
						<AliceCarousel mouseDragEnabled>
							<Image
								src={img1}
								width={200}
								height={200}
								responsive={this.responsive}
								style={style.image}
								onDragStart={handleOnDragStart}
								className='yours-custom-class'
							/>
							<Image
								src={img2}
								width={200}
								height={200}
								responsive={this.responsive}
								style={style.image}
								onDragStart={handleOnDragStart}
								className='yours-custom-class'
							/>
							<Image
								src={img3}
								width={200}
								height={200}
								responsive={this.responsive}
								style={style.image}
								onDragStart={handleOnDragStart}
								className='yours-custom-class'
							/>
							<Image
								src={img4}
								width={200}
								height={200}
								responsive={this.responsive}
								style={style.image}
								onDragStart={handleOnDragStart}
								className='yours-custom-class'
							/>
							<Image
								src={img5}
								width={200}
								height={200}
								responsive={this.responsive}
								style={style.image}
								onDragStart={handleOnDragStart}
								className='yours-custom-class'
							/>
							<Image
								src={img6}
								width={200}
								height={200}
								responsive={this.responsive}
								style={style.image}
								onDragStart={handleOnDragStart}
								className='yours-custom-class'
							/>
							<Image
								src={img7}
								width={200}
								height={200}
								responsive={this.responsive}
								style={style.image}
								onDragStart={handleOnDragStart}
								className='yours-custom-class'
							/>
						</AliceCarousel>
					</div>
				</div>
				<div className='row'>
					<div className='col-lg-3 col-lg-offset-7 col-sm-3 col-sm-offset-7 col-md-3 col-md-offset-7 col-xs-10'>
						<div className='searchForm'>
							<form>
								<input
									className='form-control'
									type='search'
									placeholder='Search for...'
									onChange={this.onChangeInput}
								/>
							</form>
							<div>
								{this.state.filteredData.map(i => (
									<p>{i.name}</p>
								))}
							</div>
						</div>
					</div>
					<div className='col-lg-2 col-sm-2 col-md-3 col-xs-2'>
						<div>
							<i
								className='fa fa-filter fa-2x text-dark'
								aria-hidden='true'></i>
							<select
								className='border-0 bg-white'
								value={this.state.selectValue}
								onChange={this.handleChange}>
								<option value='-- select any field --'>
									-- select any field --
								</option>
								<option value='director_name'>director_name</option>
								<option value='movie_title'>movie_title</option>
								<option value='country'>country</option>
								<option value='country'>plot_keywords</option>
								<option value='country'>title_year</option>
								<option value='country'>content_rating</option>
							</select>
							<p>{message}</p>
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='col-lg-12 col-sm-12 col-md-12 col-xs-12'>
						<div className='table-responsive'>
							<table className='table table-striped'>
								<thead>
									<tr>
										<th>Director Name</th>
										<th>Movie Title</th>
										<th>Country</th>
										<th>Plot Keywords</th>
										<th>Title Year</th>
										<th>Content Rating</th>
									</tr>
								</thead>
								<tbody>
									{/* {this.state.data ?  */}
									{data.map((item, index) => (
										<tr key={index}>
											<td>{item.director_name}</td>
											<td>{item.movie_title}</td>
											<td>{item.country}</td>
											<td>{item.plot_keywords}</td>
											<td>{item.title_year}</td>
											<td>{item.content_rating}</td>
										</tr>
									))}
									{/*  : 
					 		<tr>
				    			<td colSpan="7" align="center">--NO DATA SELECTED--</td>
					 		</tr>
					 } */}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}
export default SearchRecord;
