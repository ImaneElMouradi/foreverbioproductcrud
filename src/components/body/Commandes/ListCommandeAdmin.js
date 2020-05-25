import React, { Component } from "react";
import { Table } from "reactstrap";
import axios from "axios";

import CommandeAdmin from "./CommandeAdmin";

class ListCommandeAdmin extends Component {
  state = {
    commande: [],
  };

  fetchCommandes = async () => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}/commandes`)
      .then((res) => {
        console.log(res.data);
        const commande = res.data.filter(
          (commande) => commande.state !== "Achevé"
        );

        console.log(commande);

        this.setState({ commande });
      });
  };

  componentDidMount = () => {
    this.fetchCommandes();
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
                <CommandeAdmin
                  key={commande.id}
                  commande={commande}
                  fetchCommandes={this.fetchCommandes}
                />
              ))}
            </tbody>
          </Table>
        </div>
      </>
    );
  }
}

export default ListCommandeAdmin;
