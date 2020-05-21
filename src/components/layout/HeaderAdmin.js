import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

import { logout } from "../../utils/logout";

import "../../css/layout/Header.css";

class HeaderAdmin extends Component {
  handleSubmit = (e) => {
    console.log("log");
    e.preventDefault();
  };

  render() {
    return (
      <>
        <div>
          <Navbar
            className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-end"
            light
            expand="md"
          >
            <NavbarBrand href="/">
              {" "}
              Forever<em className="text-success">BIO </em>
            </NavbarBrand>
            <NavbarToggler />
            <Collapse navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink href="/products" className="nav-element">
                    {" "}
                    Produits{" "}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/users" className="nav-element">
                    Utilisateurs{" "}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/categories" className="nav-element">
                    Categories
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/fournisseurs" className="nav-element">
                    {" "}
                    Fournisseurs
                  </NavLink>
                </NavItem>
              </Nav>
              <button className="btn btn-success ml-auto mr-1">
                <i className="fas fa-user-circle" />
              </button>
              <button
                className="btn btn-success  mr-1"
                onClick={(e) => logout(e)}
              >
                <i className="fas fa-sign-out-alt" />
              </button>
            </Collapse>
          </Navbar>
        </div>
      </>
    );
  }
}

export default HeaderAdmin;
