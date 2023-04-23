import React, { useState } from "react";
// FontAwesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faPizzaSlice } from "@fortawesome/free-solid-svg-icons";

function Menu() {
  return (
    <section id="menu" className="section section__menu">
      <h1 className="section__title">The Menu</h1>
      <div className="section__content">
        <p>Click below for the full menu</p>
        <a download href="/src/assets/files/test.pdf">
          <FontAwesomeIcon
            className="font-awesome menu-icon"
            icon={faUtensils}
            fixedWidth
          />
          <FontAwesomeIcon
            className="font-awesome menu-icon"
            icon={faPizzaSlice}
            fixedWidth
            flip="horizontal"
          />
        </a>
      </div>
    </section>
  );
}

export default Menu;
