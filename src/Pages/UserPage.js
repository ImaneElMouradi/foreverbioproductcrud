import React, { Component } from "react";

import HeaderAdmin from "../components/layout/HeaderAdmin";
import Footer from "../components/layout/Footer";

import ListUser from "../components/body/Users/ListUser";

import "../css/App.css";

class UserPage extends Component {
  state = {
    search: "",
    dataSearch: {},
  };

  render() {
    return (
      <>
        <HeaderAdmin
          onChangeSearchText={this.onChangeSearchText}
          onSubmitSearchText={this.onSubmitSearchText}
        />
        <ListUser dataSearch={this.dataSearch} />
        <Footer />
      </>
    );
  }
}

export default UserPage;
