/** @format */

import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

const ListItem = ({ items, handleRemove }) => {
	return (
		<>
			{items?.map((item, index) => {
				return (
					<ListGroup.Item
						key={index}
						variant={index % 2 === 0 ? 'primary' : 'dark'}>
						{item}
						<i
							className='close icon link'
							onClick={() => {
								handleRemove(item);
							}}
							title='Remove'></i>
					</ListGroup.Item>
				);
			})}
		</>
	);
};
export default ListItem;
