import React from "react";
import { Route } from "react-router-dom";
import App from "../components/App";
import Search from "../components/Search";
import Submit from "../components/Submit";
import Header from "../header";

class ReactRouter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Route exact path="/" component={App} />
	      <Route  path="/Search" component={Search} />
        <Route  path="/Submit" component={Submit} />
      </React.Fragment>
    );
  }
}

export default ReactRouter;
