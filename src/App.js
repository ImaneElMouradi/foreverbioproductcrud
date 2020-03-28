import React from "react";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import ListProduct from "./components/body/ListProduct";
import AddProduct from "./components/body/AddProduct";

import "./css/App.css";

function App() {
  return (
    <>
      <Header />
      <AddProduct />
      <ListProduct />
      <Footer />
    </>
  );
}

export default App;
