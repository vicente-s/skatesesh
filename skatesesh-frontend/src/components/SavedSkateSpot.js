import React, {Component} from 'react'

class SavedSkateSpot extends React.Component {
  render() {
     console.log(this.props.savedSkateSpot)
    return (
      <div className="SavedSkateSpot">
        {this.props.savedSkateSpot}
      </div>
    )
  }
}

export default SavedSkateSpot
