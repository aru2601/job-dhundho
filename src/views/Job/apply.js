import React, { useState } from 'react';
import classnames from 'classnames';
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
} from 'reactstrap';

import MainNavbar from 'components/Navbars/MainNavbar.js';
import MainFooter from 'components/Footers/MainFooter.js';

const AddJob = () => {
  const [nameFocused, setNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);

  const [formState, setFormState] = useState({
    jobTitle: '',
    recrutier_name: '',
    recrutier_email: '',
    contactNumber: '',
    company_name: '',
    company_location: '',
    company_description: '',
    jobType: '',
    max_positions: '',
    salary: '',
    applicationDeadline: '',
    skills: '',
    qualifications: '',
    jobCategory: '',
    jobDescription: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('/api/jobs', formState);
      alert('Job added successfully'); 
    } catch (error) {
      console.error(error);
      alert('Failed to add job'); 
    }
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };



  return (
    <>
      <MainNavbar />
      <main ref={React.createRef()} >
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
                  <h2 className="display-3 text-white">Add Job</h2>
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
                            <i className="ni ni-email-83" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          name="jobTitle"
                          placeholder="Job Title"
                          type="text"
                          value={formState.jobTitle}
                          onChange={handleInputChange}
                        />
                      </InputGroup>
                    </FormGroup>

                    <FormGroup className={classnames({ focused: emailFocused })}>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-user-run" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          name='recrutier_name'
                          placeholder="Recrutier Name"
                          type="name"
                          value={formState.recrutier_name}
                          onChange={handleInputChange}
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup className={classnames({ focused: nameFocused })}>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-email-83" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          name='recrutier_email'
                          placeholder="Recrutier Email"
                          type="email"
                          value={formState.recrutier_email}
                          onChange={handleInputChange}
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup className={classnames({ focused: nameFocused })}>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-user-run" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          name='contactNumber'
                          placeholder="Contact Number"
                          type="number"
                          value={formState.contactNumber}
                          onChange={handleInputChange}
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup className={classnames({ focused: nameFocused })}>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-user-run" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          name='company_name'
                          placeholder="Company Name"
                          type="text"
                          value={formState.company_name}
                          onChange={handleInputChange}
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup className={classnames({ focused: nameFocused })}>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-user-run" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          name='company_location'
                          placeholder="Company Location"
                          type="text"
                          value={formState.company_location}
                          onChange={handleInputChange}
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup className={classnames({ focused: nameFocused })}>
                      <Input
                        className="form-control-alternative"
                        cols="80"
                        name="company_description"
                        placeholder="Company Description"
                        rows="4"
                        type="textarea"
                        value={formState.company_description}
                        onChange={handleInputChange}
                      />
                    </FormGroup>
                    <FormGroup className={classnames({ focused: nameFocused })}>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-user-run" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <select className="form-control" name='jobType'  onChange={handleInputChange} value={formState.jobType}>
                            <option value="full_time">full time</option>
                            <option value="part_time">part time</option>
                            <option value="work_from_home">work from home</option>
                        </select>
                      </InputGroup>
                    </FormGroup>
                    <FormGroup className={classnames({ focused: nameFocused })}>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-user-run" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          name='salary'
                          placeholder="Salary"
                          type="text"
                          value={formState.salary}
                          onChange={handleInputChange}
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup className={classnames({ focused: nameFocused })}>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-user-run" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          name='max_positions'
                          placeholder="Max Positions"
                          type="number"
                          value={formState.max_positions}
                          onChange={handleInputChange}
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup className={classnames({ focused: nameFocused })}>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-user-run" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          name='applicationDeadline'
                          placeholder="Application Deadline"
                          type="date"
                          value={formState.applicationDeadline}
                          onChange={handleInputChange}
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup className={classnames({ focused: nameFocused })}>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-user-run" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          name='skills'
                          placeholder="Required Skills"
                          type="text"
                          value={formState.skills}
                          onChange={handleInputChange}
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup className={classnames({ focused: nameFocused })}>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-user-run" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          name='qualifications'
                          placeholder="Qualifications"
                          type="text"
                          value={formState.qualifications}
                          onChange={handleInputChange}
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup className={classnames({ focused: nameFocused })}>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-user-run" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          name='jobCategory'
                          placeholder="Job Category"
                          type="text"
                          value={formState.jobCategory}
                          onChange={handleInputChange}
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup className="mb-4">
                      <Input
                        className="form-control-alternative"
                        cols="80"
                        name="jobDescription"
                        placeholder="JOB DESCIPTION"
                        rows="4"
                        type="textarea"
                        value={formState.jobDescription}
                        onChange={handleInputChange}
                      />
                    </FormGroup>
                    <div>
                      <Button
                        block
                        className="btn-round"
                        color="default"
                        size="lg"
                        type="submit"
                      >
                        Send Message
                      </Button>
                    </div>

                    </form>

                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
      <MainFooter />
    </>
  );
};

export default AddJob;
