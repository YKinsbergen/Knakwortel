import React from 'react'
import './Dashboard.css'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <div>
      <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <Link to ='/dashboard' class="navbar-brand col-sm-3 col-md-2 mr-0">Knakwortel</Link>
        <input class="form-control form-control-dark w-100" type="text" placeholder="Zoeken" aria-label="Search" />
        <ul class="navbar-nav px-3">
          <li class="nav-item text-nowrap">
            <Link to="/logout" class="nav-link">Uitloggen</Link>
          </li>
        </ul>
      </nav>
    </div>
    )
  }
