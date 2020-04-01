import React, { Component } from "react";


import ProductPage from "./Pages/ProductPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import "./css/App.css";
import UserPage from "./Pages/UserPage";

class App extends Component {


  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/products">
              <ProductPage />
            </Route>

            <Route path="/users">
              <UserPage />
            </Route>


          </Switch>
        </Router></div>
    );
  }
}

export default App;
