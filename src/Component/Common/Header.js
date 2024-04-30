import React from "react";
import Mainlogo from "./Icons";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";

const Header = () => {
  return (
    <Header>
      <Container>
        <Row>
          <Col lg={12}>
            <Mainlogo />
          </Col>
          <Col lg={12}>
            <Navbar expand="lg" className="CustomNav">
              <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto gap-3">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">About</Nav.Link>
                  <Nav.Link href="#link">Properties</Nav.Link>
                  <Nav.Link href="#link">Services</Nav.Link>
                  <Nav.Link href="#link">Contact</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </Header>
  );
};

export default Header;
