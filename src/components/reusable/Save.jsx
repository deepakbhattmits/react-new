/** @format */

import React from 'react';
import { Button } from 'react-bootstrap';

const Save = ({ isValid, type, children }) => {
	return (
		<div>
			<Button type={type} disabled={!isValid}>
				{children}
			</Button>
		</div>
	);
};
export default Save;
