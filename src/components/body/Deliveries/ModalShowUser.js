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

class ShowUser extends Component {
  state = {
    firstName: "",
    lastName: "",
    birthDate: "",
    email: "",
    url: "",
  };

  render() {
    const { firstName, lastName, birthDate, email, url } = this.props.user;
    return (
      <Modal
        isOpen={this.props.modalShowUser}
        toggle={this.props.toggleModalShowUser}
      >
        <ModalHeader toggle={this.props.toggleModalShowUser}>
          Détails Utilisateur
        </ModalHeader>
        <ModalBody>
          <FormGroup>
            <img
              src={url}
              alt=""
              style={{
                width: "120px",
                height: "120px",
                display: "block",
                margin: "auto",
                marginBottom: "3px",
                borderRadius: "50%",
              }}
            />
          </FormGroup>

          <FormGroup>
            <Label>Nom</Label>
            <Input
              value={lastName}
              placeholder="Nom..."
              name="lastName"
              autoComplete="off"
              readonly
            />
          </FormGroup>
          <FormGroup>
            <Label>Prénom</Label>
            <Input
              value={firstName}
              placeholder="Prénom..."
              name="firstName"
              autoComplete="off"
              readonly
            />
          </FormGroup>
          <FormGroup>
            <Label for="birthDate">Date de naissance</Label>
            <Input
              value={birthDate}
              type="date"
              name="birthDate"
              id="birthDate"
              placeholder="Date de naissance..."
              readonly
            />
          </FormGroup>
          <FormGroup>
            <Label>Email</Label>
            <Input
              value={email}
              placeholder="Email..."
              type="email"
              name="email"
              autoComplete="off"
              readonly
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button
            color="secondary"
            onClick={() => {
              this.props.toggleModalShowUser();
            }}
          >
            Fermer
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
export default ShowUser;
