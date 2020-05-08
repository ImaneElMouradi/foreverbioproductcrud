import React, { Component } from "react";

import "../../../css/body/Commande.css";
import ModalShowUser from "./ModalShowUser";
import ModalShowProducts from "./ModalShowProducts";



class Commande extends Component {
  state = {
    modalShowUser: false,
    modalShowProducts: false,
  };

  toggleModalShowUser = () => {
    console.log(!this.modalShowUser)
    this.setState(prevState => ({
      modalShowUser: !prevState.modalShowUser
    }));
  };

  toggleModalShowProducts = () => {
    this.setState(prevState => ({
      modalShowProducts: !prevState.modalShowProducts
    }));
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
    console.log(listLigneCommande);
    return (
      <>
        <tr key={id} >
          <td className="cell" > {date}</td>
          <td className="cell" >{user.email}</td>
          <td className="cell" >{paymentMethod}</td>
          <td className="cell" >{state}</td>
          <td className="cell" >{total} Dhs</td>
          <td  className="cell"> <button className="update" onClick={this.toggleModalShowUser}>
              <i className="fas fa-user"></i>
            </button>
            <button className="cart" onClick={this.toggleModalShowProducts}>
            <i className="fas fa-shopping-cart" ></i>
          </button></td>

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
          user= {user}
          date = { date}
          listLigneCommande={listLigneCommande}
          toggleModalShowProducts={this.toggleModalShowProducts}
        />    

      </>
    );
  }
}


export default Commande;
