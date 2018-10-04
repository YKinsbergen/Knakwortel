// src/components/RecipeDetailsContainer.js
import * as React from 'react'
import RecipeDetails from './RecipeDetails'
import { connect } from 'react-redux';
import { loadRecipe } from '../actions/recipes'

class RecipeDetailsContainer extends React.Component {
  componentWillMount() {
      const {match, loadRecipe} = this.props
      loadRecipe(Number(match.params.id))
  }
  render() {
    const {recipe} = this.props
    if (!recipe) return 'Loading...'
    return (
      <div>
        <RecipeDetails recipe={recipe}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  recipe: state.recipe
})

export default connect(mapStateToProps, {loadRecipe})(RecipeDetailsContainer)