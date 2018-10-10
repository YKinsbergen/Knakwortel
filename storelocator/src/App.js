import React, { Component } from 'react';
import './App.css';
import {apiUrl} from './constants';
import LocatorContainer from './components/LocatorContainer';

class App extends Component {
  render() {
    console.log(`apiUrl: ${apiUrl}`)
    return (
      <div className="App container">
        {/* <div className="App-header">
          <h1>Winkelzoeker</h1>
        </div> */}
        <LocatorContainer />
      </div>
    );
  }
}

export default App;
