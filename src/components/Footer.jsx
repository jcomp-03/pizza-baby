import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";
import { isMobile, isDesktop } from "react-device-detect";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__div--img">
        <img src="/src/assets/images/pizza-baby-logo-round.png" />
      </div>

      <div className="footer__div--text">
        <span>
          <a href="">TOP</a> | <a href="">MENU</a> | <a href="">INFO</a> |{" "}
          <a href="">JOIN</a> | <a href="">GIFT CARDS</a>
        </span>
        <br />
        <span>
          Pizza Baby <br />
          <a href="https://www.google.com" target={"_blank"}>
            <FontAwesomeIcon
              className="font-awesome"
              icon={faMapPin}
              fixedWidth
            />{""}WEST
          </a>{" "}
          |{" "}
          <a href="https://www.google.com" target={"_blank"}>
            EAST
            <FontAwesomeIcon
              className="font-awesome"
              icon={faMapPin}
              fixedWidth
            />
          </a>
        </span>
      </div>

      <div className="footer__div--socials">
        <span className="">
          Follow us on Instagram!
          <a
            href={
              isMobile
                ? "instagram://user?username=jlcomp03"
                : "https://instagram.com/jlcomp03"
            }
            target={"_blank"}
          >
            <FontAwesomeIcon
              className="font-awesome"
              icon={faInstagramSquare}
              fixedWidth
            />
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
