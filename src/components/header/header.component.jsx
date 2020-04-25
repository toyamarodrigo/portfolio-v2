import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
// import { ReactComponent as Logo } from '../../assets/logo.svg';

import { Navbar, Nav, Container } from 'react-bootstrap';
import './header.styles.scss';

const Header = () => (
  <div className="header">
    <Navbar bg="light" collapseOnSelect id="navbar">
      <Container>
          <Navbar.Brand>
            <Nav.Link className="navbar-brand" to="/">
              Website
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto justify-content-between">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
              <Nav.Link href="#Contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
);

export default Header;
