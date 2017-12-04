import React from 'react'
import InputSubmit from '../components/InputSubmit';
import MessageBox from '../components/MessageBox';
import { connect } from 'react-redux'
import { 
	startLoading,
	stopLoading,
	setMessage
} from '../actions/messageActions'
import { sendMessage } from '../api/message'

const Chat = (props) => {

	console.log("Layout being inflated")

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
			<MessageBox/>
			<InputSubmit 
				onChange={props.setMessage}
				onSubmit={sendMessage(props)}
				isLoading={props.messageStatus.isLoading}
				placeholder="Join this conversation"
				style={inputStyle} />
		</div>
	)
}

export default connect(
	state => ({
		messageStatus: state.message
	}),
	{ startLoading, stopLoading, setMessage }
) (Chat)