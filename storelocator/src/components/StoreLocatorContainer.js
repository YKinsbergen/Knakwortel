import React, { Component } from 'react';

import SearchResult from './SearchResult';
import SearchField from './SearchField';
import MapView from './MapView';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/stores';

class StoreLocatorContainer extends Component {
  render() {
    
    console.log(this.props)
    const markers = () => {       
        return {
            storeName: 'Appie',
            position: [52.3702157, 4.8951679]
        }
    }
    // = this.props.storesFound.map((store) => {
    //   return {
    //     storeName: store.name,
    //     position: [store.latitude, store.longitude]
    //   }
    // })

    const results = []
    // this.props.storesFound.map((store) => {
    //   return Object.assign({}, store)
    // })

    console.log("results", results)

    return (
      <div>
        <p>Mooie map hier</p>
        <SearchField  />
        <button className="btn btn-secondary btn-block mb-4 hidden-sm-up">View Map</button>
        {results.length > 0 ? <SearchResult results={results} /> : 'No results'}
        <MapView markers={markers} /> */}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    results: state.storesFound
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StoreLocatorContainer);


// Dit stond in SearchField: onSearchPostcode={this.props.actions.getStores}