import React from "react";
import { Switch, Route } from "react-router-dom";

import { Home } from "./views";

const Navigator = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  );
};

export default Navigator;
