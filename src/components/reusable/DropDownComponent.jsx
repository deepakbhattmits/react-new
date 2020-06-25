/** @format */

import React from 'react';
import { Dropdown, Button } from 'react-bootstrap';
const DropDownComponent = ({ data, selectedOption, handleChange }) => {
	return (
		<Dropdown className='custom-dropdown'>
			<Button variant='outline-secondary'>{selectedOption}</Button>

			<Dropdown.Toggle split variant='outline-secondary' />

			<Dropdown.Menu>
				{!!data &&
					data.map((option, index) => {
						return (
							<Dropdown.Item
								key={index}
								onClick={handleChange}
								className={option.name === selectedOption ? 'selected' : ''}>
								{option.name}
							</Dropdown.Item>
						);
					})}
			</Dropdown.Menu>
		</Dropdown>
	);
};
export default DropDownComponent;
