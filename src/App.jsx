import React, { Component } from "react";
import GameApp from './Pages/GameApp'
import { hot } from "react-hot-loader";
import "./App.css";


class App extends Component {
  render() {
    return (
        <div className="App">
          <GameApp />
        </div>
    );
  }
}

export default hot(module)(App);
