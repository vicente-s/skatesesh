import React, { Component } from 'react'
import Map from './Map'
import SkateSpotInfo from './SkateSpotInfo'




class SkateSection extends Component {
  render() {
    return (
      <div className="SkateSection container">
        <div className="row">
            <Map userLocation={this.props.userLocation}/>
          <SkateSpotInfo />
        </div>
      </div>
    )
  }
}

export default SkateSection
