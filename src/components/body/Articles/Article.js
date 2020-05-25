import React, { Component } from "react";

import "../../../css/body/Product.css";

import ModalDeleteArticle from "./ModalDeleteArticle";
import ModalUpdateArticle from "./ModalUpdateArticle";

class Article extends Component {
  state = {
    modalDeleteArticle: false,
    modalUpdateArticle: false,
  };

  toggleModalDeleteArticle = () => {
    this.setState(prevState => ({
      modalDeleteArticle: !prevState.modalDeleteArticle
    }));
  };

  toggleModalUpdateArticle = () => {
    this.setState(prevState => ({
      modalUpdateArticle: !prevState.modalUpdateArticle
    }));
  };



  componentDidMount = () => {
  
  };



  render() {
    const {
      id,
      editeur,
      dateCreation,
      categorie,
      titre,
      text,     
      imageurl
    } = this.props.Article;

    return (
      <>
        <div className="card col-sm-12 col-md-4 col-lg-3" style={{ width: "18rem" }}>
          <img src={imageurl} className="card-img-top product-image" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{titre}</h5>
            <p className="card-text product-desc">{text}</p>
            <p className="product-src">
              <i>{editeur}</i>
            </p>
          </div>
          <ul className="list-group list-group-flush">
          <li className="list-group-item">
              <b>Date de création :</b> {dateCreation}
          </li>
            <li className="list-group-item">
              <b>Catégorie:</b> {categorie}
            </li>
          </ul>
          <div className="card-body m-auto">
            <button className="delete" onClick={this.toggleModalDeleteArticle}>
              <i className="fas fa-trash-alt"></i>
            </button>
            <button className="update" onClick={this.toggleModalUpdateArticle}>
              <i className="fas fa-pen"></i>
            </button>
          </div>
        </div>
        
        <ModalDeleteArticle
          id={id}
          modalDeleteArticle={this.state.modalDeleteArticle}
          toggleModalDeleteArticle={this.toggleModalDeleteArticle}
          fetchArticles={this.props.fetchArticles}
        />

        <ModalUpdateArticle
          id={id}
          modalUpdateArticle={this.state.modalUpdateArticle}
          toggleModalUpdateArticle={this.toggleModalUpdateArticle}
          handleOnChange={this.handleOnChange}
          fetchArticles={this.props.fetchArticles}
        />
      </>
    );
  }
}

export default Article;
