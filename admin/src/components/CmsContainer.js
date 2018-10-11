import React, { Component } from 'react'
import {connect} from 'react-redux'
import './Dashboard.css'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import DashboardContainer from './DashboardContainer';
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import BlockDetailsContainer from './BlockDetailsContainer';
import ContentContainer from './ContentContainer';
import ShopsContainer from './ShopsContainer'
import OrderContainer from './OrderContainer'
import LogoutPage from './logout/LogoutPage'
import RecipesContainer from './RecipesContainer'
import ToppingsContainer from './ToppingsContainer'
import FaqContainer from './FaqContainer'
import AdminContainer from './AdminContainer'

class CmsContainer extends Component {
  render() {
    if (!this.props.authenticated) {
			return (
				<Redirect to="/login" />
			)
		}
    return (
      <Router>
      <div>
        <Navbar />
          <div class="container-fluid">
            <div class="row">
              <Sidebar />
              <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
                <Route exact path="/dashboard" component={DashboardContainer}/>
                <Route exact path="/dashboard/content" component={ContentContainer} />
                <Route exact path="/dashboard/content/:id" component={BlockDetailsContainer} />
                <Route exact path="/dashboard/shops" component={ShopsContainer} />
                <Route exact path="/dashboard/bestellingen" component={OrderContainer} />
                <Route exact path="/dashboard/recipes" component={RecipesContainer} />
                <Route exact path="/dashboard/toppings" component={ToppingsContainer} />
                <Route exact path="/dashboard/faq" component={FaqContainer} />
                <Route exact path="/dashboard/admins" component={AdminContainer} />
                <Route path="/logout" component={LogoutPage} />
              </main>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
	authenticated: state.currentUser !== null
})

export default connect(mapStateToProps)(CmsContainer)