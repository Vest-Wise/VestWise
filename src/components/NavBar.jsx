import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" style={{ height: '100vh', flexDirection: 'column' }}>
        <Container>
          <Navbar.Brand href="/" style={{ fontFamily: 'Oxygen', marginBottom: '1rem' }}>
            VestWise
          </Navbar.Brand>
          <Nav className="flex-column" style={{ width: '100%' }}>
            <Nav.Link href="/" style={{ color: 'white' }}>Home</Nav.Link>
            <Nav.Link href="/business" style={{ color: 'white' }}>Business</Nav.Link>
            <Nav.Link href="/stock-reward" style={{ color: 'white' }}>Stock Reward</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;