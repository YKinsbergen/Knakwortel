
import React from 'react'
import './Dashboard.css'
import { Link } from 'react-router-dom'
import RecipeForm from './RecipeForm'



export default function Recipes(props) {
  // console.log(props.toppings)
  return (
    <div>
      <div class="pt-3 pb-2 mb-3">
        <h2>Recepten</h2>
        <button onClick={props.onAdd}>Nieuw recept</button>

      </div>
      {props.addMode === true && <RecipeForm toppingCheckboxes={props.toppingCheckboxes} toppings={props.toppings} handleToppingsChange={props.handleToppingsChange}
      handleChange={props.handleChange} handleSubmit={props.handleSubmit} fileSelectHandler={props.fileSelectHandler} submitBtnDisabled={props.submitBtnDisabled}/>}
          <div class="table-responsive">
            <table class="table table-striped table-sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>id</th>
                  <th>Naam</th>
                  <th>Bereiding</th>
                  <th>Toppings</th>
                </tr>
              </thead>
              <tbody>
                {props.recipes.map(recipe => 
                <tr key={recipe.id}>
                  <td><button onClick={() => props.deleteRecipe(recipe.id)}>delete</button></td>
                  <td>{recipe.id}</td>
                  <td>{recipe.name}</td>
                  
                  <td>{recipe.description}</td>

                  <td>{recipe.toppings.map(topp => 
                    `${topp.name}, `
                  )}</td>
                </tr>  
                )}

              </tbody>
            </table>
          </div>
        </div>
  )
}