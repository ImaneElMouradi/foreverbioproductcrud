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

class UpdateArticle extends Component {
  state = {
    editeur: "",
    datecreation: "",
    categorie: "",
    titre: "",
    text: "",
    imageurl: ""
  };

  fetchArticleById = () => {
    axios.get(`http://localhost:9092/Article/${this.props.id}`).then(res => {
      const {
        editeur,
        datecreation,
        categorie,
        titre,
        text,
        imageurl   
      } = res.data;
      this.setState({
        editeur,
        datecreation,
        categorie,
        titre,
        text,
        imageurl   
      });
      
    });
  };

  

  componentDidMount = () => {
    this.fetchArticleById();
    
  };

  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  fetchArticlesUpdated = () => {
    this.props.fetchArticles();
    
  };

  handleUpdate = async () => {


    const {
      editeur,
      datecreation,
      categorie,
      titre,
      text,
      imageurl   
    } = this.state;
    axios
      .put(`http://localhost:9092/Article/${this.props.id}`, {
      editeur,
      datecreation,
      categorie,
      titre,
      text,
      imageurl 
      })
      .then(async () => {
        console.log(" Article modifié ", this.props.id);
        this.props.toggleModalUpdateArticle();
        this.fetchArticlesUpdated();
      });
  };

  render() {
    const {
      editeur,
      datecreation,
      categorie,
      titre,
      text,
      imageurl 
    } = this.state;
    return (
      <Modal
        isOpen={this.props.modalUpdateArticle}
        toggle={this.props.toggleModalUpdateArticle}
      >
        <ModalHeader toggle={this.props.toggleModalUpdateArticle}>
          Modification d'article
        </ModalHeader>
        <ModalBody>
          <FormGroup>
            <img
              src={imageurl}
              alt=""
              style={{
                width: "100px",
                height: "100px",
                display: "block",
                margin: "auto",
                marginBottom: "3px",
                borderRadius: "8px"
              }}
            />
            <Label>Catégorie</Label>
            <Input
              type="select"
              name="categorie"
              onChange={this.handleOnChange}
              value={categorie}
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
              value={titre}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label>Corps de l'article</Label>
            <Input
              placeholder="Texte..."
              name="text"
              type="textarea"
              onChange={this.handleOnChange}
              value={text}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label>Editeur</Label>
            <Input
              placeholder="Editeur..."
              name="editeur"
              onChange={this.handleOnChange}
              value={editeur}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label>Date de création</Label>
            <Input
              placeholder="Date de création..."
              name="datecreation"
              onChange={this.handleOnChange}
              value={datecreation}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label>L'url de l'image</Label>
            <Input
              placeholder="Url..."
              name="url"
              onChange={this.handleOnChange}
              value={imageurl}
            ></Input>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.handleUpdate}>
            Modifier
          </Button>
          <Button
            color="secondary"
            onClick={this.props.toggleModalUpdateArticle}
          >
            Annuler
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
export default UpdateArticle;
