import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class ModalDeleteProduct extends Component {
  render() {
    return (
      <Modal
        isOpen={this.props.modalDeleteProduct}
        toggle={this.props.toggleModalDeleteProduct}
      >
        <ModalHeader toggle={this.props.toggleModalDeleteProduct}>
          Confirmation de la suppression
        </ModalHeader>
        <ModalBody>Êtes-vous sûr de vouloir supprimer cet élément?</ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={this.props.handleDelete}>
            Supprimer
          </Button>
          <Button
            color="secondary"
            onClick={this.props.toggleModalDeleteProduct}
          >
            Annuler
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default ModalDeleteProduct;
