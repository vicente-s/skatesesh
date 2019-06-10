import React, {Component} from 'react'
import SavedSkateSpot from './SavedSkateSpot'

class SavedSkateSpots extends React.Component {
  render() {
    console.log(this.props.savedSkateSpots)
    let savedSkateSpots = this.props.savedSkateSpots.map(savedSkateSpot => <SavedSkateSpot savedSkateSpot={savedSkateSpot}/>)
    return  (
      <div className='savedSkateSpots'>
        {savedSkateSpots}
      </div>
    );
  }
}

export default SavedSkateSpots
