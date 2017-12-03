import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const MessageBox = (props) => {

	const style = {
		height: "0", //TODO Find better way
		flexGrow: "1",
		marginRight: "16px",
		marginLeft: "16px",
		marginBottom: "0px",
		paddingTop: "8px",
		paddingBottom: "8px",
		overflow: "auto",
		...props.style
	}

	return(
		<ListGroup style = {style}>
			<ListGroupItem>1: Falou oi</ListGroupItem>
			<ListGroupItem>1: Falou oi</ListGroupItem>
			<ListGroupItem>1: Falou oi</ListGroupItem>
			<ListGroupItem>1: Falou oi</ListGroupItem>
			<ListGroupItem>1: Falou oi</ListGroupItem>
			<ListGroupItem>1: Falou oi</ListGroupItem>
			<ListGroupItem>1: Falou oi</ListGroupItem>
			<ListGroupItem>1: Falou oi</ListGroupItem>
			<ListGroupItem>1: Falou oi</ListGroupItem>
			<ListGroupItem>1: Falou oi</ListGroupItem>
			<ListGroupItem>1: Falou oi</ListGroupItem>
			<ListGroupItem>1: Falou oi</ListGroupItem>
			<ListGroupItem>1: Falou oi</ListGroupItem>
			<ListGroupItem>1: Falou oi</ListGroupItem>
			<ListGroupItem>1: Falou oi</ListGroupItem>
			<ListGroupItem>1: Falou oi</ListGroupItem>
			<ListGroupItem>1: Falou oi</ListGroupItem>
			<ListGroupItem>1: Falou oi</ListGroupItem>
			<ListGroupItem>1: Falou oi</ListGroupItem>
			<ListGroupItem>1: Falou oi</ListGroupItem>
			<ListGroupItem>1: Falou oi</ListGroupItem>
			<ListGroupItem>1: Falou oi</ListGroupItem>
			
		</ListGroup>
	)
}

export default MessageBox