
import React from 'react'
import './Dashboard.css'
import { Link } from 'react-router-dom'
import PageForm from './PageForm'



export default function Faq(props) {
  props.blocks.pageContents = props.blocks.pageContents.filter(content => content.tag === 'faq')
  return (
    <div>
      <div class="pt-3 pb-2 mb-3">
        <h2>FAQ</h2>
        <button onClick={props.onAdd}>Nieuwe FAQ</button>
          <p className="text-muted"><small>Klik op het ID om de FAQ aan te passen.</small></p>
      </div>
      {props.addMode === true && <PageForm
      handleChange={props.handleChange} handleSubmit={props.handleSubmit}/>}
          <div class="table-responsive">
            <table class="table table-striped table-sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Categorie</th>
                  <th>Titel</th>
                  <th>Tekst</th>
                  {/* <th>Tags</th> */}
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

                  {/* <td>{block.tag}</td> */}
                </tr>  
                )}

              </tbody>
            </table>
          </div>
        </div>
  )
}