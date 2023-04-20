import React, { useState } from "react";
import Menu from "./Menu";
import Locations from "./Locations";
import Contact from "./Contact";

function MenuLocationsContact() {
  return (
    <section
      id="menu-location-contact"
      className="section section__menu-location-contact"
    >
      <Menu />
      <Locations />
      <Contact />
    </section>
  );
}

export default MenuLocationsContact;
