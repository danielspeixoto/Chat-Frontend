import React from 'react'
import NavBar from '../components/NavBar'

const Layout = (props) => {
	const style = {
		height: "100vh",
		display: "flex",
		flexFlow: "column"
	}	
	return (
		<div style={style}>
			<NavBar></NavBar>
			{ props.children }
		</div>

	)
}

export default Layout