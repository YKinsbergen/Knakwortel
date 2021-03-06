import * as React from 'react'

export default function RecipeForm(props) {
  // console.log(props)
  return (<div>
    <form onSubmit={props.handleSubmit}>

        <div className="form-group row">
          <label htmlFor="name" className="col-sm-2 col-form-label">Naam: (min. char 3)</label>
            <div className="col-sm-10">
              <input id="name" type="text" name="name" onChange={props.handleChange} className="form-control" />
            </div>
        </div>

        <div className="form-group row">
          <label htmlFor="description" className="col-sm-2 col-form-label">Bereiding:(min. char 10)</label>
            <div className="col-sm-10">
              <textarea id="description" type="text" name="description" onChange={props.handleChange} rows="5" className="form-control" />
            </div>
        </div>
        <div className="form-group row">
          <label htmlFor="image" className="col-sm-2 col-form-label">Afbeelding:</label>
            <div className="col-sm-10">
            <input type="file" id="image" onChange={props.fileSelectHandler}/>
            </div>
        </div>

        <div className="form-group row">
          <label htmlFor="youtubeUrl" className="col-sm-2 col-form-label">Youtube url:</label>
            <div className="col-sm-10">
              <input id="youtubeUrl" type="text" name="youtubeUrl" onChange={props.handleChange} className="form-control" />
            </div>
        </div>        

        <div className="form-group row">
          <label htmlFor="body" className="col-sm-2 col-form-label">Toppings: (min. 3)</label>
            <div className="col-sm-10">
              {Object.keys(props.toppingCheckboxes).map(toppingId => {
                return (
                  <div className="toppingChecks">
                    <label htmlFor={toppingId} className="toppingChecks">{props.toppings.find(topp => topp.id == toppingId).name}</label>
                    <input type="checkbox" id={toppingId} name={toppingId} value={props.toppingCheckboxes[toppingId]} checked={props.toppingCheckboxes[toppingId]} onChange={props.handleToppingsChange(toppingId)}/>
                  </div>
                )
                })
              }
              
            </div>
        </div>        
      

      <div className="form-group row">
        <div className="col-sm-10">
          <button type="submit" className="btn btn-primary" disabled={props.submitBtnDisabled}>Opslaan</button>
        </div>
        </div>
      </form>
      </div>)
}

