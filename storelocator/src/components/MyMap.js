import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MyMap.css';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet'

class MyMap extends Component {
  render() {
    const center = [52, 5];
    const zoom = 7;
    const {markers} = this.props;
    
    const latLngList = markers.map((marker) => {
      return marker.position
    })

    let mapSettings = {
      center,
      zoom,
      useFlyTo: true
    }

    if (latLngList.length > 0) {
      mapSettings.bounds = latLngList;
    }

    const wortelImage = L.icon({
      iconUrl: require('../images/wortel-icon.png'),
      iconSize: [23, 45],
      iconAnchor: [12, 22],
      popupAnchor: [-3, -76],
      shadowUrl: require('../images/wortel-shadow.png'),
      shadowSize: [30, 41 ],
      shadowAnchor: [3, 17]
  });

    const map = (
      <Map {...mapSettings}>
        <TileLayer
          url='https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
        />
        {markers.map((marker, idx) =>
          <Marker key={`marker-${idx}`} position={marker.position} icon={wortelImage}>
            <Popup>
              <div>
              <a target="_blank" href={ marker.mapUrl } className="popup-link"><h6>{ marker.storeName }</h6></a>
              </div>
            </Popup>
          </Marker>
        )}
        {console.log(markers)}
      </Map>
    );

    return (
      map
    );
  }
}

MyMap.propTypes = {
  markers: PropTypes.array.isRequired
};

export default MyMap;
