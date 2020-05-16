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
  FormText,
} from "reactstrap";

import axios from "axios";

class UpdateUser extends Component {
  state = {
    firstName: "",
    lastName: "",
    birthDate: "",
    password: "",
    role: "",
    email: "",
    url: "",
    selectedFile: null,
  };

  fileSelectedHandler = (event) => {
    this.setState({
      selectedFile: event.target.file[0],
    });
  };

  fileUploadHandler = () => {
    axios.post(
      "https://api.imgur.com/3/upload",
      {
        image: this.selectedFile,
      },
      {
        headers: {
          Authorization: "Client-ID b22b3f6d28510a1",
        },
      }
    );
  };

  fetchUserById = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/user/${this.props.id}`)
      .then((res) => {
        const {
          firstName,
          lastName,
          birthDate,
          password,
          role,
          email,
          url,
        } = res.data;
        this.setState({
          firstName,
          lastName,
          birthDate,
          password,
          role,
          email,
          url,
        });
      });
  };

  componentDidMount = () => {
    this.fetchUserById();
  };

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  fetchUsersUpdated = () => {
    this.props.fetchUsers();
  };

  handleUpdate = async () => {
    const {
      firstName,
      lastName,
      birthDate,
      password,
      role,
      email,
      url,
    } = this.state;
    axios
      .put(`${process.env.REACT_APP_API_URL}/user/${this.props.id}`, {
        firstName,
        lastName,
        birthDate,
        password,
        role,
        email,
        url,
      })
      .then(async () => {
        console.log(" Utilisateur modifié modifié ", this.props.id);
        this.props.toggleModalUpdateUser();
        this.fetchUsersUpdated();
      });
  };

  render() {
    const {
      firstName,
      lastName,
      birthDate,
      password,
      role,
      email,
      url,
    } = this.state;
    return (
      <Modal
        isOpen={this.props.modalUpdateUser}
        toggle={this.props.toggleModalUpdateUser}
      >
        <ModalHeader toggle={this.props.toggleModalUpdateUser}>
          Modifier un utilisateur
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
            <Label for="exampleFile">Image</Label>
            <Input
              type="file"
              name="file"
              id="exampleFile"
              accept="image/*"
              onChange={this.fileSelectedHandler}
            />
            <FormText color="muted">
              Veuillez choisir une image de profil.
            </FormText>
          </FormGroup>

          <FormGroup>
            <Label>Nom</Label>
            <Input
              value={lastName}
              placeholder="Nom..."
              name="lastName"
              onChange={this.handleOnChange}
              autoComplete="off"
            />
          </FormGroup>
          <FormGroup>
            <Label>Prénom</Label>
            <Input
              value={firstName}
              placeholder="Prénom..."
              name="firstName"
              autoComplete="off"
              onChange={this.handleOnChange}
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
              onChange={this.handleOnChange}
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
              onChange={this.handleOnChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>Mot de passe</Label>
            <Input
              value={password}
              placeholder="Mot de passe..."
              name="password"
              type="password"
              onChange={this.handleOnChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>Confirmer mot de passe</Label>
            <Input
              value={password}
              placeholder="Confirmer mot de passe..."
              name="password"
              type="password"
              onChange={this.handleOnChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>Role</Label>
            <Input
              value={role}
              type="select"
              name="role"
              onChange={this.handleOnChange}
              defaultValue="Choisir un role..."
            >
              <option disabled>Choisir un role...</option>
              <option>Utilisateur</option>
              <option>Administrateur</option>
            </Input>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={this.handleUpdate}>
            Modifier
          </Button>
          <Button
            color="secondary"
            onClick={() => {
              this.props.toggleModalUpdateUser();
            }}
          >
            Annuler
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
export default UpdateUser;
