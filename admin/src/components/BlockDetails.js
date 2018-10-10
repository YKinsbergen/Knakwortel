import * as React from 'react'
import PageForm from './PageForm'



export default function BlockDetails(props) {
  if (!props.block) return 'Loading data...'

    return (
      <div class="container">
        <h1 class="my-2">Details</h1>
        <p className="text-muted"><small>Hier vind je een overzicht van het blok. Klik op 'edit' om het blok aan te passen.</small></p>

        <div class="row">

          {props.block.tag !== 'faq' &&
          <div class="col-md-6">
            {props.block.image && <img class="detail-img img-fluid" src={props.block.image.url} alt=""/>}
            
            <input type="file" onChange={props.fileSelectHandler}/>
          </div>
          }
          
          <div class="col-md-6">
            {!props.editMode && 
            <div>
            <dl class="row">
              <dt class="col-sm-3">Titel</dt>
              <dd class="col-sm-9">{props.block.headline}</dd>

              <dt class="col-sm-3">Tekst</dt>
              <dd class="col-sm-9">
                <p>{props.block.body}</p>
              </dd>
            </dl>
            <button class="btn btn-outline-primary" onClick={props.onEdit}>Edit</button>
            </div>
                }
            {props.editMode && 
            <PageForm handleSubmit={props.onSubmit} handleChange={props.onChange} values={props.formValues} />}

            <dl class="row">
              <dt class="col-sm-3">Categorie</dt>
              <dd class="col-sm-9">{props.block.page.pageTitle.content}</dd>

              <dt class="col-sm-3">Tag</dt>
              <dd class="col-sm-9">
                <p>{props.block.tag}</p>
              </dd>
            </dl>
          </div>


        </div>

      
     




</div>)
}








