//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect,
} from 'react-router-dom';

//--- Components ---
import { HomePage, CreateRoomPage, RoomJoinPage } from './index';

//~~~~~~~~~~~~~~~~~
//~~~ COMPONENT ~~~
//~~~~~~~~~~~~~~~~~
const App = () => {
	//--- State ---
	//--- Effects ---
	//--- Functions ---
	//--- JSX ---
	return (
		<div>
			<HomePage />
		</div>
	);
};

//~~~~~~~~~~~~~~~
//~~~ EXPORTS ~~~
//~~~~~~~~~~~~~~~
export default App;
