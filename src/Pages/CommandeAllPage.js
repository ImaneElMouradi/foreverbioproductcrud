import React, { Component } from "react";

import HeaderAdmin from "../components/layout/HeaderAdmin";
import Footer from "../components/layout/Footer";

import ListCommandeAdmin from "../components/body/Commandes/ListCommandeAdmin";

import "../css/App.css";

class CommandeAllPage extends Component {
  state = {};

  render() {
    return (
      <>
        <HeaderAdmin />
        <ListCommandeAdmin dataSearch={this.dataSearch} />
        <Footer />
      </>
    );
  }
}

export default CommandeAllPage;
