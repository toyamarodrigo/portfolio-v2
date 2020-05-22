import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBCollapse,
  MDBContainer,
  MDBHamburgerToggler,
  MDBNavItem,
  MDBNavLink,
} from 'mdbreact';

import './header.styles.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (
      <div className="header transition-item">
        <MDBNavbar className="fixed-top shadow-none p-0" expand="md">
          <MDBContainer>
            <MDBNavbarBrand>
              <NavLink exact to="/">
                rt.codes
              </NavLink>
            </MDBNavbarBrand>
            <MDBHamburgerToggler
              className="d-block d-md-none"
              color="rgb(251,251,252)"
              id="navbarCollapse1"
              onClick={this.onClick}
            />
            <MDBCollapse
              isOpen={this.state.collapse}
              navbar
              id="navbarCollapse3"
            >
              <MDBNavbarNav right>
                <MDBNavItem className="link-items">
                  <NavLink
                    exact
                    activeClassName="nav-link--active"
                    className="nav-link"
                    to="/"
                  >
                    Home
                  </NavLink>
                </MDBNavItem>
                <MDBNavItem className="link-items">
                  <MDBNavLink
                    activeClassName="nav-link--active"
                    className="nav-link"
                    to="/about"
                  >
                    About
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem className="link-items">
                  <NavLink
                    activeClassName="nav-link--active"
                    className="nav-link"
                    to="/projects"
                  >
                    Projects
                  </NavLink>
                </MDBNavItem>
                <MDBNavItem className="link-items">
                  <NavLink
                    activeClassName="nav-link--active"
                    className="nav-link"
                    to="/contact"
                  >
                    Contact
                  </NavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
      </div>
    );
  }
}

export default withRouter(Header);
