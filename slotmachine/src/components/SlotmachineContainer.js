import * as React from 'react'
import { connect } from 'react-redux'
import { loadRecipes } from '../actions/recipes'
import { filterSauce, filterVegetable, filterWithSauce } from '../actions/filters'
import Slotmachine from './Slotmachine'

class TestContainer extends React.Component {
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

  componentDidMount() {
    this.props.loadRecipes()
}

  render() {
    const {
      recipes, 
      filters, 
      filterSauce, 
      filterVegetable, 
      filterWithSauce
    } = this.props
    
    if (!recipes) return 'Loading...'
    return (
      <div>
        <Slotmachine recipes={recipes} 
        filters={filters}
        filterSauce={filterSauce}
        filterVegetable={filterVegetable}
        filterWithSauce={filterWithSauce}
        conditionalRenderSauceFilter={this.conditionalRenderSauceFilter}
        conditionalRenderVegetableFilter={this.conditionalRenderVegetableFilter}
        conditionalRenderWithSauceFilter={this.conditionalRenderWithSauceFilter}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  recipes: state.recipes,
  filters: state.filters
})

export default connect(mapStateToProps, {
  loadRecipes, 
  filterSauce, 
  filterVegetable,
  filterWithSauce
})
(TestContainer)