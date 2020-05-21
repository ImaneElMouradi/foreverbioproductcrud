import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import axios from "axios";

class ModalDeleteCategory extends Component {
  handleDelete = () => {
    console.log("delete", this.props.id);
    axios.delete(`http://localhost:9092/category/${this.props.id}`).then(() => {
      this.props.toggleModalDeleteCategory();
      this.props.fetchCategories();
    });
  };
  render() {
    return (
      <>
        {this.props.modalDeleteCategory && (
          <Modal
            isOpen={this.props.modalDeleteCategory}
            toggle={this.props.toggleModalDeleteCategory}
          >
            <ModalHeader toggle={this.props.toggleModalDeleteCategory}>
              Confirmation de la suppression
            </ModalHeader>
            <ModalBody>
              Êtes-vous sûr de vouloir supprimer cet catégorie?
            </ModalBody>
            <ModalFooter>
              <Button color="danger" onClick={this.handleDelete}>
                Supprimer
              </Button>
              <Button
                color="secondary"
                onClick={this.props.toggleModalDeleteCategory}
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

export default ModalDeleteCategory;
