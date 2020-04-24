import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Profilfourn } from './Profilfourn';
import Modal from 'react-modal';
import axios from 'axios';

export class Listefourn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      showModal: false,
      nom: '',
      prenom: '',
      ville: '',
      region: '',
      img: ''
    };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this)
  }
  componentDidMount() {
    //res is results you son of a bitch
    fetch('http://localhost:9092/Vendeur')
      //fetch('https://jsonplaceholder.typicode.com/users') 
      .then(res => res.json())
      .then(json => {
        this.setState({
          items: json,
        })
      });
  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("http://localhost:9092/Vendeur", this.state)
      .then(response => {
        console.log(response)
        alert("Fournisseur ajoute.")
      })
      .catch(error => {
        console.log(error)
        alert("Erreur s'est produite")
      })
  }
  open() {
    this.setState({ showModal: true });
  }

  close() {
    this.setState({ showModal: false });
  }

  render() {
    const nom = this.state.nom;
    const prenom = this.state.prenom;
    const ville = this.state.ville;
    const region = this.state.region;
    const img = this.state.img;
    console.log(this.props.id)
    var { items } = this.state;
    items = items.map((fourn, index) => {
      return (

        <div class="image3">
          <a><Link to={"/profil"}><img src={fourn.img} alt="profil" /></Link></a>
          <a class="text"><Link to={`/fourn/${fourn.id}`}> {fourn.prenom + " " + fourn.nom}></Link></a>
        </div>
      )
    })
    return (
      <body>
        <head>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <title>ForeverBio : Gestion des fournisseurs</title>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta name="HandheldFriendly" content="true" />
          <meta name="description" content="Foreverbio" />
          <meta name="keywords" content="" />
          <meta name="author" content="" />

          <meta property="og:title" content="" />
          <meta property="og:image" content="" />
          <meta property="og:url" content="" />
          <meta property="og:site_name" content="" />
          <meta property="og:description" content="" />

          <meta name="twitter:title" content="" />
          <meta name="twitter:image" content="" />
          <meta name="twitter:url" content="" />
          <meta name="twitter:card" content="" />

          <link rel="shortcut icon" href="images/logo.png" />


          <link href="fonts/Roboto.css" rel='stylesheet' type='/text/css' />
          <link href="fonts/Montserrat.css" rel='stylesheet' type='/text/css' />

          <link rel="stylesheet" href="css/animate.css" />
          <link rel="stylesheet" href="css/icomoon.css" />
          <link rel="stylesheet" href="css/bootstrap.css" />
          <link rel="stylesheet" href="css/owl.carousel.min.css" />
          <link rel="stylesheet" href="css/owl.theme.default.min.css" />
          <link rel="stylesheet" href="css/styleC.css" />

        </head>

        <header class="firstPage">
          <img class="logo1" src="images/logo.png" />
        </header>
        <button id="myBtn" class="myBtn" onClick={this.open} > + Ajouter un fournisseur</button>
        <div id='button-holder'>
          <img src='images/search.png' />
        </div>
        <input type='text' placeholder='Search...' id='search-text-input' />

        <Modal class="modal-content"
          isOpen={this.state.showModal}
          onHide={this.close}>

          <span class="close" onClick={this.close}>&times;</span>
          <form onSubmit={this.submitHandler} >
          <div class="title"><span>Nom</span></div>
          <input id="infofourn" type="text" name="nom" placeholder="Entrer le nom du fournisseur" value={nom} onChange={this.changeHandler} />
          <div class="title"><span>Prénom</span></div>
          <input id="infofourn" type="text" name="prenom" placeholder="Entrer le Prénom du fournisseur" value={prenom} onChange={this.changeHandler} />
          <div class="title"><span>Région</span></div>
          <select name="region" id="infofourn" value={region} onChange={this.changeHandler}>

            <option value="Rabat-Salé-Kénitra"> Région Rabat-Salé-Kénitra</option>
            <option value="Nord Oriental"> Région Nord Oriental</option>
            <option value="Grand Casablanca-Settat"> Région Grand Casablanca-Settat</option>
            <option value="Souss Grand Sud"> Région Souss Grand sud</option>
            <option value="Marrakech-Beni Mellal-Moyen Atlas"> Région Marrakech-Beni Mellal-Moyen Atlas</option>
            <option value="Fés-Meknès-Al wahates"> Région Fés-Meknès-Al wahates</option>

          </select>
          <div class="title"><span>Ville</span></div>
          <input id="infofourn" type="text" name="ville" placeholder="Entrer le Ville du fournisseur" value={ville} onChange={this.changeHandler} />
          <div class="title"><span>Image</span></div>
          <input id="infofourn" type="text" name="img" placeholder="Entrer l'url de l'image" value={img} onChange={this.changeHandler} />
          <br />
          <br />
          <button type="submit" class="btnajouter">Ajouter</button>
          <button href="" class="btnannuler" onClick={this.close}>Annuler</button>
          </form>
        </Modal>
        <div class="line1 animate-box relat" data-animate-effect="fadeIn">
          {items}
        </div>
      
      </body>
    );
  }
}
//ReactDOM.render(<Listefourn />, document.getElementById('Listefourn'));
export default Listefourn;