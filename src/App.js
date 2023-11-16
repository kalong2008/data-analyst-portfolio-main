import React from "react";
import { About, Introcution, Contact, Skills, Work } from "./container";
import { Navbar, Footer } from "./components";

import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Introcution />
      <About />
      <Work />
      <Skills />
      <Contact />
      <Footer />

    </div>
  );
};

export default App;
