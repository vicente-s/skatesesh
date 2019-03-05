import React, { Component } from 'react'
import SkateSection from './SkateSection'

class Profile extends Component {
  state = {
    currentPosition: {
      lat: "",
      lng: ""
    },
    skateSpots: []
    };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState( {
        currentPosition: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      })
    })
    this.getSkateParks()
  };

getSkateParks() {
  fetch('http://localhost:3000/search', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(this.state.currentPosition)
  }).then(resp => resp.json())
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
          </div>
        </div>
        <SkateSection userLocation={this.state.currentPosition}/>
      </div>
    )
  }
}

export default Profile
