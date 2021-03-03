//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
// --- React ---
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// --- Material UI ---
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

//~~~~~~~~~~~~~~~~~
//~~~ COMPONENT ~~~
//~~~~~~~~~~~~~~~~~
const CreateRoomPage = (props) => {
	const [votesToSkip, setVotesToSkip] = useState(2);
	const [guestCanPause, setGuestCanPause] = useState(true);

	//--- State ---
	//--- Effects ---
	//--- Functions ---
	const handleVotesChange = (e) => {
		setVotesToSkip(e.target.value);
	};

	const handleGuestCanPause = (e) => {
		setGuestCanPause(e.target.value === 'true' ? true : false);
	};

	const onCreateRoom = () => {
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				votes_to_skip: votesToSkip,
				guest_can_pause: guestCanPause,
			}),
		};

		fetch('/api/create-room', requestOptions)
			.then((response) => response.json())
			.then((data) => props.history.push('/room/' + data.code));
	};
	//--- JSX ---
	return (
		<Grid container spacing={1}>
			<Grid item xs={12} align='center'>
				<Typography component='h4' variant='h4'>
					Create Room
				</Typography>
			</Grid>
			<Grid item xs={12} align='center'>
				<FormControl component='fieldset'>
					<FormHelperText>
						<div align='center'>Guest Control of Playback State</div>
					</FormHelperText>
					<RadioGroup row defaultValue='true' onChange={handleGuestCanPause}>
						<FormControlLabel
							value='true'
							control={<Radio color='primary' />}
							label='Play/Pause'
							labelPlacement='bottom'
						/>
						<FormControlLabel
							value='false'
							control={<Radio color='secondary' />}
							label='No Control'
							labelPlacement='bottom'
						/>
					</RadioGroup>
				</FormControl>
			</Grid>
			<Grid item xs={12} align='center'>
				<FormControl>
					<TextField
						required={true}
						type='number'
						defaultValue={2}
						value={votesToSkip}
						onChange={handleVotesChange}
						inputProps={{ min: 1, style: { textAlign: 'center' } }}
					/>
					<FormHelperText>
						<div align='center'>Votes Required to Skip Song</div>
					</FormHelperText>
				</FormControl>
			</Grid>
			<Grid item xs={12} align='center' onClick={onCreateRoom}>
				<Button color='primary' variant='contained'>
					Create A Room
				</Button>
			</Grid>
			<Grid item xs={12} align='center'>
				<Button color='secondary' variant='contained' to='/' component={Link}>
					Back
				</Button>
			</Grid>
		</Grid>
	);
};

//~~~~~~~~~~~~~~~
//~~~ EXPORTS ~~~
//~~~~~~~~~~~~~~~
export default CreateRoomPage;
