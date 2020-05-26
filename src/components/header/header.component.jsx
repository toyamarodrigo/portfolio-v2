import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBCollapse,
  MDBContainer,
  MDBNavbarToggler,
  MDBNavItem,
  MDBNavLink,
} from 'mdbreact';
import $ from 'jquery';

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
    // JQuery Close Hamburger when click outside of the element
    $(document).ready(function () {
      $(document).click(function (event) {
        var click = $(event.target);
        var _open = $('.navbar-collapse').hasClass('show');
        if (_open === true && !click.hasClass('navbar-toggler')) {
          $('.navbar-toggler').click();
        }
      });
    });
    return (
      <div
        className="header transition-item"
        ref={(node) => (this.node = node)}
      >
        <MDBNavbar dark className="fixed-top shadow-none p-0" expand="md">
          <MDBContainer>
            <MDBNavbarBrand>
              <NavLink exact to="/">
                rt.codes
              </NavLink>
            </MDBNavbarBrand>
            <MDBNavbarToggler
              className="d-block d-md-none"
              onClick={this.onClick}
            />
            <MDBCollapse isOpen={this.state.collapse} navbar>
              <MDBNavbarNav right>
                <MDBNavItem className="link-items">
                  <NavLink
                    exact
                    activeClassName="nav-link--active"
                    className="nav-link"
                    to="/"
                    onClick={() => this.onClick()}
                  >
                    Home
                  </NavLink>
                </MDBNavItem>
                <MDBNavItem className="link-items">
                  <MDBNavLink
                    activeClassName="nav-link--active"
                    className="nav-link"
                    to="/about"
                    onClick={() => this.onClick()}
                  >
                    About
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem className="link-items">
                  <NavLink
                    activeClassName="nav-link--active"
                    className="nav-link"
                    to="/projects"
                    onClick={() => this.onClick()}
                  >
                    Projects
                  </NavLink>
                </MDBNavItem>
                <MDBNavItem className="link-items">
                  <NavLink
                    activeClassName="nav-link--active"
                    className="nav-link"
                    to="/contact"
                    onClick={() => this.onClick()}
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
