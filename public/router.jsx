import React from "react";
import { Switch, Route } from "react-router";

export default (
  // Switch is added in v4 react-router
  <Switch>
    <Route path="/massages" />
    <Route path="/yoga" />
    <Route path="/facials" />
    <Route path="/handsFeet" />
    <Route path="/gallery" />
    <Route path="/pamper" />
    <Route path="/waxing" />
    <Route path="/blog" />
    <Route path="/contact" />
    <Route path="/#banner" />
    <Route path="/#about" />
    <Route path="/#services" />
    <Route />
  </Switch>
);
