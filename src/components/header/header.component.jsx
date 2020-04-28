import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
// import { ReactComponent as Logo } from '../../assets/logo.svg';

import { Navbar, Nav, Container } from 'react-bootstrap';
import './header.styles.scss';

const Header = () => (
  <div className="header">
    <div
      data-spy="scroll"
      data-target="#navbarResponsive"
      className="justify-content-center"
    >
      <Navbar bg="transparent" className="fixed-top" expand="lg">
        <Container>
          <Navbar.Brand href="/">rt.codes</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <div className="link-items">
                <LinkContainer to="/">
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>
              </div>
              <div className="link-items">
                <LinkContainer to="/about">
                  <Nav.Link>About</Nav.Link>
                </LinkContainer>
              </div>
              <div className="link-items">
                <Nav.Link href="#Contact">Contact</Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  </div>
);

export default Header;
