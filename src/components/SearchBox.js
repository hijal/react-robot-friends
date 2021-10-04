import React from "react";

function SearchBox({ onSearchChange }) {
	return (
		<div className='pa2'>
			<input
				className='pa3 ba b--green bg-lightest-blue'
				type='search'
				onChange={onSearchChange}
				placeholder='search an user'
			/>
		</div>
	);
}

export default SearchBox;
