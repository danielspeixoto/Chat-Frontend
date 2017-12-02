import React from 'react'
import ReactDOM from 'react-dom'

import {
   Navbar,
   Jumbotron, 
   Button
} from 'react-bootstrap';

ReactDOM.render(
    <div>
      <Navbar/>
      <Jumbotron>
        <Button bsStyle="primary">Send</Button>
      </Jumbotron>
    </div>,
    document.getElementById('root')
  )
  