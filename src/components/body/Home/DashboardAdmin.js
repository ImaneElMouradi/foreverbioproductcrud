import React, { Component } from "react";

import { Link } from "react-router-dom";

import HeaderAdmin from "../../layout/HeaderAdmin";
import Footer from "../../layout/Footer";

import "../../../css/body/Dashboard.css";

import products from "../../../images/products.jpg";
import users from "../../../images/users.png";
import categories from "../../../images/categories.jpg";
import fournisseurs from "../../../images/fournisseurs.jpg";
import articles from "../../../images/article.png";

export default class DashboardAdmin extends Component {
  render() {
    const account = JSON.parse(localStorage.getItem("user"));
    return (
      <>
        <HeaderAdmin />
        <h3>
          <span>Dashboard</span> - Administrateur {account.lastName}{" "}
          {account.firstName}
        </h3>

        <div className="row container-dash">
          <div className="col-4 center-block text-center">
            <Link to="/products">
              <img alt="" src={products} />
              <p className="text-dashboard">Produits</p>{" "}
            </Link>
          </div>
          <div className="col-4 center-block text-center">
            <Link to="/users">
              <img alt="" src={users} />
              <p className="text-dashboard">Utilisateurs</p>
            </Link>
          </div>
          <div className="col-4 center-block text-center">
            <Link to="/categories">
              <img alt="" src={categories} />
              <p className="text-dashboard">Catégories</p>
            </Link>
          </div>
          <div className="col-4 center-block text-center">
            <Link to="/fournisseurs">
              <img alt="" src={fournisseurs} />
              <p className="text-dashboard">Fournisseurs</p>
            </Link>
          </div>
          <div className="col-4 center-block text-center">
            <Link to="/articles">
              <img alt="" src={articles} />
              <p className="text-dashboard">Articles</p>
            </Link>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}
