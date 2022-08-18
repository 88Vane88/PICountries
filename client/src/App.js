import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import Inicio from "./components/LandingPage/LandingPage";
/* import {Switch} from "react-router-dom"  */

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Inicio} />
    </div>
  );
}

export default App;
