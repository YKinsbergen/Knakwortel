
import React from 'react'
import './Dashboard.css'
import { Link } from 'react-router-dom'
import ToppingForm from './ToppingForm'



export default function Toppings(props) {
  // console.log(props.toppings)
  return (
    <div>
      <div class="pt-3 pb-2 mb-3">
        <h2>Toppings</h2>
        <button onClick={props.onAdd}>Nieuwe topping</button>

      </div>
      {props.addMode === true && <ToppingForm
      handleChange={props.handleChange} handleSubmit={props.handleSubmit} fileSelectHandler={props.fileSelectHandler} toppingTypes={props.toppingTypes}submitBtnDisabled={props.submitBtnDisabled}/>}
          <div class="table-responsive">
            <table class="table table-striped table-sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Naam</th>
                  <th>Type</th>
                  <th>Afbeelding</th>
                </tr>
              </thead>
              <tbody>
                {props.toppings.map(topping => 
                <tr key={topping.id}>
                  <td>link..</td>
                  <td>{topping.name}</td>
                  
                  <td>{topping.toppingType.name}</td>

                  <td>{topping.image && <img className=" thumbnails img-thumbnail img-fluid" src={topping.image.url} alt={topping.image.altText}/>}</td>
                </tr>  
                )}

              </tbody>
            </table>
          </div>
        </div>
  )
}