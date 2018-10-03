import * as React from 'react'

// All ingredients, no filter
const allIngredients = [
    'Gebakken uitjes', 
    'Augurk', 
    'Zuurkool', 
    'Komkommer', 
    'Paprika', 
    'Avocado', 
    'Ketchup', 
    'Mayonaisse', 
    'Curry', 
    'Bacon', 
    'Zeewier'
]

// Choose by sauce
const filterBySauce = allIngredients.filter(ingredient => {
        return (ingredient === 'Ketchup' || ingredient === 'Mayonaisse' || ingredient === 'Curry')
    })

// Choose by !sauce
const filterNoSauce = allIngredients.filter(ingredient => {
    return (ingredient !== 'Ketchup' && ingredient !== 'Mayonaisse' && ingredient !== 'Curry')
})

// Random number
const rNum = (array) => {
    return Math.round( Math.random() * (array.length-1) )
}

// Single random ingredient
const rIngredient = (ingredientsArray, index) => {
    return ingredientsArray[index]
}

// Three random ingredients, no duplicates
const threeRandIngredients = (ingredientsArray, index) => {
    if (index === 0) {
        return [ingredientsArray[index], ingredientsArray[index+1], ingredientsArray[index+2]]
    }
    if (index === ingredientsArray.length-1) {
        return [ingredientsArray[index], ingredientsArray[index-1], ingredientsArray[index-2]]
    }
    else {
        return [ingredientsArray[index], ingredientsArray[index-1], ingredientsArray[index+1]]
    }
}

export default function Slotmachine(props) {
    const { state, setFilterSauce, setFilterNoSauce } = props
    return (
        <div>
            <h1>Knakwortel slotmachine</h1>
            <button onClick={
                () => {
                    const h1 = document.getElementById("recipe-header1")
                    const h2 = document.getElementById("recipe-header2")
                    const h3 = document.getElementById("recipe-header3")
                    const randomAllIngredients = (threeRandIngredients(allIngredients, rNum(allIngredients)))
                    const randomSauce = (threeRandIngredients(filterBySauce, rNum(filterBySauce)))
                    const randomNoSauce = (threeRandIngredients(filterNoSauce, rNum(filterNoSauce)))
                    if (state.filterSauce === false && state.filterNoSauce === false) {
                        // First header roulette
                        return setTimeout(() => {h1.innerHTML = allIngredients[0]}, 0),
                        setTimeout(() => {h1.innerHTML = allIngredients[1]}, 100),
                        setTimeout(() => {h1.innerHTML = allIngredients[3]}, 400),
                        setTimeout(() => {h1.innerHTML = allIngredients[4]}, 600),
                        setTimeout(() => {h1.innerHTML = allIngredients[2]}, 850),
                        setTimeout(() => {h1.innerHTML = allIngredients[5]}, 1100),
                        setTimeout(() => {h1.innerHTML = randomAllIngredients[0]}, 1500),
                        // Second header roulette
                        setTimeout(() => {h2.innerHTML = allIngredients[4]}, 150),
                        setTimeout(() => {h2.innerHTML = allIngredients[3]}, 200),
                        setTimeout(() => {h2.innerHTML = allIngredients[0]}, 300),
                        setTimeout(() => {h2.innerHTML = allIngredients[2]}, 500),
                        setTimeout(() => {h2.innerHTML = allIngredients[3]}, 700),
                        setTimeout(() => {h2.innerHTML = allIngredients[1]}, 850),
                        setTimeout(() => {h2.innerHTML = allIngredients[2]}, 1100),
                        setTimeout(() => {h2.innerHTML = randomAllIngredients[1]}, 1500),
                        // Third header roulette
                        setTimeout(() => {h3.innerHTML = allIngredients[5]}, 0),
                        setTimeout(() => {h3.innerHTML = allIngredients[3]}, 100),
                        setTimeout(() => {h3.innerHTML = allIngredients[2]}, 200),
                        setTimeout(() => {h3.innerHTML = allIngredients[1]}, 400),
                        setTimeout(() => {h3.innerHTML = allIngredients[2]}, 600),
                        setTimeout(() => {h3.innerHTML = allIngredients[4]}, 850),
                        setTimeout(() => {h3.innerHTML = allIngredients[0]}, 1100),
                        setTimeout(() => {h3.innerHTML = randomAllIngredients[2]}, 1500)
                    }
                    else if (state.filterSauce === true && state.filterNoSauce === false) {
                        return setTimeout(() => {h1.innerHTML = randomSauce[0]}, 0),
                        setTimeout(() => {h2.innerHTML = randomSauce[1]}, 300),
                        setTimeout(() => {h3.innerHTML = randomSauce[2]}, 600)
                    }
                    else if (state.filterSauce === false && state.filterNoSauce === true) {
                        return setTimeout(() => {h1.innerHTML = randomNoSauce[0]}, 0),
                        setTimeout(() => {h2.innerHTML = randomNoSauce[1]}, 300),
                        setTimeout(() => {h3.innerHTML = randomNoSauce[2]}, 600)
                    }
                    else {
                        return h1.innerHTML = 'No available recipes with those parameters',
                        h2.innerHTML = '',
                        h3.innerHTML = ''
                    }
                }
            }> Switch </button>
            <h2>Recipe:</h2>
            <div class="column">
                <h3 id="recipe-header1" className="animation">&nbsp;</h3>
            </div>
            <div class="column">
                <h3 id="recipe-header2">&nbsp;</h3>
            </div>
            <div class="column">
                <h3 id="recipe-header3">&nbsp;</h3>
            </div> 
            {/* Space break */}
            <p></p>&nbsp;<br />
            <p id="filter-sauce">Sauce filter: OFF{state.filterSauce}</p> <br/>
            <p id="filter-no-sauce">No sauce filter: OFF{state.filterNoSauce}</p>


            <button onClick={
                () => {
                    if (state.filterSauce === false) {
                        document.getElementById("filter-sauce").innerHTML = 'Sauce filter: ON'
                    }
                    else {
                        document.getElementById("filter-sauce").innerHTML = 'Sauce filter: OFF'
                    }
                    return setFilterSauce()
                }

            }>Only sauces</button>
            <button onClick={
                () => {
                    if (state.filterNoSauce === false) {
                        document.getElementById("filter-no-sauce").innerHTML = 'No sauce filter: ON'
                    }
                    else {
                        document.getElementById("filter-no-sauce").innerHTML = 'No sauce filter: OFF'
                    }
                    return setFilterNoSauce()
                }
            }>No sauces</button>

        </div>
    )
}


