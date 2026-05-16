import React from "react";
import { Container, Row, Col } from "reactstrap";
import FeatureCategory from "./FeatureCategory";

class Categories extends React.Component {

  render() {
    return (
      <>
        <section className="section section-lg mb-0 pb-0">
          <Container>
            <Row className="row-grid justify-content-center">
              <Col className="text-center" lg="8">
                <h1 className="display-4 fw-bold mb-4">
                  Featured Job Categories{" "}

                </h1>
                <ul className="nav nav-pills nav-fill gap-2 p-1 small  round shadow-sm mt-5" id="pillNav2" role="tablist" style={{
                  "--bs-nav-link-color": "var(--bs-white)",
                  "--bs-nav-pills-link-active-color": "var(#1a174d)",
                  "--bs-nav-pills-link-active-bg": "var(--bs-white)", borderRadius: "30px",
                  backgroundColor: "#1a174d"
                }}>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active rounded-5" id="home-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="true" style={{ borderRadius: "30px" }}>Latest</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link rounded-5" id="profile-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false" style={{ borderRadius: "30px" }}>Popular</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link rounded-5" id="contact-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false" style={{ borderRadius: "30px" }}>Up Comming</button>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>

          <FeatureCategory />
        </section>
      </>
    );
  }
}

export default Categories;
