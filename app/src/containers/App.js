import React from 'react'
import {
	BrowserRouter,
	Route
  } from 'react-router-dom'
import Chat from '../pages/Chat'
import Layout from './Layout'

const App = (props) => {
	return (
		<BrowserRouter>  
			<Layout>
				<Route exact path="/" component={ Chat }/>
			</Layout>
		</BrowserRouter>
	)
}

export default App