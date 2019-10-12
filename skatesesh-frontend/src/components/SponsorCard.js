import React, {Component} from 'react'
import { Link, Route } from 'react-router-dom'



export default class SponsorCard extends Component {
  render() {
    return (
        <div className="col-4">
          <div className="card bg-dark text-white mb-3">
            <img src={this.props.sponsor.img} className="card-img" alt="..."/>
            <Link to={`/sponsors/${this.props.sponsor.id}`} className="btn btn-info more-info-button"> More info </Link>
          </div>
        </div>
    )
  }
}
