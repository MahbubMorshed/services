import React from "react";
import logo from "../../../images/logo.png";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleLogout = () => {
    signOut(auth);
  };
  return (
    <Navbar collapseOnSelect sticky="top" expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img height={40} src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="home#services">Services</Nav.Link>
            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
          <Nav>
            {/* <Nav.Link href="#services" as={Link} to="services">
              Services
            </Nav.Link> */}
            <Nav.Link as={Link} to="blog">
              Blog
            </Nav.Link>
            <Nav.Link as={Link} to="about">
              About
            </Nav.Link>
            {user ? (
              <button
                className="btn btn-link text-decoration-none text-light"
                onClick={handleLogout}
              >
                Log out
              </button>
            ) : (
              <Nav.Link as={Link} to="login">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
