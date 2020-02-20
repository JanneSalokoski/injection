import React, {useState, useEffect} from 'react';
import moment from 'moment';

const User = (props) => {
	function addFunds() {
		props.setSaldo(props.user.saldo + 1);	
	};

	function removeFunds() {
		props.setSaldo(props.user.saldo - 1);

	};

	return (
		<div className="User">
			<div className="UserName button"><span className="label">Asiakas: </span><span className="name">{props.user.name}</span></div>
			<div className="AddFunds button" onClick={addFunds}>+</div>
			<div className="UserSaldo button" contentEditable={true}><span>{`${parseFloat(props.user.saldo).toFixed(2)}€`}</span></div>
			<div className="RemoveFunds button" onClick={removeFunds}>-</div>
		</div>
	);	
}


const LongPressHandler = (props) => {
	let state = {active: false};

	function touchStart(event) {
		event.preventDefault();
		state.active = true;
		setTimeout(() => {
			if (state.active) {
				props.onLongPress();
			}
		}, 1000);
	}

	function touchEnd(event) {
		event.preventDefault();
		state.active = false;
	}

	return (
		<div className="LongPressHandler"
			onTouchStart={touchStart}
			onTouchEnd={touchEnd}
		>
			{props.children}
		</div>
	);
}  


const Item = (props) => {
	const [price, setPrice] = useState(props.price);
	const [type, setType] = useState(props.type);
	const [name, setName] = useState(props.name);
	const [edit, setEdit] = useState(false);

	// NameEdit
	const [nameEditOpen, setNameEditOpen] = useState(false);
	function openNameEdit() {
		setNameEditOpen(true);
	}

	function closeNameEdit() {
		setNameEditOpen(false);
	}

	const [tempName, setTempName] = useState(name);
	function updateName(event) {
		setTempName(event.target.value);	
	}

	function saveName() {
		setName(tempName);
		setNameEditOpen(false);
	}

	const nameEdit = nameEditOpen ? (
		<div>
		<div className="curtain" onClick={closeNameEdit}></div>
		<div className="contextmenu">
			<div className="contextmenu_header">
				<div className="title">Muokkaa tuotteen nimeä</div>
				<div className="close" onClick={closeNameEdit}>X</div>
			</div>
			<div className="contextmenu_wrapper">
				<label>Nimi: </label>
				<input type="text" value={name} onChange={updateName}/>
				<input className="save" type="button" value="Tallenna" onClick={saveName} />
			</div>
		</div>
		</div>
	) : undefined;

	// PriceEdit
	const [priceEditOpen, setPriceEditOpen] = useState(false);
	function openPriceEdit() {
		setPriceEditOpen(true);
	}

	function closePriceEdit() {
		setPriceEditOpen(false);
	}

	const [tempPrice, setTempPrice] = useState(price);
	function updatePrice(event) {
		setTempPrice(event.target.value);	
	}

	function savePrice() {
		setPrice(tempPrice);
		setPriceEditOpen(false);
	}

	const priceEdit = priceEditOpen ? (
		<div>
		<div className="curtain" onClick={closePriceEdit}></div>
		<div className="contextmenu">
			<div className="contextmenu_header">
				<div className="title">Muokkaa tuotteen hintaa</div>
				<div className="close" onClick={closePriceEdit}>X</div>
			</div>
			<div className="contextmenu_wrapper">
				<label>Hinta: </label>
				<input type="text" value={tempPrice} onChange={updatePrice}/>
				<input className="save" type="button" value="Tallenna" onClick={savePrice} />
			</div>
		</div>
		</div>
	) : undefined;
	
	// TypeEdit
	const [typeEditOpen, setTypeEditOpen] = useState(false);
	function openTypeEdit() {
		setTypeEditOpen(true);
	}

	function closeTypeEdit() {
		setTypeEditOpen(false);
	}

	const [tempType, setTempType] = useState(type);
	function updateType(event) {
		setTempType(event.target.value);	
	}

	function saveType() {
		setType(tempType);
		setTypeEditOpen(false);
	}

	const typeEdit = typeEditOpen ? (
		<div>
		<div className="curtain" onClick={closeTypeEdit}></div>
		<div className="contextmenu">
			<div className="contextmenu_header">
				<div className="title">Muokkaa tuotteen tyyppiä</div>
				<div className="close" onClick={closeTypeEdit}>X</div>
			</div>
			<div className="contextmenu_wrapper">
				<label>Tyyppi: </label>
				<input type="text" value={type} onChange={updateType}/>
				<input className="save" type="button" value="Tallenna" onClick={saveType} />
			</div>
		</div>
		</div>
	) : undefined;


	// ConfirmRemove
	const [confirmRemoveOpen, setConfirmRemoveOpen] = useState(false);
	function openConfirmRemove() {
		setConfirmRemoveOpen(true);
	}

	function closeConfirmRemove() {
		setConfirmRemoveOpen(false);
	}

	function removeItem() {
		let newItems = props.items.filter(item => {
			console.log(item.name, props.name)
			if (item.name == props.name) {
				return false;
			}	
			
			return true;
		});

		props.setItems([])
		console.log(props.items);
	}

	const confirmRemove = confirmRemoveOpen ? (
		<div>
		<div className="curtain" onClick={closeConfirmRemove}></div>
		<div className="contextmenu remove">
			<div className="contextmenu_header">
				<div className="title">Poista tuote?</div>
				<div className="close" onClick={closeConfirmRemove}>X</div>
			</div>
			<div className="contextmenu_item" onClick={closeConfirmRemove}>Peruuta</div>
			<div className="contextmenu_item remove" onClick={removeItem}>Poista tuote</div>
		</div>
		</div>
	) : undefined;


	function editItem(event) {
		if (event) {
			event.preventDefault();
		}

		setEdit(true);	
	}

	function clickHandler(event) {
		event.preventDefault();
		props.setSaldo(props.user.saldo - price);
	}

	function closeCurtain() {
		setEdit(false);
	} 

	function handleClick(event) {
		closeCurtain();
	}

	let curtain = (edit) ? (
		<div>
		<div className="curtain" onClick={handleClick}></div>
		<div className="contextmenu">
			<div className="contextmenu_header">
				<div className="title">{`muokkaa tuotetta`}</div>
				<div className="close" onClick={closeCurtain}>X</div>
			</div>
			<div className="contextmenu_item" onClick={openNameEdit}>Muuta nimeä</div>
			<div className="contextmenu_item" onClick={openPriceEdit}>Muuta hintaa</div>
			<div className="contextmenu_item" onClick={openTypeEdit}>Muuta tyyppiä</div>
			<div className="contextmenu_item remove" onClick={openConfirmRemove}>Poista tuote</div>
		</div>
		</div>
	) : undefined;

    return (
		<div>	
		<LongPressHandler onLongPress={editItem}>
            <div className={`Item ${type}`} onClick={clickHandler} onContextMenu={editItem}>
                <span className="name">{name}</span>
                <span className="price">{`${parseFloat(price).toFixed(2)}€`}</span>
            </div>
		</LongPressHandler>
		{curtain}

		{nameEdit}
		{priceEdit}
		{typeEdit}
		{confirmRemove}
		</div>
    );
}

