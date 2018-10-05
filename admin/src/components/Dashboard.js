import React from 'react'
import './Dashboard.css'
import { Link } from 'react-router-dom'



export default function Dashboard(props) {
  console.log(props.blocks.pageContents)
  return (
        <div>
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


          <h2>Content</h2>
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
                  <td><Link to={`/dashboard/content/${block.id}`}>{block.id}</Link></td>
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
      </div>

    
  )
}