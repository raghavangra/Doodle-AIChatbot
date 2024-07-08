import React from "react";
import './App.css';
import Message from './Component/MessageBox/Message';
import Text from './Component/TextBox/TextBox';



function App() {
	
	return (
		<div className="App-container">
			<div className="App">
				{/*<h1>Welcome to Doodle!</h1>*/}
				<Message />
				<Text />
			</div>
		</div>
	);
}

export default App;
