import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import {
    CardImg,
    CardBody,
    TabContent,
} from "reactstrap";


const JobCard = ({ job }) => {
    console.log("job", job)
    return (
        <>
            <CardBody>
                <TabContent>
                    <div className="job-card__content">
                        <div className="job-card_img">
                            <CardImg src={job.companyLogo} alt="Company Logo" />
                        </div>
                        <div className="job-card_info">
                            <a href="#!" className="float-right job-type">
                                {job.contractType}
                            </a>
                            <span className="fw-bold text-dark">{job.title}</span>
                            <p className="mb-0"><i className="fa fa-map-marker" aria-hidden="true"></i> {job.location}</p>
                            <span className="mb-0"><i className="fa fa-clock-o " aria-hidden="true"></i> {job.postedTime} </span>
                            <span className="mb-0 px-1"> {job.salary}</span>
                            <h6 className="text-muted">
                                <a href="#!" className="job-card_company">
                                    <i className="fa fa-building" aria-hidden="true"></i> {job.companyName}
                                </a>
                            </h6>

                            <div className="job-card_job-type pb-2">
                                {job.labels.map((label, index) => (
                                    <span className="job-labe p-1" key={index}>
                                        {label}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="job-card__footer text-right">
                        <Link to={"/blog/"} ><button type="button" className="apply-button bg-primary lap ">View Details</button></Link>
                        <Link to={"/blog/"} ><button type="button" className="apply-button bg-warning lap ml-2">Apply Now</button></Link>
                        <Link to={"/blog/"} ><button type="button" className="apply-button bg-primary mob">View</button></Link>
                        <Link to={"/blog/"} ><button type="button" className="apply-button bg-warning mob ml-2">Apply</button></Link>
                        {/* <Link to={"/blog/" + slug} ><button type="button" className="apply-button bg-primary lap ">View Details</button></Link>
                        <Link to={"/blog/" + slug} ><button type="button" className="apply-button bg-warning lap ml-2">Apply Now</button></Link>
                        <Link to={"/blog/" + slug} ><button type="button" className="apply-button bg-primary mob">View</button></Link>
                        <Link to={"/blog/" + slug} ><button type="button" className="apply-button bg-warning mob ml-2">Apply</button></Link> */}
                    </div>
                </TabContent>
            </CardBody>
        </>
    );
};

export default JobCard;
