import React, { Component } from "react";


import "../../../css/body/User.css"
import ModalDeleteVendeur from "./ModalDeleteVendeur";
import ModalUpdateVendeur from "./ModalUpdateVendeur.js";

class Vendeur extends Component {
  state = {
    modalDeleteVendeur: false,
    modalUpdateVendeur: false,
  };

  toggleModalDeleteVendeur = () => {
    console.log("You cliked");
    console.log(!this.modalDeleteVendeur)
    this.setState(prevState => ({
      modalDeleteVendeur: !prevState.modalDeleteVendeur
    }));
  };

  toggleModalUpdateVendeur = () => {
    this.setState(prevState => ({
      modalUpdateVendeur: !prevState.modalUpdateVendeur
    }));
  };


  render() {
    const {
      id,
      nom,
      prenom,
      ville,
      region,
      img
    } = this.props.vendeur;

    return (
      <>
        <tr key={id} >
          <td><img src={img}
            alt="..."
            className="profilPicture" /></td>
          <td className="cell" > {prenom}</td>
          <td className="cell" >{nom}</td>
          <td className="cell" >{ville}</td>
          <td className="cell" >{region}</td>
          <td  className="cell"> <button className="update" onClick={this.toggleModalUpdateVendeur}>
              <i className="fas fa-pen"></i>
            </button>
            <button className="delete" onClick={this.toggleModalDeleteVendeur}>
            <i className="fas fa-trash-alt" ></i>
          </button></td>


        </tr>

        <ModalDeleteVendeur
          id={id}
          modalDeleteVendeur={this.state.modalDeleteVendeur}
          toggleModalDeleteVendeur={this.toggleModalDeleteVendeur}
          fetchVendeurs={this.props.fetchVendeurs}
        />

    <ModalUpdateVendeur
          id={id}
          modalUpdateVendeur={this.state.modalUpdateVendeur}
          toggleModalUpdateVendeur={this.toggleModalUpdateVendeur}
          handleOnChange={this.handleOnChange}
          fetchVendeurs={this.props.fetchVendeurs}
        />


      </>
    );
  }
}

export default Vendeur;