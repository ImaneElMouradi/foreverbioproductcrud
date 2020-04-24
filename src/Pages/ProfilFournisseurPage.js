import React, { Component } from "react";


import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import Profilfourn from "../components/body/Fournisseurs/Profilfourn";

import "../css/App.css";
import { Route } from "react-router-dom";

class ProfilFournisseurPage extends Component {
  state = {
    search: "",
    dataSearch: {}
  };
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    }
  }
  componentDidMount() {
    //res is results you son of a bitch
    fetch('http://localhost:9092/Vendeur')
      .then(res => res.json())
      .then(json => {
        this.setState({
          items: json,
        })
      });
  }

  render() {
    var { items } = this.state;
    return (
      <>
        <Header
          onChangeSearchText={this.onChangeSearchText}
          onSubmitSearchText={this.onSubmitSearchText}
        />
        <Route render={(props) => <Profilfourn {...props} list={items} />}/>
        <Footer />
      </>
    );
  }
}

export default ProfilFournisseurPage;
