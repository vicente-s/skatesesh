import React, { Component } from 'react'
import { GoogleMap, withGoogleMap } from 'react-google-maps'

class Map extends Component {
  render() {

    const SkateMap = withGoogleMap(props => (
      <GoogleMap 
        defaultCenter = { this.props.userLocation }
        defaultZoom = { 13 }
        >
        insert markers here!
      </GoogleMap>
    ))
    return <SkateMap
    containerElement={ <div style={{ height: `500px`, width: '500px' }} /> }
    mapElement={ <div style={{ height: `100%` }} /> }
    />

  }
}

export default Map
