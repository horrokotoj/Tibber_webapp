import './App.css';
import CurrentPrice from './components/CurrentPrice';
import Prices from './components/Prices';
import TodaysPrices from './components/TodaysPrices';
import TomorrowsPrices from './components/TomorrowsPrices';
import GetToken from './components/GetToken';
import React, { useState, useEffect } from 'react';

function App() {
	const [currentPrice, setCurrentPrice] = useState(null);
	const [todaysPrices, setTodaysPrices] = useState(null);
	const [tomorrowsPrices, setTomorrowsPrices] = useState(null);
	const [separate, setSeparate] = useState(false);
	const [token, setToken] = useState(null);

	const doSeparation = () => {
		if (separate) {
			setSeparate(false);
		} else {
			setSeparate(true);
		}
	};

	const query = `query{
		viewer {
			homes {
				currentSubscription{
					priceInfo{
						current{
							total
							energy
							tax
							startsAt
						}
						today {
							total
							energy
							tax
							startsAt
						}
						tomorrow {
							total
							energy
							tax
							startsAt
						}
					}
				}
			}
		}
  }`;

	function handleData(data) {
		console.log(data);
		if (data) {
			setTodaysPrices(
				data['viewer']['homes'][0]['currentSubscription']['priceInfo']['today']
			);
			setTomorrowsPrices(
				data['viewer']['homes'][0]['currentSubscription']['priceInfo'][
					'tomorrow'
				]
			);
			setCurrentPrice(
				data['viewer']['homes'][0]['currentSubscription']['priceInfo'][
					'current'
				]
			);
		}
	}

	async function getPrices() {
		if (token) {
			try {
				console.log('Submitting');
				let response = fetch('https://api.tibber.com/v1-beta/gql', {
					method: 'POST',
					headers: {
						Authorization: 'Bearer ' + token,
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ query }),
				});
				response
					.then((res) => res.json())
					.then((data) => handleData(data['data']));
			} catch (error) {
				console.log(error);
			}
		}
	}

	const clearToken = () => {
		setToken(null);
		document.cookie = 'Token=';
	};

	useEffect(() => {
		if (document.cookie) {
			const cookieValue = document.cookie
				.split('; ')
				.find((row) => row.startsWith('Token'))
				.split('=')[1];
			if (cookieValue) {
				setToken(cookieValue);
			}
		}
	}, []);

	useEffect(() => {
		getPrices();
	}, [token]);

	useEffect(() => {
		console.log(currentPrice);
		console.log(todaysPrices);
		console.log(tomorrowsPrices);
	}, [currentPrice]);

	return (
		<div className='App'>
			{!token && <GetToken setToken={setToken} />}
			{token && currentPrice && <CurrentPrice currentPrice={currentPrice} />}
			{token && todaysPrices && tomorrowsPrices && !separate && (
				<Prices todaysPrices={todaysPrices} tomorrowsPrices={tomorrowsPrices} />
			)}
			{token && todaysPrices && separate && (
				<TodaysPrices todaysPrices={todaysPrices} />
			)}
			{token && tomorrowsPrices && separate && (
				<TomorrowsPrices tomorrowsPrices={tomorrowsPrices} />
			)}

			{token && tomorrowsPrices && tomorrowsPrices.length > 0 && (
				<button
					className={'separationButton'}
					onClick={() => {
						doSeparation();
					}}
				>
					{separate ? 'Join' : 'Separate'}
				</button>
			)}

			{token && (
				<button className={'separationButton'} onClick={() => clearToken()}>
					Clear token
				</button>
			)}
		</div>
	);
}

export default App;
