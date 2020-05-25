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
  FormText
} from "reactstrap";

import axios from "axios";

import "../../../css/body/AddProduct.css";

class ModalAddArticle extends Component {
  state = {
    modalNewArticle: false,
    editeur: "ForeverBio",
    datecreation: "",
    categorie: "",
    titre: "",
    text: "",
    imageurl:
      "https://n-allo.be/wp-content/uploads/2016/08/ef3-placeholder-image-450x350.jpg",
    datecreationError: "",
    categorieError: "",
    titreError: "",
    textError: "",
    selectedFile: null,
    selectedFileBinary: ""
  };

  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  toggleNewArticleModal = () => {
    this.setState(prevState => ({
      modalNewArticle: !prevState.modalNewArticle
    }));
  };

  fileSelectedHandler = event => {

    this.getBase64(event.target.files[0]).then(data => {
      this.setState({
        selectedFileBinary: data,
      })
      console.log(this.state.selectedFileBinary);
    });
    this.setState({
      selectedFile: event.target.files[0]

    })

  }

  getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  fileUploadHandler = async () => {
    console.log(this.state.selectedFile);
    return axios.post(
      'https://api.imgur.com/3/image', {
      image: "'" + this.state.selectedFileBinary.split(",")[1] + "'",


    }, {
      headers: {
        "Authorization": "Client-ID b22b3f6d28510a1",
      }
    }
    )

  }

  handleAddArticle = e => {


    e.preventDefault();
    const isValid = true //this.validate();
    console.log("you pressed add");

    if (this.validate()) {

      this.fileUploadHandler().then(result => {
        this.setState({
          imageurl: result.data.data.link,
        });

        const {
          editeur,
          datecreation,
          categorie,
          titre,
          text,
          imageurl
        } = this.state;
        axios
          .post("http://localhost:9092/Article", {
            editeur,
            datecreation,
            categorie,
            titre,
            text,
            imageurl
          })
          .then(() => {
            console.log("Article ajouté");
            this.toggleNewArticleModal();
            this.props.fetchArticles();
          });

      })

      this.clearFormError();
    }
  };

  clearFormError = () => {
    this.setState({
      datecreationError: "",
      categorieError: "",
      titreError: "",
      textError: ""
    });
  };

  validate = () => {
    let datecreationError = "";
    let categorieError = "";
    let titreError = "";
    let textError = "";

    if (!this.state.titre) {
      titreError = "Le titre est obligatoire";
    }

    if (!this.state.text) {
      textError = "Le texte de l'article est obligatoire";
    }

    if (!this.state.datecreationError) {
       datecreationError = "La date de création est obligatoire";
     }

    if (!this.state.categorieError) {
      categorieError = "Veuillez précisez la catégorie";
    }
    if (titreError || textError ||  categorieError) {
      this.setState({ titreError, textError, categorieError });
      return false;
    }
    return true;
  };


  render() {
    return (
      <>
        <button className="add" onClick={this.toggleNewArticleModal}>
          <i className="fas fa-plus"></i> Ajouter un Article
        </button>
        <div>
          <Modal
            isOpen={this.state.modalNewArticle}
            toggle={this.toggleNewArticleModal}
          >
            <ModalHeader toggle={this.toggleNewArticleModal}>
              Ajouter un nouvel Article
            </ModalHeader>
            <ModalBody>
              <FormGroup>
                <img
                  src={this.state.selectedFile == null ? "https://n-allo.be/wp-content/uploads/2016/08/ef3-placeholder-image-450x350.jpg" : this.state.selectedFileBinary}
                  alt=""
                  style={{
                    width: "100px",
                    height: "100px",
                    display: "block",
                    margin: "auto",
                    objectFit: "cover",
                    marginBottom: "3px",
                    borderRadius: "8px"
                  }}
                />
                <FormGroup>
                  <Label for="exampleFile">Image</Label>
                  <Input type="file" name="file" id="exampleFile" accept="image/*" onChange={this.fileSelectedHandler}
                  />
                  <FormText color="muted">
                    Veuillez choisir une image pour l'article.
        </FormText>
                </FormGroup>
                <Label>Nom de la catégorie</Label>
                <Input
                  type="select"
                  name="categorie"
                  onChange={this.handleOnChange}
                  defaultValue="Choisir une catégorie..."
                >
                  <option disabled>Choisir une catégorie...</option>
                  <option>Recette</option>
                  <option>Santé</option>
                  <option>Beauté</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label>Titre</Label>
                <Input
                  placeholder="Titre..."
                  name="titre"
                  onChange={this.handleOnChange}
                  autoComplete="off"
                ></Input>
                <p style={{ fontSize: 12, color: "red" }}>
                  {this.state.titreError}
                </p>
              </FormGroup>
              <FormGroup>
                <Label>Corps de l'article</Label>
                <Input
                  placeholder="Texte..."
                  name="text"
                  onChange={this.handleOnChange}
                ></Input>
                <p style={{ fontSize: 12, color: "red" }}>
                  {this.state.textError}
                </p>
              </FormGroup>
              {/*<FormGroup>
                <Label>Editeur</Label>
                <Input
                  placeholder="Editeur..."
                  name="editeur"
                  onChange={this.handleOnChange}
                ></Input>
              </FormGroup>*/}
              <FormGroup>
                <Label>Saisissez la date de création</Label>
                <Input
                  placeholder="Date..."
                  name="datecreation"
                  onChange={this.handleOnChange}
                ></Input>
                <p style={{ fontSize: 12, color: "red" }}>
                  {this.state.datecreationError}
                </p>
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button color="success" onClick={

                this.handleAddArticle
              }>
                Ajouter
              </Button>
              <Button
                color="secondary"
                onClick={() => {
                  this.toggleNewArticleModal();
                  this.clearFormError();
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
export default ModalAddArticle;
