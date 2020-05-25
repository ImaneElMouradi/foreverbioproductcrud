import React, { Component } from "react";

import axios from "axios";

import Article from "./Article";

import ModalAddArticle from "./ModalAddArticle";

import "../../../css/body/ListProduct.css";

class ListArticle extends Component {
  state = {
    articles: [],
  };

  fetchArticles = async () => {
    console.log("trying to fetch");
    return axios.get(`${process.env.REACT_APP_API_URL}/Article`).then((res) => {
      const articles = res.data;

      this.setState({ articles });
      console.log(this.state.articles);
    });
  };

  componentDidMount = () => {
    this.fetchArticles();
    console.log(this.state.articles);
  };

  onChangeSearchText = (e) => {
    this.setState({ search: e.target.value });
  };

  onSubmitSearchText = () => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/Article/search`, {
        text: this.state.search,
      })
      .then((res) => {
        const articles = res.data;
        this.setState({ articles });
      });
  };

  render() {
    return (
      <>
        <div className="search-container search">
          <input
            type="text"
            placeholder="Search.."
            name="search"
            autoComplete="off"
            onChange={this.onChangeSearchText}
          />
          <button type="submit" onClick={this.onSubmitSearchText}>
            <i className="fa fa-search" />
          </button>
          <button className="refresh ml-3" onClick={this.fetchArticles}>
            <i class="fas fa-redo-alt" />
          </button>
        </div>

        <ModalAddArticle fetchArticles={this.fetchArticles} />

        <div className="list-card row">
          {this.state.articles.map((article) => (
            <Article
              key={article.id}
              Article={article}
              fetchArticles={this.fetchArticles}
            />
          ))}
        </div>
      </>
    );
  }
}

export default ListArticle;
