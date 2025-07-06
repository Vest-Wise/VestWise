import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

function NavBar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" style={{ height: '100vh', flexDirection: 'column' }}>
        <Container>
          <Navbar.Brand href="/" style={{ fontFamily: 'Oxygen', marginBottom: '1rem' }}>
            VestWise
          </Navbar.Brand>
          <Nav className="flex-column" style={{ width: '100%' }}>
            <LinkContainer>
            <Nav.Link href="/" style={{ color: 'white' }}>Home</Nav.Link>
            </LinkContainer>

            <LinkContainer>
            <Nav.Link href="/business" style={{ color: 'white' }}>Chart</Nav.Link>
            </LinkContainer>

            <LinkContainer>
            <Nav.Link href="/stock-reward" style={{ color: 'white' }}>Stock Reward</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;