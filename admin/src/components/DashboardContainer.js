import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import DashBoard from './Dashboard'
import './Dashboard.css'
import {loadBlocks} from '../actions/blocks'



class GamesList extends PureComponent {
  componentDidMount() {
    this.props.loadBlocks()
  }

  render() {
    if (!this.props.blocks) return <h2>Loading...</h2>
    const {authenticated, blocks} = this.props

    // if (!authenticated) return (
		// 	<Redirect to="/login" />
    // ) 
    //Straks weer aanzetten om achter inlogmuur te krijgen!

    return (
      <div>
        <DashBoard blocks={blocks}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  authenticated: state.currentUser !== null,
  blocks: state.blocks
})

export default connect(mapStateToProps, {loadBlocks})(GamesList)
