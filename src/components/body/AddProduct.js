import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  InputGroup,
  FormGroup,
  Label,
  Input
} from "reactstrap";

import "../../css/body/AddProduct.css";

class AddProduct extends Component {
  state = {
    modalNewProduct: false
  };

  toggleNewProductModal = () => {
    this.setState(prevState => ({
      modalNewProduct: !prevState.modalNewProduct
    }));
  };
  render() {
    return (
      <>
        <button className="add" onClick={this.toggleNewProductModal}>
          <i className="fas fa-plus"></i> Ajouter un produit
        </button>
        <div>
          <Modal
            isOpen={this.state.modalNewProduct}
            toggle={this.toggleNewProductModal}
          >
            <ModalHeader toggle={this.toggleNewProductModal}>
              Ajouter un nouveau Produit
            </ModalHeader>
            <ModalBody>
              <FormGroup>
                <Label>Numéro</Label>
                <Input placeholder="Id..."></Input>
              </FormGroup>
              <FormGroup>
                <Label>Numéro de la catégorie</Label>
                <Input placeholder="Id catégorie..."></Input>
              </FormGroup>
              <FormGroup>
                <Label>Nom</Label>
                <Input placeholder="Nom..."></Input>
              </FormGroup>
              <FormGroup>
                <Label>Description</Label>
                <Input placeholder="Description..."></Input>
              </FormGroup>
              <FormGroup>
                <Label>Provenance et source</Label>
                <Input placeholder="Source..."></Input>
              </FormGroup>
              <FormGroup>
                <Label>Etat</Label>
                <Input type="select" name="select" id="etat">
                  <option>Vente</option>
                  <option>Rupture de stock</option>
                  <option>Approvisionnement</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label>Prix en DH</Label>
                <Input placeholder="Prix..."></Input>
              </FormGroup>
              <FormGroup>
                <Label>Quantité</Label>
                <Input placeholder="Quantité..."></Input>
              </FormGroup>
              <FormGroup>
                <Label>L'url de l'image</Label>
                <Input placeholder="Url..."></Input>
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button color="success">Ajouter Produit</Button>
              <Button color="secondary" onClick={this.toggleNewProductModal}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </>
    );
  }
}
export default AddProduct;
