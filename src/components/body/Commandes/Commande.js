import React, { Component } from "react";

import "../../../css/body/Commande.css";
import ModalShowUser from "./ModalShowUser";
import ModalShowProducts from "./ModalShowProducts";
import jsPDF from 'jspdf'

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
  CreateAndDownloadPdf = () => {
    const {
      id,
      date,
      total,
      paymentMethod,
      state,
      user,
      listLigneCommande,
    } = this.props.commande;
    const {
      firstName,
      lastName,
      birthDate,
      email,
      url
    } = user;
    var i = 275
    var doc = new jsPDF('p', 'pt');
    doc.setTextColor(8, 255, 0)
    doc.setDrawColor(8, 255, 0)
    doc.text(20, 40, 'FOREVERBIO')
    doc.setTextColor(0, 0, 0)
    doc.setFont('helvetica')
    doc.setFontType('normal')
    doc.setFontSize(10)
    doc.text(20, 60, firstName + ' ' + lastName)
    doc.text(20, 80, email)
    doc.text(20, 100, birthDate)
    doc.setFillColor(8, 255, 0);
    doc.rect(20, 250, 550, 20, 'FD');
    doc.setFont('helvetica')
    doc.setFontType('normal')
    doc.text(20, 265, 'Produit                                        Quantite                                   Prix Unite (DH)                                            Prix Total (DH)')
    listLigneCommande.map(ligneCommande => (

      doc.text(20,i+10,ligneCommande.product.nom +'                                      '+ligneCommande.qte+'                                          '+ligneCommande.product.prix+'                                                        '+ligneCommande.total)

      ))
    doc.setFillColor(8, 255, 0);
    doc.rect(300, 500, 200, 20, 'FD');

    listLigneCommande.map(ligneCommande => ( doc.text(310, 515, "TOTAL                                "+ligneCommande.total+" DHS") ))
    doc.text(310, 530, "ETAT                                  "+state)
    doc.text(190,750,"MERCI D'AVOIR CHOISI FORVERBIO.")
    doc.save(firstName+lastName+'.pdf')
  }

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
          <td className="cell"> <button className="update" onClick={this.toggleModalShowUser}>
            <i className="fas fa-user"></i>
          </button>
            <button className="cart" onClick={this.toggleModalShowProducts}>
              <i className="fas fa-shopping-cart" ></i>
            </button>
            <button onClick={this.CreateAndDownloadPdf}>
              <i class="fas fa-print"></i>
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
