import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import HeaderAuth from "../HeaderAuth";
import HeaderCart from "../HeaderCart";
import styles from "./styles.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { link, container } = styles;
  const { user } = useSelector((state) => state.auth);
  return (
    <Navbar bg="light" expand="lg" className={`${container} mt-3`}>
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link className={link} as={NavLink} to={"/"}>
              Home
            </Nav.Link>
            <Nav.Link className={link} as={NavLink} to={"categories"}>
              Categories
            </Nav.Link>
            <Nav.Link className={link} as={NavLink} to={"about"}>
              About
            </Nav.Link>
            <Nav.Link className={link} as={NavLink} to={"contact"}>
              Contact
            </Nav.Link>
            {user.displayName === "admin" && (
              <Nav.Link className={link} as={NavLink} to={"admin"}>
                Dashboard
              </Nav.Link>
            )}
          </Nav>
          <HeaderAuth />
          <HeaderCart />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
