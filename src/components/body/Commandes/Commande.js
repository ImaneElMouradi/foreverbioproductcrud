import React, { Component } from "react";

import "../../../css/body/Commande.css";
import ModalShowUser from "./ModalShowUser";
import ModalShowProducts from "./ModalShowProducts";

import axios from "axios";

class Commande extends Component {
  state = {
    modalShowUser: false,
    modalShowProducts: false,
    idLivreur: 3,
    state: "",
  };

  componentDidMount() {
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

  stateColor = (state) => {
    if (state === "En attente") return "red";
    else if (state === "En cours") return "orange";
    else if (state === "Achevé") return "green";
  };

  addDelivery = () => {
    console.log("test");
    axios
      .put(
        `http://localhost:9092/commandes/${
          this.props.commande.id
        }?state=En cours&idLivreur=${this.state.idLivreur}`
      )
      .then(() => {
        this.props.fetchCommandes();
      });
  };

  disableDeliveryIcon = () => {
    if (this.props.commande.state === "En cours") return "disabled";
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
              onClick={() => {
                this.addDelivery();
              }}
            >
              <i class="fas fa-truck" />
            </button>
            <button className="update" onClick={this.toggleModalShowUser}>
              <i className="fas fa-user" />
            </button>
            <button className="cart" onClick={this.toggleModalShowProducts}>
              <i className="fas fa-shopping-cart" />
            </button>
          </td>
        </tr>

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

export default Commande;
