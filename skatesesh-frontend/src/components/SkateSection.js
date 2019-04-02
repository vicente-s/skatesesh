import React, { Component } from 'react'
import Map from './Map'
import SkateSpotInfo from './SkateSpotInfo'




class SkateSection extends Component {

  render() {

    return (
      <div className="SkateSection container-fluid">
        <div className="row">
            <div className="col">
            <Map userLocation={this.props.userLocation} skateSpots={this.props.skateSpots} selectSkateSpot={this.props.selectSkateSpot} selectedSkateSpot={this.props.selectedSkateSpot}/>
            </div>
            <div className="col">
          <SkateSpotInfo selectedSkateSpot={this.props.selectedSkateSpot}/>
            </div>
        </div>
      </div>
    )
  }
}

export default SkateSection
