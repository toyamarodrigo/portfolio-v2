import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";

import "./header.styles.scss";

const Header = () => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>
    <div className='options'>
      <Link to='/about' className='option'>
        ABOUT
      </Link>
      <Link to='/contact' className='option'>
        CONTACT
      </Link>
    </div>
  </div>
);

export default Header;
