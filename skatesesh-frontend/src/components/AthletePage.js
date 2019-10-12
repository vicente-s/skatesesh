import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import instagram_icon from '../instagram_icon.png'

export default class AthletePage extends Component {
  render() {
    return (
      <div className="athlete-info-page">
        <div className="athlete-info">
          <div className="athlete-social-card container">
            Social Card
            <div className="row">
              <Link to="" className="btn btn-info col"> <img src={instagram_icon} className="social-icon"/></Link>
            </div>
            <button onClick={console.log("add to favorites")} className="btn btn-info col">Save to Favorites</button>
          </div>
          <div className="athlete-info-description">
            <h1>{this.props.athlete.first_name}</h1>
            <h2>Stance: {this.props.athlete.stance}</h2>
            <h2>Sponsors: {this.props.athlete.sponsors}</h2>
          </div>
        </div>
        <div className="athlete-video-parts">
          Sorry, No Videos
        </div>
      </div>
    )
  }
}
