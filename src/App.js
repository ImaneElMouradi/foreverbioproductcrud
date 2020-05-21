import React, { Component } from "react";

import ProductPage from "./Pages/ProductPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./css/App.css";
import UserPage from "./Pages/UserPage";
import CategoryPage from "./Pages/CategoryPage";
import CommandePage from "./Pages/CommandePage";
import DeliveryPage from "./Pages/DeliveryPage";

import Login from "./components/auth/Login";
import DashboardAdmin from "./components/body/Home/DashboardAdmin";
import DashboardLivreur from "./components/body/Home/DashboardLivreur";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" exact>
              <Login />
            </Route>

            <Route path="/dashboardAdmin">
              <DashboardAdmin />
            </Route>

            <Route path="/dashboardLivreur">
              <DashboardLivreur />
            </Route>

            <Route path="/products">
              <ProductPage />
            </Route>

            <Route path="/users">
              <UserPage />
            </Route>

            <Route path="/categories">
              <CategoryPage />
            </Route>

            <Route path="/commandes">
              <CommandePage />
            </Route>

            <Route path="/deliveries">
              <DeliveryPage />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
