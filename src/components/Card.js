import { useState } from 'react';
import './Card.css';

const Card = (props) => {
	const [isSelected, changeIsSelected] = useState(false);
	// const [selectedArr, setSelectedArr] = useState([]);

	// const selectRestaurant = () => {
	// 	changeIsSelected(!isSelected);

	// 	for (let i = 0; i < selectedArr.length; i++) {
	// 		if (selectedArr[i] !== props.restaurant) {
	// 			setSelectedArr(selectedArr.push(props.restaurant));
	// 		} else if (selectedArr[i] === props.restaurant) {
	// 			setSelectedArr(selectedArr.splice(i, 1));
	// 		}
	// 	}
	// };

	const addRestaurant = () => {
		// const [randomArr, setRandomArr] = props;
		changeIsSelected(!isSelected);
		props.setRandomArr([...props.randomArr, props.name]);
		// console.log(props.name);
		console.log(props.randomArr);
	};

	const removeRestaurant = () => {
		changeIsSelected(!isSelected);
		// console.log(props.name);
		props.setRandomArr(
			props.randomArr.filter((restaurant) => restaurant !== props.name)
		);
		console.log(props.randomArr);
		// for (let i = 0; i < props.randomArr; i++) {
		// 	if (props.randomArr[i] === props.name) {
		// 		props.setRandomArr(props.randomArr.splice(i, 1));
		// 	}
		// }
	};

	return (
		<div className='card-component'>
			<div className='card'>
				<div className='card-body'>
					<h3 className='card-title'>{props.name}</h3>
					<div className='card-text'>
						<p className='city mb-0'>City: {props.city}</p>
						<p className='cuisine'>Cuisine: {props.cuisine}</p>
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
