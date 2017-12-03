import React from 'react'
import {
	Navbar, NavbarBrand
} from 'react-bootstrap'

const NavBar = (props) => {

	const style = {
		marginBottom: "0px"
	}

	return (
		<Navbar style={style}>
			<Navbar.Header>
				<NavbarBrand>
					Welcome to my Chat App
				</NavbarBrand>
			</Navbar.Header>
		</Navbar>
	)
}

export default NavBar