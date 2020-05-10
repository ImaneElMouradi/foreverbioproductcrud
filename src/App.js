import React, { Component } from "react";


import ProductPage from "./Pages/ProductPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import "./css/App.css";
import UserPage from "./Pages/UserPage";
import CategoryPage from "./Pages/CategoryPage";
import FournisseurPage from "./Pages/FournisseurPage";
import ProfilFournisseurPage from "./Pages/ProfilFournisseurPage";
import CommandePage from "./Pages/CommandePage";

class App extends Component {

  
  render() {
   
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/products">
              <ProductPage />
            </Route>

            <Route path="/fournisseurs">
              <FournisseurPage />
            </Route>

            <Route path="/users">
              <UserPage />
            </Route>

            <Route path="/categories">
              <CategoryPage />
            </Route>

            <Route path='/fourn/:id'>
                <ProfilFournisseurPage   />
            </Route>
            <Route path="/commandes">
              <CommandePage />
            </Route>

          </Switch>
        </Router></div>
    );
  }
}

export default App;
