import React from 'react';

const Hello = ({ id, name, email }) => {
	return (
		<div className='bg-light-green dib br3 pa3 ma2 grow'>
			<img src={`https://robohash.org/${id}`} alt='robots' />
			<div>
				<h1>{name}</h1>
				<p>{email}</p>
			</div>
		</div>
	);
};

export default Hello;
