import React, { Component } from 'react';
import './App.css';
import {apiUrl} from './constants';
import LocatorContainer from './components/LocatorContainer';

class App extends Component {
  render() {
    console.log(`apiUrl: ${apiUrl}`)
    return (
      <div className="App container">
        <LocatorContainer />
      </div>
    );
  }
}

export default App;
