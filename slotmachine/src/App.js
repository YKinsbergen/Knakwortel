import React, { Component } from 'react';
import { Route } from 'react-router-dom' 
import './App.css';
import SlotmachineContainer from './components/SlotmachineContainer'
import RecipeDetailsContainer from './components/RecipeDetailsContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={SlotmachineContainer}/>
        <Route exact path="/recipes/:id" component={RecipeDetailsContainer}/>
      </div>
    );
  }
}

export default App;