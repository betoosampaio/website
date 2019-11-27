import React from "react";

// reactstrap components
import { Button, Card, Container, Row, Col } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.jsx";
import SimpleFooter from "components/Footers/SimpleFooter.jsx";

class Quemsomos extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main className="profile-page" ref="main">
          <section className="section-profile-cover section-shaped my-0">
            {/* Circles background */}
            <div className="shape shape-style-1 shape-default alpha-4">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew">
              <polygon
                className="fill-white"
                points="2560 0 2560 100 10 100"
              />
            </div>
          </section>
          <section className="section mt--200">
            <Container>
              <Card className="card-profile shadow mt--300">
                <div className="px-4">
                  <Row className="justify-content-center">
                    <Col className="order-lg-2" lg="5">
                      <div className="card-profile-image">
                        <a href="http://instagram.com/">
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require("assets/img/theme/img-1-1200x1000.jpg")}
                          />
                        </a>
                      </div>
                    </Col>
                    <div className="card-center py-4 mt-lg-2">
                    </div>

                  </Row>
                  <div className="text-center mt-5">
                    <h3>
                      Freed App
                    </h3>
                    <div className="h6 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Startup
                    </div>
                    <div className="h6 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      Solução inovadora para seu restaurante. Pensado com carinho para você crescer
                    </div>
                    <div>
                      <i className="ni education_hat mr-2" />
                      Sem reinventar a roda, apenas sofisticá-la.
                    </div>
                  </div>
                  <div className="mt-5 py-5 border-top text-center">
                    <Row className="justify-content-center">
                      <Col lg="9">

                        <a>NOSSA HISTÓRIA</a>
                        <p>
                          Freed é uma startup com foco no setor de restaurantes.
                          Oferece soluções para melhor gestão dos restaurantes. Afim de baratear
                          os custos de administração e otimizar o tempo de atendimento.
                        </p>
                        <p>
                          Além de oferecer uma aplicação web sofisticada e simples de usar, Freed também
                          oferece um app mobile para sincronizar com a versão dos restaurantes.
                        </p>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card>
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}
export default Quemsomos;