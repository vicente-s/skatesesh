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
    console.log(this.state.currentPosition)
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
    return (
      <div>
        <div className="UserSection">
          <img className="UserImage"/>
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
