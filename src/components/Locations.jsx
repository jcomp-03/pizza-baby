import React, { useState } from "react";
import MapBox from "./MapBox";

function Locations() {
  return (
    <section id="locations" className="section__locations">
      <h1 className="section__title">Locations</h1>
      <div className="section__content">
        <span>West</span>: 2135 Thrift Rd, Charlotte, NC 28208
        <br />
        {` (`}next to the Coterie{`)`}
        <br />
        <span>East</span>: 1603 Elizabeth Ave, Charlotte, NC 28204
        <br />
        {` (`}next to Customshop{`)`}
        <div id="mapBox" className="mapBox">
          <MapBox />
        </div>
      </div>
    </section>
  );
}

export default Locations;
