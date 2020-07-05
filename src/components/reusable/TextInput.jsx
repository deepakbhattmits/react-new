/** @format */

import React from 'react';
import { Form } from 'react-bootstrap';

const TextInput = ({ placeholder, value, handleChange, error }) => {
	return (
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
			<Form.Text>{error}</Form.Text>
		</Form.Group>
	);
};
export default TextInput;
