import React from 'react'
import {Marker} from 'react-google-maps'

class SkateSpotMarker extends Marker {
  render() {
    return (
        <Marker position={this.props.skateSpot.location} onClick={() => this.props.selectSkateSpot(this.props.skateSpot)} skatespot={this.props.skateSpot}>
        </Marker>
    )
  }
}

export default SkateSpotMarker
