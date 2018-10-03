import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import DashBoard from './Dashboard'
import './Dashboard.css'


class GamesList extends PureComponent {
  render() {
    const {authenticated} = this.props

    if (!authenticated) return (
			<Redirect to="/login" />
    ) 
    //Straks weer aanzetten om achter inlogmuur te krijgen!

    return (
      <div>
        <DashBoard />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  authenticated: state.currentUser !== null
})

export default connect(mapStateToProps)(GamesList)
