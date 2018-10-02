import * as React from 'react'

// All ingredients, no filter
const allIngredients = ['Gebakken uitjes', 'Augurk', 'Zuurkool', 'Komkommer', 'Paprika', 'Avocado', 'Ketchup', 'Mayonaisse', 'Curry']

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
                    const p = document.getElementById("recipe-header")
                    if (state.filterSauce === false && state.filterNoSauce === false) {
                        return p.innerHTML = (threeRandIngredients(allIngredients, rNum(allIngredients))), 
                        console.log(state)
                    }
                    else if (state.filterSauce === true && state.filterNoSauce === false) {
                        return p.innerHTML = (threeRandIngredients(filterBySauce, rNum(filterBySauce))), 
                        console.log(state)
                    }
                    else if (state.filterSauce === false && state.filterNoSauce === true) {
                        return p.innerHTML = (threeRandIngredients(filterNoSauce, rNum(filterNoSauce))), 
                        console.log(state)
                    }
                    else {
                        return p.innerHTML = 'No available recipes with those parameters'
                    }
                }
            }> Switch </button>
            <h2>Recipe:</h2>
            <h3 id="recipe-header">&nbsp;</h3>
            <p id="filter-sauce">Sauce filter: OFF{state.filterSauce}</p>
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