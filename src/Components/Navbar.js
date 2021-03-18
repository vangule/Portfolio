import React from "react";
import {Navbar, Nav} from "react-bootstrap";
import '../Stylesheets/App.css';
import {NavLink} from 'react-router-dom';

function Navbars(){
  return(
    <Navbar expand="lg" className="navbar" sticky="top">
    <Nav className="mr-auto menu_bar" id="menu_small">
      <div className="empty_space"></div>
      <NavLink exact activeClassName="active_class" to="/">HOME</NavLink>
      <NavLink exact activeClassName="active_class" to="About">ABOUT</NavLink>
      <NavLink exact activeClassName="active_class" to="Project">PORTFOLIO</NavLink>
      <NavLink exact activeClassName="active_class" to="Blog">BLOG</NavLink>
      <NavLink exact activeClassName="active_class" to="Contact">CONTACT</NavLink>
    </Nav>
</Navbar>
  );
}

export default Navbars;