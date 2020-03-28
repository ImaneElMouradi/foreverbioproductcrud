import React, { Component } from "react";

import "../../css/body/Product.css";

import axios from "axios";

class Product extends Component {
  handleDelete = () => {
    console.log("delete", this.props.product.id);
  };

  handleUpdate = id => {
    console.log("update");
  };

  checkEtat = () => {
    if (this.props.product.etat === "Vente") {
      return "vente";
    } else if (this.props.product.etat === "Rupture de stock") {
      return "rupture";
    } else if (this.props.product.etat === "Approvisionnement") {
      return "appro";
    }
  };

  render() {
    const {
      idCat,
      nom,
      description,
      source,
      etat,
      prix,
      qte,
      url
    } = this.props.product;

    return (
      <>
        <div className="card col-mg-3" style={{ width: "18rem" }}>
          <img src={url} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{nom}</h5>
            <p className="card-text">{description}</p>
            <p>
              <i>{source}</i>
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <b>Prix:</b> {prix} DH
            </li>
            <li className="list-group-item">
              <b>
                Etat: <span className={this.checkEtat()}>{etat}</span>
              </b>
            </li>
            <li className="list-group-item">
              <b>Quantité en stock:</b> {qte}
            </li>
            <li className="list-group-item">
              <b>Numéro de catégorie:</b> {idCat}
            </li>
          </ul>
          <div className="card-body m-auto">
            <button className="delete" onClick={this.handleDelete}>
              <i className="fas fa-trash-alt"></i>
            </button>
            <button className="update" onClick={this.handleUpdate}>
              <i className="fas fa-pen"></i>
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Product;
