import React from 'react'
import { LoadingButton } from './LoadingButton';

const InputSubmit = (props) => {

	const containerStyle = {
		width: "auto",
		display: "flex",
		...props.style
	}

	const inputStyle = {
		width: "100%",
		marginRight: "1vh"
	}

	const buttonStyle = {
		float: "right"
	}

	return (
		<div style={containerStyle}>
			<input 
				style={inputStyle}
				placeholder="Start a conversation"
				>
				</input>
			<LoadingButton 
				style={buttonStyle}
				>Send
			</LoadingButton>
		</div>
	)
}

export default InputSubmit