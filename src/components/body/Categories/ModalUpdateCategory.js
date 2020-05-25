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

class UpdateCategory extends Component {
  state = {
    id: "",
    nom: "",
    url: "",
    description: "",
    selectedFile: false,
    selectedFileBinary: "",
  };
  getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  fileSelectedHandler = (event) => {
    console.log("something changed");
    this.getBase64(event.target.files[0]).then((data) => {
      this.setState({
        selectedFileBinary: data,
      });
      console.log(this.state.selectedFileBinary);
    });

    this.setState({
      selectedFile: true,
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

  fetchCategoryById = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/category/${this.props.id}`)
      .then((res) => {
        const { id, nom, url, description } = res.data;

        this.setState({
          id,
          nom,
          url,
          description,
        });
      });
  };

  componentDidMount = () => {
    this.fetchCategoryById();
  };

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  fetchCategoriesUpdated = () => {
    this.props.fetchCategories();
  };

  handleUpdate = async () => {
    console.log(this.state);
    if (this.state.selectedFile === true) {
      console.log("passed here");
      await this.fileUploadHandler().then((response) => {
        this.setState({
          url: response.data.data.link,
        });
      });
    }
    const { nom, url, description } = this.state;
    axios
      .put(`${process.env.REACT_APP_API_URL}/category/${this.props.id}`, {
        nom,
        url,
        description,
      })
      .then(async () => {
        console.log("produit modifié ", this.props.id);
        this.props.toggleModalUpdateCategory();
        this.fetchCategoriesUpdated();
      });
  };

  render() {
    const { nom, url, description } = this.state;
    return (
      <Modal
        isOpen={this.props.modalUpdateCategory}
        toggle={this.props.toggleModalUpdateCategory}
      >
        <ModalHeader toggle={this.props.toggleModalUpdateCategory}>
          Modifier Catégorie
        </ModalHeader>
        <ModalBody>
          <FormGroup>
            <img
              src={
                this.state.selectedFile === false
                  ? url
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
              value={nom}
            />
          </FormGroup>

          <FormGroup>
            <Label for="description">Description</Label>
            <Input
              type="textarea"
              name="description"
              id="description"
              value={description}
              onChange={this.handleOnChange}
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.handleUpdate}>
            Modifier
          </Button>
          <Button
            color="secondary"
            onClick={this.props.toggleModalUpdateCategory}
          >
            Annuler
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
export default UpdateCategory;
