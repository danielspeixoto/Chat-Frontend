import React from 'react'
import InputSubmit from '../components/InputSubmit';
import MessageBox from '../components/MessageBox';
import { connect } from 'react-redux'
import { 
	startLoading,
	stopLoading,
	setMessage,
	onMessageReceived
} from '../actions/messageActions'
import { sendMessage } from '../api/message'

const Chat = (props) => {

	props.message.socket.onmessage = function(event) {
		props.onMessageReceived(event.data)
	}

	const style = {
		width: "100%",
		display: "flex",
		flexFlow: "column",
		flexGrow: "1",
		...props.style
	}

	const inputStyle = {
		padding: "8px"
	}

	return (
		<div style={style}>
			<MessageBox
				messages={props.message.messages}/>
			<InputSubmit 
				value={props.message.message}
				onChange={props.setMessage}
				onSubmit={sendMessage(props)}
				isLoading={props.message.isLoading}
				placeholder="Join this conversation"
				style={inputStyle}/>
		</div>
	)
}

export default connect(
	state => ({
		message: state.message
	}),
	{ startLoading, stopLoading, setMessage, onMessageReceived }
) (Chat)