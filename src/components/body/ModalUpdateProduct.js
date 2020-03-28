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

class UpdateProduct extends Component {
  state = {
    idCat: "",
    nom: "",
    description: "",
    source: "",
    etat: "",
    prix: "",
    qte: "",
    url: ""
  };

  fetchProductById = () => {
    axios.get(`http://localhost:9092/product/${this.props.id}`).then(res => {
      const {
        idCat,
        nom,
        description,
        source,
        etat,
        prix,
        qte,
        url
      } = res.data;
      this.setState({
        idCat,
        nom,
        description,
        source,
        etat,
        prix,
        qte,
        url
      });
    });
  };

  componentDidMount = () => {
    this.fetchProductById();
  };

  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleUpdate = () => {
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
    console.log("update", this.props.id);
    axios
      .put(`http://localhost:9092/product/${this.props.id}`, {
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
        this.props.toggleModalUpdateProduct();
        this.props.fetchProducts();
      });
  };

  render() {
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
    return (
      <Modal
        isOpen={this.props.modalUpdateProduct}
        toggle={this.props.toggleModalUpdateProduct}
      >
        <ModalHeader toggle={this.props.toggleModalUpdateProduct}>
          Modifier Produit
        </ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label>Numéro de la catégorie</Label>
            <Input
              type="select"
              name="idCat"
              onChange={this.handleOnChange}
              value={idCat}
              defaultValue="Choisir un numéro..."
            >
              <option disabled>Choisir un numéro...</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label>Nom</Label>
            <Input
              placeholder="Nom..."
              name="nom"
              onChange={this.handleOnChange}
              value={nom}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label>Description</Label>
            <Input
              placeholder="Description..."
              name="description"
              onChange={this.handleOnChange}
              value={description}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label>Provenance et source</Label>
            <Input
              placeholder="Source..."
              name="source"
              onChange={this.handleOnChange}
              value={source}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label>Etat</Label>
            <Input
              type="select"
              name="etat"
              onChange={this.handleOnChange}
              value={etat}
              defaultValue="Choisir une option..."
            >
              <option disabled>Choisir une option...</option>
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
              value={prix}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label>Quantité</Label>
            <Input
              placeholder="Quantité..."
              name="qte"
              onChange={this.handleOnChange}
              value={qte}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label>L'url de l'image</Label>
            <Input
              placeholder="Url..."
              name="url"
              onChange={this.handleOnChange}
              value={url}
            ></Input>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.handleUpdate}>
            Modifier
          </Button>
          <Button
            color="secondary"
            onClick={this.props.toggleModalUpdateProduct}
          >
            Annuler
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
export default UpdateProduct;
