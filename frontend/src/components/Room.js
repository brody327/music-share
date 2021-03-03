//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
import React, { useState, useEffect } from 'react';

// --- Components ---
import { CreateRoomPage, RoomJoinPage } from './index';

//~~~~~~~~~~~~~~~~~
//~~~ COMPONENT ~~~
//~~~~~~~~~~~~~~~~~
const Room = (props) => {
	//--- State ---
	const [votesToSkip, setVotesToSkip] = useState(2);
	const [guestCanPause, setGuestCanPause] = useState(false);
	const [isHost, setIsHost] = useState(false);
	const [roomCode, setRoomCode] = useState(props.match.params.roomCode);

	//--- Effects ---
	useEffect(() => getRoomDetails(), []);

	//--- Functions ---

	const getRoomDetails = () => {
		console.log(roomCode);
		fetch('/api/get-room' + '?code=' + roomCode)
			.then((response) => response.json())
			.then((data) => {
				setVotesToSkip(data.votes_to_skip);
				setGuestCanPause(data.guest_can_pause);
				setIsHost(data.is_host);
			});
	};
	//--- JSX ---
	return (
		<div>
			<h1>Votes to Skip: {votesToSkip}</h1>
			<h1>Can Pause? {guestCanPause === false ? 'False' : 'True'}</h1>
			<h1>Is Host? {isHost === false ? 'False' : 'True'}</h1>
			<h3>Room Code: {roomCode}</h3>
		</div>
	);
};

//~~~~~~~~~~~~~~~
//~~~ EXPORTS ~~~
//~~~~~~~~~~~~~~~
export default Room;
