import { useState, useEffect } from 'react';
import RestaurantCard from './components/RestaurantCard';
import jsonData from './restaurants.json';
import { Backdrop, Button, CircularProgress, Grid } from '@material-ui/core';
import './App.css';

const App = () => {
	const [foodData, setFoodData] = useState([]);
	const [restaurantArr, setRestaurantArr] = useState([]);
	const [chickenDinner, setChickenDinner] = useState('');
	const [open, setOpen] = useState(false);

	// Loads in json restaurant data
	const loadData = () => {
		const restaurantJson = JSON.parse(JSON.stringify(jsonData));
		setFoodData(restaurantJson.restaurants);
	};

	// Displays selected restaurants
	const printRestaurantArr = (arr) => {
		const restaurantArr = arr.join(', ');
		return restaurantArr;
	};

	// Selects dinner from restaurantArr
	const selectDinner = async () => {
		await setOpen(true);
		try {
			setTimeout(() => setOpen(false), 1500);
		} catch (err) {
			console.log(err);
		} finally {
			setTimeout(() => {
				const winnerWinner =
					restaurantArr[Math.floor(Math.random() * restaurantArr.length)];
				console.log(winnerWinner);
				setChickenDinner(winnerWinner);
			}, 2000);
		}
	};

	useEffect(() => {
		loadData();
	}, []);

	return (
		<div className='App'>
			<div className='main'>
				<h1>Dinner Randomizer</h1>
				<h4>
					Select restaurannts you are interested in, and this app will
					automatically decide where you should eat
				</h4>
				<Button
					className='btn-randomize'
					color='primary'
					variant='contained'
					onClick={selectDinner}
				>
					Randomize
				</Button>
				<p>{chickenDinner}</p>
				<Backdrop open={open}>
					<CircularProgress color='white' />
				</Backdrop>
			</div>
			<div className='selected-list'>
				<p>Restaurants to be selected from:</p>
				<p> {printRestaurantArr(restaurantArr)}</p>
			</div>
			<Grid container spacing={2} direction='row'>
				{foodData.map((item) => {
					return (
						<Grid item sm={3} xs={12} key={item.id}>
							<RestaurantCard
								key={item.id}
								name={item.name}
								city={item.city}
								cuisine={item.cuisine}
								restaurantArr={restaurantArr}
								setRestaurantArr={setRestaurantArr}
							/>
						</Grid>
					);
				})}
			</Grid>
		</div>
	);
};

export default App;
