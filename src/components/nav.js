import React, { useState } from "react";
import { Nav, Navbar, Container, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSun, faMoon, faSearch } from '@fortawesome/free-solid-svg-icons';

const NavbarComponent = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality
    console.log("Searching for:", searchQuery);
  };

  return (
    <Navbar bg={darkMode ? "dark" : "light"} variant={darkMode ? "dark" : "light"} expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.2VSfGtUxNQKqFMjEWJhn8QAAAA&pid=Api&P=0&h=180"
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="Ideal Café logo"
          />
          Ideal Café
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/menu">Menu</Nav.Link>
            <Nav.Link as={Link} to="/offers">Offers</Nav.Link>
            <Nav.Link as={Link} to="/locations">Locations</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
          </Nav>
          <Form className="d-flex me-3" onSubmit={handleSearch}>
            <FormControl
              type="search"
              placeholder="Search dishes..."
              className="me-2"
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button variant="outline-success" type="submit">
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </Form>
          <Nav>
            <Nav.Link as={Link} to="/cart" className="me-2">
              <FontAwesomeIcon icon={faShoppingCart} />
              <span className="ms-1">Cart</span>
            </Nav.Link>
            <Nav.Link onClick={toggleDarkMode}>
              <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
            </Nav.Link>
            <Nav.Link as={Link} to="/signin" className="ms-2">Sign In</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;