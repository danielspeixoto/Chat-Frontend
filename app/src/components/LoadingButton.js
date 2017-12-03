import React from 'react'
import { Button } from "react-bootstrap";

export const LoadingButton = (props) => {
	return (
		<Button 
			bsStyle="primary"
			onClick={() => onClick(props.onClick) }
			style={props.style}
			>{props.children}
		</Button>
	)
}

async function onClick (func) {
	//TODO Make LoadingButton disabled
	if(func) {
		await func()
	}
	//TODO Make LoadingButton enabled
}