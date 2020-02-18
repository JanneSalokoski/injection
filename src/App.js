import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Modules/Header.js';
import Main from './Modules/Main.js';
import Footer from './Modules/Footer.js';

import './Styles/App.css';

function App() {
  return (
    <div className="App">
		<Header />
	  	<Main />
	  	<Footer />
    </div>
  );
}

export default App;
