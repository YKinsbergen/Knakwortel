
import React, { Component } from 'react';

class SearchField extends Component {
  onFindStoresClick = () => {
    this.props.onSearchPostcode("2033WJ");
  }

  render() {
    return (
      <div className="form-inline search-form">
        <label className="sr-only" htmlFor="search-box">Postcode</label>
        <input type="text" id="search-box" className="search-box form-control mr-2 mb-4" placeholder="Postcode" />
        <button className="btn btn-primary mr-2 mb-4" onClick={this.onFindStoresClick}>Find stores</button>
        <button className="btn btn-primary mb-4">Near me</button>
      </div>
    );
  }
}



export default SearchField;