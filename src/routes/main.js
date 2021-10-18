import React from "react";
import { Switch, Route } from "react-router-dom";
import * as ROUTES from "./routes";

import Landing from "../views/Landing";
import Search from "../views/Search";
<<<<<<< HEAD
import Colleges from "../views/Colleges";
import Profile from "../views/Profile";
import Error from "../views/Error";
=======
import Course from "../views//Course";
>>>>>>> 78f5cd1f395ab4408978d782d414d20f70de2ff1

export default function Main() {
  return (
    <Switch>
      <Route exact path={ROUTES.HOME} component={Landing} />
      <Route exact path={ROUTES.SEARCH} component={Search} />
<<<<<<< HEAD
      <Route exact path={ROUTES.COLLEGES} component={Colleges} />
      <Route exact path={ROUTES.PROFILE} component={Profile} />

      {/* This Route should always be at the bottom of all routes */}
      <Route exact path="*" component={Error} />
=======
      <Route exact path={ROUTES.COURSE} component={Course} />
>>>>>>> 78f5cd1f395ab4408978d782d414d20f70de2ff1
    </Switch>
  );
}
