import React from 'react'
import { Link } from 'react-router-dom';
import {
    Button,
} from "reactstrap";

function LoadMoreButton() {
    return (
        <>
            <div className="text-center">
                <Button
                    className="btn-warning my-5 mx-5"
                    to="/jobs"
                    tag={Link}
                    size="lg"
                >
                    <span className="btn-inner--text text-light">View More Jobs</span>
                </Button>{" "}
            </div>
        </>
    )
}

export default LoadMoreButton;