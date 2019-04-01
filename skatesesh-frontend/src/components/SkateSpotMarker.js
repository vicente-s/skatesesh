import React from 'react'
import {Marker} from 'react-google-maps'

class SkateSpotMarker extends React.Component {
  render() {
    return (
        <Marker position={this.props.location} onClick={console.log("som")} skateSpot={this.props.skateSpot}>
        </Marker>
    )
  }
}

export default SkateSpotMarker
