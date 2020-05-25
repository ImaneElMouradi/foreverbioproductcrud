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

class UpdateVendeur extends Component {
  state = {
    nom: "",
    prenom: "",
    ville: "",
    region: "",
    img: "",
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

  fetchVendeurById = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/Vendeur/${this.props.id}`)
      .then((res) => {
        const { nom, prenom, ville, region, img } = res.data;
        this.setState({
          nom,
          prenom,
          ville,
          region,
          img,
        });
      });
  };

  componentDidMount = () => {
    this.fetchVendeurById();
  };

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  fetchVendeursUpdated = () => {
    this.props.fetchVendeurs();
  };

  handleUpdate = async () => {
    const { nom, prenom, ville, region, url } = this.state;
    axios
      .put(`${process.env.REACT_APP_API_URL}/Vendeur/${this.props.id}`, {
        nom,
        prenom,
        ville,
        region,
        url,
      })
      .then(async () => {
        console.log(" Utilisateur modifié modifié ", this.props.id);
        this.props.toggleModalUpdateVendeur();
        this.fetchVendeursUpdated();
      });
  };

  render() {
    const { nom, prenom, region, ville, img } = this.state;
    return (
      <Modal
        isOpen={this.props.modalUpdateVendeur}
        toggle={this.props.toggleModalUpdateVendeur}
      >
        <ModalHeader toggle={this.props.toggleModalUpdateVendeur}>
          Modifier un fournisseur
        </ModalHeader>
        <ModalBody>
          <FormGroup>
            <img
              src={img}
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
            <Label>Préom</Label>
            <Input
              value={prenom}
              placeholder="Prénom..."
              name="prenom"
              onChange={this.handleOnChange}
              autoComplete="off"
            />
          </FormGroup>
          <FormGroup>
            <Label>Nom</Label>
            <Input
              value={nom}
              placeholder="Nom..."
              name="nom"
              autoComplete="off"
              onChange={this.handleOnChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>Ville</Label>
            <Input
              value={ville}
              placeholder="ville..."
              type="ville"
              name="ville"
              autoComplete="off"
              onChange={this.handleOnChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>Région</Label>
            <Input
              value={region}
              type="select"
              name="region"
              onChange={this.handleOnChange}
              defaultValue="Choisir un région..."
            >
              <option disabled>Choisir un région...</option>
              <option value="Rabat-Salé-Kénitra">
                {" "}
                Région Rabat-Salé-Kénitra
              </option>
              <option value="Nord Oriental"> Région Nord Oriental</option>
              <option value="Grand Casablanca-Settat">
                {" "}
                Région Grand Casablanca-Settat
              </option>
              <option value="Souss Grand Sud"> Région Souss Grand sud</option>
              <option value="Marrakech-Beni Mellal-Moyen Atlas">
                {" "}
                Région Marrakech-Beni Mellal-Moyen Atlas
              </option>
              <option value="Fés-Meknès-Al wahates">
                {" "}
                Région Fés-Meknès-Al wahates
              </option>
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
              this.props.toggleModalUpdateVendeur();
            }}
          >
            Annuler
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
export default UpdateVendeur;
