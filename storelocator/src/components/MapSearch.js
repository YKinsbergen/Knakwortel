import React, { Component } from 'react';
import PropTypes from 'prop-types'
// import './MapSearch.css';

class MapSearch extends Component {
  handleChange = event => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });

    console.log(this.state)
  };

  onFindStoresClick = () => {
    this.props.onSearchPostcode("1000AA");
  }

  render() {
    return (
      <div className="form-inline search-form">
        <label className="sr-only" htmlFor="search-box">Postcode</label>
        <input type="text" name="postcode" onChange={this.handleChange} id="search-box" maxLength="6" className="search-box form-control mr-2 mb-4" placeholder="Postcode" />
        <button className="btn btn-primary mr-2 mb-4" onClick={this.onFindStoresClick}>Zoek</button>
      </div>
    );
  }
}

MapSearch.propTypes = {
  onSearchPostcode: PropTypes.func.isRequired
};

export default MapSearch;
