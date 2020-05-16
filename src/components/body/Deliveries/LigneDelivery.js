import React, { Component } from "react";

import "../../../css/body/User.css";

class LigneDelivery extends Component {
  state = {
    modalDeleteUser: false,
    modalUpdateUser: false,
    nomCat: "",
  };

  componentDidMount() {
    this.checkCategory();
  }

  checkCategory = () => {
    const { idCat } = this.props.ligneDelivery.product;
    if (idCat === 1) {
      return this.setState({ nomCat: "Visage" });
    } else if (idCat === 2) {
      return this.setState({ nomCat: "Cheveux" });
    } else if (idCat === 3) {
      return this.setState({ nomCat: "Huile" });
    } else if (idCat === 4) {
      return this.setState({ nomCat: "Peau" });
    } else if (idCat === 5) {
      return this.setState({ nomCat: "Aliment" });
    }
  };

  render() {
    const { qte, product, total } = this.props.ligneDelivery;
    console.log(product);
    return (
      <>
        <tr>
          <td>
            <img
              src={product.url}
              style={{
                height: "50px",
                width: "auto",
              }}
              alt="..."
              className="profilPicture"
            />
          </td>
          <td className="cell"> {this.state.nomCat}</td>
          <td className="cell">{product.nom}</td>
          <td className="cell">{product.prix} Dhs</td>
          <td className="cell">{qte}</td>
          <td className="cell">{total} Dhs</td>
        </tr>
      </>
    );
  }
}

export default LigneDelivery;
