
import React from 'react'
import './Dashboard.css'
import { Link } from 'react-router-dom'



export default function Recipes(props) {
  return (
    <div>
      <div class="pt-3 pb-2 mb-3">
        <h2>Recepten</h2>

      </div>
          <div class="table-responsive">
            <table class="table table-striped table-sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Naam</th>
                  <th>Omschrijving</th>
                  <th>Toppings</th>
                </tr>
              </thead>
              <tbody>
                {props.recipes.map(recipe => 
                <tr key={recipe.id}>
                  <td>link..</td>
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