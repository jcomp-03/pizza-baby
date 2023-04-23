import React, { useState } from "react";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import About from "./components/About";
import HoursLocationContact from "./components/HoursLocationContact";
import Menu from "./components/Menu";
import Join from "./components/Join";
import Reservations from "./components/Reservations";
import TakeOut from "./components/TakeOut";
import Press from "./components/Press";
import Footer from "./components/Footer";
import { ViewportProvider } from "./utils/viewportContext";

function App() {
  return (
    <div className="App">
      {/* wrap the components that need access to shared data with a Provider
      component */}
      <ViewportProvider>
        <Header />
        <Jumbotron />
        <About />
        <HoursLocationContact />
        <Menu />
        {/* <Reservations /> */}
        {/* <TakeOut /> */}
        <Join />
        <Press />
        <Footer />
      </ViewportProvider>
    </div>
  );
}

export default App;
