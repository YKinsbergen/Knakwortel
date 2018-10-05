import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {Redirect, Route} from 'react-router-dom'
import Content from './Content'
import './Dashboard.css'
import {loadBlocks} from '../actions/blocks'


class ContentContainer extends PureComponent {
  componentWillMount() {
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
       <Content blocks={blocks}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  authenticated: state.currentUser !== null,
  blocks: state.blocks
})

export default connect(mapStateToProps, {loadBlocks})(ContentContainer)
