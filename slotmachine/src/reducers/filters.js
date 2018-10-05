// src/reducers/filters.js
import { FILTER_SAUCE, FILTER_VEGETABLE, FILTER_WITHSAUCE } from '../actions/filters'

const initialState = {
  sauceFilter: false,
  vegetableFilter: false,
  withSauceFilter: false
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
      // Only sauce
      case FILTER_SAUCE:
        return (state.sauceFilter) ?
        {...state, sauceFilter: false} 
        : {...state, sauceFilter: true,
          vegetableFilter: false, 
          withSauceFilter: false}
      // Only vegetables
      case FILTER_VEGETABLE:
        return (state.vegetableFilter) ?
        {...state, vegetableFilter: false} 
        : {...state, vegetableFilter: true,
          sauceFilter: false, 
          withSauceFilter: false}
      case FILTER_WITHSAUCE:
      // Only recipes that have sauce in them
      return (state.withSauceFilter) ?
      {...state, withSauceFilter: false} 
      : {...state, withSauceFilter: true,
        sauceFilter: false, 
        vegetableFilter: false}
    default: 
      return state
    }
  }
