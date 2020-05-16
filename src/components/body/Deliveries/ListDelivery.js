import React, { Component } from "react";
import { Table } from "reactstrap";
import axios from "axios";

import Delivery from "./Delivery";

export default class ListDelivery extends Component {
  state = {
    commande: [],
    idLivreur: 3,
  };

  fetchCommandesByIdLivreur = async () => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}/commandes`)
      .then((res) => {
        console.log(res.data);
        let commande = res.data.filter(
          (commande) => commande.idLivreur === this.state.idLivreur
        );

        console.log(commande);

        this.setState({ commande });
      });
  };

  componentDidMount = () => {
    this.fetchCommandesByIdLivreur();
  };

  onChangeSearchText = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    return (
      <>
        <div className="search-container search">
          <Table
            hover
            style={{
              marginLeft: "40px",
              marginRight: "auto",
              marginTop: "40px",
            }}
          >
            <thead>
              <tr>
                <th>Date</th>
                <th>Email</th>
                <th>Méthode de payement</th>
                <th>Etat</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {this.state.commande.map((commande) => (
                <Delivery
                  key={commande.id}
                  commande={commande}
                  fetchCommandesByIdLivreur={this.fetchCommandesByIdLivreur}
                  idLivreur={this.state.idLivreur}
                />
              ))}
            </tbody>
          </Table>
        </div>
      </>
    );
  }
}
