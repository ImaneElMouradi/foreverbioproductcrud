import React, { Component } from "react";


import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import ListVendeur from "../components/body/Vendeur/ListVendeur";


import "../css/App.css";

class VendeurPage extends Component {
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
        <ListVendeur dataSearch={this.dataSearch} />
        <Footer />
      </>
    );
  }
}

export default VendeurPage;