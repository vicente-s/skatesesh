import React, { Component } from 'react'
import SkateSection from './SkateSection'

class Profile extends Component {
  state = {
    currentLocation: {},
    skateSpots: [],
    selectedSkateSpot: {}
    }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        currentLocation: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      })
      fetch('http://localhost:3000/search', {
        method: "POST",
        headers: {
          'Content-Type' : 'application/json',
          'Accept' : 'application/json'
        },
        body: JSON.stringify(this.state.currentLocation)
      }).then(resp => resp.json())
        .then(json => this.setState({
          skateSpots: json
        }))
    })

  }

  selectSkateSpot = (skateSpot) => {
    this.setState({
      selectedSkateSpot : skateSpot
    })
  }

  render() {

    return (
      <div>
        <div className="navbar">
          <button className="navbarButton btn-default"> Log Out </button>
        </div>
          <div className="SkateSpotsContainer inline-block shadow-sm p-3 mb-5 bg-white rounded">
            No Spots
          </div>
        <SkateSection userLocation={this.state.currentLocation} skateSpots={this.state.skateSpots} selectSkateSpot={this.selectSkateSpot} selectedSkateSpot={this.state.selectedSkateSpot}/>
      </div>
    )
  }
}

export default Profile
