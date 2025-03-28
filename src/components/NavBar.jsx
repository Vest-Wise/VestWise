import React, { useState, useEffect } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';

function NavBar () {


return (
  <>        
   <div className="d-flex w-100">
    <Navbar bg="dark" variant="dark" expand="lg" className="w-100 position-fixed top-0" style={{ zIndex: 1030, width: '100vw' }}>
    <Container fluid>
      <Navbar.Brand href="#home">VestWise</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Holder</Nav.Link>
        <Nav.Link href="#pricing">Holder</Nav.Link>
      </Nav>
      </Navbar.Collapse>
    </Container>
    </Navbar>
   </div>
  </>
)
}

export default NavBar;