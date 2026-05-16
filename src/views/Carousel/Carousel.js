import React from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src: require("assets/img/theme/paul-smith-Sz0kMDeDUc0-unsplash.jpg"),
    altText: "Image 1",
    caption: "Harendra Singh",
    header: `"Game-changer for job seekers. Found my dream job effortlessly. Highly recommended!"`,
  },
  {
    src: require("assets/img/theme/img-1-1200x1000.jpg"),
    altText: "Image 1",
    caption: "Shyam Sundar",
    header: `"Intuitive interface. AI-powered matching. Thriving in my ideal role. Highly endorse this system."`,
  },
  {
    src: require("assets/img/theme/img-2-1200x1000.jpg"),
    altText: "Image 3",
    caption: "Pradeep Sharma",
    header: `"Revolutionized my job search. Streamlined process. Grateful for the opportunities it provided."`,
  },
];


class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
  }
  render() {
    return (
      <>
        <section className="section section-shaped">
          <div className="shape shape-style-1 shape-default">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container className="py-md">
            <Row className="justify-content-between align-items-center">
              <Col className="mb-5 mb-lg-0" lg="5">
                <h1 className="text-white">
                Our users voice
                </h1>
                <p className="lead text-white mt-4">
                Empowering Stories of Transformation: Explore how our platform facilitated seamless job discoveries, enabling users to effortlessly secure their dream careers. Join us today and embark on your own path to success!
                </p>
                <Button
                  className="btn-white mt-4"
                  color="default"
                  href="/job-page"
                >
                  Explore more
                </Button>
              </Col>
              <Col className="mb-lg-auto" lg="6">
                <div className="rounded shadow-lg overflow-hidden transform-perspective-right">
                  <UncontrolledCarousel items={items} />
                </div>
              </Col>

            </Row>
          </Container>
          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
      </>
    );
  }
}

export default Carousel;
