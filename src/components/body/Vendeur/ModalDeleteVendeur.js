import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import axios from "axios";

class ModalDeleteVendeur extends Component {
  handleDelete = () => {
    console.log("delete", this.props.id);
    axios
      .delete(`${process.env.REACT_APP_API_URL}/Vendeur/${this.props.id}`)
      .then(() => {
        this.props.toggleModalDeleteVendeur();
        this.props.fetchVendeurs();
      });
  };

  render() {
    return (
      <>
        {this.props.modalDeleteVendeur && (
          <Modal
            isOpen={this.props.modalDeleteVendeur}
            toggle={this.props.toggleModalDeleteVendeur}
          >
            <ModalHeader toggle={this.props.toggleModalDeleteVendeur}>
              Confirmation de la suppression
            </ModalHeader>
            <ModalBody>
              Êtes-vous sûr de vouloir supprimer ce fournisseur?
            </ModalBody>
            <ModalFooter>
              <Button color="danger" onClick={this.handleDelete}>
                Supprimer
              </Button>
              <Button
                color="secondary"
                onClick={this.props.toggleModalDeleteVendeur}
              >
                Annuler
              </Button>
            </ModalFooter>
          </Modal>
        )}
      </>
    );
  }
}
export default ModalDeleteVendeur;
