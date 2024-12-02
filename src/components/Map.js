import React from "react"
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps"

const geoUrl =
  "https://code.highcharts.com/mapdata/custom/world-continents.topo.json"

function Map(coords) {
  return (
    <ComposableMap
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
        <circle r={3} fill="#0000ff" />
      </Marker>
    </ComposableMap>
  )
}

export default Map;


