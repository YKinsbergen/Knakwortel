import React from 'react'
import './Dashboard.css'
import { Link } from 'react-router-dom'


export default function Sidebar(props) {
  return (
  <nav class="col-md-2 d-none d-md-block bg-light sidebar">
            <div class="sidebar-sticky">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <Link to='/dashboard' class="nav-link active">
                    <span data-feather="home"></span> 
                    Dashboard <span class="sr-only">(current)</span>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to='/dashboard/content' class="nav-link" href="#">
                    <span data-feather="file"></span>
                    Content
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to='/dashboard/faq' class="nav-link" href="#">
                    <span data-feather="file"></span>
                    FAQ
                  </Link>
                </li>
                {/* <li class="nav-item">
                  <Link to='/dashboard/afbeeldingen' class="nav-link" href="#">
                    <span data-feather="shopping-cart"></span>
                    Afbeeldingen
                  </Link>
                </li> */}
                <li class="nav-item">
                  <Link to='/dashboard/shops' class="nav-link" href="#">
                    <span data-feather="shopping-cart"></span>
                    Winkels
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to='/dashboard/bestellingen' class="nav-link" href="#">
                    <span data-feather="shopping-cart"></span>
                    Bestellingen
                  </Link>
                </li>
                <li class="nav-item">                                      
                  <Link to='/dashboard/recipes' class="nav-link" href="#">
                    <span data-feather="shopping-cart"></span>
                    Recepten
                  </Link>
                </li>
                <li class="nav-item">                                      
                  <Link to='/dashboard/toppings' class="nav-link" href="#">
                    <span data-feather="shopping-cart"></span>
                    Toppings
                  </Link>
                </li>
                <li class="nav-item">                                      
                  <Link to='/dashboard/admins' class="nav-link" href="#">
                    <span data-feather="shopping-cart"></span>
                    Admins
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
  )
}