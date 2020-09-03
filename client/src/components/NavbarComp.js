import React from 'react';

import { Navbar, Nav, Dropdown } from 'rsuite';

const NavbarComp = () => {
  return (
    <Navbar>
      <Navbar.Header>
        <a href="#" className="navbar-brand logo">
          RSUITE
        </a>
      </Navbar.Header>
      <Navbar.Body>
        <Nav>
          <Nav.Item>Home</Nav.Item>
          <Nav.Item>News</Nav.Item>
          <Nav.Item>Products</Nav.Item>
          <Dropdown title="About">
            <Dropdown.Item>Company</Dropdown.Item>
            <Dropdown.Item>Team</Dropdown.Item>
            <Dropdown.Item>Contact</Dropdown.Item>
          </Dropdown>
        </Nav>
        <Nav pullRight>
          <Nav.Item>Settings</Nav.Item>
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
};

export default NavbarComp;
