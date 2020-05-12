import React from "react";
import Logo from "../Images/Logo-Musty.png";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "../App.css";

function MenuBar() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand>
          <Link to="/">
            <img
              src={Logo}
              width="140px"
              height="65px"
              className="d-inline-block align-top"
              alt="Musty Logo"
            />
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navbar-nav ml-auto mx-auto">
            <Nav.Link>
              {" "}
              <Link
                to="/"
                style={{ textDecoration: "none" }}
                className="link-category"
              >
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link
                to="/about"
                style={{ textDecoration: "none" }}
                className="link-category"
              >
                About
              </Link>
            </Nav.Link>

            <NavDropdown title="Kategori" id="collasible-nav-dropdown">
              <NavDropdown.Item>
                <Link
                  to="/"
                  style={{ textDecoration: "none" }}
                  className="link-category"
                >
                  Konser
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  to="/"
                  style={{ textDecoration: "none" }}
                  className="link-category"
                >
                  Album
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  to="/"
                  style={{ textDecoration: "none" }}
                  className="link-category"
                >
                  Alat Musik
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="dark">Search</Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default MenuBar;
