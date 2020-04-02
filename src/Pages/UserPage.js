import React, { Component } from "react";


import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import ListUser from "../components/body/Users/ListUser";


import "../css/App.css";

class UserPage extends Component {
  state = {
    search: "",
    dataSearch: {}
  };

  render() {
    return (
      <>
        <Header
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
