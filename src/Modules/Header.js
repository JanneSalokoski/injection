import React from 'react';

const Autocomplete = (props) => {
	return (
		<div class="Autocomplete">autocomplete...</div>
	)
}

const Search = (props) => {
	return (
		<div class="Search">
			<div class="SearchBox">
				<input type="text"></input><input type="button"></input>
			</div>
			<Autocomplete />
		</div>
	)
}

const Header = (props) => {
	return (
		<div class="Header">
			<Search />
		</div>
	);
};

export default Header;
