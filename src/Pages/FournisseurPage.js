import React, { Component } from "react";


import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import ListFourn from "../components/body/Fournisseurs/Listefourn";

import "../css/App.css";

class FournisseurPage extends Component {
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
        <ListFourn dataSearch={this.dataSearch} />
        <Footer />
      </>
    );
  }
}

export default FournisseurPage;
