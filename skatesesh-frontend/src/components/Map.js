import React, { Component } from 'react'
import { GoogleMap, withGoogleMap,} from 'react-google-maps'
import SkateSpotMarker from './SkateSpotMarker'

class Map extends Component {
  render() {

    const markers = this.props.skateSpots.map(skatespot => <SkateSpotMarker skateSpot={skatespot} selectSkateSpot={this.props.selectSkateSpot}/>)

    const SkateMap = withGoogleMap(props => (
      <GoogleMap className="skateMap"
        defaultCenter = { this.props.userLocation }
        defaultZoom = { 13 }>
        {markers}
      </GoogleMap>
    ))

    return (
      <SkateMap
        containerElement={ <div style={{ height: `500px`, width: '500px' }} /> }
        mapElement={ <div style={{ height: `100%` }} /> } />
      )

  }
}

export default Map
