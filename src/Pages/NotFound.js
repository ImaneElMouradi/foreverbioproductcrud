import React, { Component } from "react";

import "../css/layout/Error.css";

export default class NotFound extends Component {
  render() {
    return (
      <div className="container introuvable">
        <h1 className="not-found">Error 404 !</h1>
        <p className="error-msg">La page que vous cherchez est introuvable,</p>
        <p className="small">
          La page n'existe pas ou est en cours de construction.
        </p>
      </div>
    );
  }
}
