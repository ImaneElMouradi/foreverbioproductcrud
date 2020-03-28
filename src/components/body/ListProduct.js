import React, { Component } from "react";

import axios from "axios";

import Product from "./Product";

import "../../css/body/ListProduct.css";

class ListProduct extends Component {
  state = {
    products: []
  };

  fetchProducts = () => {
    axios.get("http://localhost:9092/product").then(res => {
      const products = res.data;
      this.setState({ products });
    });
  };

  componentDidMount = () => {
    this.fetchProducts();
  };

  render() {
    return (
      <>
        <div className="list-card row">
          {this.state.products.map(product => (
            <Product key={product.id} product={product} />
          ))}
          <h4>
            <i className="fas fa-plus"></i> Ajouter un produit
          </h4>
        </div>
      </>
    );
  }
}

export default ListProduct;
