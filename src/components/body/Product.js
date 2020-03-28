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
            <li className="list-group-item">Prix: {prix}</li>
            <li className="list-group-item">Etat: {etat}</li>
            <li className="list-group-item">Quantité en stock: {qte}</li>
          </ul>
          <div className="card-body">
            <a href="#" className="card-link">
              Delete
            </a>
            <a href="#" className="card-link">
              Update
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default Product;
