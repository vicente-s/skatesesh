import React, { Component } from 'react'
import Map from './Map'
import SkateSpotInfo from './SkateSpotInfo'


class SkateSection extends Component {
  render() {
    return (
      <div className="SkateSection">
        <div className="SkateMap">
        <Map userLocation={this.props.userLocation}/>
        </div>
        <SkateSpotInfo />
      </div>
    )
  }
}

export default SkateSection
