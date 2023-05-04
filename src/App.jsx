import React, { useState } from "react";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import HoursLocationContact from "./components/HoursLocationContact";
import Menu from "./components/Menu";
import Join from "./components/Join";
import Press from "./components/Press";
import Footer from "./components/Footer";
import { ViewportProvider } from "./utils/viewportContext";
// import About from "./components/About";
// import Reservations from "./components/Reservations";
// import TakeOut from "./components/TakeOut";
console.log(`App is running in mode ${import.meta.env.MODE}`);
function App() {
  return (
    <div className="App">
      {/* wrap the components that need access to shared data with a Provider
      component */}
      <ViewportProvider>
        <Header />
        <Jumbotron />
        <HoursLocationContact />
        <Menu />
        <Join />
        <Press />
        <Footer />
      </ViewportProvider>
    </div>
  );
}

export default App;
