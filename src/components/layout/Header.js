import React, { useState, Fragment } from "react";
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  NavbarText,
  Button,
} from "reactstrap";
import { withRouter } from "react-router-dom";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  // Function.

  const toggle = () => setIsOpen(!isOpen);

  // handle logout.

  const handleLogout = () => {
    localStorage.removeItem("user");
    props.history.push("/");
  };

  return (
    <Fragment>
      <Navbar color="" expand="md">
        <NavbarBrand>
          <Button
            color=""
            className="btn-headerToggle"
            onClick={props.handleToggle}
          >
            <i className="fas  fa-align-left"></i>
          </Button>
          {/* <button
            type="button"
            id="sidebarCollapse"
            className="btn btn-info"
            onClick={props.handleToggle}
          >
            <i className="fas fa-align-left" ></i>
          </button> */}
          {/* <span className="text-white">
            <h3>Nira Systems</h3>
          </span> */}
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        {/* <Collapse isOpen={isOpen} navbar> */}
        <Nav className="mr-auto" navbar>
          <NavItem>
            {/* <NavLink href="/components/">Components</NavLink> */}
          </NavItem>

          <UncontrolledDropdown nav inNavbar>
            {/* <DropdownToggle nav>Options</DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu> */}
          </UncontrolledDropdown>
        </Nav>
        {/* </Collapse> */}
        <NavbarText onClick={handleLogout}>
          <i className="fas fa-2x fa-user-circle "></i>
        </NavbarText>
      </Navbar>
    </Fragment>
  );
};

export default withRouter(Header);
