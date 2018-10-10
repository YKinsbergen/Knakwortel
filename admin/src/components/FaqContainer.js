import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {Redirect, Route} from 'react-router-dom'
import Faq from './Faq'
import './Dashboard.css'
import {loadBlocks, addBlock} from '../actions/blocks'


class FaqContainer extends PureComponent {
  state = {
    addMode: false,
    tag: 'faq'
  }

  onAdd = () => {
    this.setState({
      addMode: true,
    })
  }

  handleChange = event => {
    this.setState({ 
      ...this.state, 
      [event.target.name]: event.target.value 
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const tag = this.state.tag
    const headline = this.state.headline
    const body = this.state.body
    
       
    this.props.addBlock({tag, headline, body})
    this.setState({
      addMode: false
    })
  }

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
       <Faq 
        blocks={blocks} 
        addMode={this.state.addMode}
        onAdd={this.onAdd}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  authenticated: state.currentUser !== null,
  blocks: state.blocks
})

export default connect(mapStateToProps, {loadBlocks, addBlock})(FaqContainer)
