import React from 'react'
import './Dashboard.css'
import { Link } from 'react-router-dom'



export default function Dashboard(props) {
  console.log(props.blocks.pageContents)
  return (
    <div>
      <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
      <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Knakwortel</a>
      <input class="form-control form-control-dark w-100" type="text" placeholder="Zoeken" aria-label="Search" />
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <Link to="/logout" class="nav-link">Uitloggen</Link>
        </li>
      </ul>
    </nav>

    <div class="container-fluid">
      <div class="row">
        <nav class="col-md-2 d-none d-md-block bg-light sidebar">
          <div class="sidebar-sticky">
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  <span data-feather="home"></span> 
                  Dashboard <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="file"></span>
                  Pages
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="shopping-cart"></span>
                  Images
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
          <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 class="h2">Dashboard</h1>
            <div class="btn-toolbar mb-2 mb-md-0">
              <div class="btn-group mr-2">
                <button class="btn btn-sm btn-outline-secondary">Button1</button>
                <button class="btn btn-sm btn-outline-secondary">Button2</button>
              </div>
              <button class="btn btn-sm btn-outline-secondary dropdown-toggle">
                <span data-feather="calendar"></span>
                Example
              </button>
            </div>
          </div>


          <h2>Pages</h2>
          <p className="text-muted"><small>Klik op het ID om het content-block aan te passen.</small></p>
          <div class="table-responsive">
            <table class="table table-striped table-sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Categorie</th>
                  <th>Titel</th>
                  <th>Tekst</th>
                  <th>Tags</th>
                  <th>Afbeelding</th>
                </tr>
              </thead>
              <tbody>
                {props.blocks.pageContents.map(block => 
                <tr key={block.id}>
                  <td><Link to={`/dashboard/pages/${block.id}`}>{block.id}</Link></td>
                  <td>{block.page.pageTitle.content}</td>
                  
                  {block.headline.length > 50 &&
                  <td>{block.headline.slice(0,50)+'...'}</td>}

                  {block.headline.length <= 50 &&
                  <td>{block.headline}</td>}

                  {block.body.length > 50 &&
                  <td>{block.body.slice(0,50)+'...'}</td>}

                   {block.body.length <= 50 &&
                  <td>{block.body}</td>}

                  <td>Tag</td>
                  <td><img className=" thumbnails img-thumbnail img-fluid" src={block.image.url} alt={block.image.altText}/></td>
                </tr>  
                )}

              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>

    </div>
  )
}