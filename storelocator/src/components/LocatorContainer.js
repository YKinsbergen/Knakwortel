import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Results from './Results';
import MapSearch from './MapSearch';
import MyMap from './MyMap';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions';

class LocatorContainer extends Component {
  componentWillMount() {
    if (!this.props.storesFound[0]) this.props.actions.fetchStores()
    return
  }

  render() {
    const markers = this.props.storesFound.map((store) => {
      return {
        storeName: store.storeName,
        position: [store.latitude, store.longitude],
        mapUrl: store.mapUrl
      }
    })

    const resultInfos = this.props.storesFound.map((store) => {
      return Object.assign({}, store, )
    })

    console.log("resultInfos", resultInfos)
    
    return (
      <div>
        <MapSearch onSearchPostcode={this.props.actions.fetchStores} 
        loadStoresByPostcode={this.props.actions.loadStoresByPostcode}/>
        <button className="btn btn-secondary btn-block mb-4 hidden-sm-up">Bekijk kaart</button>
        {resultInfos.length > 0 ? <Results resultInfos={resultInfos} /> : 'Niets gevonden'}
        <MyMap markers={markers} />
      </div>
    );
  }
}

LocatorContainer.propTypes = {
  storesFound: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = (state, props) => {
  return {
    storesFound: state.storesFound
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LocatorContainer);
