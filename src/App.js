import { useState, useEffect } from 'react';
import Card from './components/Card';
import jsonData from './restaurants.json';
import './App.css';

const App = () => {
	const [foodData, setFoodData] = useState([]);
	const [randomArr, setRandomArr] = useState([]);
	const [chickenDinner, setChickenDinner] = useState('');

	// Loads in json restaurant data
	const loadData = () => {
		const restaurantJson = JSON.parse(JSON.stringify(jsonData));
		// console.log(restaurantJson.restaurants);
		setFoodData(restaurantJson.restaurants);
	};

	// Adds selected restaurants to list
	const printRandomArr = (arr) => {
		for (let i = 0; i < arr.length; i++) {
			return arr[i] + ', ';
		}
	};

	// Selects dinner
	const selectDinner = () => {
		const winnerWinner =
			randomArr[Math.floor(Math.random() * randomArr.length)];
		console.log(winnerWinner.toString());
		// setChickenDinner(winnerWinner);
	};

	useEffect(() => {
		loadData();
	}, []);

	return (
		<div className='App'>
			<div className='jumbotron jumbotron-fluid text-center'>
				<h1>Dinner Randomizer</h1>
				<p>
					Select potential food options and this app will automatically decide
					what you should have for dinner
				</p>
				<button className='btn btn-primary' onClick={selectDinner}>
					Randomize
				</button>
				<p>{chickenDinner}</p>
			</div>

			<div className='selected-list'>
				<h6>Your food options to be selected from:</h6>
				{/* <p>{printRandomArr(randomArr)}</p> */}
			</div>
			<div className='card-container'>
				<div className='row'>
					{foodData.map((item) => {
						return (
							<div className='col-sm-3'>
								<Card
									key={item.id}
									restaurant={item.name}
									city={item.city}
									cuisine={item.cuisine}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default App;
