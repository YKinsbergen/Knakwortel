import React, { Component } from 'react';
import './App.css';

import LocatorContainer from './components/LocatorContainer';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="App-header">
          <h1>Winkelzoeker</h1>
        </div>
        <LocatorContainer />
      </div>
    );
  }
}

export default App;
