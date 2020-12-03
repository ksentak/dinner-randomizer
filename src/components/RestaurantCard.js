import { useState } from 'react';
import { Button, Card, CardContent } from '@material-ui/core';
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
			<Card variant='outlined'>
				<CardContent>
					<h3 className='card-title'>{name}</h3>
					<div className='card-text'>
						<p className='city mb-0'>City: {city}</p>
						<p className='cuisine'>Cuisine: {cuisine}</p>
						{isSelected ? (
							<Button
								className='btn-remove'
								color='secondary'
								variant='contained'
								onClick={removeRestaurant}
							>
								Remove from list
							</Button>
						) : (
							<Button
								className='btn-add'
								color='primary'
								variant='contained'
								onClick={addRestaurant}
							>
								Add to list
							</Button>
						)}
					</div>
					{/* </div> */}
				</CardContent>
			</Card>
			{/* </div> */}
		</div>
	);
};

export default RestaurantCard;
