import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./components";
import { Resume } from "./components";
import Footer from "./components/Misc/Footer/Footer";
import NavPage from "./components/Misc/NavBar/NavBar";
import HeaderSection from "./components/Misc/Header/Header";
import "semantic-ui-css/semantic.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavPage />
      <HeaderSection />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}
export default App;
