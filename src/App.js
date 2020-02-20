import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Modules/Header.js';
import Main from './Modules/Main.js';
import Footer from './Modules/Footer.js';

import './Styles/App.css';

function App() {
	const [user, setUser] = useState({name: "", saldo: 0});

	const [items, setItems] = useState([
		{
			name: "Kalja",
			price: 2,
			type: "soft"
		}
	])

	function updateItems(newItems) {
		console.log(newItems);
		setItems(newItems);
		console.log(items);
	}

	function setSaldo(n) {
		let u = {...user};
		u.saldo = n;
		setUser(u);
	}

  return (
    <div className="App">
		<Header setUser={setUser}/>
	  	<Main user={user} setSaldo={setSaldo} items={items} setItems={updateItems}/>
	  	<Footer user={user}/>
    </div>
  );
}

export default App;
