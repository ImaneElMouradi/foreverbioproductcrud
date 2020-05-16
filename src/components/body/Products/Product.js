import React, { Component } from "react";

import "../../../css/body/Product.css";

import ModalDeleteProduct from "./ModalDeleteProduct";
import ModalUpdateProduct from "./ModalUpdateProduct";

class Product extends Component {
  state = {
    modalDeleteProduct: false,
    modalUpdateProduct: false,
    nomCat: "",
  };

  toggleModalDeleteProduct = () => {
    this.setState((prevState) => ({
      modalDeleteProduct: !prevState.modalDeleteProduct,
    }));
  };

  toggleModalUpdateProduct = () => {
    this.setState((prevState) => ({
      modalUpdateProduct: !prevState.modalUpdateProduct,
    }));
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

  componentDidMount = () => {
    this.checkCategory();
  };

  checkCategory = () => {
    const { idCat } = this.props.product;
    if (idCat === 1) {
      return this.setState({ nomCat: "Visage" });
    } else if (idCat === 2) {
      return this.setState({ nomCat: "Cheveux" });
    } else if (idCat === 3) {
      return this.setState({ nomCat: "Huile" });
    } else if (idCat === 4) {
      return this.setState({ nomCat: "Peau" });
    } else if (idCat === 5) {
      return this.setState({ nomCat: "Aliment" });
    }
  };

  render() {
    const {
      id,
      idCat,
      nom,
      description,
      source,
      unit,
      etat,
      prix,
      qte,
      url,
    } = this.props.product;

    return (
      <>
        <div
          className="card col-sm-12 col-md-4 col-lg-3"
          style={{ width: "18rem" }}
        >
          <img src={url} className="card-img-top product-image" alt="..." />
          <div className="card-body">
            <h5 className="card-title">
              {nom} ({unit})
            </h5>
            <p className="card-text product-desc">{description}</p>
            <p className="product-src">
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
              <b>Catégorie:</b> {this.state.nomCat}
            </li>
          </ul>
          <div className="card-body m-auto">
            <button className="delete" onClick={this.toggleModalDeleteProduct}>
              <i className="fas fa-trash-alt" />
            </button>
            <button className="update" onClick={this.toggleModalUpdateProduct}>
              <i className="fas fa-pen" />
            </button>
          </div>
        </div>

        <ModalDeleteProduct
          id={id}
          modalDeleteProduct={this.state.modalDeleteProduct}
          toggleModalDeleteProduct={this.toggleModalDeleteProduct}
          fetchProducts={this.props.fetchProducts}
        />

        <ModalUpdateProduct
          id={id}
          modalUpdateProduct={this.state.modalUpdateProduct}
          toggleModalUpdateProduct={this.toggleModalUpdateProduct}
          handleOnChange={this.handleOnChange}
          fetchProducts={this.props.fetchProducts}
        />
      </>
    );
  }
}

export default Product;
