import React from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import './Map.css';

const geoUrl =
  "https://code.highcharts.com/mapdata/custom/world-continents.topo.json"

function Map(coords) {
  return (
    <ComposableMap
        className="Map"
        projection="geoEqualEarth"
        projectionConfig={{
            rotate: [0, 0, 0],
            center: [0, 0],
            scale: 150,
        }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Marker coordinates={[coords.long, coords.lat]}>
        <circle r={5} fill="#FC3D21" />
      </Marker>
    </ComposableMap>
  )
}

export default Map;


