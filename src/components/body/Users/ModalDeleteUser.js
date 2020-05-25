import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import axios from "axios";

class ModalDeleteUser extends Component {
  handleDelete = () => {
    console.log("delete", this.props.id);
    axios
      .delete(`${process.env.REACT_APP_API_URL}/user/${this.props.id}`)
      .then(() => {
        this.props.toggleModalDeleteUser();
        this.props.fetchUsers();
      });
  };

  render() {
    return (
      <>
        {this.props.modalDeleteUser && (
          <Modal
            isOpen={this.props.modalDeleteUser}
            toggle={this.props.toggleModalDeleteUser}
          >
            <ModalHeader toggle={this.props.toggleModalDeleteUser}>
              Confirmation de la suppression
            </ModalHeader>
            <ModalBody>
              Êtes-vous sûr de vouloir supprimer cet utilisateur?
            </ModalBody>
            <ModalFooter>
              <Button color="danger" onClick={this.handleDelete}>
                Supprimer
              </Button>
              <Button
                color="secondary"
                onClick={this.props.toggleModalDeleteUser}
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
export default ModalDeleteUser;
