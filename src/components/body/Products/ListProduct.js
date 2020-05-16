import React, { Component } from "react";

import axios from "axios";

import Product from "./Product";
import ModalAddProduct from "./ModalAddProduct";

import "../../../css/body/ListProduct.css";

class ListProduct extends Component {
  state = {
    products: [],
    categories: ["Visage", "Cheveux", "Huile", "Peau", "Aliment"],
  };

  fetchProducts = () => {
    return axios.get(`${process.env.REACT_APP_API_URL}/product`).then((res) => {
      const products = res.data;
      this.setState({ products });
    });
  };

  componentDidMount = () => {
    this.fetchProducts();
  };

  onChangeSearchText = (e) => {
    this.setState({ search: e.target.value });
  };

  onSubmitSearchText = () => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/product/search`, {
        text: this.state.search,
      })
      .then((res) => {
        const products = res.data;
        this.setState({ products });
      });
  };

  render() {
    return (
      <>
        <div className="search-container search" />
        <div className="search-container search">
          <select
            className="mr-3 selectdiv"
            style={{
              width: "200px",
              height: "30px",
            }}
            type="select"
            name="role"
            defaultValue="Choisir un role"
            onChange={async (e) => {
              e.persist();
              await this.fetchProducts();
              this.setState({
                products: this.state.products.filter(
                  (product) =>
                    e.target.value === "Tout" ||
                    this.state.categories[product.idCat - 1] === e.target.value
                ),
              });
            }}
          >
            <option>Tout</option>
            <option>Huile</option>
            <option>Aliment</option>
            <option>Visage</option>
            <option>Cheveux</option>
          </select>
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
          <button className="refresh ml-3" onClick={this.fetchProducts}>
            <i class="fas fa-redo-alt" />
          </button>
        </div>

        <ModalAddProduct fetchProducts={this.fetchProducts} />

        <div className="list-card row">
          {this.state.products.map((product) => (
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
