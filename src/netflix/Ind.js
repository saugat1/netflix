import React from "react";
import Watch from "./Watch";
import App from "./App";
import { Switch, Route } from "react-router-dom";
import Search from "./Search";
import "./css/style.css";

const Ind = () => {
  return (
    <Switch>
      <Route exact path="netflix/" component={App} />
      <Route exact path="netflix/Watch/:id" component={Watch} />
      <Route exact path="netflix/Search/:string" component={Search} />
    </Switch>
  );
};

export default Ind;
