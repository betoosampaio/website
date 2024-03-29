import React from "react";
import { Link } from "react-router-dom";
import Headroom from "headroom.js";
// reactstrap components
import {
  UncontrolledCollapse,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  Button
} from "reactstrap";

class Navbars extends React.Component {

  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }
  render() {
    return (
      <>
        <Navbar
          className="navbar-main navbar-transparent navbar-light headroom"
          expand="lg"
          id="navbar-main"
        >
          <Container>
            <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
              <img
                alt="..."
                src={require("assets/img/brand/logo.png")}
              />
            </NavbarBrand>
            <button
              aria-controls="navbar-default"
              aria-expanded={false}
              aria-label="Toggle navigation"
              className="navbar-toggler"
              data-target="#navbar-default"
              data-toggle="collapse"
              id="navbar-default"
              type="button"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <UncontrolledCollapse navbar toggler="#navbar-default">
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <Link to="/">
                      <img
                        alt="..."
                        src={require("assets/img/brand/logo.png")}
                      />
                    </Link>
                  </Col>
                  <Col className="collapse-close" xs="6">
                  </Col>
                </Row>
              </div>
              <Nav className="ml-lg-auto" navbar>

                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    to="/home-page" tag={Link}
                  > Home
                    <span className="nav-link-inner--text d-lg-none"></span>
                  </NavLink>
                </NavItem>
                <UncontrolledDropdown nav>
                  <NavLink
                    className="nav-link-icon"
                    to="/quemsomos-page" tag={Link}
                  > Quem somos
                    <span className="nav-link-inner--text d-lg-none"></span>
                  </NavLink>
                </UncontrolledDropdown>

                <UncontrolledDropdown nav>
                  <NavLink
                    className="nav-link-icon"
                    to="/contato-page" tag={Link}
                  > Contato
                    <span className="nav-link-inner--text d-lg-none"></span>
                  </NavLink>
                </UncontrolledDropdown>

                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    href="http://localhost:3003/#/login"
                  > Login restaurantes
                    <span className="nav-link-inner--text d-lg-none"></span>
                  </NavLink>
                </NavItem>

              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default Navbars;