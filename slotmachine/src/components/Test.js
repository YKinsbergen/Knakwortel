import * as React from 'react'

export default function Test(props) {
  const {recipes, filterSauce, filterVegetable} = props
  
  // Only get recipes that have no sauce in the toppings list
  const filterRecipesNoSauce = (recipes) => {
    return recipes.filter(e => {
      return (!e.toppings.map(xe => {
        if (xe.toppingTypes.name.includes('Vegetable') === true) return true
        return false
      }).includes(false))
    })
  }
  // Only get recipes that have sauce in the toppings list
  const filterRecipesWithSauce = (recipes) => {
    return recipes.filter(e => {
      return (e.toppings.map(xe => {
        if (xe.toppingTypes.name.includes('Vegetable') === true) return true
        return false
      }).includes(false))
    })
  }

  console.log(filterRecipesNoSauce(recipes))
  console.log(filterRecipesWithSauce(recipes))
  
  // Get all the topping names
  // Returns an array of arrays
  const getToppingNameArrays = () => {
    return recipes
    .map(recipe => {
      return recipe.toppings
    })
    .map(array => {
      return array
      .map(topping => {
        return topping.name
      })
    })
  }

  // Function to reduce the nested array into one
  const concatNestedArrays = (array) => {
    let result = [].concat.apply([], array);
    return result
  }

  const toppingNames = getToppingNameArrays()
  console.log(concatNestedArrays(toppingNames))

  return (
    <div>
      <h1>TEST</h1>
      <h2>Recipe 1</h2>
      <b>Naam:</b> {recipes[0].name} <br />
      <b>Omschrijving:</b> {recipes[0].description}  <br />
      <b>Toppings:</b>
      <div>
        {recipes[0].toppings.map(topping => {
          return <span key={topping.id}>{topping.name} </span>
        })}
      </div>
      <h2>Slotmachine v2.0</h2>
      <button onClick={() => {
        return filterSauce()
        }}>Filter sauce
      </button>
      <button onClick={() => {
        return filterVegetable()
        }}>Filter vegetable
      </button>
    </div>
  )
}

