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
  conditionalRenderNoFilters = () => {
    const {sauceFilter, vegetableFilter, withSauceFilter} = this.props.filters
    return (sauceFilter || vegetableFilter || withSauceFilter) ?
    <span></span> : <span>Ik wil een broodje knakwortel...</span>
  }

  conditionalRenderSauceFilter = () => {
    const {filters} = this.props
    return filters.sauceFilter ? 
    <span>Ik wil een broodje knakwortel zonder saus </span> : <span></span>
  }
  conditionalRenderVegetableFilter = () => {
    const {filters} = this.props
    return filters.vegetableFilter ? 
    <span>Ik wil een broodje knakwortel met alleen saus</span> : <span></span>
  }
  conditionalRenderWithSauceFilter = () => {
    const {filters} = this.props
    return filters.withSauceFilter ? 
    <span>Ik wil een broodje knakwortel met saus</span> : <span></span>
  }

  renderLinkToRecipeDetails = () => {
    const {recipeId} = this.props
    if (recipeId.value === 0) return null
    return <div className="link-div"><Link id="link-details" to={`/recipes/${recipeId.value}`}>
    Recept details
    </Link></div>
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
        conditionalRenderNoFilters={this.conditionalRenderNoFilters}
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