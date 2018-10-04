import * as React from 'react'
import { connect } from 'react-redux'
import { loadRecipes } from '../actions/recipes'
import { filterSauce, filterVegetable } from '../actions/filters'
import Test from './Test'

class TestContainer extends React.Component {
  // Render different text based on which filters are on / off
  conditionalFilterRender = () => {
    const {filters} = this.props
    if (filters.sauceFilter === true && filters.vegetableFilter === true) {
      return <div><p>Sauce filter ON - Vegetable filter ON</p></div>
    }
    if (filters.sauceFilter === true) {
      return <div><p>Sauce filter ON - Vegetable filter OFF</p></div>
    }
    if (filters.vegetableFilter === true) {
      return <div><p>Sauce filter OFF - Vegetable filter ON</p></div>
    }

    else {
      return <div><p>Sauce filter OFF - Vegetable filter OFF</p></div>
    }
  }

  componentDidMount() {
    this.props.loadRecipes()
}

  render() {
    const {recipes, filters, filterSauce, filterVegetable} = this.props
    if (!recipes) return 'Loading...'
    return (
      <div>
        <Test recipes={recipes} 
        filters={filters}
        filterSauce={filterSauce}
        filterVegetable={filterVegetable}
        conditionalFilterRender={this.conditionalFilterRender}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  recipes: state.recipes,
  filters: state.filters
})

export default connect(
  mapStateToProps, {
  loadRecipes, 
  filterSauce, 
  filterVegetable}
  )
  (TestContainer)