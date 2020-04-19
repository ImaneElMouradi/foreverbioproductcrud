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

            <Route path="/categories">
              <CategoryPage />
            </Route>


          </Switch>
        </Router></div>
    );
  }
}

export default App;
