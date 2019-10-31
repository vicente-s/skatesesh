import React, {Component} from 'react'
import { Link, Route } from 'react-router-dom'



export default class SponsorCard extends Component {
  render() {
    return (
          <div className="sponsor-card col-4 mb-4">
            <img src={this.props.sponsor.img} className="card-img" alt={this.props.sponsor.name}/>
          </div>
    )
  }
}
