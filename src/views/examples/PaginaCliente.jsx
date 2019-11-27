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



class PaginaCliente extends React.Component {
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
          <section className="section section-lg py-0">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={require("assets/img/theme/promo-1.png")}
                  />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                      <i className="ni ni-settings-gear-65" />
                    </div>
                    <h3>Freedapp um novo jeito de pedir comida</h3>
                    <p>
                      Faça você mesmo seus pedidos direto no restaurante. Mais liberdade pra você, menos tempo perdido.
                    </p>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-cart" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              A melhor solução para restaurantes
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-single-02" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              A melhor solução para o clientes
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-satisfied" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              Todos felizes :)
                            </h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section bg-secondary">
            <Container>
              <Row className="row-grid align-items-center">
                <Col md="6">
                  <Card className="bg-primary shadow border-0">
                    <CardImg
                      alt="..."
                      src={require("assets/img/theme/img-1-1200x1000.jpg")}
                      top
                    />
                    <blockquote className="card-blockquote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-bg"
                        preserveAspectRatio="none"
                        viewBox="0 0 583 95"
                      >
                        <polygon
                          className="fill-primary"
                          points="0,52 583,95 0,95"
                        />
                        <polygon
                          className="fill-primary"
                          opacity=".2"
                          points="0,42 583,95 683,0 0,95"
                        />
                      </svg>
                      <h4 className="display-3 font-weight-bold text-white">
                        Freed
                      </h4>
                      <p className="lead text-italic text-white">
                        Freed é a melhor escolha para gerenciar seu restaurante.
                        Freed é a melhor escolha para pedir comida e ainda dá pra dividir a conta com os amigos.
                      </p>
                    </blockquote>
                  </Card>
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-primary shadow rounded-circle mb-5">
                      <i className="ni ni-money-coins" />
                    </div>
                    <h3>Por que escolher o Freed?</h3>
                    <p className="lead">
                      Porque é mais fácil e você poupa tempo.
                    </p>
                    <p>
                      Nós sabemos que a demora no atendimento dos restaurantes frustra muita gente.
                      Por isso pensamos na mlhor maneira de resolver este problema.
                    </p>
                    <p>
                      O Freed funciona assim: você escolhe um restaurante, vai até ele,
                      abre sua mesa através do QR Code na mesa, incluí os pedidos e pronto!
                      Agora é só aguardar que aora é a vez do restaurante.
                    </p>
                    <p>
                      Saiba que o Freed é ótimo para sair com a galera. Você pode incluir outras
                      pessoas na sua mesa, dividir a conta e muito mais
                    </p>
                    <a
                      className="font-weight-bold text-primary mt-5"
                      href="#pablo"

                    >
                      Freed é um novo jeito de pedir comida nos restaurantes.
                    </a>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <p></p><p></p>
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
                        Você já viu as inúmeras vantagens de usar Freed, não é mesmo? Agora é
                        sua vez de baixar e experimentar. É totalmente de graça!
                      </p>
                    </Col>
                    <Col className="ml-lg-auto" lg="34">
                      <Button
                        block
                        className="btn-white"
                        color="default"
                        href="https://"
                        size="lg"
                      >
                        Eu quero experimentar!
                      </Button>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Container>
          </section>
          <section className="section section-lg bg-gradient-primary py-0">
            <Container className="pt-lg pb-80">
              <Row className="text-center justify-content-center">
                <Col lg="10">
                  <h2 className="display-3 text-white">Freed app e Restaurantes Parceiros</h2>
                  <p className="lead text-white">
                    Para usar o Freed app você precisará encontrar no app Restaurantes Parceiros já
                    cadastrados. Freed cabe em qualquer bolso e é para todos os gostos. Experimente!
                  </p>
                </Col>
              </Row>
              <Row className="row-grid mt-5">
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-settings text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Melhor solução do mercado</h5>
                  <p className="text-white mt-3">
                    Freed tem tudo que você precisa. Faça pedidos, divida a conta, escolha pelo preço,
                    pela especialiadade etc...
                  </p>
                </Col>
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-atom text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Economize tempo e divirta-se</h5>
                  <p className="text-white mt-3">
                    Você é livre!
              <br></br>
                    A facilidade de usar Freed para fazer pedidos nos restaurantes. Te permite
                    mais tempo com os amigos, menos tempo escolhendo ou revendo seus pedidos. Você não
                    precisa um garçom vir te atender.
                  </p>
                </Col>
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-ruler-pencil text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Poupe dinheiro e economize tempo</h5>
                  <p className="text-white mt-3">
                    Freed tem a missão de diminuir o tempo de atendimento. O que permite
                    aos garçons mais desempenho e menos tempo com atividades desnecessárias.
                  </p>
                </Col>

              </Row>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="100 100 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 10 2560 10 10 100"
                />
              </svg>
            </div>
          </section>

        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default PaginaCliente;
