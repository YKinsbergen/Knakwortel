import * as React from 'react'

export default function ToppingForm(props) {
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
          <label htmlFor="name" className="col-sm-2 col-form-label">Topping type:</label>
            <div className="col-sm-10" onChange={props.handleChange} className="form-control" >
              <select name="toppingType">*
                <option value="1">Sauce</option>
                <option value="2">Vegetable</option>
              </select>
            </div>
        </div>      

      <div className="form-group row">
        <div className="col-sm-10">
          <button type="submit" className="btn btn-primary">Opslaan</button>
        </div>
        </div>
      </form>
      </div>)
}

