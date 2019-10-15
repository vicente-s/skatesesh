import React, { Component } from 'react'
import SavedSkateSpots from './SavedSkateSpots'

class Profile extends Component {
    state = {
      currentLocation: {},
      skateSpots: [],
      selectedSkateSpot: {},
      savedSkateSpots: [],
    }

    componentWillMount() {
      navigator.geolocation.getCurrentPosition((position) => {
        this.setState({
          currentLocation: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
        });
        fetch('http://localhost:3000/search', {
          method: "POST",
          headers: {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json'
          },
          body: JSON.stringify({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          })
        }).then(resp => resp.json())
          .then(json => this.setState({
            skateSpots: json
          }))
        })
    }

  selectSkateSpot = (skateSpot) => {
    this.setState({
      selectedSkateSpot: skateSpot
    })
  };

  saveSkateSpot = (skateSpot) => {
    this.setState({
      savedSkateSpots: [...this.state.savedSkateSpots, skateSpot]
    })
  };

  removeSkateSpot = (skateSpot) => {
    this.setState({
      savedSkateSpots: [...this.state.savedSkateSpots.filter(spot => spot !== skateSpot)]
    })
  }

  logOut() {
    localStorage.clear()
    window.location.href = 'http://localhost:3001'
  }
  render() {
    console.log(this.props)
    return (
      <div>
        
      </div>
    )
  }
}

export default Profile
