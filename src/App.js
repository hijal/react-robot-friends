import React, { useState, useEffect } from 'react';
import CardList from './components/CardList';
import SeachBox from './components/SearchBox';
import './App.css'

function App() {
	const [users, setUsers] = useState([]);
	const [searchfield, setSearchfield] = useState('');

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((resp) => resp.json())
			.then((users) => setUsers(users));
	}, []);

	const onChangeHandler = (ev) => {
		setSearchfield(ev.target.value);
	};

	const filteredUsers = users.filter((robot) => {
		return robot.name.toLowerCase().includes(searchfield.toLowerCase());
	});

	if (users.length === 0) {
		return (
			<div className='tc'>
				<h1>Loading</h1>
			</div>
		);
	} else {
		return (
			<div className='tc'>
				<h1 className="f1">RoboFriends</h1>
				<SeachBox onSearchChange={onChangeHandler} />
				<CardList users={filteredUsers} />
			</div>
		);
	}
}

export default App;
