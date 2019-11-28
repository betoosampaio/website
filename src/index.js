import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss";

import PaginaRestaurante from "views/examples/PaginaRestaurante.jsx";
import PaginaCliente from "views/examples/PaginaCliente.jsx";
import QuemSomos from "views/examples/QuemSomos.jsx";
import Contato from "views/examples/Contato.jsx";
import Home from "views/examples/Home.jsx";



ReactDOM.render(
  <BrowserRouter>
    <Switch>
    
      <Route path="/" exact render={props => <PaginaRestaurante {...props} />} />
      <Route
        path="/restaurante-page"
        exact
        render={props => <PaginaRestaurante {...props} />}
      />

      <Route path="/" exact render={props => <PaginaCliente {...props} />} />
      <Route
        path="/cliente-page"
        exact
        render={props => <PaginaCliente {...props} />}
      />

      <Route path="/" exact render={props => <QuemSomos {...props} />} />
      <Route
        path="/quemsomos-page"
        exact
        render={props => <QuemSomos {...props} />}
      />

      <Route path="/" exact render={props => <Contato {...props} />} />
      <Route
        path="/contato-page"
        exact
        render={props => <Contato {...props} />}
      />

      <Route path="/" exact render={props => <Home {...props} />} />
      <Route
        path="/home-page"
        exact
        render={props => <Home {...props} />}
      />

      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
