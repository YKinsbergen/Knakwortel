import React from 'react'
import {connect} from 'react-redux'
import BlockDetails from './BlockDetails'
import {loadBlocks, loadBlock, updateBlock} from '../actions/blocks'
import {Redirect} from 'react-router-dom'


class BlockDetailsContainer extends React.Component {
  state = { editMode: false }

  componentWillMount() {
    if (this.props.blocks === null) this.props.loadBlocks()
  }

  async componentDidMount() {
    await this.props.loadBlock(Number(this.props.match.params.id))
  }

  onEdit = () => {
    this.setState({
      editMode: true,
      formValues: {
        headline: this.props.block.headline,
        body: this.props.block.body
      }
    })
  }

  onChange = (event) => {
    this.setState({
      formValues: {
        ...this.state.formValues,
        [event.target.name]: event.target.value
      }
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.setState({
      editMode: false
    })
    this.props.updateBlock(Number(this.props.match.params.id), this.state.formValues)
  }

  render() {
    console.log(this.props)
    if (!this.props.block) return <h2>Loading...</h2>
    const {authenticated, blocks, block, match} = this.props

    // if (!authenticated) return (
		// 	<Redirect to="/login" />
    // ) 
    //Straks weer aanzetten om achter inlogmuur te krijgen!

    return (<BlockDetails
      block={block}
      onEdit={this.onEdit}
      onChange={this.onChange}
      onSubmit={this.onSubmit}
      editMode={this.state.editMode}
      formValues={this.state.formValues}
    />)
  }
}

const mapStateToProps = state => ({
  authenticated: state.currentUser !== null,
  blocks: state.blocks,
  block: state.block
})


export default connect(mapStateToProps, {loadBlocks, loadBlock, updateBlock})(BlockDetailsContainer)
