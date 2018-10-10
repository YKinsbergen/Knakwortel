
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
        <p className="text-muted"><small>Op de pagina wordt naast het recept een 
          YouTube-filmpje geladen (Let op! Alleen embedded video's werken, 
          bv: "https://www.youtube.com/embed/4F4RqMWScyw". 
          Klik in YouTube op 'share', kies 'embed' en plak alleen de link in het 
          invoervak). Als er geen video is, wordt een afbeelding geladen. 
          De voorgeprogrammeerde afbeelding is jullie wortelbroodje zonder toppings. 
          Die zie je als geen filmpje/afbeelding is toegevoegd. </small></p>

      </div>
      {props.addMode === true && <RecipeForm toppingCheckboxes={props.toppingCheckboxes} toppings={props.toppings} handleToppingsChange={props.handleToppingsChange}
      handleChange={props.handleChange} handleSubmit={props.handleSubmit} fileSelectHandler={props.fileSelectHandler}/>}
          <div class="table-responsive">
            <table class="table table-striped table-sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Naam</th>
                  <th>Bereiding</th>
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