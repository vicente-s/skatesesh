import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import instagram_icon from '../instagram_icon.png'
import website_icon from '../website_icon.jpg'
import twitter_icon from '../twitter_icon.png'

export default class SponsorPage extends Component {

  render() {
    console.log("reached")
    return (
      <div className="sponsor-info-page">
        <div className="athlete-info">
          <div className="athlete-social-card container">
            <img className="card-img-top"src={this.props.sponsor.img} />
            <br/>
            <br/>
            <div className="row">
              <Link to="" className="btn-info col"> <img src={instagram_icon} className="social-icon"/></Link>
              <Link to={this.props.sponsor.website} className="btn-info col"> <img src={website_icon} className="social-icon"/></Link>
              <Link to={this.props.sponsor.website} className="btn-info col"> <img src={twitter_icon} className="social-icon"/></Link>
            </div>
            <br/>
            {/* <button onClick={console.log("add to favorites")} className="btn btn-info">Save to Favorites</button> */}
          </div>
          <div className="athlete-info-description">
            <h1>{this.props.sponsor.name}'s Videos</h1><br/>
          </div>
        </div>
        <div className="athlete-video-parts">
          Sorry, No Athletes
        </div>
      </div>
    )
  }
}
