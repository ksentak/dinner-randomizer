import { useState, useEffect } from 'react';
import Card from './components/Card';
import jsonData from './restaurants.json';
import './App.css';

const App = () => {
	const [foodData, setFoodData] = useState({});

	const loadData = () => {
		const restaurantJson = JSON.parse(JSON.stringify(jsonData));
		// console.log(restaurantJson.restaurants);
		setFoodData(restaurantJson.restaurants);
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
				<button className='btn btn-primary'>Randomize</button>
			</div>
			<div className='card-container'>
				{foodData.map((item) => {
					return (
						<Card
							key={item.id}
							restaurant={item.name}
							city={item.city}
							cuisine={item.cuisine}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default App;
