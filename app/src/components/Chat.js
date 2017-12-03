import React from 'react'
import InputSubmit from './InputSubmit';
import { Row, Col, Grid } from 'react-bootstrap';

const Chat = (props) => {

	const style = {
		width: "90vw",
		height: "90vh",
		margin: "auto",
		padding: "2vh",
		display: "flex",
		flexFlow: "column",
		borderColor: "gray",
		borderStyle: "solid",
		borderWidth: "1px"
	}

	const chatBoxStyle = {
		width: "100%",
		margin: "auto",
		marginBottom: "1vh",
		flexGrow: "1",
		backgroundColor: "lightslategray"
	}
	
	return (
		<div style={style}>
			<div style={chatBoxStyle}>
				<ul>{props.messages}</ul>
			</div>
			<InputSubmit/>
		</div>
	)
}

export default Chat