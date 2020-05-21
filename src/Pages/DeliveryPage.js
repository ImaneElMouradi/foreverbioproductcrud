import React, { Component } from "react";

import HeaderLivreur from "../components/layout/HeaderLivreur";
import Footer from "../components/layout/Footer";

import ListDelivery from "../components/body/Deliveries/ListDelivery";

import "../css/App.css";

class DeliveryPage extends Component {
  state = {
    search: "",
    dataSearch: {},
  };

  render() {
    return (
      <>
        <HeaderLivreur
          onChangeSearchText={this.onChangeSearchText}
          onSubmitSearchText={this.onSubmitSearchText}
        />
        <ListDelivery dataSearch={this.dataSearch} />
        <Footer />
      </>
    );
  }
}

export default DeliveryPage;
