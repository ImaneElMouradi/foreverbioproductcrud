import React, { Component } from "react";

import { Link } from "react-router-dom";

import "../../../css/body/HomePage.css";

import background from "../../../images/homepage.jpg";
import logo from "../../../images/bio.png";
export default class HomePage extends Component {
  render() {
    return (
      <>
        <div
          className="homepage"
          style={{
            backgroundImage: `url(${background})`,
          }}
        >
          <div className="homepage-content center-block text-center ">
            <h1
              style={{ fontSize: "5rem", paddingRight: "15px" }}
              className="homepage-text"
            >
              Forever
              <img
                src={logo}
                alt=""
                className="logo center-block text-center"
                style={{ marginLeft: "15px" }}
              />
            </h1>
            <p style={{ fontSize: "2.5rem" }}>
              Bienvenue à l'application d'administration de Forever
              <span>Bio</span>
            </p>
            <p style={{ fontSize: "1.5rem" }}>
              Connectez-vous à votre compte Administrateur ou Livreur.
            </p>
            <Link to="/login">
              <button class="homepage-btn">Login</button>
            </Link>
          </div>
        </div>
      </>
    );
  }
}
