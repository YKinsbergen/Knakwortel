// src/components/RecipeDetailsContainer.js
import * as React from 'react'
import RecipeDetails from './RecipeDetails'
import { connect } from 'react-redux';

class RecipeDetailsContainer extends React.Component {
  componentWillMount() {
      const {match} = this.props
      // this.props.loadRecipe(Number(match.params.id))
  }
  render() {
    return (
      <div>
        <RecipeDetails />
      </div>
    )
  }
}

export default connect(null)(RecipeDetailsContainer)