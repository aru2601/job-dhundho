import React, { useState, useEffect, useRef } from "react";
import { Button, Container } from "reactstrap";
import { Link, useParams } from "react-router-dom";
import MainNavbar from "components/Navbars/MainNavbar.js";
import MainFooter from "components/Footers/MainFooter";
import Blogs from 'data/Blogs';
import blog from "../assets/img/blogs/24.png";

const BlogDetails = () => {
    const { blogId } = useParams();
    const [blogDetails, setBlogDetails] = useState(null);
    const mainRef = useRef(null);

    useEffect(() => {
        const selectedBlog = Blogs.find((blog) => blog.id === parseInt(blogId, 10));
        setBlogDetails(selectedBlog);
    }, [blogId]);

    if (!blogDetails) {
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
                        <img src={blogDetails.blogImg} alt="" className="img-fluid d-inline mr-2 w-100" style={{height: "300px"}} />

                            <section className="mb-3 mt-3">
                                {blogDetails.title}

                            </section>

                            {/* <!--Section: Text--> */}
                            <section>
                                <span className="fw-bold">Blog Description</span>
                                <p>
                                    {blogDetails.content}

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
                        <div className="col-md-4 mb-4 ">
                            <section className="sticky-top shadow p-4" style={{ position: "sticky", top: "80px" }} >
                                <section className=" mb-4">
                                    <div>
                                        <Link to={`/blog-details/${blogDetails.id}`}>
                                            <img src={blog} alt="" className="img-fluid d-inline mr-2" style={{width: "50px"}} />
                                        </Link>
                                        <Link to={`/blog-details/${blogDetails.id}`}>
                                            <h6 className="card-title mb-0 pb-0 d-inline">{blogDetails.title}</h6>
                                        </Link>
                                        <hr />
                                    </div>
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

export default BlogDetails;
