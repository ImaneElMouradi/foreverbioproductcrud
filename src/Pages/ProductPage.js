import React, { Component } from "react";

import HeaderAdmin from "../components/layout/HeaderAdmin";
import Footer from "../components/layout/Footer";

import ListProduct from "../components/body/Products/ListProduct";

import "../css/App.css";

class ProductPage extends Component {
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
        <ListProduct dataSearch={this.dataSearch} />
        <Footer />
      </>
    );
  }
}

export default ProductPage;
