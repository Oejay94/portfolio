import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import './NavBar.css'
function NavPage() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>My Portfolio</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Item>
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/resume">
            Resume
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
}
export default NavPage;
