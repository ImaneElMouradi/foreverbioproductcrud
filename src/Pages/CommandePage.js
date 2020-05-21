import React, { Component } from "react";

import HeaderLivreur from "../components/layout/HeaderLivreur";
import Footer from "../components/layout/Footer";

import ListCommande from "../components/body/Commandes/ListCommande";

import "../css/App.css";

class CommandePage extends Component {
  state = {};

  render() {
    return (
      <>
        <HeaderLivreur />
        <ListCommande dataSearch={this.dataSearch} />
        <Footer />
      </>
    );
  }
}

export default CommandePage;
