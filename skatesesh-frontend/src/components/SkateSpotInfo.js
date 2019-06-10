import React, {Component} from 'react'

class SkateSpotInfo extends React.Component {

    render() {
      return (
        <div className="SkateSpotInfo container-fluid shadow-sm p-3 mb-5 bg-white rounded">
          <h2>Info</h2>
          <hr />
          <h2>Name:</h2>
          {this.props.selectedSkateSpot.name}
          <h2>Rating:</h2>
          {this.props.selectedSkateSpot.rating}
          <h2>Vicinity:</h2>
          {this.props.selectedSkateSpot.vicinity}
          <hr/>
          <button className="btn btn-block btn-primary" onClick={() => this.props.saveSkateSpot(this.props.selectedSkateSpot)}>Save</button>
        </div>
      )
    }
}

export default SkateSpotInfo
