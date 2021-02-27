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

// --- Components ---
import { CreateRoomPage, RoomJoinPage } from './index';

//~~~~~~~~~~~~~~~~~
//~~~ COMPONENT ~~~
//~~~~~~~~~~~~~~~~~
const HomePage = () => {
	//--- State ---
	//--- Effects ---
	//--- Functions ---
	//--- JSX ---
	return (
		<Router>
			<Switch>
				<Route exact path='/'>
					<p>this is the homepage</p>
				</Route>
				<Route path='/join' component={RoomJoinPage}></Route>
				<Route path='/create' component={CreateRoomPage}></Route>
			</Switch>
		</Router>
	);
};

//~~~~~~~~~~~~~~~
//~~~ EXPORTS ~~~
//~~~~~~~~~~~~~~~
export default HomePage;
