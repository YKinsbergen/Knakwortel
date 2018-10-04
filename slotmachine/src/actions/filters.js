// src/actions/filters.js
export const FILTER_SAUCE = 'FILTER_SAUCE'
export const FILTER_VEGETABLE = 'FILTER_VEGETABLE'
export const FILTER_WITHSAUCE = 'FILTER_WITHSAUCE'

export const filterSauce = () => ({
    type: FILTER_SAUCE,
    payload: null
})

export const filterVegetable = () => ({
    type: FILTER_VEGETABLE,
    payload: null
})

export const filterWithSauce = () => ({
    type: FILTER_WITHSAUCE,
    payload: null
})