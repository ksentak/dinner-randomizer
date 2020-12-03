import { useState } from 'react';
import { Button, Card, CardContent, Paper } from '@material-ui/core';
import './RestaurantCard.css';

const RestaurantCard = (props) => {
	const [isSelected, changeIsSelected] = useState(false);
	const { restaurantArr, setRestaurantArr, name, city, cuisine } = props;

	const addRestaurant = () => {
		changeIsSelected(!isSelected);
		setRestaurantArr([...restaurantArr, name]);
		console.log(restaurantArr);
	};

	const removeRestaurant = () => {
		changeIsSelected(!isSelected);
		setRestaurantArr(restaurantArr.filter((restaurant) => restaurant !== name));
	};

	return (
		<div className='card-component'>
			<Paper elevation={1}>
				<Card variant='outlined'>
					<CardContent>
						<h3 className='card-title'>{name}</h3>
						<div className='card-text'>
							<p className='city mb-0'>City: {city}</p>
							<p className='cuisine'>Cuisine: {cuisine}</p>
							{isSelected ? (
								<Button
									className='btn-remove'
									variant='contained'
									onClick={removeRestaurant}
								>
									Remove from list
								</Button>
							) : (
								<Button
									className='btn-add'
									variant='contained'
									onClick={addRestaurant}
								>
									Add to list
								</Button>
							)}
						</div>
					</CardContent>
				</Card>
			</Paper>
		</div>
	);
};

export default RestaurantCard;
