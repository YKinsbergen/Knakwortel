import * as React from 'react'
import PageForm from './PageForm'


export default function BlockDetails(props) {
  if (!props.block) return 'Loading data...'

    return (
    <div>

      <h1>Hello!</h1>
        <button class="btn btn-outline-primary" onClick={props.onEdit}>Edit</button>

      {props.editMode && <PageForm handleSubmit={props.onSubmit} handleChange={props.onChange} values={props.formValues} />}
      
      
        
     

    </div>)
}








