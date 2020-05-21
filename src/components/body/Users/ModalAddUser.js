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

import "../../../css/body/AddProduct.css";

import axios from "axios";

class ModalAddUser extends Component {
  state = {
    modalNewUser: false,
    firstName: "",
    lastName: "",
    birthDate: "",
    password: "",
    role: "USER",
    email: "",
    url: "",
    firstNameError: "",
    lastNameError: "",
    birthDateError: "",
    passwordError: "",
    emailError: "",
    selectedFile: null,
    selectedFileBinary: "",
  };

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  toggleNewUserModal = () => {
    this.setState((prevState) => ({
      modalNewUser: !prevState.modalNewUser,
    }));
  };

  fileSelectedHandler = (event) => {
    this.getBase64(event.target.files[0]).then((data) => {
      this.setState({
        selectedFileBinary: data,
      });
      console.log(this.state.selectedFileBinary);
    });
    this.setState({
      selectedFile: event.target.files[0],
    });
    console.log(this.state.selectedFile);
  };

  fileUploadHandler = async () => {
    return axios.post(
      "https://api.imgur.com/3/image",
      {
        image: "'" + this.state.selectedFileBinary.split(",")[1] + "'",
      },
      {
        headers: {
          Authorization: "Client-ID b22b3f6d28510a1",
        },
      }
    );
  };

  handleAddUser = (e) => {
    this.clearFormError();
    e.preventDefault();
    const isValid = this.validate();

    if (isValid) {
      console.log("passed");
      this.fileUploadHandler().then((response) => {
        this.setState({
          url: response.data.data.link,
        });

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
          .post(`http://localhost:9092/user`, {
            firstName,
            lastName,
            birthDate,
            password,
            role,
            email,
            url,
          })
          .then(() => {
            console.log({
              firstName,
              lastName,
              birthDate,
              password,
              role,
              email,
              url,
            });
            console.log("utilisateur ajouté");
            this.toggleNewUserModal();
            this.props.fetchUsers();
          });
      });

      this.clearFormError();
    }
  };

  clearFormError = () => {
    this.setState({
      firstNameError: "",
      lastNameError: "",
      birthDateError: "",
      passwordError: "",
      emailError: "",
    });
  };

  getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  validate = () => {
    let firstNameError = "";
    let lastNameError = "";
    let passwordError = "";
    let emailError = "";

    if (!this.state.firstName.match(/^[A-Za-z\s]+$/)) {
      firstNameError = "Votre prénom doit contenir  que des lettres.";
    }

    if (!this.state.lastName.match(/^[A-Za-z\s]+$/)) {
      lastNameError = "Votre nom doit contenir que des lettres.";
    }

    if (!this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      emailError = "Votre email est invalide.";
    }

    if (this.state.password.length < 8) {
      passwordError = "Votre mot de passe doit contenir au moins 8 caractères.";
    }

    if (firstNameError || lastNameError || passwordError || emailError) {
      this.setState({
        firstNameError,
        lastNameError,
        passwordError,
        emailError,
      });
      return false;
    }
    return true;
  };

  render() {
    return (
      <>
        <button className="add" onClick={this.toggleNewUserModal}>
          <i className="fas fa-plus" /> Ajouter un utilisateur
        </button>
        <div>
          <Modal
            isOpen={this.state.modalNewUser}
            toggle={this.toggleNewUserModal}
          >
            <ModalHeader toggle={this.toggleNewUserModal}>
              Ajouter un nouveau utilisateur
            </ModalHeader>
            <ModalBody>
              <FormGroup>
                <img
                  src={
                    this.state.selectedFile == null
                      ? "https://n-allo.be/wp-content/uploads/2016/08/ef3-placeholder-image-450x350.jpg"
                      : this.state.selectedFileBinary + ""
                  }
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
                  placeholder="Nom..."
                  name="lastName"
                  onChange={this.handleOnChange}
                  autoComplete="off"
                />
                <p style={{ fontSize: 12, color: "red" }}>
                  {this.state.lastNameError}
                </p>
              </FormGroup>
              <FormGroup>
                <Label>Prénom</Label>
                <Input
                  placeholder="Prénom..."
                  name="firstName"
                  autoComplete="off"
                  onChange={this.handleOnChange}
                />
                <p style={{ fontSize: 12, color: "red" }}>
                  {this.state.firstNameError}
                </p>
              </FormGroup>
              <FormGroup>
                <Label for="birthDate">Date de naissance</Label>
                <Input
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
                  placeholder="Email..."
                  type="email"
                  name="email"
                  autoComplete="off"
                  onChange={this.handleOnChange}
                />
                <p style={{ fontSize: 12, color: "red" }}>
                  {this.state.emailError}
                </p>
              </FormGroup>
              <FormGroup>
                <Label>Mot de passe</Label>
                <Input
                  placeholder="Mot de passe..."
                  name="password"
                  type="password"
                  onChange={this.handleOnChange}
                />
                <p style={{ fontSize: 12, color: "red" }}>
                  {this.state.passwordError}
                </p>
              </FormGroup>
              <FormGroup>
                <Label>Confirmer mot de passe</Label>
                <Input
                  placeholder="Confirmer mot de passe..."
                  name="password"
                  type="password"
                  onChange={this.handleOnChange}
                />
                <p style={{ fontSize: 12, color: "red" }}>
                  {this.state.passwordError}
                </p>
              </FormGroup>
              <FormGroup>
                <Label>Role</Label>
                <Input
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
              <Button color="success" onClick={this.handleAddUser}>
                Ajouter
              </Button>
              <Button
                color="secondary"
                onClick={() => {
                  this.clearFormError();
                  this.toggleNewUserModal();
                }}
              >
                Annuler
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </>
    );
  }
}
export default ModalAddUser;
