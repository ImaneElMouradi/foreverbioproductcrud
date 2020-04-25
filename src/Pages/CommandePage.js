import React, { Component } from "react";


import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import ListCommande from "../components/body/Commandes/ListCommande";

import "../css/App.css";

class CommandePage extends Component {
  state = {
  };

  render() {
    return (
      <>
        <Header
        />
        <ListCommande dataSearch={this.dataSearch} />
        <Footer />
      </>
    );
  }
}

export default CommandePage;
