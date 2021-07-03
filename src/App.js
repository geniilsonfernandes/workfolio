import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import NavMenu from "./components/NavMenu/NavMenu";
import Router from "./router";

function App() {
  return (
    <BrowserRouter>
      <NavMenu />
      <Router />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
