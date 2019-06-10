import React, {Component} from 'react'

class SavedSkateSpot extends React.Component {
  render() {
    return (
      <div className="SavedSkateSpot">
        {this.props.savedSkateSpot.name}
        <hr/>
        <button type="button" className="btn btn-danger btn-sm" onClick={() => this.props.removeSkateSpot(this.props.savedSkateSpot)}>Remove</button>
      </div>
    )
  }
}

export default SavedSkateSpot
