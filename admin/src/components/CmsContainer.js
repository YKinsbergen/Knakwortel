import React, { Component } from 'react'
import './Dashboard.css'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import DashboardContainer from './DashboardContainer';
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import BlockDetailsContainer from './BlockDetailsContainer';

class CmsContainer extends Component {
  render() {
    return (
      <Router>
      <div>
        <Navbar />
          <div class="container-fluid">
            <div class="row">
              <Sidebar />
              <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
              <Route exact path="/dashboard" component={DashboardContainer}/>
              <Route exact path="/dashboard/content/:id" component={BlockDetailsContainer} />
              </main>
            </div>
          </div>
    </div>
    </Router>
    );
  }
}

export default CmsContainer;