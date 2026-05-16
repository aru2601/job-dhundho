import React from "react";
import { Link } from "react-router-dom";
import { CardImg, CardBody, TabContent } from "reactstrap";

const JobCard = ({ job }) => {
  const {
    id,
    companyLogo,
    contractType,
    title,
    location,
    postedTime,
    salary,
    companyName,
    labels,
  } = job;

  const renderLabels = (labels) => {
    return labels.map((label, index) => (
      <span className="job-label p-1" key={index}>
        {label}
      </span>
    ));
  };

  return (
    <>
      <CardBody>
        <TabContent>
          <div className="job-card__content">
            <div className="job-card_img">
              <CardImg
                src={companyLogo || "default-logo-url.jpg"}
                alt="Company Logo"
              />
            </div>
            <div className="job-card_info">
              <a href="#!" className="float-right job-type">
                {contractType || "Full-time"} {/* Default value */}
              </a>
              <span className="fw-bold text-dark">{title || "Job Title"}</span>{" "}
              {/* Default value */}
              <p className="mb-0">
                <i className="fa fa-map-marker" aria-hidden="true"></i>{" "}
                {location || "Location"}
              </p>
              <span className="mb-0">
                <i className="fa fa-clock-o " aria-hidden="true"></i>{" "}
                {postedTime || "Posted Time"}{" "}
              </span>
              <span className="mb-0 px-1">{salary || "Salary"}</span>{" "}
              {/* Default value */}
              <h6 className="text-muted">
                <a href="#!" className="job-card_company">
                  <i className="fa fa-building" aria-hidden="true"></i>{" "}
                  {companyName || "Company Name"} {/* Default value */}
                </a>
              </h6>

              <div className="job-card_job-type pb-2">
                {labels && renderLabels(labels)}
              </div>
            </div>
          </div>
          <div className="job-card__footer text-right">
            <Link to={`/jobdetails/${id}`}>
              <button type="button" className="apply-button lap" style={{backgroundColor: "#1a174d"}} >
                View Detail
              </button>
            </Link>
            <Link to={`/jobdetails/${id}`}>
              <button
                type="button"
                className="apply-button bg-warning lap ml-2"
              >
                Apply Now
              </button>
            </Link>
            <Link to={`/jobdetails/${id}`}>
              <button type="button" className="apply-button mob"  style={{backgroundColor: "#1a174d"}} >
                View
              </button>
            </Link>
            <Link to={`/jobdetails/${id}`}>
              <button
                type="button"
                className="apply-button bg-warning mob ml-2"
              >
                Apply
              </button>
            </Link>
          </div>
        </TabContent>
      </CardBody>
    </>
  );
};

export default JobCard;
