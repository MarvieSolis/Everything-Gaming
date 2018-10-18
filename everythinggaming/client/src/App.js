import React, { Component } from 'react';
import './App.css';
import CreatePost from "./pages/CreatePost/CreatePost";

class App extends Component {
  render() {
    return (
      <div className="App">
        < CreatePost />
      </div>
    );
  }
}

export default App;
