/** @format */

import React, { Component } from 'react';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';
import SelectBar from './SelectBar';
const API_KEY = `209e1a0d02a7b3e2c423e14995ac0a55`;
// const API_URL = `https://www.food2fork.com/api/search?key=${API_KEY}&q=${}&count=5`;

class SearchRecipe extends Component {
	state = {
		data: [],
		movies: [],
		selectedOption: '-- Select Option --',
	};

	getRecipe = (e) => {
		const term = e.target.elements.recipeName.value;
		e.preventDefault();
		// console.log('term ', term);
		fetch(
			`https://www.food2fork.com/api/search?key=${API_KEY}&q=${term}&count=5`,
			{
				mode: 'no-cors',
				credentials: 'include',
			}
		)
			.then((response) => response.json())

			.then((json) => {
				this.setState({ data: json });
				// console.log('DATA : ', json);
			})
			.catch(function (error) {
				// console.log(" error :", error);
			});
	};
	getOption = (e) => {
		console.log('selected option : ', e.target.value);
		this.setState({ selectedOption: e.target.option });
		fetch(
			`https://cors-anywhere.herokuapp.com/http://starlord.hackerearth.com/movies`
		)
			.then((response) => response.json())

			.then((json) => {
				// console.log('pre test : ',json, "TEST : ",json.data);
				this.setState({ movies: json });
				console.log('loaded state', this.state.movies);
			})
			.catch(function (error) {
				// console.log("error:", error);
			});
		// this.state.data.recipes.filter((el,i,self) => { return el['title'] === (e.target.value) ? this.setState({data: self }): this.setState({ data: self })} );
	};
	render() {
		return (
			<div className='ui grid'>
				<div className='four wide column'>
					<div className='ui search'>
						<SearchBar getRecipe={this.getRecipe} />
					</div>

					<div>
						<SelectBar
							movies={this.state.movies}
							getOption={this.getOption}
							value={this.state.selectedOption}
						/>
					</div>
				</div>
				<div className='twelve wide column'>
					<SearchResult data={this.state.data} />
				</div>
			</div>
		);
	}
}
export default SearchRecipe;
