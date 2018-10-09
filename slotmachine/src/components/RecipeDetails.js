import * as React from 'react'
import { Link } from 'react-router-dom'
import './RecipeDetails.css'

export default function RecipeDetails(props) {
  const {recipe} = props
  return (
    <div>
      <button id="go-back-btn">
        <Link to="/" id="go-back-link">Ga terug</Link>
      </button>
      <h2>{recipe.name}</h2>
      <h3><i>{recipe.description}</i></h3>
      <ul>
        {recipe.toppings.map(topping => {
          return <li key={topping.id}>{topping.name}</li>
        })
        }
      </ul>

    </div>
  )
}