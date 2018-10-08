import * as React from 'react'
import {connect} from 'react-redux'
import {loadRecipes} from '../actions/recipes'
import Recipes from './Recipes'

class RecipesContainer extends React.PureComponent {

  componentDidMount() {
    this.props.loadRecipes()
  }

  render() {
    if (!this.props.recipes) return 'Loading...'
    return <Recipes recipes={this.props.recipes} />
  }
}

const mapStateToProps = (state) => ({
  recipes: state.recipes
})

const mapDispatchToProps = {
  loadRecipes
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesContainer)