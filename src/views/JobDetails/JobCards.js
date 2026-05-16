import React, { useEffect, useState } from "react";
import axios from "axios";

// reactstrap components
import {
    Row,
    Col,
    Container,
    Card,
} from "reactstrap";

import jobs from '../../data/Jobs'
import JobCard from "./JobCard";
import LoadMoreButton from "./LoadMoreButton";

const JobCards = () => {
//     const [jobs, setJobs] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//           const options = {
//             method: 'POST',
//             url: 'https://linkedin-jobs-scraper-api.p.rapidapi.com/jobs',
//             headers: {
//               'content-type': 'application/json',
//               'X-RapidAPI-Key': '1bdaa8532amshe6f9c60b9873d1dp14ead1jsn2857f10eea6d',
//               'X-RapidAPI-Host': 'linkedin-jobs-scraper-api.p.rapidapi.com'
//             },
//             data: {
//               title: 'Software Engineer',
//               location: 'Berlin',
//               rows: 100
//             }
//           };
    
//           try {
//             const response = await axios(options);
//             setJobs(response.data);
//           } catch (error) {
//             console.error(error);
//           }
//         };
//         fetchData();
//   }, []);
//   console.log(jobs)
    const limitedJobs = jobs.slice(0, 6);
    // console.log(limitedJobs)
    return (
        <>
            <section className="section section-components">
                
                <Container>
                    <Row className="justify-content-center">
                        <h1 className="display-4 fw-bold mb-4 text-center text-gray">
                            Trending Jobs{" "}
                        </h1>
                        {limitedJobs.map((job) => (
                            <Col lg="6" key={job.id} className="g-4">
                                <Card className="shadow">
                                    <JobCard job={job} />
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    
                    <LoadMoreButton />

                </Container>
            </section>
        </>
    );
}


export default JobCards;
