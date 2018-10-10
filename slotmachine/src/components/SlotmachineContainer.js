import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { loadRecipes } from '../actions/recipes'
import { filterSauce, filterVegetable, filterWithSauce } from '../actions/filters'
import { dispatchRecipeId } from '../actions/recipeId'
import Slotmachine from './Slotmachine'

// sauceFilter = saus
// vegetableFilter = toppings

class SlotmachineContainer extends React.Component {
  componentWillMount() {
    if (!this.props.recipes) this.props.loadRecipes()
    return 
  }

  // Render different text based on which filters are on / off
  conditionalRenderNoFilters = () => {
    const {sauceFilter, vegetableFilter, withSauceFilter} = this.props.filters
    return (sauceFilter || vegetableFilter || withSauceFilter) ?
    null : <h2 id="main-header">BROODJE KNAKWORTEL MET...</h2>
  }

  conditionalRenderSauceFilter = () => {
    const {filters} = this.props
    return filters.sauceFilter ? 
    <h4 id="main-header">Broodje knakwortel zonder saus </h4> : null
  }
  conditionalRenderVegetableFilter = () => {
    const {filters} = this.props
    return filters.vegetableFilter ? 
    <h4 id="main-header">Broodje knakwortel met alleen saus</h4> : null
  }
  conditionalRenderWithSauceFilter = () => {
    const {filters} = this.props
    return filters.withSauceFilter ? 
    <h4 id="main-header">Broodje knakwortel met saus</h4> : null
  }

  renderLinkToRecipeDetails = () => {
    const {recipeId} = this.props
    if (recipeId.value === 0) return null
    return <div className="link-div"><a href={`/recepten/${recipeId.value}`} target="_parent" id="link-details">
    Receptdetails <img id="go-to-icon" src="https://res.cloudinary.com/dcannkqr7/image/upload/v1539096413/scroll_back_1.png" /></a></div>
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