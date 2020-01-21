import React from "react";
import {
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Collapse
} from "shards-react";

export default class NavPage extends React.Component {
  constructor(props) {
    super(props);

    this.Dropdown = this.Dropdown.bind(this);
    this.NavBar = this.NavBar.bind(this);

    this.state = {
      dropdownOpen: false,
      collapseOpen: false
    };
  }

  Dropdown() {
    this.setState({
      ...this.state,
      ...{
        dropdownOpen: !this.state.dropdownOpen
      }
    });
  }

  NavBar() {
    this.setState({
      ...this.state,
      ...{
        collapseOpen: !this.state.collapseOpen
      }
    });
  }

  render() {
    return (
      <Navbar type="dark" expand="md" id="navShape">
        <NavbarToggler onClick={this.NavBar} />

        <Collapse open={this.state.collapseOpen} navbar id="navStyle">
          <Nav navbar>
            <NavLink active href="/">
              Main
            </NavLink>
            <NavLink active href="/resume">
              Resume
            </NavLink>
            <NavLink active href="/contact">
              Contact
            </NavLink>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
