import React, {Component} from 'react'

class SkateSpotInfo extends Component {

    render() {
      return (
        <div className="SkateSpotInfo container shadow-sm p-3 mb-5 bg-white rounded">
          <h2>SkateSpot</h2>
          <hr />
          <br/>
          <h2>Name:</h2>
          {this.props.selectedSkateSpot.name}
          <h2>Rating:</h2>
          {this.props.selectedSkateSpot.rating}
          <h2>Vicinity:</h2>
          {this.props.selectedSkateSpot.vicinity}
          <button className="btn btn-block btn-primary">Save</button>
        </div>
      )
    }
}

export default SkateSpotInfo
