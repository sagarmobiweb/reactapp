import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function navigation() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand>
            <Link to="">
              <img
                className="d-inline-block"
                src="./assets/image/MOBiWEB.png"
                alt="MobiWebCreations"
              />
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mynav">
              <Nav.Item>
                <Nav.Link>
                  <Link to="">Home</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <Link to="about"> About us</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <NavDropdown title="Services">
                  <NavDropdown.Item>
                    <Link to="ios"> iOS Mobile App Development</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                    <Link to="android"> Android Mobile App Development</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                    <Link to="hybrid"> Hybrid Mobile App Development</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                    <Link to="progressiveweb">
                      Progressive Web App Development
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                    <Link to="flutter">Flutter Mobile App Development</Link>
                  </NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                    <Link to="ionic">Ionic Mobile App Development</Link>
                  </NavDropdown.Item>

                      <NavDropdown.Divider />
                  <NavDropdown.Item>
                    <Link to="kotline">Kotline Mobile App Development</Link>
                  </NavDropdown.Item>





                </NavDropdown>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <Link to="blog">Blog </Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <Link to="contactus">Contact Us </Link>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default navigation;
