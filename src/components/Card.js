import { useState } from 'react';
import './Card.css';

const Card = (props) => {
	const [isSelected, changeIsSelected] = useState(false);

	const selectRestaurant = () => {
		changeIsSelected(!isSelected);
	};

	return (
		<div className='card-component'>
			<div className='card'>
				<div className='card-body'>
					<h3 className='card-title'>{props.restaurant}</h3>
					<div className='card-text'>
						<p className='city mb-0'>City: {props.city}</p>
						<p className='cuisine'>Cuisine: {props.cuisine}</p>
						{isSelected ? (
							<button className='btn btn-danger' onClick={selectRestaurant}>
								Remove from list
							</button>
						) : (
							<button className='btn btn-primary' onClick={selectRestaurant}>
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
