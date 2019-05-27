import React, { Component } from 'react';
import {HashRouter} from "react-router-dom";
import Navigation from "./components/nav/Navigation";
import Paths from "./components/nav/Paths";
class App extends Component {
  render() {
    return (
      <HashRouter>
          <Navigation/>
          <Paths/>
      </HashRouter>
    );
  }
}

export default App;
