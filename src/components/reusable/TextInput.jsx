/** @format */

import React from 'react';
import { Form } from 'react-bootstrap';

const TextInput = ({ placeholder, value, handleChange }) => {
	return (
		// <Form.Group controlId='IP'>
		<Form.Group>
			<Form.Label>IP address</Form.Label>
			<Form.Control
				className={`input`}
				onChange={handleChange}
				type='text'
				autoComplete='off'
				placeholder={placeholder}
				value={value}
			/>
			<Form.Text className='invalid-feedback'>please enter valid IP</Form.Text>
		</Form.Group>
	);
};
export default TextInput;