const AddItem = (props) => {

	const [itemAddDialogOpen, setItemAddDialogOpen] = useState(false);

	function openItemAddDialog() {
		setItemAddDialogOpen(true);
	}

	function closeItemAddDialog() {
		setItemAddDialogOpen(false);
	}

	const [name, setName] = useState("");
	const [price, setPrice] = useState(0);
	const [type, setType] = useState("");

	function updateName(event) {
		setName(event.target.value);
	}

	function updatePrice(event) {
		setPrice(event.target.value);
	}

	function updateType(event) {
		setType(event.target.value);
	}

	function createNewItem() {
		let item = {
			name: name,
			price: price,
			type: type
		}

		props.items.push(item);
		props.setItems(props.items);
		console.log(props.items)
		closeItemAddDialog();
	}

	const itemAddDialog = itemAddDialogOpen ? (
		<div>
		<div className="curtain" onClick={closeItemAddDialog}></div>
		<div className="contextmenu remove">
			<div className="contextmenu_header">
				<div className="title">Uusi tuote</div>
				<div className="close" onClick={closeItemAddDialog}>X</div>
			</div>
			<div className="contextmenu_wrapper">
				<label>Nimi: </label>
				<input type="text" value={name} onChange={updateName}/>
			</div>
			<div className="contextmenu_wrapper">
				<label>Hinta: </label>
				<input type="text" value={price} onChange={updatePrice}/>
			</div>
			<div className="contextmenu_wrapper">
				<label>Tyyppi: </label>
				<input type="text" onChange={updateType}/>
				<input className="save" type="button" value="Tallenna" onClick={createNewItem} />
			</div>
		</div>
		</div>
	) : undefined;

	function clickHandler() {
		openItemAddDialog();
	}

	return (
		<div>
		<div className="Item" onClick={clickHandler}>
			<span className="name">+</span>
		</div>
		{itemAddDialog}
		</div>
	);
}

const ItemMenu = (props) => {
	function createItems(elements) {
		return elements.map(element => (
			<Item type={element.type}
				name={element.name}
				price={element.price}
				user={props.user}
				setSaldo={props.setSaldo}
				items={props.items}
				setItems={props.setItems}
				createItems={createItems}
				key={element.name}
			/ >
		));
	}
	
	const [items, setItems] = useState(createItems(props.items));
	function updateItems(items) {
		setItems(createItems(items));
	}

    return (
        <div className="ItemMenu">
			{items}
            <AddItem type="add" name="+" items={props.items} setItems={updateItems}></AddItem>
        </div>
    );
}

const Main = (props) => {
	return (
		<div className="Main">
			<User user={props.user} setSaldo={props.setSaldo}/>
            <ItemMenu user={props.user} setSaldo={props.setSaldo} items={props.items} setItems={props.setItems}></ItemMenu>
		</div>
	);
};

export default Main;
