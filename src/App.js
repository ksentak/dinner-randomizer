import { useState, useEffect } from 'react';
import Card from './components/Card';
import jsonData from './restaurants.json';
import './App.css';

const App = () => {
	const [foodData, setFoodData] = useState([]);
	const [restaurantArr, setRestaurantArr] = useState([]);
	const [chickenDinner, setChickenDinner] = useState('');

	// Loads in json restaurant data
	const loadData = () => {
		const restaurantJson = JSON.parse(JSON.stringify(jsonData));
		setFoodData(restaurantJson.restaurants);
	};

	// Displays selected restaurants on screen
	const printRestaurantArr = (arr) => {
		const restaurantArr = arr.join(', ');
		return restaurantArr;
	};

	// Selects dinner from restaurantArr
	const selectDinner = () => {
		const winnerWinner =
			restaurantArr[Math.floor(Math.random() * restaurantArr.length)];
		console.log(winnerWinner);
		setChickenDinner(winnerWinner);
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
				<p> {printRestaurantArr(restaurantArr)}</p>
			</div>
			<div className='card-container'>
				<div className='row'>
					{foodData.map((item) => {
						return (
							<div className='col-sm-3' key={item.id}>
								<Card
									key={item.id}
									name={item.name}
									city={item.city}
									cuisine={item.cuisine}
									restaurantArr={restaurantArr}
									setRestaurantArr={setRestaurantArr}
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
