import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <section id="contact" className="section__contact">
      <h1 className="section__title">Contact</h1>
      <div className="section__content">
        <span className="contact__number">West</span>: {` (`}123{`)`}456-7890
        <a href="tel:+17865806505">
            <FontAwesomeIcon
              className="font-awesome"
              icon={faPhone}
              fixedWidth
            />
          </a>
        <br />
        <br />
        <span className="contact__number">East</span>: {` (`}123{`)`}456-7890
        <a href="tel:+17865806505">
            <FontAwesomeIcon
              className="font-awesome"
              icon={faPhone}
              fixedWidth
            />
          </a>
        <br />
        <br />
        <span className="contact__email">Email:</span>
        <span className="contact__email--events">Events:</span> events@pizzababypizza.com
        <br />
        <span className="contact__email--other">Other:</span> management@pizzababypizza.com
      </div>
    </section>
  );
}

export default Contact;
