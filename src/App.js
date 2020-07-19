import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import PostingPage from "./components/views/PostingPage/PostingPage";
import ViewPostPage from "./components/views/ViewPostPage/ViewPostPage";
import ViewContentPage from "./components/views/ViewContentPage/ViewContentPage";
import Auth from "./hoc/Auth";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Auth(LandingPage, null)} />
            <Route exact path="/login" component={Auth(LoginPage, false)} />
            <Route
              exact
              path="/register"
              component={Auth(RegisterPage, false)}
            />
            <Route exact path="/posting" component={Auth(PostingPage, true)} />
            <Route
              exact
              path="/viewpost"
              component={Auth(ViewPostPage, true)}
            />
            <Route
              exact
              path="/viewcontent"
              component={Auth(ViewContentPage, true)}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
