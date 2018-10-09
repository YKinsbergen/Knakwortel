import React from 'react'
import './Dashboard.css'
import { Link } from 'react-router-dom'
import { setSendDate } from '../actions/orders';

const getDate= (date) => {
    const rawDate = new Date(date)
    const strDate = rawDate.toDateString()
    return strDate
  }

export default function Order(props) {
     console.log(props)
  return (
      <div>
      <div class="pt-3 pb-2 mb-3">
        <h2>Truien</h2>
      </div>
        <div class="table-responsive">
            <table class="table table-striped table-sm">
            <thead>
                <tr>
                <th>#</th>
                <th>Besteldatum</th>
                <th>Bedrijf</th>
                <th>Naam</th>
                <th>Email</th>
                <th>Straat</th>
                <th>Huisnummer</th>
                <th>Toevoeging</th>
                <th>Postcode</th>
                <th>Plaats</th>
                <th>Maat</th>
                <th>Betaling</th>
                <th>Verzenddatum</th>
                </tr>
            </thead>
            <tbody>
            {props.orders.map(order => 
                <tr key={order.id}>
                  <td>{order.id}</td>

                  <td>{getDate(order.created)}</td>

                  <td>{order.company}</td>
                  
                  <td>{order.name}</td>

                  <td>{order.email}</td>

                  <td>{order.street}</td>

                  <td>{order.houseNumber}</td>

                  <td>{order.addition}</td>

                  <td>{order.zipcode}</td>

                  <td>{order.city}</td>

                  <td>{order.size.name}</td>

                  <td>{order.paymentSucces === true? 'betaald' : 'niet betaald'}</td>

                  <td>{order.sendDate !== null ? order.sendDate : <form><input type="date" id={order.id} onChange={props.handleChange}></input></form>}</td>

                </tr>

                )}
            </tbody>
            </table>
        </div>
      </div>

    )
}
