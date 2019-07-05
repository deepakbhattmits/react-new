import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "../components/App";
import Search from "../components/search";
import Submit from "../components/submit";
import SearchRecord from "../components/searchRecord";
import RegistrationForm from "../components/RegistrationForm";
import SimpleForm from '../components/SimpleForm';

import Header from "../header";
import Footer from "../footer";
import ListUsers from "../components/ListUsers";
import SearchList from "../components/SearchList";

class ReactRouter extends Component {
  render() {
    return (
            <Router>
                <div>
                  <Header />
                  <div className="container-fluid">
                    <Route exact path="/" component={ App } />
                    <Route  path="/Search" component={ Search } />
                    <Route  path="/Submit" component={ Submit } />
                    <Route  path="/searchRecord" component={ SearchRecord } />
                    <Route  path="/register" component={ RegistrationForm } />
                    <Route  path="/SimpleForm" component={ SimpleForm } />
                    <Route  path="/ListUsers" component={ ListUsers } />
                    <Route  path="/searchR" component={ SearchList } />
                  </div>
                  <Footer />
                </div>
            </Router>
    );
  }
}

export default ReactRouter;
