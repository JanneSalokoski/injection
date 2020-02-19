import React from 'react';
import ReactHoldButton from 'react-long-press';

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

const Item = (props) => {
    function longPress() {
        alert("Moi!");
    }

    return (
        <LongPressBtn ref={(button) => {this.holdButton = button;}}
            longPressEnd = {longPress}
            pressCallbackTimeout = {2000}
        >
            <div className={`Item ${props.type}`}>
                <span className="name">{props.name}</span>
                <span className="price">{props.price}</span>
            </div>
        </LongPressBtn>
    );
}

const ItemMenu = (props) => {
    return (
        <div className="ItemMenu">
            <Item type="soft" name="Kalja" price="1,50€"></Item>
            <Item type="hard" name="Lonkero" price="2,00€"></Item>
            <Item type="hard" name="Salmari" price="3,00€"></Item>
            <Item type="add" name="+"></Item>
        </div>
    );
}

const Main = (props) => {
	return (
		<div className="Main">
			<User />
            <ItemMenu></ItemMenu>
		</div>
	);
};

export default Main;
