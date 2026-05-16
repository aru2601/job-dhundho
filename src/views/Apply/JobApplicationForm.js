import React, { useEffect, useRef, useState } from 'react';
import {
    Button,
    Card,
    CardBody,
    FormGroup,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col,
    Modal,
} from 'reactstrap';

import MainNavbar from 'components/Navbars/MainNavbar.js';
import MainFooter from 'components/Footers/MainFooter.js';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Jobs from "../../data/Jobs";

const JobApplicationForm = () => {
    const { jobId } = useParams();
    const [jobDetails, setJobDetails] = useState(null);
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        mobile: '',
        resume: '',
    });
    const [isFormValid, setIsFormValid] = useState(false);

    const [modalNotificationOpen, setModalNotificationOpen] = React.useState(
        false
    );

    const mainRef = useRef(null);

    useEffect(() => {
        const selectedJob = Jobs.find((job) => job.id === parseInt(jobId, 10));
        setJobDetails(selectedJob);
    }, [jobId]);
    console.log(jobId)

    if (!jobDetails) {
        return <div>Loading...</div>;
    }



    const handleSubmit = async (e) => {
        e.preventDefault();

        // try {
        //   await axios.post('/api/jobs', formState);
        //   alert('Job added successfully'); 
        // } catch (error) {
        //   console.error(error);
        //   alert('Failed to add job'); 
        // }
    };


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormState({
            ...formState,
            [name]: value,
        });

        const isValid = Object.values(formState).every((val) => val.trim() !== '');
        setIsFormValid(isValid);
    };



    return (
        <>
            <MainNavbar />
            <main ref={mainRef} >
                <section className="section section-shaped ">
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
                    <Container className="pt-lg pb-300">
                        <Row className="text-center justify-content-center">
                            <Col lg="10">
                                <h2 className="display-3 text-white">Apply to {jobDetails.companyName} as a {jobDetails.title} </h2>
                            </Col>
                        </Row>
                    </Container>
                    {/* SVG separator */}
                    <div className="separator separator-bottom separator-skew zindex-100">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon
                                className="fill-white"
                                points="2560 0 2560 100 0 100"
                            />
                        </svg>
                    </div>
                </section>
                <section className="section section-lg pt-lg-0 section-contact-us">
                    <Container>
                        <Row className="justify-content-center mt--300">
                            <Col lg="12">
                                <Card className="bg-gradient-secondary shadow">
                                    <CardBody className="p-lg-5">
                                        <form onSubmit={handleSubmit}>

                                            <FormGroup>
                                                <InputGroup className="input-group-alternative">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="ni ni-user-run" />
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input
                                                        name="name"
                                                        placeholder="Your Name"
                                                        type="text"
                                                        value={formState.name}
                                                        onChange={handleInputChange}
                                                    />
                                                </InputGroup>
                                            </FormGroup>

                                            <FormGroup>
                                                <InputGroup className="input-group-alternative">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="ni ni-email-83" />
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input
                                                        name='email'
                                                        placeholder="Your Email"
                                                        type="email"
                                                        value={formState.email}
                                                        onChange={handleInputChange}
                                                    />
                                                </InputGroup>
                                            </FormGroup>
                                            <FormGroup>
                                                <InputGroup className="input-group-alternative">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="fa fa-phone" />
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input
                                                        name='mobile'
                                                        placeholder="Mobile Number"
                                                        type="number"
                                                        value={formState.mobile}
                                                        onChange={handleInputChange}
                                                    />
                                                </InputGroup>
                                            </FormGroup>
                                            <FormGroup>
                                                <InputGroup className="input-group-alternative">
                                                    <Input
                                                        name='resume'
                                                        placeholder="Resume"
                                                        type="file"
                                                        className='form-control'
                                                        value={formState.resume}
                                                        onChange={handleInputChange}
                                                    />
                                                </InputGroup>
                                            </FormGroup>
                                            <div>
                                                <Button
                                                    block
                                                    className="btn-round"
                                                    color="default"
                                                    size="lg"
                                                    type="submit"
                                                    onClick={() => setModalNotificationOpen(true)}
                                                    disabled={!isFormValid} 
                                                >
                                                    Apply
                                                </Button>
                                            </div>

                                        </form>

                                    </CardBody>
                                </Card>
                            </Col>

                            {/* modal  */}
                            <Col md="4">
                                <Modal
                                    isOpen={modalNotificationOpen}
                                    className="modal-white"
                                    contentClassName="bg-gradient-white"
                                    onClick={() => setModalNotificationOpen(false)}
                                >
                                    <div className=" modal-header">
                                        <h6 className=" modal-title" id="modal-title-notification">
                                            Sucess Modal
                                        </h6>
                                        <button
                                            aria-label="Close"
                                            className=" close"
                                            onClick={() => setModalNotificationOpen(false)}
                                            type="button"
                                        >
                                            <span className='text-dark' aria-hidden={true}>×</span>
                                        </button>
                                    </div>
                                    <div className=" modal-body">
                                        <div className=" py-3 text-center">
                                            <i className="fa fa-check fa-3x text-white bg-success rounded-circle"></i>
                                            <p className='heading mt-2'>Congratulations</p>
                                            <h4 className=" heading mt-4">You Have Applied Successfully!</h4>
\                                        </div>
                                    </div>
                                    <div className=" modal-footer">
                                        <Button className=" btn-white" color="default" type="button">
                                            Ok, Got it
                                        </Button>
                                        <Button
                                            className=" text-dark ml-auto"
                                            color="link"
                                            onClick={() => setModalNotificationOpen(false)}
                                            type="button"
                                        >
                                            Close
                                        </Button>
                                    </div>
                                </Modal>
                            </Col>

                        </Row>
                    </Container>
                </section>
            </main>
            <MainFooter />
        </>
    );
};

export default JobApplicationForm;
