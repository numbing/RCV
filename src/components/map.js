import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap defaultZoom={10} defaultCenter={{ lat: 52.52437, lng: 13.41053 }}>
    <Marker position={{ lng: 13.496125, lat: 52.557568 }} onClick={e => props.onMarkerClick(1)} />
    <Marker position={{ lng: 13.19083257, lat: 52.53416453 }} onClick={e => props.onMarkerClick(2)} />
    <Marker position={{ lng: 13.06566, lat: 52.39886 }} onClick={e => props.onMarkerClick(3)} />
  </GoogleMap>
));


export default MapComponent;
