import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" />
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;
