/** @format */

import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import DropDownComponent from './reusable/DropDownComponent';
import ListItem from './reusable/ListItem';
import TextInput from './reusable/TextInput';
import Save from './reusable/Save';

const IPAddress = () => {
	const [selectedOption, setSelectedOption] = useState('Select Option');
	const [ip, setIP] = useState();
	const [IPcollection, setIPCollection] = useState([]);
	const [isValid, setIsValid] = useState(false);
	const arr = [
		{ name: 'Select Option', acces: 0 },
		{ name: 'Basic', access: 5 },
		{ name: 'Premium', access: 10 },
	];
	const handleSubmit = (event) => {
		event.preventDefault();

		if (selectedOption === 'Basic' && IPcollection.length <= 4) {
			setIPCollection([...IPcollection, ip]);
		} else if (selectedOption === 'Premium' && IPcollection.length <= 9) {
			setIPCollection([...IPcollection, ip]);
		}
		setIP();
		setIsValid(false);
	};
	const handleChange = (e) => {
		const { textContent } = e.target;
		setSelectedOption(textContent);
	};
	const isValidIP = (str) => {
		const octet = '(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)';
		const regex = new RegExp(`^${octet}\\.${octet}\\.${octet}\\.${octet}$`);
		return regex.test(str);
	};
	const handleInputChange = (e) => {
		const { value } = e.target;
		setIsValid(isValidIP(value));
		setIP(value);
	};
	return (
		<div className='container-ipaddress'>
			<DropDownComponent
				data={arr}
				selectedOption={selectedOption}
				handleChange={handleChange}
			/>
			{selectedOption !== 'Select Option' ? (
				<>
					<div className='input-wrapper'>
						<span>
							Remaining IP's
							{arr.find((item) => item.name === selectedOption).access -
								IPcollection.length}
						</span>
						{arr.find((item) => item.name === selectedOption).access -
						IPcollection.length ? (
							<Form
								className='inline-form'
								noValidate
								validated={isValid}
								onSubmit={handleSubmit}>
								<TextInput
									required
									handleChange={handleInputChange}
									value={!!ip ? ip : ''}
									placeholder='123.123.123.123'
								/>

								<Form.Group controlId='save'>
									<Save isValid={isValid} type='submit'>
										<i className='save icon'></i>
									</Save>
								</Form.Group>
							</Form>
						) : (
							'limit reached'
						)}
					</div>

					<div className='listIP'>
						<span>
							<strong>Usertype : {selectedOption}</strong>
							{` have access only to add `}
							<strong>
								{arr.find((item) => item.name === selectedOption).access} IP
								Addresses
							</strong>
						</span>
						<ul>
							<ListItem items={IPcollection} />
						</ul>
					</div>
				</>
			) : (
				''
			)}
		</div>
	);
};

export default IPAddress;
