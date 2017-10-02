import React, { Component } from 'react';
import MapboxGL from 'mapbox-gl/dist/mapbox-gl.js';
import styled from 'styled-components';

const style = {
  width: '100vw',
  height: '100vh'
};

MapboxGL.accessToken =
  'pk.eyJ1Ijoia3Jpc2huYXh2IiwiYSI6ImNqODh2ejViaTFuYTIzM3IzcHF2b3ZmY2YifQ._QRQPfgyz3tQp1Fap-0LBg';

class Main extends Component {
  componentDidMount() {
    const mapRef = new MapboxGL.Map({
      container: this.map,
      style: 'mapbox://styles/mapbox/streets-v10'
    });
  }

  render() {
    return (
      <div
        style={style}
        ref={map => {
          this.map = map;
        }}
      />
    );
  }
}

export default Main;
