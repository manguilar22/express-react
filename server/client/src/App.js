import React, { Component } from 'react';

import SignUp from "./components/SignUp";
import Random from "./components/driver/Random";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
            <h1>React Frontend</h1>
            <Random/>
        </header>
      </div>
    );
  }
}

export default App;
