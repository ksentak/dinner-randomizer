// import { useEffect } from 'react';

const Card = (props) => {
	return (
		<div className='card-component'>
			<div className='card col-md-3'>
				<div className='card-body'>
					<h3 className='card-title'>{props.restaurant}</h3>
					<div className='card-text'>
						<p className='city mb-0'>City: {props.city}</p>
						<p className='cuisine'>Cuisine: {props.cuisine}</p>
						<button className='btn btn-primary'>Add to list</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
