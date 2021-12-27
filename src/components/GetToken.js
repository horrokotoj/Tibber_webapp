import './GetToken.css';
import React, { useState, useEffect } from 'react';

const GetToken = ({ setToken }) => {
	const [input, setInput] = useState('');

	const saveToken = () => {
		document.cookie = 'Token=' + input;
		setToken(input);
		setInput(null);
	};

	return (
		<div className='inputContainer'>
			<input
				type='text'
				placeholder='Insert token'
				value={input}
				onChange={(e) => {
					setInput(e.target.value);
				}}
			/>
			<button
				type='submit'
				value='save token'
				className='separationButton'
				onClick={() => saveToken()}
			>
				Save token
			</button>
		</div>
	);
};

export default GetToken;
