import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SeachBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

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

	const content = (
		<div className='tc'>
			<h1 className='f1'>RoboFriends</h1>
			<SeachBox onSearchChange={onChangeHandler} />
			<Scroll>
				<CardList users={filteredUsers} />
			</Scroll>
		</div>
	);

	const loading = (
		<div className='tc'>
			<h1>Loading</h1>
		</div>
	);

	return !users.length ? loading : content;
}

export default App;
