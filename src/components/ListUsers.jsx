/** @format */

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listUser } from '../actions';

const ListUser = () => {
	console.log('curious');
	const dispatch = useDispatch();
	const users = useSelector((state) => state.users);

	const renderCard = () => {
		return users.map(
			({ id, firstName, lastName, email, employed, city, notes }) => {
				return (
					<div className='card' key={id}>
						<div className='content'>
							<div className='header'>{`${firstName} ${lastName}`}</div>
							<div className='meta'>{email}</div>
							<div className='description'>
								{`${firstName} is working in ${employed} and live ${city} , ${notes}`}
							</div>
						</div>
					</div>
				);
			}
		);
	};
	useEffect(() => {
		dispatch(listUser());
	}, [dispatch]);

	return <div className='ui cards'>{renderCard}</div>;
};

export default ListUser;
