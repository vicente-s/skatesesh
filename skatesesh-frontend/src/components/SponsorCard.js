import React, {Component} from 'react'
import { Link } from 'react-router-dom'

export default class SponsorCard extends Component {
  render() {
    return (
        <div className="col-4">
          <div className="card bg-dark text-white mb-3 athlete-card">
            <img src={this.props.sponsor.img} className="card-img" alt="..."/>
            <Link to="sponsors/nike-sb" className="btn btn-info"> More info </Link>
          </div>
        </div>
    )
  }
}
