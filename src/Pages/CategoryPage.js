import React, { Component } from "react";


import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import ListCategory from "../components/body/Categories/ListCategory";

import "../css/App.css";

class CategoryPage extends Component {
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
        <ListCategory dataSearch={this.dataSearch} />
        <Footer />
      </>
    );
  }
}

export default CategoryPage;
