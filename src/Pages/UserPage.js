import React, { Component } from "react";


import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import ListProduct from "../components/body/Products/ListProduct";
import ModalAddProduct from "../components/body/Users/ModalAddUser"

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
        <h1> User page </h1>

        <ModalAddProduct fetchProducts={this.fetchProducts} />
        
        <Footer />
      </>
    );
  }
}

export default UserPage;
