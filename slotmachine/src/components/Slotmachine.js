import * as React from 'react'
import './Slotmachine.css'
import { Link } from 'react-router-dom'

// sauceFilter = saus
// vegetableFilter = toppings

export default function Slotmachine(props) {
  const {recipes, 
    filters, 
    recipeId,
    renderLinkToRecipeDetails,
    dispatchRecipeId,
    filterSauce, 
    filterVegetable, 
    conditionalRenderNoFilters,
    conditionalRenderSauceFilter,
    conditionalRenderVegetableFilter,
    conditionalRenderWithSauceFilter,
    filterWithSauce
  } = props
  
  // Only get recipes that have no sauce in the toppings list
  const filterRecipesNoSauce = (recipes) => {
    return recipes.filter(recipe => {
      return (!recipe.toppings.map(topping => {
        if (topping.toppingType.name.includes('Vegetable') === true) return true
        return false
      }).includes(false))
    })
  }
  // Only get recipes that have sauce in the toppings list
  const filterRecipesWithSauce = (recipes) => {
    return recipes.filter(recipe => {
      return (recipe.toppings.map(topping => {
        if (topping.toppingType.name.includes('Vegetable') === true) return true
        return false
      }).includes(false))
    })
  }
  // Only get recipes that have random in the toppings list
  const filterRecipesRandomToppings = (recipes) => {
    return recipes.filter(recipe => {
      return (!recipe.toppings.map(topping => {
        if (topping.toppingType.name.includes('Other') === true) return true
        return false
      }).includes(false))
    })
  }

  const recipesNoSauce = filterRecipesNoSauce(recipes)
  const recipesWithSauce = filterRecipesWithSauce(recipes)
  const recipesRandomToppings = filterRecipesRandomToppings(recipes)

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
  // Get all toppings of type sauce
  const getSauceToppingArray = (recipes) => {
    return recipes
    .map(recipe => {
      return recipe.toppings
    })
    .map(array => {
      return array
      .filter(topping => {
        return (topping.toppingType.name === 'Sauce')
      })
    })
  }
  // Get all toppings of type random
  const getRandomToppingArray = (recipes) => {
    return recipes
    .map(recipe => {
      return recipe.toppings
    })
    .map(array => {
      return array
      .filter(topping => {
        return (topping.toppingType.name === 'Other')
      })
    })
  }

  // Function to reduce the nested array into one
  const concatNestedArrays = (array) => {
    let result = [].concat.apply([], array);
    return result
  }

  // Gets topping urls from flattened array of toppings
  const getToppingArrayUrls = (recipes) => {
    return recipes
    .map(recipe => {
      return recipe.toppings
    })
    .map(array => {
      return array
      .map(topping => {
        return topping.image.url
      })
    })
  }
  // Gets topping names from flattened array of toppings
  const getSauceToppingArrayNames = (toppings) => {
    return toppings.map(topping => {
      return topping.name
    })
  }
  // Gets image urls from flattened array of sauces
  const getSauceArrayUrls = (sauces) => {
    return sauces
    .map(sauce => {
      return sauce.image.url
    })
  }
  
  // Remove repeating elements from an array by creating a 'Set'
  // Sets inherently cannot have repeating values
  const removeRepeats = (array) => {
    return Array.from(new Set(array));
 }
 // Remove repeating elements from an array of objects
 const removeRepeatsObjects = (array) => {
   return array.reduce((p, element) => {
    var id = [element.id].join('|')

    if (p.temp.indexOf(id) === -1) {
      p.out.push(element);
      p.temp.push(id);
    }
    return p;

   }, { temp: [], out: [] }).out
 }
 
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
  // Same as above but requires 'a' to be an array of objects with a 'name' property
  const rouletteName = (h, a, n, t) => {
    return setTimeout(() => {
      h.innerHTML = a[n].name
    }, t)
  }
  // Same as above but gets image url
  // i = img
  const rouletteUrl = (i, a, n, t) => {
    return setTimeout(() => {
      i.src=`${a[n]}`
    }, t)
  }

  const RecipeName = (array, number) => {
    return array[number].name
  }
  const RecipeId = (array, number) => {
    return array[number].id
  }

  const RecipeToppings = (array, number) => {
    return array[number].toppings
  }

  // For an array of only topping name elements
  const getToppingName = (array, number) => {
    return array[number]
  }

  // Find recipe by id
  const findRecipeById = (array, id) => {
    return array.find(element => {
      return element.id === id
    })
}

  return (
    <div className="slotmachine-wrapper">
      {/* Render the conditional filter text */}
      {/* {conditionalRenderNoFilters()}
      {conditionalRenderSauceFilter()}
      {conditionalRenderVegetableFilter()}
      {conditionalRenderWithSauceFilter()} */}
      <h2 id="main-header">BROODJE KNAKWORTEL MET...</h2>

      <div className="filter-wrapper">
        <button id="sauce-filter-btn" className="filter-btn" 
          onClick={() => {
            if (filters.sauceFilter === false) {
              document.getElementById("sauce-filter-btn").setAttribute("style", "background-color: #F6813A; color: white")
              document.getElementById("withsauce-filter-btn").removeAttribute("style")
              filterSauce()
            }
            else {
              document.getElementById("sauce-filter-btn").removeAttribute("style")
              filterSauce()
            }
            }}>SAUS
        </button>

        <button id="vegetable-filter-btn" className="filter-btn" 
          onClick={() => {
            if (filters.vegetableFilter === false) {
              document.getElementById("vegetable-filter-btn").setAttribute("style", "background-color: #F6813A; color: white")
              document.getElementById("withsauce-filter-btn").removeAttribute("style")
              filterVegetable()
            }
            else {
              document.getElementById("vegetable-filter-btn").removeAttribute("style")
              filterVegetable()
            }
            }}>TOPPINGS
        </button>

        <button id="withsauce-filter-btn" className="filter-btn" 
          onClick={() => {
            if (filters.withSauceFilter === false) {
              document.getElementById("withsauce-filter-btn").setAttribute("style", "background-color: #F6813A; color: white")
              document.getElementById("sauce-filter-btn").removeAttribute("style")
              document.getElementById("vegetable-filter-btn").removeAttribute("style")
              filterWithSauce()
            }
            else {
              document.getElementById("withsauce-filter-btn").removeAttribute("style")
              filterWithSauce()
            }
            }}>DOE EENS GEK
        </button> <br/>
        <span id="no-filters-popup"></span>
      </div>

      <div className="start-wrapper">
        <button className="start-btn" 
        onClick={
          () => {
            // This random number is stored so that the number can be used in
            // different functions without randomizing for each call
            const randomNum = rNum(recipes)
            const rNumNoSauce = rNum(recipesNoSauce)
            const rNumWithSauce = rNum(recipesWithSauce)
            const rNumRandom = rNum(recipesRandomToppings)

            // All
            const rRecipeName = RecipeName(recipes, randomNum)
            const rRecipeId = RecipeId(recipes, randomNum)
            const rRecipeToppings = RecipeToppings(recipes, randomNum)
            const allToppings = concatNestedArrays(
              getToppingNameArrays(recipesWithSauce)
              )

            const allToppingsUrl = concatNestedArrays(
              getToppingArrayUrls(recipes)
              )

            // No sauce
            const rRecipeNoSauceName = (RecipeName(recipesNoSauce, rNumNoSauce))
            const rRecipeNoSauceId = (RecipeId(recipesNoSauce, rNumNoSauce))
            const rRecipeNoSauceToppings = RecipeToppings(recipesNoSauce, rNumNoSauce)
           
            // With sauce
            const rRecipeWithSauceName = (RecipeName(recipesWithSauce, rNumWithSauce))
            const rRecipeWithSauceId = (RecipeId(recipesWithSauce, rNumWithSauce))
            const rRecipeWithSauceToppings = RecipeToppings(recipesWithSauce, rNumWithSauce)

            // Only sauces
            const sauces = removeRepeats(
              getSauceToppingArrayNames(
                concatNestedArrays(
                  getSauceToppingArray(
                    recipesWithSauce)
                    )
                  )
                )
            const rNumSauces = rNum(sauces)
            const sauceUrls = getSauceToppingArrayNames(
              removeRepeatsObjects(
                concatNestedArrays(
                  getSauceToppingArray(
                    recipesWithSauce)
                    )
                  )
                )

            // Doe eens gek (random toppings)
            const randomToppings = getSauceToppingArrayNames(
              removeRepeatsObjects(
                concatNestedArrays(
                  getRandomToppingArray(recipes)
                  )
                )
              )
            const rNumRandomToppings = rNum(randomToppings)
            const randomToppingsUrls = getSauceArrayUrls(
              removeRepeatsObjects(
                concatNestedArrays(
                  getRandomToppingArray(recipes)
                  )
                )
              )
            const rRecipeRandomToppingName = RecipeName(recipesRandomToppings, rNumRandom)
            const rRecipeRandomToppingId = RecipeId(recipesRandomToppings, rNumRandom)
            const rRecipeRandomToppings = RecipeToppings(recipesRandomToppings, rNumRandom)
              


            // h = header, i = img
            const h1 = document.getElementById("recipe-header1")
            const h2 = document.getElementById("recipe-header2")
            const i2 = document.getElementById("recipe-img2")
            const h3 = document.getElementById("recipe-header3")
            const i3 = document.getElementById("recipe-img3")
            const h4 = document.getElementById("recipe-header4")
            const i4 = document.getElementById("recipe-img4")

            // If no filters
            if (filters.sauceFilter === false 
              && filters.vegetableFilter === false 
              && filters.withSauceFilter === false) {
                return document.getElementById("no-filters-popup").innerText = 
                'Kan geen recepten vinden met die parameters'
              }

            // No sauces filter
            if (filters.sauceFilter === false && filters.vegetableFilter === true) {
              // return rouletteName(h1, recipesNoSauce, rNum(recipesNoSauce), 0),
              // rouletteName(h1, recipesNoSauce, rNum(recipesNoSauce), 100),
              // rouletteName(h1, recipesNoSauce, rNum(recipesNoSauce), 150),
              // rouletteName(h1, recipesNoSauce, rNum(recipesNoSauce), 200),
              // rouletteName(h1, recipesNoSauce, rNum(recipesNoSauce), 300),
              // rouletteName(h1, recipesNoSauce, rNum(recipesNoSauce), 400),
              // rouletteName(h1, recipesNoSauce, rNum(recipesNoSauce), 500),
              // rouletteName(h1, recipesNoSauce, rNum(recipesNoSauce), 700),
              // rouletteName(h1, recipesNoSauce, rNum(recipesNoSauce), 1000),
              // setTimeout(() => {
              //   dispatchRecipeId(rRecipeNoSauceId)
              //   return h1.innerHTML = rRecipeNoSauceName
              // }, 1500),
              // Second header
              return document.getElementById("no-filters-popup").innerText = null,
              roulette(h2, allToppings, 4, 150),
              rouletteUrl(i2, allToppingsUrl, 4, 150),
              roulette(h2, allToppings, 3, 200),
              rouletteUrl(i2, allToppingsUrl, 3, 200),
              roulette(h2, allToppings, 0, 300),
              rouletteUrl(i2, allToppingsUrl, 0, 300),
              roulette(h2, allToppings, 2, 500),
              rouletteUrl(i2, allToppingsUrl, 2, 500),
              roulette(h2, allToppings, 3, 700),
              rouletteUrl(i2, allToppingsUrl, 3, 700),
              roulette(h2, allToppings, 1, 850),
              rouletteUrl(i2, allToppingsUrl, 1, 850),
              roulette(h2, allToppings, 2, 1100),
              rouletteUrl(i2, allToppingsUrl, 2, 1100),
              setTimeout(() => {
                return dispatchRecipeId(rRecipeNoSauceId),
                h2.innerHTML = rRecipeNoSauceToppings[0].name,
                i2.src=`${rRecipeNoSauceToppings[0].image.url}`
              }, 1500),
              // Third header
              roulette(h3, allToppings, 10, 80),
              rouletteUrl(i3, allToppingsUrl, 10, 80),
              roulette(h3, allToppings, 5, 150),
              rouletteUrl(i3, allToppingsUrl, 5, 150),
              roulette(h3, allToppings, 1, 200),
              rouletteUrl(i3, allToppingsUrl, 1, 200),
              roulette(h3, allToppings, 5, 300),
              rouletteUrl(i3, allToppingsUrl, 5, 300),
              roulette(h3, allToppings, 2, 520),
              rouletteUrl(i3, allToppingsUrl, 2, 520),
              roulette(h3, allToppings, 4, 600),
              rouletteUrl(i3, allToppingsUrl, 4, 600),
              roulette(h3, allToppings, 9, 800),
              rouletteUrl(i3, allToppingsUrl, 9, 800),
              roulette(h3, allToppings, 10, 1200),
              rouletteUrl(i3, allToppingsUrl, 10, 1200),
              setTimeout(() => {
                return h3.innerHTML = rRecipeNoSauceToppings[1].name,
                i3.src=`${rRecipeNoSauceToppings[1].image.url}`
              }, 1500),
              // Fourth header
              roulette(h4, allToppings, 12, 130),
              rouletteUrl(i4, allToppingsUrl, 12, 130),
              roulette(h4, allToppings, 3, 150),
              rouletteUrl(i4, allToppingsUrl, 3, 150),
              roulette(h4, allToppings, 6, 200),
              rouletteUrl(i4, allToppingsUrl, 6, 200),
              roulette(h4, allToppings, 1, 350),
              rouletteUrl(i4, allToppingsUrl, 1, 350),
              roulette(h4, allToppings, 0, 500),
              rouletteUrl(i4, allToppingsUrl, 0, 500),
              roulette(h4, allToppings, 7, 700),
              rouletteUrl(i4, allToppingsUrl, 7, 700),
              roulette(h4, allToppings, 6, 900),
              rouletteUrl(i4, allToppingsUrl, 6, 900),
              roulette(h4, allToppings, 5, 1300),
              rouletteUrl(i4, allToppingsUrl, 5, 1300),
              setTimeout(() => {
                return h4.innerHTML = rRecipeNoSauceToppings[2].name,
                i4.src=`${rRecipeNoSauceToppings[2].image.url}`
              }, 1500)
            }

            // Only with sauce
            if (filters.sauceFilter === true && filters.vegetableFilter === true) {
              // return rouletteName(h1, recipesWithSauce, rNum(recipesWithSauce), 0),
              // rouletteName(h1, recipesWithSauce, rNum(recipesWithSauce), 100),
              // rouletteName(h1, recipesWithSauce, rNum(recipesWithSauce), 150),
              // rouletteName(h1, recipesWithSauce, rNum(recipesWithSauce), 200),
              // rouletteName(h1, recipesWithSauce, rNum(recipesWithSauce), 300),
              // rouletteName(h1, recipesWithSauce, rNum(recipesWithSauce), 400),
              // rouletteName(h1, recipesWithSauce, rNum(recipesWithSauce), 500),
              // rouletteName(h1, recipesWithSauce, rNum(recipesWithSauce), 700),
              // rouletteName(h1, recipesWithSauce, rNum(recipesWithSauce), 1000),
              // setTimeout(() => {
              //   dispatchRecipeId(rRecipeWithSauceId)
              //   return h1.innerHTML = rRecipeWithSauceName
              // }, 1500),
              // Second header
              return document.getElementById("no-filters-popup").innerText = null,
              roulette(h2, allToppings, 8, 150),
              rouletteUrl(i2, allToppingsUrl, 8, 150),
              roulette(h2, allToppings, 1, 200),
              rouletteUrl(i2, allToppingsUrl, 1, 200),
              roulette(h2, allToppings, 5, 300),
              rouletteUrl(i2, allToppingsUrl, 5, 300),
              roulette(h2, allToppings, 1, 500),
              rouletteUrl(i2, allToppingsUrl, 1, 500),
              roulette(h2, allToppings, 9, 700),
              rouletteUrl(i2, allToppingsUrl, 9, 700),
              roulette(h2, allToppings, 2, 850),
              rouletteUrl(i2, allToppingsUrl, 2, 850),
              roulette(h2, allToppings, 3, 1100),
              rouletteUrl(i2, allToppingsUrl, 3, 1100),
              setTimeout(() => {
                return dispatchRecipeId(rRecipeWithSauceId),
                h2.innerHTML = rRecipeWithSauceToppings[0].name,
                i2.src=`${rRecipeWithSauceToppings[0].image.url}`
              }, 1500),
              // Third header
              roulette(h3, allToppings, 10, 80),
              rouletteUrl(i3, allToppingsUrl, 10, 80),
              roulette(h3, allToppings, 5, 150),
              rouletteUrl(i3, allToppingsUrl, 5, 150),
              roulette(h3, allToppings, 1, 200),
              rouletteUrl(i3, allToppingsUrl, 1, 200),
              roulette(h3, allToppings, 5, 300),
              rouletteUrl(i3, allToppingsUrl, 5, 300),
              roulette(h3, allToppings, 2, 520),
              rouletteUrl(i3, allToppingsUrl, 2, 520),
              roulette(h3, allToppings, 4, 600),
              rouletteUrl(i3, allToppingsUrl, 4, 600),
              roulette(h3, allToppings, 9, 800),
              rouletteUrl(i3, allToppingsUrl, 9, 800),
              roulette(h3, allToppings, 10, 1200),
              rouletteUrl(i3, allToppingsUrl, 10, 1200),
              setTimeout(() => {
                return h3.innerHTML = rRecipeWithSauceToppings[1].name,
                i3.src=`${rRecipeWithSauceToppings[1].image.url}`
              }, 1500),
              // Fourth header
              roulette(h4, allToppings, 12, 130),
              rouletteUrl(i4, allToppingsUrl, 12, 130),
              roulette(h4, allToppings, 3, 150),
              rouletteUrl(i4, allToppingsUrl, 3, 150),
              roulette(h4, allToppings, 6, 200),
              rouletteUrl(i4, allToppingsUrl, 6, 200),
              roulette(h4, allToppings, 1, 350),
              rouletteUrl(i4, allToppingsUrl, 1, 350),
              roulette(h4, allToppings, 0, 500),
              rouletteUrl(i4, allToppingsUrl, 0, 500),
              roulette(h4, allToppings, 7, 700),
              rouletteUrl(i4, allToppingsUrl, 7, 700),
              roulette(h4, allToppings, 6, 900),
              rouletteUrl(i4, allToppingsUrl, 6, 900),
              roulette(h4, allToppings, 5, 1300),
              rouletteUrl(i4, allToppingsUrl, 5, 1300),
              setTimeout(() => {
                return h4.innerHTML = rRecipeWithSauceToppings[2].name,
                i4.src=`${rRecipeWithSauceToppings[2].image.url}`
              }, 1500)
            }

            // Only sauces
            else if (filters.sauceFilter === true && filters.vegetableFilter === false) {
              // First header
              // return h1.innerHTML = 'Sauces',
              // Second header
              return document.getElementById("no-filters-popup").innerText = null,
              roulette(h2, sauces, 0, 100),
              rouletteUrl(i2, sauceUrls, 0, 100),
              roulette(h2, sauces, 1, 150),
              rouletteUrl(i2, sauceUrls, 1, 150),
              roulette(h2, sauces, 2, 200),
              rouletteUrl(i2, sauceUrls, 2, 200),
              roulette(h2, sauces, 0, 300),
              rouletteUrl(i2, sauceUrls, 0, 300),
              roulette(h2, sauces, 1, 500),
              rouletteUrl(i2, sauceUrls, 1, 500),
              roulette(h2, sauces, 2, 700),
              rouletteUrl(i2, sauceUrls, 2, 700),
              roulette(h2, sauces, 0, 850),
              rouletteUrl(i2, sauceUrls, 0, 850),
              roulette(h2, sauces, 1, 1100),
              rouletteUrl(i2, sauceUrls, 1, 1100),
              // Third header
              roulette(h3, sauces, 1, 100),
              rouletteUrl(i3, sauceUrls, 1, 100),
              roulette(h3, sauces, 2, 150),
              rouletteUrl(i3, sauceUrls, 2, 150),
              roulette(h3, sauces, 1, 200),
              rouletteUrl(i3, sauceUrls, 1, 200),
              roulette(h3, sauces, 2, 300),
              rouletteUrl(i3, sauceUrls, 2, 300),
              roulette(h3, sauces, 0, 500),
              rouletteUrl(i3, sauceUrls, 0, 500),
              roulette(h3, sauces, 2, 700),
              rouletteUrl(i3, sauceUrls, 2, 700),
              roulette(h3, sauces, 1, 850),
              rouletteUrl(i3, sauceUrls, 1, 850),
              roulette(h3, sauces, 2, 1100),
              rouletteUrl(i3, sauceUrls, 2, 1100),
              // Fourth header
              roulette(h4, sauces, 1, 100),
              rouletteUrl(i4, sauceUrls, 1, 100),
              roulette(h4, sauces, 0, 150),
              rouletteUrl(i4, sauceUrls, 0, 150),
              roulette(h4, sauces, 2, 200),
              rouletteUrl(i4, sauceUrls, 2, 200),
              roulette(h4, sauces, 1, 300),
              rouletteUrl(i4, sauceUrls, 1, 300),
              roulette(h4, sauces, 0, 500),
              rouletteUrl(i4, sauceUrls, 0, 500),
              roulette(h4, sauces, 2, 700),
              rouletteUrl(i4, sauceUrls, 2, 700),
              roulette(h4, sauces, 0, 850),
              rouletteUrl(i4, sauceUrls, 0, 850),
              roulette(h4, sauces, 1, 1100),
              rouletteUrl(i4, sauceUrls, 1, 1100),
              setTimeout(() => {
                if (rNumSauces === 0) {
                return h2.innerHTML = getToppingName(sauces, rNumSauces),
                i2.src=`${sauceUrls[rNumSauces]}`,
                h3.innerHTML = getToppingName(sauces, rNumSauces+1),
                i3.src=`${sauceUrls[rNumSauces+1]}`,
                h4.innerHTML = getToppingName(sauces, rNumSauces+2),
                i4.src=`${sauceUrls[rNumSauces+2]}`
                }
                else if (rNumSauces === 1) {
                  return h2.innerHTML = getToppingName(sauces, rNumSauces-1),
                  i2.src=`${sauceUrls[rNumSauces-1]}`,
                  h3.innerHTML = getToppingName(sauces, rNumSauces),
                  i3.src=`${sauceUrls[rNumSauces]}`,
                  h4.innerHTML = getToppingName(sauces, rNumSauces+1),
                  i4.src=`${sauceUrls[rNumSauces+1]}`
                }
                else if (rNumSauces === 2) {
                  return h2.innerHTML = getToppingName(sauces, rNumSauces-1), 
                  i2.src=`${sauceUrls[rNumSauces-1]}`,
                  h3.innerHTML = getToppingName(sauces, rNumSauces),
                  i3.src=`${sauceUrls[rNumSauces]}`,
                  h4.innerHTML = getToppingName(sauces, rNumSauces-2),
                  i4.src=`${sauceUrls[rNumSauces-2]}`
                }
              }, 1500)
            }

            else if (filters.withSauceFilter === true) {
              return document.getElementById("no-filters-popup").innerText = null,
              // Second header
              roulette(h2, randomToppings, 0, 100),
              rouletteUrl(i2, randomToppingsUrls, 0, 100),
              roulette(h2, randomToppings, 2, 200),
              rouletteUrl(i2, randomToppingsUrls, 2, 200),
              roulette(h2, randomToppings, 1, 300),
              rouletteUrl(i2, randomToppingsUrls, 1, 300),
              roulette(h2, randomToppings, 3, 500),
              rouletteUrl(i2, randomToppingsUrls, 3, 500),
              roulette(h2, randomToppings, 1, 800),
              rouletteUrl(i2, randomToppingsUrls, 1, 800),
              roulette(h2, randomToppings, 2, 1100),
              rouletteUrl(i2, randomToppingsUrls, 2, 1100),
              setTimeout(() => {
                return dispatchRecipeId(rRecipeRandomToppingId),
                h2.innerHTML = rRecipeRandomToppings[0].name,
                i2.src=`${rRecipeRandomToppings[0].image.url}`
              }, 1500),
              // Third header
              roulette(h3, randomToppings, 3, 130),
              rouletteUrl(i3, randomToppingsUrls, 3, 130),
              roulette(h3, randomToppings, 1, 230),
              rouletteUrl(i3, randomToppingsUrls, 1, 230),
              roulette(h3, randomToppings, 3, 330),
              rouletteUrl(i3, randomToppingsUrls, 3, 330),
              roulette(h3, randomToppings, 2, 530),
              rouletteUrl(i3, randomToppingsUrls, 2, 530),
              roulette(h3, randomToppings, 4, 950),
              rouletteUrl(i3, randomToppingsUrls, 4, 950),
              setTimeout(() => {
                return h3.innerHTML = rRecipeRandomToppings[1].name,
                i3.src=`${rRecipeRandomToppings[1].image.url}`
              }, 1500),
              // Fourth header
              roulette(h4, randomToppings, 1, 100),
              rouletteUrl(i4, randomToppingsUrls, 1, 100),
              roulette(h4, randomToppings, 3, 150),
              rouletteUrl(i4, randomToppingsUrls, 3, 150),
              roulette(h4, randomToppings, 1, 400),
              rouletteUrl(i4, randomToppingsUrls, 1, 400),
              roulette(h4, randomToppings, 0, 700),
              rouletteUrl(i4, randomToppingsUrls, 0, 530),
              roulette(h4, randomToppings, 1, 1200),
              rouletteUrl(i4, randomToppingsUrls, 1, 1200),
              setTimeout(() => {
                return h4.innerHTML = rRecipeRandomToppings[2].name,
                i4.src=`${rRecipeRandomToppings[2].image.url}`
              }, 1500)
            }
            }}>
          SPIN
        </button>
      </div>


      {/* <div className="column-name">
          <h4 id="recipe-header1" className="animation">Recept</h4>
      </div> */}

      <div className="column">
          <img className="slot-img" src="https://res.cloudinary.com/dcannkqr7/image/upload/v1538989137/sla.png" id="recipe-img2"/>
          <h4 id="recipe-header2">sla</h4>
      </div>
      <div className="column">
          <img className="slot-img" src="https://res.cloudinary.com/dcannkqr7/image/upload/v1538989137/augurk.png" id="recipe-img3"/>
          <h4 id="recipe-header3">augurk</h4>
      </div> 
      <div className="column">
          <img className="slot-img" src="https://res.cloudinary.com/dcannkqr7/image/upload/v1538989137/ketchup.png" id="recipe-img4"/>
          <h4 id="recipe-header4">ketchup</h4>
      </div> 

      {renderLinkToRecipeDetails()}
    </div>
  )
}

