import React from 'react'
import NavBar from '../components/NavBar'

const Layout = (props) => {
	const style = {
		paddingBottom: "16px"
	}	
	return (
		<div style={style}>
			<NavBar></NavBar>
			{ props.children }
		</div>

	)
}

export default Layout