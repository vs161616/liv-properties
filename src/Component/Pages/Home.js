import React, { useState } from "react";
import {
  Col,
  Container,
  Image,
  Nav,
  Navbar,
  Row,
  Tab,
  Tabs,
} from "react-bootstrap";
import { Bath, Mainlogo, Room, Squearfeet } from "../Common/Icons";
// import Mainlogo from '../Common/Icons'
import TopImg from "../../assets/img/homebg.png";
import ProImg from "../../assets/img/proimg.png"

import Fullpage, {
  FullPageSections,
  FullpageSection,
} from "@ap.cx/react-fullpage";

const Home = () => {
  const [key, setKey] = useState("Ready");
  return (
    <>
      <header className="MainHeader">
        <Container className="position-relative z-1">
          <Row>
            <Col lg={12}>
              <Mainlogo />
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

      <Fullpage>
        <FullPageSections>
          <FullpageSection style={{ height: "100vh" }}>
            <section className="SectionTop">
              <Container className="position-relative z-1">
                <Row>
                  <Col lg={6}>
                    <h1 className="TitleFonts">
                      Timeless <br></br> luxury <br></br> re-imagined{" "}
                    </h1>
                  </Col>
                </Row>

                <Row>
                  <Col lg={12}>
                    <div className="TabSection">
                      <Tabs
                        defaultActiveKey="profile"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                      >
                        <Tab eventKey="Ready" title="Ready">
                          <Navbar expand="lg" className="CustomNav">
                            <Navbar.Collapse id="basic-navbar-nav">
                              <Nav className="me-auto gap-3">
                                <Nav.Link href="#home">Buy</Nav.Link>
                                <Nav.Link href="#link">
                                  Community or Building
                                </Nav.Link>
                                <Nav.Link href="#link">Location</Nav.Link>
                                <Nav.Link href="#link">Price</Nav.Link>
                                <Nav.Link href="#link">Search</Nav.Link>
                              </Nav>
                            </Navbar.Collapse>
                          </Navbar>
                        </Tab>
                        <Tab eventKey="NewProject" title="New Project">
                          Tab content for New Project
                        </Tab>
                      </Tabs>
                    </div>
                  </Col>
                </Row>
              </Container>
              <div className="TopBG">
                <Image src={TopImg} className="w-100" />
              </div>
            </section>
          </FullpageSection>

          <FullpageSection style={{ height: "100vh" }}>
            <section className="FeaturedSection">
              <div>
              <h1 className="TitleFeature">
                      Featured <br></br> Properties
                    </h1>
              </div>
              <div className="d-flex mt-5">
                <div className="ProductBox">
                  <div className="ProImg">
                    <Image src={ProImg} className="w-100" />
                  </div>
                  <div className="ProDetails">
                    <h3>Canal View Villa</h3>
                    <p>Vezul Residence, Business Bay.</p>
                    <div className="Animate">
                      <div>
                        <span><Room/></span>
                        <span>2</span>
                      </div>
                      <div>
                        <span><Bath/></span>
                        <span>2</span>
                      </div>
                      <div>
                        <span><Squearfeet/></span>
                        <span>1273 sqft</span>
                      </div>
                    </div>

                    <div className="ProPrice">
                      <h2>AED 1,560.00</h2>
                    </div>
                  </div>
                </div>

                <div className="ProductBox">
                  <div className="ProImg">
                    <Image src={ProImg} className="w-100" />
                  </div>
                  <div className="ProDetails">
                    <h3>Canal View Villa</h3>
                    <p>Vezul Residence, Business Bay.</p>
                    <div className="Animate">
                      <div>
                        <span><Room/></span>
                        <span>2</span>
                      </div>
                      <div>
                        <span><Bath/></span>
                        <span>2</span>
                      </div>
                      <div>
                        <span><Squearfeet/></span>
                        <span>1273 sqft</span>
                      </div>
                    </div>

                    <div className="ProPrice">
                      <h2>AED 1,560.00</h2>
                    </div>
                  </div>
                </div>

                <div className="ProductBox">
                  <div className="ProImg">
                    <Image src={ProImg} className="w-100" />
                  </div>
                  <div className="ProDetails">
                    <h3>Canal View Villa</h3>
                    <p>Vezul Residence, Business Bay.</p>
                    <div className="Animate">
                      <div>
                        <span><Room/></span>
                        <span>2</span>
                      </div>
                      <div>
                        <span><Bath/></span>
                        <span>2</span>
                      </div>
                      <div>
                        <span><Squearfeet/></span>
                        <span>1273 sqft</span>
                      </div>
                    </div>

                    <div className="ProPrice">
                      <h2>AED 1,560.00</h2>
                    </div>
                  </div>
                </div>

                <div className="ProductBox">
                  <div className="ProImg">
                    <Image src={ProImg} className="w-100" />
                  </div>
                  <div className="ProDetails">
                    <h3>Canal View Villa</h3>
                    <p>Vezul Residence, Business Bay.</p>
                    <div className="Animate">
                      <div>
                        <span><Room/></span>
                        <span>2</span>
                      </div>
                      <div>
                        <span><Bath/></span>
                        <span>2</span>
                      </div>
                      <div>
                        <span><Squearfeet/></span>
                        <span>1273 sqft</span>
                      </div>
                    </div>

                    <div className="ProPrice">
                      <h2>AED 1,560.00</h2>
                    </div>
                  </div>
                </div>

                <div className="ProductBox">
                  <div className="ProImg">
                    <Image src={ProImg} className="w-100" />
                  </div>
                  <div className="ProDetails">
                    <h3>Canal View Villa</h3>
                    <p>Vezul Residence, Business Bay.</p>
                    <div className="Animate">
                      <div>
                        <span><Room/></span>
                        <span>2</span>
                      </div>
                      <div>
                        <span><Bath/></span>
                        <span>2</span>
                      </div>
                      <div>
                        <span><Squearfeet/></span>
                        <span>1273 sqft</span>
                      </div>
                    </div>

                    <div className="ProPrice">
                      <h2>AED 1,560.00</h2>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </FullpageSection>
          <FullpageSection style={{ height: "100vh" }}>
            Section 03
          </FullpageSection>
        </FullPageSections>
      </Fullpage>
    </>
  );
};

export default Home;
