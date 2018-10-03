import * as React from 'react'

export default function Test(props) {
  const {recipes} = props
  return (
    <div>
      <h1>TEST</h1>
      <h2>Recipe 1</h2>
      <b>Naam:</b> {recipes[0].name} <br />
      <b>Omschrijving:</b> {recipes[0].description}  <br />
      <b>Toppings:</b>
      <ul>
        {recipes[0].toppings.map(topping => {
          return <li key={topping.id}>{topping.name}</li>
        })}
      </ul>
    </div>
  )
}