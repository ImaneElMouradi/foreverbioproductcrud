import React, { Component } from "react";

import "../../css/layout/Footer.css";

class Footer extends Component {
  render() {
    return (
      <>
        <footer className="fixed-bottom">
          <p>
            &copy;2020 - Forever<em className="text-success">BIO </em> - Imane
            El Mouradi
          </p>
        </footer>
      </>
    );
  }
}

export default Footer;
