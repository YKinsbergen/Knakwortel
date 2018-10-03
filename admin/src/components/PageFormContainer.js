import React from 'react'
import {connect} from 'react-redux'
import PageForm from './PageForm'

class PageFormContainer extends React.Component {
  state = {}

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    console.log(this.state)
    event.preventDefault()
    this.setState({
      headline: '',
      body: '',
    })
    this.props.createEvent(this.state)
  }

  render() {
    return (<PageForm
      handleSubmit={this.handleSubmit}
      handleChange={this.handleChange}
      values={this.state}
    />)
  }
}

export default connect(null)(PageFormContainer)
