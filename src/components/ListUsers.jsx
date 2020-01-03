/** @format */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { listUser } from '../actions';

class ListUser extends Component {
	componentDidMount() {
		this.props.listUser();
	}
	renderCard() {
		return this.props.users.map(
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
	}
	render() {
		// console.log('TEST : =',this.props.isSignedIn);
		return <div className='ui cards'>{this.renderCard()}</div>;
	}
}
const mapStateToProps = state => {
	return {
		users: Object.values(state.users)
	};
};
export default connect(mapStateToProps, { listUser })(ListUser);
