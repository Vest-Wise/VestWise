import React, { useState, useEffect } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';

function NavBar () {


return (
    <>        
     <div className="d-flex vh-100">
      <Navbar bg="dark" variant="dark" className="flex-column vh-100">
        <Container className="flex-column">
          <Navbar.Brand href="#home">VestWise</Navbar.Brand>
          <Nav className="flex-column">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Holder</Nav.Link>
            <Nav.Link href="#pricing">Holder</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     </div>
    </>
)
}

export default NavBar;