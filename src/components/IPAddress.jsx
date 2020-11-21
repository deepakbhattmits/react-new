/** @format */

import React, { useState } from 'react';
import { Form, ListGroup } from 'react-bootstrap';
import DropDownComponent from './reusable/DropDownComponent';
import ListItem from './reusable/ListItem';
import TextInput from './reusable/TextInput';
import Save from './reusable/Save';

const IPAddress = () => {
	const [selectedOption, setSelectedOption] = useState('Select Option');
	const [error, setError] = useState('');
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
			IPcollection.indexOf(ip) >= 0
				? setError('Duplicate Entry')
				: setIPCollection([...IPcollection, ip]);
		} else if (selectedOption === 'Premium' && IPcollection.length <= 9) {
			IPcollection.indexOf(ip) >= 0
				? setError('Duplicate Entry')
				: setIPCollection([...IPcollection, ip]);
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
		if (!!error) {
			setError('');
		}
		if (!isValidIP(value)) {
			setError('Not a valid IP address');
		}
		setIP(value);
	};
	const handleRemove = (data) => {
		const filteredList = IPcollection.filter((item) => item !== data);
		setIPCollection(filteredList);
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
						<>
							{arr.find((item) => item.name === selectedOption).access -
							IPcollection.length ? (
								<Form onSubmit={handleSubmit}>
									<TextInput
										required
										handleChange={handleInputChange}
										value={!!ip ? ip : ''}
										error={error}
										placeholder='123.123.123.123'
									/>

									<Form.Group controlId='save'>
										<Save isValid={isValid} type='submit'>
											<i className='save icon'></i>
										</Save>
									</Form.Group>
								</Form>
							) : (
								`Usertype ${selectedOption} have to add ${
									arr.find((item) => item.name === selectedOption).access
								} list only - limit reached`
							)}
							<span>
								{`Remaining IP's : ${
									arr.find((item) => item.name === selectedOption).access -
									IPcollection.length
								}`}
							</span>
						</>
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
						<ListGroup>
							<ListItem items={IPcollection} handleRemove={handleRemove} />
						</ListGroup>
					</div>
				</>
			) : (
				''
			)}
		</div>
	);
};

export default IPAddress;
