import React from "react";
// nodejs library that concatenates classes

// reactstrap components
import {
    Button,
    Card,
    CardImg,
    Container,
    Row,
    Col,
} from "reactstrap";
import { Link } from "react-router-dom";

import MainNavbar from "components/Navbars/MainNavbar.js";


class Test extends React.Component {
    state = {};
    componentDidMount() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.main.scrollTop = 0;
    }
    render() {
        return (
            <>
                <MainNavbar />
                <main ref="main">
                    <section className="section bg-secondary">
                        <Container>
                            <Row className="row-grid align-items-center">
                                <Col md="6">
                                    <Card className="bg-default shadow border-0">
                                        <CardImg
                                            alt="..."
                                            src={require("assets/img/theme/paul-smith-Sz0kMDeDUc0-unsplash.jpg")}
                                            top
                                        />
                                        <blockquote className="card-blockquote">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="svg-bg"
                                                preserveAspectRatio="none"
                                                viewBox="0 0 583 95"
                                            >
                                                <polygon
                                                    className="fill-default"
                                                    points="0,52 583,95 0,95"
                                                />
                                                <polygon
                                                    className="fill-default"
                                                    opacity=".2"
                                                    points="0,42 583,95 683,0 0,95"
                                                />
                                            </svg>
                                            <h4 className="display-3 font-weight-bold text-white">
                                            Dream Job
                                            </h4>
                                            <p className="lead text-italic text-white">
                                            Finding your dream job is an exhilarating pursuit filled with possibilities. It's a chance to align your passion with your career and embark on a fulfilling journey. Chase your dreams, explore new horizons, and create a rewarding career path that brings you joy and success.
                                            </p>
                                        </blockquote>
                                    </Card>
                                </Col>
                                <Col md="6">
                                    <div className="pl-md-5">
                                        <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-3">
                                            <i className="ni ni-settings" />
                                        </div>
                                        <h3 className="fw-bold">Paid internships and entry-level jobs for fresh graduates available now.</h3>
                                        <p className="lead">
                                            Discover your ideal internship or entry-level job with your preferred startup or multinational corporation today.
                                        </p>

                                        <div>
                                            <ul>
                                                <li className="styled-list-item">
                                                    Explore paid internships and pre-placement offers (PPOs).
                                                </li>
                                                <li className="styled-list-item">
                                                    Gain hands-on experience in your field of expertise.
                                                </li>
                                                <li className="styled-list-item">
                                                    Collaborate with top companies that provide dedicated mentors.
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="btn-wrapper mt-5 w-100">
                                            <Button
                                                className="btn-white btn-icon mb-3 mb-sm-0"
                                                color="default"
                                                to="/register-page"
                                                tag={Link}
                                                size="lg"
                                            >
                                                {/* <span className="btn-inner--icon mr-1">
                                                    <i className="ni ni-add" />
                                                </span> */}
                                                <span className="btn-inner--text">Register Now</span>
                                            </Button>{" "}
                                            <Button
                                                className="btn-icon mb-3 mb-sm-0 "
                                                color="github"
                                                to="/landing-page"
                                                alt={Link}
                                                size="lg"
                                            >

                                                <span className="btn-inner--icon mr-1">
                                                    <i className="fa fa-telegram" />
                                                </span>
                                                <span className="btn-inner--text">
                                                    <span className="text-warning mr-1">Join Our </span>
                                                    Telegram
                                                    <span className="text-warning mr-1"> channel </span>
                                                </span>
                                            </Button>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </main>
            </>
        );
    }
}

export default Test;
