import React from "react";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import ListProduct from "./components/body/ListProduct";

import "./css/App.css";

function App() {
  return (
    <>
      <Header />
      <ListProduct />
      <Footer />
    </>
  );
}

export default App;
