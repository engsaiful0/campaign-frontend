import React from "react";
import "./style.css";
import { Nav, Navbar, Container, Image } from "react-bootstrap";
const NavBar = () => {
  return (
    <section id="nav-bar">
      <Navbar expand="lg" className="navbar-light">
        <Navbar.Brand href="#">
          
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#testimonials">Testimonials</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </section>
  );
};
export default NavBar;
