import React, { Component } from "react";


import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import ListProduct from "../components/body/Products/ListProduct";

import "../css/App.css";

class ProductPage extends Component {
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
        <ListProduct dataSearch={this.dataSearch} />
        <Footer />
      </>
    );
  }
}

export default ProductPage;
