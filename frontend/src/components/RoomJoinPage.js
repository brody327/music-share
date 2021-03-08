//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
import React, { useState } from 'react';

// --- Material UI ---
import { TextField, Button, Grid, Typography } from '@material-ui/core';

//~~~~~~~~~~~~~~~~~
//~~~ COMPONENT ~~~
//~~~~~~~~~~~~~~~~~
const RoomJoinPage = () => {
	//--- State ---
	const [roomCode, setRoomCode] = useState('');
	const [error, setError] = useState('');

	//--- Effects ---
	//--- Functions ---
	//--- JSX ---
	return (
		<Grid container spacing={1} alignItems='center'>
			<Grid item xs={12}>
				<Typography variant='h4' component='h4'>
					Join a Room
				</Typography>
			</Grid>
			<Grid item xs={12}>
				<TextField
					error={error}
					label='Code'
					placeholder='Enter a room code...'
					value={roomCode}
					helperText={error}
					variant='outlined'
				/>
			</Grid>
		</Grid>
	);
};

//~~~~~~~~~~~~~~~
//~~~ EXPORTS ~~~
//~~~~~~~~~~~~~~~
export default RoomJoinPage;
