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
} from 'mdbreact';

import './header.styles.scss';

class Header extends React.Component {
  state = {
    collapse1: false,
  };

  toggleSingleCollapse = (collapseId) => {
    this.setState({
      ...this.state,
      [collapseId]: !this.state[collapseId],
    });
  };

  render() {
    //const { activeItem } = this.state;
    return (
      <div className="header transition-item">
        <MDBNavbar className="fixed-top shadow-none" expand="md">
          <MDBContainer>
            <MDBNavbarBrand>
              <NavLink exact to="/">
                rt.codes
              </NavLink>
            </MDBNavbarBrand>
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
                  <NavLink
                    activeClassName="nav-link--active"
                    className="nav-link"
                    to="/about"
                  >
                    About
                  </NavLink>
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
