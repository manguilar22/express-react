import React, { Component } from 'react';

import SignUp from "./components/SignUp";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
            <h1>React Frontend</h1>
            <SignUp/>
        </header>
      </div>
    );
  }
}

export default App;
