/** @format */

import React from 'react';

const ListItem = ({ items }) => {
	return (
		<>
			{!!items &&
				items.map((item, index) => {
					return <li key={index}>{item}</li>;
				})}
		</>
	);
};
export default ListItem;
