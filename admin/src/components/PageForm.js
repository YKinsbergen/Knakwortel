import * as React from 'react'

export default function PageForm(props) {
  console.log(props)
  return (<div>
    <form onSubmit={props.handleSubmit}>

        <div className="form-group row">
          <label htmlFor="headline" className="col-sm-2 col-form-label">Titel:</label>
            <div className="col-sm-10">
              <input id="headline" type="text" name="headline" placeholder={props.values.headline} value={props.values.headline} onChange={props.handleChange} className="form-control" />
            </div>
        </div>

        <div className="form-group row">
          <label htmlFor="body" className="col-sm-2 col-form-label">Tekst:</label>
            <div className="col-sm-10">
              <textarea id="body" type="text" name="body" value={props.values.body} onChange={props.handleChange} className="form-control" />
            </div>
        </div>
      
        {/* <div className="form-group row">
          <label htmlFor="picture-url" className="col-sm-2 col-form-label">Afbeelding URL:</label>
            <div className="col-sm-10">
              <input id="picture-url" type="url" name="pictureUrl" value={props.values.url} onChange={props.handleChange} className="form-control" />
            </div>
        </div> */}

      <div className="form-group row">
        <div className="col-sm-10">
          <button type="submit" className="btn btn-primary">Opslaan</button>
        </div>
        </div>
      </form>
      </div>)
}

