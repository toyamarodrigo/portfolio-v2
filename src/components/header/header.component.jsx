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
      <Navbar bg="dark" className="fixed-top">
        <Container>
          <Navbar.Brand href="#home">React</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/">
                <Nav.Link href="#Home">Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link href="#About">About</Nav.Link>
              </LinkContainer>
              <Nav.Link href="#Contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  </div>
);

export default Header;
