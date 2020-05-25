import React, { Component } from "react";
import { Table } from "reactstrap";
import axios from "axios";

import ModalAddVendeur from "../Vendeur/ModalAddVendeur";
import Vendeur from "./Vendeur";

class ListVendeur extends Component {
  state = {
    vendeurs: [],
  };

  fetchVendeurs = async () => {
    return axios.get(`${process.env.REACT_APP_API_URL}/Vendeur`).then((res) => {
      const vendeurs = res.data;
      console.log(vendeurs);
      this.setState({ vendeurs });
    });
  };

  componentDidMount = () => {
    this.fetchVendeurs();
  };

  render() {
    return (
      <>
        <ModalAddVendeur fetchVendeurs={this.fetchVendeurs} />
        <div
          style={{
            margin: "50px",
          }}
        >
          <Table
            hover
            style={{
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <thead>
              <tr>
                <th>Photo</th>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Ville</th>
                <th>Région</th>
              </tr>
            </thead>
            <tbody>
              {this.state.vendeurs.map((vendeur) => (
                <Vendeur
                  key={vendeur.id}
                  vendeur={vendeur}
                  fetchVendeurs={this.fetchVendeurs}
                />
              ))}
            </tbody>
          </Table>
        </div>
      </>
    );
  }
}

export default ListVendeur;
