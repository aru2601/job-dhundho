import React, { useRef } from "react";
// nodejs library that concatenates classes
import Blogs from 'data/Blogs';

// reactstrap components
import {
    Container,
    Row,
    Col,
} from "reactstrap";

// core components
import MainNavbar from "components/Navbars/MainNavbar.js";

// index page sections
import MainFooter from "components/Footers/MainFooter.js";
import { Link } from "react-router-dom";

const Blog = () => {
    const mainRef = useRef(null);
    return (
        <>
            <MainNavbar />
            <main ref={mainRef}>
                <section className="section section-shaped section-lg">
                    <div className="shape shape-style-1 bg-gradient-default">
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                    </div>
                    {/* <section className="section section-lg bg-gradient-default"> */}
                    <Container className="pt-lg">
                        <Row className="text-center justify-content-center">
                            <Col lg="10">
                                <h2 className="display-3 text-white">Featured Blogs</h2>
                            </Col>
                        </Row>
                        <Row className="row-grid mt-5">
                            {Blogs.map((blog, index) => (
                                <div key={index} className="col-md-4">
                                    <div className="card mb-4 border-0">
                                        <div className="card-body p-0">
                                            <Link to={`/blog-details/${blog.id}`}>
                                                <img src={blog.blogImg} alt="" className="img-fluid w-100" style={{height: "150px"}} />
                                            </Link>
                                            <div className="p-1">
                                                <Link to={`/blog-details/${blog.id}`}>
                                                    <h6 className="card-title mb-0 pb-0 font-bold">{blog.title}</h6>
                                                </Link>
                                                <p className="card-text">{blog.content}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Row>
                    </Container>
                </section>
            </main>
            <MainFooter />
        </>
    );
}

export default Blog;
