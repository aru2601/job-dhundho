import React from "react";

// reactstrap components
import { Button, Container, Row, Col, FormGroup, Input } from "reactstrap";
import heroImage from "assets/img/theme/hero.png"; 

const Hero = () => { 
   

    return (
      <>
        <div className="position-relative">
          {/* Hero */}
          <section className="section section-hero section-shaped">
            {/* Background circles */}
            <div className="shape shape-style-1 shape-default">
              <span className="span-150" />
              <span className="span-50" />
              <span className="span-50" />
              <span className="span-75" />
              <span className="span-100" />
              <span className="span-75" />
              <span className="span-50" />
              <span className="span-100" />
              <span className="span-50" />
              <span className="span-100" />
            </div>
            <Container className="shape-container d-flex align-items-center py-lg">
              <div className="col px-0">
                <Row className="align-items-cente justify-content-cente">
                  <Col className="text-cente" lg="6">
                    {/* <img
                      alt="..."
                      className="img-fluid"
                      src={require("assets/img/brand/HikeyourHire2.png")}
                      style={{ width: "200px" }}
                    /> */}
                    <p className="lead text-white">
                    A powerful Platform for finding Jobs and Internship.
                    </p>

                    <div className="btn-wrapper mt-5">
                      <FormGroup style={{width: "90%"}} className="d-flex">
                        <Input placeholder="Find Your Spark" type="text" style={{padding: "30px", fontSize: "15px"}}/>
                        <Button className="btn-1" color="warning" type="button">
                          Search
                        </Button>
                      </FormGroup>
                    </div>
                    <div className="mt-5">
                      <small className="text-white font-weight-bold mb-0 mr-2">
                        *Popular searches 
                        <div style={{gap: "30px"}} className="mt-1 mb-2">
                          <Button className="border p-1 m-1 " style={{borderRadius: "20px", background: "none", color: "white"}}>
                            <span className="btn-inner--icon mr-1">
                              <i className="fa fa-search" />
                            </span>
                            <span>Data Science</span>
                          </Button>
                          <Button className="border p-1 m-1 " style={{borderRadius: "20px", background: "none", color: "white"}}>
                            <span className="btn-inner--icon mr-1">
                              <i className="fa fa-search" />
                            </span>
                            <span>Tech Support</span>
                          </Button>
                          <Button className="border p-1 m-1 " style={{borderRadius: "20px", background: "none", color: "white"}}>
                            <span className="btn-inner--icon mr-1">
                              <i className="fa fa-search" />
                            </span>
                            <span>Web Developer</span>
                          </Button>
                          <Button className="border p-1 m-1 " style={{borderRadius: "20px", background: "none", color: "white"}}>
                            <span className="btn-inner--icon mr-1">
                              <i className="fa fa-search" />
                            </span>
                            <span>Business Development</span>
                          </Button>
                          <Button className="border p-1 m-1 " style={{borderRadius: "20px", background: "none", color: "white"}}>
                            <span className="btn-inner--icon mr-1">
                              <i className="fa fa-search" />
                            </span>
                            <span>Content Writer</span>
                          </Button>
                          
                          
                        </div>
                        
                      </small>
                      
                    </div>
                  </Col>
                  <Col className="mb-lg-auto" lg="6">
                    <div className="rounded shadow-lg overflow-hidden transform-perspective-righ">
                      <img
                        alt="..."
                        className="img-fluid"
                        src={heroImage}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
            
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
        </div>
      </>
    );
  }


export default Hero;
