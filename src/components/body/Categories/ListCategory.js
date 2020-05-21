import React, { Component } from "react";

import axios from "axios";

import Category from "./Category";
import ModalAddCategory from "./ModalAddCategory";

import "../../../css/body/ListCategory.css";

class ListCategory extends Component {
  state = {
    categories: [],
  };

  fetchCategories = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/category`).then((res) => {
      const categories = res.data;
      console.log(categories);
      this.setState({ categories });
    });
  };

  componentDidMount = () => {
    this.fetchCategories();
  };

  onChangeSearchText = (e) => {
    this.setState({ search: e.target.value });
  };

  onSubmitSearchText = () => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/category?search=` + this.state.search
      )
      .then((res) => {
        const categories = res.data;
        this.setState({ categories });
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
            <i className="fa fa-search" />
          </button>
          <button className="refresh ml-3" onClick={this.fetchCategories}>
            <i class="fas fa-redo-alt" />
          </button>
        </div>
        <ModalAddCategory fetchCategories={this.fetchCategories} />

        <div className="list-card row">
          {this.state.categories.map((category) => (
            <Category
              key={category.id}
              category={category}
              fetchCategories={this.fetchCategories}
            />
          ))}
        </div>
      </>
    );
  }
}
export default ListCategory;
