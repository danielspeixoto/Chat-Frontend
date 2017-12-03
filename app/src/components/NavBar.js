import React from 'react'
import {
	Navbar, NavbarBrand
} from 'react-bootstrap'

const NavBar = (props) => {
	return (
		<Navbar>
			<Navbar.Header>
				<NavbarBrand>
					<a href="#">Welcome to my Chat App</a> 
				</NavbarBrand>
			</Navbar.Header>
		</Navbar>
	)
}

export default NavBar