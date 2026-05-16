import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  NavItem,
  NavLink ,
  UncontrolledTooltip,
} from "reactstrap";

const DemoNavbar = () => {
  useEffect(() => {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    headroom.init();
  }, []);

  return (
    <>
      <header className="header-global">
        <Navbar
          className="navbar-main navbar-transparent navbar-light headroom"
          expand="lg"
          id="navbar-main"
        >
          <Container>
            <NavbarBrand className="mr-lg-5 " to="/" tag={Link}>
              <img
                alt="..."
                src={require("assets/img/brand/Untitled-1.png")}
                style={{ height: "100px"}}
              />
            </NavbarBrand>
            <button className="navbar-toggler" id="navbar_global">
              <span className="navbar-toggler-icon" />
            </button>
            <UncontrolledCollapse
              toggler="#navbar_global"
              navbar
            >
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <Link to="/">
                      {/* <img
                        alt="..."
                        src={require("assets/img/brand/HikeyourHire2.png")}
                        className="bg-dark"
                      /> */}
                    </Link>
                  </Col>
                  <Col className="collapse-close" xs="6">
                    <button className="navbar-toggler" id="navbar_global">
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                
                <UncontrolledDropdown nav>
                  <DropdownToggle nav to="/about" tag={Link}>
                    <i className="ni ni-collection d-lg-none mr-1" />
                    <span className="nav-link-inner--text">About</span>
                  </DropdownToggle>
                </UncontrolledDropdown>
                
                {/* <UncontrolledDropdown nav>
                  <DropdownToggle nav>
                    <i className="ni ni-ui-04 d-lg-none mr-1" />
                    <span className="nav-link-inner--text">Skill Tests</span>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu-xl">
                    <div className="dropdown-menu-inner">
                      <Media
                        className="d-flex align-items-center"
                        to="/landing-page"
                        tag={Link}
                      >
                        <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                          <i className="ni ni-palette" />
                        </div>
                        <Media body className="ml-3">
                          <h6 className="heading text-primary mb-md-1">
                            Frond-end Development
                          </h6>
                          <p className="description d-none d-md-inline-block mb-0">
                            React.js
                          </p>
                        </Media>
                      </Media>

                    </div>
                  </DropdownMenu>
                </UncontrolledDropdown> */}
                <UncontrolledDropdown nav>
                  <DropdownToggle nav>
                    <i className="ni ni-ui-04 d-lg-none mr-1" />
                    <span className="nav-link-inner--text">Opportunities</span>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu-xl">
                    <div className="dropdown-menu-inner">
                      <Media
                        className="d-flex align-items-center"
                        to="/jobs"
                        tag={Link}
                      >
                        <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                          <i className="ni ni-palette" />
                        </div>
                        <Media body className="ml-3">
                          <h6 className="heading text-primary mb-md-1">
                            Jobs
                          </h6>
                          <p className="description d-none d-md-inline-block mb-0">
                            React.js
                          </p>
                        </Media>
                      </Media>
                      <Media
                        className="d-flex align-items-center"
                        to="/jobs"
                        tag={Link}
                      >
                        <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                          <i className="ni ni-palette" />
                        </div>
                        <Media body className="ml-3">
                          <h6 className="heading text-primary mb-md-1">
                            Internships
                          </h6>
                          <p className="description d-none d-md-inline-block mb-0">
                            React.js
                          </p>
                        </Media>
                      </Media>

                    </div>
                  </DropdownMenu>
                </UncontrolledDropdown>
                {/* <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text">Components</span>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem to="/about-us" tag={Link}>
                        About Us
                      </DropdownItem>
                      <DropdownItem to="/jobs-page" tag={Link}>
                        Jobs & Internships
                      </DropdownItem>
                      <DropdownItem to="/contact-page" tag={Link}>
                        Contact Us
                      </DropdownItem>
                      <DropdownItem to="/login-page" tag={Link}>
                        Login
                      </DropdownItem>
                      <DropdownItem to="/register-page" tag={Link}>
                        Register
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown> */}
                <UncontrolledDropdown nav>
                  <DropdownToggle nav to="/blog" tag={Link}>
                    <i className="ni ni-collection d-lg-none mr-1" />
                    <span className="nav-link-inner--text">Blog</span>
                  </DropdownToggle>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav>
                  <DropdownToggle nav to="/contact" tag={Link}>
                    <i className="ni ni-collection d-lg-none mr-1" />
                    <span className="nav-link-inner--text">Contact</span>
                  </DropdownToggle>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav>
                  <DropdownToggle nav to="/login" tag={Link}>
                    <i className="ni ni-collection d-lg-none mr-1" />
                    <span className="nav-link-inner--text">Login</span>
                  </DropdownToggle>
                </UncontrolledDropdown>
              </Nav>
              <Nav className="align-items-lg-center ml-lg-auto" navbar>
                
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    href="https://twitter.com/rohitashsingh89"
                    id="tooltip184698705"
                    target="_blank"
                  >
                    <i className="fas fa-comment" />
                    <span className="nav-link-inner--text d-lg-none ml-2">
                      Messages
                    </span>
                  </NavLink>

                  <UncontrolledTooltip delay={0} target="tooltip184698705">
                    Notifications 
                  </UncontrolledTooltip>
                </NavItem>

                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    href="#"
                    id="tooltipNotifications"
                  >
                    <i className="fas fa-bell" />
                    <span className="nav-link-inner--text d-lg-none ml-2">
                      Job Alert
                    </span>
                  </NavLink>
                  <UncontrolledTooltip delay={0} target="tooltipNotifications">
                    View Job Alert
                  </UncontrolledTooltip>
                </NavItem>

                <NavItem className="d-none d-lg-block ml-lg-4">
                  <Button
                    className="btn-neutral btn-icon"
                    color="default"
                    to="/register"
                    tag={Link}
                  >
                    <span className="nav-link-inner--text ml-1">
                      <li className="fa fa-user"></li>
                    </span>
                  </Button>
                </NavItem>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
}


export default DemoNavbar;
