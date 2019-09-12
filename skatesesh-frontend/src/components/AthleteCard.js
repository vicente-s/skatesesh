import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import AthleteInfoPage from './AthleteInfoPage'

export default class AthleteCard extends Component {
  render() {
    console.log(this.props)
    return (
          <div className="card col-2 mb-3 ml-4">
            <img src={this.props.athlete.img} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{this.props.athlete.first_name} {this.props.athlete.last_name}</h5>
              <Link to="athletes/1" className="btn btn-info"> More info </Link>
            </div>
          </div>
    )
  }
}
