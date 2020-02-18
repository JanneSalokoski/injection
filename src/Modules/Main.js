import React from 'react';

const User = (props) => {
	return (
		<div class="User">
			<div class="UserName button"><span>Janne Salokoski</span></div>
			<div class="AddFunds button">+</div>
			<div class="UserSaldo button" contentEditable={true}><span>0,00€</span></div>
			<div class="RemoveFunds button">-</div>
		</div>
	);	
}

const Main = (props) => {
	return (
		<div class="Main">
			<User />
		</div>
	);
};

export default Main;
