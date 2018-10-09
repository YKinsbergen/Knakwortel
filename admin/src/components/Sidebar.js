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
                  <Link to='/dashboard/afbeeldingen' class="nav-link" href="#">
                    <span data-feather="shopping-cart"></span>
                    Afbeeldingen
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to='/dashboard/shops' class="nav-link" href="#">
                    <span data-feather="shopping-cart"></span>
                    Shops
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to='/dashboard/recipes' class="nav-link" href="#">
                    <span data-feather="shopping-cart"></span>
                    Recipes
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
  )
}