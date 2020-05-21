import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import axios from "axios";

class ModalDeleteProduct extends Component {
  handleDelete = () => {
    console.log("delete", this.props.id);
    axios.delete(`http://localhost:9092/product/${this.props.id}`).then(() => {
      this.props.toggleModalDeleteProduct();
      this.props.fetchProducts();
    });
  };

  render() {
    return (
      <>
        {this.props.modalDeleteProduct && (
          <Modal
            isOpen={this.props.modalDeleteProduct}
            toggle={this.props.toggleModalDeleteProduct}
          >
            <ModalHeader toggle={this.props.toggleModalDeleteProduct}>
              Confirmation de la suppression
            </ModalHeader>
            <ModalBody>
              Êtes-vous sûr de vouloir supprimer cet élément?
            </ModalBody>
            <ModalFooter>
              <Button color="danger" onClick={this.handleDelete}>
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
        )}
      </>
    );
  }
}
export default ModalDeleteProduct;
