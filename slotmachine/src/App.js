import React, { Component } from 'react';
import { Route } from 'react-router-dom' 
import './App.css';
import SlotmachineContainer from './components/SlotmachineContainer'
import TestContainer from './components/TestContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={SlotmachineContainer}/>
        <Route exact path="/test" component={TestContainer}/>
      </div>
    );
  }
}

export default App;