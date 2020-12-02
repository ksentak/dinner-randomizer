import { useState } from 'react';
import './Card.css';

const Card = (props) => {
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
			<div className='card'>
				<div className='card-body'>
					<h3 className='card-title'>{name}</h3>
					<div className='card-text'>
						<p className='city mb-0'>City: {city}</p>
						<p className='cuisine'>Cuisine: {cuisine}</p>
						{isSelected ? (
							<button className='btn btn-danger' onClick={removeRestaurant}>
								Remove from list
							</button>
						) : (
							<button className='btn btn-primary' onClick={addRestaurant}>
								Add to list
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
