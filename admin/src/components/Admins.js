
import React from 'react'
import './Dashboard.css'
import { Link } from 'react-router-dom'
import AdminForm from './AdminForm'


export default function Admins(props) {
  // console.log(props.toppings)
  return (
    <div>
      <div class="pt-3 pb-2 mb-3">
        <h2>Admins</h2>
        <button onClick={props.onAdd}>Nieuwe admin</button>
        <p className="text-muted"><small>
            (minimaal 1)
          </small></p>

      </div>
      {props.addMode === true && <AdminForm
      handleChange={props.handleChange} handleSubmit={props.handleSubmit}/>}
          <div class="table-responsive">
            <table class="table table-striped table-sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>id</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {props.admins.map(admin => 
                <tr key={admin.id}>
                  <td><button onClick={() => props.deleteAdminFn(admin)}>delete</button></td>
                  <td>{admin.id}</td>
                  <td>{admin.email}</td>
                </tr>  
                )}

              </tbody>
            </table>
          </div>
        </div>
  )
}