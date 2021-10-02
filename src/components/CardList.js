import React from 'react';
import Card from './Card';

const CardList = ({ users }) => {
	const userList = users.map((user) => {
		return (
			<Card key={user.id} id={user.id} name={user.name} email={user.email} />
		);
	});
	return <div>{userList}</div>;
};

export default CardList;
