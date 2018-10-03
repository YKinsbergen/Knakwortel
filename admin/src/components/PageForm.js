import * as React from 'react'

export default function PageForm(props) {
  return (<div>
  <h1> Create new event</h1>
    <form onSubmit={props.handleSubmit}>
        <div className="form-group row">
          <label htmlFor="name" className="col-sm-2 col-form-label">Name:</label>
            <div className="col-sm-10">
              <input id="name" type="text" name="name" value={props.values.name} onChange={props.handleChange} className="form-control" />
            </div>
        </div>

        <div className="form-group row">
          <label htmlFor="description" className="col-sm-2 col-form-label">Description:</label>
            <div className="col-sm-10">
              <textarea id="description" type="text" name="description" value={props.values.description} onChange={props.handleChange} className="form-control" />
            </div>
        </div>

        <div className="form-group row">
          <label htmlFor="start-date" className="col-sm-2 col-form-label">Start date:</label>
            <div className="col-sm-10">
              <input id="start-date" type="date" name="startDate" value={props.values.startDate} onChange={props.handleChange} className="form-control" />
            </div>
        </div>

      <div className="form-group row">
          <label htmlFor="end-date" className="col-sm-2 col-form-label">End date:</label>
            <div className="col-sm-10">
              <input id="end-date" type="date" name="endDate" value={props.values.endDate} onChange={props.handleChange} className="form-control" />
            </div>
        </div>
      
        <div className="form-group row">
          <label htmlFor="picture-url" className="col-sm-2 col-form-label">Picture URL:</label>
            <div className="col-sm-10">
              <input id="picture-url" type="url" name="pictureUrl" value={props.values.pictureUrl} onChange={props.handleChange} className="form-control" />
            </div>
        </div>

      <div className="form-group row">
        <div className="col-sm-10">
          <button type="submit" className="btn btn-primary">Save</button>
        </div>
        </div>
      </form>
      </div>)
}

