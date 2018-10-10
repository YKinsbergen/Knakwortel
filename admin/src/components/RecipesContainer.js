import * as React from 'react'
import {connect} from 'react-redux'
import {loadRecipes, loadToppings, addRecipe, deleteRecipe} from '../actions/recipes'
import Recipes from './Recipes'
import {CDN_UPLOAD_URL} from '../cdnConstant'
import request from 'superagent'

class RecipesContainer extends React.PureComponent {
  state = {
    addMode: false,
    toppings: {},
    uploadedFileCloudinaryUrl: null
  }

  componentDidMount() {
    this.props.loadRecipes()
    this.props.loadToppings()
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

  handleToppingsChange = name => event => {
    this.setState({ 
      ...this.state, 
      toppings: {...this.state.toppings, [name]: event.target.checked }
    })
  }

  chosenToppingsToArray = () => {
    const toppings = Object.keys(this.state.toppings)
    return toppings.filter(topping => this.state.toppings[topping] === true )
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const name = this.state.name
    const description = this.state.description
    const toppingIdArr = this.chosenToppingsToArray()
    const uploadedFileCloudinaryUrl = this.state.uploadedFileCloudinaryUrl
    const youtubeUrl = this.state.youtubeUrl || ''

    if (toppingIdArr.length < 3 || name.length < 3 || description.length < 10 ) {
      //error 
    } else {
      this.props.addRecipe(name, description, toppingIdArr, uploadedFileCloudinaryUrl, youtubeUrl)
      this.setState({
        addMode: false,
        toppings: {},
        uploadedFileCloudinaryUrl: null
      })
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
    this.setState({
      uploadedFileCloudinaryUrl: ''
    })
    let upload = request.post(CDN_UPLOAD_URL)
                      .field('upload_preset', uploadPreset)
                      .field('file', file)
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
    if (this.props.recipes.toppings && this.props.recipes.toppings.length !== 0 && Object.keys(this.state.toppings).length === 0) {
      // load all toppings in this.state: object with toppingIds as keys, values false. Checkbox sets to true
      let toppingsObj = {}
      this.props.recipes.toppings.forEach(topping => {
        toppingsObj = {
          ...toppingsObj,
          [topping.id]: false
        }
      })
      this.setState({
        ...this.state,
        toppings: toppingsObj
      })
    }
  }


  render() {
    if (this.props.recipes.list.length === 0) return 'Loading...'

    console.log(this.state)
    return <Recipes 
              recipes={this.props.recipes.list}
              toppingCheckboxes={this.state.toppings} 
              toppings={this.props.recipes.toppings}
              addMode={this.state.addMode}
              onAdd={this.onAdd}
              handleToppingsChange={this.handleToppingsChange}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              fileSelectHandler={this.fileSelectHandler}
              submitBtnDisabled={this.state.uploadedFileCloudinaryUrl !== null && this.state.uploadedFileCloudinaryUrl.length === 0}
              deleteRecipe={this.props.deleteRecipe}
            />
  }
}

const mapStateToProps = (state) => ({
  recipes: state.recipes
})

const mapDispatchToProps = {
  loadRecipes,
  loadToppings,
  addRecipe,
  deleteRecipe
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesContainer)