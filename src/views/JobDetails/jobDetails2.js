import React from "react";

// reactstrap components
import {
    Button,
    Container,
    CardImg,
} from "reactstrap";

import { Link } from "react-router-dom";

// core components
import MainNavbar from "components/Navbars/MainNavbar.js";
import MainFooter from "components/Footers/MainFooter";
import Jobs from "../../data/Jobs";

class Jobdetails extends React.Component {
    componentDidMount() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.main.scrollTop = 0;
    }
    render() {

        const perticularJob = Jobs.slice(0, 1);

        return (
            <>
                <MainNavbar />
                <main ref="main" >
                    <section className="section section-shaped mb-4 pb-4">
                        <div className="shape shape-style-1 bg-gradient-default">
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                        </div>

                    </section>

                    <Container style={{ marginBottom: "20px" }} className="">
                        <div className="row m-2">
                            {/* <!--Grid column--> */}
                            <div className="col-md-8 mb-4 shadow p-4">
                                {/* <!--Section: Post data-mdb--> */}
                                <section className="mb-3">

                                    {/* print perticularJob  */}
                                    {perticularJob.map((job, index) => (
                                        <div className="job-card__content mt-4" key={index}>
                                            <div className="job-card_img" style={{ marginLeft: "0px", margin: "0px", padding: "0px" }}>
                                                <CardImg src={job.companyLogo} alt="Company Logo" className="mt-0 mr-2" />
                                            </div>
                                            <div className="job-card_info">
                                                <a href="#!" className="float-right job-type">
                                                    {job.contractType}
                                                </a>
                                                <span className="fw-bold text-dark">{job.title}</span>
                                                <p className="mb-0"><i className="fa fa-map-marker" aria-hidden="true"></i> {job.location}</p>
                                                <span className="mb-0"><i className="fa fa-clock-o " aria-hidden="true"></i> {job.jobPostDay} </span>
                                                <span className="mb-0 px-1"> {job.salary}</span>
                                                <h6 className="text-muted">
                                                    <a href="#!" className="job-card_company">
                                                        <i className="fa fa-building" aria-hidden="true"></i> {job.companyName}
                                                    </a>
                                                </h6>
                                            </div>
                                        </div>
                                    ))}


                                </section>

                                {/* <!--Section: Text--> */}
                                <section>
                                    <span className="fw-bold">Job Description</span>
                                    <p>
                                        We are seeking a dynamic and experienced Social Media Manager to oversee our brand's online presence and engagement across various social media platforms.

                                    </p>

                                    <p><strong>Key Responsibilities:</strong></p>
                                    <ol>
                                        <li> Develop and execute social media strategies to enhance brand awareness and engagement.</li>
                                        <li> Create and curate high-quality content for social media platforms, including catchy descriptions, images, videos, and infographics.</li>
                                        <li> Collaborate with onground teams to get desired outputs of photos and Videos for Social media posts. </li>
                                        <li> Collaborate with in-house design and video teams for poster and other required collaterals. </li>
                                        <li> Manage and maintain social media accounts, including posting regularly, responding to comments and inquiries, and monitoring brand mentions. </li>
                                        <li> Monitor social media trends, hashtags, and conversations relevant to our industry and engage with the audience in a timely and meaningful manner.</li>
                                    </ol>
                                    <div className="mt-3 mb-3">
                                        <Button
                                            className="btn-warning "
                                            to="/register-page"
                                            tag={Link}
                                            size="lg"
                                        >
                                            <span className="btn-inner--text text-light">Apply now</span>
                                        </Button>{" "}
                                    </div>

                                    <span className="fw-bold">Share this on <li className="fa fa-share pr-1"> </li></span>
                                    <Button
                                        outline
                                        color="primary"
                                        style={{ textTransform: "capitalize" }}
                                    > <li className="fa fa-linkedin"></li> Linkedin</Button>
                                    <Button
                                        outline
                                        color="primary"
                                    ><li className="fa fa-instagram"></li> Instagram</Button>
                                    <Button
                                        outline
                                        color="primary"
                                    ><li className="fa fa-twitter"></li> Twitter</Button>

                                </section>
                            </div>
                            {/* <!--Grid column--> */}

                            {/* <!--Grid column--> */}
                            <div className="col-md-4 mb-4 ">
                                <section className="sticky-top shadow p-4" style={{ top: "80px" }} >
                                    <section className="text-center mb-4">
                                        <div className="text-center">
                                            <Button
                                                className="btn-warning w-100"
                                                to="/register-page"
                                                tag={Link}
                                                size="lg"
                                            >
                                                <span className="btn-inner--text text-light">Apply now</span>
                                            </Button>{" "}
                                        </div>
                                        <div className="bg-image hover-overlay ripple mb-4">
                                            <img
                                                src="https://mdbootstrap.com/wp-content/themes/mdbootstrap4/content/en/_mdb5/standard/about/assets/mdb5-about.webp"
                                                className="img-fluid" />
                                            <a href="https://mdbootstrap.com/docs/standard/" target="_blank">
                                                <div className="mask" style={{ backgroundColor: "rgba(57, 192, 237, 0.2)" }}></div>
                                            </a>
                                        </div>
                                        <h5 >Material Design for Bootstrap 5</h5>

                                        <p >
                                            500+ components, free templates, 1-min installation, extensive tutorial, huge
                                            community. MIT license - free for personal & commercial use
                                        </p>

                                    </section>
                                </section>
                            </div>
                            {/* <!--Grid column--> */}
                        </div>
                    </Container>
                </main>
                <MainFooter />
            </>
        );
    }
}

export default Jobdetails;