import React, { Fragment, Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "../components/app";
import Search from "../components/search";
import Submit from "../components/submit";
import SearchRecord from "../components/searchRecord";
import RegistrationForm from "../components/RegistrationForm";

import Header from "../header";
import Footer from "../footer";

class ReactRouter extends Component {
  render() {
    return (
      <Fragment>  
            <Router>
                <div>
                  <Header />
                  <Route exact path="/" component={App} />
                  <Route  path="/Search" component={Search} />
                  <Route  path="/Submit" component={Submit} />
                  <Route  path="/searchRecord" component={SearchRecord} />
                  <Route  path="/register" component={RegistrationForm} />
                  <Footer />
                </div>
            </Router>
          
      </Fragment>
    );
  }
}

export default ReactRouter;
