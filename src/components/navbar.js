import React from "react";
import Home from "./home";
import Features from "./features";
import Pricing from "./pricing";
import About from "./about";
import Terms from "./terms";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Navbar() {
    return (
        <Router>
        <div className="navbar" >
      
        <div className="container flex">
          <h1 className="logo" > <span>bee</span>-cloud</h1>
          <nav>
            <ul>
              <li>
                <Link to="/" >Home</Link>
              </li>
              <li>
                <Link to="/features" >Features</Link>
              </li>
              <li>
                <Link to="/pricing" >Pricing</Link>
              </li>
            </ul>
          </nav>

          
        </div>
        </div>
        <Switch>
              <Route exact path="/" >
                  <Home />
              </Route>
              <Route path="/features" >
                  <Features />
              </Route>
              <Route path="/pricing" >
                  <Pricing />
              </Route>
              <Route path="/about" >
                <About />
              </Route>
              <Route className="/terms" >
                <Terms />
              </Route>
          </Switch>
        </Router>
    );
}

export default Navbar;