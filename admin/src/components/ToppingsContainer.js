import * as React from 'react'
import {connect} from 'react-redux'
import {loadRecipes, loadToppings, loadToppingTypes, addTopping, deleteTopping} from '../actions/recipes'
import Toppings from './Toppings'
import {CDN_UPLOAD_URL} from '../cdnConstant'
import request from 'superagent'

class ToppingsContainer extends React.PureComponent {
  state = {
    addMode: false,
    uploadedFileCloudinaryUrl: ''
  }

  componentDidMount() {
    this.props.loadRecipes()
    this.props.loadToppings()
    this.props.loadToppingTypes()
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
    const name = this.state.name
    const toppingType = this.state.toppingType
    
    const uploadedFileCloudinaryUrl = this.state.uploadedFileCloudinaryUrl
    
    
    this.props.addTopping(name, toppingType,uploadedFileCloudinaryUrl)
    this.setState({
      addMode: false
    })
  }

  deleteToppingFn = (topping) => {
    const {toppings} = this.props.recipes
    console.log(topping)
    if (toppings.length > 12) {
      if (toppings.filter(topp => topp.toppingType.id === topping.toppingType.id).length > 3) {
        this.props.deleteTopping(topping.id)
      }
    }
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
        //
      }
    })
  }

  componentDidUpdate = () => {

  }


  render() {
    if (this.props.recipes.list.length === 0) return 'Loading...'

    console.log(this.state)
    return <Toppings 
              toppings={this.props.recipes.toppings}
              toppingTypes={this.props.recipes.toppingTypes}
              addMode={this.state.addMode}
              onAdd={this.onAdd}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              fileSelectHandler={this.fileSelectHandler}
              submitBtnDisabled={this.state.uploadedFileCloudinaryUrl.length === 0}
              deleteToppingFn={this.deleteToppingFn}
            />
  }
}

const mapStateToProps = (state) => ({
  recipes: state.recipes
})

const mapDispatchToProps = {
  loadRecipes,
  loadToppings,
  loadToppingTypes,
  addTopping,
  deleteTopping
}

export default connect(mapStateToProps, mapDispatchToProps)(ToppingsContainer)