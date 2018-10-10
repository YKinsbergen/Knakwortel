import React, { Component } from 'react';
import PropTypes from 'prop-types'
// import './MapSearch.css';

class MapSearch extends Component {
  state = {
    postcode: '',
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    if (event.target.postcode.value)
    this.setState({
        postcode: ''
    })
    this.onFindStoresClick(this.state.postcode)
  }

  onFindStoresClick = (event) => {
    this.setState({
      postcode: event
    })
    this.props.loadStoresByPostcode(event)
  }

  render() {
    return (
      <div className="form-inline search-form">
        <form onSubmit={this.onSubmit}>
            <label>
              <input type="text" 
              id="search-box"
              className="search-box form-control mr-2 mb-4"
              placeholder="Postcode" 
              value={this.state.postcode} 
              name="postcode" 
              onChange={this.onChange} 
              />
            </label>
            <input className="btn btn-primary mr-2 mb-4" type="submit" value="Zoek" id="submit-button"/>
          </form>
      </div>
    );
  }
}

MapSearch.propTypes = {
  onSearchPostcode: PropTypes.func.isRequired
};

export default MapSearch;
