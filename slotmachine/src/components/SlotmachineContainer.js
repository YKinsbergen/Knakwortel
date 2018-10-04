import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { loadRecipes } from '../actions/recipes'
import { filterSauce, filterVegetable, filterWithSauce } from '../actions/filters'
import { dispatchRecipeId } from '../actions/recipeId'
import Slotmachine from './Slotmachine'

class SlotmachineContainer extends React.Component {
  componentWillMount() {
    if (!this.props.recipes) this.props.loadRecipes()
    return 
  }

  // Render different text based on which filters are on / off
  conditionalRenderSauceFilter = () => {
    const {filters} = this.props
    return filters.sauceFilter ? 
    <p>Sauce filter ON</p> : <p>Sauce filter OFF</p>
  }
  conditionalRenderVegetableFilter = () => {
    const {filters} = this.props
    return filters.vegetableFilter ? 
    <p>Vegetable filter ON</p> : <p>Vegetable filter OFF</p>
  }
  conditionalRenderWithSauceFilter = () => {
    const {filters} = this.props
    return filters.withSauceFilter ? 
    <p>With Sauce filter ON</p> : <p>With Sauce filter OFF</p>
  }

  renderLinkToRecipeDetails = () => {
    const {recipeId} = this.props
    if (recipeId.value === 0) return null
    return <Link id="link-details" to={`/recipes/${recipeId.value}`}>
    Recipe details
    </Link>
  }

  render() {
    const {
      recipes, 
      filters, 
      recipeId,
      dispatchRecipeId,
      filterSauce, 
      filterVegetable, 
      filterWithSauce,
    } = this.props
    
    if (!recipes) return 'Loading...'
    return (
      <div>
        <Slotmachine recipes={recipes} 
        filters={filters}
        recipeId={recipeId}
        filterSauce={filterSauce}
        filterVegetable={filterVegetable}
        filterWithSauce={filterWithSauce}
        conditionalRenderSauceFilter={this.conditionalRenderSauceFilter}
        conditionalRenderVegetableFilter={this.conditionalRenderVegetableFilter}
        conditionalRenderWithSauceFilter={this.conditionalRenderWithSauceFilter}
        renderLinkToRecipeDetails={this.renderLinkToRecipeDetails}
        dispatchRecipeId={dispatchRecipeId}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  recipes: state.recipes,
  filters: state.filters,
  recipeId: state.recipeId
})

export default connect(mapStateToProps, {
  loadRecipes, 
  dispatchRecipeId,
  filterSauce, 
  filterVegetable,
  filterWithSauce
})
(SlotmachineContainer)