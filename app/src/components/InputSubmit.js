import React from 'react'
import { LoadingButton } from './LoadingButton';
import { FormControl } from 'react-bootstrap';

const InputSubmit = (props) => {

	const containerStyle = {
		display: "flex",
		backgroundColor: "#5553",
		...props.style
	}

	const inputStyle = {
		marginRight: "1vh",
		width: "100%"
	}

	const onChange = (event) => {
		props.onChange(event.target.value)
	}

	return (
		<div style={containerStyle}>
			<FormControl 
				value={props.value}
				onChange={onChange}
				style={inputStyle}
				placeholder={props.placeholder}/>
			<LoadingButton
				isLoading={props.isLoading}
				onClick={props.onSubmit}
				>{props.isLoading? "Loading..." : "Send"}
			</LoadingButton>
		</div>
	)
}

export default InputSubmit