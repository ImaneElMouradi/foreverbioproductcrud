import React, { Component } from "react";

import "../../css/body/Product.css";

class Product extends Component {
  render() {
    const {
      nom,
      idCat,
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
              <b>Etat:</b> {etat}
            </li>
            <li className="list-group-item">
              <b>Quantité en stock:</b> {qte}
            </li>
          </ul>
          <div className="card-body m-auto">
            <button className="delete">
              <i class="fas fa-trash-alt"></i>
            </button>
            <button className="update">
              <i class="fas fa-pen"></i>
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Product;
