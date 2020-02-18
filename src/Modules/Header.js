import React from 'react';

const Autocomplete = (props) => {
	return (
		<div className="Autocomplete">autocomplete...</div>
	)
}

const Search = (props) => {
	return (
		<div className="Search">
			<div className="SearchBox">
				<input type="text"></input><input type="button"></input>
			</div>
			<Autocomplete />
		</div>
	)
}

const Header = (props) => {
	return (
		<div className="Header">
			<Search />
		</div>
	);
};

export default Header;
