import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Home } from "./components ";
import { Resume } from "./components ";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path={"/"} render={() => <Home />} />
        <Route exact path={"/resume"} render={() => <Resume />} />
      </React.Fragment>
    );
  }
}
export default App;