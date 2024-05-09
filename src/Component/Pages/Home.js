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
import {
  Bath,
  DownArrow,
  FacebookIcon,
  FootInstaIcon,
  InstaIcon,
  LinkDinIcon,
  Room,
  SearchIcon,
  Squearfeet,
  XIcon,
} from "../comman/Icons";
// import Mainlogo from '../Common/Icons'
import TopImg from "../../assets/img/homebg.png";
import Banner from "../../assets/img/banner.jpeg";
import ProImg from "../../assets/img/proimg.png";

import img01 from "../../assets/img/img01.png";
import img02 from "../../assets/img/img02.png";
import img03 from "../../assets/img/img03.png";

import ReactPageScroller, { SectionContainer } from 'react-page-scroller';

import { Link } from "react-router-dom";

const Home = () => {
  const [key, setKey] = useState("Ready");
  return (
    <>
      <div>
        <ReactPageScroller>
          <section className="SectionTop">
            <Container className="position-relative z-1">
              <Row>
                <Col lg={6}>
                  <h1 className="TitleFonts">
                    Timeless <br></br> luxury <br></br> re-imagined
                  </h1>
                </Col>
              </Row>
            </Container>
            <Container className="z-1">
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
                            <Nav className="me-auto gap-4">
                              <Nav.Link href="#home" className="af-r">Buy <DownArrow/></Nav.Link>
                              <Nav.Link href="#link">
                                Community or Building
                              </Nav.Link>
                              <Nav.Link href="#link">Location</Nav.Link>
                              <Nav.Link href="#link">Price</Nav.Link>
                              <Nav.Link href="#link" className="af-r">Search <SearchIcon/></Nav.Link>
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
            <div className="Cloud"></div>
          </section>

          <section className="FeaturedSection">
            <Container className="me-0">
              <Row>
                <Col lg={12}>
                  <div className="TitleAndTabs">
                    <h1 className="TitleFeature">
                      Featured <br></br> Properties
                    </h1>

                    <div className="TabFeatured">
                      <Tabs
                        defaultActiveKey="Villas"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                      >
                        <Tab eventKey="Villas" title="Villas"></Tab>
                        <Tab eventKey="Apartments" title="Apartments"></Tab>
                        <Tab eventKey="View All" title="View All"></Tab>
                      </Tabs>

                      <Tabs
                        defaultActiveKey="Buy"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                      >
                        <Tab eventKey="Rent" title="Rent"></Tab>
                        <Tab eventKey="Buy" title="Buy"></Tab>
                        <Tab eventKey="Sell" title="Sell"></Tab>
                      </Tabs>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <div className="d-flex mt-5 justify-content-end">
                    <div className="ProductBox">
                      <div className="ProImg">
                        <Image src={ProImg} className="w-100" />
                      </div>
                      <div className="ProDetails">
                        <h3>Canal View Villa</h3>
                        <p>Vezul Residence, Business Bay.</p>
                        <div className="Animate">
                          <div>
                            <span>
                              <Room />
                            </span>
                            <span>2</span>
                          </div>
                          <div>
                            <span>
                              <Bath />
                            </span>
                            <span>2</span>
                          </div>
                          <div>
                            <span>
                              <Squearfeet />
                            </span>
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
                            <span>
                              <Room />
                            </span>
                            <span>2</span>
                          </div>
                          <div>
                            <span>
                              <Bath />
                            </span>
                            <span>2</span>
                          </div>
                          <div>
                            <span>
                              <Squearfeet />
                            </span>
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
                            <span>
                              <Room />
                            </span>
                            <span>2</span>
                          </div>
                          <div>
                            <span>
                              <Bath />
                            </span>
                            <span>2</span>
                          </div>
                          <div>
                            <span>
                              <Squearfeet />
                            </span>
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
                        <Link href="#">Explore All</Link>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          <section className="ServiceSection">
            <Container className="me-0">
              <Row>
                <Col lg={12}>
                  <div className="TitleAndTabs align-items-baseline flex-column gap-0 mb-4">
                    <h1 className="TitleFeature">Our Services</h1>
                    <p className="m-0">
                      A comprehensive investment <br></br> experience tailored
                      to high-end needs
                    </p>
                  </div>
                </Col>
              </Row>

              <Row className="py-4">
                <Col lg={4}>
                  <div className="ServiceBox pe-5">
                    <h4>Sales</h4>
                    <p className="m-0">
                      Liv Squared team of professional agents boast a strategic
                      mindset, powered by a pool of high-end properties — in
                      collaboration with top developers and investors- which
                      allows them to identify the...
                    </p>
                    <Link href="#">Read More</Link>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="ServiceBox pe-5">
                    <h4>Current Services</h4>
                    <p className="m-0">
                      Liv Squared team of professional agents boast a strategic
                      mindset, powered by a pool of high-end properties — in
                      collaboration with top developers and investors- which
                      allows them to identify the...
                    </p>
                    <Link href="#">Read More</Link>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="ServiceBox pe-5 lastafter">
                    <h4>After Sales</h4>
                    <p className="m-0">
                      Liv Squared team of professional agents boast a strategic
                      mindset, powered by a pool of high-end properties — in
                      collaboration with top developers and investors- which
                      allows them to identify the...
                    </p>
                    <Link>Read More</Link>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <div className="BannerBottom">
                    <Image src={Banner} className="w-100" />
                    <div className="Details">
                      <h3>Personalised Investment Advisory</h3>
                      <p>
                        Connect with us for a comprehensive real estate
                        investment <br></br> experience tailored to high end
                        needs
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          
          <SectionContainer height={100}>
            <div className="CommenDiv">
          <section className="InstaSection">
            <Container className="me-0">
              <Row className="justify-content-end">
                <Col lg={8}>
                  <div className="TitleAndTabs align-items-baseline flex-column gap-0 mb-4">
                    <h1 className="TitleFeature">Instagram</h1>
                    <div className="Insafollow">
                      <InstaIcon />
                      <p className="m-0">Livproperties</p>
                    </div>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col lg={12}>
                  <div className="InstaGrid">
                    <div className="InstaImg">
                      <Image src={img01} className="w-100" />
                    </div>
                    <div className="InstaImg">
                      <Image src={img02} className="w-100" />
                    </div>
                    <div className="InstaImg">
                      <Image src={img03} className="w-100" />
                    </div>
                    <div className="InstaImg Expo">
                      <Image src={ProImg} className="w-100" />
                      <Link href="#">Explore All</Link>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <footer className="footdesign">
            <Container fluid className="px-5">
              <Row>
                <Col lg={5}>
                  <div className="footone">
                    <p>
                      A World of Leading Expertise <br></br> Exclusively yours
                    </p>
                    <h5>
                      Sign up for our newsletter to stay updated <br></br> with
                      what's new in UAE real estate
                    </h5>
                  </div>
                  <div className="mt-4">
                    <form>
                      <div className="Newsletter">
                        <input type="email" placeholder="Enter your email" />
                        <button>Sign Up</button>
                      </div>
                    </form>
                  </div>
                </Col>
                <Col lg={7}>
                  <Row>
                    <Col lg={4}>
                      <div className="FootMenus">
                        <h6>Explore Residential in</h6>
                        <ul>
                          <li>
                            <Link href="#">Palm Jumeirah</Link>
                          </li>
                          <li>
                            <Link href="#">Jumeirah Beach Residence</Link>
                          </li>
                          <li>
                            <Link href="#">Dubai Marina</Link>
                          </li>
                          <li>
                            <Link href="#">Downtown Dubai</Link>
                          </li>
                          <li>
                            <Link href="#">Business Bay</Link>
                          </li>
                          <li>
                            <Link href="#">Dubai Hills</Link>
                          </li>
                          <li>
                            <Link href="#">City Walk</Link>
                          </li>
                        </ul>
                      </div>
                    </Col>

                    <Col lg={4}>
                      <div className="FootMenus">
                        <h6>Liv Squared</h6>
                        <ul>
                          <li>
                            <Link href="#">About us</Link>
                          </li>
                          <li>
                            <Link href="#">Services</Link>
                          </li>
                          <li>
                            <Link href="#">Investment</Link>
                          </li>
                          <li>
                            <Link href="#">Sell your property</Link>
                          </li>
                          <li>
                            <Link href="#">Careers</Link>
                          </li>
                          <li>
                            <Link href="#">Blogs & news</Link>
                          </li>
                          <li>
                            <Link href="#">Contact us</Link>
                          </li>
                        </ul>
                      </div>
                    </Col>

                    <Col lg={4}>
                      <div>{/* <Mainlogo /> */}</div>

                      <div className="FootAddress">
                        <p>Office 304, Bay Square 11, Business</p>
                        <p>Bay, Dubai, UAE</p>
                        <p>Ph: +971 04 111 1111</p>
                        <p>Email: info@example.com</p>
                      </div>

                      <div className="FootSocial">
                        <ul>
                          <li>
                            <Link href="#">
                              <FacebookIcon />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <XIcon />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <FootInstaIcon />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <LinkDinIcon />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>

            <Container fluid className="px-5">
              <Row>
                <Col lg={12}>
                  <div className="FooterBarBottom mt-5">
                    <div>Designed & Developed by Cheval</div>
                    <div>© 2024 LIV Properties . All rights reserved</div>
                  </div>
                </Col>
              </Row>
            </Container>
          </footer>
          </div>
          </SectionContainer>
          
        </ReactPageScroller>
      </div>

      
    </>
  );
};

export default Home;
