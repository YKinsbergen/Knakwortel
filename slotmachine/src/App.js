import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom' 
import './App.css';
import SlotmachineContainer from './components/SlotmachineContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" render={ () => <Redirect to="recepten" />} />
        <Route exact path="/recepten" component={SlotmachineContainer}/>
      </div>
    );
  }
}

export default App;