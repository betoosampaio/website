import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardImg,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class CardsFooter extends React.Component {
  render() {
    return (
      <>
        <div>
          <Container className="shape-container d-flex align-items-center py-4">
            <div className="col">
              <Row className="align-items-center justify-content-center py-0">
                <Col className="text-center" lg="6">
                  <img
                    alt="..."
                    className="img-fluid"
                    src={require("assets/img/brand/logo.png")}
                    style={{ width: "200px" }}
                  />
                  {/* <h1 className="display-4 text-primary">
                    O jeito de pedir comida mudou, o de gerenciar restaurantes também.
                  </h1>
                   <p></p>
                    Baixe o app e faça pedidos nos melhores restaurantes da cidade. Rápido e descomplicado, você é livre!
                  </p>*/}
                </Col>
                <section className="section section-lg py-2">
                  <Container>
                    <Card className="bg-gradient-primary shadow-lg border-0">
                      <div className="p-3">
                        <Row className="align-items-center">
                          <Col lg="8">
                            <h3 className="display-3 text-white">
                              Gestão de restaurante
                            </h3>
                            <p className="lead text-white mt-3">
                              Solução completa para o seu restaurante crescer. Gestão do seu restaurante para você.
                              App de pedidos para seus clientes.
                      </p>
                          </Col>
                          <Col className="ml-lg-auto" lg="3">
                            <Button
                              block
                              className="btn-white"
                              color="default"
                              href="https://"
                              size="lg"
                            >
                              Cadastre-se agora!
                      </Button>
                          </Col>
                        </Row>
                      </div>
                    </Card>
                  </Container>
                </section>
              </Row>
            </div>
          </Container>
        </div>
        <footer className="footer has-cards">
          <Container className="container-sm py-0">
            <Row>
              <Col className="mb-5 mb-md-0" md="6">
                <Card className="card-lift--hover shadow border-0">
                  <NavLink href="http://localhost:3000/restaurante-page">
                    <CardImg
                      alt="..."
                      src={require("assets/img/theme/arearestaurante.png")}
                    />
                  </NavLink>
                </Card>
              </Col>
              <Col className="mb-5 mb-lg-0" md="6">
                <Card className="card-lift--hover shadow border-0">
                  <Link to="/cliente-page">
                    <CardImg
                      alt="..."
                      src={require("assets/img/theme/areacliente1.png")}
                    />
                  </Link>
                </Card>
              </Col>
            </Row>
          </Container>
          <hr />
          <Container>
            <Row className="row-grid align-items-center mb-5">
              <Col lg="6">
                <h3 className=" text-primary font-weight-light mb-2">
                  Freedapp - solução para restaurantes
                </h3>
                <h4 className=" mb-0 font-weight-light">
                  Computador, tablet ou celular. Lorem ipsum lorem ipsum.
                </h4>
              </Col>
              <Col className=" text-lg-center btn-wrapper" lg="6">

                <Button
                  className=" btn-neutral btn-icon-only btn-round ml-1"
                  color="facebook"
                  href="https://www.facebook.com/freedapp"
                  id="tooltip383967593"
                  size="lg"
                  target="_blank"
                >
                  <i className=" fa fa-facebook-square" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip383967593">
                  Curta no Facebook
                </UncontrolledTooltip>
                <Button
                  className=" btn-neutral btn-icon-only btn-round ml-1"
                  color="instagram"
                  href="https://instagram.com/freedapp"
                  id="tooltip626177562"
                  size="lg"
                  target="_blank"
                >
                  <i className=" fa fa-instagram" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip626177562">
                  Siga-nos
                </UncontrolledTooltip>
              </Col>
            </Row>
            <hr />
            <Row className=" align-items-center justify-content-md-between">
              <Col md="6">
                <div className=" copyright">
                  © {new Date().getFullYear()}{" "}
                  <a
                    href="https://www.freedapp.com.br"
                  >
                    Freed app - feito com <i className=" fa fa-heart" />
                  </a>
                </div>
              </Col>
              <Col md="6">
                <Nav className=" nav-footer justify-content-end">
                  <NavItem>
                    <NavLink
                      href="http://localhost:3000/#/registrar"
                      target="_blank"
                    >
                      Cadastre seu restaurante
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      to="/quemsomos-page" tag={Link}
                      target="_blank"
                    >
                      Quem somos?
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      to="/quemsomos-page" tag={Link}
                      target="_blank"
                    >
                      Contato
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}
export default CardsFooter;