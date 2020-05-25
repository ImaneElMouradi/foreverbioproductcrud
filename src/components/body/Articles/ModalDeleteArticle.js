import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import axios from "axios";

class ModalDeleteArticle extends Component {
  handleDelete = () => {
    console.log("delete", this.props.id);
    axios.delete(`http://localhost:9092/Article/${this.props.id}`).then(() => {
      this.props.toggleModalDeleteArticle();
      this.props.fetchArticles();
    });
  };

  render() {
    return (
      <>
        {this.props.modalDeleteArticle && (
          <Modal
            isOpen={this.props.modalDeleteArticle}
            toggle={this.props.toggleModalDeleteArticle}
          >
            <ModalHeader toggle={this.props.toggleModalDeleteArticle}>
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
                onClick={this.props.toggleModalDeleteArticle}
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
export default ModalDeleteArticle;
