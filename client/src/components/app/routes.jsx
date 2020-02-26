import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CourseComponent from './course/course';
import HomeComponent from './home/home';
import LearnComponent from './course/learn/learn';

class RouteComponent extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Switch>
            <Route exact path="/" component={HomeComponent} />
            <Route exact path="/subject" component={CourseComponent} />
            <Route exact path="/learn" component={LearnComponent} />
          </Switch>
        </React.Fragment>
      </Router>
    )
  }
}

export default RouteComponent;