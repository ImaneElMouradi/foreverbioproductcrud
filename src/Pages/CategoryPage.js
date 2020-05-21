import React, { Component } from "react";

import HeaderAdmin from "../components/layout/HeaderAdmin";
import Footer from "../components/layout/Footer";

import ListCategory from "../components/body/Categories/ListCategory";

import "../css/App.css";

class CategoryPage extends Component {
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
        <ListCategory dataSearch={this.dataSearch} />
        <Footer />
      </>
    );
  }
}

export default CategoryPage;
