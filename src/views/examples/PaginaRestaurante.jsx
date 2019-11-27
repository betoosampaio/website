import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.jsx";
import SimpleFooter from "components/Footers/SimpleFooter.jsx";



class PaginaRestaurante extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section- section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-sm d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="-6">
                      <h1 className="display-2 text-white">
                        FREED{" "}
                      </h1>
                      <p className="lead text-white">
                        Sistema para <Badge color="primary" pill className="text-white mr-1" href="http://localhost:3003/#/login">gerenciamento de restaurantes.  </Badge>
                        <p></p>
                        <div>
                          <h1 className="display-4 text-white">
                            O jeito de pedir comida mudou, o de gerenciar restaurantes também.
                          </h1>
                        </div>
                      </p>
                      <div className="btn-wrapper">
                        <Button
                          className="btn-icon mb-3 mb-sm-0 ml-1"
                          color="success"
                          href=""
                        >
                          <span className="btn-inner--icon mb-3 mr-1">
                            <i className="ni ni-cloud-download-95" />
                          </span>
                          <span className="btn-inner--text">PlayStore</span>
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </div>
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
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-tv-2" />
                          </div>
                          <h6 className="text-primary text-uppercase">
                            Freed webapp
                          </h6>
                          <p className="description mt-3">
                            Use a tecnologia em favor do seu restaurante.
                            Freed facilita a gestão do seu restaurante.
                          </p>
                          <div>
                            <Badge color="primary" pill className="mr-1">
                              tecnologia
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              otimização do tempo
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              gestão do seu negócio
                            </Badge>
                          </div>
                          <Button
                            className="mt-3"
                            color="primary"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            este botão é necessário?
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i className="ni ni-cart" />
                          </div>
                          <h6 className="text-success text-uppercase">
                            Liberdade para seus clientes
                          </h6>
                          <p className="description mt-3">
                            Seus clientes podem baixar o Freed app
                            e fazer os próprios pedidos. Assim sua equipe
                            foca na qualidade da comida.
                          </p>
                          <div>
                            <Badge color="success" pill className="mr-1">
                              rápido
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              fácil
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              sem burocracia
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="success"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            este botão é necessário?
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-satisfied" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                            Freed web + Freed APP
                          </h6>
                          <p className="description mt-3">
                            Duas tecnologias inéditas. Você gerenciar melhor seu
                            restaurante e seus clientes fazem pedidos sem demora ou
                            burocracias.

                          </p>
                          <div>
                            <Badge color="warning" pill className="mr-1">
                              sem demora
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              dois em um
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              melhor desempenho
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="warning"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            este botão é necessário?
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <h></h>
          <section className="section section-lg pt-0">
            <Container>
              <Card className="bg-gradient-primary shadow-lg border-0">
                <div className="p-5">
                  <Row className="align-items-center">
                    <Col lg="8">
                      <h3 className="text-white">
                        Freed app
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
          <section className="section pb-2 bg-gradient-primary">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-lg-2 ml-lg-auto" md="6">
                  <div className="position-relative pl-md-5">
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/ill/ill-2.svg")}
                    />
                  </div>
                </Col>
                <Col className="order-lg-1" lg="6">
                  <div className="d-flex">
                    <div>
                      <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                        <i className="ni ni-shop text-primary" />
                      </div>
                    </div>
                    <div className="pl-4">
                      <h4 className="display-3 text-white">Interface moderna</h4>
                      <p className="text-white">
                        Gerenciar seu restaurante com a melhor ferramenta. Bonita e fácil de usar.
                      </p>
                    </div>
                  </div>
                  <Card className="shadow shadow-lg--hover mt-0">
                    <CardBody>
                      <div className="d-flex">
                        <div>
                          <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                            <i className="ni ni-cart" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-success">
                            Controle de caixa
                          </h5>
                          <p>
                            Controle de caixa completo em tempo real.
                            Todos podem usar: o gerente, os garçons e o dono.
                            Obtenha dashboards, relatórios e muito mais!
                          </p>
                          <a className="text-success">
                           Dashboard simples e fácil de entender
                          </a>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex">
                        <div>
                          <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                            <i className="ni ni-ruler-pencil" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-primary">
                            Gerenciar mesas
                          </h5>
                          <p>
                            Gerencie suas mesas em tempo real. Além do clientes
                            você e sua equipe de garçons e gerente também podem abrir
                            e fechar mesas. Incluir produtos, escolher diferentes
                            formas de pagamentos e muito mais!
                          </p>
                          <a
                            className="text-primary"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Pedidos sem demora ou burocracia
                          </a>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
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
                  points="2560 10 2560 100 10 180"
                />
              </svg>
            </div>
          </section>

          <p></p><p></p>          

        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default PaginaRestaurante;
