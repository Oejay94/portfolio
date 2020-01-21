import React, { Component } from 'react';
import { Route } from "react-router-dom";
import {Main} from "./components "
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={Main} />
      </React.Fragment>
    );
  }
}
export default App;
