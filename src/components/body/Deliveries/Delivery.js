import React, { Component } from "react";

import ModalShowUser from "./ModalShowUser";
import ModalShowProducts from "./ModalShowProducts";
import ModalUpdateDelivery from "./ModalUpdateDelivery";
import ModalDeleteDelivery from "./ModalDeleteDelivery";

export default class Delivery extends Component {
  state = {
    modalShowUser: false,
    modalShowProducts: false,
    modalUpdateDelivery: false,
    modalDeleteDelivery: false,
  };

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

  toggleModalUpdateDelivery = () => {
    this.setState((prevState) => ({
      modalUpdateDelivery: !prevState.modalUpdateDelivery,
    }));
  };

  toggleModalDeleteDelivery = () => {
    this.setState((prevState) => ({
      modalDeleteDelivery: !prevState.modalDeleteDelivery,
    }));
  };

  stateColor = (state) => {
    if (state === "En attente") return "red";
    else if (state === "En cours") return "orange";
    else if (state === "Achevé") return "green";
  };
  render() {
    const {
      id,
      date,
      total,
      paymentMethod,
      state,
      user,
      listLigneCommande,
    } = this.props.commande;
    // console.log(listLigneCommande);

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
              className="delivery"
              onClick={this.toggleModalUpdateDelivery}
            >
              <i class="fas fa-pen" />
            </button>
            <button className="update" onClick={this.toggleModalShowUser}>
              <i className="fas fa-user" />
            </button>
            <button className="cart" onClick={this.toggleModalShowProducts}>
              <i className="fas fa-shopping-cart" />
            </button>
            <button className="delete" onClick={this.toggleModalDeleteDelivery}>
              <i class="fas fa-times-circle" />
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

        <ModalUpdateDelivery
          id={id}
          modalUpdateDelivery={this.state.modalUpdateDelivery}
          commande={this.props.commande}
          toggleModalUpdateDelivery={this.toggleModalUpdateDelivery}
          idLivreur={this.props.idLivreur}
          fetchCommandesByIdLivreur={this.props.fetchCommandesByIdLivreur}
        />

        <ModalDeleteDelivery
          id={id}
          modalDeleteDelivery={this.state.modalDeleteDelivery}
          toggleModalDeleteDelivery={this.toggleModalDeleteDelivery}
          fetchCommandesByIdLivreur={this.props.fetchCommandesByIdLivreur}
          state={this.props.commande.state}
        />
      </>
    );
  }
}
