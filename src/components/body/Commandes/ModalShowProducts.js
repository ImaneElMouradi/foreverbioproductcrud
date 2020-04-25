import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
Table,
} from "reactstrap";
import LigneCommande from "./LigneCommande";



class ShowProducts extends Component {
  state = {
    listLigneCommande: [] ,
  };





  render() {
    return (
      <Modal
        isOpen={this.props.modalShowProducts}
        toggle={this.props.toggleModalShowProducts}
        className="modal-lg"
      >
        <ModalHeader toggle={this.props.toggleModalShowProducts}>
          Détails Commande
        </ModalHeader>
        
        <ModalBody>
        <p><b>Date:</b> {this.props.date} </p>
        <p><b>Acheteur:</b> {this.props.user.firstName} {this.props.user.lastName}</p>
        
        <Table hover style={{
            marginLeft: "20px",
            marginRight: "auto"
          }}>
            <thead>
              <tr>
                <th>Image</th>
                <th>Catégorie</th>
                <th>Nom</th>
                <th>Prix</th>
                <th>Quantité</th>
                <th>Total </th>
              </tr>
            </thead>
            <tbody>
              {this.props.listLigneCommande.map(ligneCommande => (
                <LigneCommande
                  key={ligneCommande.id}
                  ligneCommande={ligneCommande}
                />
              ))}
            </tbody>
          </Table >
          <div style={{
            textAlign:"right",
            marginRight: "40px",
          }}>
         <b>Total:</b> {this.props.total} Dhs

          </div>

        </ModalBody>
        <ModalFooter>
          <Button
            color="secondary"
            onClick={() => {
              this.props.toggleModalShowProducts();
            }}
          >
            Fermer
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
export default ShowProducts;
