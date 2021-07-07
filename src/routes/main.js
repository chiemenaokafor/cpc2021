import React from "react";
import { Switch, Route } from "react-router-dom";
import * as ROUTES from "./routes";

import Landing from "../views/Landing";
import Search from "../views/Search";

export default function Main() {
  return (
    <Switch>
      <Route exact path={ROUTES.HOME} component={Landing} />
      <Route exact path={ROUTES.SEARCH} component={Search} />
    </Switch>
  );
}
