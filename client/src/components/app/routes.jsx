import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import CourseComponent from "./course/course";
import HomeComponent from "./home/home";
import LearnComponent from "./course/learn/learn";

class RouteComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={HomeComponent} />
          <Route exact path="/courses" component={CourseComponent} />
          <Route exact path="/learn" component={LearnComponent} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default RouteComponent;
