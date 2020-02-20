import React from 'react';

const Autocomplete = (props) => {
	return (
		<div className="Autocomplete">autocomplete...</div>
	)
}

const Search = (props) => {
	function updateUser() {
		let userObject = {
			name: "Janne Salokoski",
			saldo: 60.00
		};

		props.setUser(userObject);
	}

	return (
		<div className="Search">
			<div className="SearchBox">
				<input type="text"></input><input type="button" value="Search" onClick={updateUser}></input>
			</div>
			<Autocomplete />
		</div>
	)
}

const Header = (props) => {
	return (
		<div className="Header">
			<Search setUser={props.setUser}/>
		</div>
	);
};

export default Header;
