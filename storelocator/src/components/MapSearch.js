import React, { Component } from 'react';
import PropTypes from 'prop-types'
// import './MapSearch.css';

class MapSearch extends Component {
  onFindStoresClick = () => {
    this.props.onSearchPostcode("1000AA");
  }

  render() {
    return (
      <div className="form-inline search-form">
        <label className="sr-only" htmlFor="search-box">Postcode</label>
        <input type="text" id="search-box" className="search-box form-control mr-2 mb-4" placeholder="Postcode" />
        <button className="btn btn-primary mr-2 mb-4" onClick={this.onFindStoresClick}>Zoek</button>
      </div>
    );
  }
}

MapSearch.propTypes = {
  onSearchPostcode: PropTypes.func.isRequired
};

export default MapSearch;
