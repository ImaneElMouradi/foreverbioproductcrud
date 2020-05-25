import React, { Component } from "react";


import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import ListArticle from "../components/body/Articles/ListArticle";

import "../css/App.css";

class ArticlePage extends Component {
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
        <ListArticle dataSearch={this.dataSearch} />
        <Footer />
      </>
    );
  }
}

export default ArticlePage;
