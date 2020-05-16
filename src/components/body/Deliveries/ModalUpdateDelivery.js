import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

import axios from "axios";

export default class ModalUpdateDelivery extends Component {
  state = {
    state: "",
  };

  componentDidMount() {
    this.setState({ state: this.props.commande.state });
  }

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleUpdate = () => {
    axios
      .put(
        `http://localhost:9092/commandes/${this.props.id}?state=${
          this.state.state
        }&idLivreur=${this.props.idLivreur}`
      )
      .then(() => {
        this.props.toggleModalUpdateDelivery();
        this.props.fetchCommandesByIdLivreur();
      });
  };

  render() {
    const {
      id,
      date,
      total,
      paymentMethod,
      state,
      user,
      listLigneCommande,
    } = this.props.commande;
    return (
      <Modal
        isOpen={this.props.modalUpdateDelivery}
        toggle={this.props.toggleModalUpdateDelivery}
      >
        <ModalHeader toggle={this.props.toggleModalUpdateDelivery}>
          Modifier Livraison
        </ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label>Date</Label>
            <Input
              placeholder="Date..."
              name="date"
              onChange={this.handleOnChange}
              value={date}
              disabled
            />
          </FormGroup>
          <FormGroup>
            <Label>Email</Label>
            <Input
              placeholder="Email..."
              name="email"
              onChange={this.handleOnChange}
              value={user.email}
              disabled
            />
          </FormGroup>
          <FormGroup>
            <Label>Méthode de payement</Label>
            <Input
              placeholder="Méthode de payement..."
              name="paymentMethod"
              onChange={this.handleOnChange}
              value={paymentMethod}
              disabled
            />
          </FormGroup>
          <FormGroup>
            <Label>Etat</Label>
            <Input
              type="select"
              name="state"
              onChange={this.handleOnChange}
              value={this.state.state}
              defaultValue="Choisir un état..."
            >
              <option disabled>Choisir un état...</option>
              <option>En attente</option>
              <option>En cours</option>
              <option>Achevé</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label>Total en DH</Label>
            <Input
              placeholder="Total de la commande..."
              name="total"
              onChange={this.handleOnChange}
              value={total}
              disabled
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.handleUpdate}>
            Modifier
          </Button>
          <Button
            color="secondary"
            onClick={this.props.toggleModalUpdateDelivery}
          >
            Annuler
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
