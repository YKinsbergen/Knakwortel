import * as React from 'react'
import './Slotmachine.css'

export default function Test(props) {
  const {recipes, 
    filters, 
    filterSauce, 
    filterVegetable, 
    conditionalRenderSauceFilter,
    conditionalRenderVegetableFilter,
    conditionalRenderWithSauceFilter,
    filterWithSauce
  } = props
  
  // Only get recipes that have no sauce in the toppings list
  const filterRecipesNoSauce = (recipes) => {
    return recipes.filter(recipe => {
      return (!recipe.toppings.map(topping => {
        if (topping.toppingTypes.name.includes('Vegetable') === true) return true
        return false
      }).includes(false))
    })
  }
  // Only get recipes that have sauce in the toppings list
  const filterRecipesWithSauce = (recipes) => {
    return recipes.filter(recipe => {
      return (recipe.toppings.map(topping => {
        if (topping.toppingTypes.name.includes('Vegetable') === true) return true
        return false
      }).includes(false))
    })
  }
  // Get all the topping names
  // Returns an array of arrays
  const getToppingNameArrays = (recipes) => {
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

  
  const allToppings = concatNestedArrays(
    getToppingNameArrays(recipes)
    )
  const recipesNoSauce = filterRecipesNoSauce(recipes)
    
  const recipesWithSauce = filterRecipesWithSauce(recipes)
    
  const toppingsRecipesNoSauce = concatNestedArrays(
    getToppingNameArrays(recipesNoSauce)
    )
  const toppingsRecipesWithSauce = concatNestedArrays(
    getToppingNameArrays(recipesWithSauce)
    )
  // console.log(allToppings, 
  //   toppingsRecipesNoSauce, 
  //   toppingsRecipesWithSauce)
 
  // Random number
  const rNum = (array) => {
    return Math.round( Math.random() * (array.length-1) )
  }

  // h = header, a = array, n = indexNumber, t = time
  const roulette = (h, a, n, t) => {
    return setTimeout(() => {
      h.innerHTML = a[n]
    }, t)
  }
        
  return (
    <div className="slotmachine-wrapper">
      <h1>TEST</h1>
      <h2>Slot machine v2.0</h2>

      <div className="start-wrapper">
        <button className="start-btn" 
        onClick={
          () => {
            const h1 = document.getElementById("recipe-header1")
            const h2 = document.getElementById("recipe-header2")
            const h3 = document.getElementById("recipe-header3")
            const h4 = document.getElementById("recipe-header4")
            if (filters.sauceFilter === false 
              && filters.vegetableFilter === false
              && filters.withSauceFilter === false) {
              // First header
              return roulette(h1, allToppings, 0, 0),
              roulette(h1, allToppings, 1, 100),
              roulette(h1, allToppings, 7, 200),
              roulette(h1, allToppings, 3, 400),
              roulette(h1, allToppings, 4, 600),
              roulette(h1, allToppings, 2, 850),
              roulette(h1, allToppings, 5, 1100),
              roulette(h1, allToppings, 0, 1500),
              // Second header
              roulette(h2, allToppings, 8, 100),
              roulette(h2, allToppings, 4, 150),
              roulette(h2, allToppings, 3, 200),
              roulette(h2, allToppings, 0, 300),
              roulette(h2, allToppings, 2, 500),
              roulette(h2, allToppings, 3, 700),
              roulette(h2, allToppings, 1, 850),
              roulette(h2, allToppings, 2, 1100),
              roulette(h2, allToppings, 1, 1500),
              // Third header
              roulette(h3, allToppings, 10, 80),
              roulette(h3, allToppings, 4, 150),
              roulette(h3, allToppings, 3, 200),
              roulette(h3, allToppings, 0, 300),
              roulette(h3, allToppings, 2, 520),
              roulette(h3, allToppings, 3, 600),
              roulette(h3, allToppings, 1, 800),
              roulette(h3, allToppings, 2, 1200),
              roulette(h3, allToppings, 2, 1500),
              // Fourth header
              roulette(h4, allToppings, 12, 130),
              roulette(h4, allToppings, 3, 150),
              roulette(h4, allToppings, 6, 200),
              roulette(h4, allToppings, 1, 350),
              roulette(h4, allToppings, 0, 500),
              roulette(h4, allToppings, 7, 700),
              roulette(h4, allToppings, 6, 900),
              roulette(h4, allToppings, 5, 1300),
              roulette(h4, allToppings, 3, 1500)
            }
            }}>
          Start
        </button>

      </div>

      <div className="column">
          <h4 id="recipe-header1" className="animation">1&nbsp;</h4>
      </div>
      <div className="column">
          <h4 id="recipe-header2">2&nbsp;</h4>
      </div>
      <div className="column">
          <h4 id="recipe-header3">3&nbsp;</h4>
      </div> 
      <div className="column">
          <h4 id="recipe-header4">4&nbsp;</h4>
      </div> 

      <div className="filter-wrapper">
        <button id="sauce-filter-btn" className="filter-btn" 
          onClick={() => {
            // const btn = document.getElementById("sauce-filter-btn")
            filterSauce()
            // State has a delay, so the inverse needs to be true
            // if (!filters.sauceFilter === true) return btn.innerText = 'Filter sauce on'
            // return btn.innerText = 'Filter sauce off'
            }}>Filter sauce
        </button>

        <button id="vegetable-filter-btn" className="filter-btn" 
          onClick={() => {
            // const btn = document.getElementById("vegetable-filter-btn")
            filterVegetable()
            // State has a delay, so the inverse needs to be true
            // if (!filters.vegetableFilter === true) return btn.innerText = 'Filter vegetable on'
            // return btn.innerText = 'Filter vegetable off'
            }}>Filter vegetable
        </button>

        <button id="withsauce-filter-btn" className="filter-btn" 
          onClick={() => {
            // const btn = document.getElementById("withsauce-filter-btn")
            filterWithSauce()
            // State has a delay, so the inverse needs to be true
            // if (!filters.withSauceFilter === true) return btn.innerText = 'Filter with sauce on'
            // return btn.innerText = 'Filter with sauce off'
            }}>Filter with sauce
        </button>

        {/* Render the conditional filter text */}
        {conditionalRenderSauceFilter()}
        {conditionalRenderVegetableFilter()}
        {conditionalRenderWithSauceFilter()}
      </div>
    </div>
  )
}

