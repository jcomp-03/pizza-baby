import React, { useState } from "react";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import About from "./components/About";
import Menu from "./components/Menu";
import Locations from "./components/Locations";
import Join from "./components/Join";
import Reservations from "./components/Reservations";
import TakeOut from "./components/TakeOut";
import Press from "./components/Press";


function App() {
  return (
    <div className="App">
      <Header />
      <Jumbotron />
      <About />
      <Menu />
      <Locations />
      <Reservations />
      <TakeOut />
      <Join />
      <Press />
    </div>
  );
}

export default App;
