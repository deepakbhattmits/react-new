import React from "react";
import { Route } from "react-router-dom";
import App from "../components/app";
import Search from "../components/search";
import Submit from "../components/submit";
import SearchRecord from "../components/searchRecord";
import RegistrationForm from "../components/RegistrationForm";

import Header from "../header";
import Footer from "../footer";

class ReactRouter extends React.Component {
  render() {
    return (
      <React.Fragment> 
            <Header />
            <div className="container-fluid">
              <Route exact path="/" component={App} />
              <Route  path="/Search" component={Search} />
              <Route  path="/Submit" component={Submit} />
              <Route  path="/searchRecord" component={SearchRecord} />
              <Route  path="/register" component={RegistrationForm} />
              
            </div>
            <Footer />
      </React.Fragment>
    );
  }
}

export default ReactRouter;
