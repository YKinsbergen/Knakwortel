import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import BlockDetails from './BlockDetails'
import {loadBlocks, loadBlock, updateBlock, updateBlockImage} from '../actions/blocks'
import {CDN_UPLOAD_URL} from '../cdnConstant'
import request from 'superagent'


class BlockDetailsContainer extends React.Component {
  state = { 
    editMode: false,
    uploadedFileCloudinaryUrl: ''
  }

  componentWillMount() {
    if (this.props.blocks === null) this.props.loadBlocks()
  }

  async componentDidMount() {
    await this.props.loadBlock(Number(this.props.match.params.id))
  }

  // Text edit handlers
  onEdit = () => {
    this.setState({
      editMode: true,
      formValues: {
        headline: this.props.block.headline,
        body: this.props.block.body,
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

  
  // Image upload handlers
  uploadPresetPrompt = () => {
    if (process.env.REACT_APP_CDN_CODE) {
      return process.env.REACT_APP_CDN_CODE
    } else {
      let form = prompt("Please enter your preset")
      if (form !== null) {
        return form
      }
    }
  }

  fileSelectHandler = async(event) => {
    this.fileUploadHandler(event.target.files[0], await this.uploadPresetPrompt())
  }

  fileUploadHandler(file, uploadPreset) {
    let upload = request.post(CDN_UPLOAD_URL)
                      .field('upload_preset', uploadPreset)
                      .field('file', file);
    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }
      if (response.body.secure_url !== '') {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        })
        this.props.updateBlockImage(
          Number(this.props.match.params.id), 
          this.state.uploadedFileCloudinaryUrl)
      }
    })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.block !== this.props.block) {
      this.props.loadBlock(Number(this.props.match.params.id))
    }
  }

  render() {
    console.log(this.props)
    if (!this.props.block) return <h2>Loading...</h2>
    const {authenticated, blocks, block, match} = this.props


    return (<BlockDetails
      block={block}
      onEdit={this.onEdit}
      onChange={this.onChange}
      onSubmit={this.onSubmit}
      editMode={this.state.editMode}
      formValues={this.state.formValues}

      fileSelectHandler={this.fileSelectHandler}
    />)
  }
}

const mapStateToProps = state => ({
  authenticated: state.currentUser !== null,
  blocks: state.blocks,
  block: state.block
})


export default connect(mapStateToProps, 
  {loadBlocks, loadBlock, updateBlock, updateBlockImage})
  (BlockDetailsContainer)
