/** @format */

import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createUser } from '../actions';
// SimpleForm
class SimpleForm extends Component {
	renderError({ touched, error }) {
		if (touched && error) {
			return (
				<div className='ui error message'>
					<div className='header'>{error}</div>
				</div>
			);
		}
	}

	input = ({ input, label, placeholder, meta }) => {
		// console.log(' TEST :', meta);
		const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
		return (
			<div className={className}>
				<label>{label}</label>
				<input {...input} placeholder={placeholder} autoComplete='off' />
				{this.renderError(meta)}
			</div>
		);
	};
	select1 = ({ input, label, placeholder, meta }) => {
		// const { value, onChange } = formProps.input;
		const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
		return (
			<div className={className}>
				<label>{label}</label>
				<select {...input}>
					<option value={``}> {placeholder} </option>
					<option value={`Bangalore`}>Bangalore</option>
					<option value={`Gwalior`}>Gwalior</option>
					<option value={`Pithoragarh`}>Pithoragarh</option>
				</select>
				{this.renderError(meta)}
			</div>
		);
	};
	select2 = ({ input, label, placeholder, meta }) => {
		const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
		// const { value, onChange } = formProps.input;
		return (
			<div className={className}>
				<label>{label}</label>
				<select {...input}>
					<option value={``}> {placeholder} </option>
					<option value={`TCS`}>TCS</option>
					<option value={`CTS`}>CTS</option>
					<option value={`INFOSYS`}>INFOSYS</option>
				</select>
				{this.renderError(meta)}
			</div>
		);
	};
	textarea = ({ input, label, placeholder, meta }) => {
		// const { value, onChange } = formProps.input;
		const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
		return (
			<div className={className}>
				<label>{label}</label>
				<textarea {...input} placeholder={placeholder} />
				{this.renderError(meta)}
			</div>
		);
	};
	onSubmit = (formProps) => {
		console.log(formProps);
		this.props.createUser(formProps);
	};
	render() {
		const { handleSubmit, pristine, reset, submitting } = this.props;
		// console.log('RENDER : ',this.props);
		return (
			<div className='row'>
				<div className='col-offset-lg-2 col-lg-8 col-offset-lg-2'>
					<form
						className='ui form error'
						onSubmit={handleSubmit(this.onSubmit)}>
						<Field
							name='firstName'
							component={this.input}
							label='Enter First Name'
							placeholder='Enter First Name'
						/>
						<Field
							name='lastName'
							component={this.input}
							label='Enter Last Name'
							placeholder='Enter Last name'
						/>
						<Field
							name='email'
							component={this.input}
							label='Enter Email '
							placeholder='Enter Email'
						/>
						<Field
							name='city'
							component={this.select1}
							label='City'
							placeholder='Select City'
						/>
						<Field
							name='employed'
							component={this.select2}
							label='Employed'
							placeholder='Select Employer'
						/>
						<Field
							name='notes'
							component={this.textarea}
							label='Notes'
							placeholder='Describe your self !'
						/>

						<div>
							<button
								className='ui button default primary'
								type='submit'
								disabled={pristine || submitting}>
								Submit
							</button>
							<button
								className='ui button default negative'
								type='button'
								disabled={pristine || submitting}
								onClick={reset}>
								Clear Values
							</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}
const validate = (formProps) => {
	const errors = {};
	if (!formProps.firstName) {
		errors.firstName = `you must enter firstname !`;
	}
	if (!formProps.lastName) {
		errors.lastName = `you must enter lastname !`;
	}
	if (!formProps.email) {
		errors.email = `you must enter email !`;
	}
	if (!formProps.city) {
		errors.city = `you must enter city !`;
	}
	if (!formProps.employed) {
		errors.employed = `you must enter employed !`;
	}
	if (!formProps.notes) {
		errors.notes = `you must enter notes !`;
	}

	return errors;
};
const formWrapped = reduxForm({
	form: 'simple',
	validate,
})(SimpleForm);
export default connect(null, { createUser })(formWrapped);
