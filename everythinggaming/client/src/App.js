import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreatePost from "./pages/CreatePost/CreatePost";
import Landing from "./pages/Landing/Landing";
import Navbar from "./components/Navbar/Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Router>
            <div>
              <Switch>
                <Route exact path = "/" component = {CreatePost} />
                {/* <Route exact path = "/listedevents" component = {ListedEvents} />
                <Route path = "/eventdetail/:id" component = {EventDetail} />
                <Route exact path = "/home" component = {Home} />
                <Route exact path = "/:citystate/:category" component={ListedEvents} />
                <Route exact path = "/create" component = {CreateEvent} />
                <Route component={Page404} /> */}
              </Switch>
            </div>
          </Router>
      </div>
    );
  }
}

export default App;
