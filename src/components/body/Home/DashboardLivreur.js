import React, { Component } from "react";

import { Link } from "react-router-dom";

import HeaderLivreur from "../../layout/HeaderLivreur";
import Footer from "../../layout/Footer";

import "../../../css/body/Dashboard.css";

import commandes from "../../../images/commandes.png";
import deliveries from "../../../images/deliveries.jpg";

export default class DashboardLivreur extends Component {
  render() {
    const account = JSON.parse(localStorage.getItem("user"));
    return (
      <>
        <HeaderLivreur />
        <h3>
          <span>Dashboard</span> - Livreur {account.lastName}{" "}
          {account.firstName}
        </h3>

        <div className="row container-dash">
          <div className="col-6 center-block text-center">
            <Link to="/commandes">
              <img alt="" src={commandes} />
              <p className="text-dashboard">Commandes</p>{" "}
            </Link>
          </div>
          <div className="col-6 center-block text-center">
            <Link to="/deliveries">
              <img alt="" src={deliveries} />
              <p className="text-dashboard">Livraisons</p>
            </Link>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}
