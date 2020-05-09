/** @format */

import React from 'react';

const SearchBar = ({ getRecipe }) => {
	// console.log(' TEST :', getRecipe);
	return (
		<div>
			<form
				className='ui form '
				onSubmit={getRecipe}
				style={{ margin: '10px' }}>
				<div className='ui search focus'>
					<div className='ui icon input'>
						<input
							className='prompt'
							type='text'
							name='recipeName'
							placeholder='search here...'
							autoComplete='off'
						/>
						<i className='search icon' areahidden='true' />
					</div>
				</div>
			</form>
		</div>
	);
};
export default SearchBar;
