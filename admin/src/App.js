import React, { Component } from 'react'
import './App.css'
import TopBar from './components/layout/TopBar'
import LogoutPage from './components/logout/LogoutPage'
import LoginPage from './components/login/LoginPage'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import SignupPage from './components/signup/SignupPage'
import Dashboard from './components/Dashboard'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            {/* <TopBar /> */}
          </nav>
          <main>
            <Route exact path="/login" component={LoginPage} />
            {/* <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/logout" component={LogoutPage} />
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/" render={ () => <Redirect to="/dashboard" /> } /> */}
          </main>
        </div>
      </Router>
    );
  }
}

export default App;