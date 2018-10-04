import React from 'react'
import {connect} from 'react-redux'
import PageForm from './PageForm'
import {loadBlocks} from '../actions/blocks'


class PageFormContainer extends React.Component {
  state = {}

  componentWillMount() {
    if (this.props.block === null) this.props.loadBlocks()}

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

export default connect(mapStateToProps, {loadBlocks})(PageFormContainer)
