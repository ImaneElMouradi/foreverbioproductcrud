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

class ModalAddCategory extends Component {
  state = {
    modalNewCategory: false,
    nom: "",
    url: "",
    description: "",
    nomError: "",
    descriptionError: "",
    selectedFile: null,
    selectedFileBinary: "",
  };

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  toggleNewCategoryModal = () => {
    this.setState((prevState) => ({
      modalNewCategory: !prevState.modalNewCategory,
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
  };

  fileUploadHandler = async () => {
    console.log(this.state.selectedFile);
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

  handleAddCategory = (e) => {
    this.clearFormError();
    e.preventDefault();
    const isValid = this.validate();

    if (isValid) {
      this.fileUploadHandler().then((response) => {
        this.setState({
          url: response.data.data.link,
        });

        const { nom, url, description } = this.state;
        axios
          .post(`${process.env.REACT_APP_API_URL}/category`, {
            nom,
            url,
            description,
          })
          .then(() => {
            console.log({
              nom,
              url,
              description,
            });
            console.log("Categorie  ajouté");
            this.toggleNewCategoryModal();
            this.props.fetchCategories();
          });
      });

      this.clearFormError();
    }
  };

  clearFormError = () => {
    this.setState({
      nomError: "",
      descriptionError: "",
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
    let nomError = "";
    let descriptionError = "";

    if (!this.state.nom.match(/^[A-Za-z\s-é]+$/)) {
      nomError = "Le nom de la catégorie est invalide";
    }

    if (this.state.description.length === 0 || this.state.description == null) {
      descriptionError =
        "La description de la catégorie ne doit pas êtres vide.";
    }

    if (nomError || descriptionError) {
      this.setState({ nomError, descriptionError });
      return false;
    }
    return true;
  };

  render() {
    return (
      <>
        <button className="add" onClick={this.toggleNewCategoryModal}>
          <i className="fas fa-plus" /> Ajouter une Catégorie
        </button>
        <div>
          <Modal
            isOpen={this.state.modalNewCategory}
            toggle={this.toggleModalNewCategory}
          >
            <ModalHeader toggle={this.props.toggleModalNewCategory}>
              Ajouter une nouvelle Catégorie
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
                    width: "300px",
                    display: "block",
                    margin: "auto",
                    marginBottom: "3px",
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
                  Veuillez choisir une image de la catégorie.
                </FormText>
              </FormGroup>

              <FormGroup>
                <Label>Nom</Label>
                <Input
                  placeholder="Nom..."
                  name="nom"
                  onChange={this.handleOnChange}
                  autoComplete="off"
                />
                <p style={{ fontSize: 12, color: "red" }}>
                  {this.state.nomError}
                </p>
              </FormGroup>

              <FormGroup>
                <Label for="description">Description</Label>
                <Input
                  type="textarea"
                  name="description"
                  id="description"
                  onChange={this.handleOnChange}
                />
                <p style={{ fontSize: 12, color: "red" }}>
                  {this.state.descriptionError}
                </p>
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.handleAddCategory}>
                Ajouter
              </Button>
              <Button
                color="secondary"
                onClick={() => {
                  this.clearFormError();
                  this.toggleNewCategoryModal();
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
export default ModalAddCategory;
