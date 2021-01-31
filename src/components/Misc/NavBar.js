import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavPage() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">Portfolio</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/resume">Resume</Nav.Link>
      </Nav>
    </Navbar>
  );
}
export default NavPage;
