import React, { Component } from 'react';
import './MapView.css';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

class MapView extends Component {
  render() {
    const center = [54, -4];
    const zoom = 6;
    // let {markers} = this.props;
    const markers = [
         {
          storeName: 'Appie',
          type: 'Point',
          position: [parseFloat(52.3702157), parseFloat(4.8951679)]
         },
          {
          storeName: 'Appie',
          position: [52.3702157, 4.8951679]
          }
    ]          
   
    const latLngList = markers.map((marker) => {
       return marker.position
     })

     console.log(latLngList)
    
    let mapSettings = {
      center,
      zoom,
      useFlyTo: true
    }

    if (latLngList.length > 0) {
      mapSettings.bounds = latLngList;
    }

    const map = (
      <Map {...mapSettings}>
        <TileLayer
          url='https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
        />
        {markers.map((marker, idx) =>
          <Marker key={`marker-${idx}`} position={marker.position}>
            <Popup>
              <h6>{ marker.storeName }</h6>
            </Popup>
          </Marker>
        )}
      </Map>
    );

    return (
      map
    );
  }
}

export default MapView;