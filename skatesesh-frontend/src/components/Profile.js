import React, { Component } from 'react'
import SkateSection from './SkateSection'
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

  selectSkateSpot = (skateSpot) =>{
    this.setState({
      selectedSkateSpot: skateSpot
    })
  };

  saveSkateSpot = (skateSpot) => {
    this.setState({
      savedSkateSpots: [...this.state.savedSkateSpots, skateSpot]
    })
  };

  render() {

    return (
      <div>
        <navbar className='navbar'>
          LogOut
        </navbar>
        <SavedSkateSpots savedSkateSpots={this.state.savedSkateSpots}/>
        <img className='profilePicture'/>
        <hr/>
        <SkateSection userLocation={this.state.currentLocation} skateSpots={this.state.skateSpots} selectSkateSpot={this.selectSkateSpot} selectedSkateSpot={this.state.selectedSkateSpot} saveSkateSpot={this.saveSkateSpot}/>
      </div>
    )
  }
}

export default Profile
