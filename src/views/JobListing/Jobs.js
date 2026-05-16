import React from "react";

// reactstrap components
import {
  Button,
  FormGroup,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import MainNavbar from "components/Navbars/MainNavbar.js";

// index page sections
import MainFooter from "components/Footers/MainFooter.js";
import JobCards from "views/JobDetails/JobCards";

class Jobs extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <MainNavbar />
        <main ref="main">
          
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
            <Container className="pt-lg ">
              <Row className="text-center justify-content-center">
                <Col lg="10">
                  <h2 
                  className="display-3 text-white" 
                  style={{ paddingBottom: "50px" }}
                  >
                    Find Your Spark
                  </h2>
                  <FormGroup style={{ width: "100%" }} className="d-flex">
                    <Input 
                      placeholder="Ex. Software Engineer"
                      type="text" 
                      style={{ padding: "30px", fontSize: "15px" }}
                    />
                    <Input 
                      placeholder="Ex. Delhi"
                      type="text" 
                      style={{ padding: "30px", fontSize: "15px" }} 
                    />
                    <Button className="btn-1" color="warning" type="button">
                      Search
                    </Button>

                  </FormGroup>

                </Col>
              </Row>
              
              {/* Job Cards  */}
              <JobCards />

            </Container>
          </section>
        {/* </section> */}
        </main>
        <MainFooter />

      </>
    );
  }
}

export default Jobs;
