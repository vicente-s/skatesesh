import React, {Component} from 'react'
import { Link } from 'react-router-dom'

export default class AthleteCard extends Component {
  render() {
    return (
          <div className="athlete-card card col-2 mb-3 ml-4">
            <img src={this.props.athlete.img} className="card-img-top" alt="..."/>
            <hr/>
            {this.props.athlete.first_name} {this.props.athlete.last_name}
            <hr/>
            <Link to={`athletes/${this.props.athlete.id}`} className="btn btn-info" onClick={() => console.log("Sddd")}> More info </Link>
          </div>
    )
  }
}
