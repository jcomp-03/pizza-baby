import React from "react";
import logo from "../assets/images/pizza-baby-logo-white.png";

function Jumbotron() {
  return (
    <div className="jumbotron">
      <img src={logo} className="jumbotron__logo" alt="Pizza Baby restaurant logo" />
      <div className="jumbotron__motto--mobile">pizza for the people!</div>
      <div className="jumbotron__motto--tablet">modern style pizza,
      beer, wine, & groovy music.<br></br>that's all.</div>
    </div>
  );
}

export default Jumbotron;
