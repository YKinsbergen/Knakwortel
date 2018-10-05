import React, { Component } from 'react';
import store from './store';
import {Provider} from 'react-redux';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import StoreLocatorContainer from './components/StoreLocatorContainer';

class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <div>
        <Router basename={`${process.env.PUBLIC_URL}/`}>
          <Route path={`/`} exact component={StoreLocatorContainer} />
        </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
