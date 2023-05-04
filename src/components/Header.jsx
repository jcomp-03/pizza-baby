import React from "react";
import {isMobile, isDesktop } from 'react-device-detect';
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../assets/images/favicon_io_logo_dark_transparent_png/favicon-32x32.png";
// FontAwesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      bg="light"
      variant="light"
      sticky="top"
    >
      <Navbar.Brand href="#jumbotron">
        <img src={logo} alt="Pizza Baby logo"></img>
      </Navbar.Brand>
      <div className="socials-hamburger-container">
        <span className="span-social-media">
          <a href="https://www.google.com" target={"_blank"}>
            <FontAwesomeIcon
              className="font-awesome"
              icon={faPhone}
              fixedWidth
            />
          </a>
          <a href={isMobile ? "instagram://user?username=jlcomp03" : "https://instagram.com/jlcomp03"} target={"_blank"}>
            <FontAwesomeIcon
              className="font-awesome"
              icon={faInstagramSquare}
              fixedWidth
            />
          </a>
        </span>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      </div>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          {/* <Nav.Link className="nav__link" href="#about">
            About
          </Nav.Link> */}
          <Nav.Link className="nav__link" href="#menu">
            Menu
          </Nav.Link>
          <Nav.Link className="nav__link" href="#locations">
            Hours & Locations
          </Nav.Link>
          {/* <Nav.Link className="nav__link" href="#reservations">
            Reservations
          </Nav.Link> */}
          {/* <Nav.Link className="nav__link" href="#takeout">
            Takeout
          </Nav.Link> */}
          <Nav.Link className="nav__link" href="#join">
            Join Our Team
          </Nav.Link>
          <Nav.Link className="nav__link" href="#press">
            Press
          </Nav.Link>
          <NavDropdown
            className="nav__link test"
            title="A&C Food Group"
            id="nav-dropdown"
          >
            <NavDropdown.Item href="https://flourshopfood.com/" target="_blank">
              Flour Shop
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another restaurant
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">One more</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Art & Commerce Food Group
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
