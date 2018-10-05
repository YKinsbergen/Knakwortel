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
        </div> 
  )
}