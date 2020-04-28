import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav } from 'react-bootstrap';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBCollapse,
  MDBContainer,
  MDBHamburgerToggler,
  MDBNavItem,
} from 'mdbreact';

// import { ReactComponent as Logo } from '../../assets/logo.svg';
import './header.styles.scss';

class Header extends React.Component {
  state = {
    collapse1: false,
    collapseID: 'navbarCollapse3',
  };

  toggleCollapse = (collapseID) => () => {
    this.setState((prevState) => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : '',
    }));
  };

  toggleSingleCollapse = (collapseId) => {
    this.setState({
      ...this.state,
      [collapseId]: !this.state[collapseId],
    });
  };

  render() {
    return (
      <div className="header">
        <div
          data-spy="scroll"
          data-target="#navbarResponsive"
          className="justify-content-center"
        >
          <MDBNavbar className="fixed-top" expand="md">
            <MDBContainer>
              <MDBNavbarBrand href="/">rt.codes</MDBNavbarBrand>
              <MDBHamburgerToggler
                className="d-block d-md-none"
                color="rgb(251,251,252)"
                id="hamburger1"
                onClick={() => this.toggleSingleCollapse('collapse1')}
              />
              <MDBCollapse
                isOpen={this.state.collapse1}
                navbar
                id="navbarCollapse3"
              >
                <MDBNavbarNav right>
                  <MDBNavItem className="link-items">
                    <LinkContainer to="/">
                      <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                  </MDBNavItem>
                  <MDBNavItem className="link-items">
                    <LinkContainer to="/about">
                      <Nav.Link>About</Nav.Link>
                    </LinkContainer>
                  </MDBNavItem>
                  <MDBNavItem className="link-items">
                    <LinkContainer to="/projects">
                      <Nav.Link>Projects</Nav.Link>
                    </LinkContainer>
                  </MDBNavItem>
                  <MDBNavItem className="link-items">
                    <Nav.Link href="#Contact">Contact</Nav.Link>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>
        </div>
      </div>
    );
  }
}

export default Header;
