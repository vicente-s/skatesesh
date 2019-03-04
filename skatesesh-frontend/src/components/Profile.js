import React, { Component } from 'react'
import SkateSection from './SkateSection'

class Profile extends Component {
  state = {
  currentPosition: {
    lat: "",
    lng: ""
      }
}

componentDidMount() {
  navigator.geolocation.getCurrentPosition((position) => {
    this.setState( {
      currentPosition: {
        lat: position.coords.latitude,
        lng: position.coords.longitude
        }
    })
  })
  console.log(this.state.currentPosition)
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
