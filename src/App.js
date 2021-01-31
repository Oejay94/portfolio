import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./components";
import { Resume } from "./components";
import Footer from "./components/Misc/Footer";
import NavPage from "./components/Misc/NavBar";
import HeaderSection from "./components/Misc/Header";
import "semantic-ui-css/semantic.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavPage />
      <HeaderSection />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/resume" component={Resume} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
export default App;
