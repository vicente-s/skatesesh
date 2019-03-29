import React, { Component } from 'react'
import SkateSection from './SkateSection'

class Profile extends Component {
  state = {
    currentLocation: {},
    skateSpots: []
    }

componentWillMount() {
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
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        })
      })
    })

  }



  render() {
    return (

      <div>
        <div className="navbar">
          <button> Log Out </button>
        </div>
          <div className="container SkateSpotsContainer">

          </div>
        <hr />
        <SkateSection userLocation={this.state.currentPosition}/>
      </div>
    )
  }
}

export default Profile
