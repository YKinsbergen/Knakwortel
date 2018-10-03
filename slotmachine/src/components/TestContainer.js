import * as React from 'react'
import { connect } from 'react-redux'
import { loadRecipes } from '../actions/recipes'
import { filterSauce, filterVegetable } from '../actions/filters'
import Test from './Test'

class TestContainer extends React.Component {
  componentDidMount() {
    this.props.loadRecipes()
    console.log('component did mount')
}

  render() {
    const {recipes, filterSauce, filterVegetable} = this.props
    if (!recipes) return 'Loading...'
    return (
      <div>
        <Test filterSauce={filterSauce}
        recipes={recipes} 
        filterVegetable={filterVegetable}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  recipes: state.recipes
})

export default connect(
  mapStateToProps, {
  loadRecipes, 
  filterSauce, 
  filterVegetable}
  )
  (TestContainer)