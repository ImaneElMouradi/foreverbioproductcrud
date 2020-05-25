import React, { Component } from "react";

import "../../../css/body/Commande.css";
import ModalShowUser from "./ModalShowUser";
import ModalShowProducts from "./ModalShowProducts";
import ModalShowLivreur from "./ModalShowLivreur";

import axios from "axios";

class CommandeAdmin extends Component {
  state = {
    modalShowUser: false,
    modalShowProducts: false,
    modalShowLivreur: false,
    idLivreur: 3,
    state: "",
    livreur: {},
  };

  componentDidMount() {
    this.fetchLivreur();
    this.setState({ state: this.props.commande.state });
  }

  toggleModalShowUser = () => {
    console.log(!this.modalShowUser);
    this.setState((prevState) => ({
      modalShowUser: !prevState.modalShowUser,
    }));
  };

  toggleModalShowProducts = () => {
    this.setState((prevState) => ({
      modalShowProducts: !prevState.modalShowProducts,
    }));
  };

  toggleModalShowLivreur = () => {
    console.log(!this.modalShowLivreur);
    this.setState((prevState) => ({
      modalShowLivreur: !prevState.modalShowLivreur,
    }));
  };

  stateColor = (state) => {
    if (state === "En attente") return "red";
    else if (state === "En cours") return "orange";
    else if (state === "Achevé") return "green";
  };

  addDelivery = () => {
    console.log("test");
    axios
      .put(
        `${process.env.REACT_APP_API_URL}/commandes/${
          this.props.commande.id
        }?state=En cours&idLivreur=${this.state.idLivreur}`
      )
      .then(() => {
        this.props.fetchCommandes();
      });
  };

  disableDeliveryIcon = () => {
    if (
      this.props.commande.idLivreur === 0 ||
      this.props.commande.idLivreur === null
    )
      return "disabled";
  };

  fetchLivreur = () => {
    const { idLivreur } = this.props.commande;
    axios
      .get(`${process.env.REACT_APP_API_URL}/user/` + idLivreur)
      .then((res) => {
        const livreur = res.data;
        this.setState({ livreur });
      });
  };

  render() {
    const {
      id,
      date,
      total,
      paymentMethod,
      state,
      user,
      idLivreur,
      listLigneCommande,
    } = this.props.commande;
    console.log(listLigneCommande);
    return (
      <>
        <tr key={id}>
          <td className="cell"> {date}</td>
          <td className="cell">{user.email}</td>
          <td className="cell">{paymentMethod}</td>
          <td className={`cell ${this.stateColor(state)}`}>{state}</td>
          <td className="cell">{total} Dhs</td>

          <td className="cell">
            <button
              className={`delivery ${this.disableDeliveryIcon()}`}
              onClick={this.toggleModalShowLivreur}
            >
              <i class="fas fa-truck-loading" />
            </button>
            <button className="update" onClick={this.toggleModalShowUser}>
              <i className="fas fa-user" />
            </button>
            <button className="cart" onClick={this.toggleModalShowProducts}>
              <i className="fas fa-shopping-cart" />
            </button>
          </td>
        </tr>

        <ModalShowLivreur
          id={id}
          modalShowLivreur={this.state.modalShowLivreur}
          livreur={this.state.livreur}
          toggleModalShowLivreur={this.toggleModalShowLivreur}
        />

        <ModalShowUser
          id={id}
          modalShowUser={this.state.modalShowUser}
          user={user}
          toggleModalShowUser={this.toggleModalShowUser}
        />

        <ModalShowProducts
          id={id}
          modalShowProducts={this.state.modalShowProducts}
          total={total}
          user={user}
          date={date}
          listLigneCommande={listLigneCommande}
          toggleModalShowProducts={this.toggleModalShowProducts}
        />
      </>
    );
  }
}

export default CommandeAdmin;
