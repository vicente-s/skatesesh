import React, {Component} from 'react'

class SavedSkateSpot extends React.Component {
  render() {
    return (
      <div className="SavedSkateSpot">
        {this.props.savedSkateSpot.name}
      </div>
    )
  }
}

export default SavedSkateSpot
