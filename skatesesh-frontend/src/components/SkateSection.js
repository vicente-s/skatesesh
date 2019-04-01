import React, { Component } from 'react'
import Map from './Map'
import SkateSpotInfo from './SkateSpotInfo'




class SkateSection extends Component {
  render() {
    return (
      <div className="SkateSection container-fluid">
        <div className="row">
            <Map userLocation={this.props.userLocation}/>
            <div className="col">
          <SkateSpotInfo />
            </div>
        </div>
      </div>
    )
  }
}

export default SkateSection
