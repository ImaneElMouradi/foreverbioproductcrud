import React, { Component } from "react";

import axios from "axios";

import Product from "./Product";
import ModalAddProduct from "./ModalAddProduct";

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
        <ModalAddProduct fetchProducts={this.fetchProducts} />
        <div className="list-card row">
          {this.state.products.map(product => (
            <Product
              key={product.id}
              product={product}
              fetchProducts={this.fetchProducts}
            />
          ))}
        </div>
      </>
    );
  }
}

export default ListProduct;
