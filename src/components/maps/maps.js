import React, { Component } from 'react';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import { transform } from 'ol/proj';

const styles = {
  map: {
    width: '100%',
    height: window.innerHeight - 130,
  },
};
class MapPanel extends Component {
  componentDidMount() {
    this.startMap();
  }

  loadTilesLayer = () =>
    new TileLayer({
      source: new OSM(),
    });

  startMap() {
    this.map = new Map({
      target: 'map',
      layers: [this.loadTilesLayer()],
      view: new View({
        center: transform([-40.0, -15.1], 'EPSG:4326', 'EPSG:3857'),
        zoom: 1,
      }),
    });
  }

  render() {
    return <div id="map" style={styles.map} />;
  }
}

export default MapPanel;
