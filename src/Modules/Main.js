import React from 'react';

const User = (props) => {
	return (
		<div className="User">
			<div className="UserName button"><span>Janne Salokoski</span></div>
			<div className="AddFunds button">+</div>
			<div className="UserSaldo button" contentEditable={true}><span>0,00€</span></div>
			<div className="RemoveFunds button">-</div>
		</div>
	);	
}

const Main = (props) => {
	return (
		<div className="Main">
			<User />
		</div>
	);
};

export default Main;
