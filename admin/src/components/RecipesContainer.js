import * as React from 'react'
import {connect} from 'react-redux'
import {loadRecipes, loadToppings, addRecipe} from '../actions/recipes'
import Recipes from './Recipes'

class RecipesContainer extends React.PureComponent {
  state = {
    addMode: false,
    toppings: {}
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
    this.props.addRecipe(name, description, toppingIdArr)

    this.setState({
      addMode: false
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
            />
  }
}

const mapStateToProps = (state) => ({
  recipes: state.recipes
})

const mapDispatchToProps = {
  loadRecipes,
  loadToppings,
  addRecipe
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesContainer)