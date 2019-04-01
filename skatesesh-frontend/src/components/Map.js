import React, { Component } from 'react'
import { GoogleMap, withGoogleMap, withScriptjs } from 'react-google-maps'
import SkateSpotMarker from './SkateSpotMarker'

class Map extends Component {
  render() {

    let markers = this.props.skateSpots.map(skatespot => <SkateSpotMarker location={skatespot.location} selectSkateSpot={this.props.selectSkateSpot}/>)
    const SkateMap = withGoogleMap(props => (
      <GoogleMap className= "SkateMap"
        defaultCenter = { this.props.userLocation }
        defaultZoom = { 13 } >
        {markers}
      </GoogleMap>
    ))
    return <SkateMap
    containerElement={ <div style={{ height: `500px`, width: '500px' }} /> }
    mapElement={ <div style={{ height: `100%` }} /> }
    />

  }
}

export default Map
