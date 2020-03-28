import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input
} from "reactstrap";

import axios from "axios";

import "../../css/body/AddProduct.css";

class ModalAddProduct extends Component {
  state = {
    modalNewProduct: false,
    idCat: "",
    nom: "",
    description: "",
    source: "",
    etat: "",
    prix: "",
    qte: "",
    url: ""
  };

  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  toggleNewProductModal = () => {
    this.setState(prevState => ({
      modalNewProduct: !prevState.modalNewProduct
    }));
  };

  handleAddProduct = () => {
    const {
      idCat,
      nom,
      description,
      source,
      etat,
      prix,
      qte,
      url
    } = this.state;
    axios
      .post("http://localhost:9092/product", {
        idCat,
        nom,
        description,
        source,
        etat,
        prix,
        qte,
        url
      })
      .then(() => {
        console.log("produit ajouté");
        this.toggleNewProductModal();
        this.props.fetchProducts();
      });
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
                <Label>Numéro de la catégorie</Label>
                <Input
                  placeholder="Id catégorie..."
                  name="idCat"
                  onChange={this.handleOnChange}
                ></Input>
              </FormGroup>
              <FormGroup>
                <Label>Nom</Label>
                <Input
                  placeholder="Nom..."
                  name="nom"
                  onChange={this.handleOnChange}
                ></Input>
              </FormGroup>
              <FormGroup>
                <Label>Description</Label>
                <Input
                  placeholder="Description..."
                  name="description"
                  onChange={this.handleOnChange}
                ></Input>
              </FormGroup>
              <FormGroup>
                <Label>Provenance et source</Label>
                <Input
                  placeholder="Source..."
                  name="source"
                  onChange={this.handleOnChange}
                ></Input>
              </FormGroup>
              <FormGroup>
                <Label>Etat</Label>
                <Input type="select" name="etat" onChange={this.handleOnChange}>
                  {/* <option>Choisir une option</option> */}
                  <option>Vente</option>
                  <option>Rupture de stock</option>
                  <option>Approvisionnement</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label>Prix en DH</Label>
                <Input
                  placeholder="Prix..."
                  name="prix"
                  onChange={this.handleOnChange}
                ></Input>
              </FormGroup>
              <FormGroup>
                <Label>Quantité</Label>
                <Input
                  placeholder="Quantité..."
                  name="qte"
                  onChange={this.handleOnChange}
                ></Input>
              </FormGroup>
              <FormGroup>
                <Label>L'url de l'image</Label>
                <Input
                  placeholder="Url..."
                  name="url"
                  onChange={this.handleOnChange}
                ></Input>
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button color="success" onClick={this.handleAddProduct}>
                Ajouter Produit
              </Button>
              <Button color="secondary" onClick={this.toggleNewProductModal}>
                Annuler
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </>
    );
  }
}
export default ModalAddProduct;
