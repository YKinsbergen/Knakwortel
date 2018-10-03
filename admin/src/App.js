import React, { Component } from 'react'
import './App.css'
import LogoutPage from './components/logout/LogoutPage'
import LoginPage from './components/login/LoginPage'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import SignupPage from './components/signup/SignupPage'
import DashboardContainer from './components/DashboardContainer';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <main>
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/dashboard" component={DashboardContainer} />
            <Route exact path="/logout" component={LogoutPage} />
            {/* <Route exact path="/signup" component={SignupPage} /> */}
            <Route exact path="/" render={ () => <Redirect to="/dashboard" /> } />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;