import React, { useState, useEffect, useRef } from "react";
import { Button, Container, CardImg } from "reactstrap";
import { Link, useParams } from "react-router-dom";
import MainNavbar from "components/Navbars/MainNavbar.js";
import MainFooter from "components/Footers/MainFooter";
import Jobs from "../../data/Jobs";
import Icon1 from "../../assets/img/icons/job-list1.png";
import Icon3 from "../../assets/img/icons/job-list2.png";

const Jobdetails = () => {
    const { jobId } = useParams();
    const [jobDetails, setJobDetails] = useState(null);
    const mainRef = useRef(null);

    useEffect(() => {
        const selectedJob = Jobs.find((job) => job.id === parseInt(jobId, 10));
        setJobDetails(selectedJob);
    }, [jobId]);

    if (!jobDetails) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <MainNavbar />
            <main ref={mainRef}>
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
                                {/* {perticularJob.map((job, index) => ( */}
                                    <div className="job-card__content mt-4" >
                                        <div className="job-card_img" style={{ marginLeft: "0px", margin: "0px", padding: "0px" }}>
                                            <CardImg src={jobDetails.companyLogo} alt="Company Logo" className="mt-0 mr-2" />
                                        </div>
                                        <div className="job-card_info">
                                            <a href="#!" className="float-right job-type">
                                                {jobDetails.contractType}
                                            </a>
                                            <span className="fw-bold text-dark">{jobDetails.title}</span>
                                            <p className="mb-0"><i className="fa fa-map-marker" aria-hidden="true"></i> {jobDetails.location}</p>
                                            <span className="mb-0"><i className="fa fa-clock-o " aria-hidden="true"></i> {jobDetails.jobPostDay} </span>
                                            <span className="mb-0 px-1"> {jobDetails.salary}</span>
                                            <h6 className="text-muted">
                                                <a href="#!" className="job-card_company">
                                                    <i className="fa fa-building" aria-hidden="true"></i> {jobDetails.companyName}
                                                </a>
                                            </h6>
                                        </div>
                                    </div>
                                {/* ))} */}


                            </section>

                            {/* <!--Section: Text--> */}
                            <section>
                                <span className="fw-bold">Job Description</span>
                                <p>
                                    {jobDetails.description}

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
                                    <Link to={`/apply/${jobDetails.id}`}>
                                    <Button
                                        className="btn-warning "
                                        size="lg"
                                    >
                                        <span className="btn-inner--text text-light">Apply now</span>
                                    </Button>{" "}
                                    </Link>
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
                            <section className="sticky-top shadow p-4" style={{ position: "sticky", top: "80px" }} >
                                <section className=" mb-4">
                                    <div className="text-center">
                                        <Link to={`/apply/${jobDetails.id}`}>
                                            <Button
                                                className="btn-warning w-100"
                                                size="lg"
                                            >
                                                <span className="btn-inner--text text-light">Apply now</span>
                                            </Button>{" "}
                                        </Link>
                                    </div>
                                    <div>
                                        <div className="bg-image hover-overlay  my-2 ripple mb-4">
                                            <img
                                                src={Icon3}
                                                
                                                className="img-fluid" />
                                            <a href="#" target="_blank">
                                                <div className="mask" style={{ backgroundColor: "rgba(57, 192, 237, 0.2)" }}></div>
                                            </a>
                                        </div>
                                        <h5 >Software Engineer</h5>

                                        <p >
                                            100+ job postings, free resume builder
                                        </p>
                                    </div>
                                    <hr />
                                    <div>
                                        <div className="bg-image hover-overlay text-right my-2 ripple mb-4">
                                            <img
                                                src={Icon1}
                                                className="img-fluid" />
                                            <a href="#" target="_blank">
                                                <div className="mask" style={{ backgroundColor: "rgba(57, 192, 237, 0.2)" }}></div>
                                            </a>
                                        </div>
                                        <h5 >Sales</h5>

                                        <p >
                                            500+ job postings, free resume builder
                                        </p>
                                    </div>
                                    <hr />
                                    
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
};

export default Jobdetails;
