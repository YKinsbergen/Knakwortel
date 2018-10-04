import React, { Component } from 'react';
import { Route } from 'react-router-dom' 
import './App.css';
import SlotmachineContainer from './components/SlotmachineContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={SlotmachineContainer}/>
      </div>
    );
  }
}

export default App;