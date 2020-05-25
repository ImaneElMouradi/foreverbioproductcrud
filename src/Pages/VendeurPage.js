import React, { Component } from "react";

import HeaderAdmin from "../components/layout/HeaderAdmin";
import Footer from "../components/layout/Footer";

import ListVendeur from "../components/body/Vendeur/ListVendeur";

import "../css/App.css";

class VendeurPage extends Component {
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
        <ListVendeur dataSearch={this.dataSearch} />
        <Footer />
      </>
    );
  }
}

export default VendeurPage;
