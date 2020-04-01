import React, { Component } from "react";

import axios from "axios";

import Product from "./Product";
import ModalAddProduct from "./ModalAddProduct";

import "../../../css/body/ListProduct.css";

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

  onChangeSearchText = e => {
    this.setState({ search: e.target.value });
  };

  onSubmitSearchText = () => {
    axios
      .post("http://localhost:9092/product/search", {
        text: this.state.search
      })
      .then(res => {
        const products = res.data;
        this.setState({ products });
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
            <i className="fa fa-search"></i>
          </button>
          <button className="refresh ml-3" onClick={this.fetchProducts}>
            <i class="fas fa-redo-alt"></i>
          </button>
        </div>

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
