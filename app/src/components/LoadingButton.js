import React from 'react'
import { Button } from "react-bootstrap"

export const LoadingButton = (props) => {

	return (
		<Button 
			disabled={props.isLoading}
			bsStyle="primary"
			onClick={() => props.onClick()}
			style={props.style}
			>{props.children}
		</Button>
	)
}