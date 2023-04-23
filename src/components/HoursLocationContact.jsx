import React, { useState } from "react";
import Hours from "./Hours";
import Locations from "./Locations";
import Contact from "./Contact";

function HoursLocationContact() {
  return (
    <section
      id="hours-location-contact"
      className="section section__hours-locations-contact"
    >
      <Hours />
      <Locations />
      <Contact />
    </section>
  );
}

export default HoursLocationContact;
