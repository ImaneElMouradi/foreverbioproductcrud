import React, { Component } from "react";

import "../../css/layout/Header.css";

class Header extends Component {
  handleSubmit = e => {
    console.log("log");
    e.preventDefault();
  };

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-end">
          <a className="navbar-brand" href="#">
            Forever<em className="text-success">BIO </em>: Panneau Administrateur
          </a>

          <button className="btn btn-success ml-auto mr-1">
            <i className="fas fa-user-circle"></i>
          </button>
          <button className="btn btn-success  mr-1">
            <i className="fas fa-sign-out-alt"></i>
          </button>
        </nav>
      </>
    );
  }
}

export default Header;
