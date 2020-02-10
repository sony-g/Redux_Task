import React, { Component } from 'react'
import {Navbar,Button,Form,Nav,FormControl,NavDropdown} from 'react-bootstrap'

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/">
  <img className="image" src="https://banner2.cleanpng.com/20180720/zia/kisspng-react-javascript-library-web-development-vue-js-funding-icon-5b51604fbf7995.0841849115320597277843.jpg"></img>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="/userlist">User List</Nav.Link>
      
      </Nav>
   
  </Navbar.Collapse>
</Navbar>

             </div>
        )
    }
}
