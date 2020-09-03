import React from 'react';

import { Navbar, Nav } from 'rsuite';

const NavbarComp = () => {
  return (
    <Navbar>
      <Navbar.Body>
        <Nav>
          <a href="/">
            <Nav.Item>Home</Nav.Item>
          </a>
          <a href="/passwords">
            <Nav.Item>Passwords</Nav.Item>
          </a>
          <a href="/register">
            <Nav.Item>Register</Nav.Item>
          </a>
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
};

export default NavbarComp;
