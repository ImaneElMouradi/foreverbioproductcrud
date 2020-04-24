import React, { Component } from "react";
import axios from 'axios';
import ProfilFournisseurPage from "../../../Pages/ProfilFournisseurPage";

export class Profilfourn extends Component {

    constructor(props) {
        super(props)
        this.state = {
            nom: (this.props.list.map((item) => (item.nom)))[this.props.match.params.id - 1],
            prenom: (this.props.list.map((item) => (item.prenom)))[this.props.match.params.id - 1],
            ville: (this.props.list.map((item) => (item.ville)))[this.props.match.params.id - 1],
            region: (this.props.list.map((item) => (item.region)))[this.props.match.params.id - 1],
            img: (this.props.list.map((item) => (item.img)))[this.props.match.params.id - 1],
        }
        console.log((this.props.list.map((item) => (item.prenom)))[this.props.match.params.id - 1])
    }


    deleteFourn(id) {
        const { match: { params } } = this.props;
        console.log(params.id)
        if (window.confirm("Etes-vous sur de vouloir supprimer ce fournisseur ?")) {
            fetch('http://localhost:9092/Vendeur/' + id, {
                method: 'DELETE',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            alert("Fournisser supprime !")
        }
    }
    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state);
        axios
            .put("http://localhost:9092/Vendeur", this.state)
            .then(response => {
                console.log(response)
                alert("Fournisseur modifie !.")
            })
            .catch(error => {
                console.log(error)
                alert("error has occured")
            })
    }

    render() {
        const { nom, prenom, ville, region } = this.state;
        const { match: { params } } = this.props;
        const items = this.props.list;
        const lastname = items.map((item) => (item.nom));
        console.log(params.id);
        const name = items.map((item) => (item.prenom));
        const city = items.map((item) => (item.ville));
        const rg = items.map((item) => (item.region));
        const srcimg = items.map((item) => (item.img));
        console.log(name);
        console.log(city[params.id - 1]);
        console.log(rg[params.id - 1]);
        console.log(srcimg[params.id - 1]);
       
        
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

                    <link rel="stylesheet" href="/css/animate.css" />
                    <link rel="stylesheet" href="/css/icomoon.css" />
                    <link rel="stylesheet" href="/css/bootstrap.css" />
                    <link rel="stylesheet" href="/css/owl.carousel.min.css" />
                    <link rel="stylesheet" href="/css/owl.theme.default.min.css" />
                    <link rel="stylesheet" href="/css/styleC.css" />

                </head>

                <header class="firstPage">
                    <img class="logo1" src="/images/logo.png" />
                </header>
                <h2>Fournisseur</h2>
                <form onSubmit={this.submitHandler}>
                <div class="othersideprofile"><img src={srcimg[params.id-1 ]} /></div>
                <div id="info">
                    <input type="text" name="nom" id="nom" placeholder={lastname[params.id - 1]} value={nom} onChange={this.changeHandler} />
                    <br />
                    <br />
                    <br />
                    <input type="text" name="prenom" id="prenom" placeholder={name[params.id - 1]} value={prenom} onChange={this.changeHandler} />
                    <br />
                    <br />
                    <br />
                    <input type="text" name="region" id="region" placeholder={rg[params.id - 1]} value={region} onChange={this.changeHandler} />
                    <br />
                    <br />
                    <br />
                    <input type="text" name="ville" id="ville" placeholder={city[params.id - 1]} value={ville} onChange={this.changeHandler} />
                    <br />
                    <br />
                    <br />
                </div>
                <br />
                <br />
                <button type="submit" class="lienparcours">Modifier le profil fournisseur</button>
                <br />
                <br />
                <br />
                <br />
                <br />
                <button class="lienparcours" onClick={() => this.deleteFourn(params.id)}>
                    Supprimer le fournisseur
                </button>
                </form>
            </body>

        );
    }
}

export default Profilfourn;