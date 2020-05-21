import React, { Component } from "react";

import axios from "axios";

import { Redirect } from "react-router-dom";

import "../../css/auth/Login.css";

export default class Login extends Component {
  state = {
    email: "",
    password: "",
    emailError: "",
    passwordError: "",
    groupError: "",
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (!this.validate()) {
      // this.clearValidation();

      axios
        .post(`http://localhost:9092/signIn`, {
          email: this.state.email,
          password: this.state.password,
        })
        .then(async (res) => {
          let groupError = "";
          if (res.data === "") {
            groupError = "Email ou mot de passe incorrect.";
          } else {
            await localStorage.setItem("user", JSON.stringify(res.data));
            this.clearValidation();
            //   console.log(res.data);
          }
          await this.setState({ groupError });
        });

      console.log("submit");
    }
  };

  validate = () => {
    let emailError = "";
    let passwordError = "";
    let errors = false;

    if (this.state.email === "") {
      emailError = "Veuillez saisir votre email.";
      errors = true;
    } else if (
      !this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
    ) {
      emailError = "Votre email est invalide.";
      errors = true;
    }

    if (this.state.password === "") {
      passwordError = "Veuillez saisir votre mot de passe.";
      errors = true;
    }

    this.setState({ emailError, passwordError });
    return errors;
  };

  clearValidation = () => {
    this.setState({ emailError: "", passwordError: "", groupError: "" });
  };

  render() {
    const { email, password } = this.state;
    const account = JSON.parse(localStorage.getItem("user"));
    // console.log(account);
    if (account !== null && account.role === "Administrateur") {
      return <Redirect to="/dashboardAdmin" />;
    } else if (account !== null && account.role === "Livreur") {
      return <Redirect to="dashboardLivreur" />;
    }
    return (
      <section className="container">
        <h1 className="text-center">
          Forever<span style={{ color: "green" }}>BIO</span>{" "}
          <span style={{ color: "grey", fontSize: "2rem" }}>
            - Application d'administration
          </span>
        </h1>
        <br />
        <h3 className="large text">Authentification</h3>
        <p className="lead">
          <i className="fas fa-user" /> Connectez-vous à votre compte
          administrateur ou livreur!
        </p>
        <form
          className="form"
          action="create-profile.html"
          onSubmit={(e) => this.onSubmit(e)}
        >
          <div className="form-group">
            <input
              type="text"
              placeholder="Adresse mail"
              name="email"
              value={email}
              onChange={(e) => this.onChange(e)}
            />
          </div>
          <p style={{ fontSize: "12px", color: "red" }}>
            {this.state.emailError}
          </p>
          <div className="form-group">
            <input
              type="password"
              placeholder="Mot de passe"
              name="password"
              value={password}
              onChange={(e) => this.onChange(e)}
            />
          </div>
          <p style={{ fontSize: "12px", color: "red" }}>
            {this.state.passwordError}
          </p>
          <p style={{ fontSize: "12px", color: "red" }}>
            {this.state.groupError}
          </p>
          <input type="submit" className="btn btn-green" value="Login" />
        </form>
      </section>
    );
  }
}
