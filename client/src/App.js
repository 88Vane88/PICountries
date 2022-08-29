import "./App.css";
import React from "react";
import Inicio from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import Form from "./components/Formulario/FormActivity";
import Detail from "./components/CountryDetail/CountryDetail";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Inicio} />
          <Route path="/home" component={Home} />
          <Route path="/form" component={Form} />
          <Route path="/home/:id" component={Detail} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
