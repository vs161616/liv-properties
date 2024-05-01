import { Col, Container, Image, Nav, Navbar, Row } from "react-bootstrap";
// import { Mainlogo } from "./Icons";
import MainLogo from '../../assets/img/MainLogo.svg'

const Header = () => {
  return (
    <>
      <header className="MainHeader">
        <Container className="position-relative z-1">
          <Row>
            <Col lg={12}>
              <Image src={MainLogo} alt="" />
            </Col>
            <Col lg={12} className="mt-4">
              <Navbar expand="lg" className="CustomNav">
                {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
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
      </header>
    </>
  );
};

export default Header;