import React from "react";
// nodejs library that concatenates classes
import { Link } from "react-router-dom";

// reactstrap components
import { 
  NavLink, 
  Card, 
  CardImg,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.jsx";
import SimpleFooter from "components/Footers/SimpleFooter.jsx";



class Home extends React.Component {
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
                <div>
                  <Row>
                    <Col>
                      <h1 className="display-2 text-white">
                        FREED{" "}
                      </h1>
                      <p className="text-white">
                        Bem-vindo! <p></p>
                        Escolha a forma como deseja prosseguir logo abaixo. Caso ainda não seja cliente. Cadastre-se já!
                        <p></p>
                        <div>
                          <h1 className="display-4 text-white">
                            O jeito de pedir comida mudou, o de gerenciar restaurantes também.
                          </h1>
                        </div>
                      </p>                      
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

          <footer className="section section-lg pt-lg-0 mt--200 has-cards">
            <Container className="container-sm py-0">
              <Row>
                <Col className="mb-3 mb-md-0" sm="6">
                  <Card className="card-lift--hover shadow border-0">
                    <NavLink href="http://localhost:3000/restaurante-page">
                      <CardImg
                        alt="..."
                        src={require("assets/img/theme/arearestaurante.png")}
                      />
                    </NavLink>
                  </Card>
                </Col>
                
                <Col className="mb-3 mb-md-0" sm="6">
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
          </footer>
        </main>

        <SimpleFooter />
      </>
    );
  }
}

export default Home;
