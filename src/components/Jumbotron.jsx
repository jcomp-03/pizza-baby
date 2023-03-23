import React from "react";
import logo from "../assets/images/pizza-baby-logo-white.png";

function Jumbotron() {
  return (
    <div className="jumbotron" id="jumbotron">
      <img
        src={logo}
        className="jumbotron__logo"
        alt="Pizza Baby restaurant logo"
      />
      <div className="jumbotron__motto motto--mobile">pizza for the people!</div>
      <div className="jumbotron__motto motto--tablet">
        modern style pizza, meticulously-sourced ingredients.<br></br>
        full-service, beer, wine, & groovy music
      </div>
    </div>
  );
}

export default Jumbotron;
