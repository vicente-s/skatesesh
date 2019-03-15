import React, { Component } from 'react'
import SkateSection from './SkateSection'

class Profile extends Component {
  state = {
    currentPosition: {},
    skateSpots: []
    }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        currentPosition: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
          }
      })
    })
    this.getSkateParks()
  }

  getSkateParks = () => {
  // fetch here with currentPosition
  // post to backend /search
  fetch('http://localhost:3000/search', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(this.state.currentPosition)
  })
  .then(res => res.json())
  .then(json => this.setState({
    skateSpots: json
  }))
}

  render() {
    {this.getSkateParks()}
    return (
      <div>
        <div className="UserSection">
          <img className="UserImage" alt= "User Image" />
          <div className="UserSkateSpots">
            No Saved SkateSpots
          </div>
        </div>
        <SkateSection userLocation={this.state.currentPosition}/>
      </div>
    )
  }
}

export default Profile
