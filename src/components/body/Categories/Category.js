import React, { Component } from "react";

import "../../../css/body/Category.css";

import ModalDeleteCategory from "./ModalDeleteCategory";
import ModalUpdateCategory from "./ModalUpdateCategory";

class Category extends Component {
  state = {
    modalDeleteCategory: false,
    modalUpdateCategory: false,
    total: 0,
  };

  toggleModalDeleteCategory = () => {
    this.setState(prevState => ({
      modalDeleteCategory: !prevState.modalDeleteCategory
    }));
  };

  toggleModalUpdateCategory = () => {
    this.setState(prevState => ({
      modalUpdateCategory: !prevState.modalUpdateCategory
    }));
  };

  checkCategory = () => {
    if (this.props.category.nom === "Aliment") {
      return 5;
    } else if (this.props.category.nom === "Huile"){
      return 3;
    }else if (this.props.category.nom=== "Visage"){
      return 1;
    } else {
      return 0;
    }
  }
  
  render() {
    const {
      id,
      nom,
      url,
      description,
    } = this.props.category;

   
   

    return (
      <>
        <div className="card col-sm-12 col-md-4 col-lg-3" style={{ width: "18rem" }}>
          <img src={url} className="card-img-top category-image" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{nom}</h5>
            <p className="card-text category-desc">{description}</p>
           
          </div>
          <hr/>
    <p><b>Total:  { this.checkCategory() }</b></p>
          <hr/>

          <div className="card-body m-auto">
            <button className="delete" onClick={this.toggleModalDeleteCategory}>
              <i className="fas fa-trash-alt"></i>
            </button>
            <button className="update" onClick={this.toggleModalUpdateCategory}>
              <i className="fas fa-pen"></i>
            </button>
          </div>
        </div>

        <ModalDeleteCategory
          id={id}
          modalDeleteCategory={this.state.modalDeleteCategory}
          toggleModalDeleteCategory={this.toggleModalDeleteCategory}
          fetchCategories={this.props.fetchCategories}
        />



        <ModalUpdateCategory
          id={id}
          modalUpdateCategory={this.state.modalUpdateCategory}
          toggleModalUpdateCategory={this.toggleModalUpdateCategory}
          handleOnChange={this.handleOnChange}
          fetchCategories={this.props.fetchCategories}
        />
      </>
    );
  }
}

export default Category;
