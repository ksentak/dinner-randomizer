import { useState, useEffect } from 'react';
import Card from './components/Card';
import jsonData from './restaurants.json';
import './App.css';

const App = () => {
	const [foodData, setFoodData] = useState([]);
	const [randomArr, setRandomArr] = useState([]);
	const [chickenDinner, setChickenDinner] = useState('');
	// const [isSelected, changeIsSelected] = useState(false);
	// const [selectedArr, setSelectedArr] = useState([]);

	// for (let i = 0; i < selectedArr.length; i++) {
	// 	if (selectedArr[i] !== props.restaurant) {
	// 		setSelectedArr(selectedArr.push(props.restaurant));
	// 	} else if (selectedArr[i] === props.restaurant) {
	// 		setSelectedArr(selectedArr.splice(i, 1));
	// 	}
	// }
	// };

	// const selectRestaurant = (item) => {
	// 	setRandomArr(...randomArr, item.name);
	// 	console.log(randomArr);
	// };

	// Loads in json restaurant data
	const loadData = () => {
		const restaurantJson = JSON.parse(JSON.stringify(jsonData));
		// console.log(restaurantJson.restaurants);
		setFoodData(restaurantJson.restaurants);
	};

	// Displays selected restaurants on screen
	const printRestaurantArr = (arr) => {
		const restaurantArr = arr.join(', ');
		return restaurantArr;
	};

	// Selects dinner from randomArr
	const selectDinner = () => {
		const winnerWinner =
			randomArr[Math.floor(Math.random() * randomArr.length)];
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
				<p> {printRestaurantArr(randomArr)}</p>
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
									randomArr={randomArr}
									setRandomArr={setRandomArr}
									// onClick={(item) => {
									// 	setRandomArr(...randomArr, item.name);
									// 	console.log(randomArr);
									// }}
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
