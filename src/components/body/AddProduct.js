import React, { Component } from "react";

class AddProduct extends Component {
  render() {
    return (
      <button className="add" onClick={() => console.log("click")}>
        <i className="fas fa-plus"></i> Ajouter un produit
      </button>
    );
  }
}
export default AddProduct;
