import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import axios from "axios";

export default class ModalDeleteDelivery extends Component {
  handleDelete = () => {
    axios
      .put(
        `http://localhost:9092/commandes/${
          this.props.id
        }?state=En attente&idLivreur=0`
      )
      .then(() => {
        this.props.toggleModalDeleteDelivery();
        this.props.fetchCommandesByIdLivreur();
      });
  };

  render() {
    return (
      <>
        {this.props.modalDeleteDelivery && (
          <Modal
            isOpen={this.props.modalDeleteDelivery}
            toggle={this.props.toggleModalDeleteDelivery}
          >
            <ModalHeader toggle={this.props.toggleModalDeleteDelivery}>
              Confirmation de la suppression
            </ModalHeader>
            <ModalBody>
              Êtes-vous sûr de vouloir annuler cette livraison?
            </ModalBody>
            <ModalFooter>
              <Button color="danger" onClick={this.handleDelete}>
                Supprimer
              </Button>
              <Button
                color="secondary"
                onClick={this.props.toggleModalDeleteDelivery}
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
