import * as React from 'react'

export default function TicketForm(props) {
  return (<div>
  <h1> Create new ticket</h1>
    <form onSubmit={props.handleSubmit}>
        <div className="form-group row">
          <label htmlFor="price" className="col-sm-2 col-form-label">Price:</label>
            <div className="col-sm-10">
              <input id="price" type="number" name="price" value={props.values.price} onChange={props.handleChange} className="form-control" />
            </div>
        </div>

        <div className="form-group row">
          <label htmlFor="description" className="col-sm-2 col-form-label">Description:</label>
            <div className="col-sm-10">
              <textarea id="description" type="text" name="description" value={props.values.description} onChange={props.handleChange} className="form-control" />
            </div>
        </div>
      
        <div className="form-group row">
          <label htmlFor="picture-url" className="col-sm-2 col-form-label">Picture URL (optional):</label>
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

