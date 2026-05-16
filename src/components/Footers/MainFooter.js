import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
    Button,
    Container,
    Row,
    Col,
    UncontrolledTooltip,
} from "reactstrap";

class MainFooter extends React.Component {
    render() {
        return (
            <>
                <Container className="container-fluid text-dark">
                    <footer className="text-center text-lg-start bg-white text-muted">
                        <section className="">
                            <div className="container  text-md-start mt-5">
                                <div className="row mt-3">
                                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                        {/* <Link to="/" >
                                            <h6 className="fw-bold mb-4">
                                                HikeYourHire
                                            </h6>
                                            <img
                                                alt="..."
                                                src={require("assets/img/brand/HikeyourHire2.png")}
                                                style={{ height: "60px"}}
                                                className="bg-dark"
                                            />
                                        </Link> */}
                                        <p>
                                            Your gateway to dream jobs and internships, connecting individuals with tailored opportunities for professional growth and success.
                                        </p>
                                    </div>

                                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                        <h6 className="text-uppercase fw-bold mb-4">
                                            For Candidates
                                        </h6>
                                        <p>
                                            <Link to="/jobs" className="text-reset">Latest Jobs</Link>
                                        </p>
                                        <p>
                                            <Link to="/jobs" className="text-reset">Internships</Link>
                                        </p>
                                        <p>
                                            <Link to="/blog" className="text-reset">Blog</Link>
                                        </p>
                                        <p>
                                            <Link to="#!" className="text-reset">Career Advice</Link>
                                        </p>
                                    </div>

                                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                        <h6 className="text-uppercase fw-bold mb-4">
                                            Useful links
                                        </h6>
                                        <p>
                                            <Link to="/about" className="text-reset">About us</Link>
                                        </p>
                                        <p>
                                            <Link to="#!" className="text-reset">Privacy</Link>
                                        </p>
                                        <p>
                                            <Link to="#!" className="text-reset">terms & conditions</Link>
                                        </p>
                                        <p>
                                            <Link to="#!" className="text-reset">Help</Link>
                                        </p>
                                    </div>

                                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                        <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                        <p><i className="fa fa-home me-3 text-primary"></i> Mathura, INDIA</p>
                                        <p>
                                            <i className="fa fa-envelope me-3 text-primary"></i>
                                            sharex@gmail.com
                                        </p>
                                        <p><i className="fa fa-phone me-3 text-primary"></i> + 91 9756425707</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </footer>
                </Container>

                <Container fluid>
                    <Row className="row-grid align-items-center text-center justify-content-between p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.025)" }}>
                        <Col className=" p-1">
                            <div>
                                © 2021 Copyright:
                                <a className="text-reset fw-bold" href="/"> JobDhundho.com</a>
                            </div>
                        </Col>
                        <Col className="text-lg-righ btn-wrapper p-1" lg="6">
                            <Button
                                className="btn-icon-only rounded-circle"
                                color="twitter"
                                href="https://twitter.com/jobdhundho"
                                id="tooltip475038074"
                                target="_blank"
                            >
                                <span className="btn-inner--icon">
                                    <i className="fa fa-twitter" />
                                </span>
                            </Button>
                            <UncontrolledTooltip delay={0} target="tooltip475038074">
                                Follow us
                            </UncontrolledTooltip>
                            <Button
                                className="btn-icon-only rounded-circle ml-1"
                                color="facebook"
                                href="https://www.facebook.com/jobdhundho"
                                id="tooltip837440414"
                                target="_blank"
                            >
                                <span className="btn-inner--icon">
                                    <i className="fa fa-facebook-square" />
                                </span>
                            </Button>
                            <UncontrolledTooltip delay={0} target="tooltip837440414">
                                Like us
                            </UncontrolledTooltip>
                            <Button
                                className="btn-icon-only rounded-circle ml-1"
                                color="dribbble"
                                href="https://www.linkedin.com/arpitsharma7736"
                                id="tooltip829810202"
                                target="_blank"
                            >
                                <span className="btn-inner--icon">
                                    <i className="fa fa-linkedin" />
                                </span>
                            </Button>
                            <UncontrolledTooltip delay={0} target="tooltip829810202">
                                Follow us
                            </UncontrolledTooltip>
                            <Button
                                className="btn-icon-only rounded-circle ml-1"
                                color="github"
                                href="https://github.com/arpitsharma7736"
                                id="tooltip495507257"
                                target="_blank"
                            >
                                <span className="btn-inner--icon">
                                    <i className="fa fa-github" />
                                </span>
                            </Button>
                            <UncontrolledTooltip delay={0} target="tooltip495507257">
                                Star on Github
                            </UncontrolledTooltip>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default MainFooter;
