import "./App.css";
import React from "react";
import Inicio from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Inicio} />
          <Route path="/home" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
