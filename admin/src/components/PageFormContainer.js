import React from 'react'
import {connect} from 'react-redux'
import PAgeForm from './EventForm'

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
      name: '',
      description: '',
      startDate: '',
      endDate: '',
      pictureUrl: ''
    })
    this.props.createEvent(this.state)
  }

  render() {
    console.table(this.state)
    return (<EventForm
      handleSubmit={this.handleSubmit}
      handleChange={this.handleChange}
      values={this.state}
    />)
  }
}

export default connect(null)(PageFormContainer)
