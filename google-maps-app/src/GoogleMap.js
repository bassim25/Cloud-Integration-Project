// GoogleMap.js
import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '600px',
  height: '400px',
};

const center = {
  lat: -34.397,
  lng: 150.644,
};

const GoogleMapComponent = () => {
  return (
    <LoadScript googleMapsApiKey="https://maps.googleapis.com/maps/api/js?key=&callback=initMap">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      />
    </LoadScript>
  );
};

export default GoogleMapComponent;
