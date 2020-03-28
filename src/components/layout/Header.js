import React, { Component } from "react";

import "../../css/layout/Header.css";

class Header extends Component {
  state = {
    search: ""
  };

  handleChange = e => {
    this.setState({
      search: e.target.value
    });
  };

  handleSubmit = e => {
    console.log("log");
    e.preventDefault();
  };

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-end">
          <a className="navbar-brand" href="#">
            Forever<em className="text-success">BIO </em>: Product Management
          </a>
          <div class="search-container ml-auto mr-2">
            <input
              type="text"
              placeholder="Search.."
              name="search"
              onChange={this.handleChange}
            />
            <button type="submit" onClick={this.handleSubmit}>
              <i class="fa fa-search"></i>
            </button>
          </div>

          <button className="btn btn-success mr-1">
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
