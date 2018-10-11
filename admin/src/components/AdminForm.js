import * as React from 'react'

export default function AdminForm(props) {
  // console.log(props)
  return (<div>
    <form onSubmit={props.handleSubmit}>

        <div className="form-group row">
          <label htmlFor="email" className="col-sm-2 col-form-label">Email:</label>
            <div className="col-sm-10">
              <input id="email" type="text" name="email" onChange={props.handleChange} className="form-control" />
            </div>
        </div>

        <div className="form-group row">
          <label htmlFor="password" className="col-sm-2 col-form-label">Password:</label>
            <div className="col-sm-10">
              <input id="password" type="text" name="password" onChange={props.handleChange} className="form-control" />
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

