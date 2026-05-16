
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

import './FeatureCategory.css'

class JobBox extends React.Component {

    render() {
        return (
            <>
                <section className="section section-lg">
                    <Container>
                        <div className="section_our_solution">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="our_solution_category text-center">
                                        <div className="solution_cards_box ">
                                            <div className="solution_card " style={{ alignItems: "centy" }}>
                                                <div className="hover_color_bubble"></div>

                                                <div className="so_top_icon text-center">
                                                    <i className="ni ni-books"></i>
                                                </div>

                                                <div className="solu_title">
                                                    <h3>Data Science</h3>
                                                </div>
                                                <div className="solu_description">
                                                    <p>
                                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                                    </p>
                                                    <button type="button" className="read_more_btn">View Details</button>
                                                </div>
                                            </div>
                                            <div className="solution_card">
                                                <div className="hover_color_bubble"></div>

                                                <div className="so_top_icon">
                                                    <i className="fa fa-bullhorn"></i>
                                                </div>

                                                <div className="solu_title">
                                                    <h3>Digital Marketing</h3>
                                                </div>
                                                <div className="solu_description">
                                                    <p>
                                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                                    </p>
                                                    <button type="button" className="read_more_btn">View Details</button>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <!--  --> */}
                                        <div className="solution_cards_box sol_card_top_3">
                                            <div className="solution_card">
                                                <div className="hover_color_bubble"></div>

                                                <div className="so_top_icon">
                                                    <i className="fa fa-bullseye"></i>
                                                </div>

                                                <div className="solu_title">
                                                    <h3>Web Development</h3>
                                                </div>
                                                <div className="solu_description">
                                                    <p>
                                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                                    </p>
                                                    <button type="button" className="read_more_btn">View Details</button>
                                                </div>
                                            </div>
                                            <div className="solution_card">
                                                <div className="hover_color_bubble"></div>

                                                <div className="so_top_icon">
                                                    <i className="fa fa-atom"></i>
                                                    <i className="ni ni-spaceship"></i>
                                                </div>

                                                <div className="solu_title">
                                                    <h3>Tech Support</h3>
                                                </div>
                                                <div className="solu_description">
                                                    <p>
                                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                                    </p>
                                                    <button type="button" className="read_more_btn">View Details</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="solution_cards_box">
                                            <div className="solution_card">
                                                <div className="hover_color_bubble"></div>

                                                <div className="so_top_icon">
                                                    <li className="fa fa-fire"></li>
                                                </div>

                                                <div className="solu_title">
                                                    <h3>Business Development</h3>
                                                </div>
                                                <div className="solu_description">
                                                    <p>
                                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                                    </p>
                                                    <button type="button" className="read_more_btn">View Details</button>
                                                </div>
                                            </div>
                                            <div className="solution_card">
                                                <div className="hover_color_bubble"></div>

                                                <div className="so_top_icon">
                                                    <i className="fa fa-flask"></i>
                                                </div>

                                                <div className="solu_title">
                                                    <h3>Social Media Marketing</h3>
                                                </div>
                                                <div className="solu_description">
                                                    <p>
                                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                                    </p>
                                                    <button type="button" className="read_more_btn">View Details</button>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <!--  --> */}
                                        <div className="solution_cards_box sol_card_top_3">
                                            <div className="solution_card">
                                                <div className="hover_color_bubble"></div>

                                                <div className="so_top_icon">
                                                    <li className="fa fa-seedling"></li>
                                                    <i className="ni ni-air-baloon"></i>
                                                </div>

                                                <div className="solu_title">
                                                    <h3>Influencer</h3>
                                                </div>
                                                <div className="solu_description">
                                                    <p>
                                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                                    </p>
                                                    <button type="button" className="read_more_btn">View Details</button>
                                                </div>
                                            </div>
                                            <div className="solution_card">
                                                <div className="hover_color_bubble"></div>

                                                <div className="so_top_icon">
                                                    <li className="fa fa-globe"></li>
                                                </div>

                                                <div className="solu_title">
                                                    <h3>Content Writer</h3>
                                                </div>
                                                <div className="solu_description">
                                                    <p>
                                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                                    </p>
                                                    <button type="button" className="read_more_btn">View Details</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>
            </>
        );
    }
}

export default JobBox;
