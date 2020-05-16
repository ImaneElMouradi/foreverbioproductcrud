import React, { Component } from "react";

import Header from "../components/layout/Header";
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
        <Header
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
